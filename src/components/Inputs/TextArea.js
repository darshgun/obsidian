import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Inputs.module.scss"

/**
 * @param   {[String]}      placeholder  Sets the name for the Component
 * @param   {[String]}      label        The label for the Component
 * @param   {[String]}      name         Sets the id for the Component
 * @param   {[String]}      id           Sets the id for the Component
 * @param   {[Function]}    onChange     Handle the onChange function of the Component
 * @param   {[Boolean]}     readOnly     If true, the TextArea is non-editable
 * @param   {[Number]}      maxLength    Sets the maximum number of characters that can be entered for the Input Field
 * @param   {[Number]}      minLength    Sets the minimum number of characters required for the Input Field
 * @param   {[Boolean]}     required     If true, the Component is required to be filled
 * @param   {[Boolean]}     disabled     If true, disables the Component
 *
 * @return  {[Component]}                Returns a TextArea Component
 */
/**
 * A Simple TextArea Component
 */
export function TextArea({ placeholder, label, name, id, onChange, readOnly, maxLength, minLength, required, disabled }) {
    return (
        <>
            {label ? <label>{label}</label> : <></>}
            <textarea className={styles["u-full-width"]} placeholder={placeholder} name={name} id={id} onChange={onChange} maxLength={maxLength} minLength={minLength} required={required} disabled={disabled} readOnly={readOnly}></textarea>
        </>
    )
}

TextArea.propTypes = {
    /**
     * The placeholder to be Shown for the TextArea
     */
    placeholder: PropTypes.string,
    /**
     * Sets the name for the Component
     */
    name: PropTypes.string,
    /**
     * Sets the id for the Component
     */
    id: PropTypes.string,
    /**
     * The label for the Component
     */
    label: PropTypes.string,
    /**
     * Handle the onChange function of the Component
     */
    onChange: PropTypes.func,
    /**
     * If true, the TextArea is non-editable
     */
    readOnly: PropTypes.bool,
    /**
     * Sets the maximum number of characters that can be entered for the Input Field
     */
    maxLength: PropTypes.number,
    /**
     * Sets the minimum number of characters required for the Input Field
     */
    minLength: PropTypes.number,
    /**
     * If true, the Component is required to be filled
     */
    required: PropTypes.bool,
    /**
     * If true, disables the Component
     */
    disabled: PropTypes.bool
}

TextArea.defaultProps = {
    disabled: false,
    required: false,
    readOnly: false
}

export default TextArea


