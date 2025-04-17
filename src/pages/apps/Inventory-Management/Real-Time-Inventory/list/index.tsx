import { Card, Col, Row } from 'react-bootstrap';

// data
import { realTimeInventoryData } from './data';
import { usePageTitle } from '../../../../../hooks';
import Table from '../../../../../components/Table';


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
        value: realTimeInventoryData.length,
    },
];

const BorderedTable = () => {

    const columns = [
        {
            Header: 'Item ID',
            accessor: 'itemId',
            Cell: ({ value }: any) => value || '-',
            sort: true,
        },
        {
            Header: 'Item Name',
            accessor: 'itemName',
            Cell: ({ value }: any) => value || '-',
            sort: true,
        },
        {
            Header: 'Current Stock Level',
            accessor: 'currentStockLevel',
            Cell: ({ value }: any) => value || '-',
            sort: true,
        },
        {
            Header: 'Stock Threshold',
            accessor: 'stockThreshold',
            Cell: ({ value }: any) => value || '-',
            sort: true,
        },
        {
            Header: 'Last Updated',
            accessor: 'lastUpdated',
            Cell: ({ value }: any) => value || '-',
            sort: true,
        },
        {
            Header: 'Status',
            accessor: 'status',
            Cell: ({ value }: any) => value || '-',
            sort: true,
        },
    ];


    usePageTitle({
        title: 'Real-Time Inventory',
        breadCrumbItems: [
            {
                path: '/inventory-management/real-time-inventory/list',
                label: 'Real-Time Inventory',
            },
            {
                path: '/inventory-management/real-time-inventory/list',
                label: 'Real-Time Inventory',
                active: true,
            },
        ],
    });
    return (
        <>
         {/* <Card>
            <Card.Body>
                <h4 className="header-title">
                    Empowering Businesses with Instant Insights for Unmatched Efficiency and Customer Satisfaction
                </h4>
                <p className="text-muted font-14 mb-4">
                    Real-time inventory refers to the immediate tracking and updating of stock levels as transactions occur within a business. This system allows companies to monitor inventory continuously, reflecting changes in stock due to sales, restocks, or returns without delays. By utilizing real-time inventory management, businesses can maintain accurate stock counts, prevent overstock and stockouts, and respond swiftly to fluctuations in demand. This transparency not only enhances operational efficiency but also improves customer satisfaction by ensuring that products are available when needed.
                </p>

                <div className="table-responsive">
                    <Table className="mb-0" bordered>
                        <thead>
                            <tr>
                                <th>Item ID</th>
                                <th>Item Name</th>
                                <th> Current Stock Level</th>
                                <th>Stock Threshold</th>
                                <th>Last Updated</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(realTimeInventoryData || []).map((record, index) => {
                                return (
                                    <tr key={index.toString()}>
                                        <th scope="row">{record.itemId}</th>
                                        <td>{record.itemName}</td>
                                        <td>{record.currentStockLevel}</td>
                                        <td>{record.stockThreshold}</td>
                                        <td>{record.lastUpdated}</td>
                                        <td>{record.status}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </div>
            </Card.Body>
        </Card> */}

<Row>
                <Col>
                    <Card>
                        <Card.Body>
                        <h4 className="header-title">
                    Empowering Businesses with Instant Insights for Unmatched Efficiency and Customer Satisfaction
                </h4>
                <p className="text-muted font-14 mb-4">
                    Real-time inventory refers to the immediate tracking and updating of stock levels as transactions occur within a business. This system allows companies to monitor inventory continuously, reflecting changes in stock due to sales, restocks, or returns without delays. By utilizing real-time inventory management, businesses can maintain accurate stock counts, prevent overstock and stockouts, and respond swiftly to fluctuations in demand. This transparency not only enhances operational efficiency but also improves customer satisfaction by ensuring that products are available when needed.
                </p>
                            <div className="table-responsive">
                                <Table
                                    columns={columns}
                                    data={realTimeInventoryData}
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
        </>
    );
};

export default BorderedTable;
