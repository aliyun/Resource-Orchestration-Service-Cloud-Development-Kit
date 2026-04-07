using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `BgpPeer`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgppeer
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IBgpPeerProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.BgpPeerProps")]
    public interface IBgpPeerProps
    {
        /// <summary>Property bgpGroupId: The ID of the BGP group.</summary>
        [JsiiProperty(name: "bgpGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BgpGroupId
        {
            get;
        }

        /// <summary>Property bfdMultiHop: The BFD hop count.</summary>
        /// <remarks>
        /// Valid values: <strong>1</strong> to <strong>255</strong>.
        /// When enabling BFD, this parameter must be configured.
        /// It specifies the maximum number of hops that a packet can traverse from source to destination. You can set different hop counts based on actual physical link conditions.
        /// When using BFD in a multi-cloud environment or direct fiber connection without intermediate bridging devices, change the default BFD hop count from <strong>255</strong> to <strong>1</strong>.
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

        /// <summary>Property ipVersion: The IP version.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>IPv4</strong> (default): IPv4 version.</description>
        /// <description><strong>IPv6</strong>: IPv6 version. IPv6 is supported only when the VBR associated with the BGP group has IPv6 enabled.</description>
        /// </list>
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

        /// <summary>Properties for defining a `BgpPeer`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgppeer
        /// </remarks>
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

            /// <summary>Property bfdMultiHop: The BFD hop count.</summary>
            /// <remarks>
            /// Valid values: <strong>1</strong> to <strong>255</strong>.
            /// When enabling BFD, this parameter must be configured.
            /// It specifies the maximum number of hops that a packet can traverse from source to destination. You can set different hop counts based on actual physical link conditions.
            /// When using BFD in a multi-cloud environment or direct fiber connection without intermediate bridging devices, change the default BFD hop count from <strong>255</strong> to <strong>1</strong>.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bfdMultiHop", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BfdMultiHop
            {
                get => GetInstanceProperty<object?>();
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

            /// <summary>Property ipVersion: The IP version.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>IPv4</strong> (default): IPv4 version.</description>
            /// <description><strong>IPv6</strong>: IPv6 version. IPv6 is supported only when the VBR associated with the BGP group has IPv6 enabled.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IpVersion
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
