import { Container, Form, Button, Row, Col, Table } from 'react-bootstrap'
import { useState } from 'react'
import React from 'react'
import { Line } from 'react-chartjs-2'
const axios = require('axios').default

const NewtonRphson = () => {
    const [data, setData] = useState({
        start: 2.0,
        eq: '(x^2)-7',
        error: 0.000001,
    })
    const [results, setResults] = useState(null)
    const TabelData = {
        labels: [],
        datasets: [
            {
                label: 'Newton Rphson',
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
                TabelData.labels.push(r.xi),
                TabelData.datasets[0].data.push(r.prot)
            )
        )
    return (
        <div>
            <Container className="mt-2 p-4 rounded bg-white">
                <h2 style={{ color: 'green' }}> Newton Rphson Method</h2> <br />
                <Form>
                    <Form.Group as={Row} controlId="Equation">
                        <Form.Label column sm="1">
                            Equation
                        </Form.Label>
                        <Col sm="3">
                            <Form.Control
                                type="text"
                                placeholder="(x^2)-7"
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
                            X<sub>0</sub>
                        </Form.Label>
                        <Col sm="3">
                            <Form.Control
                                type="text"
                                placeholder="1.5"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        start: e.target.value,
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
                                    const res = await axios.post(
                                        'http://localhost:8080/api/root/newtonRap',
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
                                        X<sub>i</sub>
                                    </th>
                                    <th>
                                        f(x<sub>i</sub>)
                                    </th>
                                    <th>
                                        f<sup>'</sup>(x<sub>i</sub>)
                                    </th>
                                    <th>ERROR</th>
                                </tr>
                            </thead>
                            <tbody>
                                {results.map((g) => (
                                    <tr key={g.i}>
                                        <td>{g.i}</td>
                                        <td>{g.xi}</td>
                                        <td>{g.c1}</td>
                                        <td>{g.c2}</td>

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
export default NewtonRphson
