import React, { useState } from 'react';
import { usePageTitle } from '../../../../hooks';
import { Card, Table, ListGroup, Col, Row } from 'react-bootstrap';
import { orderData } from './data';

const OrderDetailView = () => {
    const [order, setOrder] = useState(orderData);

    usePageTitle({
        title: 'Order Management',
        breadCrumbItems: [
            { path: '/order-management/detail', label: 'detail' },
            { path: '/order-management/detail', label: 'detail', active: true },
        ],
    });

    return (
        <Card className="my-4">
        <Card.Body>
        <h4 className="header-title">
                                Order View
                            </h4>
                            <p className="text-muted font-14 mb-4">
                            Effortlessly track and manage your orders in one place. Our intuitive order view provides all the details you need—shipping information, payment status, and product insights—ensuring a seamless experience from purchase to delivery.
                            </p>
          <div className="order-detail-view">
            {/* Buyer Details with Edit Button */}
            <Row className="mb-4 align-items-center">
              <Col xs={10}>
                <h5 className="text-muted">Buyer Details</h5>
                <p><strong>Order ID:</strong> {order.orderId}</p>
                <p><strong>Name:</strong> {order.buyerDetails.buyerName}</p>
                <p><strong>Email:</strong> {order.buyerDetails.email}</p>
                <p><strong>Phone:</strong> {order.buyerDetails.phone}</p>
              </Col>
              {/* <Col xs={2} className="text-end">
                <IconButton aria-label="edit" size="large">
                  <EditIcon />
                </IconButton>
              </Col> */}
            </Row>
  
            {/* Address Details with Edit Button */}
            <Row className="mb-4 align-items-center">
            <Col xs={10}>
              <h5 className="text-muted">Address</h5>
            <Row>
                <Col md={12}>
                  <p><strong>Street:</strong> {order.buyerDetails.shippingAddress.street}</p>
                </Col>
                <Col md={4}>
                  <p><strong>City:</strong> {order.buyerDetails.shippingAddress.city}</p>
                </Col>
                <Col md={4}>
                  <p><strong>State:</strong> {order.buyerDetails.shippingAddress.state}</p>
                </Col>
                <Col md={4}>
                  <p><strong>Zip Code:</strong> {order.buyerDetails.shippingAddress.zip}</p>
                </Col>
                <Col md={12}>
                  <p><strong>Country:</strong> {order.buyerDetails.shippingAddress.country}</p>
                </Col>
              </Row>
              </Col>
              </Row>

         {/* Product List Table */}
         <Row className="mb-4">
            <Col xs={12}>
              <h5 className="text-muted">Product List</h5>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Item Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {order.productList.map((product) => (
                    <tr key={product.itemId}>
                      <td>{product.itemName}</td>
                      <td>{product.quantity}</td>
                      <td>₹{product.price.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
           {/* Updated Payment Info Section */}
           <Row className="payment-info mt-4">
            <Col xs={12} className="mb-3">
              <h5 className="text-muted">Payment Information</h5>
            </Col>
            <Col xs={6}>
              <p><strong>Payment Status:</strong></p>
              <p>{order.paymentStatus}</p>
            </Col>
            <Col xs={6} className="text-end">
              <p><strong>Total Amount:</strong></p>
              <p className="text-success" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              ₹{order.totalAmount.toFixed(2)}
              </p>
            </Col>
          </Row>

          {/* Additional Order Details */}
          <Row className="order-info mt-3">
            <Col xs={6}>
              <p><strong>Order Date:</strong></p>
              <p>{new Date(order.orderDate).toLocaleDateString()}</p>
            </Col>
            <Col xs={6} className="text-end">
              <p><strong>Status:</strong></p>
              <p>{order.status}</p>
            </Col>
            <Col xs={6} className="mt-3">
              <p><strong>Tracking ID:</strong></p>
              <p>{order.trackingId || "N/A"}</p>
            </Col>
          </Row>

          </div>
        </Card.Body>
      </Card>
    );
};

export default OrderDetailView;
