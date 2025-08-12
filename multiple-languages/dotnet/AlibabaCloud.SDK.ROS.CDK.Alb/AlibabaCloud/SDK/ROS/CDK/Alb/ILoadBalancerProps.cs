using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Alb
{
    /// <summary>Properties for defining a `LoadBalancer`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-loadbalancer
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ILoadBalancerProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.LoadBalancerProps")]
    public interface ILoadBalancerProps
    {
        /// <summary>Property addressType: The type of IP address that the ALB instance uses to provide services.</summary>
        /// <remarks>
        /// Valid values:
        /// Internet: The ALB instance uses a public IP address. The domain name of the ALB instance is resolved to the public IP address. Therefore, the ALB instance can be accessed over the Internet.
        /// Intranet: The ALB instance uses a private IP address. The domain name of the ALB instance is resolved to the private IP address. Therefore, the ALB instance can be accessed over the VPC where the ALB instance is deployed.
        /// </remarks>
        [JsiiProperty(name: "addressType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AddressType
        {
            get;
        }

        /// <summary>Property loadBalancerBillingConfig: The configuration of the billing method.</summary>
        [JsiiProperty(name: "loadBalancerBillingConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosLoadBalancer.LoadBalancerBillingConfigProperty\"}]}}")]
        object LoadBalancerBillingConfig
        {
            get;
        }

        /// <summary>Property loadBalancerEdition: The edition of the ALB instance.</summary>
        /// <remarks>
        /// Different editions have different limits and billing methods. Valid values:
        /// Basic: Basic Edition
        /// Standard: Standard Edition
        /// StandardWithWaf: Standard Edition with WAF
        /// </remarks>
        [JsiiProperty(name: "loadBalancerEdition", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LoadBalancerEdition
        {
            get;
        }

        /// <summary>Property vpcId: The ID of the virtual private cloud (VPC) where the ALB instance is deployed.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Property zoneMappings: The zones and the vSwitches in the zones.</summary>
        /// <remarks>
        /// You must specify at least two zones.
        /// </remarks>
        [JsiiProperty(name: "zoneMappings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosLoadBalancer.ZoneMappingsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object ZoneMappings
        {
            get;
        }

        /// <summary>Property accessLogConfig:.</summary>
        [JsiiProperty(name: "accessLogConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosLoadBalancer.AccessLogConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccessLogConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property addressAllocatedMode: The mode in which IP addresses are assigned.</summary>
        /// <remarks>
        /// Valid values:
        /// Fixed: The ALB instance uses a static IP address.
        /// Dynamic: An IP address is dynamically assigned to the ALB instance in each zone. This is the default value.
        /// </remarks>
        [JsiiProperty(name: "addressAllocatedMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AddressAllocatedMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property addressIpVersion: The protocol version.</summary>
        /// <remarks>
        /// Valid values:
        /// IPv4: IPv4
        /// DualStack: dual stack
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

        /// <summary>Property bandwidthPackageId: Attach common bandwidth package to load balancer.</summary>
        /// <remarks>
        /// It only takes effect when AddressType=Internet.
        /// </remarks>
        [JsiiProperty(name: "bandwidthPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BandwidthPackageId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property deletionProtectionEnabled: Specifies whether to enable deletion protection.</summary>
        /// <remarks>
        /// Default value: false.
        /// </remarks>
        [JsiiProperty(name: "deletionProtectionEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeletionProtectionEnabled
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ipv6AddressType: The type of IPv6 address that the ALB instance uses to provide services.</summary>
        /// <remarks>
        /// Valid values:
        /// Internet: The ALB instance uses a public IPv6 address. The domain name of the ALB instance is resolved to the public IPv6 address.
        /// Intranet: The ALB instance uses a private IPv6 address. The domain name of the ALB instance is resolved to the private IP address.
        /// </remarks>
        [JsiiProperty(name: "ipv6AddressType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ipv6AddressType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property loadBalancerName: The name of the ALB instance.</summary>
        /// <remarks>
        /// The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
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

        /// <summary>Property modificationProtectionConfig: The configuration of modification protection.</summary>
        [JsiiProperty(name: "modificationProtectionConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosLoadBalancer.ModificationProtectionConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ModificationProtectionConfig
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

        /// <summary>Property securityGroupIds: The IDs of the security group to which the ALB instance join.</summary>
        [JsiiProperty(name: "securityGroupIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityGroupIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-alb.RosLoadBalancer.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Alb.RosLoadBalancer.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `LoadBalancer`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-loadbalancer
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ILoadBalancerProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.LoadBalancerProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.ILoadBalancerProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property addressType: The type of IP address that the ALB instance uses to provide services.</summary>
            /// <remarks>
            /// Valid values:
            /// Internet: The ALB instance uses a public IP address. The domain name of the ALB instance is resolved to the public IP address. Therefore, the ALB instance can be accessed over the Internet.
            /// Intranet: The ALB instance uses a private IP address. The domain name of the ALB instance is resolved to the private IP address. Therefore, the ALB instance can be accessed over the VPC where the ALB instance is deployed.
            /// </remarks>
            [JsiiProperty(name: "addressType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AddressType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property loadBalancerBillingConfig: The configuration of the billing method.</summary>
            [JsiiProperty(name: "loadBalancerBillingConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosLoadBalancer.LoadBalancerBillingConfigProperty\"}]}}")]
            public object LoadBalancerBillingConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property loadBalancerEdition: The edition of the ALB instance.</summary>
            /// <remarks>
            /// Different editions have different limits and billing methods. Valid values:
            /// Basic: Basic Edition
            /// Standard: Standard Edition
            /// StandardWithWaf: Standard Edition with WAF
            /// </remarks>
            [JsiiProperty(name: "loadBalancerEdition", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LoadBalancerEdition
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vpcId: The ID of the virtual private cloud (VPC) where the ALB instance is deployed.</summary>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property zoneMappings: The zones and the vSwitches in the zones.</summary>
            /// <remarks>
            /// You must specify at least two zones.
            /// </remarks>
            [JsiiProperty(name: "zoneMappings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosLoadBalancer.ZoneMappingsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object ZoneMappings
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property accessLogConfig:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "accessLogConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosLoadBalancer.AccessLogConfigProperty\"}]}}", isOptional: true)]
            public object? AccessLogConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property addressAllocatedMode: The mode in which IP addresses are assigned.</summary>
            /// <remarks>
            /// Valid values:
            /// Fixed: The ALB instance uses a static IP address.
            /// Dynamic: An IP address is dynamically assigned to the ALB instance in each zone. This is the default value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "addressAllocatedMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AddressAllocatedMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property addressIpVersion: The protocol version.</summary>
            /// <remarks>
            /// Valid values:
            /// IPv4: IPv4
            /// DualStack: dual stack
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "addressIpVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AddressIpVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property bandwidthPackageId: Attach common bandwidth package to load balancer.</summary>
            /// <remarks>
            /// It only takes effect when AddressType=Internet.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bandwidthPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BandwidthPackageId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property deletionProtectionEnabled: Specifies whether to enable deletion protection.</summary>
            /// <remarks>
            /// Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deletionProtectionEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeletionProtectionEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipv6AddressType: The type of IPv6 address that the ALB instance uses to provide services.</summary>
            /// <remarks>
            /// Valid values:
            /// Internet: The ALB instance uses a public IPv6 address. The domain name of the ALB instance is resolved to the public IPv6 address.
            /// Intranet: The ALB instance uses a private IPv6 address. The domain name of the ALB instance is resolved to the private IP address.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipv6AddressType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ipv6AddressType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property loadBalancerName: The name of the ALB instance.</summary>
            /// <remarks>
            /// The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "loadBalancerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LoadBalancerName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property modificationProtectionConfig: The configuration of modification protection.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "modificationProtectionConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosLoadBalancer.ModificationProtectionConfigProperty\"}]}}", isOptional: true)]
            public object? ModificationProtectionConfig
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

            /// <summary>Property securityGroupIds: The IDs of the security group to which the ALB instance join.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SecurityGroupIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-alb.RosLoadBalancer.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Alb.RosLoadBalancer.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Alb.RosLoadBalancer.ITagsProperty[]?>();
            }
        }
    }
}
