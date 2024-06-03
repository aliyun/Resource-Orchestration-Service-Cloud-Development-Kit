using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ddospro
{
    /// <summary>Properties for defining a `RosPort`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-port
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosPortProps), fullyQualifiedName: "@alicloud/ros-cdk-ddospro.RosPortProps")]
    public interface IRosPortProps
    {
        /// <remarks>
        /// <strong>Property</strong>: frontendProtocol: The type of the protocol. Valid values:
        /// tcp
        /// udp
        /// </remarks>
        [JsiiProperty(name: "frontendProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FrontendProtocol
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the Anti-DDoS Pro or Anti-DDoS Premium instance to which the port forwarding rule belongs.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: realServers: An array that consists of the IP addresses of origin servers.
        /// </remarks>
        [JsiiProperty(name: "realServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object RealServers
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: backendPort: The port of the origin server. Valid values: 0 to 65535.
        /// </remarks>
        [JsiiProperty(name: "backendPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BackendPort
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: frontendPort: The forwarding port. Valid values: 0 to 65535.
        /// </remarks>
        [JsiiProperty(name: "frontendPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FrontendPort
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosPort`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-port
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosPortProps), fullyQualifiedName: "@alicloud/ros-cdk-ddospro.RosPortProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ddospro.IRosPortProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: frontendProtocol: The type of the protocol. Valid values:
            /// tcp
            /// udp
            /// </remarks>
            [JsiiProperty(name: "frontendProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FrontendProtocol
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of the Anti-DDoS Pro or Anti-DDoS Premium instance to which the port forwarding rule belongs.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: realServers: An array that consists of the IP addresses of origin servers.
            /// </remarks>
            [JsiiProperty(name: "realServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object RealServers
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: backendPort: The port of the origin server. Valid values: 0 to 65535.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "backendPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BackendPort
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: frontendPort: The forwarding port. Valid values: 0 to 65535.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "frontendPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FrontendPort
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
