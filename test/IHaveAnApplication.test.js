import React from "react";
import {Index} from '../src/index';
import {render} from 'ink-testing-library';

describe('envi', function () {
    it('should print out the help menu when called with help option', function () {
        const {frames, rerender} = render(<Index help/>);
        let renderedHelpMenu = frames.reduce((acc, frame) => {
            return acc || frame.includes('Help')
        }, false)
    });
});
