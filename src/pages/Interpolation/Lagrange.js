import { Container, Form, Button, Row, Col, Table } from 'react-bootstrap'
import { useState } from 'react'
import React from 'react'
import { Line } from 'react-chartjs-2'
const axios = require('axios').default

const Lagrange = () => {
    const [data, setData] = useState({
        matA:
            '[[0, 9.81],[20000, 9.7478],[40000, 9.6879],[60000, 9.6879],[80000, 9.5682] ]',
        matB: '[0, 2, 4]',
        v: 42000
    })
    const [result, setResult] = useState(null)

    return (
        <div>
            <Container className="mt-2 p-4 rounded bg-white">
                <h2 style={{ color: 'green' }}> Lagrange Method</h2> <br />
                <Form>
                    <Form.Group as={Row} controlId="DataTable">
                        <Form.Label column sm="2">
                            Data Table
                        </Form.Label>
                        <Col sm="3">
                            <textarea
                                className="form-control"
                                rows={8}
                                cols={1}
                                placeholder="[&#10;[0, 9.81],&#10;[20000, 9.7478],&#10;[40000, 9.6879],&#10;[60000, 9.6879],&#10;[80000, 9.5682]&#10;]"
                                onChange={(e) => {
                                    setData({ ...data, matA: e.target.value })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="xl">
                        <Form.Label column sm="2">
                            Poin
                        </Form.Label>
                        <Col sm="3">
                            <Form.Control
                                type="text"
                                placeholder="[0, 2, 4]"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        matB: e.target.value,
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="xl">
                        <Form.Label column sm="2">
                            Value
                        </Form.Label>
                        <Col sm="3">
                            <Form.Control
                                type="text"
                                placeholder="42000"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        v: e.target.value,
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button
                                type="button"
                                className="btn btn-success"
                                onClick={async () => {
                                    console.log(data)
                                    const res = await axios.post(
                                        'http://localhost:8080/api/Interpolation/Langrange',
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
                {result !== null && (
                    <Row>
                        <Col>
                            <Form.Label>Answer</Form.Label>
                        </Col>
                    </Row>
                )}
                {result !== null && (
                    <Row>
                        <Col>
                            <Form.Control
                                value={result !== null && result}
                                disabled={true}
                            />
                        </Col>
                    </Row>
                )}
            </Container>
        </div>
    )
}
export default Lagrange
