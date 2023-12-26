using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mse
{
    /// <summary>Properties for defining a `ServiceSource`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-servicesource
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IServiceSourceProps), fullyQualifiedName: "@alicloud/ros-cdk-mse.ServiceSourceProps")]
    public interface IServiceSourceProps
    {
        /// <summary>Property gatewayUniqueId: The unique ID of the gateway.</summary>
        [JsiiProperty(name: "gatewayUniqueId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GatewayUniqueId
        {
            get;
        }

        /// <summary>Property name: The name.</summary>
        /// <remarks>
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

        /// <summary>Property source: The service source.</summary>
        /// <remarks>
        /// Valid values:
        /// K8S: ACK cluster
        /// MSE: MSE Nacos instance
        /// </remarks>
        [JsiiProperty(name: "source", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Source
        {
            get;
        }

        /// <summary>Property address: Registration Address.</summary>
        /// <remarks>
        /// If not specified, it will be automatically generated based on the selected instance.
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

        /// <summary>Property groupList: The list of service groups.</summary>
        /// <remarks>
        /// This is required when Source=EDAS.
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

        /// <summary>Property ingressOptions: The Ingress configuration.</summary>
        [JsiiProperty(name: "ingressOptions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mse.RosServiceSource.IngressOptionsProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IngressOptions
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property pathList: An array of service root paths.</summary>
        [JsiiProperty(name: "pathList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PathList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ServiceSource`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-servicesource
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IServiceSourceProps), fullyQualifiedName: "@alicloud/ros-cdk-mse.ServiceSourceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mse.IServiceSourceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property gatewayUniqueId: The unique ID of the gateway.</summary>
            [JsiiProperty(name: "gatewayUniqueId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GatewayUniqueId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property name: The name.</summary>
            /// <remarks>
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

            /// <summary>Property source: The service source.</summary>
            /// <remarks>
            /// Valid values:
            /// K8S: ACK cluster
            /// MSE: MSE Nacos instance
            /// </remarks>
            [JsiiProperty(name: "source", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Source
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property address: Registration Address.</summary>
            /// <remarks>
            /// If not specified, it will be automatically generated based on the selected instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "address", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Address
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property groupList: The list of service groups.</summary>
            /// <remarks>
            /// This is required when Source=EDAS.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "groupList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GroupList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ingressOptions: The Ingress configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ingressOptions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mse.RosServiceSource.IngressOptionsProperty\"}]}}", isOptional: true)]
            public object? IngressOptions
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property pathList: An array of service root paths.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "pathList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PathList
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
