// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Typography, Button } from "@material-tailwind/react";
import { Alert } from "@material-tailwind/react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function AlertDismissible({color,msg}) {
  const [open, setOpen] = React.useState(true);

  return (
    <>
    <div className="fixed top-12 left-0 w-full z-50 p-4">
      <Alert open={open} color={color} icon={<Icon />} onClose={() => setOpen(false)}>
        {msg}
      </Alert>
      </div>
    </>
  );
}

function ContactForm() {
  const [state, handleSubmit] = useForm("xjvqyean");
  if (state.succeeded) {
    return (
      <div>
        <AlertDismissible color="blue" msg="Your email was sent with success!"/>
        <ContactForm />
      </div>
    );
  }
  if(state.errors) {
    return(<div>
        <AlertDismissible color="red" msg="Oops! An error has occured."/>
        <ContactForm />
      </div>)
  }
  return (
    <div id="contactForm" className="bg-quinary font-montserrat text-white w-full flex justify-center items-center py-8 px-6">
      <form
        className="flex flex-col justify-start items-start w-9/12"
        onSubmit={handleSubmit}
      >
        <div className="w-full mb-2">
          <Typography
            variant="h3"
            className="mt-3 text-4xl font-montserrat text-white font-bold text-center "
          >
            C O N T A C T <span className="ml-2">M E</span>
          </Typography>
        </div>
        <label className="text-2xl font-bold mt-4" htmlFor="email">
          Email
        </label>
        <input
          className="w-full md:w-4/12 bg-highlight rounded-lg p-3 border-primary focus: outline-none"
          id="email"
          type="email"
          name="email"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label className="text-2xl font-bold mt-4" htmlFor="email">
          Message
        </label>
        <textarea
          rows="6"
          className="resize-none w-full bg-highlight rounded-lg p-3 border-primary focus: outline-none"
          id="message"
          name="message"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <Button
          className="font-montserrat mt-4 bg-primary w-full rounded-lg"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
function Contact() {
  return <ContactForm />;
}
export default Contact;
