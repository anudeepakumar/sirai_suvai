import React from "react";
// import { Link } from "react-router-dom";
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
// import { Header } from "../components/header";

export class Newproduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: '',
            productDescription: '',
            productImage: '',
            unitWeight: 1,
            unitPrice: 2,
            effectiveDate: '2018-08-20'
        };

        // bind this to other functions
        this.setProductName = this.setProductName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    setProductName(event) {
        console.log(event.target);
        this.setState({productName:event.target.value});
    };
    handleSubmit(event) {
        console.log(event);
        event.preventDefault();
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <ControlLabel>Product Name</ControlLabel>
                    <FormControl type="text" name="productName" onInput={this.setProductName.bind(this)} value={this.state.productName} placeholder="Product Name"></FormControl>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Product Description</ControlLabel>
                    <FormControl type="text" name="productDescription" value={this.state.productDescription} placeholder="Product Description"></FormControl>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Product Image</ControlLabel>
                    <FormControl type="file" name="productImage" value={this.state.productImage} placeholder="Product Image"></FormControl>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Unit Weight</ControlLabel>
                    <FormControl type="number" name="unitWeight" value={this.state.unitWeight} placeholder="Unit Weight"></FormControl>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Unit Price</ControlLabel>
                    <FormControl type="number" name="unitPrice" value={this.state.unitPrice} placeholder="Unit Price"></FormControl>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Effective Date</ControlLabel>
                    <FormControl type="date" name="effectiveDate" value={this.state.effectiveDate} placeholder="Effective Date"></FormControl>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Effective Date</ControlLabel>
                    <FormControl type="submit" name="formSubmit" placeholder="Effective Date"></FormControl>
                </FormGroup>
            </form>
        );
    };
}