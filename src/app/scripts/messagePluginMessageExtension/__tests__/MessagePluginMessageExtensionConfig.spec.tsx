import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { MessagePluginMessageExtensionConfig } from "../MessagePluginMessageExtensionConfig";

describe("MessagePluginMessageExtensionConfig Component", () => {
    // Snapshot Test Sample
    it("should match the snapshot", () => {
        const wrapper = shallow(<MessagePluginMessageExtensionConfig />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    // Component Test Sample
    it("should render the tab", () => {
        const component = shallow(<MessagePluginMessageExtensionConfig />);
        const divResult = component.containsMatchingElement(<div>MessagePlugin Message Extension configuration</div>);

        expect(divResult).toBeTruthy();
    });
});


