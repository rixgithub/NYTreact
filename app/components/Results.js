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

  // When a user clicks save article
  clickToSave: function(result){
    console.log(result);
    this.props.saveArticle(result.headline.main, result.pub_date, result.web_url);

  },

  // // When a user clicks save article
  // saveClick: function(title, date, url){
  //     helpers.postArticle(title, date, url);
  //     // this.getArticle();
  // },

  componentDidUpdate: function(){

  },

  componentWillReceiveProps: function(nextProps){
    
    var that = this;

    var searchResults = nextProps.results.map(function(search, i){

      var boundClick = that.clickToSave.bind(that, search);

      return <div className="panel-body"><div className="list-group-item" key={i}>
          <a className="pull-left" href={search.web_url} target="_blank">{search.headline.main}</a><br />
          <button type="button" className="btn pull-right" style={{'marginTop': '-27px', 'marginLeft': '750px'}} onClick={boundClick}>Save Article</button></div></div>        
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
