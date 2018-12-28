import React from "react";
// import { Link } from "react-router-dom";
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import axios from 'axios';
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
        this.setStateValue = this.setStateValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    setStateValue(event) {
        let setObj = {};
        setObj[event.target.name] = event.target.value;
        console.log(event.target.value, event.target.name, setObj);
        this.setState(setObj);
    };

    handleSubmit(event) {
        console.log(event);
        event.preventDefault();
        axios.post('/products/add', this.state).then((result) => {
            console.log("result",result);
        });
        
    };

    render() {
        return (
            <div className="container">
                <div className="col-xl-3 col-md-4 col-sm-6">
                    <form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <ControlLabel>Product Name</ControlLabel>
                            <FormControl type="text" name="productName" onInput={this.setStateValue} value={this.state.productName} placeholder="Product Name"></FormControl>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Product Description</ControlLabel>
                            <FormControl type="text" name="productDescription" onInput={this.setStateValue} value={this.state.productDescription} placeholder="Product Description"></FormControl>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Product Image</ControlLabel>
                            <FormControl type="file" name="productImage" onChange={this.setStateValue} value={this.state.productImage} placeholder="Product Image"></FormControl>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Unit Weight</ControlLabel>
                            <FormControl type="number" name="unitWeight" onInput={this.setStateValue} value={this.state.unitWeight} placeholder="Unit Weight"></FormControl>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Unit Price</ControlLabel>
                            <FormControl type="number" name="unitPrice" onInput={this.setStateValue} value={this.state.unitPrice} placeholder="Unit Price"></FormControl>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Effective Date</ControlLabel>
                            <FormControl type="date" name="effectiveDate" onInput={this.setStateValue} value={this.state.effectiveDate} placeholder="Effective Date"></FormControl>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Effective Date</ControlLabel>
                            <FormControl type="submit" name="formSubmit" placeholder="Effective Date" value="Sumbit"></FormControl>
                        </FormGroup>
                    </form>
                </div>
            </div>
        );
    };
}