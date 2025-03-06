using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Represents a `Snapshot`.</summary>
    [JsiiInterface(nativeType: typeof(ISnapshot), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.ISnapshot")]
    public interface ISnapshot : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CreateTime: The create time.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute Description: The description.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute DiskId: The source disk id.</summary>
        [JsiiProperty(name: "attrDiskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDiskId
        {
            get;
        }

        /// <summary>Attribute Encrypted: Whether the snapshot is encrypted.</summary>
        [JsiiProperty(name: "attrEncrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEncrypted
        {
            get;
        }

        /// <summary>Attribute InstantAccess: Whether snapshot speed availability is enabled.</summary>
        [JsiiProperty(name: "attrInstantAccess", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstantAccess
        {
            get;
        }

        /// <summary>Attribute InstantAccessRetentionDays: InstantAccessRetentionDays.</summary>
        [JsiiProperty(name: "attrInstantAccessRetentionDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstantAccessRetentionDays
        {
            get;
        }

        /// <summary>Attribute ProductCode: The product number inherited from the mirror market.</summary>
        [JsiiProperty(name: "attrProductCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrProductCode
        {
            get;
        }

        /// <summary>Attribute Progress: Snapshot creation progress, in percentage.</summary>
        [JsiiProperty(name: "attrProgress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrProgress
        {
            get;
        }

        /// <summary>Attribute RemainTime: Remaining completion time for the snapshot being created.</summary>
        [JsiiProperty(name: "attrRemainTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRemainTime
        {
            get;
        }

        /// <summary>Attribute ResourceGroupId: The resource group id.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceGroupId
        {
            get;
        }

        /// <summary>Attribute RetentionDays: Automatic snapshot retention days.</summary>
        [JsiiProperty(name: "attrRetentionDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRetentionDays
        {
            get;
        }

        /// <summary>Attribute SnapshotId: The snapshot id.</summary>
        [JsiiProperty(name: "attrSnapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSnapshotId
        {
            get;
        }

        /// <summary>Attribute SnapshotName: Snapshot Display Name.</summary>
        [JsiiProperty(name: "attrSnapshotName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSnapshotName
        {
            get;
        }

        /// <summary>Attribute SnapshotSN: Snapshot serial number.</summary>
        [JsiiProperty(name: "attrSnapshotSn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSnapshotSn
        {
            get;
        }

        /// <summary>Attribute SnapshotType: Snapshot creation type.</summary>
        [JsiiProperty(name: "attrSnapshotType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSnapshotType
        {
            get;
        }

        /// <summary>Attribute SourceDiskSize: Source disk capacity.</summary>
        [JsiiProperty(name: "attrSourceDiskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSourceDiskSize
        {
            get;
        }

        /// <summary>Attribute SourceDiskType: Source disk attributes.</summary>
        [JsiiProperty(name: "attrSourceDiskType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSourceDiskType
        {
            get;
        }

        /// <summary>Attribute SourceStorageType: Original disk type.</summary>
        [JsiiProperty(name: "attrSourceStorageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSourceStorageType
        {
            get;
        }

        /// <summary>Attribute Tags: The tags.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTags
        {
            get;
        }

        /// <summary>Attribute Usage: A resource type that has a reference relationship.</summary>
        [JsiiProperty(name: "attrUsage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUsage
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.SnapshotProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.ISnapshotProps Props
        {
            get;
        }

        /// <summary>Represents a `Snapshot`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISnapshot), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.ISnapshot")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.ISnapshot
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CreateTime: The create time.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: The description.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DiskId: The source disk id.</summary>
            [JsiiProperty(name: "attrDiskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDiskId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Encrypted: Whether the snapshot is encrypted.</summary>
            [JsiiProperty(name: "attrEncrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEncrypted
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstantAccess: Whether snapshot speed availability is enabled.</summary>
            [JsiiProperty(name: "attrInstantAccess", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstantAccess
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstantAccessRetentionDays: InstantAccessRetentionDays.</summary>
            [JsiiProperty(name: "attrInstantAccessRetentionDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstantAccessRetentionDays
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ProductCode: The product number inherited from the mirror market.</summary>
            [JsiiProperty(name: "attrProductCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrProductCode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Progress: Snapshot creation progress, in percentage.</summary>
            [JsiiProperty(name: "attrProgress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrProgress
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RemainTime: Remaining completion time for the snapshot being created.</summary>
            [JsiiProperty(name: "attrRemainTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRemainTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceGroupId: The resource group id.</summary>
            [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RetentionDays: Automatic snapshot retention days.</summary>
            [JsiiProperty(name: "attrRetentionDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRetentionDays
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SnapshotId: The snapshot id.</summary>
            [JsiiProperty(name: "attrSnapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSnapshotId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SnapshotName: Snapshot Display Name.</summary>
            [JsiiProperty(name: "attrSnapshotName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSnapshotName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SnapshotSN: Snapshot serial number.</summary>
            [JsiiProperty(name: "attrSnapshotSn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSnapshotSn
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SnapshotType: Snapshot creation type.</summary>
            [JsiiProperty(name: "attrSnapshotType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSnapshotType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SourceDiskSize: Source disk capacity.</summary>
            [JsiiProperty(name: "attrSourceDiskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSourceDiskSize
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SourceDiskType: Source disk attributes.</summary>
            [JsiiProperty(name: "attrSourceDiskType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSourceDiskType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SourceStorageType: Original disk type.</summary>
            [JsiiProperty(name: "attrSourceStorageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSourceStorageType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Tags: The tags.</summary>
            [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTags
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Usage: A resource type that has a reference relationship.</summary>
            [JsiiProperty(name: "attrUsage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUsage
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.SnapshotProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.ISnapshotProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.ISnapshotProps>()!;
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
