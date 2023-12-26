using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oss
{
    /// <summary>Properties for defining a `Bucket`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucket
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IBucketProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.BucketProps")]
    public interface IBucketProps
    {
        /// <summary>Property bucketName: bucket name.</summary>
        [JsiiProperty(name: "bucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BucketName
        {
            get;
        }

        /// <summary>Property accessControl: The access control list.</summary>
        [JsiiProperty(name: "accessControl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccessControl
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property corsConfiguration: Rules that define cross-origin resource sharing of objects in this bucket.</summary>
        [JsiiProperty(name: "corsConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.CORSConfigurationProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CorsConfiguration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property deletionForce: Whether force delete the relative objects in the bucket.</summary>
        /// <remarks>
        /// Default value is false.
        /// </remarks>
        [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeletionForce
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableOssHdfsService: Whether enable OSS-HDFS service.</summary>
        /// <remarks>
        /// <strong>Note</strong>: Once it's enabled, it can't be disabled again.
        /// </remarks>
        [JsiiProperty(name: "enableOssHdfsService", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableOssHdfsService
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property lifecycleConfiguration: Rules that define how oss bucket manages objects during their lifetime.</summary>
        [JsiiProperty(name: "lifecycleConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.LifecycleConfigurationProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LifecycleConfiguration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property loggingConfiguration: Settings that defines where logs are stored.</summary>
        [JsiiProperty(name: "loggingConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.LoggingConfigurationProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LoggingConfiguration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property policy: Bucket policy.</summary>
        [JsiiProperty(name: "policy", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Policy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property redundancyType: Specifies the data disaster recovery type of the storage space.</summary>
        /// <remarks>
        /// The value range is as follows:
        /// LRS (default): Local redundant LRS stores your data redundantly on different storage devices in the same availability zone, and can support data loss and normal access even when two storage devices are damaged concurrently.
        /// ZRS: Intra-city redundant ZRS adopts a data redundancy storage mechanism in multiple availability zones (AZ), and stores user data redundantly in multiple availability zones in the same region. When an availability zone is unavailable, normal access to data can still be guaranteed.
        /// </remarks>
        [JsiiProperty(name: "redundancyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RedundancyType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property refererConfiguration: undefined.</summary>
        [JsiiProperty(name: "refererConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.RefererConfigurationProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RefererConfiguration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The resource group id.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property serverSideEncryptionConfiguration: Specifies the bucket used to store the server-side encryption rule.</summary>
        [JsiiProperty(name: "serverSideEncryptionConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.ServerSideEncryptionConfigurationProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServerSideEncryptionConfiguration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property storageClass: Specifies the storage class of the bucket.</summary>
        /// <remarks>
        /// Default is "Standard".
        /// </remarks>
        [JsiiProperty(name: "storageClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StorageClass
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Bucket tags in k-v pairs format.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, object>? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property versioningConfiguration: A state of versioning.</summary>
        [JsiiProperty(name: "versioningConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.VersioningConfigurationProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VersioningConfiguration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property websiteConfiguration: The properties of website config.</summary>
        [JsiiProperty(name: "websiteConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.WebsiteConfigurationProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WebsiteConfiguration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Bucket`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucket
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IBucketProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.BucketProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.IBucketProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property bucketName: bucket name.</summary>
            [JsiiProperty(name: "bucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BucketName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property accessControl: The access control list.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "accessControl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccessControl
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property corsConfiguration: Rules that define cross-origin resource sharing of objects in this bucket.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "corsConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.CORSConfigurationProperty\"}]}}", isOptional: true)]
            public object? CorsConfiguration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property deletionForce: Whether force delete the relative objects in the bucket.</summary>
            /// <remarks>
            /// Default value is false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeletionForce
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableOssHdfsService: Whether enable OSS-HDFS service.</summary>
            /// <remarks>
            /// <strong>Note</strong>: Once it's enabled, it can't be disabled again.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableOssHdfsService", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableOssHdfsService
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property lifecycleConfiguration: Rules that define how oss bucket manages objects during their lifetime.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "lifecycleConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.LifecycleConfigurationProperty\"}]}}", isOptional: true)]
            public object? LifecycleConfiguration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property loggingConfiguration: Settings that defines where logs are stored.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "loggingConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.LoggingConfigurationProperty\"}]}}", isOptional: true)]
            public object? LoggingConfiguration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property policy: Bucket policy.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "policy", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Policy
            {
                get => GetInstanceProperty<object?>();
            }

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
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property refererConfiguration: undefined.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "refererConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.RefererConfigurationProperty\"}]}}", isOptional: true)]
            public object? RefererConfiguration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The resource group id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property serverSideEncryptionConfiguration: Specifies the bucket used to store the server-side encryption rule.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "serverSideEncryptionConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.ServerSideEncryptionConfigurationProperty\"}]}}", isOptional: true)]
            public object? ServerSideEncryptionConfiguration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property storageClass: Specifies the storage class of the bucket.</summary>
            /// <remarks>
            /// Default is "Standard".
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "storageClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StorageClass
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Bucket tags in k-v pairs format.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, object>? Tags
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>?>();
            }

            /// <summary>Property versioningConfiguration: A state of versioning.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "versioningConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.VersioningConfigurationProperty\"}]}}", isOptional: true)]
            public object? VersioningConfiguration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property websiteConfiguration: The properties of website config.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "websiteConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.WebsiteConfigurationProperty\"}]}}", isOptional: true)]
            public object? WebsiteConfiguration
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
