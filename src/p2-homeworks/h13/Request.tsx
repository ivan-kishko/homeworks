import React, {useState} from 'react';
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {ignatApi} from "./api/request-api";

export function Request() {
    const [success, setSuccess] = useState(true)
    const [responseMsg, setResponseMsg] = useState('Actual message will appear after first request')

    const query = (successValue: boolean) => {
        ignatApi.postQuery(successValue)
            .then(res => {
                console.log(res)
                setResponseMsg(`${res.data.errorText}, ${res.data.info}`)
            })
            .catch(err => {
                console.log({...err})
                setResponseMsg(`${err.response.data.errorText}, ${err.response.data.info}`)
            })
    }

    const queryCallback = () => {
        query(success)
    }

    return (
        <div>
            <SuperCheckbox onChange={(e) => setSuccess(e.currentTarget.checked)} checked={success}>success</SuperCheckbox>
            <SuperButton onClick={queryCallback}>Send request</SuperButton>
            <div>
                <h3>{responseMsg}</h3>
            </div>
        </div>
    )
}