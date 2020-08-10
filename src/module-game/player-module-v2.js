export function Player(playerId){
    // 1
    let name = "";
    const id = playerId;
    let score = 0;


    this.getId = () => {
        return id;
    }
  
    this.getScore = () => {
        return Number(score);
    }
    // 2 3 
    this.setScore = (playerScore) => {
        if (playerScore < 0) {
            throw new Error("Score cannot be negative");
        }
        score = Number(playerScore);
    }

    this.setName = (playerName) => {
     
        this.name = playerName;
    }
    this.toString = () => {
        return "id: " + id + ", score: " + score;
    };
}