import { FC, useEffect, useState, ChangeEvent, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { SearchComponent } from "./Search/SearchComponent";
import { Loader } from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBase,
  APIEntry,
  deleteItem,
  handleChange,
  takeAvatarSearch,
} from "../../storeRedux/sliceRedux/sliceRedux";

import "./sidebar.css";
import { AlignItemsList } from "./MaterialUi/ListMaterial";
const Sidebar: FC = () => {
  const contacts = useSelector((state: any) => state.contacts.contacts);
  const nameContact = useSelector((state: any) => state.contacts.filter);
  const dispatch = useDispatch<any>();
  const [list, setList] = useState<APIEntry[]>(contacts);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const search: string = e.currentTarget.value.toLowerCase();
    dispatch(handleChange(search));
  };
  useEffect(() => {
    dispatch(fetchBase());
  }, [dispatch]);

  useEffect(() => {
    const filteringItems = async () => {
      const filterItem = await contacts.filter(({ name }: any) =>
        name.toLowerCase().includes(nameContact.toLowerCase())
      );
      setList(filterItem);
    };
    filteringItems();
  }, [contacts, nameContact]);

  const handleDeleteClick = (contactId: string): void => {
    dispatch(deleteItem(contactId));
  };
  const takeAvatar = (id: number): void => {
    dispatch(takeAvatarSearch(id));
  };

  return (
    <div className="backdrop">
      <div className="main">
        <header className="header">Messenger</header>
        <div className="container">
          <div className="sidebar">
            <SearchComponent handleOnChange={handleOnChange} />
            {list.map(({ name, id }, index) => (
              <AlignItemsList
                handleDeleteClick={handleDeleteClick}
                name={name}
                num={index}
                key={name}
                takeAvatar={takeAvatar}
              />
            ))}
          </div>
          <div>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
