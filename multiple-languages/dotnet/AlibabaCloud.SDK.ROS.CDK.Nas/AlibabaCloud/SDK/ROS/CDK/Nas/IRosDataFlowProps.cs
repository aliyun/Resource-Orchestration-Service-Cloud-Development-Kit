using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas
{
    /// <summary>Properties for defining a `RosDataFlow`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-dataflow
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDataFlowProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.RosDataFlowProps")]
    public interface IRosDataFlowProps
    {
        /// <remarks>
        /// <strong>Property</strong>: fileSystemId: The ID of the file system.
        /// *   The IDs of CPFS file systems must start with `cpfs-`. Example:
        /// cpfs-125487\*\*\*\*.
        /// *   The IDs of CPFS for Lingjun file systems must start with `bmcpfs-`. Example:
        /// bmcpfs-0015\*\*\*\*.
        /// </remarks>
        [JsiiProperty(name: "fileSystemId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FileSystemId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: fsetId: The fileset ID.
        /// >  This parameter is required for CPFS file systems.
        /// </remarks>
        [JsiiProperty(name: "fsetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FsetId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceStorage: The access path of the source storage. Format: `<storage type>:\/\/[<account
        /// id>:]<path>`.
        /// Parameters:
        /// *   storage type: Only OSS is supported.
        /// *   account id (optional): the UID of the account of the source storage. This
        /// parameter is required when you use OSS buckets across accounts.
        /// *   path: the name of the OSS bucket. Limits:
        /// *   The name can contain only lowercase letters, digits, and hyphens (-). The
        /// name must start and end with a lowercase letter or digit.
        /// *   The name can be up to 128 characters in length.
        /// *   The name must be encoded in UTF-8.
        /// > *   The OSS bucket must be an existing bucket in the region.
        /// > *   Only CPFS for LINGJUN V2.6.0 and later support the account id parameter.
        /// </remarks>
        [JsiiProperty(name: "sourceStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourceStorage
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: throughput: The maximum data flow throughput. Unit: MB\/s. Valid values:
        /// *   600
        /// *   1200
        /// *   1500
        /// >  The data flow throughput must be less than the I\/O throughput of the file
        /// system. This parameter is required for CPFS file systems.
        /// </remarks>
        [JsiiProperty(name: "throughput", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Throughput
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoRefreshInterval: The automatic update interval time, every time the interval, the CPFS checks whether there is a data update in the directory. If there is data update, start the automatic update task, unit: minute.
        /// Scope of value: 5 ~ 525600, default value: 10.
        /// </remarks>
        [JsiiProperty(name: "autoRefreshInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoRefreshInterval
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: autoRefreshPolicy: The automatic update policy. The updated data in the source storage is imported
        /// into the CPFS file system based on the policy.
        /// *   None (default): Updated data in the source storage is not automatically
        /// imported into the CPFS file system. You can run a data flow task to import the
        /// updated data from the source storage.
        /// *   ImportChanged: Updated data in the source storage is automatically imported
        /// into the CPFS file system.
        /// >  This parameter takes effect only for CPFS file systems.
        /// </remarks>
        [JsiiProperty(name: "autoRefreshPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoRefreshPolicy
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: autoRefreshs:
        /// </remarks>
        [JsiiProperty(name: "autoRefreshs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-nas.RosDataFlow.AutoRefreshsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoRefreshs
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the dataflow.
        /// Limits:
        /// *   The description must be 2 to 128 characters in length.
        /// *   The description must start with a letter but cannot start with `http:\/\/` or
        /// `https:\/\/`.
        /// *   The description can contain letters, digits, colons (:), underscores (_), and
        /// hyphens (-).
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
        /// <strong>Property</strong>: sourceSecurityType: The type of safety protection types of the source storage. If the source storage must be protected through safety protection, please specify the type of safety protection type storage.Value:
        /// No (default value): It means that the source storage does not need to be accessed by safe protection.
        /// SSL: Protective access through SSL certificates.
        /// </remarks>
        [JsiiProperty(name: "sourceSecurityType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceSecurityType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosDataFlow`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-dataflow
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDataFlowProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.RosDataFlowProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nas.IRosDataFlowProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: fileSystemId: The ID of the file system.
            /// *   The IDs of CPFS file systems must start with `cpfs-`. Example:
            /// cpfs-125487\*\*\*\*.
            /// *   The IDs of CPFS for Lingjun file systems must start with `bmcpfs-`. Example:
            /// bmcpfs-0015\*\*\*\*.
            /// </remarks>
            [JsiiProperty(name: "fileSystemId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FileSystemId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: fsetId: The fileset ID.
            /// >  This parameter is required for CPFS file systems.
            /// </remarks>
            [JsiiProperty(name: "fsetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FsetId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceStorage: The access path of the source storage. Format: `<storage type>:\/\/[<account
            /// id>:]<path>`.
            /// Parameters:
            /// *   storage type: Only OSS is supported.
            /// *   account id (optional): the UID of the account of the source storage. This
            /// parameter is required when you use OSS buckets across accounts.
            /// *   path: the name of the OSS bucket. Limits:
            /// *   The name can contain only lowercase letters, digits, and hyphens (-). The
            /// name must start and end with a lowercase letter or digit.
            /// *   The name can be up to 128 characters in length.
            /// *   The name must be encoded in UTF-8.
            /// > *   The OSS bucket must be an existing bucket in the region.
            /// > *   Only CPFS for LINGJUN V2.6.0 and later support the account id parameter.
            /// </remarks>
            [JsiiProperty(name: "sourceStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceStorage
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: throughput: The maximum data flow throughput. Unit: MB\/s. Valid values:
            /// *   600
            /// *   1200
            /// *   1500
            /// >  The data flow throughput must be less than the I\/O throughput of the file
            /// system. This parameter is required for CPFS file systems.
            /// </remarks>
            [JsiiProperty(name: "throughput", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Throughput
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: autoRefreshInterval: The automatic update interval time, every time the interval, the CPFS checks whether there is a data update in the directory. If there is data update, start the automatic update task, unit: minute.
            /// Scope of value: 5 ~ 525600, default value: 10.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRefreshInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRefreshInterval
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: autoRefreshPolicy: The automatic update policy. The updated data in the source storage is imported
            /// into the CPFS file system based on the policy.
            /// *   None (default): Updated data in the source storage is not automatically
            /// imported into the CPFS file system. You can run a data flow task to import the
            /// updated data from the source storage.
            /// *   ImportChanged: Updated data in the source storage is automatically imported
            /// into the CPFS file system.
            /// >  This parameter takes effect only for CPFS file systems.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRefreshPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRefreshPolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: autoRefreshs:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRefreshs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-nas.RosDataFlow.AutoRefreshsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? AutoRefreshs
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the dataflow.
            /// Limits:
            /// *   The description must be 2 to 128 characters in length.
            /// *   The description must start with a letter but cannot start with `http:\/\/` or
            /// `https:\/\/`.
            /// *   The description can contain letters, digits, colons (:), underscores (_), and
            /// hyphens (-).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceSecurityType: The type of safety protection types of the source storage. If the source storage must be protected through safety protection, please specify the type of safety protection type storage.Value:
            /// No (default value): It means that the source storage does not need to be accessed by safe protection.
            /// SSL: Protective access through SSL certificates.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceSecurityType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceSecurityType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
