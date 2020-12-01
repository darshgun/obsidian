import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Tab.module.scss"
import tcStyles from "./TabContent.module.scss"

/**
 * @param   {[Array]}  tabs  Takes an array of tabs, each containing an id and a display name.
 */
/**
 * A Simple Tab Component which provides tab switching functionality when used in-conjunction with TabContent Components
 */
export function Tab({ tabs }) {
    console.log(123)
    var handleClick = (e) => {
        //Remove active from all other TabContent elements
        tabs.forEach(e => {
            document.querySelector(`#${e[0]}`).classList.remove(tcStyles.active)
            document.querySelector(`#t${e[0]}`).classList.remove(styles.active)
        });
        //Add active to the selected Tab and Content
        e.target.classList.add(styles.active);
        document.querySelector(`#${e.target.id}`.replace('t', '')).classList.add(tcStyles.active);
    }

    return (
        <ul className={styles["tab-nav"]}>
            {/* 
            Get Array of String
            Format:
                tabs = [ [id,displayName], [id,displayName2] ]
            */}
            {tabs ?
                tabs.map((tab) =>
                    <li>
                        <a className={`${styles.button}`} id={`t${tab[0]}`} onClick={handleClick}>{tab[1]}</a>
                    </li>
                ) : <></>
            }
        </ul>
    )
}

Tab.propTypes = {
    /**
     * Takes an array of tabs, each containing an id and a display name.
     * 
     * Format:
     * 
         tabs = [ [id,displayName], [id,displayName2] ]
     */
    tabs: PropTypes.arrayOf([PropTypes.string])
}

export default Tab

