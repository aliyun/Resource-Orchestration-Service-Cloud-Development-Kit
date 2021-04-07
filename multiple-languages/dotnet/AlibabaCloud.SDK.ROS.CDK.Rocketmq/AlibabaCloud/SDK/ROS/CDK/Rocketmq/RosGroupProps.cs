using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rocketmq
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ROCKETMQ::Group`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-rocketmq.RosGroupProps")]
    public class RosGroupProps : AlibabaCloud.SDK.ROS.CDK.Rocketmq.IRosGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: groupId: The group ID of the consumption cluster. When creating a group ID, pay attention to the following aspects:
        /// A group ID starts with"GID_" or "GID-", and contains letters, numbers, hyphens (-), and underscores (_).
        /// A group ID ranges from 7 to 64 bytes.
        /// Once a group ID is created, it cannot be edited anymore.
        /// </remarks>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object GroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the instance.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object InstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: groupType: Group ID specify the creation of applicable agreements. Group ID TCP protocol and the HTTP protocol can not be shared, the need to create separately. Value as follows:
        /// tcp: Default, indicates Group ID is created only for the TCP protocol messaging.
        /// http: represents the Group ID was created only for the HTTP protocol messaging.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "groupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? GroupType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: remark: The remarks on the request.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Remark
        {
            get;
            set;
        }
    }
}
