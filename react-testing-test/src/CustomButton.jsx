import React, { useState } from "react";

const CustomButton = ({ onClick }) => {
    return (
        <button onClick={onClick}>Click me</button>
    );
};

export default CustomButton;