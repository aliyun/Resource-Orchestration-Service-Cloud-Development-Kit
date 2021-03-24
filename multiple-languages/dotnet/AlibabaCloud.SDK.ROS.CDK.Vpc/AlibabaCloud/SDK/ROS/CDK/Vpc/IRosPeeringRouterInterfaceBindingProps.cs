using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::PeeringRouterInterfaceBinding`.</summary>
    [JsiiInterface(nativeType: typeof(IRosPeeringRouterInterfaceBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosPeeringRouterInterfaceBindingProps")]
    public interface IRosPeeringRouterInterfaceBindingProps
    {
        /// <remarks>
        /// <strong>Property</strong>: oppositeInterfaceId: The connection peer RouterInterface ID.
        /// </remarks>
        [JsiiProperty(name: "oppositeInterfaceId", typeJson: "{\"primitive\":\"string\"}")]
        string OppositeInterfaceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: routerInterfaceId: The RouterInterface is set the parameters of the connection peer RouterInterface.
        /// </remarks>
        [JsiiProperty(name: "routerInterfaceId", typeJson: "{\"primitive\":\"string\"}")]
        string RouterInterfaceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.
        /// </remarks>
        [JsiiProperty(name: "oppositeInterfaceOwnerId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? OppositeInterfaceOwnerId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: oppositeRouterId: Router ID of the connection peer RouterInterface.
        /// </remarks>
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
        [JsiiTypeProxy(nativeType: typeof(IRosPeeringRouterInterfaceBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosPeeringRouterInterfaceBindingProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosPeeringRouterInterfaceBindingProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: oppositeInterfaceId: The connection peer RouterInterface ID.
            /// </remarks>
            [JsiiProperty(name: "oppositeInterfaceId", typeJson: "{\"primitive\":\"string\"}")]
            public string OppositeInterfaceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: routerInterfaceId: The RouterInterface is set the parameters of the connection peer RouterInterface.
            /// </remarks>
            [JsiiProperty(name: "routerInterfaceId", typeJson: "{\"primitive\":\"string\"}")]
            public string RouterInterfaceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "oppositeInterfaceOwnerId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? OppositeInterfaceOwnerId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: oppositeRouterId: Router ID of the connection peer RouterInterface.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "oppositeRouterId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? OppositeRouterId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
