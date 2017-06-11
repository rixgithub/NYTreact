var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

// Create the Main component
var Main = React.createClass({

  // Here we render the component
  render: function() {

    return (
        <div className="container">

          <div class="container">
            <h1>New York Times Article Scrubber</h1>
            <p>Search for and annotate articles of interest!</p>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">Search</div>
              <div className="panel-body">
                  <form>
                    <div className="form-group">
                      <label for="topic">Topic</label>
                      <input type="text" className="form-control" id="topic" placeholder="Topic">
                    </div>
                    <div className="form-group">
                      <label for="startYear">Start Year</label>
                      <input type="number" className="form-control" id="startYear" placeholder="Start Year">
                    </div>
                    <div className="form-group">
                      <label for="endYear">End Year</label>
                      <input type="number" className="form-control" id="endYear" placeholder="End Year">
                    </div>
                    <button type="submit" className="btn btn-default">Search</button>
                  </form>
              </div>
          </div>

          <div className="container">
              {this.props.children}
          </div>

        </div>
    );
  }
});

{/* export main module*/}
module.exports = Main;

{/* **Main** - contains the main-container div that holds the main layout and navigation. This component should also be able to hold sub-components Search and Saved */}





