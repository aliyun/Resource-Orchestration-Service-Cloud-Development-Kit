using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Configuration properties for DefaultStackSynthesizer.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-core.DefaultStackSynthesizerProps")]
    public class DefaultStackSynthesizerProps : AlibabaCloud.SDK.ROS.CDK.Core.IDefaultStackSynthesizerProps
    {
        /// <summary>bucketPrefix to use while storing OSS Assets.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - DefaultStackSynthesizer.DEFAULT_FILE_ASSET_PREFIX
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "bucketPrefix", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public string? BucketPrefix
        {
            get;
            set;
        }

        /// <summary>Name of the OSS bucket to hold file assets.</summary>
        /// <remarks>
        /// You must supply this if you have given a non-standard name to the staging bucket.
        ///
        /// The placeholders <c>${Qualifier}</c>, <c>${ALIYUN::AccountId}</c> and <c>${ALIYUN::Region}</c> will
        /// be replaced with the values of qualifier and the stack's account and region,
        /// respectively.
        ///
        /// <strong>Default</strong>: DefaultStackSynthesizer.DEFAULT_FILE_ASSETS_BUCKET_NAME
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "fileAssetsBucketName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public string? FileAssetsBucketName
        {
            get;
            set;
        }

        /// <summary>Qualifier to disambiguate multiple environments in the same account.</summary>
        /// <remarks>
        /// You can use this and leave the other naming properties empty if you have deployed
        /// the bootstrap environment with standard names but only differnet qualifiers.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "qualifier", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public string? Qualifier
        {
            get;
            set;
        }
    }
}
