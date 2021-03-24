using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oss
{
    /// <summary>Properties for defining a `ALIYUN::OSS::Bucket`.</summary>
    [JsiiInterface(nativeType: typeof(IBucketProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.BucketProps")]
    public interface IBucketProps
    {
        /// <summary>Property bucketName: bucket name.</summary>
        [JsiiProperty(name: "bucketName", typeJson: "{\"primitive\":\"string\"}")]
        string BucketName
        {
            get;
        }

        /// <summary>Property accessControl: The access control list.</summary>
        [JsiiProperty(name: "accessControl", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AccessControl
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property corsConfiguration: Rules that define cross-origin resource sharing of objects in this bucket.</summary>
        [JsiiProperty(name: "corsConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.CORSConfigurationProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
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
        [JsiiProperty(name: "storageClass", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? StorageClass
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Bucket tags in k-v pairs format.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, object>[]? Tags
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

        /// <summary>Properties for defining a `ALIYUN::OSS::Bucket`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IBucketProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.BucketProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.IBucketProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property bucketName: bucket name.</summary>
            [JsiiProperty(name: "bucketName", typeJson: "{\"primitive\":\"string\"}")]
            public string BucketName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property accessControl: The access control list.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "accessControl", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AccessControl
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property corsConfiguration: Rules that define cross-origin resource sharing of objects in this bucket.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "corsConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.CORSConfigurationProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
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

            /// <summary>Property refererConfiguration: undefined.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "refererConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.RefererConfigurationProperty\"}]}}", isOptional: true)]
            public object? RefererConfiguration
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
            [JsiiProperty(name: "storageClass", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? StorageClass
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property tags: Bucket tags in k-v pairs format.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, object>[]? Tags
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>[]?>();
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
