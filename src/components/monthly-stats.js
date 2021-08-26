import React from "react"
import runData from "../data/run-data.json";
import {SpliceByMonth, GetMonthName, Sum} from '../utilities/aggregators';

const splitMonthlyData = runData.reduce(SpliceByMonth, []);

const MonthlyStats = () => {
    return (
        <div className="stats">
            <dl>
                {
                    splitMonthlyData.map((data, index) => {

                        const monthlyTotal = data.map(day => day.distance).reduce(Sum);

                        const monthlyAverage = Math.round((monthlyTotal / data.length) * 100) / 100;

                        const displayedTotal = Math.round(monthlyTotal * 100) / 100;

                        return <div key={`month-${index}`}>
                            <dt>{GetMonthName(index)}</dt>
                            <dd>{displayedTotal}</dd>
                            <dd>({monthlyAverage})</dd>
                        </div>
                    })
                }
            </dl>
        </div>
    )
}

export default MonthlyStats
