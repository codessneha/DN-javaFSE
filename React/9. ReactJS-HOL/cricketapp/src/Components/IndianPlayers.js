import "../Styles/Cricket.css";
function IndianPlayers() {

    const players = [
        "Virat",
        "Rohit",
        "Gill",
        "Rahul",
        "Hardik",
        "Jadeja"
    ];

    const [odd1, even1, odd2, even2, odd3, even3] = players;

    const t20Players = [
        "Virat",
        "Rohit",
        "Surya"
    ];

    const ranjiPlayers = [
        "Jaiswal",
        "Sarfaraz",
        "Rinku"
    ];

    const mergedPlayers = [...t20Players, ...ranjiPlayers];

return(

<div className="container">

<h1 className="title">
Indian Cricket Team
</h1>

<div className="card">

<h2 className="team-title">
Odd Team Players
</h2>

<ul>

<li>{odd1}</li>
<li>{odd2}</li>
<li>{odd3}</li>

</ul>

</div>

<div className="card">

<h2 className="team-title">
Even Team Players
</h2>

<ul>

<li>{even1}</li>
<li>{even2}</li>
<li>{even3}</li>

</ul>

</div>

<div className="card">

<h2 className="merge-title">
Merged Team
</h2>

<ul>

{
mergedPlayers.map((player,index)=>

<li key={index}>
{player}
</li>

)
}

</ul>

</div>

</div>

);

}

export default IndianPlayers;