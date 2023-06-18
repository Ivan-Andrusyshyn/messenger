import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./chatinfo.css";
import { Loader } from "../Loader/Loader";
import { TextChat } from "./TextChat/TextChat";
import React from "react";
import { useSelector } from "react-redux";
import { APIEntry } from "../../storeRedux/sliceRedux/sliceRedux";
import { Contact } from "./Contact/Contact";
const Chatinfo: React.FC = () => {
  const { chatId } = useParams<string>();
  const [list, setList] = useState<APIEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const contacts = useSelector((state: any) => state.contacts.contacts);
  const openContact = () => {
    setLoading(true);
    const filter: APIEntry[] = contacts.filter(
      ({ name }: any) => name === chatId
    );
    setList(filter);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  useEffect(() => {
    openContact();
  }, [chatId, contacts]);

  return (
    <>
      {list.length > 0 && (
        <div className="item">
          {loading ? (
            <Loader />
          ) : (
            <>
              <Contact contact={list} />
              <TextChat />
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Chatinfo;
