using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Acm
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ACM::Configuration`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-acm.ConfigurationProps")]
    public class ConfigurationProps : AlibabaCloud.SDK.ROS.CDK.Acm.IConfigurationProps
    {
        /// <summary>Property content: The contents of the configuration.</summary>
        [JsiiProperty(name: "content", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Content
        {
            get;
            set;
        }

        /// <summary>Property dataId: The ID of the configuration.</summary>
        /// <remarks>
        /// Allowed characters are upper and lower case letters, numbers, decimal points (.), Colons (:), asterisks (*), underscores (_), and underscores (-). When the ID prefix is the following value, ACM will automatically use KMS service to encrypt this configuration:
        /// The prefix is cipher-: the KMS service is called to encrypt and decrypt the configuration. The size of the encrypted data does not exceed 4 KB, and the maximum does not exceed 6 KB. Special symbols such as and (&amp;) will decrypt errors and are not recommended.
        /// The prefix is cipher-kms-aes-128-: using KMS's envelope encryption and decryption method, the configuration content can exceed  6 KB, up to 100 KB. The plain text data of the configuration content will not be transmitted to the KMS system, which is more secure and recommended.
        /// </remarks>
        [JsiiProperty(name: "dataId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DataId
        {
            get;
            set;
        }

        /// <summary>Property namespaceId: ID of namespace.</summary>
        [JsiiProperty(name: "namespaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object NamespaceId
        {
            get;
            set;
        }

        /// <summary>Property appName: Configuration application name.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "appName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AppName
        {
            get;
            set;
        }

        /// <summary>Property desc: Configuration description explains.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "desc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Desc
        {
            get;
            set;
        }

        /// <summary>Property group: Group.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "group", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Group
        {
            get;
            set;
        }

        /// <summary>Property tags: Label configurations, such as the presence of a plurality of tags, separated by commas.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public string? Tags
        {
            get;
            set;
        }

        /// <summary>Property type: Provisioning content format, optional values as follows: text, json, xml, yaml, text/html, properties.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Type
        {
            get;
            set;
        }
    }
}
