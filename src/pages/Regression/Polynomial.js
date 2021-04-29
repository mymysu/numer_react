import { Container, Form, Button, Row, Col, Table } from 'react-bootstrap'
import { useState } from 'react'
import React from 'react'
import { Line } from 'react-chartjs-2'
const axios = require('axios').default

const Polynomial = () => {
    const [data, setData] = useState({
        A:
            '[[10,5],[15,9],[20,15],[30,18],[40,22],[50,30],[60,35],[70,38],[80,43]]',
        o: '2',
    })
    const [result, setResult] = useState(null)

    return (
        <div>
            <Container className="mt-2 p-4 rounded bg-white">
                <h2 style={{ color: 'green' }}>
                    {' '}
                    Polynomial Regression Method{' '}
                </h2>{' '}
                <br />
                <Form>
                    <Form.Group as={Row} controlId="DataTable">
                        <Form.Label column sm="2">
                            Data Table
                        </Form.Label>
                        <Col sm="3">
                            <textarea
                                className="form-control"
                                rows={12}
                                cols={1}
                                placeholder="[ &#10;[10,5], &#10;[15,9], &#10;[20,15], &#10;[30,18], &#10;[40,22], &#10;[50,30], &#10;[60,35], &#10;[70,38], &#10;[80,43] &#10;]"
                                onChange={(e) => {
                                    setData({ ...data, A: e.target.value })
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
                                placeholder="2"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        o: e.target.value,
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button
                            className="btn btn-success"
                                type="button"
                                onClick={async () => {
                                    console.log(data)
                                    const res = await axios.post(
                                        'http://localhost:8080/api/regression/Polynomial',
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
                            <Form.Label>Answer </Form.Label>
                        </Col>
                    </Row>
                )}
                {result !== null && (
                    <Row>
                        <Col>
                            <Form.Control
                                value={
                                    result !== null && result
                                }
                                disabled={true}
                            />
                        </Col>
                    </Row>
                )}
            </Container>
        </div>
    )
}
export default Polynomial
