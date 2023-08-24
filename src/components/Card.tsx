interface Props {
    title: string,
    children: JSX.Element | JSX.Element[],
    col: string
}

export const Card = ({ title = "Example", children, col }: Props) => {

    return (
        <div className={`bg-white drop-shadow-md rounded-lg ${col} border`}>
            <div className='h-full flex flex-col'>
                <div className="header flex-none p-4 border-b border-slate-200">
                    <div className="title">
                        <h2 className='text-base font-normal'>{title}</h2>
                    </div>
                </div>
                <div className="body flex-1 p-4">{children}</div>
            </div>
        </div >
    )
}
