import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Food from './Food.js'; 
import '../style/Food.css';
import poodlePuppy from '../photos/poodle-puppy.jpg';
import pinscherPuppy from '../photos/pinscher-puppy.jpg';

class Animal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            animals: []
        };
    }

    componentDidMount(){
        
        fetch("/animals")
            .then(response => response.json())
            .then(result => {
                this.setState({animals: result})
            })
            .catch(e => {
                console.log(e);
                this.setState({...this.state});
            }); 
    }

    render(){
        
        const items = this.state.animals;
       // var x = [1,2,3,4];
        
        // function soberi(currentValue) {
        //    return  currentValue;
        // }
        // function dodaj1( promenliva){
        //    return promenliva+=1;
        // }  
        // (promenliva) => {  promenliva+=1  }
        // x.map( (promenliva) => { return promenliva+=1} )
        
        console.log(items);
        return(

            //{items.map((x) => <li> {x.name} {x.age} {x.description} {x.gender} {x.image} </li>)}
          
            <div className= "table-div">
            <table className="tableAnimals">
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Description</th>
              <th>Gender</th>
              <th>Breed</th>
              <th>Image</th>
            </tr>
            
            {items.map(item => <tr>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.description}</td>
                <td>{item.gender}</td>
                <td>{item.breed.breedName}</td>
                <td>{item.image}</td>
            </tr>)}
            
              
        
            
          </table>
          
          </div>
        
            
        )
    }
}
export default Animal;