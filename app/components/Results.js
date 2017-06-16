var React = require("react");
var axios = require('axios');

// including children components
var Form = require('./Form');
var Saved = require('./Saved');
var Link = require("react-router").Link;
// including helper functions
var helpers = require('./utils/helpers.js');



// Create the Results child component
var Results = React.createClass({

  getInitialState: function(){
      return {
        title: "",
        date: "",
        url: "",
        results: []
      }
  },

  componentDidUpdate: function(){
    console.log("Results.js is didUpdate");
    console.log(this.state);
  },

  componentWillReceiveProps: function(nextProps){
    
    var searchResults = nextProps.results.map(function(search, i){
      return <div className="list-group-item" key={i}><a href={search.web_url} target="_blank">{search.headline.main}</a><br /><button type="button" className="btn">Save</button></div>
    });

    this.setState({results: searchResults});
  },
  
  // Here we render the Search child component
  render: function() {

    return (
       
                <div className="panel panel-default text-center">
                    <div className="panel-heading"><h3>Results</h3></div>
                     <div className="panel-body">
                        {this.state.results}
                    </div>
                </div>
        

    );
  }
});

module.exports = Results;
