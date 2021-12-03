import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Table from "../components/table"
import Stats from "../components/stats"
import MonthlyStats from "../components/monthly-stats"

const IndexPage = () => (
    <Layout>
        <SEO title="Phil Birnie runs for 365 Days in a Row" />
        <p>Starting on January 1, 2021, I will attempt to run for 365 days in a row and <s>1,000</s> 1,250 miles.</p>
        <h3>Rules:</h3>
        <ul>
            <li>Run at least 0.5 miles per day</li>
            <li>Runs than span midnight may count as both days.</li>
        </ul>
        <Stats />
        <h3>Monthly Totals</h3>
        <MonthlyStats />
        <Table />
    </Layout>
)

export default IndexPage
