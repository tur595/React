import { Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";
import { useForm } from "react-hook-form";
import "./SendMail.css";

function SendMail() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("hey");
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close className="sendMail__close" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="text"
          ref={register("name value", { required: true })}
        />
        {errors.to && <p>To is required</p>}
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          ref={register("name value", { required: true })}
        />
        <input
          name="message"
          className="sendMail__message"
          placeholder="Message"
          type="text"
          ref={register("name value", { required: true })}
        />

        <div className="sendMail__options">
          <Button className="sendMail__send">Send</Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
