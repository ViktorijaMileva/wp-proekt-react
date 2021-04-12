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
            <div>
            <div className= "table-div">
            <table className="table table-striped">
            <tr>
              <th scope="col">Food</th>
              <th scope="col">Intended for</th>
              <th scope="col">Quantity</th>
              <th scope="col">Description</th>
              <th scope="col">Intended For</th>
              <th scope="col">Image</th>
            </tr>
            
            {items.map(item => <tr>
                <td>{item.foodType}</td>
                <td>{item.intendedFor}</td>
                <td>{item.quantity}</td>
                <td>{item.description}</td>
                <td>{item.intendedFor}</td>
                <td>{item.image}</td>
            </tr>)}

            
          </table>
          </div>
          </div>
        )
    }
}
export default Food;