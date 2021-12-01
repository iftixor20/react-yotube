import "./top.css";
import videoLogo from "../../../assets/img/video-logo.svg";
import dots from "../../../assets/img/dotst.svg";
import notification from "../../../assets/img/notification.svg";
import userImage from "../../../assets/img/user.svg";

const Top = () => {
  return (
    <div className="Center-top">
      <div className="row d-flex justify-content-between">
        <div className="col-6">
          <form className="form">
            <label className="input-label d-flex">
              <input
                className="search w-100 p-2"
                type="text"
                placeholder="Search"
              />
            </label>
          </form>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <img
            className="img-responsive me-4"
            src={videoLogo}
            alt="videoLogo"
            width="27"
            height="20"
          />
          <img
            className="img-responsive me-4"
            src={dots}
            alt="dots"
            width="21"
            height="21"
          />
          <img
            className="img-responsive me-4"
            src={notification}
            alt="notification"
            width="22"
            height="26"
          />
          <img
            className="img-responsive me-4"
            src={userImage}
            alt="userImage"
            width="40"
            height="40"
          />
        </div>
      </div>
    </div>
  );
}

export default Top;