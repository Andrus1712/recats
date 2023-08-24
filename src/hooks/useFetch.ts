import { useEffect, useState } from 'react';

export const useFetch = (url: string) => {
    const [dataRes, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((response) => {
                response.json();
            })
            .then((res) => {
                console.log(res);
            });
    }, []);

    return { dataRes };
};
