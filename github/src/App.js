import React, {Component} from 'react';
import Search from './component/Search';
import Table from './component/Table';
import axios from 'axios';


export default class App extends Component {
state={
  repo:[],
  num:"0"
}



back=(user,dell)=>{
  let url=`https://api.github.com/users/${user}/repos?page=1&per_page=6`
    //let url=`https://api.github.com/search/users?q=${user}+repos:%3E4`
//let url=`https://api.github.com/users/atutorlangs/repos?per_page=100`

  console.log(url)

  axios.get(url)

.then(response => {


    this.setState({repo : response.data ,num:"0"})
   

})
  .catch(error => {
  
    console.error("eror")
     this.setState({num : "1" })
    
  });
   //  if(this.props.repo.length===0)
    //  this.setState({num:"2"})


dell();
  };

// rest=()=>{
//   this.setState({repo :[], num:"0" })

// }



  render() {

       if(this.state.num==="1")
       return( 
          <>
          <Search back={this.back} />
            <div> <h1>User is not found</h1></div> 
      
         </>);
      
 else{

   console.log(this.state.repo)
    return (
      <div>
    

<Search back={this.back} />

 {(this.state.num==="2"&& <h1>repo is not found</h1>)} 
 
 {this.state.repo.length>0 &&<Table repo={this.state.repo}/>} 
 


      </div>
    )
  }
  }
 
 
}