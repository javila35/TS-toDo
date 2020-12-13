import * as React from "react";

/**
 * Add css to style list-header
 * Add css to list-container
 * Add css to list-card
 */

export type ContainerProps = {
    /** Title of the to-do list*/
    title: string;
    /** Emoji or Symbol for the list. */
    symbol?: string;
    /** Description for to-do list */
    description?: string;
    /** If the list is empty */
    empty: boolean;
    /** List of to-dos */
    list: [];
};

export const ListContainer: React.FC<ContainerProps> = ({ title, symbol, description, empty, list }) => {
    const renderList = () => {
        return list.map((item, index) => {
            return "hi";
        });
    };

    return (
        <div className="list-container">
            <div className="list-header">
                {symbol ? <span>{symbol}</span> : null} {title}
                {description ? <h6>{description}</h6> : null}
            </div>
            <div className="list-card">
                {renderList()}
            </div>
        </div>
    );
};