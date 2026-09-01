using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `Snapshot`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-snapshot
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISnapshotProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.SnapshotProps")]
    public interface ISnapshotProps
    {
        /// <summary>Property diskId: Indicates the ID of the specified disk.</summary>
        [JsiiProperty(name: "diskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DiskId
        {
            get;
        }

        /// <summary>Property description: The snapshot description must be 2 to 256 characters in length and cannot start with `http:\/\/` or `https:\/\/`.</summary>
        /// <remarks>
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

        /// <summary>Property instantAccess: Specifies whether to enable the Instant Access feature.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>true: Enables the Instant Access feature. This feature can be enabled only for
        /// snapshots of ESSD cloud disks.</description>
        /// <description>false: Disables the Instant Access feature. A standard snapshot is created.
        /// Default value: false.</description>
        /// </list>
        ///
        ///     This parameter is deprecated. standard snapshots for ESSD cloud disks now
        ///     include the <a href="">Instant Access</a> feature by default at no additional cost.
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

        /// <summary>Property instantAccessRetentionDays: The retention period for the Instant Access feature, in days.</summary>
        /// <remarks>
        /// The snapshot is
        /// automatically deleted when this retention period expires. This parameter takes
        /// effect only when <c>InstantAccess</c> is set to <c>true</c>. Valid values: 1 to 65,535.
        /// Defaults to the value of <c>RetentionDays</c>.
        ///
        ///     This parameter is deprecated. standard snapshots for ESSD cloud disks now
        ///     include the <a href="">Instant Access</a> feature by default at no additional cost.
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

        /// <summary>Property retentionDays: The retention period of the snapshot, in days.</summary>
        /// <remarks>
        /// Valid values: 1 to 65,536. The
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

        /// <summary>Property snapshotName: The snapshot name must be 2 to 128 characters long.</summary>
        /// <remarks>
        /// It must start with a letter
        /// or a Chinese character and can contain letters, digits, colons (:), underscores
        /// (_), periods (.), and hyphens (-).
        ///
        ///     The name cannot start with <c>http:\/\/</c> or <c>https:\/\/</c>. To avoid conflicts with
        ///     auto snapshot names, the name cannot start with <c>auto</c>.
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

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
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

        /// <summary>Property timeout: The number of minutes to wait for create snapshot.</summary>
        [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Timeout
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Snapshot`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-snapshot
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISnapshotProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.SnapshotProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.ISnapshotProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property diskId: Indicates the ID of the specified disk.</summary>
            [JsiiProperty(name: "diskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DiskId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The snapshot description must be 2 to 256 characters in length and cannot start with `http:\/\/` or `https:\/\/`.</summary>
            /// <remarks>
            /// This parameter is empty by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instantAccess: Specifies whether to enable the Instant Access feature.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>true: Enables the Instant Access feature. This feature can be enabled only for
            /// snapshots of ESSD cloud disks.</description>
            /// <description>false: Disables the Instant Access feature. A standard snapshot is created.
            /// Default value: false.</description>
            /// </list>
            ///
            ///     This parameter is deprecated. standard snapshots for ESSD cloud disks now
            ///     include the <a href="">Instant Access</a> feature by default at no additional cost.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instantAccess", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstantAccess
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instantAccessRetentionDays: The retention period for the Instant Access feature, in days.</summary>
            /// <remarks>
            /// The snapshot is
            /// automatically deleted when this retention period expires. This parameter takes
            /// effect only when <c>InstantAccess</c> is set to <c>true</c>. Valid values: 1 to 65,535.
            /// Defaults to the value of <c>RetentionDays</c>.
            ///
            ///     This parameter is deprecated. standard snapshots for ESSD cloud disks now
            ///     include the <a href="">Instant Access</a> feature by default at no additional cost.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instantAccessRetentionDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstantAccessRetentionDays
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

            /// <summary>Property retentionDays: The retention period of the snapshot, in days.</summary>
            /// <remarks>
            /// Valid values: 1 to 65,536. The
            /// snapshot is automatically deleted when the retention period expires.
            /// If this parameter is not specified, the snapshot is retained indefinitely.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "retentionDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RetentionDays
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property snapshotName: The snapshot name must be 2 to 128 characters long.</summary>
            /// <remarks>
            /// It must start with a letter
            /// or a Chinese character and can contain letters, digits, colons (:), underscores
            /// (_), periods (.), and hyphens (-).
            ///
            ///     The name cannot start with <c>http:\/\/</c> or <c>https:\/\/</c>. To avoid conflicts with
            ///     auto snapshot names, the name cannot start with <c>auto</c>.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "snapshotName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SnapshotName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosSnapshot.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.RosSnapshot.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.RosSnapshot.ITagsProperty[]?>();
            }

            /// <summary>Property timeout: The number of minutes to wait for create snapshot.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Timeout
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
