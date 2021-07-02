import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import classes from "./HW10.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {Dispatch} from "redux";
import {loadingAC, LoadingActionType} from "./bll/loadingReducer";

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading)
    const dispatch = useDispatch<Dispatch<LoadingActionType>>()

    const setLoading = () => {
        // dispatch
        dispatch(loadingAC(true))
        setTimeout(function(){dispatch(loadingAC(false))}, 4000)
        // setTimeout
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div className={classes.loader}>крутилка...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
