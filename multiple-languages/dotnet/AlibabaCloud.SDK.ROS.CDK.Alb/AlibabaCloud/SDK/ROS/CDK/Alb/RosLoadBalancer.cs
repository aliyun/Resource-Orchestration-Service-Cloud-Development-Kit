using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Alb
{
    /// <summary>A ROS template type:  `ALIYUN::ALB::LoadBalancer`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Alb.RosLoadBalancer), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosLoadBalancer", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-alb.RosLoadBalancerProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosLoadBalancer : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::ALB::LoadBalancer`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosLoadBalancer(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Alb.IRosLoadBalancerProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosLoadBalancer(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosLoadBalancer(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]")]
        protected override System.Collections.Generic.IDictionary<string, object> RenderProperties(System.Collections.Generic.IDictionary<string, object> props)
        {
            return InvokeInstanceMethod<System.Collections.Generic.IDictionary<string, object>>(new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object>)}, new object[]{props})!;
        }

        /// <summary>The resource type name for this resource class.</summary>
        [JsiiProperty(name: "ROS_RESOURCE_TYPE_NAME", typeJson: "{\"primitive\":\"string\"}")]
        public static string ROS_RESOURCE_TYPE_NAME
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Alb.RosLoadBalancer))!;

        /// <remarks>
        /// <strong>Attribute</strong>: AddressType: The type of IP address that the ALB instance uses to provide services.
        /// </remarks>
        [JsiiProperty(name: "attrAddressType", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrAddressType
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: DNSName: The domain name of the ALB instance.
        /// </remarks>
        [JsiiProperty(name: "attrDnsName", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrDnsName
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: LoadBalancerEdition: The edition of the ALB instance.
        /// </remarks>
        [JsiiProperty(name: "attrLoadBalancerEdition", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrLoadBalancerEdition
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: LoadBalancerId: The ID of the ALB instance.
        /// </remarks>
        [JsiiProperty(name: "attrLoadBalancerId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrLoadBalancerId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: VpcId: The ID of the virtual private cloud (VPC) where the ALB instance is deployed.
        /// </remarks>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrVpcId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ZoneMappings: The zones, vSwitches and addresses which are mapped to the zones.
        /// </remarks>
        [JsiiProperty(name: "attrZoneMappings", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrZoneMappings
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: addressType: The type of IP address that the ALB instance uses to provide services. Valid values:
        /// Internet: The ALB instance uses a public IP address. The domain name of the ALB instance is resolved to the public IP address. Therefore, the ALB instance can be accessed over the Internet.
        /// Intranet: The ALB instance uses a private IP address. The domain name of the ALB instance is resolved to the private IP address. Therefore, the ALB instance can be accessed over the VPC where the ALB instance is deployed.
        /// </remarks>
        [JsiiProperty(name: "addressType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AddressType
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: loadBalancerBillingConfig: The configuration of the billing method.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerBillingConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosLoadBalancer.LoadBalancerBillingConfigProperty\"}]}}")]
        public virtual object LoadBalancerBillingConfig
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: loadBalancerEdition: The edition of the ALB instance. Different editions have different limits and billing methods. Valid values:
        /// Basic: Basic Edition
        /// Standard: Standard Edition
        /// </remarks>
        [JsiiProperty(name: "loadBalancerEdition", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object LoadBalancerEdition
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: loadBalancerName: The name of the ALB instance.
        /// The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object LoadBalancerName
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The ID of the virtual private cloud (VPC) where the ALB instance is deployed.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object VpcId
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneMappings: The zones and the vSwitches in the zones. You must specify at least two zones.
        /// </remarks>
        [JsiiProperty(name: "zoneMappings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosLoadBalancer.ZoneMappingsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public virtual object ZoneMappings
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: addressAllocatedMode: The mode in which IP addresses are assigned. Valid values:
        /// Fixed: The ALB instance uses a static IP address.
        /// Dynamic: An IP address is dynamically assigned to the ALB instance in each zone. This is the default value.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "addressAllocatedMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? AddressAllocatedMode
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: deletionProtectionEnabled: Specifies whether to enable deletion protection. Default value: false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deletionProtectionEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DeletionProtectionEnabled
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: modificationProtectionConfig: The configuration of modification protection.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "modificationProtectionConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosLoadBalancer.ModificationProtectionConfigProperty\"}]}}", isOptional: true)]
        public virtual object? ModificationProtectionConfig
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? ResourceGroupId
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-alb.RosLoadBalancer.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        public virtual AlibabaCloud.SDK.ROS.CDK.Alb.RosLoadBalancer.ITagsProperty[]? Tags
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Alb.RosLoadBalancer.ITagsProperty[]?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(ILoadBalancerBillingConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosLoadBalancer.LoadBalancerBillingConfigProperty")]
        public interface ILoadBalancerBillingConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: payType: The billing method of the ALB instance. Set the value to PostPay, which indicates the pay-as-you-go billing method.
            /// </remarks>
            [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object PayType
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(ILoadBalancerBillingConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosLoadBalancer.LoadBalancerBillingConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.RosLoadBalancer.ILoadBalancerBillingConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: payType: The billing method of the ALB instance. Set the value to PostPay, which indicates the pay-as-you-go billing method.
                /// </remarks>
                [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object PayType
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosLoadBalancer.LoadBalancerBillingConfigProperty")]
        public class LoadBalancerBillingConfigProperty : AlibabaCloud.SDK.ROS.CDK.Alb.RosLoadBalancer.ILoadBalancerBillingConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: payType: The billing method of the ALB instance. Set the value to PostPay, which indicates the pay-as-you-go billing method.
            /// </remarks>
            [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PayType
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IModificationProtectionConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosLoadBalancer.ModificationProtectionConfigProperty")]
        public interface IModificationProtectionConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: status: Specifies whether to enable the configuration read-only mode for the ALB instance. Valid values:
            /// NonProtection: disables the configuration read-only mode. In this case, you cannot set the Reason parameter. If the Reason parameter is set, the value is cleared.
            /// ConsoleProtection: enables the configuration read-only mode. In this case, you can set the Reason parameter.
            /// </remarks>
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Status
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: reason: The reason for modification protection. The reason must be 2 to 128 characters in
            /// length, and can contain letters, digits, periods (.), underscores (_), and hyphens
            /// (-). The reason must start with a letter.
            /// This parameter is valid only if the ModificationProtectionStatus parameter is set to ConsoleProtection.
            /// </remarks>
            [JsiiProperty(name: "reason", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Reason
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IModificationProtectionConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosLoadBalancer.ModificationProtectionConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.RosLoadBalancer.IModificationProtectionConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: status: Specifies whether to enable the configuration read-only mode for the ALB instance. Valid values:
                /// NonProtection: disables the configuration read-only mode. In this case, you cannot set the Reason parameter. If the Reason parameter is set, the value is cleared.
                /// ConsoleProtection: enables the configuration read-only mode. In this case, you can set the Reason parameter.
                /// </remarks>
                [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Status
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: reason: The reason for modification protection. The reason must be 2 to 128 characters in
                /// length, and can contain letters, digits, periods (.), underscores (_), and hyphens
                /// (-). The reason must start with a letter.
                /// This parameter is valid only if the ModificationProtectionStatus parameter is set to ConsoleProtection.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "reason", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Reason
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosLoadBalancer.ModificationProtectionConfigProperty")]
        public class ModificationProtectionConfigProperty : AlibabaCloud.SDK.ROS.CDK.Alb.RosLoadBalancer.IModificationProtectionConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: status: Specifies whether to enable the configuration read-only mode for the ALB instance. Valid values:
            /// NonProtection: disables the configuration read-only mode. In this case, you cannot set the Reason parameter. If the Reason parameter is set, the value is cleared.
            /// ConsoleProtection: enables the configuration read-only mode. In this case, you can set the Reason parameter.
            /// </remarks>
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Status
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: reason: The reason for modification protection. The reason must be 2 to 128 characters in
            /// length, and can contain letters, digits, periods (.), underscores (_), and hyphens
            /// (-). The reason must start with a letter.
            /// This parameter is valid only if the ModificationProtectionStatus parameter is set to ConsoleProtection.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "reason", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Reason
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ITagsProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosLoadBalancer.TagsProperty")]
        public interface ITagsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: key: undefined
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Key
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: value: undefined
            /// </remarks>
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Value
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ITagsProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosLoadBalancer.TagsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.RosLoadBalancer.ITagsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: key: undefined
                /// </remarks>
                [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Key
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: value: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Value
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosLoadBalancer.TagsProperty")]
        public class TagsProperty : AlibabaCloud.SDK.ROS.CDK.Alb.RosLoadBalancer.ITagsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: key: undefined
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Key
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: value: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Value
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IZoneMappingsProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosLoadBalancer.ZoneMappingsProperty")]
        public interface IZoneMappingsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: vSwitchId: The ID of the vSwitch in the zone. Each zone can contain only one vSwitch and one subnet.
            /// </remarks>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object VSwitchId
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: zoneId: The ID of the zone to which the ALB instance belongs.
            /// </remarks>
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object ZoneId
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IZoneMappingsProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosLoadBalancer.ZoneMappingsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.RosLoadBalancer.IZoneMappingsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: vSwitchId: The ID of the vSwitch in the zone. Each zone can contain only one vSwitch and one subnet.
                /// </remarks>
                [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object VSwitchId
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: zoneId: The ID of the zone to which the ALB instance belongs.
                /// </remarks>
                [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object ZoneId
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosLoadBalancer.ZoneMappingsProperty")]
        public class ZoneMappingsProperty : AlibabaCloud.SDK.ROS.CDK.Alb.RosLoadBalancer.IZoneMappingsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: vSwitchId: The ID of the vSwitch in the zone. Each zone can contain only one vSwitch and one subnet.
            /// </remarks>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VSwitchId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: zoneId: The ID of the zone to which the ALB instance belongs.
            /// </remarks>
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ZoneId
            {
                get;
                set;
            }
        }
    }
}
