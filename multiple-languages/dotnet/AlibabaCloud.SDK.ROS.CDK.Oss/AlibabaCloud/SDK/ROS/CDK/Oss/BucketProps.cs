using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oss
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `Bucket`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucket
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-oss.BucketProps")]
    public class BucketProps : AlibabaCloud.SDK.ROS.CDK.Oss.IBucketProps
    {
        private object _bucketName;

        /// <summary>Property bucketName: bucket name.</summary>
        [JsiiProperty(name: "bucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object BucketName
        {
            get => _bucketName;
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
                _bucketName = value;
            }
        }

        private object? _accessControl;

        /// <summary>Property accessControl: The access control list.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "accessControl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AccessControl
        {
            get => _accessControl;
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
                _accessControl = value;
            }
        }

        private object? _corsConfiguration;

        /// <summary>Property corsConfiguration: Rules that define cross-origin resource sharing of objects in this bucket.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "corsConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.CORSConfigurationProperty\"}]}}", isOptional: true)]
        public object? CorsConfiguration
        {
            get => _corsConfiguration;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.ICORSConfigurationProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.ICORSConfigurationProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _corsConfiguration = value;
            }
        }

        private object? _deletionForce;

        /// <summary>Property deletionForce: Whether force delete the relative objects in the bucket.</summary>
        /// <remarks>
        /// Default value is false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DeletionForce
        {
            get => _deletionForce;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case bool cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _deletionForce = value;
            }
        }

        private object? _enableOssHdfsService;

        /// <summary>Property enableOssHdfsService: Whether enable OSS-HDFS service.</summary>
        /// <remarks>
        /// <strong>Note</strong>: Once it's enabled, it can't be disabled again.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "enableOssHdfsService", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? EnableOssHdfsService
        {
            get => _enableOssHdfsService;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case bool cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _enableOssHdfsService = value;
            }
        }

        private object? _lifecycleConfiguration;

        /// <summary>Property lifecycleConfiguration: Rules that define how oss bucket manages objects during their lifetime.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "lifecycleConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.LifecycleConfigurationProperty\"}]}}", isOptional: true)]
        public object? LifecycleConfiguration
        {
            get => _lifecycleConfiguration;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.ILifecycleConfigurationProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.ILifecycleConfigurationProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _lifecycleConfiguration = value;
            }
        }

        private object? _loggingConfiguration;

        /// <summary>Property loggingConfiguration: Settings that defines where logs are stored.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "loggingConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.LoggingConfigurationProperty\"}]}}", isOptional: true)]
        public object? LoggingConfiguration
        {
            get => _loggingConfiguration;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.ILoggingConfigurationProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.ILoggingConfigurationProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _loggingConfiguration = value;
            }
        }

        private object? _policy;

        /// <summary>Property policy: Bucket policy.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "policy", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        public object? Policy
        {
            get => _policy;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case System.Collections.Generic.IDictionary<string, object> cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, System.Collections.Generic.IDictionary<string, object>; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _policy = value;
            }
        }

        private object? _redundancyType;

        /// <summary>Property redundancyType: Specifies the data disaster recovery type of the storage space.</summary>
        /// <remarks>
        /// The value range is as follows:
        /// LRS (default): Local redundant LRS stores your data redundantly on different storage devices in the same availability zone, and can support data loss and normal access even when two storage devices are damaged concurrently.
        /// ZRS: Intra-city redundant ZRS adopts a data redundancy storage mechanism in multiple availability zones (AZ), and stores user data redundantly in multiple availability zones in the same region. When an availability zone is unavailable, normal access to data can still be guaranteed.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "redundancyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? RedundancyType
        {
            get => _redundancyType;
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
                _redundancyType = value;
            }
        }

        private object? _refererConfiguration;

        /// <summary>Property refererConfiguration: undefined.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "refererConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.RefererConfigurationProperty\"}]}}", isOptional: true)]
        public object? RefererConfiguration
        {
            get => _refererConfiguration;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IRefererConfigurationProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IRefererConfigurationProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _refererConfiguration = value;
            }
        }

        private object? _resourceGroupId;

        /// <summary>Property resourceGroupId: The resource group id.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ResourceGroupId
        {
            get => _resourceGroupId;
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
                _resourceGroupId = value;
            }
        }

        private object? _serverSideEncryptionConfiguration;

        /// <summary>Property serverSideEncryptionConfiguration: Specifies the bucket used to store the server-side encryption rule.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "serverSideEncryptionConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.ServerSideEncryptionConfigurationProperty\"}]}}", isOptional: true)]
        public object? ServerSideEncryptionConfiguration
        {
            get => _serverSideEncryptionConfiguration;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IServerSideEncryptionConfigurationProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IServerSideEncryptionConfigurationProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _serverSideEncryptionConfiguration = value;
            }
        }

        private object? _storageClass;

        /// <summary>Property storageClass: Specifies the storage class of the bucket.</summary>
        /// <remarks>
        /// Default is "Standard".
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "storageClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? StorageClass
        {
            get => _storageClass;
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
                _storageClass = value;
            }
        }

        /// <summary>Property tags: Bucket tags in k-v pairs format.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}", isOptional: true)]
        public System.Collections.Generic.IDictionary<string, object>? Tags
        {
            get;
            set;
        }

        private object? _versioningConfiguration;

        /// <summary>Property versioningConfiguration: A state of versioning.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "versioningConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.VersioningConfigurationProperty\"}]}}", isOptional: true)]
        public object? VersioningConfiguration
        {
            get => _versioningConfiguration;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IVersioningConfigurationProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IVersioningConfigurationProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _versioningConfiguration = value;
            }
        }

        private object? _websiteConfiguration;

        /// <summary>Property websiteConfiguration: The properties of website config.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "websiteConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.WebsiteConfigurationProperty\"}]}}", isOptional: true)]
        public object? WebsiteConfiguration
        {
            get => _websiteConfiguration;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IWebsiteConfigurationProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IWebsiteConfigurationProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _websiteConfiguration = value;
            }
        }
    }
}
