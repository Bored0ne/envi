import React from "react";
import List from '../commands/List';
import {render} from 'ink-testing-library';

describe('envi', function () {
    it('should show me a list of my stuff', function () {
        const {frames, rerender} = render(<List/>);
        let renderedHelpMenu = frames.reduce((acc, frame) => {
            return acc || frame.includes('key') || frame.includes('value')
        }, false)
    });
});
