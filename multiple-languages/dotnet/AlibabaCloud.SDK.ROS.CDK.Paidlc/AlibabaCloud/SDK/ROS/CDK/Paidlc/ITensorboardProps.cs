using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Paidlc
{
    /// <summary>Properties for defining a `ALIYUN::PAIDLC::Tensorboard`.</summary>
    [JsiiInterface(nativeType: typeof(ITensorboardProps), fullyQualifiedName: "@alicloud/ros-cdk-paidlc.TensorboardProps")]
    public interface ITensorboardProps
    {
        /// <summary>Property dataSourceId: For dataset ID, see the data set ID, see ListDataSets.</summary>
        [JsiiProperty(name: "dataSourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DataSourceId
        {
            get;
        }

        /// <summary>Property displayName: Tensorboard name.</summary>
        [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DisplayName
        {
            get;
        }

        /// <summary>Property workspaceId: Work space ID.How to get working space ID, see ListworkSpaces.</summary>
        [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WorkspaceId
        {
            get;
        }

        /// <summary>Property cpu: CPU nuclear number.</summary>
        [JsiiProperty(name: "cpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Cpu
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dataSources: Data source configuration.</summary>
        [JsiiProperty(name: "dataSources", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DataSources
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dataSourceType: The type of dataset.</summary>
        /// <remarks>
        /// Values: OSS,NAS
        /// </remarks>
        [JsiiProperty(name: "dataSourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DataSourceType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property jobId: Task ID.How to get the task ID, see Listjobs.</summary>
        [JsiiProperty(name: "jobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? JobId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property maxRunningTimeMinutes: The longest running time, the unit is: minutes.</summary>
        [JsiiProperty(name: "maxRunningTimeMinutes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaxRunningTimeMinutes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property memory: Memory size, the unit is: GB.</summary>
        [JsiiProperty(name: "memory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Memory
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property options: The expansion field of the dataset is JSON format, which currently supports Mountpath: the path of custom dataset mounting.</summary>
        [JsiiProperty(name: "options", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Options
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourceId: Source ID.</summary>
        [JsiiProperty(name: "sourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourceType: Source type.</summary>
        [JsiiProperty(name: "sourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property summaryPath: Summary directory.</summary>
        [JsiiProperty(name: "summaryPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SummaryPath
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property summaryRelativePath: Summary relative directory.</summary>
        /// <remarks>
        /// Summary relative directory and Summary directory are mutually exclusive
        /// </remarks>
        [JsiiProperty(name: "summaryRelativePath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SummaryRelativePath
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property uri: URI of a dataset: When DataSourceType is OSS, the format is: OSS: // [OSS-BUCET].</summary>
        /// <remarks>
        /// [Endpoint]/[Path].
        /// When the DataSourceType is NAS, the format is: nas:// [nas-filesystem-id]. [Region]/[PATH].
        /// </remarks>
        [JsiiProperty(name: "uri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Uri
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::PAIDLC::Tensorboard`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITensorboardProps), fullyQualifiedName: "@alicloud/ros-cdk-paidlc.TensorboardProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Paidlc.ITensorboardProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dataSourceId: For dataset ID, see the data set ID, see ListDataSets.</summary>
            [JsiiProperty(name: "dataSourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DataSourceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property displayName: Tensorboard name.</summary>
            [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DisplayName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property workspaceId: Work space ID.How to get working space ID, see ListworkSpaces.</summary>
            [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WorkspaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property cpu: CPU nuclear number.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "cpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Cpu
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dataSources: Data source configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dataSources", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataSources
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dataSourceType: The type of dataset.</summary>
            /// <remarks>
            /// Values: OSS,NAS
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dataSourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataSourceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property jobId: Task ID.How to get the task ID, see Listjobs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "jobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? JobId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property maxRunningTimeMinutes: The longest running time, the unit is: minutes.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "maxRunningTimeMinutes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxRunningTimeMinutes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property memory: Memory size, the unit is: GB.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "memory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Memory
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property options: The expansion field of the dataset is JSON format, which currently supports Mountpath: the path of custom dataset mounting.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "options", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Options
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceId: Source ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "sourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceType: Source type.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "sourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property summaryPath: Summary directory.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "summaryPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SummaryPath
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property summaryRelativePath: Summary relative directory.</summary>
            /// <remarks>
            /// Summary relative directory and Summary directory are mutually exclusive
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "summaryRelativePath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SummaryRelativePath
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property uri: URI of a dataset: When DataSourceType is OSS, the format is: OSS: // [OSS-BUCET].</summary>
            /// <remarks>
            /// [Endpoint]/[Path].
            /// When the DataSourceType is NAS, the format is: nas:// [nas-filesystem-id]. [Region]/[PATH].
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "uri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Uri
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
