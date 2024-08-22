using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `Snapshots`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-snapshots
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISnapshotsProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.SnapshotsProps")]
    public interface ISnapshotsProps
    {
        /// <summary>Property category: The category of the snapshot.</summary>
        /// <remarks>
        /// Valid values:
        /// Standard: normal snapshot
        /// Flash: local snapshot
        /// The local snapshot feature is replaced by the instant access feature. When you specify this parameter, take note of the following items:
        /// If you have used local snapshots before December 14, 2020, you can use this parameter.
        /// If you have not used local snapshots before December 14, 2020, you cannot use this parameter.
        /// Note This parameter will be removed in the future. We recommend that you use other parameters to ensure future compatibility.
        /// </remarks>
        [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Category
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property diskId: The ID of the disk.</summary>
        [JsiiProperty(name: "diskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DiskId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property encrypted: Specifies whether the snapshot is encrypted.</summary>
        /// <remarks>
        /// Default value: false.
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

        /// <summary>Property filters: Filter value when querying resources.</summary>
        [JsiiProperty(name: "filters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.RosSnapshots.FiltersProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Filters
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceId: The ID of the instance.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property kmsKeyId: The ID of the Key Management Service (KMS) key used by the data disk.</summary>
        [JsiiProperty(name: "kmsKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KmsKeyId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Never: Never refresh the datasource resource when the stack is updated.</description>
        /// <description>Always: Always refresh the datasource resource when the stack is updated.
        /// Default is Never.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "refreshOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RefreshOptions
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group to which the snapshot belongs.</summary>
        /// <remarks>
        /// If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property snapshotIds: The IDs of snapshots.</summary>
        /// <remarks>
        /// The value can be a JSON array that consists of up to 100 snapshot IDs. Separate multiple snapshot IDs with commas (,).
        /// </remarks>
        [JsiiProperty(name: "snapshotIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SnapshotIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property snapshotLinkId: The ID of the snapshot chain.</summary>
        [JsiiProperty(name: "snapshotLinkId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SnapshotLinkId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property snapshotName: The name of the snapshot.</summary>
        [JsiiProperty(name: "snapshotName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SnapshotName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property snapshotType: Specifies whether the snapshot has been used to create images or disks.</summary>
        /// <remarks>
        /// Valid values:
        /// auto: automatic snapshot
        /// user: manual snapshot
        /// all: all snapshot types
        /// </remarks>
        [JsiiProperty(name: "snapshotType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SnapshotType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourceDiskType: The type of the source disk for which the snapshot was created.</summary>
        /// <remarks>
        /// Valid values:
        /// System: system disk
        /// Data: data disk
        /// Note These values are case-insensitive.
        /// </remarks>
        [JsiiProperty(name: "sourceDiskType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceDiskType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property status: The status of the snapshot.</summary>
        /// <remarks>
        /// Default value: all. Valid values:
        /// progressing: The snapshot is being created.
        /// accomplished: The snapshot is created.
        /// failed: The snapshot fails to be created.
        /// all: all snapshot statuses.
        /// </remarks>
        [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Status
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags of snapshot.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.RosSnapshots.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.RosSnapshots.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property usage: The type of the snapshot.</summary>
        /// <remarks>
        /// Default value: all. Valid values:
        /// image: The snapshot has been used to create custom images.
        /// disk: The snapshot has been used to create disks.
        /// image_disk: The snapshot has been used to create custom images and data disks.
        /// none: The snapshot has not been used to create custom images or disks.
        /// </remarks>
        [JsiiProperty(name: "usage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Usage
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Snapshots`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-snapshots
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISnapshotsProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.SnapshotsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.ISnapshotsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property category: The category of the snapshot.</summary>
            /// <remarks>
            /// Valid values:
            /// Standard: normal snapshot
            /// Flash: local snapshot
            /// The local snapshot feature is replaced by the instant access feature. When you specify this parameter, take note of the following items:
            /// If you have used local snapshots before December 14, 2020, you can use this parameter.
            /// If you have not used local snapshots before December 14, 2020, you cannot use this parameter.
            /// Note This parameter will be removed in the future. We recommend that you use other parameters to ensure future compatibility.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Category
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property diskId: The ID of the disk.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "diskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DiskId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property encrypted: Specifies whether the snapshot is encrypted.</summary>
            /// <remarks>
            /// Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "encrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Encrypted
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property filters: Filter value when querying resources.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "filters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.RosSnapshots.FiltersProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Filters
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceId: The ID of the instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property kmsKeyId: The ID of the Key Management Service (KMS) key used by the data disk.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "kmsKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KmsKeyId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>Never: Never refresh the datasource resource when the stack is updated.</description>
            /// <description>Always: Always refresh the datasource resource when the stack is updated.
            /// Default is Never.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "refreshOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RefreshOptions
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group to which the snapshot belongs.</summary>
            /// <remarks>
            /// If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property snapshotIds: The IDs of snapshots.</summary>
            /// <remarks>
            /// The value can be a JSON array that consists of up to 100 snapshot IDs. Separate multiple snapshot IDs with commas (,).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "snapshotIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SnapshotIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property snapshotLinkId: The ID of the snapshot chain.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "snapshotLinkId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SnapshotLinkId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property snapshotName: The name of the snapshot.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "snapshotName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SnapshotName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property snapshotType: Specifies whether the snapshot has been used to create images or disks.</summary>
            /// <remarks>
            /// Valid values:
            /// auto: automatic snapshot
            /// user: manual snapshot
            /// all: all snapshot types
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "snapshotType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SnapshotType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceDiskType: The type of the source disk for which the snapshot was created.</summary>
            /// <remarks>
            /// Valid values:
            /// System: system disk
            /// Data: data disk
            /// Note These values are case-insensitive.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceDiskType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceDiskType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property status: The status of the snapshot.</summary>
            /// <remarks>
            /// Default value: all. Valid values:
            /// progressing: The snapshot is being created.
            /// accomplished: The snapshot is created.
            /// failed: The snapshot fails to be created.
            /// all: all snapshot statuses.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Status
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags of snapshot.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.RosSnapshots.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.RosSnapshots.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.RosSnapshots.ITagsProperty[]?>();
            }

            /// <summary>Property usage: The type of the snapshot.</summary>
            /// <remarks>
            /// Default value: all. Valid values:
            /// image: The snapshot has been used to create custom images.
            /// disk: The snapshot has been used to create disks.
            /// image_disk: The snapshot has been used to create custom images and data disks.
            /// none: The snapshot has not been used to create custom images or disks.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "usage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Usage
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
