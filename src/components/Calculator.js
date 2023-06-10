import { useState } from "react"
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Calculator = () => {

    const [resultado, setResultado] = useState(0);
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [op, setOp] = useState("+");

    const calcular = (num1,num2,op) => {
        setNum1(num1);
        setNum2(num2);
        setOp(op);
        let res;
        switch (op) {
            case '+':
                res = Number(num1) + Number(num2);
                break;
            case '-':
                res = Number(num1) - Number(num2);
                break;
            case '*':
                res = Number(num1) * Number(num2);
                break;
            case '/':
                res = Number(num1) / Number(num2);
                break;
            case '^':
                res = Math.pow(Number(num1), Number(num2));
                break;
            default:
                res = null;
        }
        setResultado(res);
    }

    return (
        <div>
            <h1>Calculadora React</h1>
            <input type="number" onChange={e => calcular(e.target.value, num2, op)} placeholder="0"/>
            <select onChange={e => calcular(num1, num2, e.target.value)} placeholder="+">
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
                <option value="^">^</option>
            </select>
            <input type="number" onChange={e => calcular(num1, e.target.value, op)} placeholder="0"/>
            <br/>
            <p>Resultado: {resultado}</p>
        </div>
    )
}
