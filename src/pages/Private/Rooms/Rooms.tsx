import { Button } from '@/components';
import { getAllRooms } from '@/services/rooms.service';
import DataGrid, { Column, Pager, Paging, SearchPanel, Scrolling } from 'devextreme-react/data-grid';
// import { getAllRooms } from '@/redux/states/roomsSlice';
import { useEffect, useState } from 'react';

const pageSizes = [10, 25, 50, 100];

const Rooms = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [dataRooms, setDataRooms] = useState<[]>([]);
    const [collapsed, setCollapsed] = useState<boolean>(false);

    // const dispatch = useAppDispatch();
    // const { data } = useAppSelector((state) => state.rooms);

    // const dataRes = useFetch('https://jsonplaceholder.typicode.com/todos/2');
    // console.log(dataRes);

    useEffect(() => {
        getAllRooms().then((res) => {
            setDataRooms(res?.data);
        });
    }, []);

    return (
        <div>
            {loading ? (
                'cargando'
            ) : (
                <>
                    <Button text="Add"></Button>
                    <pre>{JSON.stringify(dataRooms, null, 2)}</pre>
                    <div className="my-3 max-h-full">
                        <DataGrid dataSource={dataRooms}>
                            <Scrolling mode="virtual" />
                            <SearchPanel visible={true} highlightCaseSensitive={true} />

                            <Column dataField="id" caption="id" dataType="string" />
                            <Column dataField="code" caption="code" dataType="string" />
                            <Column dataField="door" caption="door" dataType="string" />
                            <Column dataField="floor" caption="floor" dataType="string" />
                            <Column dataField="description" caption="description" dataType="string" />
                            <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
                            <Paging defaultPageSize={10} />
                        </DataGrid>
                    </div>
                </>
            )}
        </div>
    );
};
export default Rooms;
