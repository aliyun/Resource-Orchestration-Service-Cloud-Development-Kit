using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ALIYUN::ECS::Snapshot`.</summary>
    [JsiiInterface(nativeType: typeof(ISnapshotProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.SnapshotProps")]
    public interface ISnapshotProps
    {
        /// <summary>Property diskId: Indicates the ID of the specified disk.</summary>
        [JsiiProperty(name: "diskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DiskId
        {
            get;
        }

        /// <summary>Property description: The description of a snapshot can be 2 to 256 characters in length and cannot begin with http:// or https://.</summary>
        /// <remarks>
        /// The description will appear on the console. By default, the value is zero.
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

        /// <summary>Property instantAccess: Specifies whether to enable the instant access feature.</summary>
        /// <remarks>
        /// Valid values:
        /// true: enables the instant access feature. This feature can be enabled only for enhanced SSDs (ESSDs)
        /// false: disables the instant access feature. If InstantAccess is set to false, normal snapshots are created.
        /// Default value: false.
        /// Note This parameter and the Category parameter cannot be specified at the same time.
        /// For more information, see the "Description" section in this topic.
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

        /// <summary>Property instantAccessRetentionDays: Specifies the retention period of the instant access feature.</summary>
        /// <remarks>
        /// After the retention period ends,
        /// the snapshot is automatically released. This parameter takes effect only when InstantAccess
        /// is set to true. Unit: days.
        /// Valid values: 1 to 65535. By default, the value of
        /// this parameter is the same as that of RetentionDays.
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

        /// <summary>Property retentionDays: Set the retention period of a snapshot in days.</summary>
        /// <remarks>
        /// The snapshot will be automatically released after the retention period expires.
        /// The value ranges from 1 to 65536.
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

        /// <summary>Property snapshotName: The name of the snapshot, [2, 128] English or Chinese characters.</summary>
        /// <remarks>
        /// It must begin with an uppercase/lowercase letter or a Chinese character, and may contain numbers, '_' or '-'. It cannot begin with http:// or https://.
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

        /// <summary>Properties for defining a `ALIYUN::ECS::Snapshot`.</summary>
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

            /// <summary>Property description: The description of a snapshot can be 2 to 256 characters in length and cannot begin with http:// or https://.</summary>
            /// <remarks>
            /// The description will appear on the console. By default, the value is zero.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instantAccess: Specifies whether to enable the instant access feature.</summary>
            /// <remarks>
            /// Valid values:
            /// true: enables the instant access feature. This feature can be enabled only for enhanced SSDs (ESSDs)
            /// false: disables the instant access feature. If InstantAccess is set to false, normal snapshots are created.
            /// Default value: false.
            /// Note This parameter and the Category parameter cannot be specified at the same time.
            /// For more information, see the "Description" section in this topic.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instantAccess", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstantAccess
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instantAccessRetentionDays: Specifies the retention period of the instant access feature.</summary>
            /// <remarks>
            /// After the retention period ends,
            /// the snapshot is automatically released. This parameter takes effect only when InstantAccess
            /// is set to true. Unit: days.
            /// Valid values: 1 to 65535. By default, the value of
            /// this parameter is the same as that of RetentionDays.
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

            /// <summary>Property retentionDays: Set the retention period of a snapshot in days.</summary>
            /// <remarks>
            /// The snapshot will be automatically released after the retention period expires.
            /// The value ranges from 1 to 65536.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "retentionDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RetentionDays
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property snapshotName: The name of the snapshot, [2, 128] English or Chinese characters.</summary>
            /// <remarks>
            /// It must begin with an uppercase/lowercase letter or a Chinese character, and may contain numbers, '_' or '-'. It cannot begin with http:// or https://.
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
