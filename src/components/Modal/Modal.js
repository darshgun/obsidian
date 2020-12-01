import React from 'react'
import PropTypes from 'prop-types';
import styles from "./Modal.module.scss"

/**
 *
 * @param   {[Node]}     children    Accepts any HTML/React elements tp be displayed inside the Modal
 * @param   {[String]}   header      The header to be displayed inside the Modal
 * @param   {[String]}   buttonText  The Text to be displayed on the modal open button
 * @param   {[Boolean]}  opened      If true the Modal is opened by default when the element is loaded
 *
 * @return  {[Component]}            Returns the Modal Component
 */
/**
 * A simple Modal Component that accepts any child node
 */
export function Modal({ children, header, buttonText, opened }) {

    var handleOpen = (e) => {
        e.target.parentElement.nextElementSibling.classList.toggle(styles["modal-open"])
    }

    var handleClose = (e) => {
        e.preventDefault()
        e.target.parentElement.parentElement.parentElement.parentElement.classList.remove(styles["modal-open"])
    }

    return (
        <>
            <main>
                <br />
                <button className={`${styles.button} ${styles["open-modal"]}`} onClick={handleOpen}>{buttonText}</button>
            </main>

            <div className={`${styles.modal} ${opened === true ? "modal-open" : ""}`}>
                <div className={styles["modal-inner"]}>
                    <div className={styles["modal-content"]}>
                        <div className={styles["modal-close-icon"]}>
                            <a href="#close" className={styles["close-modal"]} onClick={handleClose}>X</a>
                        </div>
                        <div className={styles["modal-content-inner"]}>
                            <h4>{header}</h4>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Modal.propTypes = {
    /**
     * Accepts any HTML/React elements tp be displayed inside the Modal
     */
    children: PropTypes.node,
    /**
     * The header to be displayed inside the Modal
     */
    header: PropTypes.string,
    /**
     * The Text to be displayed on the modal open button
     */
    buttonText: PropTypes.string,
    /**
     * If true the Modal is opened by default when the element is loaded
     */
    opened: PropTypes.bool
}

Modal.defaultProps = {
    opened: false
}

export default Modal

