import React from 'react';
import PropTypes from 'prop-types';
import "./List.module.scss"

/**
 *
 * @param   {[Array]}   items        Gets the items to be displayed in the List
 * @param   {[String]}  listType     Defines the type of list that should be returned
 * @param   {[String]}  subListType  Defines the type of sub-list that should be returned with the List Component
 *
 * @return  {[Component]}           Returns a List Component
 */
/**
 * A Simple list Component that accepts an Array and returns an HTML list
 */
export function List({ items, listType, subListType }) {
    const LT = listType === "ordered" ? "ol" : "ul";
    const SLT = subListType === "ordered" ? "ol" : "ul";

    return (
        <LT>{items ?
            items.map((item) =>
                typeof (item) === "object" ?
                    <SLT>{
                        item.map((subItem) => <li>{subItem}</li>)}
                    </SLT> : <li>{item}</li>
            ) : <></>
        }</LT>
    )
}

List.propTypes = {
    /**
     * Gets the items to be displayed in the List
     */
    items: PropTypes.arrayOf([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    /**
     * Defines the type of list that should be returned
     */
    listType: PropTypes.oneOf(["ordered", "unordered"]),
    /**
     * Defines the type of sub-list that should be returned with the List Component
     */
    subListType: PropTypes.oneOf(["ordered", "unordered"])
}

export default List

