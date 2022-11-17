Utilize Template Method to take the actions

General step when action get executed:

- Set up: choose the target if applicable
- Block: ask other players to block if applicable
- Challenge: ask other players to challenge if applicable
- Execute: if no one block / challenge, execute the action

Each action will have different mechanism to `setUp()`, `block()`, `challenge()`, or `execute()`

When an Action is clicked, the correspoding action will be determined using the Action id and get executed
