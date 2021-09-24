import React from "react";

const Result = (props) => {
    return (
        <>
            <h2>Ваша максимальна вартість будинку: ₴{props.results} грн.</h2>
            <h2>Очікувані щомісячні виплати: ₴{props.repaymentResults}</h2>
        </>
    );
}

export default Result;