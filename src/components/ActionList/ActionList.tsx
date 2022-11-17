import React, { useState } from "react";
import {
  ActionData,
  ActionIdEnum,
  actionList,
  ActionTypeEnum,
} from "../../models/actions/action";
import { useAppSelector } from "../../redux/hooks";
import ActionListModal from "../ActionListModal/ActionListModal";
import Action from "./Action";
import "./ActionList.css";

function ActionList(props: { setShowModal: Function }) {
  const mainPlayerData = useAppSelector(
    (state) => state.playerReducer.playerData
  );
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [actionData, setActionData] = useState<ActionData>({
    name: "Income",
    id: ActionIdEnum.INCOME,
    isCommon: true,
    isBlockable: false,
    isChallengable: false,
    type: ActionTypeEnum.EFFECT,
    description: "Take 1 coin from the bank",
  });
  const onClickHandle = (actionData: ActionData) => {
    setShowConfirmModal(true);
    setActionData(actionData);
    console.log("Execute >>>", actionData.name);
  };
  return (
    <div className="ActionList">
      {showConfirmModal && (
        <ActionListModal
          action={actionData}
          mainPlayerData={mainPlayerData}
          setShowConfirmModal={setShowConfirmModal}
          setShowModal={props.setShowModal}
        />
      )}
      {actionList.map((action) => (
        <Action
          action={action}
          key={action.id}
          onClick={() => {
            onClickHandle(action);
          }}
        />
      ))}
    </div>
  );
}

export default ActionList;
