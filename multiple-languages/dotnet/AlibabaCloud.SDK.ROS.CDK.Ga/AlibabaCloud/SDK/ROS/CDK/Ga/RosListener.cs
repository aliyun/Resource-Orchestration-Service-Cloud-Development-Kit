using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>A ROS template type:  `ALIYUN::GA::Listener`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ga.RosListener), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosListener", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ga.RosListenerProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosListener : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::GA::Listener`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosListener(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ga.IRosListenerProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosListener(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosListener(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Ga.RosListener))!;

        /// <remarks>
        /// <strong>Attribute</strong>: ListenerId: The ID of the listener.
        /// </remarks>
        [JsiiProperty(name: "attrListenerId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrListenerId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: acceleratorId: The ID of the Global Accelerator instance to which the listener will be added.
        /// </remarks>
        [JsiiProperty(name: "acceleratorId", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string AcceleratorId
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: portRanges:
        /// </remarks>
        [JsiiProperty(name: "portRanges", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ga.RosListener.PortRangesProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public virtual object PortRanges
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: protocol: The network transmission protocol of the listener. Valid values:
        /// tcp: TCP protocol
        /// udp: UDP protocol
        /// </remarks>
        [JsiiProperty(name: "protocol", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string Protocol
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: clientAffinity: Specifies whether to enable client affinity for the listener.
        /// If you do not specify the default value in the parameter, client affinity is disabled.
        /// When client affinity is disabled, the connections from a specific source (client)
        /// IP address are not always routed to the same endpoint.
        /// If you set the value to SOURCE_IP, client affinity is enabled. When client affinity is enabled, the connections from
        /// a specific source (client) IP address are always routed to the same endpoint.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "clientAffinity", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? ClientAffinity
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the listener.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? Description
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the listener.
        /// The name must be 2 to 128 characters in length and can contain letters, digits, underscores
        /// (_), and hyphens (-). It must start with a letter or Chinese character.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? Name
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IPortRangesProperty), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosListener.PortRangesProperty")]
        public interface IPortRangesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: fromPort: The first listening port of the port range specified for receiving and forwarding
            /// requests to endpoints.
            /// </remarks>
            [JsiiProperty(name: "fromPort", typeJson: "{\"primitive\":\"number\"}")]
            double FromPort
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: toPort: The last listening port of the port range specified for receiving and forwarding requests
            /// to endpoints.
            /// </remarks>
            [JsiiProperty(name: "toPort", typeJson: "{\"primitive\":\"number\"}")]
            double ToPort
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IPortRangesProperty), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosListener.PortRangesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.RosListener.IPortRangesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: fromPort: The first listening port of the port range specified for receiving and forwarding
                /// requests to endpoints.
                /// </remarks>
                [JsiiProperty(name: "fromPort", typeJson: "{\"primitive\":\"number\"}")]
                public double FromPort
                {
                    get => GetInstanceProperty<double>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: toPort: The last listening port of the port range specified for receiving and forwarding requests
                /// to endpoints.
                /// </remarks>
                [JsiiProperty(name: "toPort", typeJson: "{\"primitive\":\"number\"}")]
                public double ToPort
                {
                    get => GetInstanceProperty<double>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-ga.RosListener.PortRangesProperty")]
        public class PortRangesProperty : AlibabaCloud.SDK.ROS.CDK.Ga.RosListener.IPortRangesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: fromPort: The first listening port of the port range specified for receiving and forwarding
            /// requests to endpoints.
            /// </remarks>
            [JsiiProperty(name: "fromPort", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
            public double FromPort
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: toPort: The last listening port of the port range specified for receiving and forwarding requests
            /// to endpoints.
            /// </remarks>
            [JsiiProperty(name: "toPort", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
            public double ToPort
            {
                get;
                set;
            }
        }
    }
}
