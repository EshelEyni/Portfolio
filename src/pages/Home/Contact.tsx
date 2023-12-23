import { FC, useState } from "react";
import { SectionHeader } from "../../components/SectionHeader/SectionHeader";
import "./Contact.scss";
import { InViewSection } from "../../components/InViewSection/InViewSection";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import {
  EMAIL_JS_SERVICE_ID,
  EMAIL_JS_TEMPLATE_ID,
  EMAIL_JS_USER_ID,
} from "../../../config";
import { BoxLoader } from "../../components/BoxLoader/BoxLoader";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type Status = "idle" | "pending" | "fulfilled" | "rejected";

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export const Contact: FC = () => {
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  async function onSubmit(data: FormValues) {
    setStatus("pending");
    try {
      await emailjs.send(
        EMAIL_JS_SERVICE_ID,
        EMAIL_JS_TEMPLATE_ID,
        data,
        EMAIL_JS_USER_ID
      );

      setStatus("fulfilled");
      reset();
    } catch (error) {
      const { message } = error as unknown as Error;
      console.error(message);
      setStatus("rejected");
    }

    setTimeout(() => {
      setStatus("idle");
    }, 3000);
  }

  return (
    <section id="contact" className="contact">
      <SectionHeader
        title="contact"
        description="Feel free to Contact me by submitting the form below and I will get back to you as soon as possible."
      />
      <InViewSection>
        <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="contact__form__input-container">
            <label htmlFor="name">Name</label>
            <input
              {...register("name", { required: true })}
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              autoComplete="off"
            />
            {errors.name && (
              <span className="contact__form__input-container__error">
                Name is required
              </span>
            )}
          </div>
          <div className="contact__form__input-container">
            <label htmlFor="email">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: emailRegex,
                  message: "Invalid email address",
                },
              })}
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
              autoComplete="off"
            />
            {errors.email && (
              <span className="contact__form__input-container__error">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="contact__form__input-container">
            <label htmlFor="message">Message</label>
            <textarea
              {...register("message", { required: true })}
              name="message"
              id="message"
              cols={30}
              rows={10}
              placeholder="Enter your message"
              autoComplete="off"
            />
            {errors.message && (
              <span className="contact__form__input-container__error">
                Message is required
              </span>
            )}
          </div>

          <button className="btn btn--animated" type="submit">
            Submit
          </button>

          {status !== "idle" && (
            <div className="contact__form__status">
              {status === "pending" && (
                <div className="contact__form__status__loader">
                  <BoxLoader />
                  <p>Sending...</p>
                </div>
              )}
              {status === "fulfilled" && <p>Message sent successfully!</p>}
              {status === "rejected" && (
                <p>
                  Something went wrong.
                  <br /> Please try again later.
                </p>
              )}
            </div>
          )}
        </form>
      </InViewSection>
    </section>
  );
};
