using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudfw
{
    /// <summary>Properties for defining a `Instance`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-instance
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.InstanceProps")]
    public interface IInstanceProps
    {
        /// <summary>Property payType: The billing method of the firewall instance.</summary>
        /// <remarks>
        /// Valid values:
        /// PayAsYouGo: pay-as-you-go
        /// Subscription: subscription
        /// </remarks>
        [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PayType
        {
            get;
        }

        /// <summary>Property accountNum: The number of multi-account management and control is the number of member accounts that you need to uniformly control.</summary>
        [JsiiProperty(name: "accountNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccountNum
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property aclExtension: When the default access control authorization specifications of your version are not enough, you can purchase global extension specifications of access control.</summary>
        /// <remarks>
        /// This extension supports shared occupancy with Internet and VPC boundary ACL specifications.
        /// </remarks>
        [JsiiProperty(name: "aclExtension", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AclExtension
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoPay: Whether to auto pay the bill.</summary>
        [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoPay
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoRenew: Whether to auto renew the prepay instance.</summary>
        [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoRenew
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property bandwidth: Public network processing capability.</summary>
        /// <remarks>
        /// Valid values: 10 to 15000. Unit: Mbps.
        /// </remarks>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Bandwidth
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ignoreExisting: Whether to ignore existing cloud firewall instance False: ROS will perform a uniqueness check.If the cloud firewall instance exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If the cloud firewall instance exists, the creation process will be ignored. If the cloud firewall instance is not created by ROS, it will be ignored during update and delete stage.</summary>
        [JsiiProperty(name: "ignoreExisting", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IgnoreExisting
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ipNum: The number of public IPs that can be protected.</summary>
        /// <remarks>
        /// Valid values: 20 to 4000.PremiumVersion: [20, 1000]
        /// </remarks>
        [JsiiProperty(name: "ipNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IpNum
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property logAnalysis: The cloud firewall includes 7 days of free log storage and auditing by default.</summary>
        /// <remarks>
        /// If you need longer storage time or meet the requirements for equal protection, it is recommended to purchase the log analysis service.
        /// </remarks>
        [JsiiProperty(name: "logAnalysis", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LogAnalysis
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property logStorage: Reference for purchasing storage capacity: 10M public network bandwidth, 6 months of log storage, recommended purchase of 1000GB log storage capacity.</summary>
        [JsiiProperty(name: "logStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LogStorage
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property multiAccountManagement: Multiple accounts on the enterprise cloud can be managed centrally on the cloud firewall, including asset inventory, ACL policies, attack protection, log reports, etc.</summary>
        /// <remarks>
        /// After the member account is managed by the current account, there will be no need to purchase it separately.
        /// </remarks>
        [JsiiProperty(name: "multiAccountManagement", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MultiAccountManagement
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property natBandwidth: The bandwidth of private network traffic processed by the NAT firewall.</summary>
        /// <remarks>
        /// The premium version does not include it by default, the enterprise version has 10Mbps by default, and the ultimate version has 20Mbps by default.
        /// </remarks>
        [JsiiProperty(name: "natBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NatBandwidth
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property natFirewallNum: The number of NAT gateway instances of the NAT firewall you need to enable.</summary>
        /// <remarks>
        /// Each NAT gateway instance corresponds to one NAT firewall instance. The premium version does not include it by default, the enterprise version comes with 1 specification by default,and the ultimate version comes with 2 specifications by default.
        /// </remarks>
        [JsiiProperty(name: "natFirewallNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NatFirewallNum
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: The subscription period of the firewallIf PeriodUnit is month, the valid range is 1, 3, 6 If periodUnit is year, the valid range is 1, 2, 3.</summary>
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Period
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property periodUnit: The unit of the subscription duration.</summary>
        /// <remarks>
        /// Valid values:
        /// Month
        /// Year
        /// Default value: Month.
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

        /// <summary>Property spec: The version of Cloud Firewall.</summary>
        [JsiiProperty(name: "spec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Spec
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcBandwidth: VPC network processing capability.</summary>
        /// <remarks>
        /// Valid values: 1000 to 15000. Unit: Mbps.
        /// </remarks>
        [JsiiProperty(name: "vpcBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcBandwidth
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcFirewallNum: The number of protected VPCs.</summary>
        /// <remarks>
        /// It will be ignored when spec = "premium_version". Valid values between 2 and 500.
        /// </remarks>
        [JsiiProperty(name: "vpcFirewallNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcFirewallNum
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Instance`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-instance
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.InstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudfw.IInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property payType: The billing method of the firewall instance.</summary>
            /// <remarks>
            /// Valid values:
            /// PayAsYouGo: pay-as-you-go
            /// Subscription: subscription
            /// </remarks>
            [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PayType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property accountNum: The number of multi-account management and control is the number of member accounts that you need to uniformly control.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "accountNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccountNum
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property aclExtension: When the default access control authorization specifications of your version are not enough, you can purchase global extension specifications of access control.</summary>
            /// <remarks>
            /// This extension supports shared occupancy with Internet and VPC boundary ACL specifications.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "aclExtension", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AclExtension
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoPay: Whether to auto pay the bill.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoPay
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoRenew: Whether to auto renew the prepay instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenew
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property bandwidth: Public network processing capability.</summary>
            /// <remarks>
            /// Valid values: 10 to 15000. Unit: Mbps.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Bandwidth
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ignoreExisting: Whether to ignore existing cloud firewall instance False: ROS will perform a uniqueness check.If the cloud firewall instance exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If the cloud firewall instance exists, the creation process will be ignored. If the cloud firewall instance is not created by ROS, it will be ignored during update and delete stage.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ignoreExisting", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IgnoreExisting
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipNum: The number of public IPs that can be protected.</summary>
            /// <remarks>
            /// Valid values: 20 to 4000.PremiumVersion: [20, 1000]
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IpNum
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property logAnalysis: The cloud firewall includes 7 days of free log storage and auditing by default.</summary>
            /// <remarks>
            /// If you need longer storage time or meet the requirements for equal protection, it is recommended to purchase the log analysis service.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "logAnalysis", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LogAnalysis
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property logStorage: Reference for purchasing storage capacity: 10M public network bandwidth, 6 months of log storage, recommended purchase of 1000GB log storage capacity.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "logStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LogStorage
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property multiAccountManagement: Multiple accounts on the enterprise cloud can be managed centrally on the cloud firewall, including asset inventory, ACL policies, attack protection, log reports, etc.</summary>
            /// <remarks>
            /// After the member account is managed by the current account, there will be no need to purchase it separately.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "multiAccountManagement", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MultiAccountManagement
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property natBandwidth: The bandwidth of private network traffic processed by the NAT firewall.</summary>
            /// <remarks>
            /// The premium version does not include it by default, the enterprise version has 10Mbps by default, and the ultimate version has 20Mbps by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "natBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NatBandwidth
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property natFirewallNum: The number of NAT gateway instances of the NAT firewall you need to enable.</summary>
            /// <remarks>
            /// Each NAT gateway instance corresponds to one NAT firewall instance. The premium version does not include it by default, the enterprise version comes with 1 specification by default,and the ultimate version comes with 2 specifications by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "natFirewallNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NatFirewallNum
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property period: The subscription period of the firewallIf PeriodUnit is month, the valid range is 1, 3, 6 If periodUnit is year, the valid range is 1, 2, 3.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property periodUnit: The unit of the subscription duration.</summary>
            /// <remarks>
            /// Valid values:
            /// Month
            /// Year
            /// Default value: Month.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PeriodUnit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property spec: The version of Cloud Firewall.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "spec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Spec
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vpcBandwidth: VPC network processing capability.</summary>
            /// <remarks>
            /// Valid values: 1000 to 15000. Unit: Mbps.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcBandwidth
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vpcFirewallNum: The number of protected VPCs.</summary>
            /// <remarks>
            /// It will be ignored when spec = "premium_version". Valid values between 2 and 500.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcFirewallNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcFirewallNum
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
