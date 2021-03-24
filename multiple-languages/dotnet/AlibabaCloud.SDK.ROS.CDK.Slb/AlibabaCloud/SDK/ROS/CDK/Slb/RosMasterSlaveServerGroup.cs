using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    /// <summary>A ROS template type:  `ALIYUN::SLB::MasterSlaveServerGroup`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Slb.RosMasterSlaveServerGroup), fullyQualifiedName: "@alicloud/ros-cdk-slb.RosMasterSlaveServerGroup", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-slb.RosMasterSlaveServerGroupProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosMasterSlaveServerGroup : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::SLB::MasterSlaveServerGroup`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosMasterSlaveServerGroup(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Slb.IRosMasterSlaveServerGroupProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosMasterSlaveServerGroup(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosMasterSlaveServerGroup(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Slb.RosMasterSlaveServerGroup))!;

        /// <remarks>
        /// <strong>Attribute</strong>: MasterSlaveServerGroupId: Active/standby server group ID.
        /// </remarks>
        [JsiiProperty(name: "attrMasterSlaveServerGroupId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrMasterSlaveServerGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: loadBalancerId: The ID of the Server Load Balancer instance.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string LoadBalancerId
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: masterSlaveBackendServers: A list of active/standby server group.
        /// An active/standby server group can only contain two backend servers.
        /// </remarks>
        [JsiiProperty(name: "masterSlaveBackendServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public virtual object MasterSlaveBackendServers
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: masterSlaveServerGroupName: The name of the active/standby server group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "masterSlaveServerGroupName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? MasterSlaveServerGroupName
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IMasterSlaveBackendServersProperty), fullyQualifiedName: "@alicloud/ros-cdk-slb.RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty")]
        public interface IMasterSlaveBackendServersProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: port: The port used by backend server. From 1 to 65535
            /// </remarks>
            [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"number\"}")]
            double Port
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: serverId: ECS instance ID
            /// </remarks>
            [JsiiProperty(name: "serverId", typeJson: "{\"primitive\":\"string\"}")]
            string ServerId
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: weight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
            /// </remarks>
            [JsiiProperty(name: "weight", typeJson: "{\"primitive\":\"number\"}")]
            double Weight
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: serverType: The identity of backend server. Could be "Master" (default) or "Slave"
            /// </remarks>
            [JsiiProperty(name: "serverType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? ServerType
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IMasterSlaveBackendServersProperty), fullyQualifiedName: "@alicloud/ros-cdk-slb.RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.RosMasterSlaveServerGroup.IMasterSlaveBackendServersProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: port: The port used by backend server. From 1 to 65535
                /// </remarks>
                [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"number\"}")]
                public double Port
                {
                    get => GetInstanceProperty<double>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: serverId: ECS instance ID
                /// </remarks>
                [JsiiProperty(name: "serverId", typeJson: "{\"primitive\":\"string\"}")]
                public string ServerId
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: weight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
                /// </remarks>
                [JsiiProperty(name: "weight", typeJson: "{\"primitive\":\"number\"}")]
                public double Weight
                {
                    get => GetInstanceProperty<double>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: serverType: The identity of backend server. Could be "Master" (default) or "Slave"
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "serverType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? ServerType
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-slb.RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty")]
        public class MasterSlaveBackendServersProperty : AlibabaCloud.SDK.ROS.CDK.Slb.RosMasterSlaveServerGroup.IMasterSlaveBackendServersProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: port: The port used by backend server. From 1 to 65535
            /// </remarks>
            [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
            public double Port
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: serverId: ECS instance ID
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
            [JsiiProperty(name: "weight", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
            public double Weight
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: serverType: The identity of backend server. Could be "Master" (default) or "Slave"
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serverType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? ServerType
            {
                get;
                set;
            }
        }
    }
}
