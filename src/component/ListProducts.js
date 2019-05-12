import React from 'react';
import {Table} from 'reactstrap';

const ListProducts = ({title,description,price,img}) => {
    return (
        <Table>
            <tbody>
            <tr>
                <td><img src={img} alt="" width="50"/></td>
                <td>{title}</td>
                <td>{description}</td>
                <td>{price}</td>
            </tr>
            </tbody>
        </Table>

    );
};

export default ListProducts;
