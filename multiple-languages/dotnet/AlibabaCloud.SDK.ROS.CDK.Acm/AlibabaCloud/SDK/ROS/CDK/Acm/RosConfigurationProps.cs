using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Acm
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ACM::Configuration`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-acm.RosConfigurationProps")]
    public class RosConfigurationProps : AlibabaCloud.SDK.ROS.CDK.Acm.IRosConfigurationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: content: The contents of the configuration
        /// </remarks>
        [JsiiProperty(name: "content", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Content
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dataId: The ID of the configuration. Allowed characters are upper and lower case letters, numbers, decimal points (.), Colons (:), asterisks (*), underscores (_), and underscores (-). When the ID prefix is the following value, ACM will automatically use KMS service to encrypt this configuration:
        /// The prefix is cipher-: the KMS service is called to encrypt and decrypt the configuration. The size of the encrypted data does not exceed 4 KB, and the maximum does not exceed 6 KB. Special symbols such as and (&amp;) will decrypt errors and are not recommended.
        /// The prefix is cipher-kms-aes-128-: using KMS's envelope encryption and decryption method, the configuration content can exceed  6 KB, up to 100 KB. The plain text data of the configuration content will not be transmitted to the KMS system, which is more secure and recommended.
        /// </remarks>
        [JsiiProperty(name: "dataId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DataId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: namespaceId: ID of namespace
        /// </remarks>
        [JsiiProperty(name: "namespaceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string NamespaceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: appName: Configuration application name
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "appName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AppName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: desc: Configuration description explains
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "desc", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Desc
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: group: Group
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "group", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Group
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Label configurations, such as the presence of a plurality of tags, separated by commas
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Tags
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: type: Provisioning content format, optional values as follows:
        /// text, json, xml, yaml, text/html, properties
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Type
        {
            get;
            set;
        }
    }
}
