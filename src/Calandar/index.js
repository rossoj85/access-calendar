import React,{useState, Fragment, Component} from 'react';
// import CalendarHTML from './CalendarHTML';
// import DatePicker from './DatePicker';
// import CalendarButtonInput from './CalendarButtonInput';
import Datepicker from 'react-ada-keyboard-accessible-datepicker';
// import { nullLiteral } from '@babel/types';
import './testStyle.css'

//CLASS BASED CONTAINER 
class ClassBasedCalContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            errorType: null
        }
        this.setStateCallBack = this.setStateCallBack.bind(this);
    }

    setStateCallBack(messageType){
        this.setState({errorType: messageType})
    }

render(){
    console.log('HELLO FROM THE CAL CONTAINER');
    const customInputBox = <input id="CUstom-Box" placeholder="this is a custom DOOOG  in BOX" style={{'backgroundColor': 'red'}}></input>
    return(
        <div>
            <h1>CLASS BASED COMPONENT CONTAINER</h1>
            <h2>{`The State message is ${this.state.errorType}`}</h2>
            <Datepicker 
            // errorHandlingCallback ={this.setStateCallBack}
            minDate={"today"} //eventually make this so it follows format
            maxDate={"20-12-25"}  
            invalidMonthErrorMessage={"Wrong month guy"}
            invalidDateErrorMessage= {"Wrong day "}
            invalidFormatError={"CHeck Yo Formatting"}
            pastMaxDateErrorMessage={" TOo big "}
            minDateErrorMessage={"Too  SmAll"}
            customInputBox ={customInputBox}
            inputBoxLabel ={"this is a custom label"}
            />
            <div id="errorMessageReservedSpace">
                {this.state.errorType? `There is an error: ${this.state.errorType}`:""}
            </div>

        </div>
    )
}

}








// const CalendarContainer = () =>{

//     // document.addEventListener('focus', function() {
//     //     console.log('focused (focus): ----- &&& --->> ', document.activeElement)
//     //   }, true);
//       document.addEventListener('focusin', function() {
//         // console.log('focused (focus in) --- *** --->: ', document.activeElement)
//         setActive(document.activeElement)
//       }, true);
      
//     const [activeElement, setActive] = useState(document.activeElement)
//     const [errorType, setErrorType] = useState(null)

//     console.log('HELLLOOOO FROMT HE CONTAINER');
   

//     const customInputBox = <input id="CUstom-Box" placeholder="this is a custom DOOOG  in BOX" style={{'backgroundColor': 'red'}}></input>
//     const buttonInlineStyle = {'color': "orange", marginLeft: "30px"} 
//     const changeHandler= ()=>{
//     console.log('A CHANGE HAPPENED. . . .')

//     }   

//     const clickHandler =()=>{
//         console.log('A click done happened');
//     }


//     // console.log('States active element ===>', activeElement.outerHTML);
//     return(
//         <div>
//             <h1 className="yellowBackground textPurp" onClick={clickHandler}>CONTAINER APP FOR CALENDAR NPM MODULE~</h1>
//             <h2>{`The Error Type is ${errorType}`}</h2>
      
//             <Datepicker 
//                             // // styles={styles}  
//                             // themeColor={"#B41C1C"}
//                             // errorHandling={bool} add error handling option 
//                             specifiedFocusDate={"2019-10-15"}
//                             // dateFormat={"yyyy,mm,dd"}
//                             dateFormat ={"mm dd, yyyy"}
//                             invalidDateErrorMessage={" YOUR MOM IS A DATE WHORE "}
//                             invalidFormatError = {"DUDE YOU fucked up the format"}
//                             invalidMonthErrorMessage = {" IS IT Your Time of Month? Ypu fucked Up the moTh"}
//                             pastMaxDateErrorMessage = {"SLow DOwn its way pasT thT Date"}

//                             minDateErrorMessage = {" YHou're way behind -- min date error"}

//                             minDate={"today"} //eventually make this so it follows format
//                             maxDate={"2019-12-25"}
//                             // buttonInlineStyle={buttonInlineStyle} 
//                             buttonClassNames={"textPurp"}
//                             // styles={null}
//                             // customButton={null}
//                             // customInputBox={customInputBox}
//                             inputBoxLabel={"This is a custom label"}
//                             // inputBoxLabelContent={"It's tuesday morning "}
//                             // inputBoxClassNames = {"yellowBackground textPurp"} // will only apply to the default input bax
//                             // inputBoxOnChange={changeHandler} // perhaps execute this in the native onCHange Handler (format)
//                             // autoFormatting={false}
//                             errorHandlingCallback ={setErrorType}
//                             // buttonInlineStyle={buttonInlineStyle}
//                             // tableClasses={"yellowBackground textPurp"}
//                             // dateCellClasses={"yellowBackground"}
//                             // dateButtonClasses={"yellowBackground textPurp"}
//                             // // onChange={changeHandler} 
                            
//                             />
//             {/* <CalendarHTML /> */}
//             <div id="focus-display">
//                 <h2>Focused Element:</h2>
//                 <h2>{activeElement.outerHTML}</h2>
//             </div>
//         </div>
//     )
// }

// export default  CalendarContainer;


export default ClassBasedCalContainer;