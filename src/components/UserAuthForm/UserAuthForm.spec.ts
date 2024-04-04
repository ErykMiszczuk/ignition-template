import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HelloWorld from "./UserAuthForm.vue";

describe("Component UserAuthForm", () => {
    it("renders", () => {
        const wrapper = mount(HelloWorld, { props: { msg: "Hello Vitest" } });
        expect(wrapper.text()).toContain("Hello Vitest");
    });
});
