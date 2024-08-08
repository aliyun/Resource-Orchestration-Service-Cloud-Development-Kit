using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `Disks`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-disks
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDisksProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.DisksProps")]
    public interface IDisksProps
    {
        /// <summary>Property additionalAttributes: The value of attribute N.</summary>
        /// <remarks>
        /// Set the value to IOPS, which indicates the maximum IOPS of the disk.
        /// </remarks>
        [JsiiProperty(name: "additionalAttributes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AdditionalAttributes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoSnapshotPolicyId: The ID of the automatic snapshot policy that is applied to the cloud disk.</summary>
        [JsiiProperty(name: "autoSnapshotPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoSnapshotPolicyId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property category: The category of the disk.</summary>
        /// <remarks>
        /// Valid values:
        /// all: all disk categories
        /// cloud: basic disk
        /// cloud_efficiency: ultra disk
        /// cloud_ssd: standard SSD
        /// ephemeral: retired local disk
        /// ephemeral_ssd: local SSD
        /// cloud_essd: ESSD
        /// local_ssd_pro: I/O-intensive local disk
        /// local_hdd_pro: throughput-intensive local disk
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

        /// <summary>Property deleteAutoSnapshot: Specifies whether to delete the automatic snapshots of the cloud disk when the disk is released.</summary>
        /// <remarks>
        /// Default value: false.
        /// </remarks>
        [JsiiProperty(name: "deleteAutoSnapshot", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeleteAutoSnapshot
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property deleteWithInstance: Specifies whether to release the cloud disk when its associated instance is released.</summary>
        /// <remarks>
        /// Valid values:
        /// true: The cloud disk is released when its associated instance is released.
        /// false: The cloud disk is not released but is retained as a pay-as-you-go data disk when its associated instance is released.
        /// Default value: false.
        /// </remarks>
        [JsiiProperty(name: "deleteWithInstance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeleteWithInstance
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property diskChargeType: The billing method of the disk.</summary>
        /// <remarks>
        /// Valid values:
        /// PrePaid: subscription
        /// PostPaid: pay-as-you-go
        /// </remarks>
        [JsiiProperty(name: "diskChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DiskChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property diskIds: The IDs of disks.</summary>
        /// <remarks>
        /// The value is a JSON array that consists of up to 100 disk IDs.
        /// Separate the disk IDs with commas (,).
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

        /// <summary>Property diskName: The name of the disk.</summary>
        [JsiiProperty(name: "diskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DiskName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property diskType: The type of the disk.</summary>
        /// <remarks>
        /// Valid values:
        /// all: system disk and data disk
        /// system: system disk
        /// data: data disk
        /// Default value: all.
        /// </remarks>
        [JsiiProperty(name: "diskType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DiskType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableAutomatedSnapshotPolicy: Specifies whether an automatic snapshot policy is applied to the cloud disk.</summary>
        /// <remarks>
        /// true: An automatic snapshot policy is applied to the cloud disk.
        /// false: No automatic snapshot policy is applied to the cloud disk.
        /// Default value: false.
        /// </remarks>
        [JsiiProperty(name: "enableAutomatedSnapshotPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableAutomatedSnapshotPolicy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableAutoSnapshot: Specifies whether the automatic snapshot policy feature is enabled for the cloud disk.</summary>
        /// <remarks>
        /// true: The automatic snapshot policy feature is enabled for the cloud disk.
        /// false: The automatic snapshot policy feature is disabled for the cloud disk.
        /// Note By default, the automatic snapshot policy feature is enabled for created cloud disks. You need only to apply an automatic snapshot policy to a cloud disk before you can use the automatic snapshot policy.
        /// </remarks>
        [JsiiProperty(name: "enableAutoSnapshot", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableAutoSnapshot
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableShared: Specifies whether the disk is a Shared Block Storage device.</summary>
        [JsiiProperty(name: "enableShared", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableShared
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property encrypted: Specifies whether to query only encrypted cloud disks.</summary>
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
        [JsiiProperty(name: "filters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.RosDisks.FiltersProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Filters
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceId: The ID of the instance to which the disk is attached.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property kmsKeyId: The ID of the Key Management Service (KMS) key used by the cloud disk.</summary>
        [JsiiProperty(name: "kmsKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KmsKeyId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property multiAttach: Specifies whether the multi-attach feature is enabled for the disk.</summary>
        /// <remarks>
        /// Valid values:
        /// Disabled: The multi-attach feature is disabled.
        /// Enabled: The multi-attach feature is enabled.
        /// LegacyShared: Shared Block Storage devices are queried.
        /// The multi-attach feature is in invitational preview. To use this feature, submit a ticket.
        /// </remarks>
        [JsiiProperty(name: "multiAttach", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MultiAttach
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property portable: Specifies whether the disk is removable.</summary>
        /// <remarks>
        /// Valid values:
        /// true: The disk is removable.A removable disk can independently exist and can be attached to or detached from an instance within the same zone.
        /// false: The disk is not removable. A disk that is not removable cannot independently exist or be attached to or detached from an instance within the same zone.
        /// The Portable attribute of the following disks is false, and these disks share the same lifecycle with their associated instances:
        /// Local disks
        /// Local SSDs
        /// Subscription data disks
        /// </remarks>
        [JsiiProperty(name: "portable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Portable
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

        /// <summary>Property resourceGroupId: The ID of the resource group to which the disk belongs.</summary>
        /// <remarks>
        /// If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
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

        /// <summary>Property snapshotId: The ID of the snapshot used to create the cloud disk.</summary>
        [JsiiProperty(name: "snapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SnapshotId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property status: The state of the cloud disk.</summary>
        /// <remarks>
        /// For more information, see Disk states. Valid values:
        /// In_use
        /// Available
        /// Attaching
        /// Detaching
        /// Creating
        /// ReIniting
        /// All
        /// Default value: All.
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

        /// <summary>Property tags: Tags of disks.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.RosDisks.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.RosDisks.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property zoneId: The ID of the zone for which to query resources.</summary>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Disks`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-disks
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDisksProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.DisksProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IDisksProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property additionalAttributes: The value of attribute N.</summary>
            /// <remarks>
            /// Set the value to IOPS, which indicates the maximum IOPS of the disk.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "additionalAttributes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? AdditionalAttributes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoSnapshotPolicyId: The ID of the automatic snapshot policy that is applied to the cloud disk.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoSnapshotPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoSnapshotPolicyId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property category: The category of the disk.</summary>
            /// <remarks>
            /// Valid values:
            /// all: all disk categories
            /// cloud: basic disk
            /// cloud_efficiency: ultra disk
            /// cloud_ssd: standard SSD
            /// ephemeral: retired local disk
            /// ephemeral_ssd: local SSD
            /// cloud_essd: ESSD
            /// local_ssd_pro: I/O-intensive local disk
            /// local_hdd_pro: throughput-intensive local disk
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Category
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property deleteAutoSnapshot: Specifies whether to delete the automatic snapshots of the cloud disk when the disk is released.</summary>
            /// <remarks>
            /// Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deleteAutoSnapshot", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeleteAutoSnapshot
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property deleteWithInstance: Specifies whether to release the cloud disk when its associated instance is released.</summary>
            /// <remarks>
            /// Valid values:
            /// true: The cloud disk is released when its associated instance is released.
            /// false: The cloud disk is not released but is retained as a pay-as-you-go data disk when its associated instance is released.
            /// Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deleteWithInstance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeleteWithInstance
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property diskChargeType: The billing method of the disk.</summary>
            /// <remarks>
            /// Valid values:
            /// PrePaid: subscription
            /// PostPaid: pay-as-you-go
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "diskChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DiskChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property diskIds: The IDs of disks.</summary>
            /// <remarks>
            /// The value is a JSON array that consists of up to 100 disk IDs.
            /// Separate the disk IDs with commas (,).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "diskIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DiskIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property diskName: The name of the disk.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "diskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DiskName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property diskType: The type of the disk.</summary>
            /// <remarks>
            /// Valid values:
            /// all: system disk and data disk
            /// system: system disk
            /// data: data disk
            /// Default value: all.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "diskType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DiskType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableAutomatedSnapshotPolicy: Specifies whether an automatic snapshot policy is applied to the cloud disk.</summary>
            /// <remarks>
            /// true: An automatic snapshot policy is applied to the cloud disk.
            /// false: No automatic snapshot policy is applied to the cloud disk.
            /// Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableAutomatedSnapshotPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableAutomatedSnapshotPolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableAutoSnapshot: Specifies whether the automatic snapshot policy feature is enabled for the cloud disk.</summary>
            /// <remarks>
            /// true: The automatic snapshot policy feature is enabled for the cloud disk.
            /// false: The automatic snapshot policy feature is disabled for the cloud disk.
            /// Note By default, the automatic snapshot policy feature is enabled for created cloud disks. You need only to apply an automatic snapshot policy to a cloud disk before you can use the automatic snapshot policy.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableAutoSnapshot", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableAutoSnapshot
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableShared: Specifies whether the disk is a Shared Block Storage device.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "enableShared", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableShared
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property encrypted: Specifies whether to query only encrypted cloud disks.</summary>
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
            [JsiiProperty(name: "filters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.RosDisks.FiltersProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Filters
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceId: The ID of the instance to which the disk is attached.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property kmsKeyId: The ID of the Key Management Service (KMS) key used by the cloud disk.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "kmsKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KmsKeyId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property multiAttach: Specifies whether the multi-attach feature is enabled for the disk.</summary>
            /// <remarks>
            /// Valid values:
            /// Disabled: The multi-attach feature is disabled.
            /// Enabled: The multi-attach feature is enabled.
            /// LegacyShared: Shared Block Storage devices are queried.
            /// The multi-attach feature is in invitational preview. To use this feature, submit a ticket.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "multiAttach", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MultiAttach
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property portable: Specifies whether the disk is removable.</summary>
            /// <remarks>
            /// Valid values:
            /// true: The disk is removable.A removable disk can independently exist and can be attached to or detached from an instance within the same zone.
            /// false: The disk is not removable. A disk that is not removable cannot independently exist or be attached to or detached from an instance within the same zone.
            /// The Portable attribute of the following disks is false, and these disks share the same lifecycle with their associated instances:
            /// Local disks
            /// Local SSDs
            /// Subscription data disks
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "portable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Portable
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

            /// <summary>Property resourceGroupId: The ID of the resource group to which the disk belongs.</summary>
            /// <remarks>
            /// If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property snapshotId: The ID of the snapshot used to create the cloud disk.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "snapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SnapshotId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property status: The state of the cloud disk.</summary>
            /// <remarks>
            /// For more information, see Disk states. Valid values:
            /// In_use
            /// Available
            /// Attaching
            /// Detaching
            /// Creating
            /// ReIniting
            /// All
            /// Default value: All.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Status
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags of disks.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.RosDisks.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.RosDisks.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.RosDisks.ITagsProperty[]?>();
            }

            /// <summary>Property zoneId: The ID of the zone for which to query resources.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ZoneId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
