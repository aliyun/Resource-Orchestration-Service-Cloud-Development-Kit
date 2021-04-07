using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Uis
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::UIS::UisNode`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-uis.RosUisNodeProps")]
    public class RosUisNodeProps : AlibabaCloud.SDK.ROS.CDK.Uis.IRosUisNodeProps
    {
        /// <remarks>
        /// <strong>Property</strong>: ipAddrsNum: The number of IPs available at the boarding point. The default is 2, the maximum is 10, if you need more quota, please submit the work order.
        /// </remarks>
        [JsiiProperty(name: "ipAddrsNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object IpAddrsNum
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: uisId: The instance ID to which the boarding point belongs.
        /// </remarks>
        [JsiiProperty(name: "uisId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object UisId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: uisNodeAreaId: Specifies the territory ID of the node. You can query the supported territories through the DescribeRegions interface.
        /// </remarks>
        [JsiiProperty(name: "uisNodeAreaId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object UisNodeAreaId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: uisNodeBandwidth: Specify the bandwidth bandwidth value for this pick-up point, even if the Internet bandwidth.
        /// If you do not specify a bandwidth, the default value is 20Mbps.
        /// </remarks>
        [JsiiProperty(name: "uisNodeBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object UisNodeBandwidth
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description of the instance of the boarding point.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the instance of the boarding point.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Name
        {
            get;
            set;
        }
    }
}
