import React from 'react'
import PropTypes from 'prop-types'

/**
 * @param   {[Node]}     children      Accepts any HTML/React elements to be displayed inside the form
 * @param   {[String]}   name          Sets the name for the Component
 * @param   {[String]}   action        Specifies where to send the form-data when a form is submitted
 * @param   {[String]}   method        Specifies the HTTP method to use when sending form-data
 * @param   {[String]}   target        Specifies where to send the form-data when the form is submitted
 * @param   {[Boolean]}  autoComplete  If false, auto-completing is disabled for the Form
 * @param   {[Boolean]}  noValidate    If true, the form will not be validated
 *
 * @return  {[Component]}               Returns an HTML Form
 */
/**
 * A simple Form Component similar to an HTML Form Component
 */
export function Form({ children, name, action, method, target, autoComplete, noValidate }) {
    return (
        <form name={name} action={action} method={method} target={target} autoComplete={autoComplete} noValidate={noValidate}>
            {children}
        </form>
    )
}

Form.propTypes = {
    /** 
     * Accepts any HTML/React elements to be displayed inside the form
     */
    children: PropTypes.node,
    /** 
     * Sets the name for the Component
     */
    name: PropTypes.string,
    /** 
     * Specifies where to send the form-data when a form is submitted
     */
    action: PropTypes.string,
    /** 
     * Specifies where to send the form-data when the form is submitted
     */
    target: PropTypes.string,
    /** 
     * Specifies the HTTP method to use when sending form-data
     */
    method: PropTypes.string,
    /** 
     * If false, auto completing is disabled for the Form
     */
    autoComplete: PropTypes.bool,
    /** 
     * If true, the form will not be validated
     */
    noValidate: PropTypes.bool,
}

Form.defaultProps = {
    autoComplete: true,
    noValidate: false
}

export default Form