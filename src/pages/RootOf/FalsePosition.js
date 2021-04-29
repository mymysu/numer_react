import { Container, Form, Button, Row, Col, Table } from 'react-bootstrap'
import { useState } from 'react'
import React from 'react'
import { Line } from 'react-chartjs-2'
const axios = require('axios').default

export default function FalsePosition() {
    const [data, setData] = useState({
        L: 0.02,
        R: 0.03,
        x: 1 / 43,
        eq: '43x-1',
        error: 0.00001,
    })
    const [results, setResults] = useState(null)
    const TabelData = {
        labels: [],
        datasets: [
            {
                label: 'False Position',
                data: [],
                fill: false,
                backgroundColor: 'green',
                borderColor: 'rgb(204, 204, 255)',
            },
        ],
    }
    results !== null &&
        results.map(
            (r) => (
                TabelData.labels.push(r.x1), //กูยังไม่รู้ว่าทำอย่างไง
                TabelData.datasets[0].data.push(r.prot)
            )
        )
    console.log(results)
    return (
        <div>
            <Container className="mt-2 p-4 rounded bg-white">
                <h2 style={{ color: 'green' }}> False-Position Method</h2>{' '}
                <br />
                <Form>
                    <Form.Group as={Row} controlId="Equation">
                        <Form.Label column sm="1">
                            Equation
                        </Form.Label>
                        <Col sm="3">
                            <Form.Control
                                type="text"
                                placeholder="43x-1"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        eq: e.target.value,
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="xl">
                        <Form.Label column sm="1">
                            X<sub>L</sub>
                        </Form.Label>
                        <Col sm="3">
                            <Form.Control
                                type="number"
                                placeholder="0.02"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        L: e.target.value,
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="xr">
                        <Form.Label column sm="1">
                            X<sub>R</sub>
                        </Form.Label>
                        <Col sm="3">
                            <Form.Control
                                type="number"
                                placeholder="0.03"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        R: e.target.value,
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="error">
                        <Form.Label column sm="1">
                            Error
                        </Form.Label>
                        <Col sm="3">
                            <Form.Control
                                type="number"
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
                                type="button"
                                className="btn btn-success"
                                onClick={async () => {
                                    const res = await axios.post(
                                        'http://localhost:8080/api/root/falsePosition',
                                        data
                                    )
                                    console.log(res)
                                    setResults(
                                        JSON.parse(res.request.response).data
                                    )
                                }}
                            >
                                Calculate
                            </Button>
                        </Col>
                    </Form.Group>
                    {results !== null && (
                        <Table bordered hover>
                            <thead>
                                <tr>
                                    <th>Iteration</th>
                                    <th>
                                        X<sub>L</sub>
                                    </th>
                                    <th>
                                        X<sub>R</sub>
                                    </th>
                                    <th>
                                        X<sub>i</sub>
                                    </th>

                                    <th>ERROR</th>
                                </tr>
                            </thead>
                            <tbody>
                                {results.map((g) => (
                                    <tr key={g.ind}>
                                        <td>{g.ind}</td>
                                        <td>{g.xl}</td>
                                        <td>{g.xr}</td>
                                        <td>{g.x1}</td>
                                        <td>{g.er}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
                </Form>
                <Line data={TabelData} width={'20%'} height={'10%'} />
            </Container>
        </div>
    )
}
