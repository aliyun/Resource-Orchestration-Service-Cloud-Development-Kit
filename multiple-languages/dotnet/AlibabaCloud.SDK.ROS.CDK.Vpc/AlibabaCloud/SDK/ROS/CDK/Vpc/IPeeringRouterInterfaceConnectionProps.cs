using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::PeeringRouterInterfaceConnection`.</summary>
    [JsiiInterface(nativeType: typeof(IPeeringRouterInterfaceConnectionProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.PeeringRouterInterfaceConnectionProps")]
    public interface IPeeringRouterInterfaceConnectionProps
    {
        /// <summary>Property oppositeInterfaceId: The Receiver RouterInterface ID to accept peer RouterInterface.</summary>
        [JsiiProperty(name: "oppositeInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object OppositeInterfaceId
        {
            get;
        }

        /// <summary>Property routerInterfaceId: The Initiator RouterInterface ID to connect peer RouterInterface.</summary>
        [JsiiProperty(name: "routerInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RouterInterfaceId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::VPC::PeeringRouterInterfaceConnection`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IPeeringRouterInterfaceConnectionProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.PeeringRouterInterfaceConnectionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IPeeringRouterInterfaceConnectionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property oppositeInterfaceId: The Receiver RouterInterface ID to accept peer RouterInterface.</summary>
            [JsiiProperty(name: "oppositeInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object OppositeInterfaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property routerInterfaceId: The Initiator RouterInterface ID to connect peer RouterInterface.</summary>
            [JsiiProperty(name: "routerInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RouterInterfaceId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
