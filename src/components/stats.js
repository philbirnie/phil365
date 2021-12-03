import React from "react"
import runData from "../data/run-data.json";
import { Sum, RoundFloat } from '../utilities/aggregators';

const Stats = () => {

	const totalMiles = runData.map( day => day.distance ).reduce( Sum );

	const totalDays = runData.length;

	const average = totalMiles / totalDays;

	const max = Math.max.apply( Math, runData.map( day => parseFloat( day.distance ) ) );

	const ThousandDifferential = ( ( 1250 / 365 ) * totalDays ) - totalMiles;

	const ThousandDifferentialLabel = ThousandDifferential > 0 ? 'behind' : 'ahead';

	let GoalMetLabel = `${RoundFloat((1250 - totalMiles) / (365 - totalDays))} mi. per day required`;

	if(totalMiles > 1000) {
		GoalMetLabel = 'Goal Met!';
	}

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
					<dd>{ RoundFloat( runData.length / 3.65 ) }% ( {runData.length} days)</dd>
				</div>
				<div>
					<dt>1,000 Mile Goal Pace</dt>
					<dd>{ RoundFloat( Math.abs( ThousandDifferential ) ) } miles { ThousandDifferentialLabel }</dd>
					<dd>{ GoalMetLabel }</dd>
				</div>
			</dl>
		</div>
	)
}

export default Stats
