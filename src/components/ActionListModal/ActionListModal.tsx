import React from "react";
import { ActionData } from "../../models/actions/action";
import { executeAction } from "../../models/actions/actionHelper";
import { PlayerData } from "../../models/player/player";
import { useAppDispatch } from "../../redux/hooks";
import "./ActionListModal.css";

function ActionListModal(props: {
  action: ActionData;
  mainPlayerData: PlayerData;
  setShowConfirmModal: Function;
  setShowModal: Function;
}) {
  const dispatch = useAppDispatch();
  const onConfirmHandle = () => {
    let executionSucceed = executeAction(
      props.action,
      props.mainPlayerData,
      dispatch
    );
    props.setShowConfirmModal(false);
    props.setShowModal(false);
  };
  return (
    <div className="ActionListModal">
      <div className="ActionListModal__Content">
        <p>
          Are you sure to take the <strong>{props.action.name}</strong> action?
        </p>
        <p>({props.action.description})</p>
        <div>
          <button
            onClick={() => {
              props.setShowConfirmModal(false);
              props.setShowModal(false);
            }}
          >
            Cancel
          </button>
          <button onClick={onConfirmHandle}>Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default ActionListModal;
