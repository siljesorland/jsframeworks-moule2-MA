import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

const schema = yup.object().shape({
    website: yup.string().url(),
});

export default function App() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };
    const intialValues = {
        name: "",
        age: 0
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <label htmlFor="name">Name</label>
            <input
                defaultValue={intialValues.name}
                {...register("name", {
                    validate: (value) => value.length > 3
                })}
            />
            {errors.name && <p>Your name must be more than 3 characters</p>}


            <label htmlFor="age">Age</label>
            <input
                defaultValue={intialValues.age}
                placeholder="0"
                type="text"
                {...register("age", {
                    validate: {
                        positiveNumber: (value) => parseFloat(value) > 10,
                        lessThanHundred: (value) => parseFloat(value) < 20
                    }
                })}
            />
            {errors.age && errors.age.type === "positiveNumber" && (
                <p>Your age must be more than 10</p>
            )}
            {errors.age && errors.age.type === "lessThanHundred" && (
                <p>Your age must be less than 20</p>
            )}
            <label htmlFor="age">Website</label>

            <input {...register("website")} />
            {errors.website && <p>{errors.website.message}</p>}


            <input type="submit" />
        </form>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);