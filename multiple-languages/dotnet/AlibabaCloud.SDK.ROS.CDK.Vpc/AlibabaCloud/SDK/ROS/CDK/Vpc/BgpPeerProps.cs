using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::VPC::BgpPeer`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.BgpPeerProps")]
    public class BgpPeerProps : AlibabaCloud.SDK.ROS.CDK.Vpc.IBgpPeerProps
    {
        /// <summary>Property bgpGroupId: The ID of the BGP group.</summary>
        [JsiiProperty(name: "bgpGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object BgpGroupId
        {
            get;
            set;
        }

        /// <summary>Property enableBfd: Specifies whether to enable the Bidirectional Forwarding Detection (BFD) feature.</summary>
        /// <remarks>
        /// Valid values:
        /// true: enables BFD.
        /// false: disables BFD.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "enableBfd", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? EnableBfd
        {
            get;
            set;
        }

        /// <summary>Property peerIpAddress: The IP address of the BGP peer.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "peerIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? PeerIpAddress
        {
            get;
            set;
        }
    }
}
