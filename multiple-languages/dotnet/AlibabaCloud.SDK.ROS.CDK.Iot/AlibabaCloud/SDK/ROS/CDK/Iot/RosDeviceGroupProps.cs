using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Iot
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::IOT::DeviceGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-iot.RosDeviceGroupProps")]
    public class RosDeviceGroupProps : AlibabaCloud.SDK.ROS.CDK.Iot.IRosDeviceGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: groupName: The name of the group. The name can contain Chinese characters, English letters, digits, and underscores (_). The length must be 4 to 30 characters (a Chinese character counts as two characters).
        /// </remarks>
        [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object GroupName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: groupDesc: The description of the group. You can enter a description with up to 100 characters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "groupDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? GroupDesc
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "iotInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? IotInstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: superGroupId: The ID of the parent group.
        /// If you want to create a first-level group, do not enter this parameter.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "superGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SuperGroupId
        {
            get;
            set;
        }
    }
}
