import { Container, Form, Button, Row, Col, Table } from 'react-bootstrap'
import { useState } from 'react'
import React from 'react'
import { Line } from 'react-chartjs-2'
const axios = require('axios').default

export default function Bisection() {
    const [data, setData] = useState({
        L: 1.5,
        R: 2.0,
        eq: 'x^4-13',
        error: 0.00001,
    })
    const [results, setResults] = useState(null)
    const TabelData = {
        labels: [],
        datasets: [
            {
                label: 'Bisection',
                data: [],
                fill: false,
                backgroundColor: 'green',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    }
    results !== null &&
        results.map(
            (r) => (
                TabelData.labels.push(r.xm), //กูยังไม่รู้ว่าทำอย่างไง
                TabelData.datasets[0].data.push(r.prot)
            )
        )
    console.log(TabelData)
    console.log(results)
    return (
        <div>
            <Container className="mt-2 p-4 rounded bg-white">
                <h2 style={{ color: 'green' }}> Bisection Method</h2> <br />
                <Form>
                    <Form.Group as={Row} controlId="Equation">
                        <Form.Label column sm="1">
                            Equation
                        </Form.Label>
                        <Col sm="3">
                            <Form.Control
                                type="text"
                                placeholder="(x^4)-13"
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
                                placeholder="1.5"
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
                                placeholder="2.0"
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
                                        'http://localhost:8080/api/root/bisection',
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
                                        X<sub>M</sub>
                                    </th>
                                    <th>ERROR</th>
                                </tr>
                            </thead>
                            <tbody>
                                {results.map((g) => (
                                    <tr key={g.it}>
                                        <td>{g.it}</td>
                                        <td>{g.xl}</td>
                                        <td>{g.xr}</td>
                                        <td>{g.xm}</td>
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
