import React, { Component, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from "./Toast.module.scss"

/**
 *
 * @param   {[String]}  variant     Gets the variant which decides the styling for the component
 * @param   {[Node]}    children    Gets the children node for the component
 * @param   {[Number]}  duration    Gets the duration the component will be visible for
 *
 * @return  {[Component]}           Return the Toast Component
 */
/**
 * A Simple Toast component that accepts a header, content and a duration, which then disappears after
 */
export function Toast({ variant, children, duration }) {

    //Object with variant icons
    const variantIcons = {
        info: "info",
        warning: "alert",
        danger: "cancel-circle",
        success: "circle-check"
    }

    //State for toast Class
    const [state, setState] = useState("toast-open")

    //Timer to hide the Toast 
    useEffect(() => {
        const timer = setTimeout(() => {
            setState("")
        }, duration ?? 5000);
        return () => clearTimeout(timer);
    }, []);

    //Change state when close btn clicked
    var handleClose = (e) => {
        e.preventDefault()
        setState("")
    }

    return (
        <div className={`${styles.toast} ${styles[state]}`}>
            <div className={styles["toast-inner"]}>
                <div className={styles["toast-content"]}>
                    <div className={styles[`toast-close-icon`]}>
                        <a href="#close" className={`${styles["close-toast"]} ${styles[variant]}`} onClick={handleClose}>X</a>
                    </div>
                    <div className={styles["toast-content-inner"]}>
                        <div className={`${styles.icons} ${styles.clearfix}`} >
                            <div className={styles.icon}>
                                <i className={`${styles["ddc-icon"]} ${styles[`ddc-icon-${variantIcons[variant]}`]} ${styles[variant]}`}></i>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

Toast.propTypes = {
    /**
     * Gets the children node for the component
     */
    children: PropTypes.node,
    /**
     * Gets the duration the component will be visible for
     */
    duration: PropTypes.number,
    /**
     * Gets the variant which decides the styling for the component
     */
    variant: PropTypes.oneOf(["info", "warning", "danger", "success"])
}

Toast.defaultProps = {
    duration: 5000
}

export default Toast

