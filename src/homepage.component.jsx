import React from 'react'
import App from './App';

class Homepage extends React.Component{

    constructor(){
        super();
        this.state = {
            sections: [
                  {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1
                  },
                  {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2
                  },
                  {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3
                  },
                  {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4
                  },
                  {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5
                  }
            ]
        }
    }

    render(){
        const {sections} = this.state;
    
        return(
           <div className='homepage'>
               <h1>Welcome to Homepage</h1>
               {
                  sections.map(({title,imageUrl,size,id})=>(
                      <App  
                      id={id}
                      title = {title}
                      imageUrl = {imageUrl}
                      size ={size}
                      />
                  )
                  ) 
               }
               
           </div>
        )
    }


}

export {Homepage}