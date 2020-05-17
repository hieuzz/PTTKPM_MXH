import React from 'react'



const Home = ()=>{
    return (
        <div className="home">
            <div className="card home-card">
                <h5>nhudo</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/> 
                </div>
                <div className="card-content">
                <i className="material-icons" style={{color:"red"}}>favorite</i>
                    <h6>title</h6>
                    <p>this is amazing post</p>
                    <input type="text" placeholder="add a comment"/>
                </div>
                <div className="card home-card">
                <h5>nhudo</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/> 
                </div>
                <div className="card-content">
                <i className="material-icons" style={{color:"red"}}>favorite</i>
                    <h6>title</h6>
                    <p>this is amazing post</p>
                    <input type="text" placeholder="add a comment"/>
                </div>
            </div>
            </div>
        </div>
        
    )
}


export default Home