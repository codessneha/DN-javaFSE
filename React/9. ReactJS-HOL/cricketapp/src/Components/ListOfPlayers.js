import "../Styles/Cricket.css";
function ListOfPlayers() {

    const players = [
        { name: "Virat Kohli", score: 95 },
        { name: "Rohit Sharma", score: 85 },
        { name: "Shubman Gill", score: 92 },
        { name: "KL Rahul", score: 68 },
        { name: "Hardik Pandya", score: 72 },
        { name: "Ravindra Jadeja", score: 61 },
        { name: "R Ashwin", score: 58 },
        { name: "Mohammed Shami", score: 74 },
        { name: "Jasprit Bumrah", score: 80 },
        { name: "Mohammed Siraj", score: 66 },
        { name: "Yashasvi Jaiswal", score: 88 }
    ];

    const lowScorers = players.filter(player => player.score < 70);

   return (

<div className="container">

<h1 className="title">
Cricket Player Dashboard
</h1>

<div className="card">

<h2>All Players</h2>

<ul>

{
players.map((player,index)=>

<li key={index}>
<strong>{player.name}</strong> — Score : {player.score}
</li>

)
}

</ul>

</div>

<div className="card">

<h2>Players Scoring Below 70</h2>

<ul>

{
lowScorers.map((player,index)=>

<li key={index} className="low-score">
<strong>{player.name}</strong> — Score : {player.score}
</li>

)
}

</ul>

</div>

</div>

);

}

export default ListOfPlayers;