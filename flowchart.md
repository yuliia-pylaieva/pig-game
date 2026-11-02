# Pig Game Flowchart

```mermaid
flowchart TD
    A([Start or New game]) --> B["Reset totals and round score to 0<br/>Player 1 is active<br/>Die shows ?<br/>Roll enabled, Hold disabled"]
    B --> C["Active player clicks Roll"]
    C --> D["Roll a die 1-6<br/>Rolls this round + 1"]
    D --> E{"Rolled a 1?"}

    E -->|Yes| F["Show the 1<br/>Roll and Hold disabled"]
    F --> G["Wait 1 second"]
    G --> H["Round points are lost<br/>Total stays as it was"]
    H --> S

    E -->|No| I["Add roll to round score<br/>Show live total = total + round score"]
    I --> J{"3 rolls done<br/>this round?"}
    J -->|No| C
    J -->|Yes| K["Roll disabled<br/>Hold enabled"]
    K --> L["Active player clicks Hold"]
    L --> M["Add round score to total"]
    M --> N{"Total >= 100?"}
    N -->|No| S
    N -->|Yes| O(["Active player wins<br/>Roll and Hold disabled"])

    S["Switch player<br/>Round score = 0, rolls = 0<br/>Die shows ?<br/>Roll enabled, Hold disabled"] --> C

    O -. New game .-> A
```

## Rules the chart shows

- Each round a player must roll the die **three times** before **Hold** unlocks.
- Rolling a **1** ends the round early: the round's points are lost and the turn passes after a one second pause.
- **Hold** adds the round score to the player's total and passes the turn.
- The first player whose total reaches **100** wins.
- **New game** can be pressed at any time and returns to the start.
