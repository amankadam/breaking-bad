import React from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import ReactPaginate from 'react-paginate';
import { CircularProgress } from '@material-ui/core';

class Home extends React.Component{
    state={offset:0,data:[],loading:true,error:false};

    componentDidMount(){
        this.receiveData();
    }
    receiveData(){
        this.setState({loading:true});
        axios.get('https://www.breakingbadapi.com/api/characters?limit=10&offset='+this.state.offset).then((res)=>{

         const data=res.data.map(p=>{
            return(
                <div className='card shadow-sm'> 
            <CharacterCard data={p}/>
                </div>
            )
         });
         this.setState({data:data,loading:false});
        }).catch((e)=>{
            this.setState({error:true})
           });;
    }
    handlePageClick=e=>{
        const selectedPage=e.selected;
        const offset=selectedPage*10;
        this.setState({
offset:offset
        },()=>{

            this.receiveData();
        });
    }
    render(){
        if(this.state.error){
        return(
            <div className='container'>
            <h2 className='goldenYellow'> Oooops..! Some Error Occured..!</h2>
        </div>
        )
        }else{
        return(
            <div>
                <div className='characterGrid'>  
        {this.state.loading ?<CircularProgress color="secondary"/> :
            <>{this.state.data}</>
            }
          
          </div>
            <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={7}
            breakClassName={"break-me"}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}/>
            </div>
        );
    }
    }
}
export default Home;