// Include React
var React = require("react");

var Search = React.createClass({

  // Here we render the component
  render: function() {

    return (
        <div className="container">

                  <div className="panel panel-default text-center">
                    <div className="panel-heading"><h3>Search</h3></div>
                      <div className="panel-body">
                          <form>
                          <div className="form-group">
                            <h4>Topic</h4>
                            <input type="text" className="form-control" id="topic"/>
                          </div>
                          <div className="form-group">
                            <h4>Start Year</h4>
                            <input type="number" className="form-control" id="startYear"/>
                          </div>
                          <div className="form-group">
                            <h4>End Year</h4>
                            <input type="number" className="form-control" id="endYear"/>
                          </div>
                          <button type="submit" className="btn btn-default">Search</button>
                        </form>
                      </div>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading">Results</div>
                    <div className="panel-body">
                      {/*}Results go here */}
                    </div>
                  </div>
        </div>

    );
  }
});

module.exports = Search;
