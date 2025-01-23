using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ebs.Datasource
{
    /// <summary>This class encapsulates and extends the ROS resource type `DATASOURCE::EBS::DiskReplicaGroup`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDiskReplicaGroup`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicagroup
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ebs.Datasource.DiskReplicaGroup), fullyQualifiedName: "@alicloud/ros-cdk-ebs.datasource.DiskReplicaGroup", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ebs.datasource.DiskReplicaGroupProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class DiskReplicaGroup : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Ebs.Datasource.IDiskReplicaGroup
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public DiskReplicaGroup(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ebs.Datasource.IDiskReplicaGroupProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ebs.Datasource.IDiskReplicaGroupProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected DiskReplicaGroup(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected DiskReplicaGroup(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute Description: The description of the consistent replication group.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDescription
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DestinationRegionId: The ID of the region to which the disaster recovery site belongs.</summary>
        [JsiiProperty(name: "attrDestinationRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDestinationRegionId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DestinationZoneId: The ID of the zone to which the disaster recovery site belongs.</summary>
        [JsiiProperty(name: "attrDestinationZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDestinationZoneId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DiskReplicaGroupName: The name of the consistent replication group.</summary>
        [JsiiProperty(name: "attrDiskReplicaGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDiskReplicaGroupName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute LastRecoverPoint: The time when the last asynchronous replication operation of the consistent replication group completed.</summary>
        /// <remarks>
        /// This parameter provides the return value as a timestamp. Unit: seconds.
        /// </remarks>
        [JsiiProperty(name: "attrLastRecoverPoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrLastRecoverPoint
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PairIds: List of replication pair IDs contained in a consistent replication group.</summary>
        [JsiiProperty(name: "attrPairIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPairIds
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PairNumber: The number of replication pairs contained in a consistent replication group.</summary>
        [JsiiProperty(name: "attrPairNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPairNumber
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PrimaryRegion: The initial source region of the replication group.</summary>
        [JsiiProperty(name: "attrPrimaryRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPrimaryRegion
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PrimaryZone: The initial source available area of the replication group.</summary>
        [JsiiProperty(name: "attrPrimaryZone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPrimaryZone
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ReplicaGroupId: The ID of the consistent replication group.</summary>
        [JsiiProperty(name: "attrReplicaGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrReplicaGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ResourceGroupId: The ID of resource group.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrResourceGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RPO: The RPO value set by the consistency group in seconds.</summary>
        /// <remarks>
        /// Currently only 900 seconds are supported.
        /// </remarks>
        [JsiiProperty(name: "attrRpo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRpo
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Site: Site information sources for replication pairs and consistent replication groups.</summary>
        [JsiiProperty(name: "attrSite", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSite
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SourceRegionId: The ID of the region to which the production site belongs.</summary>
        [JsiiProperty(name: "attrSourceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSourceRegionId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SourceZoneId: The ID of the zone to which the production site belongs.</summary>
        [JsiiProperty(name: "attrSourceZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSourceZoneId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute StandbyRegion: The initial destination region of the replication group.</summary>
        [JsiiProperty(name: "attrStandbyRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrStandbyRegion
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute StandbyZone: The initial destination zone of the replication group.</summary>
        [JsiiProperty(name: "attrStandbyZone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrStandbyZone
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Tags: The tags of the replication pair-consistent group.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTags
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ebs.datasource.DiskReplicaGroupProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Ebs.Datasource.IDiskReplicaGroupProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ebs.Datasource.IDiskReplicaGroupProps>()!;
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
