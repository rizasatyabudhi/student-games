import React, { Component } from "react";

import Navigation from "../components/navigation";

const stack = () => (
  <div>
    <main>
      <section className="section-book" style={{ height: "92vh" }}>
        <Navigation />
        <h1 className="heading-primary u-center-text u-margin-top-huge">
          <span className="heading-primary--main">Work In Progress</span>
        </h1>
      </section>
    </main>
  </div>
);

export default stack;
