using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    /// <summary>A ROS template type:  `ALIYUN::SLB::BackendServerAttachment`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Slb.RosBackendServerAttachment), fullyQualifiedName: "@alicloud/ros-cdk-slb.RosBackendServerAttachment", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-slb.RosBackendServerAttachmentProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosBackendServerAttachment : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::SLB::BackendServerAttachment`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosBackendServerAttachment(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Slb.IRosBackendServerAttachmentProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosBackendServerAttachment(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosBackendServerAttachment(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Slb.RosBackendServerAttachment))!;

        /// <remarks>
        /// <strong>Attribute</strong>: BackendServers: The collection of attached backend server.
        /// </remarks>
        [JsiiProperty(name: "attrBackendServers", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrBackendServers
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: LoadBalancerId: The id of load balancer.
        /// </remarks>
        [JsiiProperty(name: "attrLoadBalancerId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrLoadBalancerId
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
        /// <strong>Property</strong>: loadBalancerId: The id of load balancer.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string LoadBalancerId
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: backendServerList: The comma delimited instance id list.If the property "BackendServers" is setting, this property will be ignored.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "backendServerList", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        public virtual string[]? BackendServerList
        {
            get => GetInstanceProperty<string[]?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: backendServers: The list of ECS instance, which will attached to load balancer.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "backendServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosBackendServerAttachment.BackendServersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? BackendServers
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: backendServerWeightList: The comma delimited weight list. If no value specified will use 100. If the length is small than "BackendServerList", it will copy the last one to fill the array.If the property "BackendServers" is setting, this property will be ignored.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "backendServerWeightList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? BackendServerWeightList
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IBackendServersProperty), fullyQualifiedName: "@alicloud/ros-cdk-slb.RosBackendServerAttachment.BackendServersProperty")]
        public interface IBackendServersProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: serverId: Need one valid instance id. The instance status should running.
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
            /// <strong>Property</strong>: description: A description of the backend server.
            /// </remarks>
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Description
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: serverIp: The IP of the instance.
            /// </remarks>
            [JsiiProperty(name: "serverIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? ServerIp
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: type: The backend server type. Valid values:ecs: ECS instance (default)eni: Elastic Network Interface (ENI)
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Type
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IBackendServersProperty), fullyQualifiedName: "@alicloud/ros-cdk-slb.RosBackendServerAttachment.BackendServersProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.RosBackendServerAttachment.IBackendServersProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: serverId: Need one valid instance id. The instance status should running.
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
                /// <strong>Property</strong>: description: A description of the backend server.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Description
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: serverIp: The IP of the instance.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "serverIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? ServerIp
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: type: The backend server type. Valid values:ecs: ECS instance (default)eni: Elastic Network Interface (ENI)
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Type
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-slb.RosBackendServerAttachment.BackendServersProperty")]
        public class BackendServersProperty : AlibabaCloud.SDK.ROS.CDK.Slb.RosBackendServerAttachment.IBackendServersProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: serverId: Need one valid instance id. The instance status should running.
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
            /// <strong>Property</strong>: description: A description of the backend server.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Description
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: serverIp: The IP of the instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serverIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? ServerIp
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: The backend server type. Valid values:ecs: ECS instance (default)eni: Elastic Network Interface (ENI)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Type
            {
                get;
                set;
            }
        }
    }
}
