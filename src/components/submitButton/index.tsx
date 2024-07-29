import { FC, ChangeEvent } from 'react'

interface SubmitProps {
    onClick: () => void;
}
export const Submit: FC <SubmitProps> = ({onClick}) => { 
    return (
        <button onClick={onClick} style={{width: '100px', height: '30px', color: 'black'}}>Submit</button>
    )
}