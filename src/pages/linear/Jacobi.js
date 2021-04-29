import { Container, Form, Button, Row, Col, Table } from 'react-bootstrap'
import { useState } from 'react'
import React from 'react'
import { Line } from 'react-chartjs-2'
const axios = require('axios').default

const Jacobi = () => {
    const [data, setData] = useState({
        A: '[[4, -4, 0], [-1, 4, -2], [0, -2, 4]]',
        B: '[400,400,400]',
        x0: '[10,10,10]',
        error: 0.00001,
    })
    const [result, setResult] = useState(null)

    return (
        <div>
            <Container className="mt-2 p-4 rounded bg-white">
                <h2 style={{ color: 'green' }}> Jacobi Iteration Method</h2>{' '}
                <br />
                <Form>
                    <Form.Group as={Row} controlId="A">
                        <Form.Label column sm="1">
                            A
                        </Form.Label>
                        <Col sm="3">
                            <textarea
                                className="form-control"
                                rows={3}
                                cols={1}
                                placeholder="[&#10;[4, -4, 0],&#10; [-1, 4, -2],&#10; [0, -2, 4]&#10;]"
                                onChange={(e) => {
                                    setData({ ...data, A: e.target.value })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="B">
                        <Form.Label column sm="1">
                            B
                        </Form.Label>
                        <Col sm="3">
                            <Form.Control
                                type="text"
                                placeholder="[400,400,400]"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        B: e.target.value,
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="x0">
                        <Form.Label column sm="1">
                            X<sub>0</sub>
                        </Form.Label>
                        <Col sm="3">
                            <Form.Control
                                type="text"
                                placeholder="[10,10,10]"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        x0: e.target.value,
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="error">
                        <Form.Label column sm="1">
                            error
                        </Form.Label>
                        <Col sm="3">
                            <Form.Control
                                type="text"
                                placeholder="0.00001"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        error: e.target.value,
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 1 }}>
                            <Button
                                className="btn btn-success"
                                type="button"
                                onClick={async () => {
                                    console.log(data)
                                    const res = await axios.post(
                                        'http://localhost:8080/api/linear/Jacobi',
                                        data
                                    )

                                    console.log(res)
                                    setResult(
                                        JSON.parse(res.request.response).data
                                    )
                                }}
                            >
                                Calculate
                            </Button>
                            {result !== null && console.log(result)}
                        </Col>
                    </Form.Group>
                </Form>
            </Container>
            {result !== null && (
                <Container className="mt-5 p-4 rounded bg-light">
                    <Table striped bordered hover variant="white">
                        <thead>
                            <tr>
                                <th>Variables</th>
                                <th>Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            {result.map((r, index) => (
                                <tr key={r}>
                                    <td>{'x' + (index + 1)}</td>
                                    <td>{r}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
            )}
        </div>
    )
}
export default Jacobi
