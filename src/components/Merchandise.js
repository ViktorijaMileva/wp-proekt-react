import React from 'react';

class Merchandise extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            merchandise: []
        };
    }

    componentDidMount(){

        fetch("/merchandise",{
            headers: {
                "Authorization": localStorage.getItem("token")
            }})
            .then(response => response.json())
            .then(result => {
                this.setState({merchandise: result})
            })
            .catch(e => {
                console.log(e);
                this.setState({...this.state});
            }); 
    }

    render(){
        const items = this.state.merchandise
        console.log(items);
        return(
            <div className= "table-div">
            <table className="tableMerchandise">
            <tr>
              <th>Description</th>
              <th>Price</th>
            </tr>
            
            {items.map(item => <tr>
                <td>{item.description}</td>
                <td>{item.price}</td>
            </tr>)}

          </table>
          </div>
        )
    }
}
export default Merchandise;