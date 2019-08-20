import React, { Component } from 'react';







export default class Item extends Component {


    render() {
        const {it,Key}=this.props;
        console.log(it.name)
      return (
        <tr>

              <td>{Key+1}</td>
       <td>{it.name}</td>
       <td>{it.private ? "private" : "public" }</td>
       <td><input type="checkbox" checked={it.private} /></td>
       <td>{it.private ? "yes" : "no" }</td>
       <td>{it.language}</td>
       <td><a href={it.svn_url} target="_blank" rel="noopener noreferrer" ><button  >go to repo</button> </a> </td>
       </tr>
    
     
 
      )
    }
   
   
  }