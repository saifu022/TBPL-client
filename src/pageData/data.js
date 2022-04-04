const pageData = {
  backend: "https://limitless-cove-55054.herokuapp.com",
  //backend: "http://localhost:5000",
  frontend: "https://tbpl-web.web.app",
  creator: "tbpl.fin@gmail.com",
  admin: ["saifu022@gmail.com"],
  //NAVBAR
  navbar: {
    title: " ",
    links: [
      { name: "Signed Up!", link: "/signedUp" },
      { name: "Registration", link: "/registration" },
      { name: "Events", link: "/events" },
      { name: "Rules", link: "/rules" },
    ],
  },

  //RULES
  rules: {
    rulesLink: "",
  },

  //FOOTER
  footer: {
    l1Text: "Get connected with us on social networks:",
    l1Icons: [
      {
        key: 1,
        logo: "logo-facebook",
        link: "https://www.facebook.com/tamBanglaPremierLeague/",
      },
      { key: 2, logo: "logo-twitter", link: "/" },
      {
        key: 3,
        logo: "logo-google",
        link: "https://www.google.com/search?q=tam-bangla+premier+league&sxsrf=APq-WBtaFoQSKcNpKJVTRI4sNu_jvBF52Q%3A1648314594080&ei=4kg_YqPMBIOWrwTwzp-gBw&ved=0ahUKEwijxe6uouT2AhUDy4sKHXDnB3QQ4dUDCA4&uact=5&oq=tam-bangla+premier+league&gs_lcp=Cgdnd3Mtd2l6EAMyBQghEKABOgQIIxAnOg0ILhDHARCjAhDUAhBDOgUIABCABDoLCC4QgAQQxwEQ0QM6CwguEMcBEK8BEJECOgUIABCRAjoFCC4QgAQ6CwguEIAEEMcBEKMCOggILhCABBDUAjoFCC4QkQI6DgguEIAEEMcBEK8BENQCOgcIABAKEMsBOgcILhAKEMsBOgUILhDLAToLCC4QgAQQxwEQrwE6BwgAEIAEEAo6CgguEMcBENEDEAo6BwguENQCEAo6BAgAEAo6BAguEAo6CgguEMcBEK8BEAo6BAgAEB46BggAEAoQHjoGCAAQDRAeOggIABAIEAoQHjoGCAAQCBAeOgcIIRAKEKABSgQIQRgASgQIRhgAUABY0G9gzXFoBHABeACAAdcBiAG7E5IBBjI2LjEuMpgBAKABAcABAQ&sclient=gws-wiz",
      },
      { key: 4, logo: "logo-instagram", link: "/" },
    ],
    l2c1Heading: "Tam-Bangla Premier League",
    l2c1Text:
      "Tam-Bangla Premier League is a cultural event organized by Bangladeshi community living in Tampere, Finland.",
    l2c2Heading: "Pages",
    l2c2navLinks: [{ name: "Home", link: "/" }],
    l2c3Heading: "Useful Links",
    l2c3navLinks: [
      { name: "Home", link: "/" },
      { name: "User Profile", link: "/profile" },
      { name: "Events Nearby", link: "/events" },
      { name: "Create an Event", link: "/createnewevent" },
    ],
    l2c4Heading: "Everything is happening near:",
    l2c4Contact: [
      {
        name: "tbpl.fin@gmail.com",
        logo: "mail",
      },
      {
        name: "+358 40******",
        logo: "call",
      },
      {
        name: "+358 40****2",
        logo: "call",
      },
    ],
    l2c4Email: "+358 40 00 00 00",
    copyrightYear: "2022",
    copyrightBy: "Tam-Bangla Society",
    mapsLink:
      "https://www.google.fi/maps/place/Kuusikkopuiston+kentt%C3%A4/@61.4543481,23.8315892,17z/data=!3m1!4b1!4m5!3m4!1s0x468edfa8a9d3f137:0x83233a72909fe9a7!8m2!3d61.4543456!4d23.8337779",
  },
};
export default pageData;
