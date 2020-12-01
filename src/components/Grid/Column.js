import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Column.module.scss"

/**
 * @param   {[Node]}  children  Defines the size of the Column
 * @param   {[Size]}  size      The Child Nodes of the Component
 *
 * @return  {[Component]}       Returns a Column Component
 */
/**
 * A Simple Column Component
 */
export function Column({ children, size }) {
    return (
        <div className={`${styles[size]} ${size === "one" ? styles.column : styles.columns}`}>
            {children}
        </div>
    )
}

Column.propTypes = {
    /**
     * Defines the size of the Column
     */
    size: PropTypes.oneOf(["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"]),
    /**
     * The Child Nodes of the Component
     */
    children: PropTypes.node
}

export default Column

