import classes from './CalculationBox.module.css'
function CalculationBox(props: any){

    return <div className={classes.div}>
        {props.value}
    </div>
}

export default CalculationBox