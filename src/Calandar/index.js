import React,{Fragment, useEffect} from 'react';
import ReactDOM from 'react-dom'

import CalendarHTML from './CalendarHTML';
import DatePicker from './DatePicker';
import CalendarButtonInput from './CalendarButtonInput';



const Calendar = () =>{
    // const node = ReactDOM.findDOMNode(this)
    useEffect(()=>{
        console.log('adding window event listener');
        var datePickers = document.querySelectorAll('.datepicker');
        

        datePickers.forEach(function (dp) {
          var inputNode   = dp.querySelector('input');
          var buttonNode  = dp.querySelector('button');
          var dialogNode  = dp.querySelector('[role=dialog]');

          console.log('vars-->',inputNode,buttonNode,dialogNode );
            
          var datePicker = new DatePicker(inputNode, buttonNode, dialogNode);
        datePicker.init();
        })
    })

    return(
        <Fragment>
            <CalendarHTML />
        </Fragment>
    )
}

export default  Calendar;