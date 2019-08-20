import React, { Component } from 'react';
import Item from './Item';



export default class Table extends Component {


    render() {
      // if(this.props.repo.length===0)
      //   return( <div> <h1> not repo</h1></div> );
      
// else{
      return (
        <>

<table style={{width:'100%',   border:"1px solid black"}}>
<thead>

  <tr>
    <th>Number</th>
    <th>Name</th>
    <th>Repo state</th>
    <th>Check</th>
    <th>Private</th>
    <th>Languge</th>
    <th>Url</th>
  </tr>
  </thead>

  <tbody>

  
  {this.props.repo.map((item,Key)=>{ 
    //if(Key<=4)
    //{
         return  <Item it={item} Key={Key} />
   // }
   })}

</tbody>

</table>

         
        </>
      )
    }
    //}
  }