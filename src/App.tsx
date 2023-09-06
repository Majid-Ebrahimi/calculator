import React, {useState} from 'react';
import './App.css';
import Layout from "./components/layouts/Layout";
import CalculationBox from "./components/layouts/CalculationBox";
import MainCalculator from "./components/layouts/MainCalculator";

import CalculatorNumber from "./components/ui/CalculatorNumber";

let calculationResult: number
let firstValue: number
let operatorCalculation: string
let moreOperator: boolean = false


function App() {
    const [value, setValue] = useState("0")

    enum operator {
        //TODO: fix minus bug
        addition = "+",
        subtraction = "-",
        multiplication = "*",
        division = "/",
    }

    let isIncludesOperator = (value.includes(operator.addition) || value.includes(operator.subtraction) || value.includes(operator.multiplication) || value.includes(operator.division))
    let isEndsWithOperator = (value.endsWith(operator.addition) || value.endsWith(operator.subtraction) || value.endsWith(operator.multiplication) || value.endsWith(operator.division))

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
        if (!isEndsWithOperator) {
            if (!isIncludesOperator) {
                setValue(value.concat(opr))
                firstValue = parseFloat(value)
                operatorCalculation = opr
                moreOperator = false
            } else {
                moreOperator = true
                resultHandler(opr)
            }
        }
    }

    function resultHandler(opr?: string) {

        if (!isEndsWithOperator) {
            if (isIncludesOperator) {
                const secondValue = parseFloat(value.substring(value.indexOf(operatorCalculation) + 1, value.length))
                if (operatorCalculation === operator.addition) {
                    calculationResult = firstValue + secondValue
                } else if (operatorCalculation === operator.subtraction) {
                    calculationResult = firstValue - secondValue
                } else if (operatorCalculation === operator.multiplication) {
                    calculationResult = firstValue * secondValue
                } else if (operatorCalculation === operator.division) {
                    calculationResult = firstValue / secondValue
                }
                if (moreOperator) {
                    if (opr != null) {
                        operatorCalculation = opr
                    }
                    setValue(calculationResult.toString().concat(operatorCalculation))
                    moreOperator = false
                    firstValue = calculationResult
                } else {
                    setValue(calculationResult.toString())
                    if (opr != null) {
                        operatorCalculation = opr
                    }
                }
            }
        }

    }

    return (
        <Layout>
            <CalculationBox text={value}/>
            <MainCalculator
                onRes={resultHandler}
            >
                <CalculatorNumber onCalNumber={
                    deleteAllHandler
                } calNumber={"C"}/>
                <CalculatorNumber onCalNumber={
                    deleteHandler
                } calNumber={"X"}/>
                <CalculatorNumber onCalNumber={() => {
                }} calNumber={'1/2'}/>
                <CalculatorNumber onCalNumber={() => {
                }} calNumber={'%'}/>
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
                    operatorHandler(operator.division)
                }} calNumber={operator.division}/>

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
                    operatorHandler(operator.multiplication)
                }} calNumber={operator.multiplication}/>
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
                    setValueNumber('2.71828183')
                }} calNumber={'e'}/>
                <CalculatorNumber onCalNumber={() => {
                    setValueNumber('0')
                }} calNumber={0}/>
                <CalculatorNumber onCalNumber={() => {
                    setValueNumber('.')
                }} calNumber={'.'}/>

                <CalculatorNumber onCalNumber={() => {
                    operatorHandler(operator.addition)
                }} calNumber={operator.addition}/>
            </MainCalculator>
        </Layout>
    );
}

export default App;
