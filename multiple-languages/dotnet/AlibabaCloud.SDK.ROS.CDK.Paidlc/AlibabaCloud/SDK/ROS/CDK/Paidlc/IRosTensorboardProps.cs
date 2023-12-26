using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Paidlc
{
    /// <summary>Properties for defining a `RosTensorboard`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paidlc-tensorboard
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosTensorboardProps), fullyQualifiedName: "@alicloud/ros-cdk-paidlc.RosTensorboardProps")]
    public interface IRosTensorboardProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dataSourceId: For dataset ID, see the data set ID, see ListDataSets.
        /// </remarks>
        [JsiiProperty(name: "dataSourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DataSourceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: displayName: Tensorboard name.
        /// </remarks>
        [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DisplayName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: workspaceId: Work space ID.How to get working space ID, see ListworkSpaces.
        /// </remarks>
        [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WorkspaceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: cpu: CPU nuclear number.
        /// </remarks>
        [JsiiProperty(name: "cpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Cpu
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dataSources: Data source configuration.
        /// </remarks>
        [JsiiProperty(name: "dataSources", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DataSources
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dataSourceType: The type of dataset. Values: OSS,NAS
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

        /// <remarks>
        /// <strong>Property</strong>: jobId: Task ID.How to get the task ID, see Listjobs.
        /// </remarks>
        [JsiiProperty(name: "jobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? JobId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: maxRunningTimeMinutes: The longest running time, the unit is: minutes.
        /// </remarks>
        [JsiiProperty(name: "maxRunningTimeMinutes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaxRunningTimeMinutes
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: memory: Memory size, the unit is: GB.
        /// </remarks>
        [JsiiProperty(name: "memory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Memory
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: options: The expansion field of the dataset is JSON format, which currently supports Mountpath: the path of custom dataset mounting.
        /// </remarks>
        [JsiiProperty(name: "options", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Options
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceId: Source ID.
        /// </remarks>
        [JsiiProperty(name: "sourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceType: Source type.
        /// </remarks>
        [JsiiProperty(name: "sourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: summaryPath: Summary directory.
        /// </remarks>
        [JsiiProperty(name: "summaryPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SummaryPath
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: summaryRelativePath: Summary relative directory. Summary relative directory and Summary directory are mutually exclusive
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

        /// <remarks>
        /// <strong>Property</strong>: uri: URI of a dataset:
        /// When DataSourceType is OSS, the format is: OSS: \/\/ [OSS-BUCET]. [Endpoint]\/[Path].
        /// When the DataSourceType is NAS, the format is: nas:\/\/ [nas-filesystem-id]. [Region]\/[PATH].
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

        /// <summary>Properties for defining a `RosTensorboard`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paidlc-tensorboard
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosTensorboardProps), fullyQualifiedName: "@alicloud/ros-cdk-paidlc.RosTensorboardProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Paidlc.IRosTensorboardProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dataSourceId: For dataset ID, see the data set ID, see ListDataSets.
            /// </remarks>
            [JsiiProperty(name: "dataSourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DataSourceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: displayName: Tensorboard name.
            /// </remarks>
            [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DisplayName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: workspaceId: Work space ID.How to get working space ID, see ListworkSpaces.
            /// </remarks>
            [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WorkspaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: cpu: CPU nuclear number.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Cpu
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dataSources: Data source configuration.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dataSources", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataSources
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dataSourceType: The type of dataset. Values: OSS,NAS
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dataSourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataSourceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: jobId: Task ID.How to get the task ID, see Listjobs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "jobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? JobId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: maxRunningTimeMinutes: The longest running time, the unit is: minutes.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxRunningTimeMinutes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxRunningTimeMinutes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: memory: Memory size, the unit is: GB.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "memory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Memory
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: options: The expansion field of the dataset is JSON format, which currently supports Mountpath: the path of custom dataset mounting.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "options", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Options
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceId: Source ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceType: Source type.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: summaryPath: Summary directory.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "summaryPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SummaryPath
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: summaryRelativePath: Summary relative directory. Summary relative directory and Summary directory are mutually exclusive
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "summaryRelativePath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SummaryRelativePath
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: uri: URI of a dataset:
            /// When DataSourceType is OSS, the format is: OSS: \/\/ [OSS-BUCET]. [Endpoint]\/[Path].
            /// When the DataSourceType is NAS, the format is: nas:\/\/ [nas-filesystem-id]. [Region]\/[PATH].
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
