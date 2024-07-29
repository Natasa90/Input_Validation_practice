import { FC, ChangeEvent, useState } from 'react'
import { Input } from '../input'
import { Submit } from '../submitButton'; 

export const UpdateForm: FC = () => { 

    const [name, setName] = useState<string>('');
    const updateName = (e: ChangeEvent<HTMLInputElement>): void => { 
        const usersName = e.target.value; 
        setName(usersName); 
    }; 
    

    const [email, setEmail] = useState<string>(''); 
    const updateEmail = (e: ChangeEvent<HTMLInputElement>): void => {
        const usersEmail = e.target.value;
        setEmail(usersEmail);
    }

    const [phone, setPhone] = useState<number>(0);
    const updatePhone = (e: ChangeEvent<HTMLInputElement>): void => {
        const usersPhone = e.target.value;
        setPhone(Number(usersPhone)); 
        }


    const [isEmployed, setEmployment] = useState<boolean>(false); 
    const updateEmployment = (e: ChangeEvent<HTMLInputElement>): void => {
        const usersEmployment = e.target.checked; 
        setEmployment(Boolean(usersEmployment));
    }

    interface FormValidationProps {
        name: boolean; 
        email: boolean;
        phone: boolean;
    }

    const [valid, setValid] = useState<FormValidationProps>({
        name: true,
        email: true,
        phone: true

    })
 
    const handleSumbit = (): void => { 

        setValid ({
           name: name !== '', 
           email: email !== '',
           phone: !isNaN(phone) && phone > 0
        })
        
        if (!name && email && !isNaN(phone)){
            alert ('Please enter your name!')
            return;
        } if (name && !email && !isNaN(phone)) {
            alert ('Please enter your email!')
            return;
        } if (name && email && isNaN(phone) || phone == 0) {
            alert ('Please enter your phone number!')
            return;
        } if (!name && !email && !isNaN(phone)) {
            alert ('Please enter info in the fields!')
            return;
        } else {
            alert ('Submit successful.')
        return (
            console.log(name, email, phone, isEmployed)
        )
    }
}

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <Input name='name' handleOnChange={updateName} style={{border: !valid.name ? '1px solid red' : '1px solid black', marginLeft: '10px'}} />
            <Input name='email' handleOnChange={updateEmail} style={{border: !valid.email ? '1px solid red' : '1px solid black', marginLeft: '10px'}}/>
            <Input name='phone' handleOnChange={updatePhone} style={{border: !valid.phone ? '1px solid red' : '1px solid black', marginLeft: '10px'}}/>
            <label> Employed: 
                <input
                    type='checkbox'
                    checked={isEmployed}
                    onChange={updateEmployment}>
                </input>
            </label>
            <Submit onClick={handleSumbit}/>
        </div>
    )    
}