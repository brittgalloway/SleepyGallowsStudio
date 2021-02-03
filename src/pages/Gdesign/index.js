import React from "react";
import { Nav, NavBur } from "../../components/Nav";
import { Contact } from "../../components/About";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function GDesign() {
  const classes = useStyles();

  return (
    <>
      <div className="columns back_ground">
        <div className="column is-fixed is-3">
          <Nav />
        </div>
        <div className="column is-8 is-offset-3">
          <div className="columns ">
            <div className="column is-11 ">
              <NavBur />
              <section className="hero">
                <div className="hero-body">
                  <div className="container">
                    <h1 className="title has-text-primary has-text-centered">
                      Graphic Design
                    </h1>
                  </div>
                </div>
              </section>
              <div className="padTop4">
              <div className={classes.root}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/images/sg_logo.webp"}
                      alt="SG Sleepy Gallows Logo"
                      style={{ width: "250px" }}
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      This logo was designed by both Brittney and Crystal
                      Galloway. We wanted a logo that looked dreamy and could
                      compare to the logos of large animation studios. Here are
                      a few sketches and variations.
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/gDesign/sketchSmall.JPG"
                      }
                      alt="Drawing of Crystal"
                    />
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/gDesign/sketchSmall2.JPG"
                      }
                      alt="Drawing of Crystal"
                    />

                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/gDesign/sketchLogoSmall.JPG"
                      }
                      alt="Drawing of Crystal"
                    />
                  </AccordionDetails>
                  <AccordionDetails>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/gDesign/logoSG6-06.jpg"
                      }
                      alt="Drawing of Crystal"
                    />
                  </AccordionDetails>
                  <AccordionDetails>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/gDesign/logoSG7Small.png"
                      }
                      alt="Drawing of Crystal"
                    />
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className={classes.heading}>
                      Buzzin Cuzzins
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      A logo created for the podcast Buzzin Cuzzins, a B-side Studio production.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className={classes.heading}>
                      Delish & Dior
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      This is a logo for the podcast: Delish & Dior created for B-side Studio.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className={classes.heading}>
                      Candy Fluffs Ecommerce website
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      This is a SquarSpace website to sell art and Merchandise by the artist Crystal Galloway.
                      Visit the website: 
                      <a href="https://candyfluffs.com/">Candyfluffs.com</a>
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                  <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/gDesign/candyfluffHome.PNG"
                      }
                      alt="Drawing of Crystal"
                    />
                      <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/gDesign/candyfluffItem.PNG"
                      }
                      alt="Drawing of Crystal"
                    />
                  </AccordionDetails>
                </Accordion>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GDesign;
