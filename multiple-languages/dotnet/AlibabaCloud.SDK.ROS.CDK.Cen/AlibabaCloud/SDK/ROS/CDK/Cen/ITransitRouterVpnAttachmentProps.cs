using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `TransitRouterVpnAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutervpnattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ITransitRouterVpnAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.TransitRouterVpnAttachmentProps")]
    public interface ITransitRouterVpnAttachmentProps
    {
        /// <summary>Property vpnId: IPsec connection ID.</summary>
        [JsiiProperty(name: "vpnId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpnId
        {
            get;
        }

        /// <summary>Property zoneId: Availability zone ID in the current region.</summary>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ZoneId
        {
            get;
        }

        /// <summary>Property autoPublishRouteEnabled: Whether to allow forwarding router instances to automatically publish route entries to IPsec connections.</summary>
        /// <remarks>
        /// Default is true.
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

        /// <summary>Property cenId: The ID of the CEN instance.</summary>
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CenId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property deletionForce: Whether to forcefully delete the VPN connection.</summary>
        [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeletionForce
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property routeTableAssociationEnabled: Whether to enable route association and forwarding relationship.</summary>
        [JsiiProperty(name: "routeTableAssociationEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RouteTableAssociationEnabled
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property routeTablePropagationEnabled: Whether to enable route learning relationships.</summary>
        [JsiiProperty(name: "routeTablePropagationEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RouteTablePropagationEnabled
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to TransitRouterVpnAttachment.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create TransitRouterVpnAttachment. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-cen.RosTransitRouterVpnAttachment.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Cen.RosTransitRouterVpnAttachment.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property transitRouterAttachmentDescription: Description of the VPN connection.</summary>
        [JsiiProperty(name: "transitRouterAttachmentDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TransitRouterAttachmentDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property transitRouterAttachmentName: The name of the VPN connection.</summary>
        [JsiiProperty(name: "transitRouterAttachmentName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TransitRouterAttachmentName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property transitRouterId: Forwarding router instance ID.</summary>
        [JsiiProperty(name: "transitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TransitRouterId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpnOwnerId: Alibaba Cloud account (main account) ID to which the IPsec connection belongs.</summary>
        [JsiiProperty(name: "vpnOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpnOwnerId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `TransitRouterVpnAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutervpnattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ITransitRouterVpnAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.TransitRouterVpnAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.ITransitRouterVpnAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property vpnId: IPsec connection ID.</summary>
            [JsiiProperty(name: "vpnId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpnId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property zoneId: Availability zone ID in the current region.</summary>
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property autoPublishRouteEnabled: Whether to allow forwarding router instances to automatically publish route entries to IPsec connections.</summary>
            /// <remarks>
            /// Default is true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoPublishRouteEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoPublishRouteEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property cenId: The ID of the CEN instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CenId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property deletionForce: Whether to forcefully delete the VPN connection.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeletionForce
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property routeTableAssociationEnabled: Whether to enable route association and forwarding relationship.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "routeTableAssociationEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RouteTableAssociationEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property routeTablePropagationEnabled: Whether to enable route learning relationships.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "routeTablePropagationEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RouteTablePropagationEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to TransitRouterVpnAttachment.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create TransitRouterVpnAttachment. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-cen.RosTransitRouterVpnAttachment.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Cen.RosTransitRouterVpnAttachment.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cen.RosTransitRouterVpnAttachment.ITagsProperty[]?>();
            }

            /// <summary>Property transitRouterAttachmentDescription: Description of the VPN connection.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "transitRouterAttachmentDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TransitRouterAttachmentDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property transitRouterAttachmentName: The name of the VPN connection.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "transitRouterAttachmentName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TransitRouterAttachmentName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property transitRouterId: Forwarding router instance ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "transitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TransitRouterId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vpnOwnerId: Alibaba Cloud account (main account) ID to which the IPsec connection belongs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vpnOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpnOwnerId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
