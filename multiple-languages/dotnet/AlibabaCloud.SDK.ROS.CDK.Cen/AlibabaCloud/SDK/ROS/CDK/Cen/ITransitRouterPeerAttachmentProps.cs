using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `TransitRouterPeerAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterpeerattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ITransitRouterPeerAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.TransitRouterPeerAttachmentProps")]
    public interface ITransitRouterPeerAttachmentProps
    {
        /// <summary>Property peerTransitRouterId: Peer forwarding router instance ID.</summary>
        [JsiiProperty(name: "peerTransitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PeerTransitRouterId
        {
            get;
        }

        /// <summary>Property autoPublishRouteEnabled: Whether to make the enterprise version forwarding router automatically publish routes across regions to the peer region.</summary>
        /// <remarks>
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

        /// <summary>Property bandwidth: The bandwidth value for cross-region connections.Unit: Mbps. When the BandwidthType value is BandwidthPackage, this parameter represents the bandwidth value that can be used by cross-region connections. When the BandwidthType value is DataTransfer, this parameter represents the speed limit bandwidth value for cross-region connections.</summary>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Bandwidth
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property bandwidthType: The bandwidth allocation method for cross-regional connections.Value: BandwidthPackage: Allocate bandwidth from bandwidth packets. DataTransfer: Do not allocate bandwidth for cross-region connections, and is billed based on usage traffic.</summary>
        [JsiiProperty(name: "bandwidthType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BandwidthType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property cenBandwidthPackageId: The bandwidth packet ID to bind to across regions.</summary>
        /// <remarks>
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

        /// <summary>Property cenId: Cloud Enterprise Network Instance ID.</summary>
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CenId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property defaultLinkType: Default link type.</summary>
        /// <remarks>
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

        /// <summary>Property peerTransitRouterRegionId: The region ID to which the peer forwarding router instance belongs.</summary>
        [JsiiProperty(name: "peerTransitRouterRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PeerTransitRouterRegionId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: The list of tags in the form of key\/value pairs.</summary>
        /// <remarks>
        /// You can define a maximum of 20 tags.
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

        /// <summary>Property transitRouterAttachmentDescription: Description information for cross-region connections.</summary>
        /// <remarks>
        /// The description can be empty or has a length of 1 to 256 characters and cannot start with http:// or https://.
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

        /// <summary>Property transitRouterAttachmentName: The name of the cross-region connection.</summary>
        /// <remarks>
        /// The name can be empty or has a length of 1 to 128 characters, and cannot start with http:// or https://.
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

        /// <summary>Property transitRouterId: Local Enterprise Edition forwarding router instance ID.</summary>
        [JsiiProperty(name: "transitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TransitRouterId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `TransitRouterPeerAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterpeerattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ITransitRouterPeerAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.TransitRouterPeerAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.ITransitRouterPeerAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property peerTransitRouterId: Peer forwarding router instance ID.</summary>
            [JsiiProperty(name: "peerTransitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PeerTransitRouterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property autoPublishRouteEnabled: Whether to make the enterprise version forwarding router automatically publish routes across regions to the peer region.</summary>
            /// <remarks>
            /// false (default): No.
            /// true: Yes.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoPublishRouteEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoPublishRouteEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property bandwidth: The bandwidth value for cross-region connections.Unit: Mbps. When the BandwidthType value is BandwidthPackage, this parameter represents the bandwidth value that can be used by cross-region connections. When the BandwidthType value is DataTransfer, this parameter represents the speed limit bandwidth value for cross-region connections.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Bandwidth
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property bandwidthType: The bandwidth allocation method for cross-regional connections.Value: BandwidthPackage: Allocate bandwidth from bandwidth packets. DataTransfer: Do not allocate bandwidth for cross-region connections, and is billed based on usage traffic.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "bandwidthType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BandwidthType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property cenBandwidthPackageId: The bandwidth packet ID to bind to across regions.</summary>
            /// <remarks>
            /// Note When the value of BandwidthType is DataTransfer, this item is not required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cenBandwidthPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CenBandwidthPackageId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property cenId: Cloud Enterprise Network Instance ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CenId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property defaultLinkType: Default link type.</summary>
            /// <remarks>
            /// Optional values are Platinum, Gold, and default to Gold.
            /// And it can only be configured as Platinum (Platinum) when the bandwidth allocation method is billed by traffic.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "defaultLinkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DefaultLinkType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property peerTransitRouterRegionId: The region ID to which the peer forwarding router instance belongs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "peerTransitRouterRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PeerTransitRouterRegionId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: The list of tags in the form of key\/value pairs.</summary>
            /// <remarks>
            /// You can define a maximum of 20 tags.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-cen.RosTransitRouterPeerAttachment.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Cen.RosTransitRouterPeerAttachment.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cen.RosTransitRouterPeerAttachment.ITagsProperty[]?>();
            }

            /// <summary>Property transitRouterAttachmentDescription: Description information for cross-region connections.</summary>
            /// <remarks>
            /// The description can be empty or has a length of 1 to 256 characters and cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "transitRouterAttachmentDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TransitRouterAttachmentDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property transitRouterAttachmentName: The name of the cross-region connection.</summary>
            /// <remarks>
            /// The name can be empty or has a length of 1 to 128 characters, and cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "transitRouterAttachmentName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TransitRouterAttachmentName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property transitRouterId: Local Enterprise Edition forwarding router instance ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "transitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TransitRouterId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
