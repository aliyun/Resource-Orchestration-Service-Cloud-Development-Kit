using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `RosDhcpOptionsSet`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-dhcpoptionsset
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDhcpOptionsSetProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosDhcpOptionsSetProps")]
    public interface IRosDhcpOptionsSetProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dhcpOptionsSetDescription: The description of the DHCP options set.
        /// The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
        /// </remarks>
        [JsiiProperty(name: "dhcpOptionsSetDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DhcpOptionsSetDescription
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dhcpOptionsSetName: The name of the DHCP options set.
        /// The name must be 2 to 128 characters in length and can contain letters, Chinese characters, digits, underscores (_), and hyphens (-). It must start with a letter or a Chinese character.
        /// </remarks>
        [JsiiProperty(name: "dhcpOptionsSetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DhcpOptionsSetName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: domainName: The root domain, for example, example.com.
        /// After a DHCP options set is associated with a Virtual Private Cloud (VPC) network, the root domain in the DHCP options set is automatically synchronized to the ECS instances in the VPC network.
        /// </remarks>
        [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DomainName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: domainNameServers: The DNS server IP addresses. Note Before you specify any DNS server IP address, all ECS instances in the associated VPC network use the IP addresses of the Alibaba Cloud DNS servers, which are 100.100.2.136 and 100.100.2.138.
        /// </remarks>
        [JsiiProperty(name: "domainNameServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DomainNameServers
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: ipv6LeaseTime: The lease time of the IPv6 DHCP options set.
        ///
        /// - When setting lease time in hours: unit: h. Valid values: **24h~1176h**, **87600h~175200h**. Default value: **24h**.
        ///
        /// - When setting lease time in days: unit: d. Valid values: **1d~49d**, **3650d~7300d**. Default value: **1d**.
        ///
        /// When specifying parameter values, you must include the unit.
        /// </remarks>
        [JsiiProperty(name: "ipv6LeaseTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ipv6LeaseTime
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: leaseTime: The lease time of the IPv4 DHCP options set.
        ///
        /// - When setting lease time in hours: unit: h. Valid values: **24h~1176h**, **87600h~175200h**. Default value: **87600h**.
        ///
        /// - When setting lease time in days: unit: d. Valid values: **1d~49d**, **3650d~7300d**. Default value: **3650d**.
        ///
        /// When specifying parameter values, you must include the unit.
        /// </remarks>
        [JsiiProperty(name: "leaseTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LeaseTime
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group to which the DHCP options set belongs.
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

        /// <summary>Properties for defining a `RosDhcpOptionsSet`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-dhcpoptionsset
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDhcpOptionsSetProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosDhcpOptionsSetProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosDhcpOptionsSetProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dhcpOptionsSetDescription: The description of the DHCP options set.
            /// The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dhcpOptionsSetDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DhcpOptionsSetDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dhcpOptionsSetName: The name of the DHCP options set.
            /// The name must be 2 to 128 characters in length and can contain letters, Chinese characters, digits, underscores (_), and hyphens (-). It must start with a letter or a Chinese character.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dhcpOptionsSetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DhcpOptionsSetName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: domainName: The root domain, for example, example.com.
            /// After a DHCP options set is associated with a Virtual Private Cloud (VPC) network, the root domain in the DHCP options set is automatically synchronized to the ECS instances in the VPC network.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DomainName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: domainNameServers: The DNS server IP addresses. Note Before you specify any DNS server IP address, all ECS instances in the associated VPC network use the IP addresses of the Alibaba Cloud DNS servers, which are 100.100.2.136 and 100.100.2.138.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "domainNameServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DomainNameServers
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ipv6LeaseTime: The lease time of the IPv6 DHCP options set.
            ///
            /// - When setting lease time in hours: unit: h. Valid values: **24h~1176h**, **87600h~175200h**. Default value: **24h**.
            ///
            /// - When setting lease time in days: unit: d. Valid values: **1d~49d**, **3650d~7300d**. Default value: **1d**.
            ///
            /// When specifying parameter values, you must include the unit.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipv6LeaseTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ipv6LeaseTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: leaseTime: The lease time of the IPv4 DHCP options set.
            ///
            /// - When setting lease time in hours: unit: h. Valid values: **24h~1176h**, **87600h~175200h**. Default value: **87600h**.
            ///
            /// - When setting lease time in days: unit: d. Valid values: **1d~49d**, **3650d~7300d**. Default value: **3650d**.
            ///
            /// When specifying parameter values, you must include the unit.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "leaseTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LeaseTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of the resource group to which the DHCP options set belongs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
