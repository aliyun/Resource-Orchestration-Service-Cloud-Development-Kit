using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ARMS::AlertContactGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-arms.RosAlertContactGroupProps")]
    public class RosAlertContactGroupProps : AlibabaCloud.SDK.ROS.CDK.Arms.IRosAlertContactGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: contactGroupName: The name of the alert contact group that you want to create.
        /// </remarks>
        [JsiiProperty(name: "contactGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ContactGroupName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: contactIds: The list of alert contact ID.
        /// </remarks>
        [JsiiProperty(name: "contactIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        public object ContactIds
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: proxyUserId: Internal parameters
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "proxyUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ProxyUserId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: regionId: Region ID. Default to region of stack.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "regionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? RegionId
        {
            get;
            set;
        }
    }
}
