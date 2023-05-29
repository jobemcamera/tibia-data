import Boosted from 'components/Boosted'
import Card from 'components/Card'
import Loading from 'components/Loading'
import React, { useEffect, useState } from 'react'

export default function Creatures() {

    const [creatures, setCreatures] = useState([])
    const [boosted, setBoosted] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)

    // Boosted Creature
    useEffect(() => {
        const boostedCreature = async () => {
            const response = await fetch('https://api.tibiadata.com/v3/creatures');
            const jsonData = await response.json();
            setBoosted(jsonData.creatures.boosted);
            setRemoveLoading(true)
        };

        boostedCreature();

    }, [])

    // Creatures
    useEffect(() => {
        const creatures = async () => {
            const response = await fetch('https://api.tibiadata.com/v3/creatures');
            const jsonData = await response.json();
            setCreatures(jsonData.creatures.creature_list);
            setRemoveLoading(true)
        };

        creatures();

    }, [])

    return (
        <>
            <Boosted boosted={boosted} name='Creatures' text="creature" >
                {!removeLoading && <Loading />}
            </Boosted>
            <Card item={creatures} />
            {!removeLoading && <Loading />}
        </>
    )
}
