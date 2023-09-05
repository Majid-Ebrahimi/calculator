import classes from './MainCalculator.module.css'
function MainCalculator(props: any){

    return <div className={classes.main}>
        <div className={classes.gridContainer}>
            {props.children}
            <button onClick={props.onDeleteAll} className={classes.item13}>C</button>
            <button onClick={props.onDelete} className={classes.item15}>x</button>
            <button onClick={props.onRes} className={classes.item17}>=</button>
        </div>
    </div>
}

export default MainCalculator