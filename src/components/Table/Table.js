import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Table.module.scss";

/**
 * @param   {[Array]}  headings  Gets an Array of headings for the table component
 * @param   {[Array]}  body      Gets an Array of Arrays as the body for the component
 *
 * @return  {[Component]}        Returns the Table Component
 */
/**
 * A simple Table component that accepts an array as headings and an array of arrays as the body content
 */
export function Table({ headings, body }) {
    return (
        <table class={styles["u-full-width"]}>
            <thead>
                <tr>
                    {/* Take an array of strings */}
                    {headings ?
                        headings.map((h) => <th>{h}</th>) : <></>
                    }
                </tr>
            </thead>
            <tbody>
                {/* Take an array of arrays
                    Format:
                            obj = [
                            [Item, Item Weight],
                            [Item2, Item2 Weight]
                            ]
                */}
                {body ?
                    body.map((row) => <tr>{
                        row.map((field) => <td>{field}</td>)
                    }</tr>) : <></>
                }
            </tbody>
        </table>
    )
}

Table.propTypes = {
    /**
     * Gets an Array of headings for the table component
     */
    headings: Array,
    /**
     * Gets an Array of Arrays as the body for the component
     */
    body: Array
}

export default Table

