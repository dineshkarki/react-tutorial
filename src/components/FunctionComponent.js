import React, {useState} from "react";
import { useForm } from "react-hook-form";
import {Button} from "react-bootstrap";

const FunctionComponent = () => {
    const [state, setState] = useState(5);
    const {register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    const decrement = () => {
        setState(count => count-1)
    }
    function increment() {
        setState(count => count+1)
    }
    return (
        <div>
            <h3>Function Component</h3>
            <Button onClick={decrement} variant="primary">-</Button>
            <span>{state}</span>
            <Button onClick={increment} variant="danger">+</Button>

            <h3>React Hook Form</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="formGroup">
                <input type="text" name="email" {...register('name', { required: true })}/>
                <input type="password" name="password" {...register('password', { required: true, minLength:8 })} />
                {errors.password && <p style={{color:'red'}}>password is invalid</p>}
                <input type="submit" />
            </form>
        </div>
    )
}
export default FunctionComponent;