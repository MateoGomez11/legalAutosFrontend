/*import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Col,
    Button
} from "reactstrap";

const Vehicle = () => {
    const navigate = useNavigate();
    const [vehicleData, setVehicleData] = useState([]);

    useEffect(() => {
        const getVehicle = async () => {
            const response = await Axios({
                url: 'http://localhost:1338/api/listVehicles',
            });
        };
        getVehicle();
    }, []);
    //----------------------------------------------------------------
    const handleCreateVehicle = () => {
        navigate('/managment/vehicles/vehicle');
    };

    function handleEditVehicle() {
        navigate('');
    };
    const columns = [
        {
            title: 'Plate',
            dataIndex: 'vehiclePlate',
        },
        {
            title: 'Brand',
            dataIndex: 'vehicleBrand',
        },
        {
            title: 'Line',
            dataIndex: 'vehicleLine',
        },
        {
            title: 'Type',
            dataIndex: 'vehicleType',
        },
        {
            title: 'Year',
            dataIndex: 'vehicleYear',
        },
        {
            title: 'Trasmision',
            dataIndex: 'vehicleTrasmition',
        },
        {
            title: 'C.c',
            dataIndex: 'vehicleCC',
        },
        {
            title: 'Color',
            dataIndex: 'vehicleColor',
        },
        {
            title: 'Soat',
            dataIndex: 'vehicleSoat',
        },
        {
            title: 'Tecno',
            dataIndex: 'vehicleTecno',
        },
        {
            title: 'State',
            dataIndex: 'vehicleState',
        },
        {
            title: 'Description',
            dataIndex: 'vehicleDescription',
        },
        {
            title: 'Buy price',
            dataIndex: 'vehicleBuyPrice',
        },
        {
            title: 'Sell price',
            dataIndex: 'vehicleSellPrice',
        },
        {
            title: 'Buy date',
            dataIndex: 'vehicleBuyDate',
        },
        {
            title: 'Sell date',
            dataIndex: 'vehicleSellDate',
        },
        {
            title: 'City id',
            dataIndex: 'cityId',
        },
        {
            title: 'Person id',
            dataIndex: 'personId',
        }
    ]
    return (
        <div>
            <CButton onClick={handleCreateVehicle} > New Vehicle </CButton>
            <CTable>
                <CTableHead>
                    <CTableRow>
                        {columns.map((column, index) => (
                            <CTableHeaderCell key={index}>{column.title}</CTableHeaderCell>
                        ))}
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    {restaurantData.map((vehicle, index) => (
                        <CTableRow key={index}>
                            {columns.map((column, columnIndex) => (
                                <CTableDataCell key={columnIndex}> {vehicle[column.dataIndex]} </CTableDataCell>
                            ))}
                        </CTableRow>
                    ))}
                </CTableBody>
            </CTable>
        </div>
    )
}
export default Vehicle

*/