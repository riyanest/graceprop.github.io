import Image from 'next/image'
import React from 'react';
class Header extends React.Component {
        render(){
        
        function control(yolo)
        {if(yolo==1){
            document.getElementsByClassName("navbarlist")[0].style.opacity="1";
                document.getElementsByClassName("navbarlist")[0].style.height="100Vh"; 
                document.getElementsByClassName("navbarlist")[0].style.padding="50px"; 
            }
        else if(yolo==0){     
                document.getElementsByClassName("navbarlist")[0].style.height="0px";
                document.getElementsByClassName("navbarlist")[0].style.padding="0px";
            }
        }
    return (  
    <div style={{width:"100%",zIndex:"2"}}>
        {/* <div className="yarr" style={{}}>
            <div className="left" style={{height:"40px",backgroundColor:"#FFA500"}}>
            info@munafproperty.com
            </div>
            <div className="right" style={{height:"40px",backgroundColor:" #FF0000"}}>
                +91 9702012460
            </div>
        </div> */}
        <div className="buttonsbar00 resizable" style={{justifyContent:"space-between",padding:6,}}>
            <div className="logocont" style={{paddingLeft: "20px"}}>
                    <Image width="80px" height="80px" src="/logo.webp"/>
            </div>
             <ul className="list" style={{display:"flex",verticalAlign:"center"}}>
                    <li><a href="https://www.instagram.com/rrriiiyyaa/">
                            <svg className="svg" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground:"new 0 0 512 512"}}>
                                    <path d="M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160 C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48 h192c61.76,0,112,50.24,112,112V352z"/>
                                    <path d="M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336 c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z"/>
                                    <circle cx="393.6" cy="118.4" r="17.056"/>
                            </svg>
                    </a></li>
                    <li><a href="https://www.linkedin.com/in/riya-qureshi-092292186/">
                            <svg className="svg"  viewBox="0 0 512 512" >
                                    <path d="m475.074219 0h-438.148438c-20.394531 0-36.925781 16.53125-36.925781 36.925781v438.148438c0 20.394531 16.53125 36.925781 36.925781 36.925781h438.148438c20.394531 0 36.925781-16.53125 36.925781-36.925781v-438.148438c0-20.394531-16.53125-36.925781-36.925781-36.925781zm-293.464844 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0"/>
                            </svg>
                    </a></li>

            </ul> 
            <ul className="navbarlist">         

                        <li className=" headd heading switchsvg" data-text="Property">
                            <span>Property</span>
                        </li>
                        <li className=" headd heading switchsvg" data-text="Services">
                            <span>Services</span>
                        </li>
                        <li className=" headd heading switchsvg" data-text="News">
                            <span>News</span>
                        </li>
                        <button className="switchsvg exitbar" type="button" onClick={()=>control(0)}>X</button>
                        </ul>
                        

        </div>
        <button className="navbarbutton switch" onClick={()=>control(1)}>
        <svg style={{wclassNameth:"30px",height:"30px",width:'30px',fill:"white"}} viewBox="0 0 48 48" width="48px" height="48px">
            
            <path  d="M43,15H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,14.1,44.1,15,43,15z"/>
            
            <path  d="M43,27H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,26.1,44.1,27,43,27z"/>
            
            <path  d="M43,39H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,38.1,44.1,39,43,39z"/></svg>
        </button>            
    </div>
        )
    }        
}
export default Header;
