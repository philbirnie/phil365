import React from "react"
import runData from "../data/run-data.json";
import { Link } from "gatsby";

const Table = () => {

	let cumulativeDistance = 0.00;

	return (
		<table>
			<thead>
			<tr>
				<th>Date</th>
				<th>Time of Day</th>
				<th>Distance</th>
				<th>Cumulative Distance</th>
				<th>Route</th>
			</tr>
			</thead>
			<tbody>
			{
				runData.map( ( dayData ) => {

					cumulativeDistance += dayData.distance;

					return <tr key={ dayData.date }>
						<td>{ dayData.date }</td>
						<td>{ dayData.time }</td>
						<td>{ dayData.distance }</td>
						<td>{ cumulativeDistance }</td>
						<td>
							<Link target="_blank" to={ dayData.map }>Map</Link>
						</td>
					</tr>
				} )
			}
			</tbody>
		</table>
	)
}

export default Table
