import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Table, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Message from '../components/Message';
import Loader from '../components/Loader';

import { listOrders } from '../actions/orderActions';

const OrderListScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // const orderDelete = useSelector((state) => state.orderDelete);
  // const { success: successDelete } = orderDelete;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      navigate('/login');
    }
  }, [dispatch, navigate, userInfo]); //, successDelete

  // const deleteHandler = (id) => {
  //   if (window.confirm('Are you sure?')) {
  //     dispatch(deleteUser(id));
  //   }
  // };

  return (
    <>
      <h1>Orders</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user && order.user.name}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>{order.totalPrice}</td>
                <td>
                  {order.isPaid ? (
                    order.paidAt.substring(0, 10)
                  ) : (
                    <i
                      className='fas fa-times d-flex justify-content-center'
                      style={{ color: 'red' }}
                    />
                  )}
                </td>
                <td>
                  {order.isDelivered ? (
                    order.deliveredAt.substring(0, 10)
                  ) : (
                    <i
                      className='fas fa-times d-flex justify-content-center'
                      style={{ color: 'red' }}
                    />
                  )}
                </td>
                <td>
                  <div className='d-flex justify-content-center '>
                    <LinkContainer to={`/order/${order._id}`}>
                      <Button variant='active' className='btn-sm'>
                        Details
                      </Button>
                    </LinkContainer>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default OrderListScreen;
