import { actionComplete } from "../../socket/socketHelpers";
import { PlayerData } from "../player/player";
import { ActionData } from "./action";
import { getActionExecution } from "./actionExecution";
export const executeAction = (
  actionData: ActionData,
  executePlayer: PlayerData,
  dispatch: Function
): boolean => {
  let succesfulBlocked = false;
  let succesfulChallenged = false;

  const actionExecution = getActionExecution(actionData, executePlayer);
  actionExecution.setUp();

  if (actionData.isBlockable) {
    succesfulBlocked = actionExecution.block();
  }
  if (!succesfulBlocked && actionData.isChallengable) {
    succesfulChallenged = actionExecution.challenge();
  }

  if (!succesfulBlocked && !succesfulChallenged) {
    actionExecution.execute();
    actionComplete(executePlayer.id);
  } else if (succesfulBlocked) {
    alert(`Your action ${actionData.name} has been blocked`);
  } else if (succesfulChallenged) {
    alert(
      `Your action ${actionData.name} has been challenged and you lose 1 card`
    );
    // lose one card
  }

  return true;
};
