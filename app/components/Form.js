var React = require("react");
var axios = require('axios');

// including children components
var Results = require('./Results');
var Saved = require('./Saved');

// including helper functions
var helpers = require('./utils/helpers.js');


// Create the Form child component
var Form = React.createClass({
    
    getInitialState: function(){
          return {
            topic: "",
            startYear: "",
            endYear: "",
            results: {}
          }
    },

      // This function will respond to the user input
    handleChange: function(event) {
      // Here we create syntax to capture any change in text to the query terms (pre-search).
      // See this Stack Overflow answer for more details:
      // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
      var newState = {};
      newState[event.target.id] = event.target.value;
      this.setState(newState);
      console.log(newState);
    },

     // Whenever the submit button is clicked we'll use setState to set the search state
     // Note the syntax for setting the state 
    // handleSubmit: function(){
    // event.preventDefault();
    //       this.setState({
    //       topic: this.state.topic,
    //       startYear: this.state.startYear,
    //       endYear: this.state.endYear
    //       })
    // },

     // If the component changes (i.e. if a search is entered)...
    handleSubmit: function() {

        // Run the query for the search terms
        helpers.runQuery(this.state.topic, this.state.startYear, this.state.endYear)
           .then(function(data) {
              if (data != this.state.results) {
                  console.log("component response");
                  console.log(data);
                this.setState({results: data});
              }
        }.bind(this))      
    },
                // // If the component changes (i.e. if a search is entered)...
                // componentDidUpdate: function() {

                //   // Run the query for the address
                //   helpers.runQuery(this.state.searchTerm).then(function(data) {
                //     if (data !== this.state.results) {
                //       console.log("Address", data);
                //       this.setState({ results: data });

                //       // After we've received the result... then post the search term to our history.
                //       helpers.postHistory(this.state.searchTerm).then(function() {
                //         console.log("Updated!");

                //         // After we've done the post... then get the updated history
                //         helpers.getHistory().then(function(response) {
                //           console.log("Current History", response.data);

                //           console.log("History", response.data);

                //           this.setState({ history: response.data });

                //         }.bind(this));
                //       }.bind(this));
                //     }
                //   }.bind(this));
                // },
 
    // Here we render the Main PARENT component
    render: function() {

      return (
          <div className="container">

                <div className="container">
                  <div className="panel panel-default text-center">
                    <div className="panel-heading"><h3>Search</h3></div>
                      <div className="panel-body">
                          <form>
                          <div className="form-group">
                            <h4>Topic</h4>
                            <input type="text" className="form-control" id="topic" value={this.state.topic} onChange= {this.handleChange} required />
                          </div>
                          <div className="form-group">
                            <h4>Start Year</h4>
                            <input type="text" className="form-control" id="startYear" value={this.state.startYear} onChange= {this.handleChange} required />
                          </div>
                          <div className="form-group">
                            <h4>End Year</h4>
                            <input type="text" className="form-control" id="endYear" value={this.state.endYear} onChange= {this.handleChange} required />
                          </div>
                          <button type="submit" className="btn btn-default" onClick={this.handleSubmit}>Search</button>
                        </form>
                      </div>
                  </div>
                </div>

                <div className="container">
                  <Results results={this.state.results} />
                </div>

                <div className="container">
                  <Saved />
                </div>

          </div>
      );
    }

});

module.exports = Form;

