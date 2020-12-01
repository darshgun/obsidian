import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from "./TabContent.module.scss"
import tStyles from "./Tab.module.scss"

/**
 * @param   {[String]}      id        The id matching the id of the related Tab Button
 * @param   {[Node]}        children  The Child Nodes of the Component
 * @param   {[Boolean]}     active    If true, this Tab and Tab Content will be active by default
 */
/** 
 * A Simple Component that contains the Tab Content, to  be used in-conjunction with the Tab Component
 */
export function TabContent({ id, children, active }) {
    //Make the Tab Button Active for the selected Tab Content
    useEffect(() => {
        if (active === true) {
            document.querySelector(`#t${id}`).classList.add(tStyles.active)
        }
    });

    return (
        <div class={styles["tab-content"]}>
            <div class={`${styles["tab-pane"]} ${active === true ? styles.active : ""}`} id={id}>{children}</div>
        </div>
    )
}

TabContent.propTypes = {
    /**
     * The id matching the id of the related Tab Button
     */
    id: PropTypes.string,
    /**
     * The Child Nodes of the Component
     */
    children: PropTypes.node,
    /**
     * If true, this Tab and Tab Content will be active by default
     */
    active: PropTypes.bool
}

TabContent.defaultProps = {
    active: false
}

export default TabContent

