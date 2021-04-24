import React from 'react';

class Customer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            customer: []
        };
    }

    componentDidMount(){

        fetch("/customer", 
        {
            headers: {
                "Authorization": localStorage.getItem("token")
            }})
            .then(response => response.json())
            .then(result => {
                this.setState({customer: result})
            })
            .catch(e => {
                console.log(e);
                this.setState({...this.state});
            }); 
    }

    render(){
        const items = this.state.customer
        console.log(items);
        return(
            <div className= "table-div">
            <table className="tableCustomer">
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Phone number</th>
              <th>Breed</th>
            </tr>
            
            {items.map(item => <tr>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>{item.email}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.breeds}</td>
            </tr>)}

          </table>
          </div>
        )
    }
}
export default Customer;