import React from 'react'

export const GifGridItem = ({id, title, url}) => {
    return (
        <div className="card animate__animated animate__bounce">
            <img alt={'IMG'} src={url} width={150}/>
            <small>{title}</small>
        </div>
    )
}
