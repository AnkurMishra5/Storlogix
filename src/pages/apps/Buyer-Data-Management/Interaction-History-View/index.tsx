import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { interactionHistoryData } from './data'; // Assume this function fetches data from an API
import Table from '../../../../components/Table';
import { usePageTitle } from '../../../../hooks';



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
        value: interactionHistoryData.length,
    },
];
const BuyerInteractionHistoryViewer = () => {
    const [interactionData, setInteractions] = useState(interactionHistoryData);
    const [loading, setLoading] = useState(true);
    usePageTitle({
        title: 'Interaction History Viewer',
        breadCrumbItems: [
            { path: '/buyer-management/interaction-history-view', label: 'Interaction History Viewer' },
            { path: '/buyer-management/interaction-history-view', label: 'Interaction History Viewer', active: true },
        ],
    });

    const columns = [
        {
            Header: 'ID',
            accessor: 'id',
            Cell: ({ value }: any) => value || '-',
        },
        {
            Header: 'Buyer Name',
            accessor: 'buyerName',
            Cell: ({ value }: any) => value || '-',
        },
        {
            Header: 'Interaction Date',
            accessor: 'date',
            Cell: ({ value }: any) => value || '-',
        },
        {
            Header: 'Message',
            accessor: 'message',
            Cell: ({ value }: any) => value || '-',
        },
        {
            Header: 'Response Statu',
            accessor: 'responseStatus',
            Cell: ({ value }: any) => value || '-',
        },
    ];
    useEffect(() => {
        if (interactionData) {
            setLoading(false)
        }
    }, []);
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Buyer Interaction History Viewer</h4>
                <p className="text-muted font-14 mb-4">The Buyer Interaction History Viewer empowers admins to effortlessly access and analyze detailed interaction histories with buyers via WhatsApp. This feature serves as a comprehensive repository of communication, enabling admins to review past conversations, track engagement patterns, and understand buyer preferences. By consolidating interaction data into a user-friendly interface, admins can enhance customer relationships, tailor marketing strategies, and respond proactively to buyer needs. Experience a seamless connection with your buyers, ensuring every interaction is informed and impactful.
                </p>
                <Table
                    columns={columns}
                    data={interactionData}
                    pageSize={5}
                    sizePerPageList={sizePerPageList}
                    isSortable={true}
                    pagination={true}
                    isSearchable={true}
                />
            </Card.Body>
        </Card>
    );
};

export default BuyerInteractionHistoryViewer;
