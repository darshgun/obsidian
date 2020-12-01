import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styles from "./Accordion.module.scss"

/**
 * @param   {[Node]}  children    Content to be displayed inside the accordion
 * @param   {[String]}  header    Header to be show for the accordion
 *
 * @return  {[Component]}            Returns the Accordion Component
 */
/**
 * A Simple Accordion Component that accepts a header and content to be displayed inside
 * */
export function Accordion({ children, header }) {

    var handleClick = (e) => {
        e.preventDefault();
        e.target.classList.toggle("active");
        var panel = e.target.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }

    return (
        <Fragment>
            <button className={styles.accordion} onClick={handleClick}>{header}</button>
            <div className={styles["accordion-panel"]}>
                {children}
            </div>
        </Fragment>
    )
}

Accordion.propTypes = {
    /**
     * Header to be show for the accordion
     */
    header: PropTypes.string,
    /**
     * Content to be displayed inside the accordion
     */
    children: PropTypes.node
}

export default Accordion

