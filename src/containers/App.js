import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';
import "./App.css" ;
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {
    constructor(){
        super()
        this.state= {
            robots: [] ,
            searchField: ""
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(responce => responce.json())
        .then(users => this.setState({robots: users}))
    }

    search =(event) => {
        this.setState({ searchField: event.target.value})
        
    }
    render(){

        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return (
            <>
                <div className = "tc">
                    <h1 className='title'>RoboFriends</h1>
                    <SearchBar search = {this.search}/>
                    <ErrorBoundry>
                        <CardList robots = {filteredRobots}/>
                    </ErrorBoundry>
                </div>
            </>
        )
    }
}
    
export default App;