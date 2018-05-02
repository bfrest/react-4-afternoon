import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import History from "../History/History.js";
import Contact from "../Contact/Contact.js";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="subnav">
          <Link to="/about" className="subnav_links">
            <h3>About</h3>
          </Link>
          <Link to="/about/history" className="subnav_links">
            <h3>History</h3>
          </Link>
          <Link to="/about/contact" className="subnav_links">
            <h3>Contact</h3>
          </Link>
        </div>
        <div className="box">
          <Switch>
            <Route path="/about/history" component={History} />
            <Route path="/about/contact" component={Contact} />
            <Route
              path="/about"
              render={() => (
                <div>
                  <h3 className="title">About the University</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cupiditate qui in, nihil tempore iste tenetur hic obcaecati doloremque, fugit, odio voluptates sint perferendis ducimus quod molestiae dolor natus exercitationem.</p>
                </div>
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
