import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
    return (
        <div>
            {robots.map(robot => (
                <Card key={robot.id} {...robot} />
            ))}
        </div>
    );
};

export default CardList;
