using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudsso
{
    /// <summary>Properties for defining a `SAMLIdentityProvider`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-samlidentityprovider
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISAMLIdentityProviderProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudsso.SAMLIdentityProviderProps")]
    public interface ISAMLIdentityProviderProps
    {
        /// <summary>Property directoryId: The ID of the directory.</summary>
        [JsiiProperty(name: "directoryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DirectoryId
        {
            get;
        }

        /// <summary>Property encodedMetadataDocument: The metadata file of the IdP.</summary>
        /// <remarks>
        /// The value of this parameter is Base64-encoded.
        /// The file is provided by the IdP that supports SAML 2.0.
        /// </remarks>
        [JsiiProperty(name: "encodedMetadataDocument", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EncodedMetadataDocument
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property entityId: The entity ID of the IdP.</summary>
        [JsiiProperty(name: "entityId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EntityId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property loginUrl: The logon URL of the IdP.</summary>
        [JsiiProperty(name: "loginUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LoginUrl
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ssoStatus: The status of SSO logon.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Enabled</description>
        /// <description>Disabled (default)</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "ssoStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SsoStatus
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property wantRequestSigned: Specifies whether CloudSSO needs to sign SAML requests.</summary>
        /// <remarks>
        /// The requests are sent when users log on to the CloudSSO user portal to initiate SAML-based SSO. Valid values:
        ///
        /// <list type="bullet">
        /// <description>true: yes</description>
        /// <description>false: no (default)</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "wantRequestSigned", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WantRequestSigned
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property x509Certificate: The X.509 certificate n the PEM format. If you specify this parameter, all existing certificates are replaced.</summary>
        [JsiiProperty(name: "x509Certificate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? X509Certificate
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `SAMLIdentityProvider`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-samlidentityprovider
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISAMLIdentityProviderProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudsso.SAMLIdentityProviderProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudsso.ISAMLIdentityProviderProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property directoryId: The ID of the directory.</summary>
            [JsiiProperty(name: "directoryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DirectoryId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property encodedMetadataDocument: The metadata file of the IdP.</summary>
            /// <remarks>
            /// The value of this parameter is Base64-encoded.
            /// The file is provided by the IdP that supports SAML 2.0.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "encodedMetadataDocument", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EncodedMetadataDocument
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property entityId: The entity ID of the IdP.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "entityId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EntityId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property loginUrl: The logon URL of the IdP.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "loginUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LoginUrl
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ssoStatus: The status of SSO logon.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>Enabled</description>
            /// <description>Disabled (default)</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ssoStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SsoStatus
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property wantRequestSigned: Specifies whether CloudSSO needs to sign SAML requests.</summary>
            /// <remarks>
            /// The requests are sent when users log on to the CloudSSO user portal to initiate SAML-based SSO. Valid values:
            ///
            /// <list type="bullet">
            /// <description>true: yes</description>
            /// <description>false: no (default)</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "wantRequestSigned", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? WantRequestSigned
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property x509Certificate: The X.509 certificate n the PEM format. If you specify this parameter, all existing certificates are replaced.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "x509Certificate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? X509Certificate
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
