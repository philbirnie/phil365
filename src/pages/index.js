import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Table from "../components/table"

const IndexPage = () => (
  <Layout>
    <SEO title="Phil Birnie runs for 365 Days in a Row" />
    <p>Hello! My name is Phil.  I live in Worthington, Ohio.</p>
    <p>Starting on January 1, 2021, I will attempt to run for 365 days in a row -- just for fun. Keep track of my progress below.</p>
    <h3>Rules:</h3>
    <ul>
      <li>Run at least 0.5 miles per day</li>
      <li>Runs than span midnight may count as both days.</li>
    </ul>
    <Table />
  </Layout>
)

export default IndexPage
