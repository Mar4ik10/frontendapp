import React from "react";

function Home() {
  return (
    <div className="content-index">
      <div className="image-index">
        <img
          style={{
            width: 150,
            transform: "translate(-5px, -28px) scale(1.2)",
          }}
          src="assets/images/photo.jpg"
          alt="Profile Picture"
        />
      </div>
      <div className="text-together">
        <h1>Mark Semeniuk</h1>
        <hr
          style={{
            display: "block",
            marginTop: "0.5em",
            marginBottom: "0.5em",
            marginLeft: "auto",
            marginRight: "auto",
            borderStyle: "inset",
            borderWidth: 1,
          }}
        />
        <div style={{ fontSize: 22 }}>
          <p>
            Hey, I'm Mark and I am a Kyiv Politechnic Institute student. I may
            help you to create a project in Python language fast and with clean
            code. When I'm not immersed in my academic pursuits, you can find me
            exploring various interests and hobbies. I have a deep love for
            literature, and I'm always engrossed in captivating books that
            transport me to different worlds. Additionally, I have a penchant
            for binge-watching series, discovering captivating storylines, and
            getting lost in the characters' journeys. But it's not all about
            books and screens for me. I also have an adventurous side! I find
            solace in the mountains, where I indulge in the exhilarating sport
            of skiing. There's something magical about gliding down snow-covered
            slopes and feeling the rush of the wind against my face. Through
            this website, I invite you to join me on my journey as a Computer
            Engineer and an avid explorer of life's diverse offerings. Here,
            you'll find insights into my projects, experiences, and the
            discoveries I make along the way. So, take a moment to browse
            through my virtual space and get to know me better. Feel free to
            reach out if you have any questions or if there's anything I can
            assist you with. Thank you for visiting, and I hope you enjoy your
            time here!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
