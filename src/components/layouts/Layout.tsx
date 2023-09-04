import classes from './Layout.module.css'

function Layout(props: any){
    return <div className={classes.div}>{props.children}</div>
}

export default Layout