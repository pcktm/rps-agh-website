import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const TextInput = ({ htmlFor, label, placeholder, register, error, errorLabel = "", icon, type = "text", disabled = false }) => {
  return (
    <div className="flex-1">
      <label htmlFor={htmlFor} className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          {icon}
        </div>
        <input
          type={type}
          id={htmlFor}
          className={`block w-full pl-10 p-2.5 rounded-md border-transparent bg-gray-100 focus:bg-white focus:ring-0 ${error ? "border-red-500 focus:border-red-500 placeholder-red-600" : "border-brand-50 focus:border-brand-400"}`}
          placeholder={placeholder}
          {...register}
          disabled={disabled}
        />
      </div>
      <p className="mt-1 text-sm text-red-600 dark:text-red-500">
        {error && errorLabel}
      </p>
    </div>
  )
}

type Inputs = {
  name: string;
  email: string;
  message: string;
  idNumber: number;
}

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (payload) => {
    // reset();
    console.log(payload);
    setSending(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-2">
      <div className="flex flex-col-reverse sm:flex-row gap-2 sm:gap-4">
        <TextInput
          htmlFor="email-input"
          label="Email"
          type="email"
          placeholder="ty@student.agh.edu.pl"
          register={register("email", { required: true })}
          error={errors.email}
          errorLabel="Podaj swój email"
          disabled={sending}
          icon={(
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 text-gray-500 ${errors.email ? "text-red-600" : ''}`}>
              <path fillRule="evenodd" d="M5.404 14.596A6.5 6.5 0 1116.5 10a1.25 1.25 0 01-2.5 0 4 4 0 10-.571 2.06A2.75 2.75 0 0018 10a8 8 0 10-2.343 5.657.75.75 0 00-1.06-1.06 6.5 6.5 0 01-9.193 0zM10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" clipRule="evenodd" />
            </svg>
          )}
        />
        <TextInput
          htmlFor="name-input"
          label="Imię i nazwisko"
          placeholder="Jan Kowalski"
          register={register("name", { required: true })}
          error={errors.name}
          errorLabel="Podaj swoje imię"
          disabled={sending}
          icon={(
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 text-gray-500 ${errors.name ? "text-red-600" : ''}`}>
              <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
            </svg>
          )}
        />
      </div>
      <div className="mt-2">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Wiadomość</label>
        <textarea
          id="message"
          className="block w-full h-24 p-2.5 rounded-md bg-gray-100 border-brand-50 border-transparent focus:border-brand-400 focus:bg-white focus:ring-0"
          placeholder="Dzień dobry..."
          disabled={sending}
          {...register("message", { required: true })}
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="mt-3 flex justify-center w-24 text-white bg-brand-600 hover:bg-brand-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center"
      >
        {
          sending ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 animate-spin">
              <path fillRule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z" clipRule="evenodd" />
            </svg>
          ) : "Wyślij!"
        }
      </button>
    </form>
  )
}