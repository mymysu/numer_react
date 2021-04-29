import { Container, Form, Button, Row, Col, Table } from 'react-bootstrap'
import { useState } from 'react'
import React from 'react'
import { Line } from 'react-chartjs-2'
const axios = require('axios').default

const Lu = () => {
    const [data, setData] = useState({
        A: '[[-2, 3, 1],[3, 4, -5],[1, -2, 1]]',
        B: '[9,0,-4]',
    })
    const [result, setResult] = useState(null)

    return (
        <div>
            <Container className="mt-2 p-4 rounded bg-white">
                <h2 style={{ color: 'green' }}>Lu Decomposition Method </h2>{' '}
                <br />
                <Form>
                    <Form.Group as={Row} controlId="A">
                        <Form.Label column sm="1">
                            A
                        </Form.Label>
                        <Col sm="3">
                            <textarea
                                className="form-control"
                                rows={6}
                                cols={1}
                                placeholder="[&#10;[-2, 3, 1],&#10;[3, 4, -5],&#10;[1, -2, 1]&#10;]"
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
                                placeholder="[9,0,-4]"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        B: e.target.value,
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
                                        'http://localhost:8080/api/linear/LuDecomposition',
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
export default Lu
