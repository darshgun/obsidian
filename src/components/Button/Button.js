import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Button.module.scss";

/**
 * Button Component
 *
 * @param   {[Node]}      children    Children node of the component
 * @param   {[String]}    href        Get an href for an Anchor Button
 * @param   {[Variant]}   variant     Get the variant to determine the style of the button
 * @param   {[String]}    type        Select type for Input Buttons
 * @param   {[Function]}  onClick     onClick function of the component
 * @param   {[Boolean]}   disabled    Disables the button component
 * @param   {[String]}    formAction  Provides a formAction for the component
 * @param   {[String]}    size        Determine the size of the Button component
 *
 * @return  {[Component]}                  Returns Button Component
 */
/**
 * A simple functional component that accepts filtered props similar to an HTML button
 */
export function Button({ children, href, variant, type, onClick, disabled, formAction, size }) {

    const className = `${styles.button} ${styles[variant]} ${styles[size]}`

    if (href) {
        return (
            <a className={className} href={href}>
                {children}
            </a>
        )
    } else if (type) {
        return (
            <input className={className} type={type} value={children}></input>
        )
    }

    return (
        <button className={className} onClick={onClick} disabled={disabled} formAction={formAction}>
            {children}
        </button>
    )
}

Button.propTypes = {
    /**
     * Children node of the component
     */
    children: PropTypes.node,
    /**
     * Get an href for an Anchor Button
     */
    href: PropTypes.string,
    /**
     * Get the variant to determine the style of the button
     */
    variant: PropTypes.string,
    /**
     * Select type for Input Buttons
     */
    type: PropTypes.oneOf(["submit", "reset", "button"]),
    /**
     * Determine the size of the Button component
     */
    size: PropTypes.string,
    /**
     * onClick function of the component
     */
    onClick: PropTypes.func,
    /**
     * Disables the button component
     */
    disabled: PropTypes.bool,
    /**
     * Provides a formAction for the component
     */
    formAction: PropTypes.string
}

Button.defaultProps = {
    variant: "Default",
    disabled: false
}

export default Button