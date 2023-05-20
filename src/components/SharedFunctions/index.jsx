import React from 'react'
import Moment from 'react-moment'
import 'moment-timezone';

export function openNewTab(link){
    return () => {
        window.open(link, '_blank')
    }
}

export function formatDate(date, style) {
    return (
        <Moment format={style} tz="Europe/Paris">
            {date}
        </Moment>
    )
}
