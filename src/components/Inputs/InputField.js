import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Inputs.module.scss"

/**
 *
 * @param   {[String]}      placeholder     The Placeholder of the Input Field
 * @param   {[String]}      label           The label for the Component
 * @param   {[String]}      type            Sets the type for the Input Field
 * @param   {[String]}      name            Sets the name for the Component
 * @param   {[String]}      id              Sets the id for the Component
 * @param   {[Function]}    onChange        Handle the onChange function
 * @param   {[Boolean]}     autoComplete    If false, auto completing is disabled for the Component 
 * @param   {[Boolean]}     disabled        If true, disables the Component
 * @param   {[Boolean]}     required        If true, the Component is required to be filled
 * @param   {[Number]}      maxLength       Sets the maximum number of characters that can be entered for the Input Field
 * @param   {[Number]}      minLength       Sets the minimum number of characters required for the Input Field
 * @param   {[String]}      pattern         A regex that will be checked against the Input field value
 * @param   {[Boolean]}     readOnly        Makes the Input field non-editable
 *
 * @return  {[Component]}                   Returns an Input Field
 */
/** 
 * A Simple Input Field Component
 */
export function InputField({ placeholder, label, type, name, id, onChange, autoComplete, disabled, required, maxLength, minLength, pattern, readOnly }) {
    return (
        <>
            { label ? <label>{label}</label> : <></>}
            <input className={styles["u-full-width"]} type={type ?? "text"} placeholder={placeholder} name={name} id={id} onChange={onChange} autoComplete={autoComplete} disabled={disabled} required={required} maxLength={maxLength} minLength={minLength} pattern={pattern} readOnly={readOnly}></input>
        </>
    )
}

InputField.propTypes = {
    /**
     * The Placeholder of the Input Field
     */
    placeholder: PropTypes.string,
    /**
     * Sets the id for the Component
     */
    id: PropTypes.string,
    /**
     * Sets the name for the Component
     */
    name: PropTypes.string,
    /**
     * The label for the Component
     */
    label: PropTypes.string,
    /**
     * Sets the type for the Input Field
     */
    type: PropTypes.string,
    /**
     * Handle the onChange function
     */
    onChange: PropTypes.func,
    /**
     * If false, auto completing is disabled for the Component 
     */
    autoComplete: PropTypes.bool,
    /**
     * If true, disables the Component
     */
    disabled: PropTypes.bool,
    /**
     * If true, the Component is required to be filled
     */
    required: PropTypes.bool,
    /**
     * Sets the maximum number of characters that can be entered for the Input Field
     */
    maxLength: PropTypes.number,
    /**
     * Sets the minimum number of characters required for the Input Field
     */
    minLength: PropTypes.number,
    /**
     * A regex that will be checked against the Input field value
     */
    pattern: PropTypes.string,
    /**
     * Makes the Input field non-editable
     */
    readOnly: PropTypes.bool
}

InputField.defaultProps = {
    type: "text",
    required: false,
    disabled: false,
    readOnly: false
}

export default InputField


