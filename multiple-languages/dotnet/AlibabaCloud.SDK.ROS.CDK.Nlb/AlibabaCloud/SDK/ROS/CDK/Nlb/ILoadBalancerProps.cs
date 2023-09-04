using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nlb
{
    /// <summary>Properties for defining a `ALIYUN::NLB::LoadBalancer`.</summary>
    [JsiiInterface(nativeType: typeof(ILoadBalancerProps), fullyQualifiedName: "@alicloud/ros-cdk-nlb.LoadBalancerProps")]
    public interface ILoadBalancerProps
    {
        /// <summary>Property addressType: The type of IP address that the NLB instance uses to provide services.</summary>
        /// <remarks>
        /// Valid values:
        /// Internet: The NLB instance uses a public IP address. The domain name of the NLB instance is resolved to the public IP address. Therefore, the NLB instance can be accessed over the Internet.
        /// Intranet: The NLB instance uses a private IP address. The domain name of the NLB instance is resolved to the private IP address. Therefore, the NLB instance can be accessed over the VPC where the NLB instance is deployed.
        /// </remarks>
        [JsiiProperty(name: "addressType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AddressType
        {
            get;
        }

        /// <summary>Property vpcId: The ID of the virtual private cloud (VPC) where the NLB instance is deployed.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Property zoneMappings: The zones and the vSwitches in the zones.</summary>
        /// <remarks>
        /// You must specify at least two zones.
        /// </remarks>
        [JsiiProperty(name: "zoneMappings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-nlb.RosLoadBalancer.ZoneMappingsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object ZoneMappings
        {
            get;
        }

        /// <summary>Property addressIpVersion: The version of IP address that the NLB instance uses to provide services.</summary>
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
        [JsiiProperty(name: "bandwidthPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BandwidthPackageId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property crossZoneEnabled: Whether enable cross zone.</summary>
        /// <remarks>
        /// Default: true
        /// </remarks>
        [JsiiProperty(name: "crossZoneEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CrossZoneEnabled
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property deletionProtectionConfig: The configuration of the deletion protection feature.</summary>
        [JsiiProperty(name: "deletionProtectionConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-nlb.RosLoadBalancer.DeletionProtectionConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeletionProtectionConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property loadBalancerBillingConfig: The configuration of the billing method.</summary>
        [JsiiProperty(name: "loadBalancerBillingConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-nlb.RosLoadBalancer.LoadBalancerBillingConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LoadBalancerBillingConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property loadBalancerName: The name of the NLB instance.</summary>
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

        /// <summary>Property loadBalancerType: The type of the NLB instance.</summary>
        [JsiiProperty(name: "loadBalancerType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LoadBalancerType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property modificationProtectionConfig: The configuration of the configuration read-only mode.</summary>
        [JsiiProperty(name: "modificationProtectionConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-nlb.RosLoadBalancer.ModificationProtectionConfigProperty\"}]}}", isOptional: true)]
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

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-nlb.RosLoadBalancer.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Nlb.RosLoadBalancer.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property trafficAffinityEnabled: Whether enable traffic affinity.</summary>
        /// <remarks>
        /// Default: false
        /// </remarks>
        [JsiiProperty(name: "trafficAffinityEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TrafficAffinityEnabled
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::NLB::LoadBalancer`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ILoadBalancerProps), fullyQualifiedName: "@alicloud/ros-cdk-nlb.LoadBalancerProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nlb.ILoadBalancerProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property addressType: The type of IP address that the NLB instance uses to provide services.</summary>
            /// <remarks>
            /// Valid values:
            /// Internet: The NLB instance uses a public IP address. The domain name of the NLB instance is resolved to the public IP address. Therefore, the NLB instance can be accessed over the Internet.
            /// Intranet: The NLB instance uses a private IP address. The domain name of the NLB instance is resolved to the private IP address. Therefore, the NLB instance can be accessed over the VPC where the NLB instance is deployed.
            /// </remarks>
            [JsiiProperty(name: "addressType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AddressType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vpcId: The ID of the virtual private cloud (VPC) where the NLB instance is deployed.</summary>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property zoneMappings: The zones and the vSwitches in the zones.</summary>
            /// <remarks>
            /// You must specify at least two zones.
            /// </remarks>
            [JsiiProperty(name: "zoneMappings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-nlb.RosLoadBalancer.ZoneMappingsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object ZoneMappings
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property addressIpVersion: The version of IP address that the NLB instance uses to provide services.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "addressIpVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AddressIpVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property bandwidthPackageId: Attach common bandwidth package to load balancer.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "bandwidthPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BandwidthPackageId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property crossZoneEnabled: Whether enable cross zone.</summary>
            /// <remarks>
            /// Default: true
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "crossZoneEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CrossZoneEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property deletionProtectionConfig: The configuration of the deletion protection feature.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "deletionProtectionConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-nlb.RosLoadBalancer.DeletionProtectionConfigProperty\"}]}}", isOptional: true)]
            public object? DeletionProtectionConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property loadBalancerBillingConfig: The configuration of the billing method.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "loadBalancerBillingConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-nlb.RosLoadBalancer.LoadBalancerBillingConfigProperty\"}]}}", isOptional: true)]
            public object? LoadBalancerBillingConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property loadBalancerName: The name of the NLB instance.</summary>
            /// <remarks>
            /// The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "loadBalancerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LoadBalancerName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property loadBalancerType: The type of the NLB instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "loadBalancerType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LoadBalancerType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property modificationProtectionConfig: The configuration of the configuration read-only mode.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "modificationProtectionConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-nlb.RosLoadBalancer.ModificationProtectionConfigProperty\"}]}}", isOptional: true)]
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

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-nlb.RosLoadBalancer.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Nlb.RosLoadBalancer.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Nlb.RosLoadBalancer.ITagsProperty[]?>();
            }

            /// <summary>Property trafficAffinityEnabled: Whether enable traffic affinity.</summary>
            /// <remarks>
            /// Default: false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "trafficAffinityEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TrafficAffinityEnabled
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
