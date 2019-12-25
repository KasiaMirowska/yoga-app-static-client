import React from 'react';
import YogaContext from '../Context';

export default function CurrentFlow() {
   
    return (
        <YogaContext.Consumer>
            {(value) => {
                if(`${value.currentFlow.name}` === null) {
                    return (
                        <div> PLEASE PICK OR CREATE A FLOW FIRST</div>
                    )
                    
                } else {
                    return(
                        <div>
                            <h2>Current Flow: {`${value.currentFlow.name}`}</h2>
                        </div>
                    )
                }
                
            }}    
               
                
        
    
               </YogaContext.Consumer>
    )
}