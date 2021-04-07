using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::BgpPeer`.</summary>
    [JsiiInterface(nativeType: typeof(IBgpPeerProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.BgpPeerProps")]
    public interface IBgpPeerProps
    {
        /// <summary>Property bgpGroupId: The ID of the BGP group.</summary>
        [JsiiProperty(name: "bgpGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BgpGroupId
        {
            get;
        }

        /// <summary>Property enableBfd: Specifies whether to enable the Bidirectional Forwarding Detection (BFD) feature.</summary>
        /// <remarks>
        /// Valid values:
        /// true: enables BFD.
        /// false: disables BFD.
        /// </remarks>
        [JsiiProperty(name: "enableBfd", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableBfd
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property peerIpAddress: The IP address of the BGP peer.</summary>
        [JsiiProperty(name: "peerIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PeerIpAddress
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::VPC::BgpPeer`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IBgpPeerProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.BgpPeerProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IBgpPeerProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property bgpGroupId: The ID of the BGP group.</summary>
            [JsiiProperty(name: "bgpGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BgpGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property enableBfd: Specifies whether to enable the Bidirectional Forwarding Detection (BFD) feature.</summary>
            /// <remarks>
            /// Valid values:
            /// true: enables BFD.
            /// false: disables BFD.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableBfd", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableBfd
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property peerIpAddress: The IP address of the BGP peer.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "peerIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PeerIpAddress
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
