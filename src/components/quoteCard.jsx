import React from 'react';
import axios from 'axios';
import './quoteCard.css';

class QuoteCard extends React.Component{
  constructor(props){
    super(props);
    this.getSimpsonsQuote = this.getSimpsonsQuote.bind(this);
    this.state = {
      character:null,
      image:null,
      quote:null,
      count:0
    };
  };
  getSimpsonsQuote(){
    axios.get(`https://simpsons-quotes-api.herokuapp.com/quotes`)
      .then(response => response.data)
      .then(data => {
        this.setState({...data[0]})
      })
  }
  componentDidMount(){
    this.getSimpsonsQuote();
  }
  incrementation(){
    let test = this.state.count;
    this.setState({count: test+=1})
  }
  decrementation(){
    let test = this.state.count;
    this.setState({count: test-=1})
  }
  render(){
    return(
      <div className="container">
        {this.state.character ? (
          <div>
            <h1>{this.state.character}</h1>
            <p><strong>{this.state.quote}</strong></p>
            <img src={this.state.image} alt={this.state.character} />
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <button type="button" onClick={this.getSimpsonsQuote}>Get new quote</button>
        <button type="button" onClick={()=>this.incrementation()}>+</button>
        <button type="button" onClick={()=>this.decrementation()}>-</button>
        <p>{this.state.count}</p>
      </div>
    );
  };
};

export default QuoteCard;