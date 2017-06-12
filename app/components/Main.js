var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

// Create the Main component
var Main = React.createClass({

  // Here we render the component
  render: function() {

      return (
          <div className="container">

              <div className="container text-center">
                <h1>New York Times Article Scrubber</h1>
                <p>Search for and annotate articles of interest!</p>
              </div>


              <div className="container">
                  {this.props.children}
              </div>

          </div>
      )
  }
});


module.exports = Main;

