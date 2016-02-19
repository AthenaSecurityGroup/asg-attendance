import assert from 'assert';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import AsgAttendance from '../src/components/asg-attendance.js';

const renderer = ReactTestUtils.createRenderer();

describe('ASG Attendance components', () => {
  it('should return a rendered ReactElement', () => {
    const component = React.createElement(AsgAttendance);
    renderer.render(component);
    let element = renderer.getRenderOutput();

    assert(typeof element === 'object');
    assert(element.type !== undefined);
  });
});
