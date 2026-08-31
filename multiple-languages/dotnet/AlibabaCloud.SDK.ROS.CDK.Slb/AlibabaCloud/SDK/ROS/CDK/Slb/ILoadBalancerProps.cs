using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    /// <summary>Properties for defining a `LoadBalancer`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-loadbalancer
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ILoadBalancerProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.LoadBalancerProps")]
    public interface ILoadBalancerProps
    {
        /// <summary>Property addressIpVersion: The IP version of the CLB instance.</summary>
        /// <remarks>
        /// Valid values: ipv4 and ipv6.
        /// </remarks>
        [JsiiProperty(name: "addressIpVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AddressIpVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property addressType: The network type of the CLB instance.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>internet</strong> (default): After an internet-facing CLB instance is created, the system assigns a public IP address to the CLB instance. Then, the CLB instance can forward requests over the Internet.</description>
        /// <description><strong>intranet</strong>: After an internal-facing CLB instance is created, the system assigns a private IP address to the CLB instance. Then, the CLB instance can forward requests only over the internal networks.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "addressType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AddressType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property bandwidth: The bandwidth for network, unit in Mbps(Mega bit per second).</summary>
        /// <remarks>
        /// Default is 1. If InternetChargeType is specified as "paybytraffic", this property will be ignore and please specify the "Bandwidth" in ALIYUN::SLB::Listener.
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

        /// <summary>Property instanceChargeType: The resource metering method for the CLB instance.</summary>
        /// <remarks>
        /// Valid value:
        ///
        /// <list type="bullet">
        /// <description>PayByCLCU: pay-by-data-transfer</description>
        /// </list>
        ///
        ///     As of 00:00:00 (UTC+8) on June 1, 2025, pay-by-specification CLB instances are
        ///     no longer available for purchase. For more details, see <a href="t2857909.xdita#"></a>.
        /// </remarks>
        [JsiiProperty(name: "instanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property internetChargeType: The metering method of the Internet-facing CLB instance.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>paybytraffic</strong> (default): If you set the value to paybytraffic, you do not need to specify Bandwidth. Even if you specify Bandwidth, the value does not take effect.</description>
        /// <description><strong>paybybandwidth</strong>: pay-by-bandwidth.
        /// <strong>Note</strong> If you set PayType to PayOnDemand and set InstanceChargeType to PayByCLCU, you must set InternetChargeType to paybytraffic.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "internetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InternetChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property loadBalancerName: The CLB instance name.</summary>
        /// <remarks>
        /// The name must be 1 to 80 characters in length, and can contain digits, periods
        /// (.), underscores (_), and hyphens (-). It must start with a letter.
        /// If you do not specify this parameter, the system automatically assigns a name to
        /// the CLB instance.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LoadBalancerName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property loadBalancerSpec: The specification of the CLB instance.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>slb.s1.small</description>
        /// <description>slb.s2.small</description>
        /// <description>slb.s2.medium</description>
        /// <description>slb.s3.small</description>
        /// <description>slb.s3.medium</description>
        /// <description>slb.s3.large</description>
        /// </list>
        ///
        ///     <list type="bullet">
        ///     <description>If InstanceChargeType is set to PayByCLCU, this parameter is invalid and you
        ///     do not need to specify this parameter.</description>
        ///     <description>As of 00:00:00 (UTC+8) on June 1, 2025, pay-by-specification CLB instances
        ///     are no longer available for purchase. For more details, see <a href="t2857909.xdita#"></a>.</description>
        ///     </list>
        /// </remarks>
        [JsiiProperty(name: "loadBalancerSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LoadBalancerSpec
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property masterZoneId: The master zone id to create load balancer instance.</summary>
        [JsiiProperty(name: "masterZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MasterZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property modificationProtectionReason: The reason for enabling the configuration read-only mode.</summary>
        /// <remarks>
        /// The reason must be 1 to
        /// 80 characters in length. It must start with a letter and can contain letters,
        /// digits, periods (.), underscores (_), and hyphens (-).
        ///
        ///     This parameter takes effect only when ModificationProtectionStatus is set to
        ///     ConsoleProtection.
        /// </remarks>
        [JsiiProperty(name: "modificationProtectionReason", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ModificationProtectionReason
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property modificationProtectionStatus: Specifies whether to enable the configuration read-only mode.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>NonProtection: disables the configuration read-only mode. After you disable the
        /// configuration read-only mode, the value of ModificationProtectionReason is
        /// cleared.</description>
        /// <description>ConsoleProtection: enables the configuration read-only mode.</description>
        /// </list>
        ///
        ///     If you set this parameter to ConsoleProtection, you cannot modify instance
        ///     configurations in the CLB console. However, you can modify instance
        ///     configurations by calling API operations.
        /// </remarks>
        [JsiiProperty(name: "modificationProtectionStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ModificationProtectionStatus
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: Resource group id.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property slaveZoneId: The slave zone id to create load balancer instance.</summary>
        [JsiiProperty(name: "slaveZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SlaveZoneId
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
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-slb.RosLoadBalancer.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Slb.RosLoadBalancer.ITagsProperty[]? Tags
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
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchId: The ID of the vSwitch to which the CLB instance belongs.</summary>
        /// <remarks>
        /// If you want to deploy the CLB instance in a VPC, this parameter is required. If
        /// this parameter is specified, AddessType is set to intranet by default.
        ///
        ///     The vSwitch must be in the primary zone.
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

        /// <summary>Properties for defining a `LoadBalancer`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-loadbalancer
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ILoadBalancerProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.LoadBalancerProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.ILoadBalancerProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property addressIpVersion: The IP version of the CLB instance.</summary>
            /// <remarks>
            /// Valid values: ipv4 and ipv6.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "addressIpVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AddressIpVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property addressType: The network type of the CLB instance.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>internet</strong> (default): After an internet-facing CLB instance is created, the system assigns a public IP address to the CLB instance. Then, the CLB instance can forward requests over the Internet.</description>
            /// <description><strong>intranet</strong>: After an internal-facing CLB instance is created, the system assigns a private IP address to the CLB instance. Then, the CLB instance can forward requests only over the internal networks.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "addressType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AddressType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property bandwidth: The bandwidth for network, unit in Mbps(Mega bit per second).</summary>
            /// <remarks>
            /// Default is 1. If InternetChargeType is specified as "paybytraffic", this property will be ignore and please specify the "Bandwidth" in ALIYUN::SLB::Listener.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Bandwidth
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property deletionProtection: Whether to enable deletion protection.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "deletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeletionProtection
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceChargeType: The resource metering method for the CLB instance.</summary>
            /// <remarks>
            /// Valid value:
            ///
            /// <list type="bullet">
            /// <description>PayByCLCU: pay-by-data-transfer</description>
            /// </list>
            ///
            ///     As of 00:00:00 (UTC+8) on June 1, 2025, pay-by-specification CLB instances are
            ///     no longer available for purchase. For more details, see <a href="t2857909.xdita#"></a>.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property internetChargeType: The metering method of the Internet-facing CLB instance.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>paybytraffic</strong> (default): If you set the value to paybytraffic, you do not need to specify Bandwidth. Even if you specify Bandwidth, the value does not take effect.</description>
            /// <description><strong>paybybandwidth</strong>: pay-by-bandwidth.
            /// <strong>Note</strong> If you set PayType to PayOnDemand and set InstanceChargeType to PayByCLCU, you must set InternetChargeType to paybytraffic.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "internetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InternetChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property loadBalancerName: The CLB instance name.</summary>
            /// <remarks>
            /// The name must be 1 to 80 characters in length, and can contain digits, periods
            /// (.), underscores (_), and hyphens (-). It must start with a letter.
            /// If you do not specify this parameter, the system automatically assigns a name to
            /// the CLB instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "loadBalancerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LoadBalancerName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property loadBalancerSpec: The specification of the CLB instance.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>slb.s1.small</description>
            /// <description>slb.s2.small</description>
            /// <description>slb.s2.medium</description>
            /// <description>slb.s3.small</description>
            /// <description>slb.s3.medium</description>
            /// <description>slb.s3.large</description>
            /// </list>
            ///
            ///     <list type="bullet">
            ///     <description>If InstanceChargeType is set to PayByCLCU, this parameter is invalid and you
            ///     do not need to specify this parameter.</description>
            ///     <description>As of 00:00:00 (UTC+8) on June 1, 2025, pay-by-specification CLB instances
            ///     are no longer available for purchase. For more details, see <a href="t2857909.xdita#"></a>.</description>
            ///     </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "loadBalancerSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LoadBalancerSpec
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property masterZoneId: The master zone id to create load balancer instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "masterZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MasterZoneId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property modificationProtectionReason: The reason for enabling the configuration read-only mode.</summary>
            /// <remarks>
            /// The reason must be 1 to
            /// 80 characters in length. It must start with a letter and can contain letters,
            /// digits, periods (.), underscores (_), and hyphens (-).
            ///
            ///     This parameter takes effect only when ModificationProtectionStatus is set to
            ///     ConsoleProtection.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "modificationProtectionReason", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ModificationProtectionReason
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property modificationProtectionStatus: Specifies whether to enable the configuration read-only mode.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>NonProtection: disables the configuration read-only mode. After you disable the
            /// configuration read-only mode, the value of ModificationProtectionReason is
            /// cleared.</description>
            /// <description>ConsoleProtection: enables the configuration read-only mode.</description>
            /// </list>
            ///
            ///     If you set this parameter to ConsoleProtection, you cannot modify instance
            ///     configurations in the CLB console. However, you can modify instance
            ///     configurations by calling API operations.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "modificationProtectionStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ModificationProtectionStatus
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: Resource group id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property slaveZoneId: The slave zone id to create load balancer instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "slaveZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SlaveZoneId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to slb.</summary>
            /// <remarks>
            /// Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-slb.RosLoadBalancer.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Slb.RosLoadBalancer.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Slb.RosLoadBalancer.ITagsProperty[]?>();
            }

            /// <summary>Property vpcId: The VPC id to create load balancer instance.</summary>
            /// <remarks>
            /// For VPC network only.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vSwitchId: The ID of the vSwitch to which the CLB instance belongs.</summary>
            /// <remarks>
            /// If you want to deploy the CLB instance in a VPC, this parameter is required. If
            /// this parameter is specified, AddessType is set to intranet by default.
            ///
            ///     The vSwitch must be in the primary zone.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
