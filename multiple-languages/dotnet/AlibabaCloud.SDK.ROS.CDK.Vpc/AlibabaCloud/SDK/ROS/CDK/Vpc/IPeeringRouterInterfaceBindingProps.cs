using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `PeeringRouterInterfaceBinding`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-peeringrouterinterfacebinding
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IPeeringRouterInterfaceBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.PeeringRouterInterfaceBindingProps")]
    public interface IPeeringRouterInterfaceBindingProps
    {
        /// <summary>Property oppositeInterfaceId: The connection peer RouterInterface ID.</summary>
        [JsiiProperty(name: "oppositeInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object OppositeInterfaceId
        {
            get;
        }

        /// <summary>Property routerInterfaceId: The RouterInterface is set the parameters of the connection peer RouterInterface.</summary>
        [JsiiProperty(name: "routerInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RouterInterfaceId
        {
            get;
        }

        /// <summary>Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.</summary>
        [JsiiProperty(name: "oppositeInterfaceOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OppositeInterfaceOwnerId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property oppositeRouterId: Router ID of the connection peer RouterInterface.</summary>
        [JsiiProperty(name: "oppositeRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OppositeRouterId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `PeeringRouterInterfaceBinding`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-peeringrouterinterfacebinding
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IPeeringRouterInterfaceBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.PeeringRouterInterfaceBindingProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IPeeringRouterInterfaceBindingProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property oppositeInterfaceId: The connection peer RouterInterface ID.</summary>
            [JsiiProperty(name: "oppositeInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object OppositeInterfaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property routerInterfaceId: The RouterInterface is set the parameters of the connection peer RouterInterface.</summary>
            [JsiiProperty(name: "routerInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RouterInterfaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "oppositeInterfaceOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OppositeInterfaceOwnerId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property oppositeRouterId: Router ID of the connection peer RouterInterface.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "oppositeRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OppositeRouterId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
