using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::PeeringRouterInterfaceConnection`.</summary>
    [JsiiInterface(nativeType: typeof(IRosPeeringRouterInterfaceConnectionProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosPeeringRouterInterfaceConnectionProps")]
    public interface IRosPeeringRouterInterfaceConnectionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: oppositeInterfaceId: The Receiver RouterInterface ID to accept peer RouterInterface.
        /// </remarks>
        [JsiiProperty(name: "oppositeInterfaceId", typeJson: "{\"primitive\":\"string\"}")]
        string OppositeInterfaceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: routerInterfaceId: The Initiator RouterInterface ID to connect peer RouterInterface.
        /// </remarks>
        [JsiiProperty(name: "routerInterfaceId", typeJson: "{\"primitive\":\"string\"}")]
        string RouterInterfaceId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::VPC::PeeringRouterInterfaceConnection`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosPeeringRouterInterfaceConnectionProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosPeeringRouterInterfaceConnectionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosPeeringRouterInterfaceConnectionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: oppositeInterfaceId: The Receiver RouterInterface ID to accept peer RouterInterface.
            /// </remarks>
            [JsiiProperty(name: "oppositeInterfaceId", typeJson: "{\"primitive\":\"string\"}")]
            public string OppositeInterfaceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: routerInterfaceId: The Initiator RouterInterface ID to connect peer RouterInterface.
            /// </remarks>
            [JsiiProperty(name: "routerInterfaceId", typeJson: "{\"primitive\":\"string\"}")]
            public string RouterInterfaceId
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
