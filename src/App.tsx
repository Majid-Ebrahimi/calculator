import React, {useState} from 'react';
import './App.css';
import Layout from "./components/layouts/Layout";
import CalculationBox from "./components/layouts/CalculationBox";
import MainCalculator from "./components/layouts/MainCalculator";

function App() {
    const [value,setValue] = useState("0")
    const [calculationValue,setCalculationValue] = useState<number>(0)

    function setValueNumber(num: string){
        setValue(value.concat(num))
        // setCalculationValue(calculationValue.concat(parseInt(num)))
    }

    function deleteHandler (){
        setValue(value.slice(0,value.length - 1))
    }

    function deleteAllHandler(){
        setValue("0")
        // setCalculationValue([0])
    }

    function plusHandler(){
        const len = value.length -1
        if(!value.endsWith('+')) {
            setValue(value.concat('+'))
        } else{
            console.log(value.substring(len))
        }
        console.log(parseInt(value) + parseInt(value.substring(len)))
        setCalculationValue(parseInt(value) + parseInt(value.substring(len)))
    }

    function equalHandler(){
        setValue(calculationValue.toString())

    }

    return (
            <Layout>
                <CalculationBox value={value}/>
                <MainCalculator
                    on0={()=>{setValueNumber('0')}}
                    on1={()=>{setValueNumber('1')}}
                    on2={()=>{setValueNumber('2')}}
                    on3={()=>{setValueNumber('3')}}
                    on4={()=>{setValueNumber('4')}}
                    on5={()=>{setValueNumber('5')}}
                    on6={()=>{setValueNumber('6')}}
                    on7={()=>{setValueNumber('7')}}
                    on8={()=>{setValueNumber('8')}}
                    on9={()=>{setValueNumber('9')}}
                    onPlus={plusHandler}
                    onEqual={equalHandler}
                    onDelete={deleteHandler}
                    onDeleteAll={deleteAllHandler}
                />
            </Layout>
    );
}

export default App;
