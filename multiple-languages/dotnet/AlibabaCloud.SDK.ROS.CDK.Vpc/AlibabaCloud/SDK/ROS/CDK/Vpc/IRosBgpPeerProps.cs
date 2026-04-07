using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `RosBgpPeer`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgppeer
    /// </remarks>
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
        /// <strong>Property</strong>: bfdMultiHop: The BFD hop count. Valid values: **1** to **255**.
        /// When enabling BFD, this parameter must be configured.
        /// It specifies the maximum number of hops that a packet can traverse from source to destination. You can set different hop counts based on actual physical link conditions.
        /// When using BFD in a multi-cloud environment or direct fiber connection without intermediate bridging devices, change the default BFD hop count from **255** to **1**.
        /// </remarks>
        [JsiiProperty(name: "bfdMultiHop", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BfdMultiHop
        {
            get
            {
                return null;
            }
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
        /// <strong>Property</strong>: ipVersion: The IP version. Valid values:
        /// - **IPv4** (default): IPv4 version.
        /// - **IPv6**: IPv6 version. IPv6 is supported only when the VBR associated with the BGP group has IPv6 enabled.
        /// </remarks>
        [JsiiProperty(name: "ipVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IpVersion
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

        /// <summary>Properties for defining a `RosBgpPeer`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgppeer
        /// </remarks>
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
            /// <strong>Property</strong>: bfdMultiHop: The BFD hop count. Valid values: **1** to **255**.
            /// When enabling BFD, this parameter must be configured.
            /// It specifies the maximum number of hops that a packet can traverse from source to destination. You can set different hop counts based on actual physical link conditions.
            /// When using BFD in a multi-cloud environment or direct fiber connection without intermediate bridging devices, change the default BFD hop count from **255** to **1**.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bfdMultiHop", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BfdMultiHop
            {
                get => GetInstanceProperty<object?>();
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
            /// <strong>Property</strong>: ipVersion: The IP version. Valid values:
            /// - **IPv4** (default): IPv4 version.
            /// - **IPv6**: IPv6 version. IPv6 is supported only when the VBR associated with the BGP group has IPv6 enabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IpVersion
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
