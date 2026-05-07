using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apig
{
    /// <summary>Properties for defining a `Consumer`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-consumer
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IConsumerProps), fullyQualifiedName: "@alicloud/ros-cdk-apig.ConsumerProps")]
    public interface IConsumerProps
    {
        /// <summary>Property akSkIdentityConfigs: List of AK\/SK identity configurations.</summary>
        [JsiiProperty(name: "akSkIdentityConfigs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosConsumer.AkSkIdentityConfigsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AkSkIdentityConfigs
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property apikeyIdentityConfig: API key identity configuration.</summary>
        [JsiiProperty(name: "apikeyIdentityConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosConsumer.ApikeyIdentityConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ApikeyIdentityConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the consumer.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enable: Whether to enable the consumer.</summary>
        [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Enable
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property gatewayType: The type of the gateway.</summary>
        [JsiiProperty(name: "gatewayType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GatewayType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property jwtIdentityConfig: JWT identity configuration.</summary>
        [JsiiProperty(name: "jwtIdentityConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosConsumer.JwtIdentityConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? JwtIdentityConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property name: The name of the consumer.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Name
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Consumer`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-consumer
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IConsumerProps), fullyQualifiedName: "@alicloud/ros-cdk-apig.ConsumerProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apig.IConsumerProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property akSkIdentityConfigs: List of AK\/SK identity configurations.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "akSkIdentityConfigs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosConsumer.AkSkIdentityConfigsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? AkSkIdentityConfigs
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property apikeyIdentityConfig: API key identity configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "apikeyIdentityConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosConsumer.ApikeyIdentityConfigProperty\"}]}}", isOptional: true)]
            public object? ApikeyIdentityConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the consumer.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enable: Whether to enable the consumer.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Enable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property gatewayType: The type of the gateway.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "gatewayType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GatewayType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property jwtIdentityConfig: JWT identity configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "jwtIdentityConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosConsumer.JwtIdentityConfigProperty\"}]}}", isOptional: true)]
            public object? JwtIdentityConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property name: The name of the consumer.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
