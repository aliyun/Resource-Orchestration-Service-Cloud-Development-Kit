using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>A ROS template type:  `ALIYUN::ECS::Route`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ecs.RosRoute), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosRoute", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosRouteProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosRoute : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::ECS::Route`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosRoute(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ecs.IRosRouteProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosRoute(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosRoute(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]", isOverride: true)]
        protected override System.Collections.Generic.IDictionary<string, object> RenderProperties(System.Collections.Generic.IDictionary<string, object> props)
        {
            return InvokeInstanceMethod<System.Collections.Generic.IDictionary<string, object>>(new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object>)}, new object[]{props})!;
        }

        /// <summary>The resource type name for this resource class.</summary>
        [JsiiProperty(name: "ROS_RESOURCE_TYPE_NAME", typeJson: "{\"primitive\":\"string\"}")]
        public static string ROS_RESOURCE_TYPE_NAME
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Ecs.RosRoute))!;

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationCidrBlock: The RouteEntry's target network segment.
        /// </remarks>
        [JsiiProperty(name: "destinationCidrBlock", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string DestinationCidrBlock
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <summary>A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.</summary>
        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: routeId: RouteId of created route entry.
        /// </remarks>
        [JsiiProperty(name: "routeId", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string RouteId
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: routeTableId: RouteTableId of created route entry.
        /// </remarks>
        [JsiiProperty(name: "routeTableId", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string RouteTableId
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: nextHopId: The route entry's next hop. When the NextHopList is specified, the value will be ignored.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "nextHopId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? NextHopId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: nextHopList: The route entry's next hop list. If router is virtual border router, the value will be ignore. The list should contain 2-4 next hop. NextHopId of each next hop must be RouterInterface that VRouter forwards to VBR.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "nextHopList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosRoute.NextHopListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? NextHopList
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: nextHopType: The next hop type. Available value options: Instance | Tunnel | HaVip | RouterInterface. The default value is Instance.When the NextHopList is specified, the value will be ignored.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "nextHopType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? NextHopType
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(INextHopListProperty), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosRoute.NextHopListProperty")]
        public interface INextHopListProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: nextHopId: Route entry next hop Instance id or Tunnel id.
            /// </remarks>
            [JsiiProperty(name: "nextHopId", typeJson: "{\"primitive\":\"string\"}")]
            string NextHopId
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: nextHopType: Route entry next hop type. Now support 'Instance|Tunnel|HaVip|RouterInterface'.
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

            [JsiiTypeProxy(nativeType: typeof(INextHopListProperty), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosRoute.NextHopListProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.RosRoute.INextHopListProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: nextHopId: Route entry next hop Instance id or Tunnel id.
                /// </remarks>
                [JsiiProperty(name: "nextHopId", typeJson: "{\"primitive\":\"string\"}")]
                public string NextHopId
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: nextHopType: Route entry next hop type. Now support 'Instance|Tunnel|HaVip|RouterInterface'.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "nextHopType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? NextHopType
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.RosRoute.NextHopListProperty")]
        public class NextHopListProperty : AlibabaCloud.SDK.ROS.CDK.Ecs.RosRoute.INextHopListProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: nextHopId: Route entry next hop Instance id or Tunnel id.
            /// </remarks>
            [JsiiProperty(name: "nextHopId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string NextHopId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: nextHopType: Route entry next hop type. Now support 'Instance|Tunnel|HaVip|RouterInterface'.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nextHopType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? NextHopType
            {
                get;
                set;
            }
        }
    }
}
