import React, { useState, useEffect } from 'react';
import { Button, Form, Row, Col, Dropdown, Card } from 'react-bootstrap';
import { buyerData } from './data';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { usePageTitle } from '../../../../hooks';
import { FormInput } from '../../../../components/form';
import Select from 'react-select';
import Pagination from '../../../../components/Pagination';
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
        value: buyerData.length,
    },
];


const BuyerDataExtractionTool = () => {
    usePageTitle({
        title: 'Extraction Tool',
        breadCrumbItems: [
            { path: '/buyer-management/extraction-tool', label: 'Real-Time Inventory' },
            { path: '/buyer-management/extraction-tool', label: 'Real-Time Inventory', active: true },
        ],
    });

    const [filters, setFilters] = useState<any>({
        startDate: null, // Initially set to null
        lastPurchase: null, // Initially set to null
        productCategory: '',
        totalPurchases: '',
    });
    const columns = [
        {
            Header: 'ID',
            accessor: 'id',
            Cell: ({ value }: any) => value || '-',
        },
        {
            Header: 'Name',
            accessor: 'name',
            Cell: ({ value }: any) => value || '-',
        },
        {
            Header: 'Email',
            accessor: 'email',
            Cell: ({ value }: any) => value || '-',
        },
        {
            Header: 'Last Purchase',
            accessor: 'lastPurchase',
            Cell: ({ value }: any) => value || '-',
        },
        {
            Header: 'Total Purchases',
            accessor: 'totalPurchases',
            Cell: ({ value }: any) => value || '-',
        },
        {
            Header: 'Product Category',
            accessor: 'productCategory',
            Cell: ({ value }: any) => value || '-',
        },
    ];


    const [openFilter, setOpenFilter] = useState(false)

    const [filteredBuyers, setFilteredBuyers] = useState(buyerData);

    useEffect(() => {
        handleFilter();
    }, [filters]); // Re-filter whenever filters change

    const handleFilterChange = (e: any) => {
        const { name, value } = e.target;
        setFilters((prev: any) => ({ ...prev, [name]: value }));
    };

    const handleDateChange = (date: Date | null, isStartDate: boolean) => {
        setFilters((prev: any) => ({
            ...prev,
            [isStartDate ? 'startDate' : 'lastPurchase']: date,
        }));
    };
    const handleFilter = () => {
        let filteredData = buyerData;
        
        const { startDate, lastPurchase, productCategory, totalPurchases } = filters;
    
        // Filter by date range
        if (startDate && lastPurchase) {
            filteredData = filteredData.filter((buyer) => {
                const lastPurchaseDate = new Date(buyer.lastPurchase);
                return lastPurchaseDate >= startDate && lastPurchaseDate <= lastPurchase;
            });
        }
    
        // Filter by product category
        if (productCategory) {
            filteredData = filteredData.filter((buyer) => buyer.productCategory === productCategory);
        }
    
        // Filter by purchase frequency
        if (totalPurchases) {
            const frequency = parseInt(totalPurchases, 10);
            filteredData = filteredData.filter((buyer) => buyer.totalPurchases >= frequency);
        }
    
        setFilteredBuyers(filteredData);
    };

    const handleClearFilter = () => {
        setFilteredBuyers(buyerData); // Reset to original data
        setFilters({
            startDate: new Date(), // Reset to default dates
            lastPurchase: new Date(),
            productCategory: '',
            totalPurchases: '',
        });
        setOpenFilter(false)
    }

    const handleExport = (format: any) => {
        console.log(`Exporting data as ${format}`);
        // Implement CSV/Excel export logic here
    };

    const handleSelect = (selectedOption: any) => {
        setFilters((prev: any) => ({ ...prev, productCategory: selectedOption.value }));
    };

    const handleFilterOpen = () => {
        setOpenFilter(true)
    }

    return (
        <Card>
            <Card.Body>
                <div className="buyer-data-extraction-tool">
                    <h4 className="header-title">Buyer Data Extraction Tool</h4>
                <p className="text-muted font-14 mb-2">The Buyer Data Extraction Tool is a powerful solution that simplifies the retrieval and analysis of buyer information. With its intuitive interface, users can easily filter and extract key data, such as purchase history and product preferences. This tool empowers businesses to gain valuable insights into customer behavior, enabling informed decisions and targeted marketing strategies. Enhance your data-driven decision-making and elevate your business with the Buyer Data Extraction Tool.
                </p>
                    {openFilter && (
                        <Form className="mb-3">
                            <Row className="align-items-center">
                                <Col md={3} className="mb-2">
                                    <Form.Group>
                                        <FormInput
                                            label="Start Date"
                                            type="date"
                                            name="startDate"
                                            containerClass={'mb-3'}
                                            value={filters.startDate ? filters.startDate.toISOString().split('T')[0] : ''}
                                            onChange={(e) => handleDateChange(new Date(e.target.value), true)}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={3} className="mb-2">
                                    <Form.Group>
                                        <FormInput
                                            label="End Date"
                                            type="date"
                                            name="lastPurchase"
                                            containerClass={'mb-3'}
                                            value={filters.lastPurchase ? filters.lastPurchase.toISOString().split('T')[0] : ''}
                                            onChange={(e) => handleDateChange(new Date(e.target.value), false)}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={3} className="mb-4">
                                    <Form.Group>
                                        <Form.Label>Product Category</Form.Label>
                                        <Select
                                            className="react-select react-select-container"
                                            classNamePrefix="react-select"
                                            options={[
                                                { value: 'electronics', label: 'Electronics' },
                                                { value: 'clothing', label: 'Clothing' },
                                                { value: 'home goods', label: 'Home Goods' },
                                            ]}
                                            onChange={handleSelect}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={3} className="mb-4">
                                    <Form.Group>
                                        <Form.Label>Purchase Frequency:</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="totalPurchases"
                                            value={filters.totalPurchases}
                                            onChange={handleFilterChange}
                                            placeholder="Min Purchases"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mb-2">
                                <Col>
                                    <Button variant="primary" onClick={handleFilter}>Filter</Button>
                                  <Button variant="success" className="ms-2" onClick={handleClearFilter}>Clear</Button>
                                </Col>
                            </Row>
                        </Form>
                    )}
                    <div >
                        <Row className="align-items-end">
                            <Col md={6} className="mb-4">
                                {/* You can add content here if needed */}
                            </Col>
                            <Col md={6} className="text-end mb-4">
                            {!openFilter && (
                            <Button variant="primary" onClick={handleFilterOpen}>Filter</Button>
                            )}
                            <Button variant="success" className="ms-2" onClick={() => handleExport('Excel')}>Export</Button>
                            </Col>
                        </Row>
                        <Table
                            columns={columns}
                            data={filteredBuyers}
                            pageSize={5}
                            sizePerPageList={sizePerPageList}
                            isSortable={true}
                            pagination={true}
                            isSearchable={true}
                        />
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default BuyerDataExtractionTool;
