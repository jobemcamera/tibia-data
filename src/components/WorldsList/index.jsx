import React from 'react'

export default function WorldsList({ worlds }) {
    return (
        <>
            {worlds.map(world => <p key={world.name}>{world.name}</p>)}
        </>
    )
}
