import React from "react";
import { Box, Container, Flex, Heading, Text, Image } from "theme-ui";
import sectionImage from "assets/Animated/banner1.gif";
import "./banner.css";
// import sectionImage from "assets/banner.svg";

const BANNER_DATA = {
  title1: "Content is ART",
  title2: "We are the ARTISTS ",
  text: "Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever.",
  image: sectionImage,
};
const Banner = () => {
  const { title1, title2, text, image } = BANNER_DATA;
  return (
    <Box as="section" id="banner" sx={styles.section}>
      <Container sx={styles.container}>
        <Flex sx={styles.flex}>
          <Box sx={styles.content}>
            <Heading as="h2">{title1}</Heading>
            <Heading as="h2">{title2}</Heading>
            <Text as="p">{text}</Text>
          </Box>
          <Box sx={styles.images}>
            <Image
              className="gif"
              src={image}
              width="740"
              height="558"
              alt="section image"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  section: {
    overflow: "hidden",
    backgroundColor: "#fff",
    // backgroundColor: "#F9FBFD",
    pt: ["160px", null, null, null, "200px"],
    pb: ["70px", null, null, null, "100px"],
  },
  container: {
    maxWidth: ["100%", null, null, null, null, "1170px", "1280px"],
    position: "relative",
  },
  flex: {
    flexWrap: "wrap",
    gap: 0,
  },
  content: {
    marginTop: "50px",

    textAlign: ["center", "left", null, "center", "left"],
    flex: ["0 0 100%", null, null, null, "0 0 50%", "0 0 40%"],
    h2: {
      fontFamily: "montserrat",
      fontWeight: "511",
      color: "#02073E",
      letterSpacing: "-1px",
      fontSize: ["24px", null, "32px", null, null, "40px", "55px"],
      lineHeight: 1.45,
      maxWidth: "546px",
      mb: "10px",
      mx: ["0", null, null, "auto"],
    },
    p: {
      fontSize: ["15px", null, "16px"],
      lineHeight: [2, null, 2.62],
      color: "#02073E",
      maxWidth: "486px",
    },
    form: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: [null, null, null, "center", "flex-start"],
      mt: "25px",
      mb: ["20px", "40px"],
      input: {
        width: ["100%", "215px", "346px", null, "300px", null, "340px"],
        border: "1px solid #E9EDF5",
        borderRadius: "8px",
        mr: ["0", "15px"],
        mb: ["10px", "0"],
        height: ["50px", null, null, null, null, "55px", "60px"],
        fontSize: "16px",
        color: "rgba(2,7,62,.4)",
        backgroundColor: "#ffffff",
        px: "25px",
        boxShadow: "none !important",
        outline: "none !important",
        "&::placeholder": {
          color: "rgba(2,7,62,.4)",
        },
        "&:focus": {
          border: "primary",
        },
      },
      button: {
        fontSize: "16px",
        color: "#ffff",
        fontWeight: 700,
        borderRadius: "8px",
        height: ["50px", null, null, null, null, "55px", "60px"],
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 32px",
        WebkitAppearance: "none",
        appearance: "none",
        outline: "none",
        cursor: "pointer",
        mx: ["auto", 0],
        transition: "all 500ms ease",
        "&:hover": {
          backgroundColor: "secondary",
        },
      },
    },
  },
  images: {
    flex: ["0 0 100%", null, null, null, "0 0 50%", "0 0 60%"],
    position: "relative",
    left: ["auto", null, null, null, "50px", "100px"],
    mt: ["30px", null, "40px", null, "0"],
  },
  clients: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: ["center", null, null, "center", "flex-start"],
    span: {
      color: "#566272",
      opacity: 0.6,
      flex: ["0 0 100%", "1 1 100%", "0 0 auto"],
      mb: ["10px", null, "0"],
      textAlign: ["center", null, "left"],
    },
    a: {
      display: "flex",
      alignItems: "center",
      ml: ["10px", "15px", null, "15px", "8px", null, "15px"],
      img: {
        display: "block",
      },
    },
  },
};
