import classes from './NavigationMenu.module.css'
import * as Icons from '../../assets/Icons'

function NavigationMenu() {
    return <div className={classes.nav}>
        <ul>
            <li>
                <Icons.PencilIc/>
            </li>
            <li>
                <Icons.SqrMenuIc/>
            </li>
            <li>
                <Icons.DollarIc/>
            </li>
            <li>
                <Icons.DotMenuIc/>
            </li>
        </ul>
    </div>
}

export default NavigationMenu