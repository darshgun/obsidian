import React from 'react';
import PropTypes from 'prop-types';
import styles from './Radio.module.scss';

/**
 *
 * @param   {[String]}    value           Assigns a value for the Component
 * @param   {[String]}    name            Assigns a name to the Component
 * @param   {[String]}    id              Assigns an id to the Component
 * @param   {[Function]}  onClick         The onClick function for the Component
 * @param   {[Function]}  onChange        The onChange function for the Component
 * @param   {[Node]}      children        Gets the Label to be displayed for the checkbox
 * @param   {[Boolean]}   disabled        Disables the checkbox if true
 * @param   {[Boolean]}   checked         Checks the Checkbox if true
 * @param   {[Boolean]}   defaultChecked  The Checkbox loads checked by default 
 *
 * @return  {[Component]}                 Returns a Radio Component
 */
/**
 * A simple Radio Component that returns an HTML Radio element
 */
export function Radio({ value, name, id, onClick, onChange, children, disabled, checked, defaultChecked }) {
    return (
        <div style={{ display: "-webkit-inline-box" }}>
            <input type="radio" name={name} value={value} id={id} onClick={onClick} onChange={onChange} disabled={disabled} checked={checked} defaultChecked={defaultChecked}></input>
            <label className={styles.label}>{children}</label>
        </div>
    )
}

Radio.propTypes = {
    /**
     * Assigns a value for the Component
     */
    value: PropTypes.string,
    /**
     * Assigns a name to the Component
     */
    name: PropTypes.string,
    /**
     * Assigns an id to the Component
     */
    id: PropTypes.string,
    /**
     * The onClick function for the Component
     */
    onClick: PropTypes.func,
    /**
     * The onChange function for the Component
     */
    onChange: PropTypes.func,
    /**
     * Gets the Label to be displayed for the checkbox
     */
    children: PropTypes.node,
    /**
     * Disables the checkbox if true
     */
    disabled: PropTypes.bool,
    /**
     * Checks the Checkbox if true
     */
    checked: PropTypes.bool,
    /**
     * The Checkbox loads checked by default 
     */
    defaultChecked: PropTypes.bool
}

Radio.defaultProps = {
    disabled: false,
    defaultChecked: false
}

export default Radio

