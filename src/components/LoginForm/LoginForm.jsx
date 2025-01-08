import { useForm } from "react-hook-form";
import s from "./LoginForm.module.scss"
import { useEffect } from "react";

export const LoginForm = () => {
    const {
            register,
            handleSubmit,
            formState: {errors},
        } = useForm({
            mode: "all",
        });
    
        const handleFormSubmit = async (data) => {
            console.log(data);

            const { username, password } = {...data}

            const formData = {
                username: username,
                password: password 
            }

            try {
                const res = await fetch("https://api.mediehuset.net/token", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData)
                });
                const data = await res.json();
                console.log("User Token", data);
            }
            catch (error) {
                console.error(`Error in fetch ${error.message}`);
            }
        }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={s.formStyling}>
        <input
        {...register("username", {
            required: "Du skal udfylde dit username",
            pattern: {
                message: "Ikke gyldigt username format"
            },
            minLength: {
                value: 5,
                message: "username skal være mindst 5 karakter"
            }
        })}
         type="text" name="username" id="username" placeholder="Dit username..."/>
         {errors.username ? <span>{errors.username.message}</span> : null}

         <input
        {...register("password", {
            required: "Du skal udfylde dit password",
            pattern: {
                message: "Ikke gyldigt password format"
            },
            minLength: {
                value: 6,
                message: "Password skal være mindst 6 karakter"
            }
        })}
         type="password" name="password" id="password" placeholder="Dit password..."/>
         {errors.password ? <span>{errors.password.message}</span> : null}

         <input type="submit" value="Login"/>
    </form>
  )
}