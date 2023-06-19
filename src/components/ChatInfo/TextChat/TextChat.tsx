import { ChangeEvent, FC, useEffect, useState } from "react";
import "./text.css";
import "./textError.css";
import { useParams } from "react-router-dom";
import { Send } from "@mui/icons-material";
import { StyledButton, StyledTextField, StyledForm } from "./Form.styled";
interface ObjNotice {
  text: string;
}

export const TextChat: FC = () => {
  const { chatId } = useParams();
  const [text, setText] = useState("");
  const [textArray, setTextArray] = useState<ObjNotice[]>([]);
  const [errHidden, setErrHidden] = useState(false);
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };
  const chatContainer: HTMLElement | null = document.querySelector(".chat");
  function scrollToBottom(): void {
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }
  function addNewMessage(): void {
    scrollToBottom();
  }
  useEffect(() => {
    addNewMessage();
  }, [textArray]);
  useEffect(() => {
    if (text) {
      setErrHidden(true);
    } else {
      setErrHidden(false);
    }
  }, [text]);
  useEffect(() => {
    setTextArray([]);
  }, [chatId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const arrMessage: ObjNotice = { text: text };
    setTextArray((prevTextArray) => [...prevTextArray, arrMessage]);
    setText("");
  };

  return (
    <div className="text-container">
      <div className="chat">
        <ul className="text-wrapp-chat">
          {textArray.map((message, index) => (
            <li className="message-wrap" key={index}>
              <p>{message.text}</p>
            </li>
          ))}
        </ul>
      </div>

      <StyledForm onSubmit={handleSubmit} component={"form"}>
        <StyledTextField
          type="text"
          placeholder="Enter a message"
          value={text}
          onChange={handleOnChange}
          variant="outlined"
        />
        <StyledButton type="submit" variant="contained" disabled={!errHidden}>
          <Send
            style={{
              transform: errHidden ? "rotate(360deg)" : "rotate(90deg)",
              transition: "transform 0.3s ease-in-out",
            }}
          />
        </StyledButton>
      </StyledForm>
    </div>
  );
};
