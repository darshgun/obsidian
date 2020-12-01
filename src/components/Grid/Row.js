import React from 'react'
import PropTypes from 'prop-types'

/**
 * @param   {[Node]}  children  The Child Nodes of the Component
 *
 * @return  {[Component]}       Retuns a Row Component
 */
/**
 * A Simple Row Component
 */
export function Row({ children }) {
    return (
        <div className="row">
            {children}
        </div>
    )
}

Row.propTypes = {
    /**
     * The Child Nodes of the Component
     */
    children: PropTypes.node
}

export default Row

