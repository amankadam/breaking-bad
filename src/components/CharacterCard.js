import React from 'react';

import {Link} from 'react-router-dom';

export default function CharacterCard(props){
    
    return(
        <div >
            <Link target="_blank" to={{pathname:`${props.data.char_id}`
    }} >            <img src={props.data.img} className='charImage'/>
            
       </Link>    
       <div className='cardContent'>
       <Link target="_blank" to={{pathname:`${props.data.char_id}`
    }} style={{textDecorationColor:'black'}} >  
       <h4 style={{color:'black',fontFamily:'Anton',paddingLeft:'5px'}}>{props.data.name}</h4>
       </Link>
       <p style={{fontFamily:'Libre Baskerville',fontSize:14,color:'white'}}>
           Status: 
       <font className='goldenYellow'><b>&nbsp;{props.data.status}</b></font></p>
            <p style={{fontFamily:'Libre Baskerville',fontSize:14,color:'white'}}> Birthday: 
                <font className='goldenYellow'>
                    <b>&nbsp;{props.data.birthday}</b>
                    </font>
                    </p>
            
            <p  style={{fontFamily:'Libre Baskerville',fontSize:14,color:'white'}}>Occupation: 
                <font className='goldenYellow'>
                    <b>&nbsp;{props.data.occupation[0]}</b>
                    </font>
                    </p>
           </div>
        </div>
    )
}