import React from "react";
export default class Navbar extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 text-center mx-auto text-title text-uppercase pt-5">
            <h1 className="display-3">404</h1>
            <h1>Error</h1>
            <h1>Page Nor Found</h1>
            <h1>
              Requested URL
              <span className="text-danger">
                {/* &nbsp; {this.props.location.pathname}*/}
              </span>
              &nbsp; was not found
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
