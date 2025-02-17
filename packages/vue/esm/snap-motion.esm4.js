import { defineComponent as o, createElementBlock as r, openBlock as l, Fragment as m, createElementVNode as e, createVNode as a } from "vue";
import s from "./snap-motion.esm7.js";
import n from "./snap-motion.esm8.js";
import p from "./snap-motion.esm9.js";
const d = /* @__PURE__ */ o({
  __name: "App",
  setup(i) {
    return (_, t) => (l(), r(m, null, [
      t[0] || (t[0] = e("div", null, [
        e("a", {
          href: "https://vite.dev",
          target: "_blank"
        }, [
          e("img", {
            src: s,
            class: "logo",
            alt: "Vite logo"
          })
        ]),
        e("a", {
          href: "https://vuejs.org/",
          target: "_blank"
        }, [
          e("img", {
            src: n,
            class: "logo vue",
            alt: "Vue logo"
          })
        ])
      ], -1)),
      a(p, { msg: "Vite + Vue" })
    ], 64));
  }
});
export {
  d as default
};
