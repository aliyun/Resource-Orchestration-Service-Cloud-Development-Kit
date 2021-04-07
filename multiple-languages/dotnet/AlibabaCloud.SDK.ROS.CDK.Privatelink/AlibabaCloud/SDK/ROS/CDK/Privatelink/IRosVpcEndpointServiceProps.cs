using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Privatelink
{
    /// <summary>Properties for defining a `ALIYUN::PrivateLink::VpcEndpointService`.</summary>
    [JsiiInterface(nativeType: typeof(IRosVpcEndpointServiceProps), fullyQualifiedName: "@alicloud/ros-cdk-privatelink.RosVpcEndpointServiceProps")]
    public interface IRosVpcEndpointServiceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: autoAcceptEnabled: Specifies whether to automatically accept endpoint connection requests. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: connectBandwidth: The default maximum bandwidth of the endpoint connection. Valid values: 100 to 1024. Unit: Mbit/s.
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

        /// <remarks>
        /// <strong>Property</strong>: resource:
        /// </remarks>
        [JsiiProperty(name: "resource", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-privatelink.RosVpcEndpointService.ResourceProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Resource
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceDescription: The description for the endpoint service.
        /// </remarks>
        [JsiiProperty(name: "serviceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServiceDescription
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: user: Account IDs to the whitelist of an endpoint service.
        /// </remarks>
        [JsiiProperty(name: "user", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? User
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::PrivateLink::VpcEndpointService`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosVpcEndpointServiceProps), fullyQualifiedName: "@alicloud/ros-cdk-privatelink.RosVpcEndpointServiceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Privatelink.IRosVpcEndpointServiceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: autoAcceptEnabled: Specifies whether to automatically accept endpoint connection requests. Valid values:
            /// true: automatically accepts endpoint connection requests.
            /// false: does not automatically accept endpoint connection requests.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoAcceptEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoAcceptEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: connectBandwidth: The default maximum bandwidth of the endpoint connection. Valid values: 100 to 1024. Unit: Mbit/s.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "connectBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ConnectBandwidth
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resource:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resource", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-privatelink.RosVpcEndpointService.ResourceProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Resource
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceDescription: The description for the endpoint service.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serviceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServiceDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: user: Account IDs to the whitelist of an endpoint service.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "user", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? User
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
