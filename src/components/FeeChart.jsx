import React, { useEffect, useState } from 'react';
import { getBookedAppointments } from '../utils';
import { Bar, Cell, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const FeeChart = () => {
    const [chartData, setChartData] = useState([]);

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    useEffect(() => {
        const appointments = getBookedAppointments();

        const feeData = appointments.map(appointment => ({
            name: appointment.name,
            fee: appointment.consultation_fee,
        }));
        
        setChartData(feeData);
    }, [chartData]);

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${
            x + width / 2
        },${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
            y + height
        } ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return (
            <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />
        );
    };
    
    return (
        <div>
            <div className="fee-chart">
                <ResponsiveContainer width="100%" height={450}>
                    <BarChart width={500} height={300} data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={"name"} />
                        <YAxis />
                        <Bar
                            dataKey="fee"
                            shape={<TriangleBar />}
                        >
                            {chartData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={colors[index % 20]}
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default FeeChart;