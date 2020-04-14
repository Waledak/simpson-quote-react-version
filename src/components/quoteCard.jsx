import React from 'react';
import axios from 'axios';
import './quoteCard.css';

class QuoteCard extends React.Component{
  constructor(props){
    super(props);
    this.getSimpsonsQuote = this.getSimpsonsQuote.bind(this);
    this.checkStateOfNull = this.checkStateOfNull.bind(this);
    this.state = {};
  };
  getSimpsonsQuote(){
    axios.get(`https://simpsons-quotes-api.herokuapp.com/quotes`)
      .then(response => response.data)
      .then(data => {
        this.setState({...data[0]})
      })
  }
  checkStateOfNull(){
    if(this.state.character===undefined){
      this.getSimpsonsQuote()
    }
  }
  render(){
    this.checkStateOfNull();
    return(
      <div className="container">
        <h1>{this.state.character}</h1>
        <p><strong>{this.state.quote}</strong></p>
        <img src={this.state.image} alt={this.state.character} />
        <button type="button" onClick={this.getSimpsonsQuote}>Get new quote</button>
      </div>
    );
  };
};

export default QuoteCard;