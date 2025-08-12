using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mse
{
    /// <summary>Properties for defining a `Gateway2`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gateway2
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IGateway2Props), fullyQualifiedName: "@alicloud/ros-cdk-mse.Gateway2Props")]
    public interface IGateway2Props
    {
        /// <summary>Property vpcId: The ID of the vpc.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Property acceptLanguage: The language of the response.</summary>
        /// <remarks>
        /// Valid values:
        /// zh: Chinese
        /// en: English
        /// </remarks>
        [JsiiProperty(name: "acceptLanguage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AcceptLanguage
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property chargeType: The billing method you specify when you purchase an normal instance.</summary>
        /// <remarks>
        /// Valid values:
        /// PREPAY: subscription
        /// POSTPAY: pay-as-you-go
        /// </remarks>
        [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property clbNetworkType: The network type of the purchased Classic Load Balancer (CLB) instance that is billed based on LCUs.</summary>
        /// <remarks>
        /// pubnet: Internet
        /// privatenet: private network
        /// privatepubnet: Internet and private network
        /// </remarks>
        [JsiiProperty(name: "clbNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ClbNetworkType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableHardwareAcceleration: Specifies whether to activate Tracing Analysis.</summary>
        [JsiiProperty(name: "enableHardwareAcceleration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableHardwareAcceleration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableSls: Specifies whether to activate Log Service.</summary>
        [JsiiProperty(name: "enableSls", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableSls
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableXtrace: Whether to activate Tracing Analysis.</summary>
        [JsiiProperty(name: "enableXtrace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableXtrace
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enterpriseSecurityGroup: Specifies whether to enable hardware acceleration.</summary>
        [JsiiProperty(name: "enterpriseSecurityGroup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnterpriseSecurityGroup
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property internetSlb: Public network SLB specifications (for normal instances).</summary>
        /// <remarks>
        /// Simple type (slb.s1.small)
        /// Standard type 1 (slb.s2.smal)
        /// Standard type I(slb.s2.medium)
        /// Advanced Type 1 (slb.s3.small)
        /// Advanced I(slb.s3.medium)
        /// Super strong type I (slb.s3.large)
        /// Description Traditional example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU, and CLB specifications. Serverless example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU
        /// </remarks>
        [JsiiProperty(name: "internetSlb", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InternetSlb
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property managedEntryNetworkType: Gateway entrance type (applicable to the mse_premium instance) pubnet: public network privatenet: privatenet privatepubnet: public + private network.</summary>
        [JsiiProperty(name: "managedEntryNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ManagedEntryNetworkType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property mserVersion: The MSE gateway instance type.</summary>
        /// <remarks>
        /// Valid values:
        /// mse_pro: normal instance
        /// mse_premium: professional normal instancemse_serverless: serverless instance
        /// </remarks>
        [JsiiProperty(name: "mserVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MserVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property name: The name of the created gateway.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Name
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property nlbNetworkType: The network type of the Network Load Balancer (NLB) instance you specify when you purchase a serverless instance.</summary>
        /// <remarks>
        /// pubnet: Internet
        /// privatenet: private network
        /// privatepubnet: Internet and private network
        /// </remarks>
        [JsiiProperty(name: "nlbNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NlbNetworkType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: Prepaid time period.</summary>
        /// <remarks>
        /// While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3. This parameter is Only valid when updating from postpaid instance to prepaid instance.
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

        /// <summary>Property periodUnit: Charge period for created instances.</summary>
        /// <remarks>
        /// This parameter is only valid when updating from postpaid instance to prepaid instance.
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

        /// <summary>Property replica: The number of nodes you specify when you purchase an normal instance.</summary>
        /// <remarks>
        /// For high availability, the value for this param is recommended to be greater than 2.
        /// </remarks>
        [JsiiProperty(name: "replica", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Replica
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

        /// <summary>Property slbSpec: Private network SLB specifications (for normal instances).</summary>
        /// <remarks>
        /// Simple type (slb.s1.small)
        /// Standard type 1 (slb.s2.small)
        /// Standard type I(slb.s2.medium)
        /// Advanced Type 1 (slb.s3.small)
        /// Advanced I(slb.s3.medium)
        /// Super strong type I (slb.s3.large)
        /// Description Traditional example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU, and CLB specifications. Serverless example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU
        /// </remarks>
        [JsiiProperty(name: "slbSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SlbSpec
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property spec: The node specifications you specify when you purchase an normal instance.</summary>
        /// <remarks>
        /// Valid values:
        /// MSE_GTW_16_32_200_c(16C32G)
        /// MSE_GTW_2_4_200_c(2C4G)
        /// MSE_GTW_4_8_200_c(4C8G)
        /// MSE_GTW_8_16_200_c(8C16G)
        /// </remarks>
        [JsiiProperty(name: "spec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Spec
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: The list of tags in the form of key\/value pairs.</summary>
        /// <remarks>
        /// You can define a maximum of 20 tags.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-mse.RosGateway2.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Mse.RosGateway2.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchId: The primary VSwitch ID.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchId2: The secondary VSwitch ID.</summary>
        [JsiiProperty(name: "vSwitchId2", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchId2
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property xtraceRatio: The sampling rate of Tracing Analysis.</summary>
        /// <remarks>
        /// Valid values: [1,100]
        /// </remarks>
        [JsiiProperty(name: "xtraceRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? XtraceRatio
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property zoneInfo: The info details of the available zone.</summary>
        [JsiiProperty(name: "zoneInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mse.RosGateway2.ZoneInfoProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ZoneInfo
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Gateway2`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gateway2
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IGateway2Props), fullyQualifiedName: "@alicloud/ros-cdk-mse.Gateway2Props")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mse.IGateway2Props
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property vpcId: The ID of the vpc.</summary>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property acceptLanguage: The language of the response.</summary>
            /// <remarks>
            /// Valid values:
            /// zh: Chinese
            /// en: English
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "acceptLanguage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AcceptLanguage
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property chargeType: The billing method you specify when you purchase an normal instance.</summary>
            /// <remarks>
            /// Valid values:
            /// PREPAY: subscription
            /// POSTPAY: pay-as-you-go
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property clbNetworkType: The network type of the purchased Classic Load Balancer (CLB) instance that is billed based on LCUs.</summary>
            /// <remarks>
            /// pubnet: Internet
            /// privatenet: private network
            /// privatepubnet: Internet and private network
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "clbNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ClbNetworkType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableHardwareAcceleration: Specifies whether to activate Tracing Analysis.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "enableHardwareAcceleration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableHardwareAcceleration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableSls: Specifies whether to activate Log Service.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "enableSls", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableSls
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableXtrace: Whether to activate Tracing Analysis.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "enableXtrace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableXtrace
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enterpriseSecurityGroup: Specifies whether to enable hardware acceleration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "enterpriseSecurityGroup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnterpriseSecurityGroup
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property internetSlb: Public network SLB specifications (for normal instances).</summary>
            /// <remarks>
            /// Simple type (slb.s1.small)
            /// Standard type 1 (slb.s2.smal)
            /// Standard type I(slb.s2.medium)
            /// Advanced Type 1 (slb.s3.small)
            /// Advanced I(slb.s3.medium)
            /// Super strong type I (slb.s3.large)
            /// Description Traditional example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU, and CLB specifications. Serverless example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "internetSlb", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InternetSlb
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property managedEntryNetworkType: Gateway entrance type (applicable to the mse_premium instance) pubnet: public network privatenet: privatenet privatepubnet: public + private network.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "managedEntryNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ManagedEntryNetworkType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property mserVersion: The MSE gateway instance type.</summary>
            /// <remarks>
            /// Valid values:
            /// mse_pro: normal instance
            /// mse_premium: professional normal instancemse_serverless: serverless instance
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mserVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MserVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property name: The name of the created gateway.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property nlbNetworkType: The network type of the Network Load Balancer (NLB) instance you specify when you purchase a serverless instance.</summary>
            /// <remarks>
            /// pubnet: Internet
            /// privatenet: private network
            /// privatepubnet: Internet and private network
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nlbNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NlbNetworkType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property period: Prepaid time period.</summary>
            /// <remarks>
            /// While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3. This parameter is Only valid when updating from postpaid instance to prepaid instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property periodUnit: Charge period for created instances.</summary>
            /// <remarks>
            /// This parameter is only valid when updating from postpaid instance to prepaid instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PeriodUnit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property replica: The number of nodes you specify when you purchase an normal instance.</summary>
            /// <remarks>
            /// For high availability, the value for this param is recommended to be greater than 2.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "replica", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Replica
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

            /// <summary>Property slbSpec: Private network SLB specifications (for normal instances).</summary>
            /// <remarks>
            /// Simple type (slb.s1.small)
            /// Standard type 1 (slb.s2.small)
            /// Standard type I(slb.s2.medium)
            /// Advanced Type 1 (slb.s3.small)
            /// Advanced I(slb.s3.medium)
            /// Super strong type I (slb.s3.large)
            /// Description Traditional example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU, and CLB specifications. Serverless example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "slbSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SlbSpec
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property spec: The node specifications you specify when you purchase an normal instance.</summary>
            /// <remarks>
            /// Valid values:
            /// MSE_GTW_16_32_200_c(16C32G)
            /// MSE_GTW_2_4_200_c(2C4G)
            /// MSE_GTW_4_8_200_c(4C8G)
            /// MSE_GTW_8_16_200_c(8C16G)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Spec
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: The list of tags in the form of key\/value pairs.</summary>
            /// <remarks>
            /// You can define a maximum of 20 tags.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-mse.RosGateway2.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Mse.RosGateway2.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Mse.RosGateway2.ITagsProperty[]?>();
            }

            /// <summary>Property vSwitchId: The primary VSwitch ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vSwitchId2: The secondary VSwitch ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId2", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchId2
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property xtraceRatio: The sampling rate of Tracing Analysis.</summary>
            /// <remarks>
            /// Valid values: [1,100]
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xtraceRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? XtraceRatio
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property zoneInfo: The info details of the available zone.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "zoneInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mse.RosGateway2.ZoneInfoProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ZoneInfo
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
