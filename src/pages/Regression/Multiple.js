import { Container, Form, Button, Row, Col, Table } from 'react-bootstrap'
import { useState } from 'react'
import React from 'react'
import { Line } from 'react-chartjs-2'
const axios = require('axios').default

const Multiple = () => {
    const [data, setData] = useState({
        A: '[[1, 0, 1, 4],[0, 1, 3, -5],[2, 4, 1, -6],[3, 2, 2, 0],[4, 1, 5, -1],[2, 3, 3, -7],[1, 6, 4, -20]]',
    })
    const [result, setResult] = useState(null)

    return (
        <div>
            <Container className="mt-2 p-4 rounded bg-white">
                <h2 style={{ color: 'green' }}> Multiple Regression Method </h2>{' '}
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
                                placeholder="[&#10;[1, 0, 1, 4],&#10;[0, 1, 3, -5],&#10;[2, 4, 1, -6],&#10;[3, 2, 2, 0],&#10;[4, 1, 5, -1],&#10;[2, 3, 3, -7],&#10;[1, 6, 4, -20]&#10;]"
                                onChange={(e) => {
                                    setData({ ...data, A: e.target.value })
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
                                        'http://localhost:8080/api/regression/Multiple',
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
                )}
            </Container>
        </div>
    )
}
export default Multiple
