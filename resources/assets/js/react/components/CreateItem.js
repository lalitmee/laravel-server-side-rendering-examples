// CreateItem.js

import React, { Component } from 'react';
import { Router, Link } from 'react-router-dom';
import {
    Item,
    Card,
    Image,
    Message,
    Header,
    Button,
    Container,
    Segment,
    Label,
    Icon,
    Grid,
} from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

class CreateItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: [],
        };
    }

    componentDidMount() {
        fetch('http://localhost:8000/go', {
            // mode: 'no-cors',
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(response => {
                this.setState({
                    image: response, //JSON.parse(response)
                });
                // console.log(this.state.image.canApprove);
                //console.log(image);
                //console.log(this.state.image); // returns empty string
                //console.log(JSON.stringify(this.state.image));
            })
            .catch(error => {
                console.log('request failed', error);
            });
    }

    render() {
        if (this.state.image.length === 0) {
            return null;
        }

        const images = this.state.image.map((item, i) => (
            <Card key={item.id}>
                <Image size="huge" src={item.URL} />
                <Card.Content>
                    <Card.Header>{item.name}</Card.Header>
                    <Card.Description>{item.description}</Card.Description>
                </Card.Content>
            </Card>
        ));

        return (
            <Container>
                <Link to="/react/packages/:type"> Packages </Link>
                <h1>Image List</h1>

                <Grid.Row>{images}</Grid.Row>
            </Container>
        );
    }
}

export default CreateItem;
