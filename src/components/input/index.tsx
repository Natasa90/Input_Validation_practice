import { ChangeEvent, FC } from 'react'; 

interface InputProps {
    style: React.CSSProperties
    name: string; 
    handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC <InputProps> = ({name, handleOnChange, style}) => { 
    return (
        <label> Enter your {name} :
              <input name={name} onChange={handleOnChange} style={style}/>
        </label>

    )  
}