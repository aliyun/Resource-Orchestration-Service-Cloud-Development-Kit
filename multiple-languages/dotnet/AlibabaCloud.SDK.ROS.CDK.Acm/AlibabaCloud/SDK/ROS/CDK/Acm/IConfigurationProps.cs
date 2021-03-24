using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Acm
{
    /// <summary>Properties for defining a `ALIYUN::ACM::Configuration`.</summary>
    [JsiiInterface(nativeType: typeof(IConfigurationProps), fullyQualifiedName: "@alicloud/ros-cdk-acm.ConfigurationProps")]
    public interface IConfigurationProps
    {
        /// <summary>Property content: The contents of the configuration.</summary>
        [JsiiProperty(name: "content", typeJson: "{\"primitive\":\"string\"}")]
        string Content
        {
            get;
        }

        /// <summary>Property dataId: The ID of the configuration.</summary>
        /// <remarks>
        /// Allowed characters are upper and lower case letters, numbers, decimal points (.), Colons (:), asterisks (*), underscores (_), and underscores (-). When the ID prefix is the following value, ACM will automatically use KMS service to encrypt this configuration:
        /// The prefix is cipher-: the KMS service is called to encrypt and decrypt the configuration. The size of the encrypted data does not exceed 4 KB, and the maximum does not exceed 6 KB. Special symbols such as and (&amp;) will decrypt errors and are not recommended.
        /// The prefix is cipher-kms-aes-128-: using KMS's envelope encryption and decryption method, the configuration content can exceed  6 KB, up to 100 KB. The plain text data of the configuration content will not be transmitted to the KMS system, which is more secure and recommended.
        /// </remarks>
        [JsiiProperty(name: "dataId", typeJson: "{\"primitive\":\"string\"}")]
        string DataId
        {
            get;
        }

        /// <summary>Property namespaceId: ID of namespace.</summary>
        [JsiiProperty(name: "namespaceId", typeJson: "{\"primitive\":\"string\"}")]
        string NamespaceId
        {
            get;
        }

        /// <summary>Property appName: Configuration application name.</summary>
        [JsiiProperty(name: "appName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AppName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property desc: Configuration description explains.</summary>
        [JsiiProperty(name: "desc", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Desc
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property group: Group.</summary>
        [JsiiProperty(name: "group", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Group
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Label configurations, such as the presence of a plurality of tags, separated by commas.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property type: Provisioning content format, optional values as follows: text, json, xml, yaml, text/html, properties.</summary>
        [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Type
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ACM::Configuration`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IConfigurationProps), fullyQualifiedName: "@alicloud/ros-cdk-acm.ConfigurationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Acm.IConfigurationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property content: The contents of the configuration.</summary>
            [JsiiProperty(name: "content", typeJson: "{\"primitive\":\"string\"}")]
            public string Content
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property dataId: The ID of the configuration.</summary>
            /// <remarks>
            /// Allowed characters are upper and lower case letters, numbers, decimal points (.), Colons (:), asterisks (*), underscores (_), and underscores (-). When the ID prefix is the following value, ACM will automatically use KMS service to encrypt this configuration:
            /// The prefix is cipher-: the KMS service is called to encrypt and decrypt the configuration. The size of the encrypted data does not exceed 4 KB, and the maximum does not exceed 6 KB. Special symbols such as and (&amp;) will decrypt errors and are not recommended.
            /// The prefix is cipher-kms-aes-128-: using KMS's envelope encryption and decryption method, the configuration content can exceed  6 KB, up to 100 KB. The plain text data of the configuration content will not be transmitted to the KMS system, which is more secure and recommended.
            /// </remarks>
            [JsiiProperty(name: "dataId", typeJson: "{\"primitive\":\"string\"}")]
            public string DataId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property namespaceId: ID of namespace.</summary>
            [JsiiProperty(name: "namespaceId", typeJson: "{\"primitive\":\"string\"}")]
            public string NamespaceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property appName: Configuration application name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "appName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AppName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property desc: Configuration description explains.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "desc", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Desc
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property group: Group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "group", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Group
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property tags: Label configurations, such as the presence of a plurality of tags, separated by commas.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Tags
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property type: Provisioning content format, optional values as follows: text, json, xml, yaml, text/html, properties.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Type
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
