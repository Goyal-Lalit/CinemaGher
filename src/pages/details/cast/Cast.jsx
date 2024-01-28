import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";

const Cast = ({ data, loading }) => {
    const { url } = useSelector((state) => state.home);

    const skeleton = () => {
    };
};

export default Cast;
