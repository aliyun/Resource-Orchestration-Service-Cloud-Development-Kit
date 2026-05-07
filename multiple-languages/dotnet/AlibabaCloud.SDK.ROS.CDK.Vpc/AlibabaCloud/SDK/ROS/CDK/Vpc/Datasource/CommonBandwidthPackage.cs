using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::CommonBandwidthPackage`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCommonBandwidthPackage`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-commonbandwidthpackage
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.CommonBandwidthPackage), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.CommonBandwidthPackage", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-vpc.datasource.CommonBandwidthPackageProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class CommonBandwidthPackage : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.ICommonBandwidthPackage
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public CommonBandwidthPackage(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.ICommonBandwidthPackageProps? props = null, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.ICommonBandwidthPackageProps? props = null, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected CommonBandwidthPackage(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected CommonBandwidthPackage(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute Bandwidth: The maximum bandwidth of the Internet Shared Bandwidth instance.</summary>
        /// <remarks>
        /// Unit: Mbit/s.
        /// </remarks>
        [JsiiProperty(name: "attrBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrBandwidth
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
        public virtual object AttrBusinessStatus
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CommonBandwidthPackageId: The ID of the Internet shared bandwidth.</summary>
        [JsiiProperty(name: "attrCommonBandwidthPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCommonBandwidthPackageId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CommonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.</summary>
        [JsiiProperty(name: "attrCommonBandwidthPackageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCommonBandwidthPackageName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CreationTime: The time when the Internet Shared Bandwidth instance was created.</summary>
        /// <remarks>
        /// The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
        /// </remarks>
        [JsiiProperty(name: "attrCreationTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCreationTime
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
        public virtual object AttrDeletionProtection
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Description: The description of the Internet Shared Bandwidth instance.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDescription
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ExpiredTime: The time when the Internet Shared Bandwidth instance expired.</summary>
        /// <remarks>
        /// The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
        /// </remarks>
        [JsiiProperty(name: "attrExpiredTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrExpiredTime
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
        public virtual object AttrHasReservationData
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
        public virtual object AttrInstanceChargeType
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
        public virtual object AttrInternetChargeType
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
        public virtual object AttrIsp
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PublicIpAddresses: The elastic IP addresses (EIPs) that are associated with the Internet Shared Bandwidth instance.</summary>
        [JsiiProperty(name: "attrPublicIpAddresses", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPublicIpAddresses
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Ratio: The percentage of the minimum bandwidth commitment.</summary>
        /// <remarks>
        /// Only 20 is returned.
        /// </remarks>
        [JsiiProperty(name: "attrRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRatio
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ReservationActiveTime: The time when the renewal took effect.</summary>
        /// <remarks>
        /// The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
        /// </remarks>
        [JsiiProperty(name: "attrReservationActiveTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrReservationActiveTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ReservationBandwidth: The new maximum bandwidth after the configurations are changed.</summary>
        /// <remarks>
        /// Unit: Mbit/s.
        /// </remarks>
        [JsiiProperty(name: "attrReservationBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrReservationBandwidth
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
        public virtual object AttrReservationInternetChargeType
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
        public virtual object AttrReservationOrderType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrResourceGroupId
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
        public virtual object AttrServiceManaged
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
        public virtual object AttrStatus
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.datasource.CommonBandwidthPackageProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.ICommonBandwidthPackageProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.ICommonBandwidthPackageProps>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        protected virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "id", typeJson: "{\"primitive\":\"string\"}")]
        protected virtual string Id
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "scope", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}")]
        protected virtual AlibabaCloud.SDK.ROS.CDK.Core.Construct Scope
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Construct>()!;
            set => SetInstanceProperty(value);
        }
    }
}
