import classes from './CalculationBox.module.css'
function CalculationBox(props: any){

    return <div className={classes.div}>
        <p>{props?.result}</p>
        <h2>{props.text}</h2>
    </div>
}

export default CalculationBox