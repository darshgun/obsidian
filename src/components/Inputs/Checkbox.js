import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Inputs.module.scss"

/**
 * [export description]
 *
 * @param   {[Node]}        children        Sets the label for the Checkbox 
 * @param   {[String]}      id              Sets the id for the Component
 * @param   {[String]}      name            Sets the name of the Component
 * @param   {[String]}      value           Sets a value for the Component
 * @param   {[Boolean]}     required        The Checkbox is required to be checked if true
 * @param   {[Function]}    onClick         Handle the onClick function of the Component
 * @param   {[Function]}    onChange        Handle the onChange function of the Component
 * @param   {[Boolean]}     disabled        If true, the Checkbox is checked by default
 * @param   {[Boolean]}     defaultChecked  If true, the Checkbox is checked by default
 *
 * @return  {[Component]}                   Returns a Checkbox Component
 */
/**
 * A simple Checkbox Component with a label
 */
export function Checkbox({ children, id, name, value, required, onClick, onChange, disabled, defaultChecked }) {
    return (
        <label>
            <input type="checkbox" id={id} onChange={onChange} name={name} value={value} required={required} onClick={onClick} disabled={disabled} defaultChecked={defaultChecked} />
            <span className={styles["label-body"]}>{children}</span>
        </label>
    )
}

Checkbox.propTypes = {
    /**
     * Sets the label for the Checkbox 
     */
    children: PropTypes.node,
    /**
     * Sets the id for the Component
     */
    id: PropTypes.string,
    /**
     * Sets the name of the Component
     */
    name: PropTypes.string,
    /**
     * Sets a value for the component
     */
    value: PropTypes.string,
    /**
     * Handle the onChange function of the Component
     */
    onChange: PropTypes.func,
    /**
     * Handle the onClick function of the Component
     */
    onClick: PropTypes.func,
    /**
     * Disables the checkbox if true
     */
    disabled: PropTypes.bool,
    /**
     * If true, the Checkbox is checked by default
     */
    defaultChecked: PropTypes.bool,
    /**
     * The Checkbox is required to be checked if true
     */
    required: PropTypes.bool
}

Checkbox.defaultProps = {
    disabled: false,
    required: false,
    defaultChecked: false
}

export default Checkbox

