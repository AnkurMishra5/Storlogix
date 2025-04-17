import { ApexOptions } from 'apexcharts';

export const apexLineChartWithLables: ApexOptions = {
    chart: {
        height: 100,
        type: 'line',
        zoom: {
            enabled: false,
        },
        toolbar: {
            show: false,
        },
    },
    colors: ['#35b8e0', '#10c469'],
    dataLabels: {
        enabled: true,
    },
    stroke: {
        width: [3, 3],
        curve: 'smooth',
    },
    title: {
        text: 'Average High & Low Temperature',
        align: 'left',
        style: {
            fontSize: '14px',
        },
    },
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2,
        },
        borderColor: '#f7f7f7',
    },
    markers: {
        size: 6,
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        title: {
            text: 'Month',
        },
    },
    yaxis: {
        title: {
            text: 'Temperature',
        },
        min: 5,
        max: 40,
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5,
    },
    responsive: [
        {
            breakpoint: 600,
            options: {
                chart: {
                    toolbar: {
                        show: false,
                    },
                },
                legend: {
                    show: false,
                },
            },
        },
    ],
};

// chart data
export const apexLineChartWithLablesData = [
    {
        name: 'High - 2018',
        data: [28, 29, 33, 36, 32, 32, 33],
    },
    {
        name: 'Low - 2018',
        data: [12, 11, 14, 18, 17, 13, 13],
    },
];

export const  apexDonutOpts: ApexOptions = {
    chart: {
        height: 100,
        type: 'pie',
    },
    labels: ['Series 1', 'Series 2', 'Series 3', 'Series 4', 'Series 5'],
    colors: ['#35b8e0', '#98a6ad', '#10c469', '#ff5b5b', '#f9c851'],
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        floating: false,
        fontSize: '14px',
        offsetX: 0,
        offsetY: -10,
    },
    responsive: [
        {
            breakpoint: 600,
            options: {
                chart: {
                    height: 240,
                },
                legend: {
                    show: false,
                },
            },
        },
    ],
};

 export const apexDonutData = [44, 55, 41, 17, 15];

  export const apexBarChartOpts: ApexOptions = {
        chart: {
            height: 100,
            type: 'bar',
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                dataLabels: {
                    position: 'top',
                },
            },
        },
        dataLabels: {
            enabled: true,
            offsetX: -6,
            style: {
                fontSize: '12px',
                colors: ['#fff'],
            },
        },
        colors: ['#ff5b5b', '#98a6ad'],
        stroke: {
            show: true,
            width: 1,
            colors: ['#fff'],
        },

        xaxis: {
            categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
        },
        legend: {
            offsetY: -10,
        },
        states: {
            hover: {
                filter: {
                    type: 'none',
                },
            },
        },
        grid: {
            borderColor: '#f7f7f7',
        },
    };

    // chart data
    export const apexBarChartData = [
        {
            name: 'Series 1',
            data: [44, 55, 41, 64, 22, 43, 21],
        },
        {
            name: 'Series 2',
            data: [53, 32, 33, 52, 13, 44, 32],
        },
    ];
