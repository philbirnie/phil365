import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Table from "../components/table"

const IndexPage = () => (
  <Layout>
    <SEO title="Phil Birnie runs for 365 Days in a Row" />
    <p>Hello! My name is Phil.  I live in Worthington, Ohio.</p>
    <p>Starting on January 1, 2021, I will attempt to run for 365 days in a row.  Keep track of my progress below.</p>
    <h3>Rules:</h3>
    <ul>
      <li>Run at least 0.5 miles per day (most days will be more than that!)</li>
      <li>It is okay to bridge days (i.e. if you run at 11:45 PM and run at least a half a mile each day, you can mark off two days with one run)</li>
    </ul>
    <Table />
  </Layout>
)

export default IndexPage
