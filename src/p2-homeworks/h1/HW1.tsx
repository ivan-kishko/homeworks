import React, {useState} from 'react'
import Message, {MessageDataProps} from "./Message";
import classes from './HW1.module.css'

function HW1() {

    const [msgArr, setMsgArr] = useState<MessageDataProps[]>([{
        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
        name: 'Nero',
        message: 'aa',
        time: new Date().toLocaleTimeString()
    }])

    const [msg, setMsg] = useState<string>('')

    return (
        <div className={classes.chat}>
            <hr/>
            {msgArr.map((message, index) =>
                <Message
                    avatar={msgArr[0].avatar}
                    name={msgArr[0].name}
                    message={msgArr[index].message}
                    time={msgArr[index].time}
                />
            )}

            <div className={classes.sendArea}>
                <textarea className={classes.text} value={msg}
                          onChange={event => setMsg(event.currentTarget.value)}></textarea>
                <button className={classes.button} onClick={() => {
                    if (msg !== '') {
                        setMsgArr(msgArr => [...msgArr,
                            {
                                avatar: msgArr[0].avatar,
                                name: msgArr[0].name,
                                message: msg,
                                time: new Date().toLocaleTimeString()
                            }
                        ]);
                        setMsg('');
                    }
                }}>Send
                </button>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
