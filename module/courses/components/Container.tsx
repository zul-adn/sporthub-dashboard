import React from "react";

type Props = {
    children: React.ReactNode;
}


const Container = ({children}: Props) => {
    return (
        <div className='grid grid-cols-3 gap-3'>
            {children}
        </div>
    )
}

export default Container;