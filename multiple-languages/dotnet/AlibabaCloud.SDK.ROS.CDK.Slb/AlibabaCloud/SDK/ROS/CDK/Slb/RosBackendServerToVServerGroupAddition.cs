using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    /// <summary>A ROS template type:  `ALIYUN::SLB::BackendServerToVServerGroupAddition`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Slb.RosBackendServerToVServerGroupAddition), fullyQualifiedName: "@alicloud/ros-cdk-slb.RosBackendServerToVServerGroupAddition", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-slb.RosBackendServerToVServerGroupAdditionProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosBackendServerToVServerGroupAddition : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::SLB::BackendServerToVServerGroupAddition`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosBackendServerToVServerGroupAddition(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Slb.IRosBackendServerToVServerGroupAdditionProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosBackendServerToVServerGroupAddition(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosBackendServerToVServerGroupAddition(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Slb.RosBackendServerToVServerGroupAddition))!;

        /// <remarks>
        /// <strong>Attribute</strong>: VServerGroupId: The ID of virtual server group.
        /// </remarks>
        [JsiiProperty(name: "attrVServerGroupId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrVServerGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
        /// </remarks>
        [JsiiProperty(name: "backendServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-slb.RosBackendServerToVServerGroupAddition.BackendServersProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        public virtual object BackendServers
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: vServerGroupId: The ID of virtual server group.
        /// </remarks>
        [JsiiProperty(name: "vServerGroupId", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string VServerGroupId
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IBackendServersProperty), fullyQualifiedName: "@alicloud/ros-cdk-slb.RosBackendServerToVServerGroupAddition.BackendServersProperty")]
        public interface IBackendServersProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: port: The port of backend server. From 1 to 65535.
            /// </remarks>
            [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"number\"}")]
            double Port
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: serverId: Need one valid ECS instance id.
            /// </remarks>
            [JsiiProperty(name: "serverId", typeJson: "{\"primitive\":\"string\"}")]
            string ServerId
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: weight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
            /// </remarks>
            [JsiiProperty(name: "weight", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? Weight
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IBackendServersProperty), fullyQualifiedName: "@alicloud/ros-cdk-slb.RosBackendServerToVServerGroupAddition.BackendServersProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.RosBackendServerToVServerGroupAddition.IBackendServersProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: port: The port of backend server. From 1 to 65535.
                /// </remarks>
                [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"number\"}")]
                public double Port
                {
                    get => GetInstanceProperty<double>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: serverId: Need one valid ECS instance id.
                /// </remarks>
                [JsiiProperty(name: "serverId", typeJson: "{\"primitive\":\"string\"}")]
                public string ServerId
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: weight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "weight", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? Weight
                {
                    get => GetInstanceProperty<double?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-slb.RosBackendServerToVServerGroupAddition.BackendServersProperty")]
        public class BackendServersProperty : AlibabaCloud.SDK.ROS.CDK.Slb.RosBackendServerToVServerGroupAddition.IBackendServersProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: port: The port of backend server. From 1 to 65535.
            /// </remarks>
            [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
            public double Port
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: serverId: Need one valid ECS instance id.
            /// </remarks>
            [JsiiProperty(name: "serverId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string ServerId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: weight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "weight", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? Weight
            {
                get;
                set;
            }
        }
    }
}
