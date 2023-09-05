import React, {useState} from 'react';
import './App.css';
import Layout from "./components/layouts/Layout";
import CalculationBox from "./components/layouts/CalculationBox";
import MainCalculator from "./components/layouts/MainCalculator";
import layout from "./components/layouts/Layout";
import {subscribe} from "diagnostics_channel";

let resultTemp: number
let firstValue: number
let firstValueLength: number
let tempOperator: string

function App() {
    const [value, setValue] = useState("0")



    // const [calculationValue,setCalculationValue] = useState<number>(0)
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
        if (value.endsWith(operator.addition) || value.endsWith(operator.subtraction) || value.endsWith(operator.multiplication) || value.endsWith(operator.division)) {
        } else {
            setValue(value.concat(opr))
        }

        if(opr === operator.addition){
            firstValue = parseInt(value)
            tempOperator = operator.addition
        } else if (opr===operator.subtraction){
            firstValue = parseInt(value)
            tempOperator = operator.subtraction
        }else if(opr ===operator.multiplication){
            firstValue = parseInt(value)
            tempOperator = operator.multiplication
        }
        else if(opr===operator.division){
            firstValue = parseInt(value)
            tempOperator = operator.division
        }

        console.log(firstValue)
        console.log(firstValueLength)

    }

    // function additionHandler(){
    //     const len = value.length -1
    //     if(!value.endsWith(operator.addition || operator.subtraction || operator.multiplication || operator.division)) {
    //         setValue(value.concat(operator.addition))
    //     } else{
    //         console.log(value.substring(len))
    //     }
    //     console.log(parseInt(value) + parseInt(value.substring(len)))
    //     setCalculationValue(parseInt(value) + parseInt(value.substring(len)))
    // }




    function resultHandler() {
        console.log(tempOperator)
        if(tempOperator === operator.addition){
            const secondValue = parseInt(value.substring(value.indexOf('+') + 1,value.length))
            value.indexOf('+')
            resultTemp = firstValue + secondValue
            console.log(firstValue)
            console.log(secondValue)
            console.log(resultTemp)
            setValue(resultTemp.toString())
        }else if(tempOperator === operator.subtraction){
            const secondValue = parseInt(value.substring(value.indexOf('-') + 1,value.length))
            value.indexOf('-')
            resultTemp = firstValue - secondValue
            console.log(firstValue)
            console.log(secondValue)
            console.log(resultTemp)
            setValue(resultTemp.toString())
        }else if(tempOperator === operator.multiplication){
            const secondValue = parseInt(value.substring(value.indexOf('*') + 1,value.length))
            value.indexOf('*')
            resultTemp = firstValue * secondValue
            console.log(firstValue)
            console.log(secondValue)
            console.log(resultTemp)
            setValue(resultTemp.toString())
        }else if(tempOperator === operator.division){
            const secondValue = parseInt(value.substring(value.indexOf('/') + 1,value.length))
            console.log(value.indexOf('/'))
            resultTemp = firstValue / secondValue
            console.log(firstValue)
            console.log(secondValue)
            console.log(resultTemp)
            setValue(resultTemp.toString())
        }

    }

    return (
        <Layout>
            <CalculationBox text={value}/>
            <MainCalculator
                on0={() => {
                    setValueNumber('0')
                }}
                on1={() => {
                    setValueNumber('1')
                }}
                on2={() => {
                    setValueNumber('2')
                }}
                on3={() => {
                    setValueNumber('3')
                }}
                on4={() => {
                    setValueNumber('4')
                }}
                on5={() => {
                    setValueNumber('5')
                }}
                on6={() => {
                    setValueNumber('6')
                }}
                on7={() => {
                    setValueNumber('7')
                }}
                on8={() => {
                    setValueNumber('8')
                }}
                on9={() => {
                    setValueNumber('9')
                }}
                onAdd={() => {
                    operatorHandler(operator.addition)
                }}
                onSub={() => {
                    operatorHandler(operator.subtraction)
                }}
                onMul={() => {
                    operatorHandler(operator.multiplication)
                }}
                onDiv={() => {
                    operatorHandler(operator.division)
                }}
                onRes={resultHandler}
                onDelete={deleteHandler}
                onDeleteAll={deleteAllHandler}
            />
        </Layout>
    );
}

export default App;
