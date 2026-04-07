using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `TransitRouterCidr`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutercidr
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ITransitRouterCidrProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.TransitRouterCidrProps")]
    public interface ITransitRouterCidrProps
    {
        /// <summary>Property cidr: The CIDR block of the transit router.</summary>
        [JsiiProperty(name: "cidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Cidr
        {
            get;
        }

        /// <summary>Property transitRouterId: The ID of the transit router.</summary>
        [JsiiProperty(name: "transitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TransitRouterId
        {
            get;
        }

        /// <summary>Property description: The new description of the transit router CIDR block.</summary>
        /// <remarks>
        /// The description must be 1 to 256 characters in length, and cannot start with http:// or https://. You can also leave this parameter empty.
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

        /// <summary>Property publishCidrRoute: Specifies whether to allow the system to automatically add a route that points to the CIDR block to the route table of the transit router.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>true (default)
        /// If you set the value to true, after you create a VPN attachment on a private VPN gateway and enable route learning for the VPN attachment, the system automatically adds the following route to the route table of the transit router that is in route learning relationship with the VPN attachment:
        /// A blackhole route whose destination CIDR block is the transit router CIDR block, which refers to the CIDR block from which gateway IP addresses are allocated to the IPsec-VPN connection. The blackhole route is advertised only to the route tables of virtual border routers (VBRs) connected to the transit router.</description>
        /// <description>false.</description>
        /// </list>
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

        /// <summary>Property transitRouterCidrName: The new name of the transit router CIDR block.</summary>
        /// <remarks>
        /// The name must be 1 to 128 characters in length, and cannot start with http:// or https://. You can also leave this parameter empty.
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

        /// <summary>Properties for defining a `TransitRouterCidr`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutercidr
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ITransitRouterCidrProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.TransitRouterCidrProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.ITransitRouterCidrProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property cidr: The CIDR block of the transit router.</summary>
            [JsiiProperty(name: "cidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Cidr
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property transitRouterId: The ID of the transit router.</summary>
            [JsiiProperty(name: "transitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TransitRouterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The new description of the transit router CIDR block.</summary>
            /// <remarks>
            /// The description must be 1 to 256 characters in length, and cannot start with http:// or https://. You can also leave this parameter empty.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property publishCidrRoute: Specifies whether to allow the system to automatically add a route that points to the CIDR block to the route table of the transit router.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>true (default)
            /// If you set the value to true, after you create a VPN attachment on a private VPN gateway and enable route learning for the VPN attachment, the system automatically adds the following route to the route table of the transit router that is in route learning relationship with the VPN attachment:
            /// A blackhole route whose destination CIDR block is the transit router CIDR block, which refers to the CIDR block from which gateway IP addresses are allocated to the IPsec-VPN connection. The blackhole route is advertised only to the route tables of virtual border routers (VBRs) connected to the transit router.</description>
            /// <description>false.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "publishCidrRoute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PublishCidrRoute
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property transitRouterCidrName: The new name of the transit router CIDR block.</summary>
            /// <remarks>
            /// The name must be 1 to 128 characters in length, and cannot start with http:// or https://. You can also leave this parameter empty.
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
