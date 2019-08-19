import React, { Component } from 'react';







export default class Item extends Component {


    render() {
        const {it,Key}=this.props;
        console.log(it.name)
      return (
        <tbody> 

        <tr>
       <td>{Key+1}</td>
       <td>{it.name}</td>
       <td>{it.private ? "private" : "public" }</td>
       <td><input type="checkbox" checked={it.private} /></td>
       <td>{it.private ? "yes" : "no" }</td>
       <td>{it.language}</td>
       <td><button  ><a href={it.svn_url} target="_blank" >go to repo</a></button> </td>

       </tr>
       </tbody> 
 
      )
    }
   
   
  }