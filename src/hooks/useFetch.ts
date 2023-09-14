import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetch = (url: string) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async function () {
            try {
                setLoading(true);
                const response = await axios.get(url);
                console.log(response)
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        })();
    }, [url]);

    return { data, error, loading };
};
