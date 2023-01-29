import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

function Chart() {

    const data = [
        {
            name: "Jan", x: 590, y: 60, z: 150
        },
        {
            name: "Feb", x: 400, y: 200, z: 130
        },
        {
            name: "Mar", x: 400, y: 120, z: 80
        },
        {
            name: "Apr", x: 200, y: 120, z: 100
        },
        {
            name: "May", x: 380, y: 70, z: 120
        },
        {
            name: "Jun", x: 200, y: 50, z: 130
        },
        {
            name: "Jul", x: 170, y: 50, z: 30
        },
    ]

    return (
        <BarChart width={500} height={500} data={data} >
            <CartesianGrid />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="x" stackId="a" fill="#51C0FB" />
            <Bar dataKey="y" stackId="a" fill="#FFA676" />
            <Bar dataKey="z" stackId="a" fill="#47D2AC" />
        </BarChart>
    );
}

export default Chart;