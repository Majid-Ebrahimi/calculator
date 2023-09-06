import classes from './MainCalculator.module.css'
function MainCalculator(props: any){

    return (
        <div className={classes.gridContainer}>
            {props.children}
            {/*<button onClick={props.onDeleteAll} className={classes.item1}>C</button>*/}
            {/*<button onClick={props.onDelete} className={classes.item2}>x</button>*/}
            <button onClick={props.onRes} className={classes.resultButton}>=</button>
        </div>)
}

export default MainCalculator