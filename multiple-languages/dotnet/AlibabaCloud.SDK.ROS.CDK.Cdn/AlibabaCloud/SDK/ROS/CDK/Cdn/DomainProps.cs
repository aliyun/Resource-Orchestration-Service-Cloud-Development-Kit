using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cdn
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CDN::Domain`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cdn.DomainProps")]
    public class DomainProps : AlibabaCloud.SDK.ROS.CDK.Cdn.IDomainProps
    {
        /// <summary>Property cdnType: The business type.</summary>
        /// <remarks>
        /// Valid values: web, download, video, livestream, and httpsdelivery. web: acceleration of images and small files download. download: acceleration of large file downloads. video: live streaming acceleration. httpsdelivery: SSL acceleration for HTTPS.
        /// </remarks>
        [JsiiProperty(name: "cdnType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object CdnType
        {
            get;
            set;
        }

        /// <summary>Property domainName: The CDN domain name.</summary>
        /// <remarks>
        /// Wildcard domain names that start with periods (.) are supported. For example, .a.com.
        /// </remarks>
        [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DomainName
        {
            get;
            set;
        }

        /// <summary>Property checkUrl: The validation of the origin.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "checkUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? CheckUrl
        {
            get;
            set;
        }

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        /// <remarks>
        /// If this is left blank, the system automatically fills in the ID of the default resource group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ResourceGroupId
        {
            get;
            set;
        }

        /// <summary>Property scope: Valid values: domestic, overseas, and global.</summary>
        /// <remarks>
        /// Default value: domestic. The setting is supported for users outside mainland China, users in mainland China of level 3 or above.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "scope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Scope
        {
            get;
            set;
        }

        /// <summary>Property sources: The list of origin URLs.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "sources", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Sources
        {
            get;
            set;
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-cdn.RosDomain.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Cdn.RosDomain.ITagsProperty[]? Tags
        {
            get;
            set;
        }

        /// <summary>Property topLevelDomain: The top-level domain, which can only be configured by users on the whitelist.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "topLevelDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? TopLevelDomain
        {
            get;
            set;
        }
    }
}
