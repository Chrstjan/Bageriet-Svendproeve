import { useForm } from "react-hook-form";
import s from "./LoginForm.module.scss"

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
        }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={s.formStyling}>
        <input
        {...register("name", {
            required: "Du skal udfylde dit navn",
            pattern: {
                message: "Ikke gyldigt navn format"
            },
            minLength: {
                value: 2,
                message: "Navn skal være mindst 2 karakter"
            }
        })}
         type="text" name="name" id="name" placeholder="Dit navn..."/>
         {errors.name ? <span>{errors.name.message}</span> : null}

         <input
        {...register("email", {
            required: "Du skal udfylde din email",
            pattern: {
                message: "Ikke gyldigt email format"
            },
            minLength: {
                value: 5,
                message: "Email skal være mindst 5 karakter"
            }
        })}
         type="email" name="email" id="email" placeholder="Din e-mail..."/>
         {errors.email ? <span>{errors.email.message}</span> : null}

         <input type="submit" value="Login"/>
    </form>
  )
}