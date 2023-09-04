import React, {useState} from 'react';
import './App.css';
import Layout from "./components/layouts/Layout";
import CalculationBox from "./components/layouts/CalculationBox";
import MainCalculator from "./components/layouts/MainCalculator";

function App() {
    const [value,setValue] = useState("0")
    let left = value
    let right = value

    function setValue0(){
        setValue(value.concat('0'))
    }
    function setValue1(){
        setValue(value.concat('1'))
            }
    function setValue2(){
        setValue(value.concat('2'))
    }
    function setValue3(){
        setValue(value.concat('3'))
    }
    function setValue4(){
        setValue(value.concat('4'))
    }
    function setValue5(){
        setValue(value.concat('5'))
    }
    function setValue6(){
        setValue(value.concat('6'))
    }
    function setValue7(){
        setValue(value.concat('7'))
    }
    function setValue8(){
        setValue(value.concat('8'))
    }
    function setValue9(){
        setValue(value.concat('9'))
    }

    function deleteHandler (){
        setValue(value.slice(0,value.length - 1))
    }

    function deleteAllHandler(){
        setValue("0")
    }

    function plusHandler(){
        left = value

        setValue(value.concat('+'))
    }

    function equalHandler(){
        right = value.substring(left.length + 1 ,value.length)
        let tempLeft = parseInt(left)
        let tempRight = parseInt(right)
        const tempEqual = tempRight.toString().concat(tempLeft.toString())
        setValue(tempEqual)
    }

    return (
        <Layout>
            <CalculationBox value={value}/>
            <MainCalculator
                on0={setValue0}
                on1={setValue1}
                on2={setValue2}
                on3={setValue3}
                on4={setValue4}
                on5={setValue5}
                on6={setValue6}
                on7={setValue7}
                on8={setValue8}
                on9={setValue9}
                onPlus={plusHandler}
                onEqual={equalHandler}
                onDelete={deleteHandler}
                onDeleteAll={deleteAllHandler}
            />
        </Layout>
    );
}

export default App;
