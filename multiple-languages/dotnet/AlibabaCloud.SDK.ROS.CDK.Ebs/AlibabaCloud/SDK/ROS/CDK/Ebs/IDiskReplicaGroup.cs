using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ebs
{
    /// <summary>Represents a `DiskReplicaGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IDiskReplicaGroup), fullyQualifiedName: "@alicloud/ros-cdk-ebs.IDiskReplicaGroup")]
    public interface IDiskReplicaGroup : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Description: The description of the consistent replication group.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute DestinationRegionId: The ID of the region to which the disaster recovery site belongs.</summary>
        [JsiiProperty(name: "attrDestinationRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDestinationRegionId
        {
            get;
        }

        /// <summary>Attribute DestinationZoneId: The ID of the zone to which the disaster recovery site belongs.</summary>
        [JsiiProperty(name: "attrDestinationZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDestinationZoneId
        {
            get;
        }

        /// <summary>Attribute DiskReplicaGroupName: Consistent replication group name.</summary>
        [JsiiProperty(name: "attrDiskReplicaGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDiskReplicaGroupName
        {
            get;
        }

        /// <summary>Attribute LastRecoverPoint: The time when the last asynchronous replication operation of the consistent replication group completed.</summary>
        /// <remarks>
        /// This parameter provides the return value as a timestamp. Unit: seconds.
        /// </remarks>
        [JsiiProperty(name: "attrLastRecoverPoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLastRecoverPoint
        {
            get;
        }

        /// <summary>Attribute PairIds: List of replication pair IDs contained in a consistent replication group.</summary>
        [JsiiProperty(name: "attrPairIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPairIds
        {
            get;
        }

        /// <summary>Attribute PairNumber: The number of replication pairs contained in a consistent replication group.</summary>
        [JsiiProperty(name: "attrPairNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPairNumber
        {
            get;
        }

        /// <summary>Attribute PrimaryRegion: The initial source region of the replication group.</summary>
        [JsiiProperty(name: "attrPrimaryRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPrimaryRegion
        {
            get;
        }

        /// <summary>Attribute PrimaryZone: The initial source available area of the replication group.</summary>
        [JsiiProperty(name: "attrPrimaryZone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPrimaryZone
        {
            get;
        }

        /// <summary>Attribute ReplicaGroupId: The ID of the consistent replication group.</summary>
        [JsiiProperty(name: "attrReplicaGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrReplicaGroupId
        {
            get;
        }

        /// <summary>Attribute ResourceGroupId: resource group ID of enterprise.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceGroupId
        {
            get;
        }

        /// <summary>Attribute RPO: The RPO value set by the consistency group in seconds.</summary>
        [JsiiProperty(name: "attrRpo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRpo
        {
            get;
        }

        /// <summary>Attribute Site: Site information sources for replication pairs and consistent replication groups.</summary>
        /// <remarks>
        /// Possible values:
        /// </remarks>
        [JsiiProperty(name: "attrSite", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSite
        {
            get;
        }

        /// <summary>Attribute SourceRegionId: The ID of the region to which the production site belongs.</summary>
        [JsiiProperty(name: "attrSourceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSourceRegionId
        {
            get;
        }

        /// <summary>Attribute SourceZoneId: The ID of the zone to which the production site belongs.</summary>
        [JsiiProperty(name: "attrSourceZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSourceZoneId
        {
            get;
        }

        /// <summary>Attribute StandbyRegion: The initial destination region of the replication group.</summary>
        [JsiiProperty(name: "attrStandbyRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStandbyRegion
        {
            get;
        }

        /// <summary>Attribute StandbyZone: The initial destination zone of the replication group.</summary>
        [JsiiProperty(name: "attrStandbyZone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStandbyZone
        {
            get;
        }

        /// <summary>Attribute Tags: The tags of the disk replica group.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTags
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ebs.DiskReplicaGroupProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ebs.IDiskReplicaGroupProps Props
        {
            get;
        }

        /// <summary>Represents a `DiskReplicaGroup`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDiskReplicaGroup), fullyQualifiedName: "@alicloud/ros-cdk-ebs.IDiskReplicaGroup")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ebs.IDiskReplicaGroup
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Description: The description of the consistent replication group.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DestinationRegionId: The ID of the region to which the disaster recovery site belongs.</summary>
            [JsiiProperty(name: "attrDestinationRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDestinationRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DestinationZoneId: The ID of the zone to which the disaster recovery site belongs.</summary>
            [JsiiProperty(name: "attrDestinationZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDestinationZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DiskReplicaGroupName: Consistent replication group name.</summary>
            [JsiiProperty(name: "attrDiskReplicaGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDiskReplicaGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LastRecoverPoint: The time when the last asynchronous replication operation of the consistent replication group completed.</summary>
            /// <remarks>
            /// This parameter provides the return value as a timestamp. Unit: seconds.
            /// </remarks>
            [JsiiProperty(name: "attrLastRecoverPoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLastRecoverPoint
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PairIds: List of replication pair IDs contained in a consistent replication group.</summary>
            [JsiiProperty(name: "attrPairIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPairIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PairNumber: The number of replication pairs contained in a consistent replication group.</summary>
            [JsiiProperty(name: "attrPairNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPairNumber
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PrimaryRegion: The initial source region of the replication group.</summary>
            [JsiiProperty(name: "attrPrimaryRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPrimaryRegion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PrimaryZone: The initial source available area of the replication group.</summary>
            [JsiiProperty(name: "attrPrimaryZone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPrimaryZone
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ReplicaGroupId: The ID of the consistent replication group.</summary>
            [JsiiProperty(name: "attrReplicaGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrReplicaGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceGroupId: resource group ID of enterprise.</summary>
            [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RPO: The RPO value set by the consistency group in seconds.</summary>
            [JsiiProperty(name: "attrRpo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRpo
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Site: Site information sources for replication pairs and consistent replication groups.</summary>
            /// <remarks>
            /// Possible values:
            /// </remarks>
            [JsiiProperty(name: "attrSite", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSite
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SourceRegionId: The ID of the region to which the production site belongs.</summary>
            [JsiiProperty(name: "attrSourceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSourceRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SourceZoneId: The ID of the zone to which the production site belongs.</summary>
            [JsiiProperty(name: "attrSourceZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSourceZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute StandbyRegion: The initial destination region of the replication group.</summary>
            [JsiiProperty(name: "attrStandbyRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStandbyRegion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute StandbyZone: The initial destination zone of the replication group.</summary>
            [JsiiProperty(name: "attrStandbyZone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStandbyZone
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Tags: The tags of the disk replica group.</summary>
            [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTags
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ebs.DiskReplicaGroupProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ebs.IDiskReplicaGroupProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ebs.IDiskReplicaGroupProps>()!;
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
