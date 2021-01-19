import React from "react"
import runData from "../data/run-data.json";
import { Sum } from '../utilities/aggregators';

const Stats = () => {


	const average = runData.map( day => day.distance ).reduce( Sum ) / runData.length;

	const max = Math.max.apply( Math, runData.map( day => parseFloat( day.distance ) ) );

	return (
		<div className="stats">
			<dl>
				<dt>Average Distance</dt>
				<dd>{ Math.round( average * 100 ) / 100 } miles</dd>
				<dt>Maximum Distance</dt>
				<dd>{ max } miles</dd>
				<dt>Completion</dt>
				<dd>{ Math.round( ( runData.length / 365 ) * 10000 ) / 100 }%</dd>
			</dl>
		</div>
	)
}

export default Stats
