using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `RosTransitRouterCidr`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutercidr
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosTransitRouterCidrProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosTransitRouterCidrProps")]
    public interface IRosTransitRouterCidrProps
    {
        /// <remarks>
        /// <strong>Property</strong>: cidr: The CIDR block of the transit router.
        /// </remarks>
        [JsiiProperty(name: "cidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Cidr
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: transitRouterId: The ID of the transit router.
        /// </remarks>
        [JsiiProperty(name: "transitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TransitRouterId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The new description of the transit router CIDR block.
        /// The description must be 1 to 256 characters in length, and cannot start with http:\/\/ or https:\/\/. You can also leave this parameter empty.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: publishCidrRoute: Specifies whether to allow the system to automatically add a route that points to the CIDR block to the route table of the transit router.
        /// * true (default)
        /// If you set the value to true, after you create a VPN attachment on a private VPN gateway and enable route learning for the VPN attachment, the system automatically adds the following route to the route table of the transit router that is in route learning relationship with the VPN attachment:
        /// A blackhole route whose destination CIDR block is the transit router CIDR block, which refers to the CIDR block from which gateway IP addresses are allocated to the IPsec-VPN connection. The blackhole route is advertised only to the route tables of virtual border routers (VBRs) connected to the transit router.
        /// * false.
        /// </remarks>
        [JsiiProperty(name: "publishCidrRoute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PublishCidrRoute
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: transitRouterCidrName: The new name of the transit router CIDR block.
        /// The name must be 1 to 128 characters in length, and cannot start with http:\/\/ or https:\/\/. You can also leave this parameter empty.
        /// </remarks>
        [JsiiProperty(name: "transitRouterCidrName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TransitRouterCidrName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosTransitRouterCidr`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutercidr
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosTransitRouterCidrProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosTransitRouterCidrProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.IRosTransitRouterCidrProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: cidr: The CIDR block of the transit router.
            /// </remarks>
            [JsiiProperty(name: "cidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Cidr
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: transitRouterId: The ID of the transit router.
            /// </remarks>
            [JsiiProperty(name: "transitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TransitRouterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The new description of the transit router CIDR block.
            /// The description must be 1 to 256 characters in length, and cannot start with http:\/\/ or https:\/\/. You can also leave this parameter empty.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: publishCidrRoute: Specifies whether to allow the system to automatically add a route that points to the CIDR block to the route table of the transit router.
            /// * true (default)
            /// If you set the value to true, after you create a VPN attachment on a private VPN gateway and enable route learning for the VPN attachment, the system automatically adds the following route to the route table of the transit router that is in route learning relationship with the VPN attachment:
            /// A blackhole route whose destination CIDR block is the transit router CIDR block, which refers to the CIDR block from which gateway IP addresses are allocated to the IPsec-VPN connection. The blackhole route is advertised only to the route tables of virtual border routers (VBRs) connected to the transit router.
            /// * false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "publishCidrRoute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PublishCidrRoute
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: transitRouterCidrName: The new name of the transit router CIDR block.
            /// The name must be 1 to 128 characters in length, and cannot start with http:\/\/ or https:\/\/. You can also leave this parameter empty.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "transitRouterCidrName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TransitRouterCidrName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
