import { Fade } from 'react-awesome-reveal';

const About = () => {
  return (
    <div className="adjust-height about-text">
      <Fade triggerOnce={true}>
      <div className="about-text" id="about">
        <p>
          <strong>My name is Mike Tritsch -think of it like Treech- and I am a
          multi-faceted musician and full-stack developer.</strong> I absolutely love
          learning new things, which is why I decided to start my journey into
          the world of code. I have a wide array -pun-intended- of experience
          across the music industry from journalism to performance. I've shared
          the stage with award-winning artists, worked in data-driven corners of
          the music business, and am now on a mission to combine my love of code
          with my love of music. I'm always open to collaborate, talk shop, and
          share music. Drop me a line, let's chat!
        </p>
      </div>
      <div className="hero-image">
        <div className="hero-text">
          <h1>Tritsch : ( / Tr-EE-ch / )</h1>
        </div>
      </div>
      <div className="about-text">
        <h2>My story...</h2>
        <p>
          I was born and raised in the beautiful city of Colorado Springs,
          Colorado in a home that was full of music. I picked up the drums when
          I was 8 years old, and I've never looked back since. As I grew up, I
          learned how to play guitar, with a few other instruments along the
          way. My love for music went deeper than creating it, and transitioned
          into learning the inner-workings of the music industry. I attended
          college at the University of Colorado Denver where I earned my B.S. in
          Music Business.
        </p>
        <p>
          During my time in and after college, I set out to learn and contribute
          to as many facets of the music business as I could. I worked in music
          journalism for a top publication serving the Denver music scene,
          interned at a in-house music supervision firm, and shared the stage
          with award winning artists across the greater Denver area. In 2018, I
          had the opportunity to open up for Grammy Award winner Dua Lipa as the
          drummer for Los Angeles based artist Chloe Tang.
        </p>
        <p>
          In 2019, I moved from Denver to the live music capital of the country,
          Austin, Texas. In Austin, I worked as a Music Content Operations QA
          Analyst for Accenture onsite at Meta. This experience gave me an
          in-depth look at music publishing in the context of social media. It
          was during this time that I discovered my passion for software and web
          development. After a few self-guided courses online, I decided to
          attend The University of Texas' Full Stack Coding Bootcamp in hopes to
          combine my love of music with my love of code.
        </p>
        <p>
          I'm a proud husband, girl dad, huge comic book nerd, gamer, and am
          always on the hunt for learning new things. Thanks for reading - for
          more professional information, check out my resume.
        </p>
      </div>
      </Fade>
    </div>
  );
};

export default About;
