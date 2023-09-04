import classes from './Layout.module.css'

function Layout(props: any) {
    return (<center>
            <div className={classes.div}>{props.children}</div>
        </center>
    )
}

export default Layout