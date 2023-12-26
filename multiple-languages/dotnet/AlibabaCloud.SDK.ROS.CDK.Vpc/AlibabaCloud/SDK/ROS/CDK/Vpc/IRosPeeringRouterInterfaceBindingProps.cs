using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `RosPeeringRouterInterfaceBinding`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-peeringrouterinterfacebinding
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosPeeringRouterInterfaceBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosPeeringRouterInterfaceBindingProps")]
    public interface IRosPeeringRouterInterfaceBindingProps
    {
        /// <remarks>
        /// <strong>Property</strong>: oppositeInterfaceId: The connection peer RouterInterface ID.
        /// </remarks>
        [JsiiProperty(name: "oppositeInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object OppositeInterfaceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: routerInterfaceId: The RouterInterface is set the parameters of the connection peer RouterInterface.
        /// </remarks>
        [JsiiProperty(name: "routerInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RouterInterfaceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.
        /// </remarks>
        [JsiiProperty(name: "oppositeInterfaceOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OppositeInterfaceOwnerId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: oppositeRouterId: Router ID of the connection peer RouterInterface.
        /// </remarks>
        [JsiiProperty(name: "oppositeRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OppositeRouterId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosPeeringRouterInterfaceBinding`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-peeringrouterinterfacebinding
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosPeeringRouterInterfaceBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosPeeringRouterInterfaceBindingProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosPeeringRouterInterfaceBindingProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: oppositeInterfaceId: The connection peer RouterInterface ID.
            /// </remarks>
            [JsiiProperty(name: "oppositeInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object OppositeInterfaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: routerInterfaceId: The RouterInterface is set the parameters of the connection peer RouterInterface.
            /// </remarks>
            [JsiiProperty(name: "routerInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RouterInterfaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "oppositeInterfaceOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OppositeInterfaceOwnerId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: oppositeRouterId: Router ID of the connection peer RouterInterface.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "oppositeRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OppositeRouterId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
