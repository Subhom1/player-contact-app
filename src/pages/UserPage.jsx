import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { CommonLayout } from "./index";
import styled from "styled-components";
import { toast } from "react-toastify";
import { getUserData } from "../redux/reducer/userReducer";
const Wrapper = styled.div`
  .custom__row {
    text-align: center;
    margin: 50px;
  }
  h4.heading {
    font-weight: bolder;
  }
  .control__row {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .control__row i {
    font-size: 25px;
    cursor: pointer;
  }
  h5 {
    font-weight: bolder;
  }
  h5 span {
    font-weight: normal;
    margin-left: 10px;
  }
`;
const UserPage = ({ userData, location, history }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    // const playerId = location?.state?.player_id;
    const player = location?.state?.player_data;
    setUser(player);
  }, []);
  return (
    <Wrapper>
      <CommonLayout>
        <div className="container">
          <div className="custom__row row">
            <div className="col-lg-6">
              <div className="control__row">
                <i
                  className="fas fa-arrow-left"
                  onClick={() => history.goBack()}
                ></i>
                <h4 className="heading">Player Profile</h4>
              </div>
            </div>
            <div className="col-lg-6">
              <h5>
                First Name: <span>{user?.first_name}</span>
              </h5>
              <h5>
                Last Name: <span>{user?.last_name}</span>
              </h5>
              <h5>
                Contact Number: <span>{user?.contact_number}</span>
              </h5>
              <h5>
                Campaign Name: <span>{user?.campaign_name}</span>
              </h5>
            </div>
          </div>
        </div>
      </CommonLayout>
    </Wrapper>
  );
};
const mapStateToProps = (state) => ({ ...state });
export default connect(mapStateToProps)(UserPage);
