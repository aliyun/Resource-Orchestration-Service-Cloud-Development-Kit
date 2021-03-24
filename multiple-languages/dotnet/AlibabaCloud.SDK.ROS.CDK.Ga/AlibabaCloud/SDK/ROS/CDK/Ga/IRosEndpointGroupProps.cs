using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>Properties for defining a `ALIYUN::GA::EndpointGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IRosEndpointGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosEndpointGroupProps")]
    public interface IRosEndpointGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: acceleratorId: The ID of the Global Accelerator instance with which the endpoint group will be associated.
        /// </remarks>
        [JsiiProperty(name: "acceleratorId", typeJson: "{\"primitive\":\"string\"}")]
        string AcceleratorId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: endpointConfigurations:
        /// </remarks>
        [JsiiProperty(name: "endpointConfigurations", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ga.RosEndpointGroup.EndpointConfigurationsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object EndpointConfigurations
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: endpointGroupRegion: The region ID of the endpoint group.
        /// </remarks>
        [JsiiProperty(name: "endpointGroupRegion", typeJson: "{\"primitive\":\"string\"}")]
        string EndpointGroupRegion
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: listenerId: The ID of the listener to be associated with the endpoint group.
        /// </remarks>
        [JsiiProperty(name: "listenerId", typeJson: "{\"primitive\":\"string\"}")]
        string ListenerId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the endpoint group.
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
        /// <strong>Property</strong>: healthCheckIntervalSeconds: The interval between two consecutive health checks. Unit: seconds.
        /// </remarks>
        [JsiiProperty(name: "healthCheckIntervalSeconds", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? HealthCheckIntervalSeconds
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: healthCheckPath: The path set as the destination on the targets for health checks.
        /// </remarks>
        [JsiiProperty(name: "healthCheckPath", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? HealthCheckPath
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: healthCheckPort: The port that is used to connect with the targets for health checks.
        /// </remarks>
        [JsiiProperty(name: "healthCheckPort", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? HealthCheckPort
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: healthCheckProtocol: The protocol that is used to connect with the targets for health checks.
        /// tcp: TCP protocol
        /// http: HTTP protocol
        /// https: HTTPS protocol
        /// </remarks>
        [JsiiProperty(name: "healthCheckProtocol", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? HealthCheckProtocol
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the endpoint group.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Name
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: thresholdCount: The number of consecutive failed heath checks that must occur before declaring an endpoint unhealthy.
        /// </remarks>
        [JsiiProperty(name: "thresholdCount", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? ThresholdCount
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: trafficPercentage: The weight of the endpoint group when the corresponding listener is associated with
        /// multiple endpoint groups.
        /// </remarks>
        [JsiiProperty(name: "trafficPercentage", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? TrafficPercentage
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::GA::EndpointGroup`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosEndpointGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosEndpointGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.IRosEndpointGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: acceleratorId: The ID of the Global Accelerator instance with which the endpoint group will be associated.
            /// </remarks>
            [JsiiProperty(name: "acceleratorId", typeJson: "{\"primitive\":\"string\"}")]
            public string AcceleratorId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: endpointConfigurations:
            /// </remarks>
            [JsiiProperty(name: "endpointConfigurations", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ga.RosEndpointGroup.EndpointConfigurationsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object EndpointConfigurations
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: endpointGroupRegion: The region ID of the endpoint group.
            /// </remarks>
            [JsiiProperty(name: "endpointGroupRegion", typeJson: "{\"primitive\":\"string\"}")]
            public string EndpointGroupRegion
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: listenerId: The ID of the listener to be associated with the endpoint group.
            /// </remarks>
            [JsiiProperty(name: "listenerId", typeJson: "{\"primitive\":\"string\"}")]
            public string ListenerId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the endpoint group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: healthCheckIntervalSeconds: The interval between two consecutive health checks. Unit: seconds.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckIntervalSeconds", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? HealthCheckIntervalSeconds
            {
                get => GetInstanceProperty<double?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: healthCheckPath: The path set as the destination on the targets for health checks.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckPath", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? HealthCheckPath
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: healthCheckPort: The port that is used to connect with the targets for health checks.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckPort", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? HealthCheckPort
            {
                get => GetInstanceProperty<double?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: healthCheckProtocol: The protocol that is used to connect with the targets for health checks.
            /// tcp: TCP protocol
            /// http: HTTP protocol
            /// https: HTTPS protocol
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckProtocol", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? HealthCheckProtocol
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the endpoint group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Name
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: thresholdCount: The number of consecutive failed heath checks that must occur before declaring an endpoint unhealthy.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "thresholdCount", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? ThresholdCount
            {
                get => GetInstanceProperty<double?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: trafficPercentage: The weight of the endpoint group when the corresponding listener is associated with
            /// multiple endpoint groups.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "trafficPercentage", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? TrafficPercentage
            {
                get => GetInstanceProperty<double?>();
            }
        }
    }
}
