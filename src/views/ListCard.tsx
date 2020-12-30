import { Typography } from "@material-ui/core";
import * as React from "react";
import { List } from "../Types/types";

type CardProps = {
    list: List;
};

export const ListCard: React.FC<CardProps> = ({ list }) => {
    const { title, description, actionList } = list;

    const renderList = () => {
        return actionList.map((action, index) => <li key={index}>{action.task}</li>);
    };

    return (
        <div>
            <Typography variant="h4">{title}</Typography>
            <Typography variant="h6">{description}</Typography>
            <ul>
                {renderList()}
            </ul>
        </div>
    );
};