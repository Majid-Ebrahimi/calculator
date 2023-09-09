import classes from './MainCalculator.module.css'
function MainCalculator(props: any){

    return (
        <div className={classes.gridContainer}>
            {props.children}
            <button onClick={props.onRes} className={classes.resultButton}>=</button>
        </div>)
}

export default MainCalculator