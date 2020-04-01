import React, { useState, useEffect, Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Container from '../components/Container';
import Row from '../components/Row';
import Column from '../components/Column';
import Card from '../components/Card';
import { searchGooleBooks, saveBook, getSavedBooks } from '../utils/API'

class Search extends Component {
    state = {
        searchTerm: '',
        bookList: [],
        savedBookIds: [],
        error: null
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault()

        if(this.state.searchTerm ===''){
            return this.setState({error: 'Please put in a title'})
        }
    }
    









}