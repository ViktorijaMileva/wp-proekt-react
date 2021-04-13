import React from 'react';
import '../style/Food.css';


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
                "Content-type": "application/json"
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

          
            <div className= "table-div">
            <table className="table table-striped">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Description</th>
              <th scope="col">Gender</th>
              <th scope="col">Breed</th>
              <th scope="col">Image</th>
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