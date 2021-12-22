using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Privatelink
{
    /// <summary>Properties for defining a `ALIYUN::PrivateLink::VpcEndpointService`.</summary>
    [JsiiInterface(nativeType: typeof(IVpcEndpointServiceProps), fullyQualifiedName: "@alicloud/ros-cdk-privatelink.VpcEndpointServiceProps")]
    public interface IVpcEndpointServiceProps
    {
        /// <summary>Property autoAcceptEnabled: Specifies whether to automatically accept endpoint connection requests.</summary>
        /// <remarks>
        /// Valid values:
        /// true: automatically accepts endpoint connection requests.
        /// false: does not automatically accept endpoint connection requests.
        /// </remarks>
        [JsiiProperty(name: "autoAcceptEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoAcceptEnabled
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property connectBandwidth: The default maximum bandwidth of the endpoint connection.</summary>
        /// <remarks>
        /// Valid values: 100 to 1024. Unit: Mbit/s.
        /// </remarks>
        [JsiiProperty(name: "connectBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ConnectBandwidth
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property payer: The payer of the endpoint service.</summary>
        /// <remarks>
        /// Valid values:
        /// Endpoint: the service consumer.
        /// EndpointService: the service provider.
        /// </remarks>
        [JsiiProperty(name: "payer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Payer
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resource:.</summary>
        [JsiiProperty(name: "resource", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-privatelink.RosVpcEndpointService.ResourceProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Resource
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property serviceDescription: The description for the endpoint service.</summary>
        [JsiiProperty(name: "serviceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServiceDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property user: Account IDs to the whitelist of an endpoint service.</summary>
        [JsiiProperty(name: "user", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? User
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property zoneAffinityEnabled: Specifies whether to resolve domain names to IP addresses in the nearest zone.</summary>
        /// <remarks>
        /// true: yes.
        /// false (default): no
        /// </remarks>
        [JsiiProperty(name: "zoneAffinityEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ZoneAffinityEnabled
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::PrivateLink::VpcEndpointService`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IVpcEndpointServiceProps), fullyQualifiedName: "@alicloud/ros-cdk-privatelink.VpcEndpointServiceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Privatelink.IVpcEndpointServiceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property autoAcceptEnabled: Specifies whether to automatically accept endpoint connection requests.</summary>
            /// <remarks>
            /// Valid values:
            /// true: automatically accepts endpoint connection requests.
            /// false: does not automatically accept endpoint connection requests.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoAcceptEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoAcceptEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property connectBandwidth: The default maximum bandwidth of the endpoint connection.</summary>
            /// <remarks>
            /// Valid values: 100 to 1024. Unit: Mbit/s.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "connectBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ConnectBandwidth
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property payer: The payer of the endpoint service.</summary>
            /// <remarks>
            /// Valid values:
            /// Endpoint: the service consumer.
            /// EndpointService: the service provider.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "payer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Payer
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resource:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resource", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-privatelink.RosVpcEndpointService.ResourceProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Resource
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property serviceDescription: The description for the endpoint service.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "serviceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServiceDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property user: Account IDs to the whitelist of an endpoint service.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "user", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? User
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property zoneAffinityEnabled: Specifies whether to resolve domain names to IP addresses in the nearest zone.</summary>
            /// <remarks>
            /// true: yes.
            /// false (default): no
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "zoneAffinityEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ZoneAffinityEnabled
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
