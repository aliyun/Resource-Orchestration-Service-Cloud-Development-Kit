using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::BgpPeer`.</summary>
    [JsiiInterface(nativeType: typeof(IRosBgpPeerProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosBgpPeerProps")]
    public interface IRosBgpPeerProps
    {
        /// <remarks>
        /// <strong>Property</strong>: bgpGroupId: The ID of the BGP group.
        /// </remarks>
        [JsiiProperty(name: "bgpGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BgpGroupId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: enableBfd: Specifies whether to enable the Bidirectional Forwarding Detection (BFD) feature.
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

        /// <remarks>
        /// <strong>Property</strong>: peerIpAddress: The IP address of the BGP peer.
        /// </remarks>
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
        [JsiiTypeProxy(nativeType: typeof(IRosBgpPeerProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosBgpPeerProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosBgpPeerProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: bgpGroupId: The ID of the BGP group.
            /// </remarks>
            [JsiiProperty(name: "bgpGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BgpGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: enableBfd: Specifies whether to enable the Bidirectional Forwarding Detection (BFD) feature.
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

            /// <remarks>
            /// <strong>Property</strong>: peerIpAddress: The IP address of the BGP peer.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "peerIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PeerIpAddress
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
