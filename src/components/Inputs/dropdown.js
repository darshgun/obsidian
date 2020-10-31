import React from 'react'
import PropTypes from 'prop-types'
import "./style.scss"

function Dropdown({ label, id, options }) {
    return (
        <>
            {label ? <label>{label}</label> : <></>}
            <select className="u-full-width" id={id}>
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
    placeholder: String,
    id: String,
    label: String,
    options: Object
}

export default Dropdown

