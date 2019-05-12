import React, {Component} from 'react';
import './navigation.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {DataContext} from "../Home/Home";
import ListProducts from "../../component/ListProducts";

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    render() {
        let {panier,onClick} = this.props;
        return (
            <DataContext.Consumer>
                { context => (
                    <div className="navigation">
                        <span className="white"><i className="fas fa-shopping-cart"></i></span>
                        <h4 className="white">{context.state.panier.length}</h4>
                        <Button color="danger" onClick={this.toggle}>Voir la panier</Button>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                            <ModalBody>
                                {
                                    context.state.panier.map((product,index) => {
                                        return (
                                            <div key={index}>
                                                <ListProducts
                                                    img={product.img}
                                                    title={product.title}
                                                    description={product.description}
                                                    price={product.price}
                                                />
                                                <button onClick={() => onClick(product)}>supprimer</button>
                                            </div>
                                        )
                                    })
                                }
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.toggle}>Passer commande</Button>{' '}
                            </ModalFooter>
                        </Modal>
                    </div>

                    )
                }
            </DataContext.Consumer>
        );
    }
}


export default  Navigation;
