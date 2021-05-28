import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import {
  FETCH_USER,
  FETCH_SESSION,
  ADD_EDIT_USER,
  EDIT_USER,
} from "../redux/action/userAction";
import { CommonLayout } from "./index";
import styled from "styled-components";
import { toast } from "react-toastify";
// import { getFilteredUserListReducer } from "../redux/reducer/userReducer";
const Wrapper = styled.div`
  .custom__row {
    text-align: center;
    margin: 50px;
  }
  h4.heading {
    font-weight: bolder;
  }
  .col-lg-6.rh-list {
    text-align: start;
  }
  select.player-filter {
    padding: 5px 15px;
    border-radius: 5px;
    margin-bottom: 15px;
  }
  ul.list-player {
    list-style-type: none;
    padding: 0;
  }
  li.list-item {
    background-color: #18bc9c;
    padding: 15px;
    min-height: 30px;
    display: flex;
    justify-content: space-around;
    border-radius: 5px;
    margin: 15px 0;
  }
  .player-tool-box {
    display: flex;
    justify-content: space-between;
    flex: 1;
    padding: 5px;
    align-items: center;
  }
  .player-session {
    flex: 1;
    background: lightgreen;
    margin: 0 15px;
    padding: 5px;
  }
  .player-name {
    font-weight: bold;
    flex: 1;
    margin: 0;
    padding: 5px;
  }
  button.view-button {
    outline: none;
    border: none;
    font-size: 15px;
    border-radius: 2px;
    background: #ddd;
  }
  .tool__row {
    justify-content: space-between;
    display: flex;
  }
  button.add_player {
    padding: 0 15px;
    max-height: 33px;
    outline: none;
    border: none;
    background-color: #3d75f1;
    color: #fff;
    border-radius: 5px;
  }
  .add__modal {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .modal__content {
    position: absolute;
    width: 500px;
    // height: 500px;
    top: 50%;
    left: 50%;
    background: #f00;
    transform: translate(-50%, -50%);
  }
  form.player__form {
    flex-direction: column;
    display: flex;
    margin: 35px;
  }
  .modal__header {
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }
  .modal__header i {
    font-size: 25px;
    cursor: pointer;
  }
  .player-tool-box i {
    cursor: pointer;
  }
  form.player__form input[type="text"] {
    width: 60%;
    float: right;
  }
  form.player__form select {
    margin: 15px 0;
    width: 50%;
  }
  .modal__content {
    background-color: #fff;
    border-radius: 5px;
  }
  button.save {
    background-color: #b9b926;
    width: 30%;
    padding: 7px 0;
    outline: none;
    border: none;
    border-radius: 5px;
    margin-top: 15px;
  }
  label {
    margin-bottom: 1.5rem;
  }
`;
const HomePage = (props) => {
  const dispatch = useDispatch();
  const [pending, setPending] = useState(true);
  const [userList, setUserList] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: Math.floor(Math.random() * 1000).toString(),
    first_name: "",
    last_name: "",
    contact_number: "",
    campaign_name: "",
  });
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    dispatch(FETCH_USER());
    dispatch(FETCH_SESSION());
  }, []);

  useEffect(() => {
    if (props.userList.length) {
      setUserList(props.userList);
      setPending(false);
    }
  }, [props.userList]);
  // useEffect(() => {
  //   const res = getFilteredUserListReducer("");
  //   if (res) {
  //     setUserList(res);
  //     setPending(false);
  //   }
  // }, []);

  // Session wise player filter
  const handleSelect = (e) => {
    if (!e.target.value) {
      setUserList(props.userList);
    } else {
      setUserList(
        props.userList.filter((i) => i.campaign_name === e.target.value)
      );
    }
  };

  // Toggle Modal
  const handleModal = () => {
    setIsModal(!isModal);
    setEditMode(false);
    setCurrentUser({
      id: Math.floor(Math.random() * 1000).toString(),
    });
  };
  // Add new user
  const addUser = (e) => {
    e.preventDefault();
    if (currentUser.first_name) {
      setUserList([...userList, currentUser]);
      dispatch(ADD_EDIT_USER(currentUser));
      setIsModal(false);
      setCurrentUser({
        id: Math.floor(Math.random() * 1000).toString(),
      });
      toast.configure();
      toast.success("Player added!");
    } else return;
  };
  // Submit edited user
  const submitEdit = (e) => {
    e.preventDefault();
    const list = userList.map((i) => {
      if (i.id === currentUser.id) {
        return { ...currentUser };
      } else return i;
    });
    setUserList(list);
    dispatch(ADD_EDIT_USER(list));
    setIsModal(false);
    setCurrentUser({
      id: Math.floor(Math.random() * 1000).toString(),
    });
    toast.configure();
    toast.success("Player Updated!");
    setEditMode(false);
  };
  // Trigger edit modal
  const editUser = (id) => {
    setEditMode(true);
    userList.forEach((el) => {
      if (el.id === id) {
        setIsModal(true);
        setCurrentUser(el);
      } else return;
    });
  };
  // Delete a user
  const deleteUser = (id) => {
    const final = userList.filter((el) => el.id !== id);
    setUserList(final);
    dispatch(ADD_EDIT_USER(final));

    toast.configure();
    toast.error("Player Deleted!");
  };
  // session data from
  const { sessions } = props;
  let content;
  if (pending) {
    content = <div>Loading...</div>;
  } else {
    content = (
      <ul className="list-player">
        {(userList || []).map((i) => {
          return (
            <li className="list-item" key={i.id}>
              <h6 className="player-name">
                {i.first_name + " " + i.last_name}
              </h6>
              <div className="player-session">{i.campaign_name}</div>
              <div className="player-tool-box">
                <i className="far fa-edit" onClick={() => editUser(i.id)}></i>
                <i
                  className="fas fa-trash"
                  onClick={() => deleteUser(i.id)}
                ></i>
                <button
                  className="view-button"
                  onClick={() =>
                    props.history.push({
                      pathname: `/player/${i.id}`,
                      state: { player_id: i.id, player_data: i },
                    })
                  }
                >
                  view
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
  return (
    <Wrapper>
      <CommonLayout>
        <div className="container">
          <div className="custom__row row">
            <div className="col-lg-6">
              <h4 className="heading">Players</h4>
            </div>
            <div className="col-lg-6 rh-list">
              <div className="tool__row">
                <select className="player-filter" onChange={handleSelect}>
                  <option value="">Select Session</option>
                  {sessions.map((i, index) => (
                    <option key={index} value={i.name}>
                      {i.name}
                    </option>
                  ))}
                </select>
                <button className="add_player" onClick={handleModal}>
                  Add New Player
                </button>
              </div>
              {content}
            </div>
          </div>
        </div>
      </CommonLayout>
      {isModal && (
        <div className="add__modal">
          <div className="modal__content">
            <div className="modal__header">
              <h4>{`${editMode ? "Update" : "Add New"} Player`}</h4>
              <i className="fas fa-times" onClick={handleModal}></i>
            </div>
            <form
              className="player__form"
              onSubmit={editMode ? submitEdit : addUser}
            >
              <label htmlFor="f_name">
                First Name
                <input
                  type="text"
                  name="first_name"
                  id="f_name"
                  className="player__fName"
                  onChange={(e) =>
                    setCurrentUser({
                      ...currentUser,
                      [e.target.name]: e.target.value,
                    })
                  }
                  value={currentUser.first_name}
                />
              </label>
              <label htmlFor="l_name">
                Last Name
                <input
                  type="text"
                  name="last_name"
                  id="l_name"
                  className="player__lName"
                  onChange={(e) =>
                    setCurrentUser({
                      ...currentUser,
                      [e.target.name]: e.target.value,
                    })
                  }
                  value={currentUser.last_name}
                />
              </label>
              <label htmlFor="player__contact">
                Contact Number
                <input
                  type="number"
                  name="contact_number"
                  id="player__contact"
                  className="player__contact"
                  onChange={(e) =>
                    setCurrentUser({
                      ...currentUser,
                      [e.target.name]: e.target.value,
                    })
                  }
                  value={currentUser.contact_number}
                />
              </label>
              <select
                name="campaign_name"
                className="player-filter"
                onChange={(e) =>
                  setCurrentUser({
                    ...currentUser,
                    [e.target.name]: e.target.value,
                  })
                }
                value={currentUser.campaign_name}
              >
                <option value="">Select session</option>
                {sessions.map((i, index) => (
                  <option key={index} value={i.name}>
                    {i.name}
                  </option>
                ))}
              </select>
              <button className="save" type="submit">
                {editMode ? "Update" : "Add"}
              </button>
            </form>
          </div>
        </div>
      )}
    </Wrapper>
  );
};
const mapStateToProps = (state) => ({ ...state });
export default connect(mapStateToProps, null)(HomePage);
