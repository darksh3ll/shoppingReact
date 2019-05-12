import React, {Component} from 'react';
import {Button} from 'reactstrap';
import {products} from '../../data'
import Navigation from "../Navigation/Navigation";
import "./Home.css"
import ListProducts from "../../component/ListProducts";

const DataContext = React.createContext();

class Home extends Component {

    state = {
        products: products,  //import fake api du fichier data.js
        panier: []
    };
    addPanier = (product) => {
        this.setState({panier: [...this.state.panier, product]})
    };

    handTest = (product) => {
        console.log(product)
    };
    
    render() {
        console.log(this.props)
        return (
            <DataContext.Provider
                value={{state: this.state}}
            >
                <Navigation onClick={(product) => this.handTest(product)}  />
                {this.renderListProducts()}


            </DataContext.Provider>
        );
    }

    renderListProducts = () => (
        <div className="mapList">
            {
                this.state.products.map((product, index) => {
                    return (
                        <div key={index}>
                            <ListProducts
                                img={product.img}
                                title={product.title}
                                description={product.description}
                                price={product.price}
                            />
                            <Button onClick={() => this.addPanier(product)} color="link">Ajouter au panier</Button>
                        </div>
                    )
                })
            }

        </div>

    );


}

export {DataContext}
export default Home;