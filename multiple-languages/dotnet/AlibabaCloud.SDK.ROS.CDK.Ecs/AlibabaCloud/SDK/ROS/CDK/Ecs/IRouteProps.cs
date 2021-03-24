using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ALIYUN::ECS::Route`.</summary>
    [JsiiInterface(nativeType: typeof(IRouteProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RouteProps")]
    public interface IRouteProps
    {
        /// <summary>Property destinationCidrBlock: The RouteEntry's target network segment.</summary>
        [JsiiProperty(name: "destinationCidrBlock", typeJson: "{\"primitive\":\"string\"}")]
        string DestinationCidrBlock
        {
            get;
        }

        /// <summary>Property routeId: RouteId of created route entry.</summary>
        [JsiiProperty(name: "routeId", typeJson: "{\"primitive\":\"string\"}")]
        string RouteId
        {
            get;
        }

        /// <summary>Property routeTableId: RouteTableId of created route entry.</summary>
        [JsiiProperty(name: "routeTableId", typeJson: "{\"primitive\":\"string\"}")]
        string RouteTableId
        {
            get;
        }

        /// <summary>Property nextHopId: The route entry's next hop.</summary>
        /// <remarks>
        /// When the NextHopList is specified, the value will be ignored.
        /// </remarks>
        [JsiiProperty(name: "nextHopId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? NextHopId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property nextHopList: The route entry's next hop list.</summary>
        /// <remarks>
        /// If router is virtual border router, the value will be ignore. The list should contain 2-4 next hop. NextHopId of each next hop must be RouterInterface that VRouter forwards to VBR.
        /// </remarks>
        [JsiiProperty(name: "nextHopList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosRoute.NextHopListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NextHopList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property nextHopType: The next hop type.</summary>
        /// <remarks>
        /// Available value options: Instance | Tunnel | HaVip | RouterInterface. The default value is Instance.When the NextHopList is specified, the value will be ignored.
        /// </remarks>
        [JsiiProperty(name: "nextHopType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? NextHopType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ECS::Route`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRouteProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RouteProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IRouteProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property destinationCidrBlock: The RouteEntry's target network segment.</summary>
            [JsiiProperty(name: "destinationCidrBlock", typeJson: "{\"primitive\":\"string\"}")]
            public string DestinationCidrBlock
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property routeId: RouteId of created route entry.</summary>
            [JsiiProperty(name: "routeId", typeJson: "{\"primitive\":\"string\"}")]
            public string RouteId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property routeTableId: RouteTableId of created route entry.</summary>
            [JsiiProperty(name: "routeTableId", typeJson: "{\"primitive\":\"string\"}")]
            public string RouteTableId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property nextHopId: The route entry's next hop.</summary>
            /// <remarks>
            /// When the NextHopList is specified, the value will be ignored.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nextHopId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? NextHopId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property nextHopList: The route entry's next hop list.</summary>
            /// <remarks>
            /// If router is virtual border router, the value will be ignore. The list should contain 2-4 next hop. NextHopId of each next hop must be RouterInterface that VRouter forwards to VBR.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nextHopList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosRoute.NextHopListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? NextHopList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property nextHopType: The next hop type.</summary>
            /// <remarks>
            /// Available value options: Instance | Tunnel | HaVip | RouterInterface. The default value is Instance.When the NextHopList is specified, the value will be ignored.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nextHopType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? NextHopType
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
