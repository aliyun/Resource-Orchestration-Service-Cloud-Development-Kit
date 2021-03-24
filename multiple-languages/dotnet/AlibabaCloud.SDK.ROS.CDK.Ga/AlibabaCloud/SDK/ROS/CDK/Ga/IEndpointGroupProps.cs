using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>Properties for defining a `ALIYUN::GA::EndpointGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IEndpointGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.EndpointGroupProps")]
    public interface IEndpointGroupProps
    {
        /// <summary>Property acceleratorId: The ID of the Global Accelerator instance with which the endpoint group will be associated.</summary>
        [JsiiProperty(name: "acceleratorId", typeJson: "{\"primitive\":\"string\"}")]
        string AcceleratorId
        {
            get;
        }

        /// <summary>Property endpointConfigurations:.</summary>
        [JsiiProperty(name: "endpointConfigurations", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ga.RosEndpointGroup.EndpointConfigurationsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object EndpointConfigurations
        {
            get;
        }

        /// <summary>Property endpointGroupRegion: The region ID of the endpoint group.</summary>
        [JsiiProperty(name: "endpointGroupRegion", typeJson: "{\"primitive\":\"string\"}")]
        string EndpointGroupRegion
        {
            get;
        }

        /// <summary>Property listenerId: The ID of the listener to be associated with the endpoint group.</summary>
        [JsiiProperty(name: "listenerId", typeJson: "{\"primitive\":\"string\"}")]
        string ListenerId
        {
            get;
        }

        /// <summary>Property description: The description of the endpoint group.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property healthCheckIntervalSeconds: The interval between two consecutive health checks.</summary>
        /// <remarks>
        /// Unit: seconds.
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

        /// <summary>Property healthCheckPath: The path set as the destination on the targets for health checks.</summary>
        [JsiiProperty(name: "healthCheckPath", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? HealthCheckPath
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property healthCheckPort: The port that is used to connect with the targets for health checks.</summary>
        [JsiiProperty(name: "healthCheckPort", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? HealthCheckPort
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property healthCheckProtocol: The protocol that is used to connect with the targets for health checks.</summary>
        /// <remarks>
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

        /// <summary>Property name: The name of the endpoint group.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Name
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property thresholdCount: The number of consecutive failed heath checks that must occur before declaring an endpoint unhealthy.</summary>
        [JsiiProperty(name: "thresholdCount", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? ThresholdCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property trafficPercentage: The weight of the endpoint group when the corresponding listener is associated with multiple endpoint groups.</summary>
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
        [JsiiTypeProxy(nativeType: typeof(IEndpointGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.EndpointGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.IEndpointGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property acceleratorId: The ID of the Global Accelerator instance with which the endpoint group will be associated.</summary>
            [JsiiProperty(name: "acceleratorId", typeJson: "{\"primitive\":\"string\"}")]
            public string AcceleratorId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property endpointConfigurations:.</summary>
            [JsiiProperty(name: "endpointConfigurations", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ga.RosEndpointGroup.EndpointConfigurationsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object EndpointConfigurations
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property endpointGroupRegion: The region ID of the endpoint group.</summary>
            [JsiiProperty(name: "endpointGroupRegion", typeJson: "{\"primitive\":\"string\"}")]
            public string EndpointGroupRegion
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property listenerId: The ID of the listener to be associated with the endpoint group.</summary>
            [JsiiProperty(name: "listenerId", typeJson: "{\"primitive\":\"string\"}")]
            public string ListenerId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property description: The description of the endpoint group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property healthCheckIntervalSeconds: The interval between two consecutive health checks.</summary>
            /// <remarks>
            /// Unit: seconds.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckIntervalSeconds", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? HealthCheckIntervalSeconds
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property healthCheckPath: The path set as the destination on the targets for health checks.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckPath", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? HealthCheckPath
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property healthCheckPort: The port that is used to connect with the targets for health checks.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckPort", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? HealthCheckPort
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property healthCheckProtocol: The protocol that is used to connect with the targets for health checks.</summary>
            /// <remarks>
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

            /// <summary>Property name: The name of the endpoint group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Name
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property thresholdCount: The number of consecutive failed heath checks that must occur before declaring an endpoint unhealthy.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "thresholdCount", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? ThresholdCount
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property trafficPercentage: The weight of the endpoint group when the corresponding listener is associated with multiple endpoint groups.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "trafficPercentage", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? TrafficPercentage
            {
                get => GetInstanceProperty<double?>();
            }
        }
    }
}
