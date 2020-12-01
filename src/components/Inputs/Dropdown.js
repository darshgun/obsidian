import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Inputs.module.scss"

/**
 * [export description]
 *
 * @param   {[String]}      label     The placeholder to be Shown for the Dropdown
 * @param   {[String]}      name      Sets the name for the Component
 * @param   {[String]}      id        Sets the id for the Component
 * @param   {[Object]}      options   The Dropdown options for the Component
 * @param   {[Function]}    onChange  Disables the Component if true
 * @param   {[Boolean]}     required  If true, an Option from the Dropdown is required to be picked
 * @param   {[Boolean]}     disabled  Disables the Component if true
 *
 * @return  {[Component]}             Returns a Dropdown Component
 */
/** 
 * A simple Dropdown Component
*/
export function Dropdown({ placeholder, label, name, id, options, onChange, required, disabled }) {
    return (
        <>
            {label ? <label>{label}</label> : <></>}
            <select className={styles["u-full-width"]} name={name} id={id} onChange={onChange} disabled={disabled} required={required} value={placeholder}>
                <option value={placeholder} selected disabled hidden>{placeholder}</option>
                {/* Loop through object.
                Dict Format:
                    options = {
                    optionValue: displayOption
                    }
                 */}
                {options ?
                    Object.keys(options).map(key =>
                        <option value={key}>{options[key]}</option>
                    ) : <></>
                }
            </select>
        </>
    )
}

Dropdown.propTypes = {
    /**
     * The placeholder to be Shown for the Dropdown
     */
    placeholder: PropTypes.string,
    /**
     * Sets the id for the Component
     */
    id: PropTypes.string,
    /**
     * The label for the Component
     */
    label: PropTypes.string,
    /**
     * Sets the name for the Component
     */
    name: PropTypes.string,
    /**
     * The Dropdown options for the Component
     * 
     *          {
     *              optionValue: displayOption
     *           }
     */
    options: PropTypes.object,
    /**
     * Handle the onChange function of the Component
     */
    onChange: PropTypes.func,
    /**
     * Disables the Component if true
     */
    disabled: PropTypes.bool,
    /**
     * If true, an Option from the Dropdown is required to be picked
     */
    required: PropTypes.bool
}

Dropdown.defaultProps = {
    disabled: false,
    required: false
}

export default Dropdown


