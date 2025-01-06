
import { useState } from "react";

export function TwitterFollowCard ({formatUserName, userName, name}){
    const imageSrc = `https://unavatar.io/${userName}`;
    
    /*Cambiando los estados de siguiendo*/

    const [isFollowing, setIsFollowing] = useState(false);
    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }

    
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'article button';

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={imageSrc} alt="avatar"/>
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}