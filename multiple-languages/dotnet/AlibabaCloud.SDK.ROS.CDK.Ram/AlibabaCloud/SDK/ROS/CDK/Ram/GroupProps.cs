using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::RAM::Group`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ram.GroupProps")]
    public class GroupProps : AlibabaCloud.SDK.ROS.CDK.Ram.IGroupProps
    {
        /// <summary>Property groupName: Specifies the group name, containing up to 64 characters.</summary>
        [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object GroupName
        {
            get;
            set;
        }

        /// <summary>Property comments: Remark information, up to 128 characters or Chinese characters.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "comments", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Comments
        {
            get;
            set;
        }

        /// <summary>Property policies: Describes what actions are allowed on what resources.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "policies", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosGroup.PoliciesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? Policies
        {
            get;
            set;
        }
    }
}
