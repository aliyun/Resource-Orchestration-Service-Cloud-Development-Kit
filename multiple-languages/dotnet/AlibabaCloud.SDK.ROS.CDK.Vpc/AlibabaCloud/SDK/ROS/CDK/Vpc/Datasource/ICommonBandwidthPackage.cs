using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Represents a `CommonBandwidthPackage`.</summary>
    [JsiiInterface(nativeType: typeof(ICommonBandwidthPackage), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.ICommonBandwidthPackage")]
    public interface ICommonBandwidthPackage : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Bandwidth: The maximum bandwidth of the Internet Shared Bandwidth instance.</summary>
        /// <remarks>
        /// Unit: Mbit/s.
        /// </remarks>
        [JsiiProperty(name: "attrBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBandwidth
        {
            get;
        }

        /// <summary>Attribute BusinessStatus: The service status of the Internet Shared Bandwidth instance.</summary>
        /// <remarks>
        /// Valid values:
        /// Normal: The Internet Shared Bandwidth instance runs as expected.
        /// FinancialLocked: An overdue payment occurs in the Internet Shared Bandwidth instance
        /// Unactivated: The Internet Shared Bandwidth instance is not activated.
        /// </remarks>
        [JsiiProperty(name: "attrBusinessStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBusinessStatus
        {
            get;
        }

        /// <summary>Attribute CommonBandwidthPackageId: The ID of the Internet shared bandwidth.</summary>
        [JsiiProperty(name: "attrCommonBandwidthPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCommonBandwidthPackageId
        {
            get;
        }

        /// <summary>Attribute CommonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.</summary>
        [JsiiProperty(name: "attrCommonBandwidthPackageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCommonBandwidthPackageName
        {
            get;
        }

        /// <summary>Attribute CreationTime: The time when the Internet Shared Bandwidth instance was created.</summary>
        /// <remarks>
        /// The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
        /// </remarks>
        [JsiiProperty(name: "attrCreationTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreationTime
        {
            get;
        }

        /// <summary>Attribute DeletionProtection: Indicates whether deletion protection is enabled.</summary>
        /// <remarks>
        /// Valid values:
        /// false
        /// true
        /// </remarks>
        [JsiiProperty(name: "attrDeletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDeletionProtection
        {
            get;
        }

        /// <summary>Attribute Description: The description of the Internet Shared Bandwidth instance.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute ExpiredTime: The time when the Internet Shared Bandwidth instance expired.</summary>
        /// <remarks>
        /// The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
        /// </remarks>
        [JsiiProperty(name: "attrExpiredTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrExpiredTime
        {
            get;
        }

        /// <summary>Attribute HasReservationData: Indicates whether the information about pending orders is returned.</summary>
        /// <remarks>
        /// Valid values:
        /// false
        /// true
        /// </remarks>
        [JsiiProperty(name: "attrHasReservationData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHasReservationData
        {
            get;
        }

        /// <summary>Attribute InstanceChargeType: The billing method of the Internet Shared Bandwidth instance.</summary>
        /// <remarks>
        /// Valid value:
        /// PostPaid: pay-as-you-go
        /// PrePaid: subscription
        /// </remarks>
        [JsiiProperty(name: "attrInstanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceChargeType
        {
            get;
        }

        /// <summary>Attribute InternetChargeType: The metering method of the Internet Shared Bandwidth instance.</summary>
        /// <remarks>
        /// Valid value:
        /// PayBy95: Charged by Enhanced 95th Percentile.
        /// PayByBandwidth: Charged by Bandwidth.
        /// PayByDominantTraffic: Charged by Dominant Traffic.
        /// </remarks>
        [JsiiProperty(name: "attrInternetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInternetChargeType
        {
            get;
        }

        /// <summary>Attribute Isp: The line type.</summary>
        /// <remarks>
        /// Valid values:
        /// BGP (default): BGP (Multi-ISP) lines.
        /// BGP_PRO: BGP (Multi-ISP) Pro lines.
        /// Valid values if you are allowed to use single-ISP bandwidth:
        /// ChinaTelecom
        /// ChinaUnicom
        /// ChinaMobile
        /// ChinaTelecom_L2
        /// ChinaUnicom_L2
        /// ChinaMobile_L2
        /// </remarks>
        [JsiiProperty(name: "attrIsp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIsp
        {
            get;
        }

        /// <summary>Attribute PublicIpAddresses: The elastic IP addresses (EIPs) that are associated with the Internet Shared Bandwidth instance.</summary>
        [JsiiProperty(name: "attrPublicIpAddresses", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPublicIpAddresses
        {
            get;
        }

        /// <summary>Attribute Ratio: The percentage of the minimum bandwidth commitment.</summary>
        /// <remarks>
        /// Only 20 is returned.
        /// </remarks>
        [JsiiProperty(name: "attrRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRatio
        {
            get;
        }

        /// <summary>Attribute ReservationActiveTime: The time when the renewal took effect.</summary>
        /// <remarks>
        /// The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
        /// </remarks>
        [JsiiProperty(name: "attrReservationActiveTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrReservationActiveTime
        {
            get;
        }

        /// <summary>Attribute ReservationBandwidth: The new maximum bandwidth after the configurations are changed.</summary>
        /// <remarks>
        /// Unit: Mbit/s.
        /// </remarks>
        [JsiiProperty(name: "attrReservationBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrReservationBandwidth
        {
            get;
        }

        /// <summary>Attribute ReservationInternetChargeType: The metering method after the configurations are changed.</summary>
        /// <remarks>
        /// Valid value:
        /// PayBy95: Charged by Enhanced 95th Percentile.
        /// PayByBandwidth: Charged by Bandwidth.
        /// PayByDominantTraffic: Charged by Dominant Traffic.
        /// </remarks>
        [JsiiProperty(name: "attrReservationInternetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrReservationInternetChargeType
        {
            get;
        }

        /// <summary>Attribute ReservationOrderType: The renewal method.</summary>
        /// <remarks>
        /// Valid values:
        /// RENEWCHANGE: renewal with a specification change
        /// TEMP_UPGRADE: renewal with a temporary upgrade
        /// UPGRADE: renewal with an upgrade
        /// </remarks>
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

        /// <summary>Attribute ServiceManaged: Indicates whether the resource is created by the service account.</summary>
        /// <remarks>
        /// Valid values:
        /// 0: The resource is not created by the service account.
        /// 1: The resource is created by the service account.
        /// </remarks>
        [JsiiProperty(name: "attrServiceManaged", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrServiceManaged
        {
            get;
        }

        /// <summary>Attribute Status: The status of the Internet Shared Bandwidth instance.</summary>
        /// <remarks>
        /// Valid values:
        /// Available: The Internet Shared Bandwidth instance is available.
        /// Modifying: The Internet Shared Bandwidth instance is being modified.
        /// </remarks>
        [JsiiProperty(name: "attrStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStatus
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.datasource.CommonBandwidthPackageProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.ICommonBandwidthPackageProps Props
        {
            get;
        }

        /// <summary>Represents a `CommonBandwidthPackage`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ICommonBandwidthPackage), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.ICommonBandwidthPackage")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.ICommonBandwidthPackage
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Bandwidth: The maximum bandwidth of the Internet Shared Bandwidth instance.</summary>
            /// <remarks>
            /// Unit: Mbit/s.
            /// </remarks>
            [JsiiProperty(name: "attrBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBandwidth
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BusinessStatus: The service status of the Internet Shared Bandwidth instance.</summary>
            /// <remarks>
            /// Valid values:
            /// Normal: The Internet Shared Bandwidth instance runs as expected.
            /// FinancialLocked: An overdue payment occurs in the Internet Shared Bandwidth instance
            /// Unactivated: The Internet Shared Bandwidth instance is not activated.
            /// </remarks>
            [JsiiProperty(name: "attrBusinessStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBusinessStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CommonBandwidthPackageId: The ID of the Internet shared bandwidth.</summary>
            [JsiiProperty(name: "attrCommonBandwidthPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCommonBandwidthPackageId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CommonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.</summary>
            [JsiiProperty(name: "attrCommonBandwidthPackageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCommonBandwidthPackageName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreationTime: The time when the Internet Shared Bandwidth instance was created.</summary>
            /// <remarks>
            /// The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
            /// </remarks>
            [JsiiProperty(name: "attrCreationTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreationTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DeletionProtection: Indicates whether deletion protection is enabled.</summary>
            /// <remarks>
            /// Valid values:
            /// false
            /// true
            /// </remarks>
            [JsiiProperty(name: "attrDeletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDeletionProtection
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: The description of the Internet Shared Bandwidth instance.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ExpiredTime: The time when the Internet Shared Bandwidth instance expired.</summary>
            /// <remarks>
            /// The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
            /// </remarks>
            [JsiiProperty(name: "attrExpiredTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrExpiredTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HasReservationData: Indicates whether the information about pending orders is returned.</summary>
            /// <remarks>
            /// Valid values:
            /// false
            /// true
            /// </remarks>
            [JsiiProperty(name: "attrHasReservationData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHasReservationData
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceChargeType: The billing method of the Internet Shared Bandwidth instance.</summary>
            /// <remarks>
            /// Valid value:
            /// PostPaid: pay-as-you-go
            /// PrePaid: subscription
            /// </remarks>
            [JsiiProperty(name: "attrInstanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceChargeType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InternetChargeType: The metering method of the Internet Shared Bandwidth instance.</summary>
            /// <remarks>
            /// Valid value:
            /// PayBy95: Charged by Enhanced 95th Percentile.
            /// PayByBandwidth: Charged by Bandwidth.
            /// PayByDominantTraffic: Charged by Dominant Traffic.
            /// </remarks>
            [JsiiProperty(name: "attrInternetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInternetChargeType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Isp: The line type.</summary>
            /// <remarks>
            /// Valid values:
            /// BGP (default): BGP (Multi-ISP) lines.
            /// BGP_PRO: BGP (Multi-ISP) Pro lines.
            /// Valid values if you are allowed to use single-ISP bandwidth:
            /// ChinaTelecom
            /// ChinaUnicom
            /// ChinaMobile
            /// ChinaTelecom_L2
            /// ChinaUnicom_L2
            /// ChinaMobile_L2
            /// </remarks>
            [JsiiProperty(name: "attrIsp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIsp
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PublicIpAddresses: The elastic IP addresses (EIPs) that are associated with the Internet Shared Bandwidth instance.</summary>
            [JsiiProperty(name: "attrPublicIpAddresses", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPublicIpAddresses
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Ratio: The percentage of the minimum bandwidth commitment.</summary>
            /// <remarks>
            /// Only 20 is returned.
            /// </remarks>
            [JsiiProperty(name: "attrRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRatio
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ReservationActiveTime: The time when the renewal took effect.</summary>
            /// <remarks>
            /// The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
            /// </remarks>
            [JsiiProperty(name: "attrReservationActiveTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrReservationActiveTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ReservationBandwidth: The new maximum bandwidth after the configurations are changed.</summary>
            /// <remarks>
            /// Unit: Mbit/s.
            /// </remarks>
            [JsiiProperty(name: "attrReservationBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrReservationBandwidth
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ReservationInternetChargeType: The metering method after the configurations are changed.</summary>
            /// <remarks>
            /// Valid value:
            /// PayBy95: Charged by Enhanced 95th Percentile.
            /// PayByBandwidth: Charged by Bandwidth.
            /// PayByDominantTraffic: Charged by Dominant Traffic.
            /// </remarks>
            [JsiiProperty(name: "attrReservationInternetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrReservationInternetChargeType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ReservationOrderType: The renewal method.</summary>
            /// <remarks>
            /// Valid values:
            /// RENEWCHANGE: renewal with a specification change
            /// TEMP_UPGRADE: renewal with a temporary upgrade
            /// UPGRADE: renewal with an upgrade
            /// </remarks>
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

            /// <summary>Attribute ServiceManaged: Indicates whether the resource is created by the service account.</summary>
            /// <remarks>
            /// Valid values:
            /// 0: The resource is not created by the service account.
            /// 1: The resource is created by the service account.
            /// </remarks>
            [JsiiProperty(name: "attrServiceManaged", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrServiceManaged
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Status: The status of the Internet Shared Bandwidth instance.</summary>
            /// <remarks>
            /// Valid values:
            /// Available: The Internet Shared Bandwidth instance is available.
            /// Modifying: The Internet Shared Bandwidth instance is being modified.
            /// </remarks>
            [JsiiProperty(name: "attrStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.datasource.CommonBandwidthPackageProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.ICommonBandwidthPackageProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.ICommonBandwidthPackageProps>()!;
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
