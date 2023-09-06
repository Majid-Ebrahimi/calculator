import classes from './CalculatorNumber.module.css'
function CalculatorNumber(props: any){
    return <div className={classes.calButtonFrame}><button className={classes.calButton} onClick={props.onCalNumber}>{props.calNumber}</button></div>
}

export default CalculatorNumber