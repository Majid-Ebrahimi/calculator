import React, {useState} from 'react';
import './App.css';
import Layout from "./components/layouts/Layout";
import CalculationBox from "./components/layouts/CalculationBox";
import MainCalculator from "./components/layouts/MainCalculator";

import CalculatorButton from "./components/ui/CalculatorButton";
import * as Icons from "./assets/Icons";
import NavigationMenu from "./components/layouts/NavigationMenu";
import {IconContainer} from "./assets/Icons";

let calculationResult: number
let firstValue: number
let operatorCalculation: string
let moreOperator: boolean = false


function App() {
    const [value, setValue] = useState("0")
    const [res, setRes] = useState('0')
    const [isResultClicked,setIsResultClicked] = useState(false)
    console.log(value)
    console.log(res)


    enum operator {
        addition = "+",
        subtraction = "-",
        multiplication = "*",
        division = "/",
        divideBy100 = "/100",
        divideBy2 ='/2'
    }

    let isIncludesOperator = (value.includes(operator.addition) || ((value.lastIndexOf(operator.subtraction) !== 0) && value.includes(operator.subtraction)) || value.includes(operator.multiplication) || value.includes(operator.division) || value.includes(operator.divideBy100) || value.includes(operator.divideBy2))
    let isEndsWithOperator = (value.endsWith(operator.addition) || value.endsWith(operator.subtraction) || value.endsWith(operator.multiplication) || value.endsWith(operator.division) || value.endsWith(operator.divideBy100) || value.endsWith(operator.divideBy2))


    function calculator(opr: string, vl: string) {
        const leftSide = firstValue
        let rightSide
        let calRes = 0

        if (opr === operator.subtraction) {
            rightSide = parseFloat(vl.substring(vl.lastIndexOf(operatorCalculation), vl.length))
        } else {
            rightSide = parseFloat(vl.substring(vl.indexOf(operatorCalculation) + 1, vl.length))
        }


        if ((vl.indexOf(opr) !== vl.length - 1) && isIncludesOperator) {
            setIsResultClicked(false)
            if (opr === operator.addition || opr === operator.subtraction) {
                calRes = leftSide + rightSide
            } else if (opr === operator.multiplication) {
                calRes = leftSide * rightSide
            } else if (opr === operator.division) {
                calRes = leftSide / rightSide
            } /*else if (opr === operator.divideBy100) {
                calRes = leftSide / 100
            } else if (opr === operator.divideBy2) {
                calRes = leftSide / 2
            }*/
            if (calRes.toString().includes('.')) {
                setRes(calRes.toFixed(3).toString())
            } else {
                setRes(calRes.toString())
            }
        } else (setRes(leftSide.toString()))

    }

    // console.log('lastIndexOfOperator = ' + value.lastIndexOf(operatorCalculation) + 1)
    // console.log('value.length = ' + value.length)


    function setValueNumber(num: string) {
        if (!(value.startsWith("0") && num === "0" && value.length === 1)) {
            if (value.startsWith("0") && value.length === 1) {
                setValue(value.replaceAll('0', num))
                setRes(value.replaceAll('0', num))

            } else {
                setValue(value.concat(num))
                setRes(value.concat(num))
                if (isIncludesOperator) {
                    calculator(operatorCalculation, value.concat(num))
                } else {
                    setRes(value.concat(num))
                }
            }
        }
    }

    function deleteHandler() {
        setIsResultClicked(false)
        if (value.length === 1) {
            setValue(value.replaceAll(value, '0'))
            setRes(value.replaceAll(value, '0'))
        } else {
            setValue(value.slice(0, value.length - 1))
            if (isIncludesOperator && !isEndsWithOperator) {
                calculator(operatorCalculation, value.slice(0, value.length - 1))
            } else (setRes(value.slice(0, value.length - 1)))
        }
    }

    function deleteAllHandler() {
        setValue("0")
        setRes("0")
        setIsResultClicked(false)
    }

    function operatorHandler(opr: string) {
        //Todo: fix if statements here
        if(opr === operator.divideBy100){
            setRes((parseFloat(res)/100).toString())
            setValue((parseFloat(value)/100).toString())
        }else if (opr === operator.divideBy2){
            setRes((parseFloat(res)/2).toString())
            setValue((parseFloat(value)/2).toString())
        }
        else {
            if ((value.length !== 0 || opr === operator.subtraction)) {
                if (!(value.startsWith('0') && opr !== operator.subtraction && value.length === 1)) {
                    if (value.startsWith('0') && opr === operator.subtraction && value.length === 1) {
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
    }

    function resultHandler(opr?: string) {
        setIsResultClicked(true)
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
                } /*else if (opr === operator.divideBy100) {
                    calculationResult = firstValue / 100
                } else if (opr === operator.divideBy2) {
                    calculationResult = firstValue / 2
                }*/
                if (moreOperator && calculationResult !== 0) {
                    setIsResultClicked(false)
                    if (opr != null) {
                        operatorCalculation = opr
                    }
                    setValue(calculationResult.toString().concat(operatorCalculation))
                    moreOperator = false
                    firstValue = calculationResult
                } else {
                    if (calculationResult.toString().includes('.')) {
                        setValue(calculationResult.toFixed(3).toString())
                    } else {
                        setValue(calculationResult.toString())
                    }

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
            <CalculationBox calculationLine={value} isResClicked={isResultClicked} result={res}/>
            <MainCalculator
                onRes={resultHandler}
            >
                <IconContainer onTap={deleteAllHandler}>
                    <Icons.ClearIc/>
                </IconContainer>
                <IconContainer onTap={deleteHandler}>
                    <Icons.ArrBackIc/>
                </IconContainer>


                <IconContainer onTap={() => {
                    operatorHandler(operator.divideBy2)
                }}>
                    <Icons.HalfIc/>
                </IconContainer>

                <IconContainer onTap={() => {
                    operatorHandler(operator.divideBy100)
                }}>
                    <Icons.PercentIc/>
                </IconContainer>

                <CalculatorButton onCalNumber={() => {
                    setValueNumber('7')
                }} calNumber={7}/>
                <CalculatorButton onCalNumber={() => {
                    setValueNumber('8')
                }} calNumber={8}/>
                <CalculatorButton onCalNumber={() => {
                    setValueNumber('9')
                }} calNumber={9}/>
                <IconContainer onTap={() => {
                    operatorHandler(operator.division)
                }}>
                    <Icons.DivisionIC/>
                </IconContainer>
                <CalculatorButton onCalNumber={() => {
                    setValueNumber('4')
                }} calNumber={4}/>
                <CalculatorButton onCalNumber={() => {
                    setValueNumber('5')
                }} calNumber={5}/>
                <CalculatorButton onCalNumber={() => {
                    setValueNumber('6')
                }} calNumber={6}/>

                <IconContainer onTap={() => {
                    operatorHandler(operator.multiplication)
                }}>
                    <Icons.MultiplicationIc/>
                </IconContainer>
                <CalculatorButton onCalNumber={() => {
                    setValueNumber('1')
                }} calNumber={1}/>
                <CalculatorButton onCalNumber={() => {
                    setValueNumber('2')
                }} calNumber={2}/>
                <CalculatorButton onCalNumber={() => {
                    setValueNumber('3')
                }} calNumber={3}/>
                <IconContainer onTap={() => {
                    operatorHandler(operator.subtraction)
                }}>
                    <Icons.MinusIc/>
                </IconContainer>
                <CalculatorButton onCalNumber={() => {
                    setValueNumber('2.71828183')
                }} calNumber={'e'}/>
                <CalculatorButton onCalNumber={() => {
                    setValueNumber('0')
                }} calNumber={0}/>
                <CalculatorButton onCalNumber={() => {
                    setValueNumber('.')
                }} calNumber={'.'}/>

                <IconContainer onTap={() => {
                    operatorHandler(operator.addition)
                }}>
                    <Icons.PlusIc/>
                </IconContainer>
            </MainCalculator>
        </Layout>
    );
}

export default App;
