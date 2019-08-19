import React, { Component } from 'react';
import Item from './Item';



export default class Table extends Component {


    render() {
      if(this.props.repo==null)
        return( <div> <h1>User is not found</h1></div> 
          
          
          );
      

      return (
        <div>

<table style={{width:'100%',   border:"1px solid black"}}>
  <tr>
    <th>Number</th>
    <th>Name</th>
    <th>Repo state</th>
    <th>Check</th>
    <th>Private</th>
    <th>Languge</th>
    <th>Url</th>
  </tr>
  {this.props.repo.map((item,Key)=>{ 
    if(Key<=4)
    {
         return  <Item it={item} Key={Key} />
    }
   })}

</table>

         
        </div>
      )
    }
  }