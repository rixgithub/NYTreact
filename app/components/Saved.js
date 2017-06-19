
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

  getInitialState: function(){
    return {
      savedArticles: []
    }
  },

  clickToDelete: function(result){
    this.props.deleteArticle(result);

  },

  componentWillReceiveProps: function(nextProps){
    console.log("right here right now");
    console.log(nextProps);
    var that = this;
    
    var savedResults = nextProps.saved.map(function(search, i){
      
      var boundClick = that.clickToDelete.bind(that, search);
      
      return <div className="panel-body"><div className="list-group-item" key={i}>
      <a href={search.url} className="pull-left" target="_blank">{search.title}</a><br />
      <button type="button" className="btn pull-right" style={{'marginTop': '-27px', 'marginLeft': '750px'}} onClick={boundClick}>Delete Article</button></div></div>
    });

    this.setState({savedArticles: savedResults});
  },

  // Here we render the Saved child component
    render: function() {

        return (

          <div className="panel panel-default text-center">
              <div className="panel-heading"><h3>Saved Articles</h3></div>
              <div className="panel-body">
                {this.state.savedArticles}
              </div>
          </div>   
        );
    }

});

// Export the component back for use in other files
module.exports = Saved;




