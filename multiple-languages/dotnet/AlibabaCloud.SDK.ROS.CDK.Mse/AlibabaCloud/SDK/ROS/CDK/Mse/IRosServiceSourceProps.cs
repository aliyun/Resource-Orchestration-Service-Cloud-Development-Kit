using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mse
{
    /// <summary>Properties for defining a `ALIYUN::MSE::ServiceSource`.</summary>
    [JsiiInterface(nativeType: typeof(IRosServiceSourceProps), fullyQualifiedName: "@alicloud/ros-cdk-mse.RosServiceSourceProps")]
    public interface IRosServiceSourceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: gatewayUniqueId: The unique ID of the gateway.
        /// </remarks>
        [JsiiProperty(name: "gatewayUniqueId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GatewayUniqueId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name.
        /// If Source=K8S, this parameter specifies the name of the ACK cluster.
        /// If Source=MSE, this parameter specifies the ID of the Nacos instance.
        /// If Source=MSE_ZK, this parameter specifies the ID of the ZooKeeper instance.
        /// If Source=EDAS, this parameter specifies the ID of the EDAS namespace.
        /// If Source=SAE, this parameter specifies the ID of the SAE namespace.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: source: The service source. Valid values:
        /// K8S: ACK cluster
        /// MSE: MSE Nacos instance
        /// </remarks>
        [JsiiProperty(name: "source", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Source
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: address: Registration Address. If not specified, it will be automatically generated based on the selected instance.
        /// </remarks>
        [JsiiProperty(name: "address", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Address
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: groupList: The list of service groups. This is required when Source=EDAS.
        /// </remarks>
        [JsiiProperty(name: "groupList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GroupList
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: ingressOptions: The Ingress configuration.
        /// </remarks>
        [JsiiProperty(name: "ingressOptions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mse.RosServiceSource.IngressOptionsProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IngressOptions
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: pathList: An array of service root paths.
        /// </remarks>
        [JsiiProperty(name: "pathList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PathList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::MSE::ServiceSource`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosServiceSourceProps), fullyQualifiedName: "@alicloud/ros-cdk-mse.RosServiceSourceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mse.IRosServiceSourceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: gatewayUniqueId: The unique ID of the gateway.
            /// </remarks>
            [JsiiProperty(name: "gatewayUniqueId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GatewayUniqueId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name.
            /// If Source=K8S, this parameter specifies the name of the ACK cluster.
            /// If Source=MSE, this parameter specifies the ID of the Nacos instance.
            /// If Source=MSE_ZK, this parameter specifies the ID of the ZooKeeper instance.
            /// If Source=EDAS, this parameter specifies the ID of the EDAS namespace.
            /// If Source=SAE, this parameter specifies the ID of the SAE namespace.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: source: The service source. Valid values:
            /// K8S: ACK cluster
            /// MSE: MSE Nacos instance
            /// </remarks>
            [JsiiProperty(name: "source", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Source
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: address: Registration Address. If not specified, it will be automatically generated based on the selected instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "address", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Address
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: groupList: The list of service groups. This is required when Source=EDAS.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "groupList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GroupList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ingressOptions: The Ingress configuration.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ingressOptions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mse.RosServiceSource.IngressOptionsProperty\"}]}}", isOptional: true)]
            public object? IngressOptions
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: pathList: An array of service root paths.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pathList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PathList
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
