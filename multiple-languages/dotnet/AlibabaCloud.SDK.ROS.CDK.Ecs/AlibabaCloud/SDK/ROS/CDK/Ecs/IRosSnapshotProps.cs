using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ALIYUN::ECS::Snapshot`.</summary>
    [JsiiInterface(nativeType: typeof(IRosSnapshotProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosSnapshotProps")]
    public interface IRosSnapshotProps
    {
        /// <remarks>
        /// <strong>Property</strong>: diskId: Indicates the ID of the specified disk.
        /// </remarks>
        [JsiiProperty(name: "diskId", typeJson: "{\"primitive\":\"string\"}")]
        string DiskId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of a snapshot can be 2 to 256 characters in length and cannot begin with http:// or https://. The description will appear on the console. By default, the value is zero.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: instantAccess: Specifies whether to enable the instant access feature. Valid values: 
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

        /// <remarks>
        /// <strong>Property</strong>: instantAccessRetentionDays: Specifies the retention period of the instant access feature. After the retention period ends, 
        /// the snapshot is automatically released. This parameter takes effect only when InstantAccess 
        /// is set to true. Unit: days.
        /// Valid values: 1 to 65535. By default, the value of 
        /// this parameter is the same as that of RetentionDays.
        /// </remarks>
        [JsiiProperty(name: "instantAccessRetentionDays", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? InstantAccessRetentionDays
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: snapshotName: The name of the snapshot, [2, 128] English or Chinese characters. It must begin with an uppercase/lowercase letter or a Chinese character, and may contain numbers, '_' or '-'. It cannot begin with http:// or https://.
        /// </remarks>
        [JsiiProperty(name: "snapshotName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SnapshotName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Core.IRosTag[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: timeout: The number of minutes to wait for create snapshot.
        /// </remarks>
        [JsiiProperty(name: "timeout", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Timeout
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ECS::Snapshot`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosSnapshotProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosSnapshotProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IRosSnapshotProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: diskId: Indicates the ID of the specified disk.
            /// </remarks>
            [JsiiProperty(name: "diskId", typeJson: "{\"primitive\":\"string\"}")]
            public string DiskId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of a snapshot can be 2 to 256 characters in length and cannot begin with http:// or https://. The description will appear on the console. By default, the value is zero.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: instantAccess: Specifies whether to enable the instant access feature. Valid values: 
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

            /// <remarks>
            /// <strong>Property</strong>: instantAccessRetentionDays: Specifies the retention period of the instant access feature. After the retention period ends, 
            /// the snapshot is automatically released. This parameter takes effect only when InstantAccess 
            /// is set to true. Unit: days.
            /// Valid values: 1 to 65535. By default, the value of 
            /// this parameter is the same as that of RetentionDays.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instantAccessRetentionDays", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? InstantAccessRetentionDays
            {
                get => GetInstanceProperty<double?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: snapshotName: The name of the snapshot, [2, 128] English or Chinese characters. It must begin with an uppercase/lowercase letter or a Chinese character, and may contain numbers, '_' or '-'. It cannot begin with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "snapshotName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SnapshotName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Core.IRosTag[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IRosTag[]?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: timeout: The number of minutes to wait for create snapshot.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "timeout", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Timeout
            {
                get => GetInstanceProperty<double?>();
            }
        }
    }
}
