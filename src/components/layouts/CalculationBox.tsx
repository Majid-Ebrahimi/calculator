import classes from './CalculationBox.module.css'
function CalculationBox(props: any){

    return <div className={classes.div}>
        <h2>{props.text}</h2>
    </div>
}

export default CalculationBox