// import classes from './CalculatorNumber.module.css'
function CalculatorNumber(props: any){
    return <button onClick={props.onCalNumber}>{props.calNumber}</button>
}

export default CalculatorNumber