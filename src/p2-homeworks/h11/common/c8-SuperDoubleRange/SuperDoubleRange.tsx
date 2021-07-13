import React from 'react'
import {Slider} from "antd";
import 'antd/dist/antd.css';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    const onChangeCallback = (value: [number, number]) => {
        onChangeRange && onChangeRange(value)
    }
    // сделать самому, можно подключать библиотеки
    return (
        <Slider style={{width: "120px"}} range={true} value={value} onChange={onChangeCallback}/>
    )
};


export default SuperDoubleRange
