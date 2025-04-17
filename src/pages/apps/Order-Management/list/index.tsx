import { Card, Col, Row } from 'react-bootstrap';

// data
import { orderManagementData } from './data';
import { usePageTitle } from '../../../../hooks';
import { useState } from 'react';
import Table from '../../../../components/Table';




const sizePerPageList = [
    {
        text: '5',
        value: 5,
    },
    {
        text: '10',
        value: 10,
    },
    {
        text: '25',
        value: 25,
    },
    {
        text: 'All',
        value: orderManagementData.length,
    },
];


const OrderList = () => {

    const columns = [
        {
            Header: 'Order Id',
            accessor: 'orderId',
            Cell: ({ value }: any) => value || '-',
            sort: true,
        },
        {
            Header: 'Buyer Name',
            accessor: 'buyerName',
            Cell: ({ value }: any) => value || '-',
            sort: true,
        },
        {
            Header: 'Tracking Id',
            accessor: 'trackingId',
            Cell: ({ value }: any) => value || '-',
            sort: true,
        },
        {
            Header: 'Status',
            accessor: 'status',
            Cell: ({ row }: any) => (
                <select
                    value={row.original.status}
                    onChange={(e) => handleStatusChange(row.original.orderId, e.target.value)}
                >
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                </select>
            ),
        },
    ];


    usePageTitle({
        title: 'Order Management',
        breadCrumbItems: [
            {
                path: '/order-management/list',
                label: 'List',
            },
            {
                path: '/order-management/list',
                label: 'List',
                active: true,
            },
        ],
    });

    const [orderData, setOrderData] = useState(orderManagementData);

    const handleStatusChange = (orderId: any, newStatus: any) => {
        const updatedData = orderData.map(order =>
            order.orderId === orderId ? { ...order, status: newStatus } : order
        );
        setOrderData(updatedData);
    };

    const handleSort = (key: any) => {
        const sortedData = [...orderData].sort((a: any, b: any) => a[key].localeCompare(b[key]));
        setOrderData(sortedData);
    };

    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">
                                Transformative Order Management Solutions
                            </h4>
                            <p className="text-muted font-14 mb-4">
                                Order management is vital for creating a seamless experience for businesses and customers, guiding orders from placement to delivery. It includes key stages like inventory tracking, fulfillment, and shipping. By managing these processes effectively, businesses can reduce delays, minimize errors, and boost customer satisfaction. A strong order management system enhances efficiency and offers insights into sales and inventory, helping organizations make informed decisions. In today’s fast-paced market, mastering order management is crucial for staying competitive and providing excellent service.
                            </p>

                            <div className="table-responsive">

                                <Table
                                    columns={columns}
                                    data={orderData}
                                    pageSize={5}
                                    sizePerPageList={sizePerPageList}
                                    isSortable={true}
                                    pagination={true}
                                    isSearchable={true}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <Card>
                <Card.Body>
                    <h4 className="header-title">
                    Transformative Order Management Solutions
                    </h4>
                    <p className="text-muted font-14 mb-4">
                    Order management is vital for creating a seamless experience for businesses and customers, guiding orders from placement to delivery. It includes key stages like inventory tracking, fulfillment, and shipping. By managing these processes effectively, businesses can reduce delays, minimize errors, and boost customer satisfaction. A strong order management system enhances efficiency and offers insights into sales and inventory, helping organizations make informed decisions. In today’s fast-paced market, mastering order management is crucial for staying competitive and providing excellent service.
                    </p>

                    <div className="table-responsive">
         
                    <Table className="mb-0" bordered>
            <thead>
                <tr>
                    <th onClick={() => handleSort('orderId')}>Order ID</th>
                    <th onClick={() => handleSort('buyerName')}>Buyer Name</th>
                    <th>Tracking ID</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {orderData.map((record) => (
                    <tr key={record.orderId}>
                        <td>{record.orderId}</td>
                        <td>{record.buyerName}</td>
                        <td>{record.trackingId || "N/A"}</td>
                        <td>
                            <select
                                value={record.status}
                                onChange={(e) => handleStatusChange(record.orderId, e.target.value)}
                            >
                                <option value="Processing">Processing</option>
                                <option value="Shipped">Shipped</option>
                                <option value="Delivered">Delivered</option>
                                <option value="Cancelled">Cancelled</option>
                            </select>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>

                    </div>
                </Card.Body>
            </Card> */}
        </>
    );
};

export default OrderList;
