import React, {useState} from 'react';
import './App.css';
import Layout from "./components/layouts/Layout";
import CalculationBox from "./components/layouts/CalculationBox";
import MainCalculator from "./components/layouts/MainCalculator";

import CalculatorNumber from "./components/ui/CalculatorNumber";

let resultTemp: number
let firstValue: number
let tempOperator: string

function App() {
    const [value, setValue] = useState("0")

    enum operator {
        addition = "+",
        subtraction = "-",
        multiplication = "*",
        division = "/",
    }

    function setValueNumber(num: string) {

        if (!(value.length === 1 && num === "0")) {
            setValue(value.concat(num))
        }

    }

    function deleteHandler() {
        setValue(value.slice(0, value.length - 1))
    }

    function deleteAllHandler() {
        setValue("0")
    }

    function operatorHandler(opr: string) {
        if (!(value.endsWith(operator.addition) || value.endsWith(operator.subtraction) || value.endsWith(operator.multiplication) || value.endsWith(operator.division))) {
            setValue(value.concat(opr))
            firstValue = parseInt(value)
            tempOperator = opr
        }
    }

    function resultHandler() {

        const secondValue = parseInt(value.substring(value.indexOf(tempOperator) + 1, value.length))
        if (tempOperator === operator.addition) {
            resultTemp = firstValue + secondValue
        } else if (tempOperator === operator.subtraction) {
            resultTemp = firstValue - secondValue
        } else if (tempOperator === operator.multiplication) {
            resultTemp = firstValue * secondValue
        } else if (tempOperator === operator.division) {
            resultTemp = firstValue / secondValue
        }
        setValue(resultTemp.toString())

    }

    return (
        <Layout>
            <CalculationBox text={value}/>
            <MainCalculator
                onRes={resultHandler}
                onDelete={deleteHandler}
                onDeleteAll={deleteAllHandler}
            >
                <CalculatorNumber onCalNumber={() => {
                    setValueNumber('7')
                }} calNumber={7}/>
                <CalculatorNumber onCalNumber={() => {
                    setValueNumber('8')
                }} calNumber={8}/>
                <CalculatorNumber onCalNumber={() => {
                    setValueNumber('9')
                }} calNumber={9}/>
                <CalculatorNumber onCalNumber={() => {
                    operatorHandler(operator.multiplication)
                }} calNumber={operator.multiplication}/>
                <CalculatorNumber onCalNumber={() => {
                    setValueNumber('4')
                }} calNumber={4}/>
                <CalculatorNumber onCalNumber={() => {
                    setValueNumber('5')
                }} calNumber={5}/>
                <CalculatorNumber onCalNumber={() => {
                    setValueNumber('6')
                }} calNumber={6}/>
                <CalculatorNumber onCalNumber={() => {
                    operatorHandler(operator.division)
                }} calNumber={operator.division}/>
                <CalculatorNumber onCalNumber={() => {
                    setValueNumber('1')
                }} calNumber={1}/>
                <CalculatorNumber onCalNumber={() => {
                    setValueNumber('2')
                }} calNumber={2}/>
                <CalculatorNumber onCalNumber={() => {
                    setValueNumber('3')
                }} calNumber={3}/>
                <CalculatorNumber onCalNumber={() => {
                    operatorHandler(operator.subtraction)
                }} calNumber={operator.subtraction}/>
                <CalculatorNumber onCalNumber={() => {
                    setValueNumber('0')
                }} calNumber={0}/>
                <CalculatorNumber onCalNumber={() => {
                    operatorHandler(operator.addition)
                }} calNumber={operator.addition}/>
            </MainCalculator>
        </Layout>
    );
}

export default App;
