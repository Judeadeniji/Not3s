var b = "background",
  c = "color",
  m = "margin",
  p = "padding",
  jc = "justify-content",
  ctr = "center",
  bc = `${b}-${c}`,
  d = "display",
  f = "flex",
  ai = "align-items",
  a = "auto";

const styles = {
  ".audio-player": {
    [d]: f,
    [ai]: ctr,
    [jc]: ctr,
    bottom: "50px",
    left: 0,
    right: 0,
    [bc]: "black",
    height: "50px",
    border: {
      top: {
        width: "1px",
        style: "solid",
        color: "#081416"
      },
    },
    ".inner-container": {
      [d]: f,
      [m]: a,
      [jc]: "space-between",
      [ai]: ctr,
      width: "95%",
      ".track-details": {
        [d]: f,
        [jc]: "space-around",
        [ai]: ctr,
        ".metadata": {
          [m]: { right: "5px" },
          p: {
            lineHeight: "5px",
          },
          ".track-title": {
            font: { size: "15px" },
          },
          ".track-artist": {
            font: { size: "12px" },
          },
        },
        ".album-art": {
          [bc]: "#3b3d3d65",
          height: "40px",
          width: "40px",
          [m]: `${a} 10px`,
          [d]: f,
          [jc]: ctr,
          [ai]: ctr,
          transition: "all 0.5s linear",
          img: {
            width: '40px',
            height: '40px',
          "&:hover": {
            "-msFilter":
              "'progid:DXImageTransform.Microsoft.Alpha(Opacity=70)'",
            transition: "all 0.5s",
              "&:before": {
                transition: "all 0.5s linear",
                content: '"\\f001"',
                [c]: "white",
                [m]: a,
            },
          },
          },
        },
      },
      ".controls": {
        [m]: `${a} 10px`,
        [d]: f,
        [jc]: "space-around",
        [ai]: ctr,
        ".play-pause": {
          height: "35px",
          width: "35px",
          borderRadius: "50%",
          [bc]: "#defefe",
          [m]: `${a} 5px ${a} 15px`,
          [d]: f,
          [ai]: ctr,
          [jc]: ctr,
        },
      },
    },
  },
};

module.exports = styles;
