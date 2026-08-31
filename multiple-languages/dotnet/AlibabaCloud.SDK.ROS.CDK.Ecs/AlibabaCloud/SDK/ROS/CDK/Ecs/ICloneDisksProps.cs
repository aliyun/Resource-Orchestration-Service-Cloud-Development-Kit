using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `CloneDisks`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-clonedisks
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ICloneDisksProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.CloneDisksProps")]
    public interface ICloneDisksProps
    {
        /// <summary>Property diskCategory: The type of the new disk.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><c>cloud_essd</c>: ESSD cloud disk.</description>
        /// <description><c>cloud_auto</c>: ESSD AutoPL cloud disk.</description>
        /// <description><c>cloud_essd_entry</c>: ESSD Entry cloud disk.</description>
        /// <description><c>cloud_regional_disk_auto</c>: regional disk.</description>
        /// </list>
        ///
        ///     Disk type limits for cloning
        ///
        /// <list type="bullet">
        ///     <description>A non-regional disk can be cloned only as a non-regional disk.</description>
        ///     <description>A regional disk can be cloned only as a regional disk.</description>
        ///     </list>
        /// </remarks>
        [JsiiProperty(name: "diskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DiskCategory
        {
            get;
        }

        /// <summary>Property multiAttach: Specifies whether to enable the multi-attach feature for the new disk.</summary>
        /// <remarks>
        /// Valid
        /// values:
        ///
        /// <list type="bullet">
        /// <description><c>Disabled</c>: Disables the multi-attach feature.</description>
        /// <description><c>Enabled</c>: Enables the multi-attach feature. You can set this parameter to
        /// <c>Enabled</c> only for ESSD cloud disks.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "multiAttach", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object MultiAttach
        {
            get;
        }

        /// <summary>Property size: The size of the new disk, in GiB.</summary>
        /// <remarks>
        /// The value must be greater than or equal to the
        /// size of the source disk. The value range varies based on the <c>DiskCategory</c>
        /// value:
        ///
        /// <list type="bullet">
        /// <description><c>cloud_essd</c>: The value range depends on the <c>PerformanceLevel</c> value.</description>
        /// <description><c>PL0</c>: 1 to 65,536</description>
        /// <description><c>PL1</c>: 20 to 65,536</description>
        /// <description><c>PL2</c>: 461 to 65,536</description>
        /// <description><c>PL3</c>: 1,261 to 65,536</description>
        /// <description><c>cloud_auto</c>: 1 to 65,536</description>
        /// <description><c>cloud_essd_entry</c>: 10 to 32,768</description>
        /// <description><c>cloud_regional_disk_auto</c>: 10 to 65,536</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "size", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Size
        {
            get;
        }

        /// <summary>Property sourceDiskId: The ID of the source disk.</summary>
        [JsiiProperty(name: "sourceDiskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourceDiskId
        {
            get;
        }

        /// <summary>Property burstingEnabled: Specifies whether to enable performance bursting for the new disk.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><c>true</c>: Enables performance bursting.</description>
        /// <description><c>false</c>: Disables performance bursting.</description>
        /// </list>
        ///
        ///     This parameter is valid only when <c>DiskCategory</c> is set to <c>cloud_auto</c>. For
        ///     more information, see ESSD AutoPL cloud disks.
        /// </remarks>
        [JsiiProperty(name: "burstingEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BurstingEnabled
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property diskName: The name of the new disk.</summary>
        /// <remarks>
        /// The name must be 2 to 128 characters in length. It must
        /// start with a letter and can contain letters, digits, colons (:), underscores (_),
        /// periods (.), and hyphens (-).
        /// Default value: none.
        /// </remarks>
        [JsiiProperty(name: "diskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DiskName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property encrypted: Specifies whether to encrypt the new disk.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><c>true</c>: The disk is encrypted.</description>
        /// <description><c>false</c>: The disk is not encrypted.
        /// Default value: false.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "encrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Encrypted
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property kmsKeyId: The ID of the KMS key used to encrypt the disk.</summary>
        [JsiiProperty(name: "kmsKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KmsKeyId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property performanceLevel: The performance level of the new ESSD cloud disk.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><c>PL0</c>: A single disk can deliver up to 10,000 random read/write IOPS.</description>
        /// <description><c>PL1</c>: A single disk can deliver up to 50,000 random read/write IOPS.</description>
        /// <description><c>PL2</c>: A single disk can deliver up to 100,000 random read/write IOPS.</description>
        /// <description><c>PL3</c>: A single disk can deliver up to 1,000,000 random read/write IOPS.</description>
        /// </list>
        ///
        ///     This parameter is required when <c>DiskCategory</c> is set to <c>cloud_essd</c>.
        /// </remarks>
        [JsiiProperty(name: "performanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PerformanceLevel
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property provisionedIops: The provisioned read\/write IOPS of the ESSD AutoPL cloud disk.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>You cannot set this parameter for disks that are 3 GiB or smaller in size.</description>
        /// <description>For disks that are 4 GiB or larger in size, the value must be in the range of
        /// <c>[0, min(1000 * Size - baseline performance, 50000)]</c>.
        /// baseline performance = <c>max(min(1800 + 50 * Size, 50000), 3000)</c>.</description>
        /// </list>
        ///
        ///     This parameter is valid only when <c>DiskCategory</c> is set to <c>cloud_auto</c>. For
        ///     more information, see ESSD AutoPL cloud disks.
        /// </remarks>
        [JsiiProperty(name: "provisionedIops", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProvisionedIops
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to disk.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create disk. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosCloneDisks.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Ecs.RosCloneDisks.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `CloneDisks`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-clonedisks
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ICloneDisksProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.CloneDisksProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.ICloneDisksProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property diskCategory: The type of the new disk.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><c>cloud_essd</c>: ESSD cloud disk.</description>
            /// <description><c>cloud_auto</c>: ESSD AutoPL cloud disk.</description>
            /// <description><c>cloud_essd_entry</c>: ESSD Entry cloud disk.</description>
            /// <description><c>cloud_regional_disk_auto</c>: regional disk.</description>
            /// </list>
            ///
            ///     Disk type limits for cloning
            ///
            /// <list type="bullet">
            ///     <description>A non-regional disk can be cloned only as a non-regional disk.</description>
            ///     <description>A regional disk can be cloned only as a regional disk.</description>
            ///     </list>
            /// </remarks>
            [JsiiProperty(name: "diskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DiskCategory
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property multiAttach: Specifies whether to enable the multi-attach feature for the new disk.</summary>
            /// <remarks>
            /// Valid
            /// values:
            ///
            /// <list type="bullet">
            /// <description><c>Disabled</c>: Disables the multi-attach feature.</description>
            /// <description><c>Enabled</c>: Enables the multi-attach feature. You can set this parameter to
            /// <c>Enabled</c> only for ESSD cloud disks.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "multiAttach", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object MultiAttach
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property size: The size of the new disk, in GiB.</summary>
            /// <remarks>
            /// The value must be greater than or equal to the
            /// size of the source disk. The value range varies based on the <c>DiskCategory</c>
            /// value:
            ///
            /// <list type="bullet">
            /// <description><c>cloud_essd</c>: The value range depends on the <c>PerformanceLevel</c> value.</description>
            /// <description><c>PL0</c>: 1 to 65,536</description>
            /// <description><c>PL1</c>: 20 to 65,536</description>
            /// <description><c>PL2</c>: 461 to 65,536</description>
            /// <description><c>PL3</c>: 1,261 to 65,536</description>
            /// <description><c>cloud_auto</c>: 1 to 65,536</description>
            /// <description><c>cloud_essd_entry</c>: 10 to 32,768</description>
            /// <description><c>cloud_regional_disk_auto</c>: 10 to 65,536</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "size", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Size
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property sourceDiskId: The ID of the source disk.</summary>
            [JsiiProperty(name: "sourceDiskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceDiskId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property burstingEnabled: Specifies whether to enable performance bursting for the new disk.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><c>true</c>: Enables performance bursting.</description>
            /// <description><c>false</c>: Disables performance bursting.</description>
            /// </list>
            ///
            ///     This parameter is valid only when <c>DiskCategory</c> is set to <c>cloud_auto</c>. For
            ///     more information, see ESSD AutoPL cloud disks.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "burstingEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BurstingEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property diskName: The name of the new disk.</summary>
            /// <remarks>
            /// The name must be 2 to 128 characters in length. It must
            /// start with a letter and can contain letters, digits, colons (:), underscores (_),
            /// periods (.), and hyphens (-).
            /// Default value: none.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "diskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DiskName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property encrypted: Specifies whether to encrypt the new disk.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><c>true</c>: The disk is encrypted.</description>
            /// <description><c>false</c>: The disk is not encrypted.
            /// Default value: false.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "encrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Encrypted
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property kmsKeyId: The ID of the KMS key used to encrypt the disk.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "kmsKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KmsKeyId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property performanceLevel: The performance level of the new ESSD cloud disk.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><c>PL0</c>: A single disk can deliver up to 10,000 random read/write IOPS.</description>
            /// <description><c>PL1</c>: A single disk can deliver up to 50,000 random read/write IOPS.</description>
            /// <description><c>PL2</c>: A single disk can deliver up to 100,000 random read/write IOPS.</description>
            /// <description><c>PL3</c>: A single disk can deliver up to 1,000,000 random read/write IOPS.</description>
            /// </list>
            ///
            ///     This parameter is required when <c>DiskCategory</c> is set to <c>cloud_essd</c>.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "performanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PerformanceLevel
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property provisionedIops: The provisioned read\/write IOPS of the ESSD AutoPL cloud disk.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>You cannot set this parameter for disks that are 3 GiB or smaller in size.</description>
            /// <description>For disks that are 4 GiB or larger in size, the value must be in the range of
            /// <c>[0, min(1000 * Size - baseline performance, 50000)]</c>.
            /// baseline performance = <c>max(min(1800 + 50 * Size, 50000), 3000)</c>.</description>
            /// </list>
            ///
            ///     This parameter is valid only when <c>DiskCategory</c> is set to <c>cloud_auto</c>. For
            ///     more information, see ESSD AutoPL cloud disks.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "provisionedIops", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProvisionedIops
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to disk.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create disk. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosCloneDisks.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.RosCloneDisks.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.RosCloneDisks.ITagsProperty[]?>();
            }
        }
    }
}
