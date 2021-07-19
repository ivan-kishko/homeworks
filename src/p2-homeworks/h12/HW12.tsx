import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatchType, AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";

const themes = ['default', 'dark', 'orange-black', 'maroon-peach', 'beige-blue'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme); // useSelector
    const dispatch = useDispatch<AppDispatchType>()

    // useDispatch, onChangeCallback

    const onChangeOption = (theme: string) => {
        dispatch(changeThemeC(theme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']} style={{fontWeight: 'bold'}}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <div className={s[theme + '-text']} style={{fontWeight: 'bold'}}>
                <SuperRadio
                    name={'radio'}
                    options={themes}
                    value={theme}
                    onChangeOption={onChangeOption}
                />
            </div>
            <hr/>
        </div>
    );
}

export default HW12;
