using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `AutoSnapshotPolicy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-autosnapshotpolicy
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAutoSnapshotPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.AutoSnapshotPolicyProps")]
    public interface IAutoSnapshotPolicyProps
    {
        /// <summary>Property repeatWeekdays: The automatic snapshot repetition dates.</summary>
        /// <remarks>
        /// The unit of measurement is day and the repeating cycle is a week. Value range: [1, 7], which represents days starting from Monday to Sunday, for example 1 indicates Monday. When you want to schedule multiple automatic snapshot tasks for a disk in a week, you can set the RepeatWeekdays to an array.
        /// A maximum of seven time points can be selected.
        /// The format is a list of [1, 2, ..., 7] and the time points are separated by commas (,).
        /// </remarks>
        [JsiiProperty(name: "repeatWeekdays", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object RepeatWeekdays
        {
            get;
        }

        /// <summary>Property retentionDays: The snapshot retention time, and the unit of measurement is day.</summary>
        /// <remarks>
        /// Optional values:
        /// -1: The automatic snapshots are retained permanently.
        /// [1, 65536]: The number of days retained.
        /// Default value: -1.
        /// </remarks>
        [JsiiProperty(name: "retentionDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RetentionDays
        {
            get;
        }

        /// <summary>Property timePoints: The automatic snapshot creation schedule, and the unit of measurement is hour.</summary>
        /// <remarks>
        /// Value range: [0, 23], which represents from 00:00 to 24:00, for example 1 indicates 01:00. When you want to schedule multiple automatic snapshot tasks for a disk in a day, you can set the TimePoints to an array.
        /// A maximum of 24 time points can be selected.
        /// The format is a list of [0, 1, ..., 23] and the time points are separated by commas (,).
        /// </remarks>
        [JsiiProperty(name: "timePoints", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TimePoints
        {
            get;
        }

        /// <summary>Property autoSnapshotPolicyName: The name of the automatic snapshot policy.</summary>
        /// <remarks>
        /// It can consist of [2, 128] English or Chinese characters.
        /// Must begin with an uppercase or lowercase letter or a Chinese character. Can contain numbers, periods (.), colons (:), underscores (_), and hyphens (-).
        /// Cannot start with http:// or https://.
        /// Default value: null.
        /// </remarks>
        [JsiiProperty(name: "autoSnapshotPolicyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoSnapshotPolicyName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property copiedSnapshotsRetentionDays: Retention time in days for replicated snapshots across geographies.</summary>
        /// <remarks>
        /// Range:
        /// -1: Permanent storage
        /// 1-65535: Specifies the number of days to save
        /// Default value: -1
        /// </remarks>
        [JsiiProperty(name: "copiedSnapshotsRetentionDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CopiedSnapshotsRetentionDays
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property copyEncryptionConfiguration: The encryption configuration for copied snapshots.</summary>
        [JsiiProperty(name: "copyEncryptionConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosAutoSnapshotPolicy.CopyEncryptionConfigurationProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CopyEncryptionConfiguration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property diskIds: The disk ID.</summary>
        /// <remarks>
        /// When you want to apply the automatic snapshot policy to multiple disks, you can set the DiskIds to an array. The format is list of ["d-xxxxxxxxx", "d-yyyyyyyyy", ..., "d-zzzzzzzzz"] and the IDs are separated by commas (,).
        /// </remarks>
        [JsiiProperty(name: "diskIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DiskIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableCrossRegionCopy: Whether to enable cross-region copying of snapshots.</summary>
        [JsiiProperty(name: "enableCrossRegionCopy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableCrossRegionCopy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: Resource group id.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosAutoSnapshotPolicy.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Ecs.RosAutoSnapshotPolicy.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property targetCopyRegions: The target region of the snapshot is replicated across geographies.</summary>
        /// <remarks>
        /// Setting a target region is currently supported.
        /// </remarks>
        [JsiiProperty(name: "targetCopyRegions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TargetCopyRegions
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `AutoSnapshotPolicy`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-autosnapshotpolicy
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAutoSnapshotPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.AutoSnapshotPolicyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IAutoSnapshotPolicyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property repeatWeekdays: The automatic snapshot repetition dates.</summary>
            /// <remarks>
            /// The unit of measurement is day and the repeating cycle is a week. Value range: [1, 7], which represents days starting from Monday to Sunday, for example 1 indicates Monday. When you want to schedule multiple automatic snapshot tasks for a disk in a week, you can set the RepeatWeekdays to an array.
            /// A maximum of seven time points can be selected.
            /// The format is a list of [1, 2, ..., 7] and the time points are separated by commas (,).
            /// </remarks>
            [JsiiProperty(name: "repeatWeekdays", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object RepeatWeekdays
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property retentionDays: The snapshot retention time, and the unit of measurement is day.</summary>
            /// <remarks>
            /// Optional values:
            /// -1: The automatic snapshots are retained permanently.
            /// [1, 65536]: The number of days retained.
            /// Default value: -1.
            /// </remarks>
            [JsiiProperty(name: "retentionDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RetentionDays
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property timePoints: The automatic snapshot creation schedule, and the unit of measurement is hour.</summary>
            /// <remarks>
            /// Value range: [0, 23], which represents from 00:00 to 24:00, for example 1 indicates 01:00. When you want to schedule multiple automatic snapshot tasks for a disk in a day, you can set the TimePoints to an array.
            /// A maximum of 24 time points can be selected.
            /// The format is a list of [0, 1, ..., 23] and the time points are separated by commas (,).
            /// </remarks>
            [JsiiProperty(name: "timePoints", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TimePoints
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property autoSnapshotPolicyName: The name of the automatic snapshot policy.</summary>
            /// <remarks>
            /// It can consist of [2, 128] English or Chinese characters.
            /// Must begin with an uppercase or lowercase letter or a Chinese character. Can contain numbers, periods (.), colons (:), underscores (_), and hyphens (-).
            /// Cannot start with http:// or https://.
            /// Default value: null.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoSnapshotPolicyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoSnapshotPolicyName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property copiedSnapshotsRetentionDays: Retention time in days for replicated snapshots across geographies.</summary>
            /// <remarks>
            /// Range:
            /// -1: Permanent storage
            /// 1-65535: Specifies the number of days to save
            /// Default value: -1
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "copiedSnapshotsRetentionDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CopiedSnapshotsRetentionDays
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property copyEncryptionConfiguration: The encryption configuration for copied snapshots.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "copyEncryptionConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosAutoSnapshotPolicy.CopyEncryptionConfigurationProperty\"}]}}", isOptional: true)]
            public object? CopyEncryptionConfiguration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property diskIds: The disk ID.</summary>
            /// <remarks>
            /// When you want to apply the automatic snapshot policy to multiple disks, you can set the DiskIds to an array. The format is list of ["d-xxxxxxxxx", "d-yyyyyyyyy", ..., "d-zzzzzzzzz"] and the IDs are separated by commas (,).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "diskIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DiskIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableCrossRegionCopy: Whether to enable cross-region copying of snapshots.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "enableCrossRegionCopy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableCrossRegionCopy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: Resource group id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosAutoSnapshotPolicy.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.RosAutoSnapshotPolicy.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.RosAutoSnapshotPolicy.ITagsProperty[]?>();
            }

            /// <summary>Property targetCopyRegions: The target region of the snapshot is replicated across geographies.</summary>
            /// <remarks>
            /// Setting a target region is currently supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "targetCopyRegions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? TargetCopyRegions
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
