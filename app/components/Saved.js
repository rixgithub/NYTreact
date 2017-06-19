
var React = require("react");
var axios = require('axios');
var Link = require("react-router").Link;
// including children components
var Form = require('./Form');
var Results = require('./Results');

// including helper functions
var helpers = require('./utils/helpers.js');



// Create the Saved child component
var Saved = React.createClass({

  //  getInitialState: function(){
  //     return {
  //           saved: []
  //     }
  // },

  // Here we render the Saved child component
    render: function() {

        return (

          <div className="panel panel-default text-center">
              <div className="panel-heading"><h3>Saved Articles</h3></div>
              <div className="panel-body">
                
              </div>
          </div>   
        );
    }
});

// Export the component back for use in other files
module.exports = Saved;




