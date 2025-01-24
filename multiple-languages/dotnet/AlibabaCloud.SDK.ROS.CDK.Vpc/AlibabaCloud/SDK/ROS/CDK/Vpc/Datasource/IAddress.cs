using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Represents a `Address`.</summary>
    [JsiiInterface(nativeType: typeof(IAddress), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.IAddress")]
    public interface IAddress : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AddressName: The name of the EIP.</summary>
        [JsiiProperty(name: "attrAddressName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAddressName
        {
            get;
        }

        /// <summary>Attribute AllocationId: The ID of the EIP instance.</summary>
        [JsiiProperty(name: "attrAllocationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAllocationId
        {
            get;
        }

        /// <summary>Attribute Bandwidth: The peak bandwidth of the EIP.</summary>
        /// <remarks>
        /// Unit: Mbps.
        /// </remarks>
        [JsiiProperty(name: "attrBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBandwidth
        {
            get;
        }

        /// <summary>Attribute BandwidthPackageBandwidth: The bandwidth value of the Internet shared bandwidth added to the EIP.</summary>
        /// <remarks>
        /// The unit is Mbps.
        /// </remarks>
        [JsiiProperty(name: "attrBandwidthPackageBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBandwidthPackageBandwidth
        {
            get;
        }

        /// <summary>Attribute BandwidthPackageId: The ID of the added shared bandwidth.</summary>
        [JsiiProperty(name: "attrBandwidthPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBandwidthPackageId
        {
            get;
        }

        /// <summary>Attribute BandwidthPackageType: The type of bandwidth.</summary>
        /// <remarks>
        /// Only <strong>CommonBandwidthPackage</strong> (shared bandwidth) is supported.
        /// </remarks>
        [JsiiProperty(name: "attrBandwidthPackageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBandwidthPackageType
        {
            get;
        }

        /// <summary>Attribute BusinessStatus: The business status of the EIP instance.</summary>
        [JsiiProperty(name: "attrBusinessStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBusinessStatus
        {
            get;
        }

        /// <summary>Attribute CreateTime: The time when the EIP was created.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute DeletionProtection: Whether the delete protection function is turned on.</summary>
        [JsiiProperty(name: "attrDeletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDeletionProtection
        {
            get;
        }

        /// <summary>Attribute Description: The description of the EIP instance.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute EipBandwidth: AN EIP is added to an Internet shared bandwidth before or exit purchase an Internet shared bandwidth instance after the bandwidth Mbps Set for the bandwidth.</summary>
        [JsiiProperty(name: "attrEipBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEipBandwidth
        {
            get;
        }

        /// <summary>Attribute ExpiredTime: Expiration time, format' YYYY-MM-DDThh:mm:ssZ '.</summary>
        [JsiiProperty(name: "attrExpiredTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrExpiredTime
        {
            get;
        }

        /// <summary>Attribute HasReservationData: Whether there is renewal data.</summary>
        [JsiiProperty(name: "attrHasReservationData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHasReservationData
        {
            get;
        }

        /// <summary>Attribute HdMonitorStatus: Whether the second-level monitoring is enabled for the EIP.</summary>
        [JsiiProperty(name: "attrHdMonitorStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHdMonitorStatus
        {
            get;
        }

        /// <summary>Attribute InstanceId: The ID of the current bound instance.</summary>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceId
        {
            get;
        }

        /// <summary>Attribute InstanceRegionId: The region ID of the currently bound resource.</summary>
        [JsiiProperty(name: "attrInstanceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceRegionId
        {
            get;
        }

        /// <summary>Attribute InstanceType: The type of the current bound instance.</summary>
        [JsiiProperty(name: "attrInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceType
        {
            get;
        }

        /// <summary>Attribute IpAddress: The IP address of the EIP.</summary>
        [JsiiProperty(name: "attrIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpAddress
        {
            get;
        }

        /// <summary>Attribute Isp: Service providers.</summary>
        [JsiiProperty(name: "attrIsp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIsp
        {
            get;
        }

        /// <summary>Attribute Netmode: Network type.</summary>
        [JsiiProperty(name: "attrNetmode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNetmode
        {
            get;
        }

        /// <summary>Attribute OperationLocks: Lock details.</summary>
        [JsiiProperty(name: "attrOperationLocks", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOperationLocks
        {
            get;
        }

        /// <summary>Attribute PaymentType: The billing method of the EIP.</summary>
        [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPaymentType
        {
            get;
        }

        /// <summary>Attribute PublicIpAddressPoolId: The ID of the IP address pool to which the EIP belongs.</summary>
        [JsiiProperty(name: "attrPublicIpAddressPoolId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPublicIpAddressPoolId
        {
            get;
        }

        /// <summary>Attribute ReservationActiveTime: The effective time of the renewal fee, in the format of 'YYYY-MM-DDThh:mm:ssZ'.</summary>
        [JsiiProperty(name: "attrReservationActiveTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrReservationActiveTime
        {
            get;
        }

        /// <summary>Attribute ReservationBandwidth: Renewal bandwidth, in Mbps.</summary>
        [JsiiProperty(name: "attrReservationBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrReservationBandwidth
        {
            get;
        }

        /// <summary>Attribute ReservationInternetChargeType: Renewal Payment type.</summary>
        [JsiiProperty(name: "attrReservationInternetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrReservationInternetChargeType
        {
            get;
        }

        /// <summary>Attribute ReservationOrderType: Renewal order type.</summary>
        [JsiiProperty(name: "attrReservationOrderType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrReservationOrderType
        {
            get;
        }

        /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceGroupId
        {
            get;
        }

        /// <summary>Attribute SecondLimited: Whether a secondary speed limit is configured.</summary>
        [JsiiProperty(name: "attrSecondLimited", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecondLimited
        {
            get;
        }

        /// <summary>Attribute SecurityProtectionTypes: Security protection level.</summary>
        [JsiiProperty(name: "attrSecurityProtectionTypes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecurityProtectionTypes
        {
            get;
        }

        /// <summary>Attribute SegmentInstanceId: The ID of the consecutive EIPs.</summary>
        [JsiiProperty(name: "attrSegmentInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSegmentInstanceId
        {
            get;
        }

        /// <summary>Attribute ServiceManaged: Indicates the resource created for the service account.</summary>
        [JsiiProperty(name: "attrServiceManaged", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrServiceManaged
        {
            get;
        }

        /// <summary>Attribute Tags: The tag of the resource.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTags
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.datasource.AddressProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IAddressProps Props
        {
            get;
        }

        /// <summary>Represents a `Address`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAddress), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.IAddress")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IAddress
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AddressName: The name of the EIP.</summary>
            [JsiiProperty(name: "attrAddressName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAddressName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AllocationId: The ID of the EIP instance.</summary>
            [JsiiProperty(name: "attrAllocationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAllocationId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Bandwidth: The peak bandwidth of the EIP.</summary>
            /// <remarks>
            /// Unit: Mbps.
            /// </remarks>
            [JsiiProperty(name: "attrBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBandwidth
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BandwidthPackageBandwidth: The bandwidth value of the Internet shared bandwidth added to the EIP.</summary>
            /// <remarks>
            /// The unit is Mbps.
            /// </remarks>
            [JsiiProperty(name: "attrBandwidthPackageBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBandwidthPackageBandwidth
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BandwidthPackageId: The ID of the added shared bandwidth.</summary>
            [JsiiProperty(name: "attrBandwidthPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBandwidthPackageId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BandwidthPackageType: The type of bandwidth.</summary>
            /// <remarks>
            /// Only <strong>CommonBandwidthPackage</strong> (shared bandwidth) is supported.
            /// </remarks>
            [JsiiProperty(name: "attrBandwidthPackageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBandwidthPackageType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BusinessStatus: The business status of the EIP instance.</summary>
            [JsiiProperty(name: "attrBusinessStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBusinessStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: The time when the EIP was created.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DeletionProtection: Whether the delete protection function is turned on.</summary>
            [JsiiProperty(name: "attrDeletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDeletionProtection
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: The description of the EIP instance.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EipBandwidth: AN EIP is added to an Internet shared bandwidth before or exit purchase an Internet shared bandwidth instance after the bandwidth Mbps Set for the bandwidth.</summary>
            [JsiiProperty(name: "attrEipBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEipBandwidth
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ExpiredTime: Expiration time, format' YYYY-MM-DDThh:mm:ssZ '.</summary>
            [JsiiProperty(name: "attrExpiredTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrExpiredTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HasReservationData: Whether there is renewal data.</summary>
            [JsiiProperty(name: "attrHasReservationData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHasReservationData
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HdMonitorStatus: Whether the second-level monitoring is enabled for the EIP.</summary>
            [JsiiProperty(name: "attrHdMonitorStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHdMonitorStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceId: The ID of the current bound instance.</summary>
            [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceRegionId: The region ID of the currently bound resource.</summary>
            [JsiiProperty(name: "attrInstanceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceType: The type of the current bound instance.</summary>
            [JsiiProperty(name: "attrInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IpAddress: The IP address of the EIP.</summary>
            [JsiiProperty(name: "attrIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpAddress
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Isp: Service providers.</summary>
            [JsiiProperty(name: "attrIsp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIsp
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Netmode: Network type.</summary>
            [JsiiProperty(name: "attrNetmode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNetmode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OperationLocks: Lock details.</summary>
            [JsiiProperty(name: "attrOperationLocks", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOperationLocks
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PaymentType: The billing method of the EIP.</summary>
            [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPaymentType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PublicIpAddressPoolId: The ID of the IP address pool to which the EIP belongs.</summary>
            [JsiiProperty(name: "attrPublicIpAddressPoolId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPublicIpAddressPoolId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ReservationActiveTime: The effective time of the renewal fee, in the format of 'YYYY-MM-DDThh:mm:ssZ'.</summary>
            [JsiiProperty(name: "attrReservationActiveTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrReservationActiveTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ReservationBandwidth: Renewal bandwidth, in Mbps.</summary>
            [JsiiProperty(name: "attrReservationBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrReservationBandwidth
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ReservationInternetChargeType: Renewal Payment type.</summary>
            [JsiiProperty(name: "attrReservationInternetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrReservationInternetChargeType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ReservationOrderType: Renewal order type.</summary>
            [JsiiProperty(name: "attrReservationOrderType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrReservationOrderType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
            [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SecondLimited: Whether a secondary speed limit is configured.</summary>
            [JsiiProperty(name: "attrSecondLimited", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecondLimited
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SecurityProtectionTypes: Security protection level.</summary>
            [JsiiProperty(name: "attrSecurityProtectionTypes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecurityProtectionTypes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SegmentInstanceId: The ID of the consecutive EIPs.</summary>
            [JsiiProperty(name: "attrSegmentInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSegmentInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ServiceManaged: Indicates the resource created for the service account.</summary>
            [JsiiProperty(name: "attrServiceManaged", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrServiceManaged
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Tags: The tag of the resource.</summary>
            [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTags
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.datasource.AddressProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IAddressProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IAddressProps>()!;
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
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ResourceEnvironment\"}")]
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
