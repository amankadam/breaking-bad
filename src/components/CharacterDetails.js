import React from 'react';
import axios from 'axios';

import { CircularProgress } from '@material-ui/core';
class CharacterDetails extends React.Component{
    state={data:null,quotes:[]};

componentDidMount(){
this.fetchDetails();   
}
fetchDetails(){
    
    const id=this.props.match.params.charId;
    if((id>=1 && id<=57) || (id>=112 && id<=115)){
axios.get('https://www.breakingbadapi.com/api/characters/'+this.props.match.params.charId).then((res)=>{
this.setState({data:res.data[0]});
const newStr=res.data[0].name.replace(" ","+");
axios.get('https://www.breakingbadapi.com/api/quote?author='+newStr).then((q)=>{
this.setState({quotes:q.data});
});
});
    }
}

    render(){
        const id=this.props.match.params.charId;
        if((id>=1 && id<=57) || (id>=112 && id<=115))
    {
        return(
            <div className='container'>
                {this.state.data==null?<CircularProgress color="secondary"/>:
            <div className='row' >
              <img src={this.state.data.img} className='charDetailsImage'/>
                <div className='col'>
              <h3 style={{color:'white',fontFamily:'Anton',textShadow:'1px 1px #000'}}>{this.state.data.name}</h3>
              <p style={{color:'white',textShadow:'1px 1px #000'}}><font style={{color:'grey'}}>Status</font> : {this.state.data.status}</p>
              <p style={{color:'white',textShadow:'1px 1px #000'}}><font style={{color:'grey'}}>Date of Birth</font> : {this.state.data.birthday}</p>
              <p style={{color:'white',textShadow:'1px 1px #000'}}><font style={{color:'grey'}}>Nickname</font> : {this.state.data.nickname}</p>
              <p style={{color:'white',textShadow:'1px 1px #000'}}><font style={{color:'grey'}}>Portrayed By</font> : {this.state.data.portrayed}</p>
              
              <p style={{color:'white',textShadow:'1px 1px #000'}}><font style={{color:'grey'}}>Seasons Appeared</font> : {this.state.data.appearance.join()}</p>
              <p style={{color:'white',textShadow:'1px 1px #000'}}><font style={{color:'grey'}}>Occupations</font> :<ul> {this.state.data.occupation.map((o)=>{
                 return(<li>{o}</li>) 
                })}
              </ul>
              </p>
              {this.state.quotes!=null?
              <p style={{color:'white',textShadow:'1px 1px #000'}}><font style={{color:'grey'}}>Famous Quotes</font> :<ul> {this.state.quotes.map((o)=>{
                 
                 return(<li>{o.quote}</li>) 
                })}
              </ul>
              </p>:<p>Loading Quotes..</p>}
             </div>
            </div>
    }
            </div>
        

        )
}else{
    return (
        <div className='container'>
            <h2 className='goldenYellow'> Oooops..! No Such Page..!</h2>

        </div>
    )
}
    }
}
export default CharacterDetails;