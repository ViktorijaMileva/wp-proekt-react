import React from 'react';

class Food extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            food: []
        };
    }

    componentDidMount(){

        fetch("/food")
            .then(response => response.json())
            .then(result => {
                this.setState({food: result})
            })
            .catch(e => {
                console.log(e);
                this.setState({...this.state});
            }); 
    }

    render(){
        const items = this.state.food
        console.log(items);
        return(
            <div className= "table-div">
            <table className="tableFood">
            <tr>
              <th>Food</th>
              <th>Intended for</th>
              <th>Quantity</th>
              <th>Description</th>
              <th>Breed</th>
              <th>Image</th>
            </tr>
            
            {items.map(item => <tr>
                <td>{item.foodType}</td>
                <td>{item.intendedFor}</td>
                <td>{item.quantity}</td>
                <td>{item.description}</td>
                <td>{item.breedList}</td>
                <td>{item.image}</td>
            </tr>)}

            
          </table>
          </div>
        )
    }
}
export default Food;