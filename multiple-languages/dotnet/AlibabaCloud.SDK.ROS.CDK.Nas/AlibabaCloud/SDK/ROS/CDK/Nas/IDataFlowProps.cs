using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas
{
    /// <summary>Properties for defining a `DataFlow`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-dataflow
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDataFlowProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.DataFlowProps")]
    public interface IDataFlowProps
    {
        /// <summary>Property fileSystemId: The ID of the file system.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>The IDs of CPFS file systems must start with <c>cpfs-</c>. Example:
        /// cpfs-125487****.</description>
        /// <description>The IDs of CPFS for Lingjun file systems must start with <c>bmcpfs-</c>. Example:
        /// bmcpfs-0015****.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "fileSystemId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FileSystemId
        {
            get;
        }

        /// <summary>Property fsetId: The fileset ID.</summary>
        /// <remarks>
        ///     This parameter is required for CPFS file systems.
        /// </remarks>
        [JsiiProperty(name: "fsetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FsetId
        {
            get;
        }

        /// <summary>Property sourceStorage: The access path of the source storage.</summary>
        /// <remarks>
        /// Format: <c>&lt;storage type&gt;:\/\/[&lt;account id&gt;:]&lt;path&gt;</c>.
        /// Parameters:
        ///
        /// <list type="bullet">
        /// <description>storage type: Only OSS is supported.</description>
        /// <description>account id (optional): the UID of the account of the source storage. This
        /// parameter is required when you use OSS buckets across accounts.</description>
        /// <description>path: the name of the OSS bucket. Limits:</description>
        /// <description>The name can contain only lowercase letters, digits, and hyphens (-). The
        /// name must start and end with a lowercase letter or digit.</description>
        /// <description>The name can be up to 128 characters in length.</description>
        /// <description>The name must be encoded in UTF-8.</description>
        /// </list>
        ///
        ///     <list type="bullet">
        ///     <description>The OSS bucket must be an existing bucket in the region.</description>
        ///     <description>Only CPFS for LINGJUN V2.6.0 and later support the account id parameter.</description>
        ///     </list>
        /// </remarks>
        [JsiiProperty(name: "sourceStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourceStorage
        {
            get;
        }

        /// <summary>Property throughput: The maximum data flow throughput.</summary>
        /// <remarks>
        /// Unit: MB/s. Valid values:
        ///
        /// <list type="bullet">
        /// <description>600</description>
        /// <description>1200</description>
        /// <description>1500</description>
        /// </list>
        ///
        ///     The data flow throughput must be less than the I/O throughput of the file
        ///     system. This parameter is required for CPFS file systems.
        /// </remarks>
        [JsiiProperty(name: "throughput", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Throughput
        {
            get;
        }

        /// <summary>Property autoRefreshInterval: The automatic update interval time, every time the interval, the CPFS checks whether there is a data update in the directory.</summary>
        /// <remarks>
        /// If there is data update, start the automatic update task, unit: minute.
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

        /// <summary>Property autoRefreshPolicy: The automatic update policy.</summary>
        /// <remarks>
        /// The updated data in the source storage is imported
        /// into the CPFS file system based on the policy.
        ///
        /// <list type="bullet">
        /// <description>None (default): Updated data in the source storage is not automatically
        /// imported into the CPFS file system. You can run a data flow task to import the
        /// updated data from the source storage.</description>
        /// <description>ImportChanged: Updated data in the source storage is automatically imported
        /// into the CPFS file system.</description>
        /// </list>
        ///
        ///     This parameter takes effect only for CPFS file systems.
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

        /// <summary>Property autoRefreshs:.</summary>
        [JsiiProperty(name: "autoRefreshs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-nas.RosDataFlow.AutoRefreshsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoRefreshs
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the dataflow.</summary>
        /// <remarks>
        /// Limits:
        ///
        /// <list type="bullet">
        /// <description>The description must be 2 to 128 characters in length.</description>
        /// <description>The description must start with a letter but cannot start with <c>http:\/\/</c> or
        /// <c>https:\/\/</c>.</description>
        /// <description>The description can contain letters, digits, colons (:), underscores (_), and
        /// hyphens (-).</description>
        /// </list>
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

        /// <summary>Property sourceSecurityType: The type of safety protection types of the source storage.</summary>
        /// <remarks>
        /// If the source storage must be protected through safety protection, please specify the type of safety protection type storage.Value:
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

        /// <summary>Properties for defining a `DataFlow`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-dataflow
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDataFlowProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.DataFlowProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nas.IDataFlowProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property fileSystemId: The ID of the file system.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>The IDs of CPFS file systems must start with <c>cpfs-</c>. Example:
            /// cpfs-125487****.</description>
            /// <description>The IDs of CPFS for Lingjun file systems must start with <c>bmcpfs-</c>. Example:
            /// bmcpfs-0015****.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "fileSystemId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FileSystemId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property fsetId: The fileset ID.</summary>
            /// <remarks>
            ///     This parameter is required for CPFS file systems.
            /// </remarks>
            [JsiiProperty(name: "fsetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FsetId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property sourceStorage: The access path of the source storage.</summary>
            /// <remarks>
            /// Format: <c>&lt;storage type&gt;:\/\/[&lt;account id&gt;:]&lt;path&gt;</c>.
            /// Parameters:
            ///
            /// <list type="bullet">
            /// <description>storage type: Only OSS is supported.</description>
            /// <description>account id (optional): the UID of the account of the source storage. This
            /// parameter is required when you use OSS buckets across accounts.</description>
            /// <description>path: the name of the OSS bucket. Limits:</description>
            /// <description>The name can contain only lowercase letters, digits, and hyphens (-). The
            /// name must start and end with a lowercase letter or digit.</description>
            /// <description>The name can be up to 128 characters in length.</description>
            /// <description>The name must be encoded in UTF-8.</description>
            /// </list>
            ///
            ///     <list type="bullet">
            ///     <description>The OSS bucket must be an existing bucket in the region.</description>
            ///     <description>Only CPFS for LINGJUN V2.6.0 and later support the account id parameter.</description>
            ///     </list>
            /// </remarks>
            [JsiiProperty(name: "sourceStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceStorage
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property throughput: The maximum data flow throughput.</summary>
            /// <remarks>
            /// Unit: MB/s. Valid values:
            ///
            /// <list type="bullet">
            /// <description>600</description>
            /// <description>1200</description>
            /// <description>1500</description>
            /// </list>
            ///
            ///     The data flow throughput must be less than the I/O throughput of the file
            ///     system. This parameter is required for CPFS file systems.
            /// </remarks>
            [JsiiProperty(name: "throughput", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Throughput
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property autoRefreshInterval: The automatic update interval time, every time the interval, the CPFS checks whether there is a data update in the directory.</summary>
            /// <remarks>
            /// If there is data update, start the automatic update task, unit: minute.
            /// Scope of value: 5 ~ 525600, default value: 10.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRefreshInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRefreshInterval
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoRefreshPolicy: The automatic update policy.</summary>
            /// <remarks>
            /// The updated data in the source storage is imported
            /// into the CPFS file system based on the policy.
            ///
            /// <list type="bullet">
            /// <description>None (default): Updated data in the source storage is not automatically
            /// imported into the CPFS file system. You can run a data flow task to import the
            /// updated data from the source storage.</description>
            /// <description>ImportChanged: Updated data in the source storage is automatically imported
            /// into the CPFS file system.</description>
            /// </list>
            ///
            ///     This parameter takes effect only for CPFS file systems.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRefreshPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRefreshPolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoRefreshs:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoRefreshs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-nas.RosDataFlow.AutoRefreshsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? AutoRefreshs
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the dataflow.</summary>
            /// <remarks>
            /// Limits:
            ///
            /// <list type="bullet">
            /// <description>The description must be 2 to 128 characters in length.</description>
            /// <description>The description must start with a letter but cannot start with <c>http:\/\/</c> or
            /// <c>https:\/\/</c>.</description>
            /// <description>The description can contain letters, digits, colons (:), underscores (_), and
            /// hyphens (-).</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceSecurityType: The type of safety protection types of the source storage.</summary>
            /// <remarks>
            /// If the source storage must be protected through safety protection, please specify the type of safety protection type storage.Value:
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
