using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Alb
{
    /// <summary>Properties for defining a `ALIYUN::ALB::LoadBalancer`.</summary>
    [JsiiInterface(nativeType: typeof(IRosLoadBalancerProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosLoadBalancerProps")]
    public interface IRosLoadBalancerProps
    {
        /// <remarks>
        /// <strong>Property</strong>: addressType: The type of IP address that the ALB instance uses to provide services. Valid values:
        /// Internet: The ALB instance uses a public IP address. The domain name of the ALB instance is resolved to the public IP address. Therefore, the ALB instance can be accessed over the Internet.
        /// Intranet: The ALB instance uses a private IP address. The domain name of the ALB instance is resolved to the private IP address. Therefore, the ALB instance can be accessed over the VPC where the ALB instance is deployed.
        /// </remarks>
        [JsiiProperty(name: "addressType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AddressType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: loadBalancerBillingConfig: The configuration of the billing method.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerBillingConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosLoadBalancer.LoadBalancerBillingConfigProperty\"}]}}")]
        object LoadBalancerBillingConfig
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: loadBalancerEdition: The edition of the ALB instance. Different editions have different limits and billing methods. Valid values:
        /// Basic: Basic Edition
        /// Standard: Standard Edition
        /// StandardWithWaf: Standard Edition with WAF
        /// </remarks>
        [JsiiProperty(name: "loadBalancerEdition", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LoadBalancerEdition
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: loadBalancerName: The name of the ALB instance.
        /// The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LoadBalancerName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The ID of the virtual private cloud (VPC) where the ALB instance is deployed.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneMappings: The zones and the vSwitches in the zones. You must specify at least two zones.
        /// </remarks>
        [JsiiProperty(name: "zoneMappings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosLoadBalancer.ZoneMappingsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object ZoneMappings
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: accessLogConfig:
        /// </remarks>
        [JsiiProperty(name: "accessLogConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosLoadBalancer.AccessLogConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccessLogConfig
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: addressAllocatedMode: The mode in which IP addresses are assigned. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: addressIpVersion: The protocol version. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: bandwidthPackageId: Attach common bandwidth package to load balancer. It only takes effect when AddressType=Internet.
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

        /// <remarks>
        /// <strong>Property</strong>: deletionProtectionEnabled: Specifies whether to enable deletion protection. Default value: false.
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

        /// <remarks>
        /// <strong>Property</strong>: modificationProtectionConfig: The configuration of modification protection.
        /// </remarks>
        [JsiiProperty(name: "modificationProtectionConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosLoadBalancer.ModificationProtectionConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ModificationProtectionConfig
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
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
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
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

        /// <summary>Properties for defining a `ALIYUN::ALB::LoadBalancer`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosLoadBalancerProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosLoadBalancerProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.IRosLoadBalancerProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: addressType: The type of IP address that the ALB instance uses to provide services. Valid values:
            /// Internet: The ALB instance uses a public IP address. The domain name of the ALB instance is resolved to the public IP address. Therefore, the ALB instance can be accessed over the Internet.
            /// Intranet: The ALB instance uses a private IP address. The domain name of the ALB instance is resolved to the private IP address. Therefore, the ALB instance can be accessed over the VPC where the ALB instance is deployed.
            /// </remarks>
            [JsiiProperty(name: "addressType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AddressType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: loadBalancerBillingConfig: The configuration of the billing method.
            /// </remarks>
            [JsiiProperty(name: "loadBalancerBillingConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosLoadBalancer.LoadBalancerBillingConfigProperty\"}]}}")]
            public object LoadBalancerBillingConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: loadBalancerEdition: The edition of the ALB instance. Different editions have different limits and billing methods. Valid values:
            /// Basic: Basic Edition
            /// Standard: Standard Edition
            /// StandardWithWaf: Standard Edition with WAF
            /// </remarks>
            [JsiiProperty(name: "loadBalancerEdition", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LoadBalancerEdition
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: loadBalancerName: The name of the ALB instance.
            /// The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
            /// </remarks>
            [JsiiProperty(name: "loadBalancerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LoadBalancerName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: The ID of the virtual private cloud (VPC) where the ALB instance is deployed.
            /// </remarks>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: zoneMappings: The zones and the vSwitches in the zones. You must specify at least two zones.
            /// </remarks>
            [JsiiProperty(name: "zoneMappings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosLoadBalancer.ZoneMappingsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object ZoneMappings
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: accessLogConfig:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accessLogConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosLoadBalancer.AccessLogConfigProperty\"}]}}", isOptional: true)]
            public object? AccessLogConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: addressAllocatedMode: The mode in which IP addresses are assigned. Valid values:
            /// Fixed: The ALB instance uses a static IP address.
            /// Dynamic: An IP address is dynamically assigned to the ALB instance in each zone. This is the default value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "addressAllocatedMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AddressAllocatedMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: addressIpVersion: The protocol version. Valid values:
            /// IPv4: IPv4
            /// DualStack: dual stack
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "addressIpVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AddressIpVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: bandwidthPackageId: Attach common bandwidth package to load balancer. It only takes effect when AddressType=Internet.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bandwidthPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BandwidthPackageId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: deletionProtectionEnabled: Specifies whether to enable deletion protection. Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deletionProtectionEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeletionProtectionEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: modificationProtectionConfig: The configuration of modification protection.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "modificationProtectionConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosLoadBalancer.ModificationProtectionConfigProperty\"}]}}", isOptional: true)]
            public object? ModificationProtectionConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
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
