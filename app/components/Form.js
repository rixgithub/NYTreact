var React = require("react");
var axios = require('axios');
var Link = require("react-router").Link;
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
            results: [],
            saved: []
          }
    },

    saveArticle: function(title, date, url){
      helpers.postArticle(title, date, url);
      this.getArticle();
    },

    deleteArticle: function(article){
      console.log(article);
      axios.delete('/api/saved/' + article._id)
        .then(function(response){
          this.setState({
            savedArticles: response.data
          });
          return response;
        }.bind(this));

      this.getArticle();
    },

    getArticle: function(){
      axios.get('/api/saved')
        .then(function(response){
           console.log(response.data);
          this.setState({
            saved: response.data
          });
        }.bind(this));
    },

      // This function will respond to the user input
    handleChange: function(event) {
      // Here we create syntax to capture any change in text to the query terms (pre-search).
      // See this Stack Overflow answer for more details:
      // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
      var newState = {};
      newState[event.target.id] = event.target.value;
      this.setState(newState);
    },

    handleSubmit: function() {

        // Run the query for the search terms
        helpers.runQuery(this.state.topic, this.state.startYear, this.state.endYear)
           .then(function(data) {
              if (data != this.state.results) {  
                this.setState({results: data});
                // console.log(this.state);
              }
        }.bind(this))      
    },

    componentDidMount: function(){
        axios.get('/api/saved')
          .then(function(response){
            this.setState({
              saved: response.data
            });
          }.bind(this));
    },
              
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
                  <Results results={this.state.results} saveArticle={this.saveArticle} />
                </div>

                <div className="container">
                  <Saved saved={this.state.saved} deleteArticle={this.deleteArticle} />
                </div>

          </div>
      );
    }

});

module.exports = Form;

