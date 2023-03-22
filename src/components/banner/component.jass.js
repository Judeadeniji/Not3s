const styles = {
  ".banner": {
    margin: "10px 2px",
    borderRadius: "10px",
    backgroundColor: "#ffffff47",
    width: "100%",
    height: "16rem",
  },
  ".cat-slide": {
    flexDirection: "row",
    overflowX: "scroll",
    overflowY: "hidden",
    margin: "15px 0",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    ".item": {
      margin: "0 10px",
      display: "grid",
      placeItems: "center",
      div: {
        height: "45px",
        width: "45px",
        margin: "0 6px",
        borderRadius: "50%",
        backgroundColor: "#00f4ff",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '.fa': {
          fontSize: '30px',
          color: 'black'
        }
      },
      p: {
        margin: "5px 0",
        fontSize: "10px",
        color: "#ddd",
      },
    },
  },
};

module.exports = styles;