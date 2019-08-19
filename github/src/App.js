import React, {Component} from 'react';
import Search from './component/Search';
import Table from './component/Table';
import axios from 'axios';


export default class App extends Component {
state={
  repo:[]
}



back=(user,dell)=>{
  let url=`https://api.github.com/users/${user}/repos`
  console.log(url)

  axios.get(url)

.then(response => {


    this.setState({repo : response.data, 
  })


})
  .catch(error => {
    return(
    console.log("eror")),
    this.setState({repo : null, 
    })
  });

dell();
  };





  render() {
    

   console.log(this.state.repo)


    return (
      <div>
    

<Search back={this.back}/>


<Table repo={this.state.repo}/>



      </div>
    )
  }
 
 
}