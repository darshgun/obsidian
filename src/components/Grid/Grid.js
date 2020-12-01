import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Grid.module.scss"

/**
 * @param   {[Node]}  children  The Child Nodes of the Component
 *
 * @return  {[Component]}        Returns a Grid Component
 */
/**
 * A Simple Grid Component
 */
export function Grid({ children }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

Grid.propTypes = {
    /**
     * The Child Nodes of the Component
     */
    children: PropTypes.node
}

export default Grid

