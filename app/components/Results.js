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
      results: {}
    }
  },

  // Here we render the Search child component
  render: function() {

    return (
       
                <div className="panel panel-default text-center">
                    <div className="panel-heading"><h3>Results</h3></div>
                    <div className="panel-body">
                      {this.props.results}
                    </div>
                </div>
        

    );
  }
});

module.exports = Results;
