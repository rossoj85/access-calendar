import React,{Fragment, useEffect} from 'react';
import CalendarHTML from './CalendarHTML'

const Calendar = () =>{
    
    useEffect(()=>{
        console.log(document.querySelector('button'))
        console.log('this-->', this);
    })

    return(
        <Fragment>
            <CalendarHTML />
        </Fragment>
    )
}

export default  Calendar;