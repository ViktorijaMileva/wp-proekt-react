import React from 'react';
import '../style/Food.css';
import AnimalPhotoSlider from '../sliders/AnimalsPhotoSlider.js';
import {AnimalSliderData} from '../sliders/AnimalSliderData.js';


class Animal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            animals: []
        };
    }

    componentDidMount(){
    
        fetch("/animals", {
            headers: {
                "Content-type": "application/json",
                "Authorization": localStorage.getItem("token")
            }
        })
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
        
        console.log(items);
        return(

            <div>
            <div className= "table-div">
            <table className="table table-striped">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Description</th>
              <th scope="col">Gender</th>
              <th scope="col">Breed</th>
            </tr>
            
            {items.map(item => <tr>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.description}</td>
                <td>{item.gender}</td>
                <td>{item.breed.breedName}</td>
            </tr>)}
        
          </table>
          </div>
          <div className="slider-name">
              <h2>Puppies photos</h2>
          </div>

          <div className="animals-slider">
          <AnimalPhotoSlider slides={AnimalSliderData} />
          </div>
          
          
          </div>

          
        
            
        )
    }
}
export default Animal;