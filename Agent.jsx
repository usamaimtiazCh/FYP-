import React from "react";
import contact from "../../Assets/contact.jpg";
import "./Agent.css";
const Agent = () => {
  return (
    <>
      <div className="agent-class">
        <div className="agent-img">
          <img src={contact} width={400} alt="" style={{alignContent:"center", display:"flex"}} />
        </div>
        <div className="agent-text">
          <h2>Beyond Brick Walls</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
            cupiditate tempore rerum aliquam ex? Quae, doloribus esse laborum
            aut quos soluta deserunt, repellendus officia illum, dolor
            laboriosam assumenda sapiente eaque neque inventore ut tempore
            dolores repellat consequatur expedita eos quibusdam quaerat tenetur
            animi. Est, voluptatem corrupti cum ipsa possimus eveniet!
          </p>
        </div>
      </div>
    </>
  );
};

export default Agent;
