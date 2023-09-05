import classes from './MainCalculator.module.css'
function MainCalculator(props: any){

    return <div className={classes.main}>
        <div className={classes.gridContainer}>
            <button onClick={props.on7}>7</button>
            <button onClick={props.on8}>8</button>
            <button onClick={props.on9}>9</button>
            <button onClick={props.onMul}>*</button>
            <button onClick={props.on4}>4</button>
            <button onClick={props.on5}>5</button>
            <button onClick={props.on6}>6</button>
            <button onClick={props.onDiv}>/</button>
            <button onClick={props.on1}>1</button>
            <button onClick={props.on2}>2</button>
            <button onClick={props.on3}>3</button>
            <button onClick={props.onSub}>-</button>
            <button onClick={props.onDeleteAll}>C</button>
            <button onClick={props.on0}>0</button>
            <button onClick={props.onDelete}>x</button>
            <button onClick={props.onAdd}>+</button>
            <button onClick={props.onRes} className={classes.item13}>=</button>
        </div>
    </div>
}

export default MainCalculator