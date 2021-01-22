import React from "react"
import runData from "../data/run-data.json";
import { Sum, RoundFloat } from '../utilities/aggregators';

const Stats = () => {

	const totalMiles = runData.map( day => day.distance ).reduce( Sum );

	const totalDays = runData.length;

	const average = totalMiles / totalDays;

	const max = Math.max.apply( Math, runData.map( day => parseFloat( day.distance ) ) );

	const ThousandDifferential = ( ( 1000 / 365 ) * totalDays ) - totalMiles;

	const ThousandDifferentialLabel = ThousandDifferential > 0 ? 'short' : 'ahead';

	return (
		<div className="stats">
			<dl>
				<div>
					<dt>Average Distance</dt>
					<dd>{ RoundFloat( average ) } miles</dd>
				</div>
				<div>
					<dt>Maximum Distance</dt>
					<dd>{ max } miles</dd>
				</div>
				<div>
					<dt>Yearly Completion</dt>
					<dd>{ RoundFloat( runData.length / 3.65 ) }%</dd>
				</div>
				<div>
					<dt>1,000 Mile Goal Pace</dt>
					<dd>{ RoundFloat( Math.abs( ThousandDifferential ) ) } miles { ThousandDifferentialLabel }</dd>
				</div>
			</dl>
		</div>
	)
}

export default Stats
