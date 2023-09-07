import React, {useState} from 'react';
import './App.css';
import Layout from "./components/layouts/Layout";
import CalculationBox from "./components/layouts/CalculationBox";
import MainCalculator from "./components/layouts/MainCalculator";

import CalculatorButton from "./components/ui/CalculatorButton";
import * as Icons from "./assets/Icons";
import NavigationMenu from "./components/layouts/NavigationMenu";

let calculationResult: number
let firstValue: number
let operatorCalculation: string
let moreOperator: boolean = false


function App() {
    const [value, setValue] = useState("0")

    enum operator {
        addition = "+",
        subtraction = "-",
        multiplication = "*",
        division = "/",
        remainder = "%",
    }

    let isIncludesOperator = (value.includes(operator.addition) || ((value.lastIndexOf(operator.subtraction) !== 0) && value.includes(operator.subtraction)) || value.includes(operator.multiplication) || value.includes(operator.division) || value.includes(operator.remainder))
    let isEndsWithOperator = (value.endsWith(operator.addition) || value.endsWith(operator.subtraction) || value.endsWith(operator.multiplication) || value.endsWith(operator.division) || value.endsWith(operator.remainder))

    function setValueNumber(num: string) {

        if (!(value.startsWith("0") && num === "0")) {
            if (value.startsWith("0")) {
                setValue(value.replaceAll('0', num))
            } else {
                setValue(value.concat(num))
            }
        }

    }

    function deleteHandler() {
        if (value.length !== 1) {
            setValue(value.slice(0, value.length - 1))
        } else if (value.length === 1) {
            setValue(value.replaceAll(value, '0'))
        } else {
            setValue(value.slice(0, value.length - 1))
        }
    }

    function deleteAllHandler() {
        setValue("0")
    }

    function operatorHandler(opr: string) {
        //Todo: fix if statements here
        if (value.length !== 0 || opr === operator.subtraction) {
            if (!(value.startsWith('0') && opr !== operator.subtraction)) {
                if (value.startsWith('0') && opr === operator.subtraction) {
                    setValue(value.replaceAll('0', opr))
                } else if (!isEndsWithOperator) {
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
        }

    }

    function resultHandler(opr?: string) {

        if (!isEndsWithOperator) {
            if (isIncludesOperator) {
                let secondValue
                if (operatorCalculation === operator.subtraction) {
                    secondValue = parseFloat(value.substring(value.lastIndexOf(operatorCalculation), value.length))
                } else {
                    secondValue = parseFloat(value.substring(value.indexOf(operatorCalculation) + 1, value.length))
                }
                if (operatorCalculation === operator.addition || operatorCalculation === operator.subtraction) {
                    calculationResult = firstValue + secondValue
                } else if (operatorCalculation === operator.multiplication) {
                    calculationResult = firstValue * secondValue
                } else if (operatorCalculation === operator.division) {
                    calculationResult = firstValue / secondValue
                } else if (operatorCalculation === operator.remainder) {
                    calculationResult = firstValue % secondValue
                }
                if (moreOperator && calculationResult !== 0) {
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
            <NavigationMenu/>
            <CalculationBox text={value}/>
            <MainCalculator
                onRes={resultHandler}
            >
                <Icons.ClearIc onTap={
                    deleteAllHandler
                }/>
                <Icons.ArrBackIc onTap={
                    deleteHandler
                }/>
                <Icons.HalfIc onTap={() => {
                    // operatorHandler(operator.division)
                    // setValueNumber('/2')
                    // resultHandler()
                }}/>
                <Icons.PercentIc onTap={() => {
                    operatorHandler(operator.remainder)
                }}/>
                <CalculatorButton onCalNumber={() => {
                    setValueNumber('7')
                }} calNumber={7}/>
                <CalculatorButton onCalNumber={() => {
                    setValueNumber('8')
                }} calNumber={8}/>
                <CalculatorButton onCalNumber={() => {
                    setValueNumber('9')
                }} calNumber={9}/>
                <Icons.DivisionIC onTap={() => {
                    operatorHandler(operator.division)
                }}/>
                <CalculatorButton onCalNumber={() => {
                    setValueNumber('4')
                }} calNumber={4}/>
                <CalculatorButton onCalNumber={() => {
                    setValueNumber('5')
                }} calNumber={5}/>
                <CalculatorButton onCalNumber={() => {
                    setValueNumber('6')
                }} calNumber={6}/>

                <Icons.MultiplicationIc onTap={() => {
                    operatorHandler(operator.multiplication)
                }}/>
                <CalculatorButton onCalNumber={() => {
                    setValueNumber('1')
                }} calNumber={1}/>
                <CalculatorButton onCalNumber={() => {
                    setValueNumber('2')
                }} calNumber={2}/>
                <CalculatorButton onCalNumber={() => {
                    setValueNumber('3')
                }} calNumber={3}/>
                <Icons.MinusIc onTap={() => {
                    operatorHandler(operator.subtraction)
                }}/>
                <CalculatorButton onCalNumber={() => {
                    setValueNumber('2.71828183')
                }} calNumber={'e'}/>
                <CalculatorButton onCalNumber={() => {
                    setValueNumber('0')
                }} calNumber={0}/>
                <CalculatorButton onCalNumber={() => {
                    setValueNumber('.')
                }} calNumber={'.'}/>

                <Icons.PlusIc onTap={() => {
                    operatorHandler(operator.addition)
                }}/>
            </MainCalculator>
        </Layout>
    );
}

export default App;
