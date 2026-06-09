const { expect, matchTemplate, MatchStyle } = require('@alicloud/ros-cdk-assert');
const ros = require('@alicloud/ros-cdk-core');
const %name.PascalCased% = require('../lib/%name%-stack');

test('Stack with version.', () => {
    const app = new ros.App();
    // WHEN
    const stack = new %name.PascalCased%.%name.PascalCased%Stack(app, 'MyTestStack');
    // THEN
    expect(stack).to(matchTemplate({
        ROSTemplateFormatVersion: '2015-09-01',
        Description: "This is the simple ros cdk app example.",
        Metadata: {
            "ALIYUN::ROS::Interface": {
                "TemplateTags" : [
                    "Create by ROS CDK"
                ]
            }
        }
    }, MatchStyle.EXACT))
});
