using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cdn
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CDN::Domain`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cdn.RosDomainProps")]
    public class RosDomainProps : AlibabaCloud.SDK.ROS.CDK.Cdn.IRosDomainProps
    {
        /// <remarks>
        /// <strong>Property</strong>: cdnType: The business type. Valid values: web, download, video, livestream, and httpsdelivery. web: acceleration of images and small files download. download: acceleration of large file downloads. video: live streaming acceleration. httpsdelivery: SSL acceleration for HTTPS.
        /// </remarks>
        [JsiiProperty(name: "cdnType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string CdnType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: domainName: The CDN domain name. Wildcard domain names that start with periods (.) are supported. For example, .a.com.
        /// </remarks>
        [JsiiProperty(name: "domainName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DomainName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: checkUrl: The validation of the origin.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "checkUrl", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? CheckUrl
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group. If this is left blank, the system automatically fills in the ID of the default resource group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ResourceGroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: scope: Valid values: domestic, overseas, and global. Default value: domestic. The setting is supported for users outside mainland China, users in mainland China of level 3 or above.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "scope", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Scope
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: sources: The list of origin URLs.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sources", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Sources
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public AlibabaCloud.SDK.ROS.CDK.Core.IRosTag[]? Tags
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: topLevelDomain: The top-level domain, which can only be configured by users on the whitelist.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "topLevelDomain", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? TopLevelDomain
        {
            get;
            set;
        }
    }
}
