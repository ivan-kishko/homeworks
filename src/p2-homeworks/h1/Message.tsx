import React from 'react'
import classes from './Message.module.css'

export type MessageDataProps = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageDataProps) {

    return (
        <div>
            <div className={classes.message}>
                <div className={classes.image}>
                    <img src={props.avatar} alt={"avatar"}/>
                </div>
                <div className={classes.name}>
                    {props.name}
                </div>
                <div className={classes.text}>
                    {props.message}
                </div>
                <div className={classes.time}>
                    {props.time}
                </div>
            </div>

        </div>
    )
}

export default Message
