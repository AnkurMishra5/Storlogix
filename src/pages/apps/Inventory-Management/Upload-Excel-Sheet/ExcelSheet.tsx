import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

// hooks
import { usePageTitle } from '../../../../hooks';

// components
import FileUploader from '../../../../components/FileUploader';

const UploadExcelSheet = () => {
    // set pagetitle
    usePageTitle({
        title: 'Upload/Update Excel Sheet',
        breadCrumbItems: [
            {
                path: '/inventory-management/upload-excel-sheet',
                label: 'Forms',
            },
            {
                path: '/inventory-management/upload-excel-sheet',
                label: 'File Uploads',
                active: true,
            },
        ],
    });

    return (
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <h4 className="header-title mb-3">Effortlessly maintain your data accuracy with simple file uploads.</h4>

                        <p className="text-muted font-13 m-b-30">
                        Welcome to the Upload/Update Excel Sheet page! Here, you can easily manage your data by uploading or updating your Excel files. This functionality allows you to keep your records current and accurate. Simply select the Excel sheet you wish to upload, ensuring it meets the required format for seamless integration. With just a few clicks, you can enhance your data management process and ensure that all information is up to date. Start by selecting your file and let us handle the rest!
                        </p>

                        <FileUploader
                            onFileUpload={(files: any) => {
                                console.log('Uploaded files - ', files);
                            }}
                        />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default UploadExcelSheet;
