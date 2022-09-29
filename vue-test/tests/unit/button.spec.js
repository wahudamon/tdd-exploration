import SubmitButton from "@/components/Button.vue";
import { shallowMount } from "@vue/test-utils";

describe("SubmitButton.vue", () => {
  it("renders props when passed", () => {
    const title = "click me";
    const subtitle = "please!";
    const wrapper = shallowMount(SubmitButton, {
      propsData: { title, subtitle },
    });
    expect(wrapper.props().title).toMatch(title);
    expect(wrapper.props().subtitle).toMatch(subtitle);
  });
});
