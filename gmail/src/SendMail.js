import { Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";
import { useForm } from "react-hook-form";
import "./SendMail.css";

function SendMail() {
  const { register, handleSubmit, watch, errors } = useForm();

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close className="sendMail__close" />
      </div>

      <form>
        <input name="to" placeholder="To" type="text" />
        <input name="subject" placeholder="Subject" type="text" />
        <input
          name="message"
          className="sendMail__message"
          placeholder="Message"
          type="text"
        />

        <div className="sendMail__options">
          <Button className="sendMail__send">Send</Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
