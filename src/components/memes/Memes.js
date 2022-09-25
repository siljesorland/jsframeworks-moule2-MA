import { useState, useEffect } from "react";
import { API } from "../../constants/api";

function MemesList() {
    const [memes, setMemes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(function () {
        async function fetchData() {
            try {
                const response = await fetch(API);

                if (response.ok) {
                    const json = await response.json();
                    console.log(json);
                    setMemes(json.data.memes);
                } else {
                    setError("An error occured");
                }
            } catch (error) {
                setError(error.toString());
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>An error occured: {error}</div>;
    }

    return (
        <>
            {memes.map(function (meme) {
                return <div key={meme.id}>{meme.name}<img src={meme.url} alt=""></img></div>;
            })}
        </>
    );
}

export default MemesList;
