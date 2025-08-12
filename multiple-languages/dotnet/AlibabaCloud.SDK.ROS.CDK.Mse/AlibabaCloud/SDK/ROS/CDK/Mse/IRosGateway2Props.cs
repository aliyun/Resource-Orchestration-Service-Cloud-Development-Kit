using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mse
{
    /// <summary>Properties for defining a `RosGateway2`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gateway2
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosGateway2Props), fullyQualifiedName: "@alicloud/ros-cdk-mse.RosGateway2Props")]
    public interface IRosGateway2Props
    {
        /// <remarks>
        /// <strong>Property</strong>: vpcId: The ID of the vpc.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: acceptLanguage: The language of the response. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: chargeType: The billing method you specify when you purchase an normal instance.
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

        /// <remarks>
        /// <strong>Property</strong>: clbNetworkType: The network type of the purchased Classic Load Balancer (CLB) instance that is billed based on LCUs.
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

        /// <remarks>
        /// <strong>Property</strong>: enableHardwareAcceleration: Specifies whether to activate Tracing Analysis.
        /// </remarks>
        [JsiiProperty(name: "enableHardwareAcceleration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableHardwareAcceleration
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: enableSls: Specifies whether to activate Log Service.
        /// </remarks>
        [JsiiProperty(name: "enableSls", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableSls
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: enableXtrace: Whether to activate Tracing Analysis.
        /// </remarks>
        [JsiiProperty(name: "enableXtrace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableXtrace
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: enterpriseSecurityGroup: Specifies whether to enable hardware acceleration.
        /// </remarks>
        [JsiiProperty(name: "enterpriseSecurityGroup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnterpriseSecurityGroup
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: internetSlb: Public network SLB specifications (for normal instances).
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

        /// <remarks>
        /// <strong>Property</strong>: managedEntryNetworkType: Gateway entrance type (applicable to the mse_premium instance)
        /// pubnet: public network
        /// privatenet: privatenet
        /// privatepubnet: public + private network
        /// </remarks>
        [JsiiProperty(name: "managedEntryNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ManagedEntryNetworkType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: mserVersion: The MSE gateway instance type. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the created gateway.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Name
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: nlbNetworkType: The network type of the Network Load Balancer (NLB) instance you specify when you purchase a serverless instance.
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

        /// <remarks>
        /// <strong>Property</strong>: period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3. This parameter is Only valid when updating from postpaid instance to prepaid instance.
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

        /// <remarks>
        /// <strong>Property</strong>: periodUnit: Charge period for created instances. This parameter is only valid when updating from postpaid instance to prepaid instance.
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

        /// <remarks>
        /// <strong>Property</strong>: replica: The number of nodes you specify when you purchase an normal instance. For high availability, the value for this param is recommended to be greater than 2.
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

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: slbSpec: Private network SLB specifications (for normal instances).
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

        /// <remarks>
        /// <strong>Property</strong>: spec: The node specifications you specify when you purchase an normal instance. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: tags: The list of tags in the form of key\/value pairs. You can define a maximum of 20 tags.
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

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: The primary VSwitch ID.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId2: The secondary VSwitch ID.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId2", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchId2
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: xtraceRatio: The sampling rate of Tracing Analysis. Valid values: [1,100]
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

        /// <remarks>
        /// <strong>Property</strong>: zoneInfo: The info details of the available zone.
        /// </remarks>
        [JsiiProperty(name: "zoneInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mse.RosGateway2.ZoneInfoProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ZoneInfo
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosGateway2`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gateway2
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosGateway2Props), fullyQualifiedName: "@alicloud/ros-cdk-mse.RosGateway2Props")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mse.IRosGateway2Props
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: The ID of the vpc.
            /// </remarks>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: acceptLanguage: The language of the response. Valid values:
            /// zh: Chinese
            /// en: English
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "acceptLanguage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AcceptLanguage
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: chargeType: The billing method you specify when you purchase an normal instance.
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

            /// <remarks>
            /// <strong>Property</strong>: clbNetworkType: The network type of the purchased Classic Load Balancer (CLB) instance that is billed based on LCUs.
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

            /// <remarks>
            /// <strong>Property</strong>: enableHardwareAcceleration: Specifies whether to activate Tracing Analysis.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableHardwareAcceleration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableHardwareAcceleration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: enableSls: Specifies whether to activate Log Service.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableSls", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableSls
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: enableXtrace: Whether to activate Tracing Analysis.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableXtrace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableXtrace
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: enterpriseSecurityGroup: Specifies whether to enable hardware acceleration.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enterpriseSecurityGroup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnterpriseSecurityGroup
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: internetSlb: Public network SLB specifications (for normal instances).
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

            /// <remarks>
            /// <strong>Property</strong>: managedEntryNetworkType: Gateway entrance type (applicable to the mse_premium instance)
            /// pubnet: public network
            /// privatenet: privatenet
            /// privatepubnet: public + private network
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "managedEntryNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ManagedEntryNetworkType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: mserVersion: The MSE gateway instance type. Valid values:
            /// mse_pro: normal instance
            /// mse_premium: professional normal instancemse_serverless: serverless instance
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mserVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MserVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the created gateway.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: nlbNetworkType: The network type of the Network Load Balancer (NLB) instance you specify when you purchase a serverless instance.
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

            /// <remarks>
            /// <strong>Property</strong>: period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3. This parameter is Only valid when updating from postpaid instance to prepaid instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: periodUnit: Charge period for created instances. This parameter is only valid when updating from postpaid instance to prepaid instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PeriodUnit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: replica: The number of nodes you specify when you purchase an normal instance. For high availability, the value for this param is recommended to be greater than 2.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "replica", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Replica
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of the resource group
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: slbSpec: Private network SLB specifications (for normal instances).
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

            /// <remarks>
            /// <strong>Property</strong>: spec: The node specifications you specify when you purchase an normal instance. Valid values:
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

            /// <remarks>
            /// <strong>Property</strong>: tags: The list of tags in the form of key\/value pairs. You can define a maximum of 20 tags.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-mse.RosGateway2.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Mse.RosGateway2.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Mse.RosGateway2.ITagsProperty[]?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchId: The primary VSwitch ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchId2: The secondary VSwitch ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId2", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchId2
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: xtraceRatio: The sampling rate of Tracing Analysis. Valid values: [1,100]
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xtraceRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? XtraceRatio
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: zoneInfo: The info details of the available zone.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "zoneInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mse.RosGateway2.ZoneInfoProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ZoneInfo
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
