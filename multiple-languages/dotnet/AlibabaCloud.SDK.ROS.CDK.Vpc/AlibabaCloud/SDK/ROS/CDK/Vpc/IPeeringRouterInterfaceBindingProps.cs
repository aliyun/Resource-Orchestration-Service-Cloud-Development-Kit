using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::PeeringRouterInterfaceBinding`.</summary>
    [JsiiInterface(nativeType: typeof(IPeeringRouterInterfaceBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.PeeringRouterInterfaceBindingProps")]
    public interface IPeeringRouterInterfaceBindingProps
    {
        /// <summary>Property oppositeInterfaceId: The connection peer RouterInterface ID.</summary>
        [JsiiProperty(name: "oppositeInterfaceId", typeJson: "{\"primitive\":\"string\"}")]
        string OppositeInterfaceId
        {
            get;
        }

        /// <summary>Property routerInterfaceId: The RouterInterface is set the parameters of the connection peer RouterInterface.</summary>
        [JsiiProperty(name: "routerInterfaceId", typeJson: "{\"primitive\":\"string\"}")]
        string RouterInterfaceId
        {
            get;
        }

        /// <summary>Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.</summary>
        [JsiiProperty(name: "oppositeInterfaceOwnerId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? OppositeInterfaceOwnerId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property oppositeRouterId: Router ID of the connection peer RouterInterface.</summary>
        [JsiiProperty(name: "oppositeRouterId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? OppositeRouterId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::VPC::PeeringRouterInterfaceBinding`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IPeeringRouterInterfaceBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.PeeringRouterInterfaceBindingProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IPeeringRouterInterfaceBindingProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property oppositeInterfaceId: The connection peer RouterInterface ID.</summary>
            [JsiiProperty(name: "oppositeInterfaceId", typeJson: "{\"primitive\":\"string\"}")]
            public string OppositeInterfaceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property routerInterfaceId: The RouterInterface is set the parameters of the connection peer RouterInterface.</summary>
            [JsiiProperty(name: "routerInterfaceId", typeJson: "{\"primitive\":\"string\"}")]
            public string RouterInterfaceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "oppositeInterfaceOwnerId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? OppositeInterfaceOwnerId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property oppositeRouterId: Router ID of the connection peer RouterInterface.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "oppositeRouterId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? OppositeRouterId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
