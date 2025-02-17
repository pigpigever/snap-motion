import { defineComponent as u, ref as s, createElementBlock as i, openBlock as p, Fragment as a, createElementVNode as e, toDisplayString as n, createTextVNode as o } from "vue";
const d = { class: "card" }, c = /* @__PURE__ */ u({
  __name: "HelloWorld",
  props: {
    msg: {}
  },
  setup(m) {
    const l = s(0);
    return (r, t) => (p(), i(a, null, [
      e("h1", null, n(r.msg), 1),
      e("div", d, [
        e("button", {
          type: "button",
          onClick: t[0] || (t[0] = (g) => l.value++)
        }, "count is " + n(l.value), 1),
        t[1] || (t[1] = e("p", null, [
          o(" Edit "),
          e("code", null, "components/HelloWorld.vue"),
          o(" to test HMR ")
        ], -1))
      ]),
      t[2] || (t[2] = e("p", null, [
        o(" Check out "),
        e("a", {
          href: "https://vuejs.org/guide/quick-start.html#local",
          target: "_blank"
        }, "create-vue"),
        o(", the official Vue + Vite starter ")
      ], -1)),
      t[3] || (t[3] = e("p", null, [
        o(" Learn more about IDE Support for Vue in the "),
        e("a", {
          href: "https://vuejs.org/guide/scaling-up/tooling.html#ide-support",
          target: "_blank"
        }, "Vue Docs Scaling up Guide"),
        o(". ")
      ], -1)),
      t[4] || (t[4] = e("p", { class: "read-the-docs" }, "Click on the Vite and Vue logos to learn more", -1))
    ], 64));
  }
});
export {
  c as default
};
