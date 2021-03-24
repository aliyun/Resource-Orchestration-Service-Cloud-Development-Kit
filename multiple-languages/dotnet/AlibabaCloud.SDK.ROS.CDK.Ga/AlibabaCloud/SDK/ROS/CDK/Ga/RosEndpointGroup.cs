using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>A ROS template type:  `ALIYUN::GA::EndpointGroup`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ga.RosEndpointGroup), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosEndpointGroup", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ga.RosEndpointGroupProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosEndpointGroup : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::GA::EndpointGroup`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosEndpointGroup(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ga.IRosEndpointGroupProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosEndpointGroup(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosEndpointGroup(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Ga.RosEndpointGroup))!;

        /// <remarks>
        /// <strong>Attribute</strong>: EndpointGroupId: The ID of the endpoint group.
        /// </remarks>
        [JsiiProperty(name: "attrEndpointGroupId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrEndpointGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: acceleratorId: The ID of the Global Accelerator instance with which the endpoint group will be associated.
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
        /// <strong>Property</strong>: endpointConfigurations:
        /// </remarks>
        [JsiiProperty(name: "endpointConfigurations", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ga.RosEndpointGroup.EndpointConfigurationsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public virtual object EndpointConfigurations
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: endpointGroupRegion: The region ID of the endpoint group.
        /// </remarks>
        [JsiiProperty(name: "endpointGroupRegion", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string EndpointGroupRegion
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: listenerId: The ID of the listener to be associated with the endpoint group.
        /// </remarks>
        [JsiiProperty(name: "listenerId", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string ListenerId
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the endpoint group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? Description
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: healthCheckIntervalSeconds: The interval between two consecutive health checks. Unit: seconds.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "healthCheckIntervalSeconds", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? HealthCheckIntervalSeconds
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: healthCheckPath: The path set as the destination on the targets for health checks.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "healthCheckPath", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? HealthCheckPath
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: healthCheckPort: The port that is used to connect with the targets for health checks.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "healthCheckPort", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? HealthCheckPort
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: healthCheckProtocol: The protocol that is used to connect with the targets for health checks.
        /// tcp: TCP protocol
        /// http: HTTP protocol
        /// https: HTTPS protocol
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "healthCheckProtocol", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? HealthCheckProtocol
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the endpoint group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? Name
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: thresholdCount: The number of consecutive failed heath checks that must occur before declaring an endpoint unhealthy.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "thresholdCount", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? ThresholdCount
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: trafficPercentage: The weight of the endpoint group when the corresponding listener is associated with
        /// multiple endpoint groups.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "trafficPercentage", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? TrafficPercentage
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IEndpointConfigurationsProperty), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosEndpointGroup.EndpointConfigurationsProperty")]
        public interface IEndpointConfigurationsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: endpoint: The IP address or domain name of endpoint in the endpoint group.
            /// </remarks>
            [JsiiProperty(name: "endpoint", typeJson: "{\"primitive\":\"string\"}")]
            string Endpoint
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: The type of endpoint in the endpoint group. Valid values:
            /// EIP: eip address
            /// PublicIp: public IP address
            /// Ip: custom IP address
            /// Domain: custom domain name
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
            string Type
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: weight: The weight of endpoint N in the endpoint group.
            /// </remarks>
            [JsiiProperty(name: "weight", typeJson: "{\"primitive\":\"number\"}")]
            double Weight
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IEndpointConfigurationsProperty), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosEndpointGroup.EndpointConfigurationsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.RosEndpointGroup.IEndpointConfigurationsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: endpoint: The IP address or domain name of endpoint in the endpoint group.
                /// </remarks>
                [JsiiProperty(name: "endpoint", typeJson: "{\"primitive\":\"string\"}")]
                public string Endpoint
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: type: The type of endpoint in the endpoint group. Valid values:
                /// EIP: eip address
                /// PublicIp: public IP address
                /// Ip: custom IP address
                /// Domain: custom domain name
                /// </remarks>
                [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
                public string Type
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: weight: The weight of endpoint N in the endpoint group.
                /// </remarks>
                [JsiiProperty(name: "weight", typeJson: "{\"primitive\":\"number\"}")]
                public double Weight
                {
                    get => GetInstanceProperty<double>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-ga.RosEndpointGroup.EndpointConfigurationsProperty")]
        public class EndpointConfigurationsProperty : AlibabaCloud.SDK.ROS.CDK.Ga.RosEndpointGroup.IEndpointConfigurationsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: endpoint: The IP address or domain name of endpoint in the endpoint group.
            /// </remarks>
            [JsiiProperty(name: "endpoint", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Endpoint
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: The type of endpoint in the endpoint group. Valid values:
            /// EIP: eip address
            /// PublicIp: public IP address
            /// Ip: custom IP address
            /// Domain: custom domain name
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Type
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: weight: The weight of endpoint N in the endpoint group.
            /// </remarks>
            [JsiiProperty(name: "weight", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
            public double Weight
            {
                get;
                set;
            }
        }
    }
}
