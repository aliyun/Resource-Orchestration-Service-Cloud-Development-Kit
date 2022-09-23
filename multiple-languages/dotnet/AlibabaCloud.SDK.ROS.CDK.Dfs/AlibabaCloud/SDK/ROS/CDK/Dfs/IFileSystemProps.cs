using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dfs
{
    /// <summary>Properties for defining a `ALIYUN::DFS::FileSystem`.</summary>
    [JsiiInterface(nativeType: typeof(IFileSystemProps), fullyQualifiedName: "@alicloud/ros-cdk-dfs.FileSystemProps")]
    public interface IFileSystemProps
    {
        /// <summary>Property protocolType: Protocol type, only support HDFS（HadoopFileSystem）.</summary>
        [JsiiProperty(name: "protocolType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProtocolType
        {
            get;
        }

        /// <summary>Property spaceCapacity: Capacity of the file system.</summary>
        /// <remarks>
        /// When the actual data volume reaches the file system capacity, data cannot be written.
        /// Unit: GB
        /// </remarks>
        [JsiiProperty(name: "spaceCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SpaceCapacity
        {
            get;
        }

        /// <summary>Property storageType: Type of storage media.</summary>
        /// <remarks>
        /// Values:
        /// STANDARD (default) : standard type.
        /// PERFORMANCE: performance type.
        /// </remarks>
        [JsiiProperty(name: "storageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StorageType
        {
            get;
        }

        /// <summary>Property zoneId: zone id.</summary>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ZoneId
        {
            get;
        }

        /// <summary>Property dataRedundancyType: Redundancy mode of the file system.</summary>
        /// <remarks>
        /// Values:
        /// LRS (default) : local redundancy.
        /// ZRS: in-city redundancy.
        /// </remarks>
        [JsiiProperty(name: "dataRedundancyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DataRedundancyType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the file system.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property fileSystemName: Name of the file system.</summary>
        /// <remarks>
        /// The naming rules are as follows:
        /// The value contains 6 to 100 characters.
        /// Globally unique and cannot be an empty string.
        /// The value can contain letters and digits and underscores (_).
        /// </remarks>
        [JsiiProperty(name: "fileSystemName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FileSystemName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property partitionNumber: The reserved parameters.</summary>
        [JsiiProperty(name: "partitionNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PartitionNumber
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property provisionedThroughputInMiBps: Preset handling capacity.</summary>
        /// <remarks>
        /// Unit: MB/sdata range: 1-5120
        /// </remarks>
        [JsiiProperty(name: "provisionedThroughputInMiBps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProvisionedThroughputInMiBps
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property storageSetName: The reserved parameters.</summary>
        [JsiiProperty(name: "storageSetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StorageSetName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property throughputMode: Throughput mode Values: Standard（default）: standard throughputProvisioned: preset throughput.</summary>
        [JsiiProperty(name: "throughputMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ThroughputMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::DFS::FileSystem`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IFileSystemProps), fullyQualifiedName: "@alicloud/ros-cdk-dfs.FileSystemProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dfs.IFileSystemProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property protocolType: Protocol type, only support HDFS（HadoopFileSystem）.</summary>
            [JsiiProperty(name: "protocolType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProtocolType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property spaceCapacity: Capacity of the file system.</summary>
            /// <remarks>
            /// When the actual data volume reaches the file system capacity, data cannot be written.
            /// Unit: GB
            /// </remarks>
            [JsiiProperty(name: "spaceCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SpaceCapacity
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property storageType: Type of storage media.</summary>
            /// <remarks>
            /// Values:
            /// STANDARD (default) : standard type.
            /// PERFORMANCE: performance type.
            /// </remarks>
            [JsiiProperty(name: "storageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StorageType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property zoneId: zone id.</summary>
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dataRedundancyType: Redundancy mode of the file system.</summary>
            /// <remarks>
            /// Values:
            /// LRS (default) : local redundancy.
            /// ZRS: in-city redundancy.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dataRedundancyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataRedundancyType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the file system.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property fileSystemName: Name of the file system.</summary>
            /// <remarks>
            /// The naming rules are as follows:
            /// The value contains 6 to 100 characters.
            /// Globally unique and cannot be an empty string.
            /// The value can contain letters and digits and underscores (_).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fileSystemName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FileSystemName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property partitionNumber: The reserved parameters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "partitionNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PartitionNumber
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property provisionedThroughputInMiBps: Preset handling capacity.</summary>
            /// <remarks>
            /// Unit: MB/sdata range: 1-5120
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "provisionedThroughputInMiBps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProvisionedThroughputInMiBps
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property storageSetName: The reserved parameters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "storageSetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StorageSetName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property throughputMode: Throughput mode Values: Standard（default）: standard throughputProvisioned: preset throughput.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "throughputMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ThroughputMode
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
