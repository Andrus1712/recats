import { useAppDispatch, useAppSelector, useFetch } from '@/hooks';
import { getAllRooms } from '@/redux/states/roomsSlice';
import { useEffect, useState } from 'react';

const Rooms = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const dispatch = useAppDispatch();
    const { data } = useAppSelector((state) => state.rooms);

    const { dataRes } = useFetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(dataRes);

    useEffect(() => {
        dispatch(getAllRooms())
            .unwrap()
            .then(() => {})
            .catch(() => {
                setLoading(false);
            });

        return () => {};
    }, []);

    return (
        <div>
            {loading}

            {JSON.stringify(data, null, 2)}
        </div>
    );
};
export default Rooms;
