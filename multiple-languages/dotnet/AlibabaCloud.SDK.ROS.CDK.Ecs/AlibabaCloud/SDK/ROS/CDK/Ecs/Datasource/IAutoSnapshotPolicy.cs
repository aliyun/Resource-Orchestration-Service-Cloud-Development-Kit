using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Represents a `AutoSnapshotPolicy`.</summary>
    [JsiiInterface(nativeType: typeof(IAutoSnapshotPolicy), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.IAutoSnapshotPolicy")]
    public interface IAutoSnapshotPolicy : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AutoSnapshotPolicyName: Name of the automatic snapshot policy.</summary>
        [JsiiProperty(name: "attrAutoSnapshotPolicyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAutoSnapshotPolicyName
        {
            get;
        }

        /// <summary>Attribute CreateTime: The time when the automatic snapshot policy was created.</summary>
        /// <remarks>
        /// The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
        /// </remarks>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute DiskNums: Number of cloud disks with this policy enabled.</summary>
        [JsiiProperty(name: "attrDiskNums", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDiskNums
        {
            get;
        }

        /// <summary>Attribute RepeatWeekdays: The days of the week on which to create automatic snapshots.</summary>
        /// <remarks>
        /// Valid values: 1 to 7, which correspond to the days of the week. 1 indicates Monday. One or more days can be specified.
        /// </remarks>
        [JsiiProperty(name: "attrRepeatWeekdays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRepeatWeekdays
        {
            get;
        }

        /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceGroupId
        {
            get;
        }

        /// <summary>Attribute RetentionDays: The retention period of the automatic snapshot.</summary>
        /// <remarks>
        /// Unit: days. Valid values:
        ///
        /// <list type="bullet">
        /// <description>-1: The automatic snapshot is retained until it is deleted.</description>
        /// <description>1 to 65536: The automatic snapshot is retained for the specified number of days.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "attrRetentionDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRetentionDays
        {
            get;
        }

        /// <summary>Attribute Tags: The tags of the automatic snapshot policy.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTags
        {
            get;
        }

        /// <summary>Attribute TimePoints: The time when the automatic snapshot policy was created.</summary>
        /// <remarks>
        /// The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
        /// </remarks>
        [JsiiProperty(name: "attrTimePoints", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTimePoints
        {
            get;
        }

        /// <summary>Attribute VolumeNums: The number of extended volumes to which the automatic snapshot policy is applied.</summary>
        [JsiiProperty(name: "attrVolumeNums", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVolumeNums
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.AutoSnapshotPolicyProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IAutoSnapshotPolicyProps Props
        {
            get;
        }

        /// <summary>Represents a `AutoSnapshotPolicy`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAutoSnapshotPolicy), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.IAutoSnapshotPolicy")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IAutoSnapshotPolicy
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AutoSnapshotPolicyName: Name of the automatic snapshot policy.</summary>
            [JsiiProperty(name: "attrAutoSnapshotPolicyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAutoSnapshotPolicyName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: The time when the automatic snapshot policy was created.</summary>
            /// <remarks>
            /// The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
            /// </remarks>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DiskNums: Number of cloud disks with this policy enabled.</summary>
            [JsiiProperty(name: "attrDiskNums", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDiskNums
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RepeatWeekdays: The days of the week on which to create automatic snapshots.</summary>
            /// <remarks>
            /// Valid values: 1 to 7, which correspond to the days of the week. 1 indicates Monday. One or more days can be specified.
            /// </remarks>
            [JsiiProperty(name: "attrRepeatWeekdays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRepeatWeekdays
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
            [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RetentionDays: The retention period of the automatic snapshot.</summary>
            /// <remarks>
            /// Unit: days. Valid values:
            ///
            /// <list type="bullet">
            /// <description>-1: The automatic snapshot is retained until it is deleted.</description>
            /// <description>1 to 65536: The automatic snapshot is retained for the specified number of days.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "attrRetentionDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRetentionDays
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Tags: The tags of the automatic snapshot policy.</summary>
            [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTags
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TimePoints: The time when the automatic snapshot policy was created.</summary>
            /// <remarks>
            /// The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
            /// </remarks>
            [JsiiProperty(name: "attrTimePoints", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTimePoints
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VolumeNums: The number of extended volumes to which the automatic snapshot policy is applied.</summary>
            [JsiiProperty(name: "attrVolumeNums", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVolumeNums
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.AutoSnapshotPolicyProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IAutoSnapshotPolicyProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IAutoSnapshotPolicyProps>()!;
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
