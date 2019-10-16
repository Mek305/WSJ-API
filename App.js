import React from 'react';
import './App.css';



class App extends React.Component {
  constructor(){
    super()
    this.state = {
      articles: []
    }
  }

 componentDidMount(){
      fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=1cf361e46f56470a9316100aa2cb5dad')
   .then((reponse) => {
     return reponse.json()
   })
   .then((myApi)=>{
     this.setState({
       articles: myApi.articles
     })
   })
}




  render(){
console.log(this.state.articles)
    return (
        <div className = "App" >
          
           <h1> Wall Street Journal API!!! </h1>
          {this.state.articles.map((item,index)=>{
           return(
             <div className = "Space">
            <h2><img src = {item.urlToImage}
               />{item.title} By: {item.author}
               <br></br>
               {item.description}...
               <br></br>
               <a href={item.url}>Read MORE</a> </h2>
               
            
            
            
               
               </div>
             

          )
         })}
        
         </div>
      );
    }
}

export default App;



