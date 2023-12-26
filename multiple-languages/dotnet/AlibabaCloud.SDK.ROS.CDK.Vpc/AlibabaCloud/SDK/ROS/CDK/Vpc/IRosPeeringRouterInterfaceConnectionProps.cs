using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `RosPeeringRouterInterfaceConnection`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-peeringrouterinterfaceconnection
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosPeeringRouterInterfaceConnectionProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosPeeringRouterInterfaceConnectionProps")]
    public interface IRosPeeringRouterInterfaceConnectionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: oppositeInterfaceId: The Receiver RouterInterface ID to accept peer RouterInterface.
        /// </remarks>
        [JsiiProperty(name: "oppositeInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object OppositeInterfaceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: routerInterfaceId: The Initiator RouterInterface ID to connect peer RouterInterface.
        /// </remarks>
        [JsiiProperty(name: "routerInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RouterInterfaceId
        {
            get;
        }

        /// <summary>Properties for defining a `RosPeeringRouterInterfaceConnection`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-peeringrouterinterfaceconnection
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosPeeringRouterInterfaceConnectionProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosPeeringRouterInterfaceConnectionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosPeeringRouterInterfaceConnectionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: oppositeInterfaceId: The Receiver RouterInterface ID to accept peer RouterInterface.
            /// </remarks>
            [JsiiProperty(name: "oppositeInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object OppositeInterfaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: routerInterfaceId: The Initiator RouterInterface ID to connect peer RouterInterface.
            /// </remarks>
            [JsiiProperty(name: "routerInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RouterInterfaceId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
