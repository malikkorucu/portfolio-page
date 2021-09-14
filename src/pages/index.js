import React, { useState, useRef } from "react";
import Layout from "../components/common/Layout";
import FastImage from "../components/common/FastImage";
import Icon from "../assets/svg";
import Progress from "../components/common/Progress";

const navItems = [
  { id: 1, name: "About Me" },
  { id: 2, name: "Services" },
  { id: 3, name: "Portfolio" },
  { id: 4, name: "Testimonials" },
  { id: 5, name: "Blog" },
  { id: 6, name: "Contact Us" },
];

export default function Home() {
  const [activeNav, setActiveNav] = useState(1);
  const navRef = useRef();

  return (
    <Layout>
      <div className="container">
        <header>
          <div className="logo">
            <FastImage
              width={120}
              height={45}
              className="s-image center"
              image="/logo@2x.png"
            />
          </div>
          <div ref={navRef} className="content show">
            <div className="side-logo">
              <FastImage
                width={110}
                height={40}
                className="s-image center"
                image="/logo@2x.png"
              />
            </div>
            <ul>
              {navItems.map((el) => (
                <li
                  onClick={() => setActiveNav(el.id)}
                  className={`${activeNav === el.id && "active"}`}
                  key={el.id}
                >
                  {el.name}
                </li>
              ))}
              <li>
                <button className="btn sm primary">Hire Me !</button>
              </li>
            </ul>
          </div>
          <button
            onClick={() => navRef.current.classList.toggle("show")}
            className="hamburger"
          >
            X
          </button>
        </header>

        <section className="banner">
          <div className="message-card mb-2">Hello , I am</div>
          <h1 className="bigger-title">Mr. John Weary</h1>
          <p className="subtitle pt-2 pb-5">
            A Professional Web Developer and UI/UX Designer.
          </p>
          <div className="row">
            <button className="btn lg primary mr-2">Download CV</button>
            <button className="btn lg ghost">Download CV</button>
          </div>
          <div className="scroll-icon">
            <Icon name="ScrollBottom" width={30} height={60} />
          </div>
        </section>

        <section className="my-life">
          <div className="section-image">
            <FastImage
              width={"100%"}
              height={"100%"}
              className="s-image center"
              image="/my-life@2x.png"
            />
          </div>
          <div className="content">
            <h3 className="title">Read About My Life Struggle Story!</h3>
            <p className="desc pb-2 pt-2">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
              is the quasi architecto beatae vitae dicta sunt explicabo.
            </p>

            <div className="sm-text pb-2">WORDPRESS 100%</div>

            <Progress
              containerColor="#707070"
              progressColor="#FF4900"
              percentage="50%"
              height={2}
            />

            <div className="sm-text pb-2 pt-2">WORDPRESS 100%</div>

            <Progress
              containerColor="#707070"
              progressColor="#FF7004"
              percentage="50%"
              height={2}
            />
            <div className="sm-text pb-2 pt-2">WORDPRESS 100%</div>

            <Progress
              containerColor="#707070"
              progressColor="#FF9809"
              percentage="50%"
              height={2}
            />
            <div className="sm-text pb-2 pt-2">WORDPRESS 100%</div>

            <Progress
              containerColor="#707070"
              progressColor="#FFBF0D"
              percentage="50%"
              height={2}
            />

            <div className="row pt-4">
              <div className="button btn lg primary mr-2">Hire me!</div>
              <div className="button btn lg ghost">Hire me!</div>
            </div>
          </div>
        </section>

        <section className="our-services a-center j-center column">
          <div className="vertical-line"></div>
          <h1 className="title pt-2">Our Services</h1>
          <div className="desc t-center w-70 pt-2">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem totam
            rem aperiam, eaque ipsa quae ab illo inventore veritatis et is the
            quasi architecto beatae vitae dicta sunt explicabo.
          </div>
        </section>
      </div>
    </Layout>
  );
}
