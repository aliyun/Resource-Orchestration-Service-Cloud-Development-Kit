using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Uis
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::UIS::UisNode`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-uis.UisNodeProps")]
    public class UisNodeProps : AlibabaCloud.SDK.ROS.CDK.Uis.IUisNodeProps
    {
        /// <summary>Property ipAddrsNum: The number of IPs available at the boarding point.</summary>
        /// <remarks>
        /// The default is 2, the maximum is 10, if you need more quota, please submit the work order.
        /// </remarks>
        [JsiiProperty(name: "ipAddrsNum", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double IpAddrsNum
        {
            get;
            set;
        }

        /// <summary>Property uisId: The instance ID to which the boarding point belongs.</summary>
        [JsiiProperty(name: "uisId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string UisId
        {
            get;
            set;
        }

        /// <summary>Property uisNodeAreaId: Specifies the territory ID of the node.</summary>
        /// <remarks>
        /// You can query the supported territories through the DescribeRegions interface.
        /// </remarks>
        [JsiiProperty(name: "uisNodeAreaId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string UisNodeAreaId
        {
            get;
            set;
        }

        /// <summary>Property uisNodeBandwidth: Specify the bandwidth bandwidth value for this pick-up point, even if the Internet bandwidth.</summary>
        /// <remarks>
        /// If you do not specify a bandwidth, the default value is 20Mbps.
        /// </remarks>
        [JsiiProperty(name: "uisNodeBandwidth", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double UisNodeBandwidth
        {
            get;
            set;
        }

        /// <summary>Property description: Description of the instance of the boarding point.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <summary>Property name: The name of the instance of the boarding point.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Name
        {
            get;
            set;
        }
    }
}
