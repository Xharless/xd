import React from 'react'
import './app.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'



export function App(){
    const format = (userName) => `@${userName}`

    return (
        /*es lo mismo que react fragment y se agrega section para css*/
        <section className='app'> 
            <TwitterFollowCard 
                formatUserName={format} 
                userName={"tylwerr"} 
                name={"Daniel Maturana"} 
            />
            <TwitterFollowCard 
                formatUserName={format} 
                userName={"Carlos_aag17"} 
                name={"Carlos Arevalo"} 
            />
            
        </section>
        
    )
}