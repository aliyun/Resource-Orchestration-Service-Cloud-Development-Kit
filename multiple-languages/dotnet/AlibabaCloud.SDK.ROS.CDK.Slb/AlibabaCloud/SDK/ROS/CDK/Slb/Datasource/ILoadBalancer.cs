using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb.Datasource
{
    /// <summary>Represents a `LoadBalancer`.</summary>
    [JsiiInterface(nativeType: typeof(ILoadBalancer), fullyQualifiedName: "@alicloud/ros-cdk-slb.datasource.ILoadBalancer")]
    public interface ILoadBalancer : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Address: The service IP address of the CLB instance.</summary>
        [JsiiProperty(name: "attrAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAddress
        {
            get;
        }

        /// <summary>Attribute AddressIpVersion: The version of the IP address.</summary>
        /// <remarks>
        /// Valid values: ipv4 and ipv6.
        /// </remarks>
        [JsiiProperty(name: "attrAddressIpVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAddressIpVersion
        {
            get;
        }

        /// <summary>Attribute AddressType: The address type of the CLB instance.</summary>
        [JsiiProperty(name: "attrAddressType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAddressType
        {
            get;
        }

        /// <summary>Attribute AutoReleaseTime: The timestamp generated when the CLB instance is released.</summary>
        [JsiiProperty(name: "attrAutoReleaseTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAutoReleaseTime
        {
            get;
        }

        /// <summary>Attribute BackendServers: The backend servers of the CLB instance.</summary>
        [JsiiProperty(name: "attrBackendServers", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBackendServers
        {
            get;
        }

        /// <summary>Attribute Bandwidth: The maximum bandwidth of the Internet-facing CLB instance that is billed on a pay-by-bandwidth basis.</summary>
        [JsiiProperty(name: "attrBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBandwidth
        {
            get;
        }

        /// <summary>Attribute CreateTime: The time when the CLB instance was created.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute CreateTimeStamp: The timestamp generated when the CA certificate is uploaded.</summary>
        [JsiiProperty(name: "attrCreateTimeStamp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTimeStamp
        {
            get;
        }

        /// <summary>Attribute DeleteProtection: Indicates whether deletion protection is enabled for the CLB instance.</summary>
        [JsiiProperty(name: "attrDeleteProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDeleteProtection
        {
            get;
        }

        /// <summary>Attribute EndTime: The time when the CLB instance expires.</summary>
        [JsiiProperty(name: "attrEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEndTime
        {
            get;
        }

        /// <summary>Attribute EndTimeStamp: The timestamp that indicates the expiration time of the CLB instance.</summary>
        [JsiiProperty(name: "attrEndTimeStamp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEndTimeStamp
        {
            get;
        }

        /// <summary>Attribute InstanceChargeType: Instance billing method.</summary>
        [JsiiProperty(name: "attrInstanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceChargeType
        {
            get;
        }

        /// <summary>Attribute InternetChargeType: The metering method of the Internet-facing CLB instance.</summary>
        [JsiiProperty(name: "attrInternetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInternetChargeType
        {
            get;
        }

        /// <summary>Attribute ListenerPortsAndProtocal: The ports or protocols of the listeners.</summary>
        [JsiiProperty(name: "attrListenerPortsAndProtocal", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrListenerPortsAndProtocal
        {
            get;
        }

        /// <summary>Attribute ListenerPortsAndProtocol: The ports or protocols of the listeners.</summary>
        [JsiiProperty(name: "attrListenerPortsAndProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrListenerPortsAndProtocol
        {
            get;
        }

        /// <summary>Attribute LoadBalancerId: The CLB instance ID.</summary>
        [JsiiProperty(name: "attrLoadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLoadBalancerId
        {
            get;
        }

        /// <summary>Attribute LoadBalancerName: The name of the CLB instance.</summary>
        [JsiiProperty(name: "attrLoadBalancerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLoadBalancerName
        {
            get;
        }

        /// <summary>Attribute LoadBalancerSpec: The specification of the CLB instance.</summary>
        [JsiiProperty(name: "attrLoadBalancerSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLoadBalancerSpec
        {
            get;
        }

        /// <summary>Attribute MasterZoneId: The ID of the primary zone to which the CLB instance belongs.</summary>
        [JsiiProperty(name: "attrMasterZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMasterZoneId
        {
            get;
        }

        /// <summary>Attribute ModificationProtectionReason: The reason why the configuration read-only mode is enabled.</summary>
        [JsiiProperty(name: "attrModificationProtectionReason", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrModificationProtectionReason
        {
            get;
        }

        /// <summary>Attribute ModificationProtectionStatus: Load balancing modifies the protection state.</summary>
        [JsiiProperty(name: "attrModificationProtectionStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrModificationProtectionStatus
        {
            get;
        }

        /// <summary>Attribute NetworkType: The network type of the CLB instance.</summary>
        [JsiiProperty(name: "attrNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNetworkType
        {
            get;
        }

        /// <summary>Attribute PaymentType: Load balancing instance payment type.</summary>
        [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPaymentType
        {
            get;
        }

        /// <summary>Attribute RegionIdAlias: The alias of the region to which the CLB instance belongs.</summary>
        [JsiiProperty(name: "attrRegionIdAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRegionIdAlias
        {
            get;
        }

        /// <summary>Attribute RenewalCycUnit: The auto-renewal cycle.</summary>
        /// <remarks>
        /// Valid values: Year and Month. Default value: Month.
        /// </remarks>
        [JsiiProperty(name: "attrRenewalCycUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRenewalCycUnit
        {
            get;
        }

        /// <summary>Attribute RenewalDuration: The auto-renewal duration.</summary>
        /// <remarks>
        /// This parameter is valid only if RenewalStatus is set to AutoRenewal.
        /// </remarks>
        [JsiiProperty(name: "attrRenewalDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRenewalDuration
        {
            get;
        }

        /// <summary>Attribute RenewalStatus: Indicates whether auto-renewal is enabled.</summary>
        [JsiiProperty(name: "attrRenewalStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRenewalStatus
        {
            get;
        }

        /// <summary>Attribute ResourceGroupId: The resource group ID.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceGroupId
        {
            get;
        }

        /// <summary>Attribute SlaveZoneId: The ID of the secondary zone to which the CLB instance belongs.</summary>
        [JsiiProperty(name: "attrSlaveZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSlaveZoneId
        {
            get;
        }

        /// <summary>Attribute Tags: The tags of the CLB instance.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTags
        {
            get;
        }

        /// <summary>Attribute VpcId: The ID of the virtual private cloud (VPC) where the internal-facing CLB instance is deployed.</summary>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpcId
        {
            get;
        }

        /// <summary>Attribute VSwitchId: The ID of the vSwitch to which the internal-facing CLB instance belongs.</summary>
        [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVSwitchId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-slb.datasource.LoadBalancerProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.ILoadBalancerProps Props
        {
            get;
        }

        /// <summary>Represents a `LoadBalancer`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ILoadBalancer), fullyQualifiedName: "@alicloud/ros-cdk-slb.datasource.ILoadBalancer")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.ILoadBalancer
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Address: The service IP address of the CLB instance.</summary>
            [JsiiProperty(name: "attrAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAddress
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AddressIpVersion: The version of the IP address.</summary>
            /// <remarks>
            /// Valid values: ipv4 and ipv6.
            /// </remarks>
            [JsiiProperty(name: "attrAddressIpVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAddressIpVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AddressType: The address type of the CLB instance.</summary>
            [JsiiProperty(name: "attrAddressType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAddressType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AutoReleaseTime: The timestamp generated when the CLB instance is released.</summary>
            [JsiiProperty(name: "attrAutoReleaseTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAutoReleaseTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BackendServers: The backend servers of the CLB instance.</summary>
            [JsiiProperty(name: "attrBackendServers", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBackendServers
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Bandwidth: The maximum bandwidth of the Internet-facing CLB instance that is billed on a pay-by-bandwidth basis.</summary>
            [JsiiProperty(name: "attrBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBandwidth
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: The time when the CLB instance was created.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTimeStamp: The timestamp generated when the CA certificate is uploaded.</summary>
            [JsiiProperty(name: "attrCreateTimeStamp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTimeStamp
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DeleteProtection: Indicates whether deletion protection is enabled for the CLB instance.</summary>
            [JsiiProperty(name: "attrDeleteProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDeleteProtection
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EndTime: The time when the CLB instance expires.</summary>
            [JsiiProperty(name: "attrEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEndTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EndTimeStamp: The timestamp that indicates the expiration time of the CLB instance.</summary>
            [JsiiProperty(name: "attrEndTimeStamp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEndTimeStamp
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceChargeType: Instance billing method.</summary>
            [JsiiProperty(name: "attrInstanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceChargeType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InternetChargeType: The metering method of the Internet-facing CLB instance.</summary>
            [JsiiProperty(name: "attrInternetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInternetChargeType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ListenerPortsAndProtocal: The ports or protocols of the listeners.</summary>
            [JsiiProperty(name: "attrListenerPortsAndProtocal", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrListenerPortsAndProtocal
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ListenerPortsAndProtocol: The ports or protocols of the listeners.</summary>
            [JsiiProperty(name: "attrListenerPortsAndProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrListenerPortsAndProtocol
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LoadBalancerId: The CLB instance ID.</summary>
            [JsiiProperty(name: "attrLoadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLoadBalancerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LoadBalancerName: The name of the CLB instance.</summary>
            [JsiiProperty(name: "attrLoadBalancerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLoadBalancerName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LoadBalancerSpec: The specification of the CLB instance.</summary>
            [JsiiProperty(name: "attrLoadBalancerSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLoadBalancerSpec
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MasterZoneId: The ID of the primary zone to which the CLB instance belongs.</summary>
            [JsiiProperty(name: "attrMasterZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMasterZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ModificationProtectionReason: The reason why the configuration read-only mode is enabled.</summary>
            [JsiiProperty(name: "attrModificationProtectionReason", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrModificationProtectionReason
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ModificationProtectionStatus: Load balancing modifies the protection state.</summary>
            [JsiiProperty(name: "attrModificationProtectionStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrModificationProtectionStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NetworkType: The network type of the CLB instance.</summary>
            [JsiiProperty(name: "attrNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNetworkType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PaymentType: Load balancing instance payment type.</summary>
            [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPaymentType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RegionIdAlias: The alias of the region to which the CLB instance belongs.</summary>
            [JsiiProperty(name: "attrRegionIdAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRegionIdAlias
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RenewalCycUnit: The auto-renewal cycle.</summary>
            /// <remarks>
            /// Valid values: Year and Month. Default value: Month.
            /// </remarks>
            [JsiiProperty(name: "attrRenewalCycUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRenewalCycUnit
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RenewalDuration: The auto-renewal duration.</summary>
            /// <remarks>
            /// This parameter is valid only if RenewalStatus is set to AutoRenewal.
            /// </remarks>
            [JsiiProperty(name: "attrRenewalDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRenewalDuration
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RenewalStatus: Indicates whether auto-renewal is enabled.</summary>
            [JsiiProperty(name: "attrRenewalStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRenewalStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceGroupId: The resource group ID.</summary>
            [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SlaveZoneId: The ID of the secondary zone to which the CLB instance belongs.</summary>
            [JsiiProperty(name: "attrSlaveZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSlaveZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Tags: The tags of the CLB instance.</summary>
            [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTags
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VpcId: The ID of the virtual private cloud (VPC) where the internal-facing CLB instance is deployed.</summary>
            [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VSwitchId: The ID of the vSwitch to which the internal-facing CLB instance belongs.</summary>
            [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-slb.datasource.LoadBalancerProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.ILoadBalancerProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.ILoadBalancerProps>()!;
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
