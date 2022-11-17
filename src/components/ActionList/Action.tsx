import React from "react";
import { ActionData } from "../../models/actions/action";
import "./Action.css";

function Action(props: { action: ActionData; onClick: Function }) {
  return (
    <div
      className="Action"
      key={props.action.id}
      onClick={() => props.onClick()}
    >
      <p className="Action__Title">{props.action.name}</p>
      <p className="Action__Description">{props.action.description}</p>
    </div>
  );
}

export default Action;
