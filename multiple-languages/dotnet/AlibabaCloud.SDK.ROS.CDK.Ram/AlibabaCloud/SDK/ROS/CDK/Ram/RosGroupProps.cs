using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::RAM::Group`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ram.RosGroupProps")]
    public class RosGroupProps : AlibabaCloud.SDK.ROS.CDK.Ram.IRosGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: groupName: Specifies the group name, containing up to 64 characters.
        /// </remarks>
        [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object GroupName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: comments: Remark information, up to 128 characters or Chinese characters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "comments", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Comments
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: policies: Describes what actions are allowed on what resources.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "policies", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosGroup.PoliciesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? Policies
        {
            get;
            set;
        }
    }
}
