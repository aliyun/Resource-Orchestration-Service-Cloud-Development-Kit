using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apig
{
    /// <summary>Properties for defining a `Gateway`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-gateway
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IGatewayProps), fullyQualifiedName: "@alicloud/ros-cdk-apig.GatewayProps")]
    public interface IGatewayProps
    {
        /// <summary>Property gatewayName: The name of the Gateway.</summary>
        [JsiiProperty(name: "gatewayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GatewayName
        {
            get;
        }

        /// <summary>Property networkAccessConfig: Network Access Configuration.</summary>
        [JsiiProperty(name: "networkAccessConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosGateway.NetworkAccessConfigProperty\"}]}}")]
        object NetworkAccessConfig
        {
            get;
        }

        /// <summary>Property paymentType: The payment type of the gateway.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>PayAsYouGo</description>
        /// <description>Subscription</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "paymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PaymentType
        {
            get;
        }

        /// <summary>Property spec: Gateway instance specifications.</summary>
        [JsiiProperty(name: "spec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Spec
        {
            get;
        }

        /// <summary>Property zoneConfig: Availability Zone Configuration.</summary>
        [JsiiProperty(name: "zoneConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosGateway.ZoneConfigProperty\"}]}}")]
        object ZoneConfig
        {
            get;
        }

        /// <summary>Property gatewayType: Describes the gateway type, which is categorized into the following two types: * API: indicates an API gateway * AI: Indicates an AI gateway.</summary>
        /// <remarks>
        /// Default value: API.
        /// </remarks>
        [JsiiProperty(name: "gatewayType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GatewayType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property logConfig: Log Configuration.</summary>
        [JsiiProperty(name: "logConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosGateway.LogConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LogConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: The purchase time of the gateway.</summary>
        /// <remarks>
        /// This parameter is only valid when updating PaymentType from PayAsYouGo to Subscription.
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Period
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property periodUnit: The unit of the purchase time of the gateway.</summary>
        /// <remarks>
        /// This parameter is only valid when updating PaymentType from PayAsYouGo to Subscription.
        /// </remarks>
        [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PeriodUnit
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags of The tags of the Gateway..</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-apig.RosGateway.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Apig.RosGateway.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpc: The VPC associated with the Gateway.</summary>
        [JsiiProperty(name: "vpc", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosGateway.VpcProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Vpc
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitch: The virtual switch associated with the Gateway.</summary>
        [JsiiProperty(name: "vSwitch", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosGateway.VSwitchProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitch
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Gateway`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-gateway
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IGatewayProps), fullyQualifiedName: "@alicloud/ros-cdk-apig.GatewayProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apig.IGatewayProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property gatewayName: The name of the Gateway.</summary>
            [JsiiProperty(name: "gatewayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GatewayName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property networkAccessConfig: Network Access Configuration.</summary>
            [JsiiProperty(name: "networkAccessConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosGateway.NetworkAccessConfigProperty\"}]}}")]
            public object NetworkAccessConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property paymentType: The payment type of the gateway.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>PayAsYouGo</description>
            /// <description>Subscription</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "paymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PaymentType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property spec: Gateway instance specifications.</summary>
            [JsiiProperty(name: "spec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Spec
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property zoneConfig: Availability Zone Configuration.</summary>
            [JsiiProperty(name: "zoneConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosGateway.ZoneConfigProperty\"}]}}")]
            public object ZoneConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property gatewayType: Describes the gateway type, which is categorized into the following two types: * API: indicates an API gateway * AI: Indicates an AI gateway.</summary>
            /// <remarks>
            /// Default value: API.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "gatewayType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GatewayType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property logConfig: Log Configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "logConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosGateway.LogConfigProperty\"}]}}", isOptional: true)]
            public object? LogConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property period: The purchase time of the gateway.</summary>
            /// <remarks>
            /// This parameter is only valid when updating PaymentType from PayAsYouGo to Subscription.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property periodUnit: The unit of the purchase time of the gateway.</summary>
            /// <remarks>
            /// This parameter is only valid when updating PaymentType from PayAsYouGo to Subscription.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PeriodUnit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags of The tags of the Gateway..</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-apig.RosGateway.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Apig.RosGateway.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Apig.RosGateway.ITagsProperty[]?>();
            }

            /// <summary>Property vpc: The VPC associated with the Gateway.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vpc", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosGateway.VpcProperty\"}]}}", isOptional: true)]
            public object? Vpc
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vSwitch: The virtual switch associated with the Gateway.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitch", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosGateway.VSwitchProperty\"}]}}", isOptional: true)]
            public object? VSwitch
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
