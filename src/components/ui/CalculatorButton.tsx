import classes from './CalculatorButton.module.css'
function CalculatorButton(props: any){
    return <div className={classes.buttonContainer}><button className={classes.calButton} onClick={props.onCalNumber}>{props.calNumber}</button></div>
}

export default CalculatorButton