import SubmitButton from "@/components/Button.vue";
import { shallowMount } from "@vue/test-utils";

describe("SubmitButton.vue", () => {
  let wrapper = null;
  const title = "Click me";
  const subtitle = "please";

  beforeEach(() => {
    wrapper = shallowMount(SubmitButton, {
      propsData: { title, subtitle },
    });
  });

  it("renders the component", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("title props passed to component", () => {
    expect(wrapper.props().title).toMatch(title);
  });

  it("subtitle props passed to component", () => {
    expect(wrapper.props().subtitle).toMatch(subtitle);
  });

  it("set title props value on button", () => {
    expect(wrapper.find("button").text()).toBe(title);
  });
});
