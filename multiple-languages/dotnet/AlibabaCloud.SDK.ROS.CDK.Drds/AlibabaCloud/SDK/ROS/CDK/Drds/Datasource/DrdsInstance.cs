using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Drds.Datasource
{
    /// <summary>This class encapsulates and extends the ROS resource type `DATASOURCE::DRDS::DrdsInstance`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDrdsInstance`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsinstance
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Drds.Datasource.DrdsInstance), fullyQualifiedName: "@alicloud/ros-cdk-drds.datasource.DrdsInstance", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-drds.datasource.DrdsInstanceProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class DrdsInstance : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Drds.Datasource.IDrdsInstance
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public DrdsInstance(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Drds.Datasource.IDrdsInstanceProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Drds.Datasource.IDrdsInstanceProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected DrdsInstance(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected DrdsInstance(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute CommodityCode: The commodity code of the service.</summary>
        [JsiiProperty(name: "attrCommodityCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCommodityCode
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CreateTime: The timestamp that indicates when the instance is created.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCreateTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Description: The description of the instance.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDescription
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DrdsInstanceId: The ID of the Drds instance.</summary>
        [JsiiProperty(name: "attrDrdsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDrdsInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ExpireDate: The timestamp that indicates when the instance expires.</summary>
        [JsiiProperty(name: "attrExpireDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrExpireDate
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceSeries: The edition of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// starter: Starter Edition
        /// enterprise: Enterprise Edition
        /// standard: Standard Edition
        /// </remarks>
        [JsiiProperty(name: "attrInstanceSeries", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInstanceSeries
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceSpec: The specification of the instance.</summary>
        [JsiiProperty(name: "attrInstanceSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInstanceSpec
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstRole: The role of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// MASTER: The instance is a primary instance.
        /// SLAVE: The instance is a read-only instance to analyze complex queries.
        /// SLAVE_FLOW: The instance is a read-only instance for high-concurrency scenarios.
        /// </remarks>
        [JsiiProperty(name: "attrInstRole", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInstRole
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Label: The tag of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// NORMAL: The instance is a standard instance.
        /// HA: The instance is a high-availability (HA) instance.
        /// VPC: The instance is a VPC-based instance.
        /// </remarks>
        [JsiiProperty(name: "attrLabel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrLabel
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MachineType: The machine type of the instance.</summary>
        /// <remarks>
        /// Valid value: ecs.
        /// </remarks>
        [JsiiProperty(name: "attrMachineType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMachineType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MasterInstanceId: The ID of the primary instance.</summary>
        [JsiiProperty(name: "attrMasterInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMasterInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MysqlVersion: Engine version.</summary>
        [JsiiProperty(name: "attrMysqlVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMysqlVersion
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute NetworkType: The network type of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// CLASSIC
        /// VPC
        /// </remarks>
        [JsiiProperty(name: "attrNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrNetworkType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute OrderInstanceId: The ID of the purchased instance.</summary>
        [JsiiProperty(name: "attrOrderInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrOrderInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ReadOnlyDBInstanceIds: The IDs of read-only instances that are associated with the instance.</summary>
        [JsiiProperty(name: "attrReadOnlyDbInstanceIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrReadOnlyDbInstanceIds
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrResourceGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute StorageType: The storage type of the Drds database.</summary>
        /// <remarks>
        /// Valid values:
        /// RDS
        /// PolarDB
        /// </remarks>
        [JsiiProperty(name: "attrStorageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrStorageType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Type: The type of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// PUBLIC: The returned instance is a shared instance.
        /// PRIVATE: The returned instance is a dedicated instance.
        /// </remarks>
        [JsiiProperty(name: "attrType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Version: The version of the instance.</summary>
        [JsiiProperty(name: "attrVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVersion
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VersionAction: Indicates whether the version of the instance can be upgraded.</summary>
        [JsiiProperty(name: "attrVersionAction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVersionAction
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Vips: The list of returned virtual IP addresses (VIPs).</summary>
        [JsiiProperty(name: "attrVips", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVips
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VpcCloudInstanceId: The ID of the instance that is deployed in the VPC.</summary>
        [JsiiProperty(name: "attrVpcCloudInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVpcCloudInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ZoneId: The ID of the zone in which the resource is located.</summary>
        [JsiiProperty(name: "attrZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrZoneId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-drds.datasource.DrdsInstanceProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Drds.Datasource.IDrdsInstanceProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Drds.Datasource.IDrdsInstanceProps>()!;
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
