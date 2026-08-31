using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `CloneDisks`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-clonedisks
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.CloneDisksProps")]
    public class CloneDisksProps : AlibabaCloud.SDK.ROS.CDK.Ecs.ICloneDisksProps
    {
        private object _diskCategory;

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
            get => _diskCategory;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _diskCategory = value;
            }
        }

        private object _multiAttach;

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
            get => _multiAttach;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _multiAttach = value;
            }
        }

        private object _size;

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
            get => _size;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case double cast_cd4240:
                            break;
                        case byte cast_cd4240:
                            break;
                        case decimal cast_cd4240:
                            break;
                        case float cast_cd4240:
                            break;
                        case int cast_cd4240:
                            break;
                        case long cast_cd4240:
                            break;
                        case sbyte cast_cd4240:
                            break;
                        case short cast_cd4240:
                            break;
                        case uint cast_cd4240:
                            break;
                        case ulong cast_cd4240:
                            break;
                        case ushort cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _size = value;
            }
        }

        private object _sourceDiskId;

        /// <summary>Property sourceDiskId: The ID of the source disk.</summary>
        [JsiiProperty(name: "sourceDiskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SourceDiskId
        {
            get => _sourceDiskId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _sourceDiskId = value;
            }
        }

        private object? _burstingEnabled;

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
            get => _burstingEnabled;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case bool cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _burstingEnabled = value;
            }
        }

        private object? _diskName;

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
            get => _diskName;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _diskName = value;
            }
        }

        private object? _encrypted;

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
            get => _encrypted;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case bool cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _encrypted = value;
            }
        }

        private object? _kmsKeyId;

        /// <summary>Property kmsKeyId: The ID of the KMS key used to encrypt the disk.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "kmsKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? KmsKeyId
        {
            get => _kmsKeyId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _kmsKeyId = value;
            }
        }

        private object? _performanceLevel;

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
            get => _performanceLevel;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _performanceLevel = value;
            }
        }

        private object? _provisionedIops;

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
            get => _provisionedIops;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case double cast_cd4240:
                            break;
                        case byte cast_cd4240:
                            break;
                        case decimal cast_cd4240:
                            break;
                        case float cast_cd4240:
                            break;
                        case int cast_cd4240:
                            break;
                        case long cast_cd4240:
                            break;
                        case sbyte cast_cd4240:
                            break;
                        case short cast_cd4240:
                            break;
                        case uint cast_cd4240:
                            break;
                        case ulong cast_cd4240:
                            break;
                        case ushort cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _provisionedIops = value;
            }
        }

        private object? _resourceGroupId;

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ResourceGroupId
        {
            get => _resourceGroupId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _resourceGroupId = value;
            }
        }

        /// <summary>Property tags: Tags to attach to disk.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create disk. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosCloneDisks.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Ecs.RosCloneDisks.ITagsProperty[]? Tags
        {
            get;
            set;
        }
    }
}
