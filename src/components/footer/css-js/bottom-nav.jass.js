const styles = {
  ".footer-container": {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    ".bottomBar": {
      borderTop: "1px solid #282d2e",
      height: "50px",
      background: { color: "#081416" },
      padding: { bottom: "5px" },
      margin: { bottom: "10px" },
      ".navItems": {
        width: "90%",
        margin: "2px auto",
        background: { color: "#081416" },
        display: "grid",
        gridTemplate: { columns: "repeat(4, 1fr)" },
        ".item": {
          margin: "auto",
          display: "grid",
          placeItems: "center",
          "> div": {
            height: "30px",
            width: "30px",
            borderRadius: "50%",
            background: { color: "#00f4ff" },
          },
          p: {
            font: {
              weight: 500,
              size: "10px",
            },
            color: "#eefbfe",
            lineHeight: 0,
            margin: {
              top: "5px",
            },
          },
        },
      },
    },
  },
};

module.exports = styles;
