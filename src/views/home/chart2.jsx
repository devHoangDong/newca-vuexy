import React from 'react';
import Chart from "react-apexcharts";



const chartData2 = {
    options: {
        title: {
            text: 'Phân tích số liệu',
            align: 'left',
            margin: 10,
            offsetX: 10,
            offsetY: 10,
            floating: false,
            style: {
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#263238'
            },
        },
        labels: ['Đơn hàng đã bán', 'Đơn hàng trong giỏ hàng', 'Đơn hàng bị hủy', 'Đơn hàng đang vận chuyển'],
    },
    series: [44, 5, 5, 17],
}
export default function ChartOne() {
    return (
        <div>
            <Chart
                options={chartData2.options}
                series={chartData2.series}
                type="pie"
            />
        </div>
    )
}