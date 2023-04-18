import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent } from "@mui/material";

import "./dash.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import cimg1 from "../../assets/cimg1.jpg";
import cimg2 from "../../assets/cimg2.jpg";
import cimg3 from "../../assets/cimg3.jpg";

export default function Dash() {
  const arr = [
    {
      img: img1,
    },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
  ];
  const brand_card = [
    {
      img: cimg1,
      description:
        "Email.ai solution was 93.2 cheaper than paying previous ongoing saas costs ",
    },
    {
      img: cimg2,
      description:
        "Email.ai solution enabled so and so Unite to reach 19 million people in their campaign ",
    },
    { img: cimg3, description: "Popular app for live audience participation" },
  ];
  return (
    <>
      <section className="first-section">
        <div className="col-sm-5 fs-content">
          <h2> We make bulding software so easy, anyone can do it</h2>
          <p>Your vision. Your Software. We just build it.</p>
          <br />
          <ul>
            <li> No tech knowledge needed</li>
            <li> AI means we bulid more cost effectively, and at speed </li>
            <li> Your Product Expert is with you at every step</li>
          </ul>
          <br />
          <div></div>
          <div className="fs-button">
            <Button variant="contained">Get a free demo</Button>

            <Link to="/pricing">See solutions and pricing </Link>
          </div>
        </div>
        <div className="col-sm-4 fs-img-col">
          <img
            className="fs-img"
            src="https://startkiwi.com/wp-content/uploads/2019/07/Optimized-65364122_371021890066347_8164567735448109056_n.jpg"
            alt="company pic"
          />
        </div>
      </section>
      <div className="blank-space"></div>
      <section className="second-section">
        <div className="ss-background">
          <div className="ss-heading">
            <b>Trusted by the world's leading brands </b>
          </div>
          <div className="brands">
            {arr.map((ele, index) => (
              <span key={index}>
                <img src={ele.img} alt="pic" className="logo" />
              </span>
            ))}
          </div>

          <Link>See why they choose us</Link>

          <div className="row ss-row">
            <div className="col-sm-3 brand-details">
              {brand_card.map((ele, index) => (
                <span className="brand-card" key={index}>
                  <Card>
                    <CardContent>
                      <Typography
                        variant="h5"
                        component="div"
                        style={{ color: "grey", margin: "15px 0" }}
                      >
                        <img src={ele.img} alt="pic" className="clogo" />
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {ele.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="third-section">
        <div className="col-sm-4 ts-img-col">
          <img
            className="ts-img"
            src="https://tse1.mm.bing.net/th?id=OIP.8DSREUsp6DHOfnejwHcW7QHaD2&pid=Api&P=0"
            alt="company pic"
          />
        </div>
        <div className="col-sm-5 ts-content">
          <h2> No tech knowledge needed</h2>
          <p>
            <b>Build anything you can imagine</b>
          </p>
          <p>
            With Email.ai you don’t need any coding skills or tech knowledge at
            all. But this doesn’t mean you’re constrained in what you can build
            – the only limit is your imagination. Just tell us your idea and
            we’ll build it for you, to your exact specifications.
          </p>
        </div>
      </section>
      <section>
        <div className="row "></div>
      </section>

      <section></section>
    </>
  );
}
