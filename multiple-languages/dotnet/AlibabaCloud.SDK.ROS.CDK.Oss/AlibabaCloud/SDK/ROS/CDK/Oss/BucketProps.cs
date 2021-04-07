using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oss
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::OSS::Bucket`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-oss.BucketProps")]
    public class BucketProps : AlibabaCloud.SDK.ROS.CDK.Oss.IBucketProps
    {
        /// <summary>Property bucketName: bucket name.</summary>
        [JsiiProperty(name: "bucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object BucketName
        {
            get;
            set;
        }

        /// <summary>Property accessControl: The access control list.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "accessControl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AccessControl
        {
            get;
            set;
        }

        /// <summary>Property corsConfiguration: Rules that define cross-origin resource sharing of objects in this bucket.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "corsConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.CORSConfigurationProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? CorsConfiguration
        {
            get;
            set;
        }

        /// <summary>Property deletionForce: Whether force delete the relative objects in the bucket.</summary>
        /// <remarks>
        /// Default value is false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? DeletionForce
        {
            get;
            set;
        }

        /// <summary>Property lifecycleConfiguration: Rules that define how oss bucket manages objects during their lifetime.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "lifecycleConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.LifecycleConfigurationProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? LifecycleConfiguration
        {
            get;
            set;
        }

        /// <summary>Property loggingConfiguration: Settings that defines where logs are stored.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "loggingConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.LoggingConfigurationProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? LoggingConfiguration
        {
            get;
            set;
        }

        /// <summary>Property policy: Bucket policy.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "policy", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true, isOverride: true)]
        public object? Policy
        {
            get;
            set;
        }

        /// <summary>Property refererConfiguration: undefined.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "refererConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.RefererConfigurationProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? RefererConfiguration
        {
            get;
            set;
        }

        /// <summary>Property serverSideEncryptionConfiguration: Specifies the bucket used to store the server-side encryption rule.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "serverSideEncryptionConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.ServerSideEncryptionConfigurationProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? ServerSideEncryptionConfiguration
        {
            get;
            set;
        }

        /// <summary>Property storageClass: Specifies the storage class of the bucket.</summary>
        /// <remarks>
        /// Default is "Standard".
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "storageClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? StorageClass
        {
            get;
            set;
        }

        /// <summary>Property tags: Bucket tags in k-v pairs format.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}", isOptional: true, isOverride: true)]
        public System.Collections.Generic.IDictionary<string, object>? Tags
        {
            get;
            set;
        }

        /// <summary>Property websiteConfiguration: The properties of website config.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "websiteConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.WebsiteConfigurationProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? WebsiteConfiguration
        {
            get;
            set;
        }
    }
}
