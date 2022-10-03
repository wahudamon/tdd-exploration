import IncrementButton from "@/components/Button.vue";
import { shallowMount } from "@vue/test-utils";

describe("IncrementButton.vue", () => {
  let wrapper = null;
  const title = "Click me";
  const subtitle = "please";

  beforeEach(() => {
    wrapper = shallowMount(IncrementButton, {
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

  it("increment the count value", async () => {
    expect(wrapper.findComponent("button").exists()).toBe(true);
    const button = wrapper.findComponent("button");

    expect(wrapper.vm.$data.count).toEqual(0);

    await button.trigger("click");

    expect(wrapper.vm.$data.count).toEqual(1);
    expect(button.text()).toBe("Count: 1");
  });
});
