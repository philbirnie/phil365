import React from "react"
import runData from "../data/run-data.json";
import { Link } from "gatsby";

const Table = () => {

	let cumulativeDistance = 0.00;

	return (
		<table>
			<thead>
			<tr>
				<th className="col-date">Date</th>
				<th className="col-time">Time of Day</th>
				<th className="col-distance">Distance</th>
				<th className="col-cumulative">Total Distance</th>
				<th className="col-route">Route</th>
				<th className="col-remarks">Remarks</th>
			</tr>
			</thead>
			<tbody>
			{
				runData.map( ( dayData ) => {

					cumulativeDistance += dayData.distance * 100;

					const cumulativeDistanceDisplayed = Math.round(cumulativeDistance) / 100;

					return <tr key={ dayData.date }>
						<td className="col-date">{ dayData.date }</td>
						<td className="col-time">{ dayData.time }</td>
						<td className="col-distance">{ dayData.distance }</td>
						<td className="col-cumulative">{ cumulativeDistanceDisplayed }</td>
						<td className="col-route">
							<Link target="_blank" to={ dayData.map }>Map</Link>
						</td>
						<td  className="col-remarks">{ dayData.remark }</td>
					</tr>
				} )
			}
			</tbody>
		</table>
	)
}

export default Table
