using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `DataFlow`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-dataflow
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-nas.DataFlowProps")]
    public class DataFlowProps : AlibabaCloud.SDK.ROS.CDK.Nas.IDataFlowProps
    {
        private object _fileSystemId;

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
            get => _fileSystemId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _fileSystemId = value;
            }
        }

        private object _fsetId;

        /// <summary>Property fsetId: The fileset ID.</summary>
        /// <remarks>
        ///     This parameter is required for CPFS file systems.
        /// </remarks>
        [JsiiProperty(name: "fsetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object FsetId
        {
            get => _fsetId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _fsetId = value;
            }
        }

        private object _sourceStorage;

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
            get => _sourceStorage;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _sourceStorage = value;
            }
        }

        private object _throughput;

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
            get => _throughput;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case double cast_cd4240:
                            break;
                        case byte cast_cd4240:
                            break;
                        case decimal cast_cd4240:
                            break;
                        case float cast_cd4240:
                            break;
                        case int cast_cd4240:
                            break;
                        case long cast_cd4240:
                            break;
                        case sbyte cast_cd4240:
                            break;
                        case short cast_cd4240:
                            break;
                        case uint cast_cd4240:
                            break;
                        case ulong cast_cd4240:
                            break;
                        case ushort cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _throughput = value;
            }
        }

        private object? _autoRefreshInterval;

        /// <summary>Property autoRefreshInterval: The automatic update interval time, every time the interval, the CPFS checks whether there is a data update in the directory.</summary>
        /// <remarks>
        /// If there is data update, start the automatic update task, unit: minute.
        /// Scope of value: 5 ~ 525600, default value: 10.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoRefreshInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AutoRefreshInterval
        {
            get => _autoRefreshInterval;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case double cast_cd4240:
                            break;
                        case byte cast_cd4240:
                            break;
                        case decimal cast_cd4240:
                            break;
                        case float cast_cd4240:
                            break;
                        case int cast_cd4240:
                            break;
                        case long cast_cd4240:
                            break;
                        case sbyte cast_cd4240:
                            break;
                        case short cast_cd4240:
                            break;
                        case uint cast_cd4240:
                            break;
                        case ulong cast_cd4240:
                            break;
                        case ushort cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _autoRefreshInterval = value;
            }
        }

        private object? _autoRefreshPolicy;

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
            get => _autoRefreshPolicy;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _autoRefreshPolicy = value;
            }
        }

        private object? _autoRefreshs;

        /// <summary>Property autoRefreshs:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "autoRefreshs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-nas.RosDataFlow.AutoRefreshsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? AutoRefreshs
        {
            get => _autoRefreshs;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case object[] cast_cd4240:
                            for (var __idx_f64a5c = 0 ; __idx_f64a5c < cast_cd4240.Length ; __idx_f64a5c++)
                            {
                                switch (cast_cd4240[__idx_f64a5c])
                                {
                                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_201718:
                                        break;
                                    case AlibabaCloud.SDK.ROS.CDK.Nas.RosDataFlow.IAutoRefreshsProperty cast_201718:
                                        break;
                                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                        // Not enough information to type-check...
                                        break;
                                    case null:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Nas.RosDataFlow.IAutoRefreshsProperty).FullName}; received null", nameof(value));
                                    default:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Nas.RosDataFlow.IAutoRefreshsProperty).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
                                }
                            }
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _autoRefreshs = value;
            }
        }

        private object? _description;

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
            get => _description;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _description = value;
            }
        }

        private object? _sourceSecurityType;

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
            get => _sourceSecurityType;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _sourceSecurityType = value;
            }
        }
    }
}
