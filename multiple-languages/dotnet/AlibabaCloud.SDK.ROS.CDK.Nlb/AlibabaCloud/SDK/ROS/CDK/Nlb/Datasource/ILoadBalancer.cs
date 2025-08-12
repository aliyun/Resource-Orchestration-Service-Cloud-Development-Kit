using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nlb.Datasource
{
    /// <summary>Represents a `LoadBalancer`.</summary>
    [JsiiInterface(nativeType: typeof(ILoadBalancer), fullyQualifiedName: "@alicloud/ros-cdk-nlb.datasource.ILoadBalancer")]
    public interface ILoadBalancer : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AddressIpVersion: The protocol version.</summary>
        [JsiiProperty(name: "attrAddressIpVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAddressIpVersion
        {
            get;
        }

        /// <summary>Attribute AddressType: The IPv4 network type of the NLB instance.</summary>
        [JsiiProperty(name: "attrAddressType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAddressType
        {
            get;
        }

        /// <summary>Attribute BandwidthPackageId: The ID of the EIP bandwidth plan.</summary>
        [JsiiProperty(name: "attrBandwidthPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBandwidthPackageId
        {
            get;
        }

        /// <summary>Attribute Cps: The maximum number of new connections per second supported by the NLB instance in each zone (virtual IP address).</summary>
        [JsiiProperty(name: "attrCps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCps
        {
            get;
        }

        /// <summary>Attribute CreateTime: The time when the NLB instance was created.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute CrossZoneEnabled: Indicates whether the NLB instance is accessible across zones.</summary>
        [JsiiProperty(name: "attrCrossZoneEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCrossZoneEnabled
        {
            get;
        }

        /// <summary>Attribute DeletionProtectionConfig: The configuration of the deletion protection feature.</summary>
        [JsiiProperty(name: "attrDeletionProtectionConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDeletionProtectionConfig
        {
            get;
        }

        /// <summary>Attribute DNSName: The domain name of the NLB instance.</summary>
        [JsiiProperty(name: "attrDnsName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDnsName
        {
            get;
        }

        /// <summary>Attribute Ipv6AddressType: The IPv6 network type of the NLB instance.</summary>
        [JsiiProperty(name: "attrIpv6AddressType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpv6AddressType
        {
            get;
        }

        /// <summary>Attribute LoadBalancerBillingConfig: The billing information of the NLB instance.</summary>
        [JsiiProperty(name: "attrLoadBalancerBillingConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLoadBalancerBillingConfig
        {
            get;
        }

        /// <summary>Attribute LoadBalancerBusinessStatus: The status of workloads on the NLB instance.</summary>
        [JsiiProperty(name: "attrLoadBalancerBusinessStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLoadBalancerBusinessStatus
        {
            get;
        }

        /// <summary>Attribute LoadBalancerId: ID of the LoadBalancer.</summary>
        [JsiiProperty(name: "attrLoadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLoadBalancerId
        {
            get;
        }

        /// <summary>Attribute LoadBalancerName: The NLB instance name.</summary>
        [JsiiProperty(name: "attrLoadBalancerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLoadBalancerName
        {
            get;
        }

        /// <summary>Attribute LoadBalancerStatus: The NLB instance status.</summary>
        [JsiiProperty(name: "attrLoadBalancerStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLoadBalancerStatus
        {
            get;
        }

        /// <summary>Attribute LoadBalancerType: The type of the Server Load Balancer (SLB) instance.</summary>
        /// <remarks>
        /// Set the value to network, which specifies NLB.
        /// </remarks>
        [JsiiProperty(name: "attrLoadBalancerType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLoadBalancerType
        {
            get;
        }

        /// <summary>Attribute ModificationProtectionConfig: The configuration of the configuration read-only mode.</summary>
        [JsiiProperty(name: "attrModificationProtectionConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrModificationProtectionConfig
        {
            get;
        }

        /// <summary>Attribute OperationLocks: The information about the locked NLB instance.</summary>
        [JsiiProperty(name: "attrOperationLocks", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOperationLocks
        {
            get;
        }

        /// <summary>Attribute RegionId: The region ID of the NLB instance.</summary>
        [JsiiProperty(name: "attrRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRegionId
        {
            get;
        }

        /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceGroupId
        {
            get;
        }

        /// <summary>Attribute SecurityGroupIds: The ID of the security group associated with the NLB instance.</summary>
        [JsiiProperty(name: "attrSecurityGroupIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecurityGroupIds
        {
            get;
        }

        /// <summary>Attribute Tags: The tags of the resource.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTags
        {
            get;
        }

        /// <summary>Attribute VpcId: The VPC ID of the NLB instance.</summary>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpcId
        {
            get;
        }

        /// <summary>Attribute ZoneMappings: The list of zones and vSwitches in the zones.</summary>
        [JsiiProperty(name: "attrZoneMappings", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrZoneMappings
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-nlb.datasource.LoadBalancerProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Nlb.Datasource.ILoadBalancerProps Props
        {
            get;
        }

        /// <summary>Represents a `LoadBalancer`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ILoadBalancer), fullyQualifiedName: "@alicloud/ros-cdk-nlb.datasource.ILoadBalancer")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nlb.Datasource.ILoadBalancer
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AddressIpVersion: The protocol version.</summary>
            [JsiiProperty(name: "attrAddressIpVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAddressIpVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AddressType: The IPv4 network type of the NLB instance.</summary>
            [JsiiProperty(name: "attrAddressType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAddressType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BandwidthPackageId: The ID of the EIP bandwidth plan.</summary>
            [JsiiProperty(name: "attrBandwidthPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBandwidthPackageId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Cps: The maximum number of new connections per second supported by the NLB instance in each zone (virtual IP address).</summary>
            [JsiiProperty(name: "attrCps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCps
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: The time when the NLB instance was created.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CrossZoneEnabled: Indicates whether the NLB instance is accessible across zones.</summary>
            [JsiiProperty(name: "attrCrossZoneEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCrossZoneEnabled
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DeletionProtectionConfig: The configuration of the deletion protection feature.</summary>
            [JsiiProperty(name: "attrDeletionProtectionConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDeletionProtectionConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DNSName: The domain name of the NLB instance.</summary>
            [JsiiProperty(name: "attrDnsName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDnsName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Ipv6AddressType: The IPv6 network type of the NLB instance.</summary>
            [JsiiProperty(name: "attrIpv6AddressType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpv6AddressType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LoadBalancerBillingConfig: The billing information of the NLB instance.</summary>
            [JsiiProperty(name: "attrLoadBalancerBillingConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLoadBalancerBillingConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LoadBalancerBusinessStatus: The status of workloads on the NLB instance.</summary>
            [JsiiProperty(name: "attrLoadBalancerBusinessStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLoadBalancerBusinessStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LoadBalancerId: ID of the LoadBalancer.</summary>
            [JsiiProperty(name: "attrLoadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLoadBalancerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LoadBalancerName: The NLB instance name.</summary>
            [JsiiProperty(name: "attrLoadBalancerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLoadBalancerName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LoadBalancerStatus: The NLB instance status.</summary>
            [JsiiProperty(name: "attrLoadBalancerStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLoadBalancerStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LoadBalancerType: The type of the Server Load Balancer (SLB) instance.</summary>
            /// <remarks>
            /// Set the value to network, which specifies NLB.
            /// </remarks>
            [JsiiProperty(name: "attrLoadBalancerType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLoadBalancerType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ModificationProtectionConfig: The configuration of the configuration read-only mode.</summary>
            [JsiiProperty(name: "attrModificationProtectionConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrModificationProtectionConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OperationLocks: The information about the locked NLB instance.</summary>
            [JsiiProperty(name: "attrOperationLocks", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOperationLocks
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RegionId: The region ID of the NLB instance.</summary>
            [JsiiProperty(name: "attrRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
            [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SecurityGroupIds: The ID of the security group associated with the NLB instance.</summary>
            [JsiiProperty(name: "attrSecurityGroupIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecurityGroupIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Tags: The tags of the resource.</summary>
            [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTags
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VpcId: The VPC ID of the NLB instance.</summary>
            [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ZoneMappings: The list of zones and vSwitches in the zones.</summary>
            [JsiiProperty(name: "attrZoneMappings", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrZoneMappings
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-nlb.datasource.LoadBalancerProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Nlb.Datasource.ILoadBalancerProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Nlb.Datasource.ILoadBalancerProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
