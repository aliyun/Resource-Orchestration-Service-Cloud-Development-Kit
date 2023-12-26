using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dfs
{
    /// <summary>Properties for defining a `RosFileSystem`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-filesystem
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosFileSystemProps), fullyQualifiedName: "@alicloud/ros-cdk-dfs.RosFileSystemProps")]
    public interface IRosFileSystemProps
    {
        /// <remarks>
        /// <strong>Property</strong>: protocolType: Protocol type, only support HDFS（HadoopFileSystem）
        /// </remarks>
        [JsiiProperty(name: "protocolType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProtocolType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: spaceCapacity: Capacity of the file system.
        /// When the actual data volume reaches the file system capacity, data cannot be written.
        /// Unit: GB
        /// </remarks>
        [JsiiProperty(name: "spaceCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SpaceCapacity
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: storageType: Type of storage media.
        /// Values:
        /// STANDARD (default) : standard type.
        /// PERFORMANCE: performance type.
        /// </remarks>
        [JsiiProperty(name: "storageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StorageType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: zone id
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ZoneId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dataRedundancyType: Redundancy mode of the file system.
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

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the file system.
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
        /// <strong>Property</strong>: fileSystemName: Name of the file system. The naming rules are as follows:
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

        /// <remarks>
        /// <strong>Property</strong>: partitionNumber: The reserved parameters
        /// </remarks>
        [JsiiProperty(name: "partitionNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PartitionNumber
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: provisionedThroughputInMiBps: Preset handling capacity.
        /// Unit: MB\/sdata range: 1-5120
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

        /// <remarks>
        /// <strong>Property</strong>: storageSetName: The reserved parameters.
        /// </remarks>
        [JsiiProperty(name: "storageSetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StorageSetName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: throughputMode: Throughput mode
        /// Values:
        /// Standard（default）: standard throughputProvisioned: preset throughput
        /// </remarks>
        [JsiiProperty(name: "throughputMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ThroughputMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosFileSystem`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-filesystem
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosFileSystemProps), fullyQualifiedName: "@alicloud/ros-cdk-dfs.RosFileSystemProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dfs.IRosFileSystemProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: protocolType: Protocol type, only support HDFS（HadoopFileSystem）
            /// </remarks>
            [JsiiProperty(name: "protocolType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProtocolType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: spaceCapacity: Capacity of the file system.
            /// When the actual data volume reaches the file system capacity, data cannot be written.
            /// Unit: GB
            /// </remarks>
            [JsiiProperty(name: "spaceCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SpaceCapacity
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: storageType: Type of storage media.
            /// Values:
            /// STANDARD (default) : standard type.
            /// PERFORMANCE: performance type.
            /// </remarks>
            [JsiiProperty(name: "storageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StorageType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: zoneId: zone id
            /// </remarks>
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dataRedundancyType: Redundancy mode of the file system.
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

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the file system.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: fileSystemName: Name of the file system. The naming rules are as follows:
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

            /// <remarks>
            /// <strong>Property</strong>: partitionNumber: The reserved parameters
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "partitionNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PartitionNumber
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: provisionedThroughputInMiBps: Preset handling capacity.
            /// Unit: MB\/sdata range: 1-5120
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "provisionedThroughputInMiBps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProvisionedThroughputInMiBps
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: storageSetName: The reserved parameters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "storageSetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StorageSetName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: throughputMode: Throughput mode
            /// Values:
            /// Standard（default）: standard throughputProvisioned: preset throughput
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "throughputMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ThroughputMode
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
