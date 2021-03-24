using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    /// <summary>Properties for defining a `ALIYUN::SLB::LoadBalancer`.</summary>
    [JsiiInterface(nativeType: typeof(ILoadBalancerProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.LoadBalancerProps")]
    public interface ILoadBalancerProps
    {
        /// <summary>Property addressType: Loader balancer address type.</summary>
        /// <remarks>
        /// Support 'internet' and 'intranet' only, default is 'internet'.
        /// </remarks>
        [JsiiProperty(name: "addressType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AddressType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoPay: Optional.</summary>
        /// <remarks>
        /// Indicates whether to automatically pay the bill for the Subscription-billed Internet instance to be created.
        /// Valid values: true | false (default value)
        /// </remarks>
        [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoPay
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property bandwidth: The bandwidth for network, unit in Mbps(Mega bit per second).</summary>
        /// <remarks>
        /// Range is 1 to 1000, default is 1. If InternetChargeType is specified as "paybytraffic", this property will be ignore and please specify the "Bandwidth" in ALIYUN::SLB::Listener.
        /// </remarks>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Bandwidth
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property deletionProtection: Whether to enable deletion protection.</summary>
        [JsiiProperty(name: "deletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeletionProtection
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property duration: Optional.</summary>
        /// <remarks>
        /// The subscription duration of a Subscription Internet instance.
        /// Valid values:
        /// If PricingCycle is month, the valid range is 1 to 9.
        /// If PricingCycle is year, the value range is 1 to 3.
        /// </remarks>
        [JsiiProperty(name: "duration", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Duration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property internetChargeType: Instance internet access charge type.Support 'paybybandwidth' and 'paybytraffic' only. Default is 'paybytraffic'. If load balancer is created in VPC, the charge type will be set as 'paybytraffic' by default.</summary>
        [JsiiProperty(name: "internetChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? InternetChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property loadBalancerName: Name of created load balancer.</summary>
        /// <remarks>
        /// Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? LoadBalancerName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property loadBalancerSpec: The specification of the Server Load Balancer instance.</summary>
        /// <remarks>
        /// Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large|slb.s3.xlarge|slb.s3.xxlarge. Default value: slb.s1.small. The supported performance specification in each region is different, two specifications are supported in the US East 1 region. If the region does not support the performance-guaranteed instances, the value will not take effect.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerSpec", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? LoadBalancerSpec
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property masterZoneId: The master zone id to create load balancer instance.</summary>
        [JsiiProperty(name: "masterZoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? MasterZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property modificationProtectionReason: Set the reason for modifying the protection status.</summary>
        /// <remarks>
        /// The length is 1-80 English or Chinese characters, must start with upper and lower letters or Chinese, and can include numbers, periods (.), underscores (_) and dashes (-).
        /// Only valid when ModificationProtectionStatus is ConsoleProtection.
        /// </remarks>
        [JsiiProperty(name: "modificationProtectionReason", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ModificationProtectionReason
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property modificationProtectionStatus: NonProtection or empty: means no restriction on modification protection ConsoleProtection: Modify instance protection status by console Default value is empty.</summary>
        [JsiiProperty(name: "modificationProtectionStatus", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ModificationProtectionStatus
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property payType: Optional.</summary>
        /// <remarks>
        /// The billing method of the instance to be created.
        /// Valid value: PayOnDemand (Pay-As-You-Go) | PrePay (Subscription)
        /// </remarks>
        [JsiiProperty(name: "payType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PayType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property pricingCycle: Optional.</summary>
        /// <remarks>
        /// The duration of the Subscription-billed Internet instance to be created.
        /// Valid values: month | year.
        /// </remarks>
        [JsiiProperty(name: "pricingCycle", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PricingCycle
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: Resource group id.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property slaveZoneId: The slave zone id to create load balancer instance.</summary>
        [JsiiProperty(name: "slaveZoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SlaveZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to slb.</summary>
        /// <remarks>
        /// Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcId: The VPC id to create load balancer instance.</summary>
        /// <remarks>
        /// For VPC network only.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchId: The VSwitch id to create load balancer instance.</summary>
        /// <remarks>
        /// For VPC network only.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? VSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::SLB::LoadBalancer`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ILoadBalancerProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.LoadBalancerProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.ILoadBalancerProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property addressType: Loader balancer address type.</summary>
            /// <remarks>
            /// Support 'internet' and 'intranet' only, default is 'internet'.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "addressType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AddressType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property autoPay: Optional.</summary>
            /// <remarks>
            /// Indicates whether to automatically pay the bill for the Subscription-billed Internet instance to be created.
            /// Valid values: true | false (default value)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoPay
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property bandwidth: The bandwidth for network, unit in Mbps(Mega bit per second).</summary>
            /// <remarks>
            /// Range is 1 to 1000, default is 1. If InternetChargeType is specified as "paybytraffic", this property will be ignore and please specify the "Bandwidth" in ALIYUN::SLB::Listener.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bandwidth", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Bandwidth
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property deletionProtection: Whether to enable deletion protection.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "deletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeletionProtection
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property duration: Optional.</summary>
            /// <remarks>
            /// The subscription duration of a Subscription Internet instance.
            /// Valid values:
            /// If PricingCycle is month, the valid range is 1 to 9.
            /// If PricingCycle is year, the value range is 1 to 3.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "duration", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Duration
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property internetChargeType: Instance internet access charge type.Support 'paybybandwidth' and 'paybytraffic' only. Default is 'paybytraffic'. If load balancer is created in VPC, the charge type will be set as 'paybytraffic' by default.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "internetChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? InternetChargeType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property loadBalancerName: Name of created load balancer.</summary>
            /// <remarks>
            /// Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "loadBalancerName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? LoadBalancerName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property loadBalancerSpec: The specification of the Server Load Balancer instance.</summary>
            /// <remarks>
            /// Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large|slb.s3.xlarge|slb.s3.xxlarge. Default value: slb.s1.small. The supported performance specification in each region is different, two specifications are supported in the US East 1 region. If the region does not support the performance-guaranteed instances, the value will not take effect.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "loadBalancerSpec", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? LoadBalancerSpec
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property masterZoneId: The master zone id to create load balancer instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "masterZoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? MasterZoneId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property modificationProtectionReason: Set the reason for modifying the protection status.</summary>
            /// <remarks>
            /// The length is 1-80 English or Chinese characters, must start with upper and lower letters or Chinese, and can include numbers, periods (.), underscores (_) and dashes (-).
            /// Only valid when ModificationProtectionStatus is ConsoleProtection.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "modificationProtectionReason", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ModificationProtectionReason
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property modificationProtectionStatus: NonProtection or empty: means no restriction on modification protection ConsoleProtection: Modify instance protection status by console Default value is empty.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "modificationProtectionStatus", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ModificationProtectionStatus
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property payType: Optional.</summary>
            /// <remarks>
            /// The billing method of the instance to be created.
            /// Valid value: PayOnDemand (Pay-As-You-Go) | PrePay (Subscription)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "payType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PayType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property pricingCycle: Optional.</summary>
            /// <remarks>
            /// The duration of the Subscription-billed Internet instance to be created.
            /// Valid values: month | year.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pricingCycle", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PricingCycle
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property resourceGroupId: Resource group id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ResourceGroupId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property slaveZoneId: The slave zone id to create load balancer instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "slaveZoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SlaveZoneId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property tags: Tags to attach to slb.</summary>
            /// <remarks>
            /// Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, object>[]? Tags
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>[]?>();
            }

            /// <summary>Property vpcId: The VPC id to create load balancer instance.</summary>
            /// <remarks>
            /// For VPC network only.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VpcId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property vSwitchId: The VSwitch id to create load balancer instance.</summary>
            /// <remarks>
            /// For VPC network only.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VSwitchId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
