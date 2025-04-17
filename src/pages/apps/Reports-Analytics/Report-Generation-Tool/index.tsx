import React, { useEffect, useState } from 'react';
import { Card, Button, Form, Row, Col, Modal } from 'react-bootstrap';
import { withSwal } from 'react-sweetalert2';
import {generatedReportData} from './data'
import Select from 'react-select';
import Table from '../../../../components/Table';
import { usePageTitle } from '../../../../hooks';
import classNames from 'classnames';


type swalProps = {
    swal: any;
};

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
        value: generatedReportData.length,
    },
];

const ReportGenerationTool = () => {
    usePageTitle({
        title: 'Report Generation Tool',
        breadCrumbItems: [
            { path: '/repors-analytics/report-generation-tool', label: 'Report Generation Tool' },
            { path: '/repors-analytics/report-generation-tool', label: 'Real-Time Inventory', active: true },
        ],
    });

    const [fillModal, setFillModal] = useState<boolean>(false);
    const [modal, setModal] = useState<boolean>(false);

    const [className, setClassName] = useState<string>('');

    // Show/hide the modal
    const fillToggle = () => {
        setFillModal(!fillModal);
    };

    const toggle = () => {
        setModal(!modal);
    };
    
    const [filters, setFilters] = useState({
        timePeriod: '',
        productCategory: '',
        salesChannel: ''
    });

    const columns = [
        {
            Header: 'ID',
            accessor: 'id',
            Cell: ({ value }: any) => value || '-',
        },
        {
            Header: 'Date',
            accessor: 'date',
            Cell: ({ value }: any) => value || '-',
        },
        {
            Header: 'Product Category',
            accessor: 'productCategory',
            Cell: ({ value }: any) => value || '-',
        },
        {
            Header: 'Sales Channel',
            accessor: 'salesChannel',
            Cell: ({ value }: any) => value || '-',
        },
        {
            Header: 'Amount',
            accessor: 'amount',
            Cell: ({ value }: any) => value || '-',
        },
        {
            Header: 'Unit Sold',
            accessor: 'unitsSold',
            Cell: ({ value }: any) => value || '-',
        },
       
    ];

    const [openFilter, setOpenFilter] = useState(false)


    const [filteredBuyers, setFilteredBuyers] = useState(generatedReportData);

    const [filteredData, setFilteredData] = useState<any>([]);
    const [isReportGenerated, setIsReportGenerated] = useState(false);

    useEffect(() => {
        if(filters) { 
            handleFilter();
        }
    }, [filters,className]); // Re-filter whenever filters change
    
    const handleSelect = (selectedOption: any) => {
        setFilters((prev: any) => ({ ...prev, productCategory: selectedOption.value }));
    };


    const handleFilterChange = (e:any) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    const handleGenerateReport = () => {
     
        setClassName('success');
        fillToggle();
        console.log(className,'----className')
    
       
    };

    const handleDownloadReport = (format:any) => {
        if (!isReportGenerated) {
            // swal.fire({
            //     position: 'top-center',
            //     icon: 'error',
            //     title: 'Please Generate report first!',
            //     showConfirmButton: false,
            //     timer: 1500,
            // })
            return;
        }

        const reportContent = filteredData.map((item:any) => ({
            ID: item.id,
            Date: item.date,
            'Product Category': item.productCategory,
            'Sales Channel': item.salesChannel,
            Amount: `₹${item.amount.toFixed(2)}`,
            'Units Sold': item.unitsSold
        }));

        const blob = new Blob([JSON.stringify(reportContent, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `report.${format.toLowerCase()}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const handleFilter = () => {
        let filtered = generatedReportData;

        const { timePeriod, productCategory, salesChannel } = filters;

        // Filter by time period (you may want to adjust this based on your actual date handling)
        if (timePeriod) {
            filtered = filtered.filter(item => item.date.includes(timePeriod));
            setFilteredData(filtered);
        }

        // Filter by product category
        if (productCategory) {
            console.log(productCategory,'---productCategory')
            filtered = filtered.filter(item => item.productCategory === productCategory);
            console.log(filtered,'----filtered')
            setFilteredData(filtered);
        }

        // Filter by sales channel
        if (salesChannel) {
            filtered = filtered.filter(item => item.salesChannel === salesChannel);
            setFilteredData(filtered);
        }

        
    };


    const handleClearFilter = () => {
        setFilteredBuyers(generatedReportData); // Reset to original data
        setFilters({
            timePeriod: '',
            productCategory: '',
            salesChannel: '',
        });
        setOpenFilter(false)
    }

    const handleFilterOpen = () => {
        setOpenFilter(true)
    }

    const handleContinue = () => {
        // This function is called when the "Continue" button is clicked in the modal
        const filtered = generatedReportData.filter((item) => {
            const matchesTimePeriod = filters.timePeriod ? item.date.includes(filters.timePeriod) : true;
            const matchesCategory = filters.productCategory ? item.productCategory === filters.productCategory : true;
            const matchesChannel = filters.salesChannel ? item.salesChannel === filters.salesChannel : true;
            return matchesTimePeriod && matchesCategory && matchesChannel;
        });
    
        setFilteredData(filtered);
        setIsReportGenerated(true);
        fillToggle(); // Close the modal after generating the report
    };



    return (
        <>
              <Modal show={fillModal} onHide={fillToggle} size="sm">
                <div className={classNames('modal-filled', 'bg-' + className)}>
                    <Modal.Body className="p-4">
                        <div className="text-center">
                            <i className="dripicons-checkmark h1 text-white"></i>
                            <h4 className="mt-2 text-white">Well Done!</h4>
                            <p className="mt-3 text-white">
                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                facilisis in, egestas eget quam.
                            </p>
                            <Button onClick={handleContinue} className="btn-light my-2">
                                Continue
                            </Button>
                        </div>
                    </Modal.Body>
                </div>
            </Modal>
        <Card>
            <Card.Body>
                <Row className="align-items-end">
                    <Col md={6} className="mb-4">
                        <h4>Report Generation Tool</h4>

                    </Col>
                    <Col md={6} className="text-end mb-4">
                        {!openFilter && (
                            <Button variant="primary" onClick={handleFilterOpen}>Filter</Button>
                        )}
                        <Button variant="primary" className="ms-2" onClick={handleGenerateReport}>Generate Report</Button>
                        <Button variant="success" className="ms-2" onClick={() => handleDownloadReport('JSON')}>Download JSON</Button>
                        <Button variant="success" className="ms-2" onClick={() => handleDownloadReport('CSV')}>Download CSV</Button>
                    </Col>
                </Row>
                {openFilter && (
                    <Form className="mb-3">
                        <Row className="align-items-center">
                            <Col md={4} className="">
                                <Form.Group>
                                    <Form.Label>Time Period</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="timePeriod"
                                        value={filters.timePeriod}
                                        onChange={handleFilterChange}
                                        placeholder="e.g. Last Month" />
                                </Form.Group>
                            </Col>
                            <Col md={4} className="">
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
                                        onChange={handleSelect} />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>Sales Channel</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="salesChannel"
                                        value={filters.salesChannel}
                                        onChange={handleFilterChange}
                                        placeholder="e.g. Online" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-2 mt-4">
                            <Col>
                                <Button variant="primary" onClick={handleFilter}>Filter</Button>
                                <Button variant="success" className="ms-2" onClick={handleClearFilter}>Clear</Button>
                            </Col>
                        </Row>
                    </Form>
                )}

                {/*
                    <Table striped bordered hover className="mt-4">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Date</th>
                                <th>Product Category</th>
                                <th>Sales Channel</th>
                                <th>Amount</th>
                                <th>Units Sold</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData?.length > 0 ? (
                                filteredData?.map((item:any) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.date}</td>
                                        <td>{item.productCategory}</td>
                                        <td>{item.salesChannel}</td>
                                        <td>${item.amount.toFixed(2)}</td>
                                        <td>{item.unitsSold}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td  className="text-center">No data available for the selected filters.</td>
                                </tr>
                            )}
                        </tbody>
                    </Table> */}

                <Table
                    columns={columns}
                    data={filteredData}
                    pageSize={5}
                    sizePerPageList={sizePerPageList}
                    isSortable={true}
                    pagination={true}
                    isSearchable={true} />
            </Card.Body>
        </Card>
        
  </>
    );
};

export default ReportGenerationTool;
