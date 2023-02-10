import React from "react";

interface SubscribeType {}

const AuthorAndSubscribe: React.FC<SubscribeType> = (props) => {
  return (
    <div className="channel-subscribe__container">
      <div className="channel-subscribe__container__chanel">
        <figure className="chanel-fig">
          <img
            src="https://yt3.googleusercontent.com/ytc/AL5GRJUOhe9c1D67-yLQEkT2EqyRclI5V3EOTANZQXmt=s900-c-k-c0x00ffffff-no-rj"
            alt=""
          />
        </figure>
        <div className="chanel-info">
          <span>lama dev</span>
          <span>1590k subscribers</span>
        </div>
      </div>
      <button className="channel-subscribe__container__subscribe">
        subscribe
      </button>
    </div>
  );
};

export default AuthorAndSubscribe;
