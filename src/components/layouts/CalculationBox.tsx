import classes from './CalculationBox.module.css'

function CalculationBox(props: any) {


    return (<div className={classes.div}>
        {
            props.isResClicked ? <p className={classes.smallCalculationLine}>{props.calculationLine}</p> :
                <p className={classes.calculationLine}>{props.calculationLine}</p>
        }
        {
            props.isResClicked ? <p className={classes.bigResult}>= {props.result}</p> :
                    <p className={classes.result}>= {props.result}</p>
        }
    </div>)
}

export default CalculationBox