using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `RosSnapshot`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-snapshot
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosSnapshotProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosSnapshotProps")]
    public interface IRosSnapshotProps
    {
        /// <remarks>
        /// <strong>Property</strong>: diskId: Indicates the ID of the specified disk.
        /// </remarks>
        [JsiiProperty(name: "diskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DiskId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The snapshot description must be 2 to 256 characters in length and cannot start
        /// with `http:\/\/` or `https:\/\/`.
        /// This parameter is empty by default.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: instantAccess: Specifies whether to enable the Instant Access feature. Valid values:
        /// - true: Enables the Instant Access feature. This feature can be enabled only for
        /// snapshots of ESSD cloud disks.
        /// - false: Disables the Instant Access feature. A standard snapshot is created.
        /// Default value: false.
        /// > This parameter is deprecated. standard snapshots for ESSD cloud disks now
        /// include the [Instant Access]() feature by default at no additional cost.
        /// </remarks>
        [JsiiProperty(name: "instantAccess", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstantAccess
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: instantAccessRetentionDays: The retention period for the Instant Access feature, in days. The snapshot is
        /// automatically deleted when this retention period expires. This parameter takes
        /// effect only when `InstantAccess` is set to `true`. Valid values: 1 to 65,535.
        /// Defaults to the value of `RetentionDays`.
        /// > This parameter is deprecated. standard snapshots for ESSD cloud disks now
        /// include the [Instant Access]() feature by default at no additional cost.
        /// </remarks>
        [JsiiProperty(name: "instantAccessRetentionDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstantAccessRetentionDays
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: Resource group id.
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

        /// <remarks>
        /// <strong>Property</strong>: retentionDays: The retention period of the snapshot, in days. Valid values: 1 to 65,536. The
        /// snapshot is automatically deleted when the retention period expires.
        /// If this parameter is not specified, the snapshot is retained indefinitely.
        /// </remarks>
        [JsiiProperty(name: "retentionDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RetentionDays
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: snapshotName: The snapshot name must be 2 to 128 characters long. It must start with a letter
        /// or a Chinese character and can contain letters, digits, colons (:), underscores
        /// (_), periods (.), and hyphens (-).
        /// > The name cannot start with `http:\/\/` or `https:\/\/`. To avoid conflicts with
        /// auto snapshot names, the name cannot start with `auto`.
        /// </remarks>
        [JsiiProperty(name: "snapshotName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SnapshotName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosSnapshot.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Ecs.RosSnapshot.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: timeout: The number of minutes to wait for create snapshot.
        /// </remarks>
        [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Timeout
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosSnapshot`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-snapshot
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosSnapshotProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosSnapshotProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IRosSnapshotProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: diskId: Indicates the ID of the specified disk.
            /// </remarks>
            [JsiiProperty(name: "diskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DiskId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The snapshot description must be 2 to 256 characters in length and cannot start
            /// with `http:\/\/` or `https:\/\/`.
            /// This parameter is empty by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: instantAccess: Specifies whether to enable the Instant Access feature. Valid values:
            /// - true: Enables the Instant Access feature. This feature can be enabled only for
            /// snapshots of ESSD cloud disks.
            /// - false: Disables the Instant Access feature. A standard snapshot is created.
            /// Default value: false.
            /// > This parameter is deprecated. standard snapshots for ESSD cloud disks now
            /// include the [Instant Access]() feature by default at no additional cost.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instantAccess", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstantAccess
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: instantAccessRetentionDays: The retention period for the Instant Access feature, in days. The snapshot is
            /// automatically deleted when this retention period expires. This parameter takes
            /// effect only when `InstantAccess` is set to `true`. Valid values: 1 to 65,535.
            /// Defaults to the value of `RetentionDays`.
            /// > This parameter is deprecated. standard snapshots for ESSD cloud disks now
            /// include the [Instant Access]() feature by default at no additional cost.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instantAccessRetentionDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstantAccessRetentionDays
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: Resource group id.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: retentionDays: The retention period of the snapshot, in days. Valid values: 1 to 65,536. The
            /// snapshot is automatically deleted when the retention period expires.
            /// If this parameter is not specified, the snapshot is retained indefinitely.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "retentionDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RetentionDays
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: snapshotName: The snapshot name must be 2 to 128 characters long. It must start with a letter
            /// or a Chinese character and can contain letters, digits, colons (:), underscores
            /// (_), periods (.), and hyphens (-).
            /// > The name cannot start with `http:\/\/` or `https:\/\/`. To avoid conflicts with
            /// auto snapshot names, the name cannot start with `auto`.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "snapshotName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SnapshotName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosSnapshot.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.RosSnapshot.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.RosSnapshot.ITagsProperty[]?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: timeout: The number of minutes to wait for create snapshot.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Timeout
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
