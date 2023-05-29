import Boosted from 'components/Boosted';
import Card from 'components/Card';
import Loading from 'components/Loading';
import React, { useEffect, useState } from 'react'

export default function BoostableBosses() {

    const [bosses, setBosses] = useState([])
    const [boosted, setBoosted] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)

    // Boosted Boss
    useEffect( () => {
        const boostedBoss = async () => {
            const response = await fetch('https://api.tibiadata.com/v3/boostablebosses');
            const jsonData = await response.json();
            setBoosted(jsonData.boostable_bosses.boosted);
            setRemoveLoading(true);
        };

        boostedBoss();
    })
    
    // Boostable Bosses
    useEffect(() => {
        const boostableBosses = async () => {
            const response = await fetch('https://api.tibiadata.com/v3/boostablebosses');
            const jsonData = await response.json();
            setBosses(jsonData.boostable_bosses.boostable_boss_list);
            setRemoveLoading(true);
        };

        boostableBosses();

    }, [])

    return (
        <>
            <Boosted boosted={boosted} name="Boostable Bosses" text="boss">
                {!removeLoading && <Loading />}
            </Boosted>
            <Card item={bosses}/>
            {!removeLoading && <Loading />}
        </>
    )
}
