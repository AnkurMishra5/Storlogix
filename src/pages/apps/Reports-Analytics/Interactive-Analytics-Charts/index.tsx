import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';
import { Card } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import { apexLineChartWithLables, apexLineChartWithLablesData, apexDonutOpts, apexDonutData, apexBarChartOpts, apexBarChartData } from './data'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Tooltip, Legend);

const AnalyticsCharts = () => {
    // Sample data for the charts
    const salesTrendsData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sales (₹)',
                data: [300, 500, 400, 600, 700, 800, 900],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
        ],
    };

    const inventoryTurnoverData = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
            {
                label: 'Turnover Rate',
                data: [1.5, 2.0, 1.8, 2.5],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
                borderWidth: 1,
            },
        ],
    };

    const buyerDemographicsData = {
        labels: ['18-24', '25-34', '35-44', '45-54', '55+'],
        datasets: [
            {
                data: [300, 500, 400, 200, 100],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
            },
        ],
    };

    return (
        <><Card>
            <Card.Body>
                <div>
                    <h4 className="header-title">
                        Sales Trends
                    </h4>
                    <p className="text-muted font-14 mb-4"> </p>
                    <Chart
                        options={apexLineChartWithLables}
                        series={apexLineChartWithLablesData}
                        type="line"
                        className="apex-charts" />
                </div>
            </Card.Body>
        </Card><Card>
                <Card.Body>
                    <div>
                        <h4 className="header-title">
                            Inventory Turnover
                        </h4>
                        <p className="text-muted font-14 mb-4"> </p>
                        <Chart options={apexBarChartOpts} series={apexBarChartData} type="bar" className="apex-charts" />
                    </div>
                </Card.Body>
            </Card><Card>

                <Card.Body>
                    <div>
                        <h4 className="header-title">
                            Buyer Demographics
                        </h4>
                        <p className="text-muted font-14 mb-4"></p>
                        <Chart options={apexDonutOpts} series={apexDonutData} type="pie" height={320} className="apex-charts" />
                    </div>
                </Card.Body>
            </Card></>
    );
};

export default AnalyticsCharts;
