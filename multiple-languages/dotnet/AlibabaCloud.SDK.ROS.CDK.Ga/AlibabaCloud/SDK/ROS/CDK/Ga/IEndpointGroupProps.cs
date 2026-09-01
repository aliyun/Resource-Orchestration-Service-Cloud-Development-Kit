using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>Properties for defining a `EndpointGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-endpointgroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IEndpointGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.EndpointGroupProps")]
    public interface IEndpointGroupProps
    {
        /// <summary>Property acceleratorId: The ID of the Global Accelerator instance with which the endpoint group will be associated.</summary>
        [JsiiProperty(name: "acceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AcceleratorId
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
        [JsiiProperty(name: "endpointGroupRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EndpointGroupRegion
        {
            get;
        }

        /// <summary>Property listenerId: The ID of the listener to be associated with the endpoint group.</summary>
        [JsiiProperty(name: "listenerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ListenerId
        {
            get;
        }

        /// <summary>Property description: The description of the endpoint group.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property endpointGroupType: The type of the endpoint group.</summary>
        /// <remarks>
        /// Valid values:
        /// default: The endpoint group is a default endpoint group. This is the default value.
        /// virtual: The endpoint group is a virtual endpoint group.
        /// Note Only HTTP and HTTPS listeners support virtual endpoint groups.
        /// </remarks>
        [JsiiProperty(name: "endpointGroupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EndpointGroupType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property endpointIpVersion: The IP address protocol version of the backend service.</summary>
        /// <remarks>
        /// Valid values:
        /// IPv4
        /// IPv6
        /// ProtocolAffinity
        /// </remarks>
        [JsiiProperty(name: "endpointIpVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EndpointIpVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property endpointProtocolVersion: The protocol version of the backend service.</summary>
        /// <remarks>
        /// Valid values:
        /// HTTP1.1
        /// HTTP2
        /// Note This parameter is valid only when the listener uses HTTPS.
        /// </remarks>
        [JsiiProperty(name: "endpointProtocolVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EndpointProtocolVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property endpointRequestProtocol: The protocol used by the backend service.</summary>
        /// <remarks>
        /// Valid values:
        /// HTTP: This is the default value.
        /// HTTPS
        /// Note: You can set this parameter only when the listener that is associated with the endpoint group uses HTTP or HTTPS.
        /// For an HTTP listener, the backend service protocol must be HTTP.
        /// </remarks>
        [JsiiProperty(name: "endpointRequestProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EndpointRequestProtocol
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property healthCheckEnabled: Specifies whether to enable the health check feature.</summary>
        [JsiiProperty(name: "healthCheckEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HealthCheckEnabled
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property healthCheckHost: The domain name that is used for health checks.</summary>
        [JsiiProperty(name: "healthCheckHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HealthCheckHost
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
        [JsiiProperty(name: "healthCheckIntervalSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HealthCheckIntervalSeconds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property healthCheckPath: The path set as the destination on the targets for health checks.</summary>
        [JsiiProperty(name: "healthCheckPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HealthCheckPath
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property healthCheckPort: The port that is used to connect with the targets for health checks.</summary>
        [JsiiProperty(name: "healthCheckPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HealthCheckPort
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
        [JsiiProperty(name: "healthCheckProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HealthCheckProtocol
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property name: The name of the endpoint group.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Name
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property portOverrides: The port mapping relationship of the endpoint group.</summary>
        [JsiiProperty(name: "portOverrides", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ga.RosEndpointGroup.PortOverridesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PortOverrides
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to endpoint group.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create endpoint group. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ga.RosEndpointGroup.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Ga.RosEndpointGroup.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property thresholdCount: The number of consecutive health check failures that must occur before a healthy endpoint is considered unhealthy, or the number of consecutive health check successes that must occur before an unhealthy endpoint is considered healthy.</summary>
        /// <remarks>
        /// Valid values: 2 to 10. Default value: 3.
        /// </remarks>
        [JsiiProperty(name: "thresholdCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ThresholdCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property trafficPercentage: The weight of the endpoint group when the corresponding listener is associated with multiple endpoint groups.</summary>
        [JsiiProperty(name: "trafficPercentage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TrafficPercentage
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `EndpointGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-endpointgroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IEndpointGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.EndpointGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.IEndpointGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property acceleratorId: The ID of the Global Accelerator instance with which the endpoint group will be associated.</summary>
            [JsiiProperty(name: "acceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AcceleratorId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property endpointConfigurations:.</summary>
            [JsiiProperty(name: "endpointConfigurations", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ga.RosEndpointGroup.EndpointConfigurationsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object EndpointConfigurations
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property endpointGroupRegion: The region ID of the endpoint group.</summary>
            [JsiiProperty(name: "endpointGroupRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EndpointGroupRegion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property listenerId: The ID of the listener to be associated with the endpoint group.</summary>
            [JsiiProperty(name: "listenerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ListenerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the endpoint group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property endpointGroupType: The type of the endpoint group.</summary>
            /// <remarks>
            /// Valid values:
            /// default: The endpoint group is a default endpoint group. This is the default value.
            /// virtual: The endpoint group is a virtual endpoint group.
            /// Note Only HTTP and HTTPS listeners support virtual endpoint groups.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endpointGroupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndpointGroupType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property endpointIpVersion: The IP address protocol version of the backend service.</summary>
            /// <remarks>
            /// Valid values:
            /// IPv4
            /// IPv6
            /// ProtocolAffinity
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endpointIpVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndpointIpVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property endpointProtocolVersion: The protocol version of the backend service.</summary>
            /// <remarks>
            /// Valid values:
            /// HTTP1.1
            /// HTTP2
            /// Note This parameter is valid only when the listener uses HTTPS.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endpointProtocolVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndpointProtocolVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property endpointRequestProtocol: The protocol used by the backend service.</summary>
            /// <remarks>
            /// Valid values:
            /// HTTP: This is the default value.
            /// HTTPS
            /// Note: You can set this parameter only when the listener that is associated with the endpoint group uses HTTP or HTTPS.
            /// For an HTTP listener, the backend service protocol must be HTTP.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endpointRequestProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndpointRequestProtocol
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property healthCheckEnabled: Specifies whether to enable the health check feature.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property healthCheckHost: The domain name that is used for health checks.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckHost
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property healthCheckIntervalSeconds: The interval between two consecutive health checks.</summary>
            /// <remarks>
            /// Unit: seconds.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckIntervalSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckIntervalSeconds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property healthCheckPath: The path set as the destination on the targets for health checks.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckPath
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property healthCheckPort: The port that is used to connect with the targets for health checks.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckPort
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property healthCheckProtocol: The protocol that is used to connect with the targets for health checks.</summary>
            /// <remarks>
            /// tcp: TCP protocol
            /// http: HTTP protocol
            /// https: HTTPS protocol
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckProtocol
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property name: The name of the endpoint group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property portOverrides: The port mapping relationship of the endpoint group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "portOverrides", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ga.RosEndpointGroup.PortOverridesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? PortOverrides
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to endpoint group.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create endpoint group. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ga.RosEndpointGroup.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Ga.RosEndpointGroup.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ga.RosEndpointGroup.ITagsProperty[]?>();
            }

            /// <summary>Property thresholdCount: The number of consecutive health check failures that must occur before a healthy endpoint is considered unhealthy, or the number of consecutive health check successes that must occur before an unhealthy endpoint is considered healthy.</summary>
            /// <remarks>
            /// Valid values: 2 to 10. Default value: 3.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "thresholdCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ThresholdCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property trafficPercentage: The weight of the endpoint group when the corresponding listener is associated with multiple endpoint groups.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "trafficPercentage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TrafficPercentage
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
