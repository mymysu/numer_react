import { useEffect, useState } from 'react'
import Desmos from 'desmos'

import { addStyles, EditableMathField } from 'react-mathquill'

function A() {
    addStyles()
    const [latex, setLatex] = useState('')
    useEffect(() => {
        var elt = document.getElementById('calculator')
        var calculator = Desmos.GraphingCalculator(elt, { expressions: false })
        calculator.setExpression({ id: 'graph1', latex: `${latex}` })
        return () => {
            calculator.destroy()
        }
    })

    return (
        <div>
            <div
                id="calculator"
                style={{ width: '600px', height: '400px' }}
            ></div>
            <div>
                <EditableMathField
                    latex={latex}
                    onChange={(mathField) => {
                        setLatex(mathField.latex())
                    }}
                />
                <p>{latex}</p>
            </div>
        </div>
    )
}

export default A
