using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `TransitRouterVpcAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutervpcattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ITransitRouterVpcAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.TransitRouterVpcAttachmentProps")]
    public interface ITransitRouterVpcAttachmentProps
    {
        /// <summary>Property vpcId: The ID of the VPC.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Property zoneMappings: The zone mappings for the VPC.</summary>
        [JsiiProperty(name: "zoneMappings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cen.RosTransitRouterVpcAttachment.ZoneMappingsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object ZoneMappings
        {
            get;
        }

        /// <summary>Property autoCreateVpcRoute: undefined.</summary>
        [JsiiProperty(name: "autoCreateVpcRoute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoCreateVpcRoute
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoPublishRouteEnabled: Whether to automatically publish routes.</summary>
        [JsiiProperty(name: "autoPublishRouteEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoPublishRouteEnabled
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.</summary>
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CenId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property chargeType: The charge type of the transit router vpc attachment.</summary>
        [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property deletionForce: Whether force delete related resources, like vpc route entry, route table association, route propagation.</summary>
        [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeletionForce
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property routeTableAssociationEnabled: undefined.</summary>
        [JsiiProperty(name: "routeTableAssociationEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RouteTableAssociationEnabled
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property routeTablePropagationEnabled: undefined.</summary>
        [JsiiProperty(name: "routeTablePropagationEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RouteTablePropagationEnabled
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property transitRouterAttachmentDescription: The description of the transit router VPC attachment.</summary>
        [JsiiProperty(name: "transitRouterAttachmentDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TransitRouterAttachmentDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property transitRouterAttachmentName: The name of the transit router VPC attachment.</summary>
        [JsiiProperty(name: "transitRouterAttachmentName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TransitRouterAttachmentName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property transitRouterId: The ID of the transit router.</summary>
        [JsiiProperty(name: "transitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TransitRouterId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property transitRouterVpcAttachmentOptions: The options for the transit router VPC attachment.</summary>
        [JsiiProperty(name: "transitRouterVpcAttachmentOptions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TransitRouterVpcAttachmentOptions
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcOwnerId: The owner ID of the VPC.</summary>
        [JsiiProperty(name: "vpcOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcOwnerId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `TransitRouterVpcAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutervpcattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ITransitRouterVpcAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.TransitRouterVpcAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.ITransitRouterVpcAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property vpcId: The ID of the VPC.</summary>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property zoneMappings: The zone mappings for the VPC.</summary>
            [JsiiProperty(name: "zoneMappings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cen.RosTransitRouterVpcAttachment.ZoneMappingsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object ZoneMappings
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property autoCreateVpcRoute: undefined.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoCreateVpcRoute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoCreateVpcRoute
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoPublishRouteEnabled: Whether to automatically publish routes.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoPublishRouteEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoPublishRouteEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CenId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property chargeType: The charge type of the transit router vpc attachment.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property deletionForce: Whether force delete related resources, like vpc route entry, route table association, route propagation.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeletionForce
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property routeTableAssociationEnabled: undefined.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "routeTableAssociationEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RouteTableAssociationEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property routeTablePropagationEnabled: undefined.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "routeTablePropagationEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RouteTablePropagationEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property transitRouterAttachmentDescription: The description of the transit router VPC attachment.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "transitRouterAttachmentDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TransitRouterAttachmentDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property transitRouterAttachmentName: The name of the transit router VPC attachment.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "transitRouterAttachmentName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TransitRouterAttachmentName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property transitRouterId: The ID of the transit router.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "transitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TransitRouterId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property transitRouterVpcAttachmentOptions: The options for the transit router VPC attachment.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "transitRouterVpcAttachmentOptions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? TransitRouterVpcAttachmentOptions
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vpcOwnerId: The owner ID of the VPC.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vpcOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcOwnerId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
