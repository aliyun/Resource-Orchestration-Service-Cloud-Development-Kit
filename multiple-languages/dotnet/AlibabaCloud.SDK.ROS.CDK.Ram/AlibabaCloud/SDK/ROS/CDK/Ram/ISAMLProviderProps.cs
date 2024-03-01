using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    /// <summary>Properties for defining a `SAMLProvider`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-samlprovider
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISAMLProviderProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.SAMLProviderProps")]
    public interface ISAMLProviderProps
    {
        /// <summary>Property samlProviderName: IdP Name.</summary>
        /// <remarks>
        /// The IdP name can contain a maximum of 128 characters and only letters, numbers, and the following special characters are accepted: hyphens (-), periods (.), and underscores (_). It cannot start or end with a special character.
        /// </remarks>
        [JsiiProperty(name: "samlProviderName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SamlProviderName
        {
            get;
        }

        /// <summary>Property description: The description can contain a maximum of 256 characters.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property encodedSamlMetadataDocument: SAML metadata document.Base64 encoded. Provided by an identity provider that supports the SAML2.0 protocol. Only one of the three properties SAMLMetadataDocument, SAMLMetadataDocumentURL, EncodedSAMLMetadataDocument can be set.</summary>
        [JsiiProperty(name: "encodedSamlMetadataDocument", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EncodedSamlMetadataDocument
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property samlMetadataDocument: SAML metadata document.</summary>
        /// <remarks>
        /// The content must be 1 to 102,400 bytes in length.
        /// Only one of the three properties SAMLMetadataDocument, SAMLMetadataDocumentURL, EncodedSAMLMetadataDocument can be set.
        /// </remarks>
        [JsiiProperty(name: "samlMetadataDocument", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SamlMetadataDocument
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property samlMetadataDocumentUrl: The URL for the file that contains the SAML metadata document.</summary>
        /// <remarks>
        /// The URL must point to a document located in an HTTP or HTTPS web server or an Alibaba Cloud OSS bucket. Examples: oss://ros/document/demo and oss://ros/document/demo?RegionId=cn-hangzhou. The URL can be up to 1,024 bytes in length.
        /// Only one of the three properties SAMLMetadataDocument, SAMLMetadataDocumentURL, EncodedSAMLMetadataDocument can be set.
        /// </remarks>
        [JsiiProperty(name: "samlMetadataDocumentUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SamlMetadataDocumentUrl
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `SAMLProvider`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-samlprovider
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISAMLProviderProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.SAMLProviderProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.ISAMLProviderProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property samlProviderName: IdP Name.</summary>
            /// <remarks>
            /// The IdP name can contain a maximum of 128 characters and only letters, numbers, and the following special characters are accepted: hyphens (-), periods (.), and underscores (_). It cannot start or end with a special character.
            /// </remarks>
            [JsiiProperty(name: "samlProviderName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SamlProviderName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description can contain a maximum of 256 characters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property encodedSamlMetadataDocument: SAML metadata document.Base64 encoded. Provided by an identity provider that supports the SAML2.0 protocol. Only one of the three properties SAMLMetadataDocument, SAMLMetadataDocumentURL, EncodedSAMLMetadataDocument can be set.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "encodedSamlMetadataDocument", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EncodedSamlMetadataDocument
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property samlMetadataDocument: SAML metadata document.</summary>
            /// <remarks>
            /// The content must be 1 to 102,400 bytes in length.
            /// Only one of the three properties SAMLMetadataDocument, SAMLMetadataDocumentURL, EncodedSAMLMetadataDocument can be set.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "samlMetadataDocument", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SamlMetadataDocument
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property samlMetadataDocumentUrl: The URL for the file that contains the SAML metadata document.</summary>
            /// <remarks>
            /// The URL must point to a document located in an HTTP or HTTPS web server or an Alibaba Cloud OSS bucket. Examples: oss://ros/document/demo and oss://ros/document/demo?RegionId=cn-hangzhou. The URL can be up to 1,024 bytes in length.
            /// Only one of the three properties SAMLMetadataDocument, SAMLMetadataDocumentURL, EncodedSAMLMetadataDocument can be set.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "samlMetadataDocumentUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SamlMetadataDocumentUrl
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
