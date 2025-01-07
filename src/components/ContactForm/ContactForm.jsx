import { useForm } from "react-hook-form"
import s from "./ContactForm.module.scss";

export const ContactForm = () => {
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

        <textarea {...register("message", {
            required: "Du skal skrive en besked",
            pattern: {
                message: "Ikke gyldig besked format"
            },
            minLength: {
                value: 10,
                message: "Din besked skal være mindst 10 karakter"
            }
        })}>
        </textarea>
         {errors.message ? <span>{errors.message.message}</span> : null}
         <span>
            <input type="submit" value="Send"/>
         </span>
    </form>
  )
}