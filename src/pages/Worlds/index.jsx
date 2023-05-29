// import Form from 'components/Form';
import Loading from 'components/Loading';
import Records from 'components/Records';
import WorldsList from 'components/WorldsList';
import React, { useEffect, useState } from 'react';

export default function Worlds() {

    const [records, setRecords] = useState([]);
    const [worlds, setWorlds] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false)

    // Records
    useEffect(() => {
        const records = async () => {
            const response = await fetch('https://api.tibiadata.com/v3/worlds');
            const jsonData = await response.json();
            setRecords(jsonData.worlds);
            setRemoveLoading(true)
        };

        records();

    }, [])

    // Worlds
    useEffect(() => {
        const worlds = async () => {
            const response = await fetch('https://api.tibiadata.com/v3/worlds');
            const jsonData = await response.json();
            setWorlds(jsonData.worlds.regular_worlds);
            setRemoveLoading(true)
        };

        worlds();

    }, []);

    return (
        <>
            <Records records={records}>
                {!removeLoading && <Loading />}
            </Records>
            <WorldsList worlds={worlds}/>
        </>
    )
}
