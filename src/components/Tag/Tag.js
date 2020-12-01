import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from "./Tag.module.scss"

/**
 * [export description]
 *
 * @param   {[String]}  variant   Gets the variant which decides the styling
 * @param   {[Node]}  children  Gets the child nodes for the component
 *
 * @return  {[Component]}       Returns the Tag Component
 */
/**
 * A Simple Tag component that accepts a variant and child nodes
 */
export function Tag({ variant, children }) {
    if (variant === "primary") {
        return (
            <span class={`${style.tag} ${style.primary}`}>{children}</span>
        )
    }

    return (
        <span class={style.tag}>{children}</span>
    )
}

Tag.propTypes = {
    /**
     * Gets the variant which decides the styling
     */
    variant: PropTypes.oneOf(["primary", "default"]),
    /**
     * Gets the child nodes for the component
     */
    children: PropTypes.node
}

Tag.defaultProps = {
    variant: "default"
}

export default Tag

