using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `RosTransitRouterPeerAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterpeerattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosTransitRouterPeerAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosTransitRouterPeerAttachmentProps")]
    public interface IRosTransitRouterPeerAttachmentProps
    {
        /// <remarks>
        /// <strong>Property</strong>: peerTransitRouterId: Peer forwarding router instance ID.
        /// </remarks>
        [JsiiProperty(name: "peerTransitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PeerTransitRouterId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoPublishRouteEnabled: Whether to make the enterprise version forwarding router automatically publish routes across regions to the peer region.
        /// false (default): No.
        /// true: Yes.
        /// </remarks>
        [JsiiProperty(name: "autoPublishRouteEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoPublishRouteEnabled
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: bandwidth: The bandwidth value for cross-region connections.Unit: Mbps.
        /// When the BandwidthType value is BandwidthPackage, this parameter represents the bandwidth value that can be used by cross-region connections.
        /// When the BandwidthType value is DataTransfer, this parameter represents the speed limit bandwidth value for cross-region connections.
        /// </remarks>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Bandwidth
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: bandwidthType: The bandwidth allocation method for cross-regional connections.Value:
        /// BandwidthPackage: Allocate bandwidth from bandwidth packets.
        /// DataTransfer: Do not allocate bandwidth for cross-region connections, and is billed based on usage traffic.
        /// </remarks>
        [JsiiProperty(name: "bandwidthType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BandwidthType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: cenBandwidthPackageId: The bandwidth packet ID to bind to across regions.
        /// Note When the value of BandwidthType is DataTransfer, this item is not required.
        /// </remarks>
        [JsiiProperty(name: "cenBandwidthPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CenBandwidthPackageId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: cenId: Cloud Enterprise Network Instance ID.
        /// </remarks>
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CenId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: defaultLinkType: Default link type.
        /// Optional values are Platinum, Gold, and default to Gold.
        /// And it can only be configured as Platinum (Platinum) when the bandwidth allocation method is billed by traffic.
        /// </remarks>
        [JsiiProperty(name: "defaultLinkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DefaultLinkType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: peerTransitRouterRegionId: The region ID to which the peer forwarding router instance belongs.
        /// </remarks>
        [JsiiProperty(name: "peerTransitRouterRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PeerTransitRouterRegionId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: The list of tags in the form of key\/value pairs. You can define a maximum of 20 tags.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-cen.RosTransitRouterPeerAttachment.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Cen.RosTransitRouterPeerAttachment.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: transitRouterAttachmentDescription: Description information for cross-region connections.
        /// The description can be empty or has a length of 1 to 256 characters and cannot start with http:\/\/ or https:\/\/.
        /// </remarks>
        [JsiiProperty(name: "transitRouterAttachmentDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TransitRouterAttachmentDescription
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: transitRouterAttachmentName: The name of the cross-region connection.
        /// The name can be empty or has a length of 1 to 128 characters, and cannot start with http:\/\/ or https:\/\/.
        /// </remarks>
        [JsiiProperty(name: "transitRouterAttachmentName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TransitRouterAttachmentName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: transitRouterId: Local Enterprise Edition forwarding router instance ID.
        /// </remarks>
        [JsiiProperty(name: "transitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TransitRouterId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosTransitRouterPeerAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterpeerattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosTransitRouterPeerAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosTransitRouterPeerAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.IRosTransitRouterPeerAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: peerTransitRouterId: Peer forwarding router instance ID.
            /// </remarks>
            [JsiiProperty(name: "peerTransitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PeerTransitRouterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: autoPublishRouteEnabled: Whether to make the enterprise version forwarding router automatically publish routes across regions to the peer region.
            /// false (default): No.
            /// true: Yes.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoPublishRouteEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoPublishRouteEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: bandwidth: The bandwidth value for cross-region connections.Unit: Mbps.
            /// When the BandwidthType value is BandwidthPackage, this parameter represents the bandwidth value that can be used by cross-region connections.
            /// When the BandwidthType value is DataTransfer, this parameter represents the speed limit bandwidth value for cross-region connections.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Bandwidth
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: bandwidthType: The bandwidth allocation method for cross-regional connections.Value:
            /// BandwidthPackage: Allocate bandwidth from bandwidth packets.
            /// DataTransfer: Do not allocate bandwidth for cross-region connections, and is billed based on usage traffic.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bandwidthType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BandwidthType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: cenBandwidthPackageId: The bandwidth packet ID to bind to across regions.
            /// Note When the value of BandwidthType is DataTransfer, this item is not required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cenBandwidthPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CenBandwidthPackageId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: cenId: Cloud Enterprise Network Instance ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CenId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: defaultLinkType: Default link type.
            /// Optional values are Platinum, Gold, and default to Gold.
            /// And it can only be configured as Platinum (Platinum) when the bandwidth allocation method is billed by traffic.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "defaultLinkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DefaultLinkType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: peerTransitRouterRegionId: The region ID to which the peer forwarding router instance belongs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "peerTransitRouterRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PeerTransitRouterRegionId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: The list of tags in the form of key\/value pairs. You can define a maximum of 20 tags.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-cen.RosTransitRouterPeerAttachment.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Cen.RosTransitRouterPeerAttachment.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cen.RosTransitRouterPeerAttachment.ITagsProperty[]?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: transitRouterAttachmentDescription: Description information for cross-region connections.
            /// The description can be empty or has a length of 1 to 256 characters and cannot start with http:\/\/ or https:\/\/.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "transitRouterAttachmentDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TransitRouterAttachmentDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: transitRouterAttachmentName: The name of the cross-region connection.
            /// The name can be empty or has a length of 1 to 128 characters, and cannot start with http:\/\/ or https:\/\/.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "transitRouterAttachmentName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TransitRouterAttachmentName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: transitRouterId: Local Enterprise Edition forwarding router instance ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "transitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TransitRouterId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
