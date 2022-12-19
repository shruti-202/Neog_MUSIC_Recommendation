import React from "react";
import "./styles.css";
import { useState } from "react";

const musicPedia = {
  SoulMusic: [
    {
      name: "Night Changes",
      description:
        "This song recorded by English-Irish boy band One Direction.It was released on 14 Nov 2014. “Night Changes” is a melodic, soulful track with undertones of nostalgia and backing harmonies to match.",
      rating: "5/5"
    },
    {
      name: "Heal the World",
      description:
        "This song is recorded by American artist Michael Jackson.It was released on 23 Nov 1992.“Heal The World” by Michael Jackson is about being more considerate of others who are less fortunate in the world.",
      rating: "4.5/5"
    },
    {
      name: "Cover me in Sunshine",
      description:
        "This song is by producer Steve Kroeger and singer Skye Holland.It was released on 7 April 2017",
      rating: "4/5"
    }
  ],

  Motivational: [
    {
      name: "Hall Of Fame",
      description:
        "This song is all about believing in yourself and pushing yourself towards the impossible.The song sends a message to believe in the impossible and that you can be anything and do anything you desire with hard work and determination. It encourages listeners to dream and to believe in themselves despite critics.",
      rating: "5/5"
    },
    {
      name: "Whatever it takes",
      description:
        "The song was written by Lifehouse lead singer Jason Wade and American record producer Jude Cole and was produced by Lifehouse and Jude Cole at Ironworks Studio in Los Angeles.This song is about striving towards that, figuring out what it is and pursuing it unapologetically.",
      rating: "4.5/5"
    },
    {
      name: "Believer",
      description:
        "Believer Lyrics is a wonderful Motivational Song by Imagine Dragons. The Song shares the person's great pain he had experienced in his life but he has learned many important things about himself from those experiences.",
      rating: "4.3/5"
    }
  ],
  Romantic: [
    {
      name: "Give me your Forever",
      description:
        "Give Me Your Forever' is about true love and how you can show love to your partner in whatever situation",
      rating: "5/5"
    },
    {
      name: "Imagination",
      description:
        "Imagination is the fourteenth track of the deluxe edition of Shawn Mendes's debut studio album, Handwritten. It was released on April 14, 2015, through Island Records.",
      rating: "4.5/5"
    },
    {
      name: "Perfect",
      description:
        "Perfect is a song by English singer-songwriter Ed Sheeran from his third studio album.It was released on November 24, 2017",
      rating: "4/5"
    }
  ]
};
var musicList = Object.keys(musicPedia); //converting object into array
export default function App() {
  const [choose, setChoose] = useState("Motivational");
  function musicClickHandler(value) {
    setChoose(value);
  }
  return (
    <div className="App">
      <h1 style={{ color: "Purple" }}> Music Recommendation </h1>
      <h5>
        Checkout my favorite Music of all time. Select a genre to get started
      </h5>

      <div>
        {musicList.map((value) => (
          <button
            onClick={() => musicClickHandler(value)}
            style={{
              cursor: "pointer",
              color: "black",
              background: "#E6ACCB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {value}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <ul>
          {musicPedia[choose].map((music) => (
            <li
              key={music.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid black",
                width: "70%",
                margin: "1rem",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "0.5rem",
                background: "#E6ACCB",
                color: "blacks"
              }}
            >
              <div style={{ fontSize: "larger" }}> {music.name} </div>
              <div style={{ fontSize: "smaller" }}>{music.description}</div><br></br>
              <div style={{ fontWeight: "bold" }}> {music.rating} </div>
            </li>
          ))}
        </ul>
        <hr />
        <h5 style={{ textAlign: "center" }}>Hope you find it useful:)</h5>
      </div>
    </div>
  );
}
