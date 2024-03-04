using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudsso
{
    /// <summary>Properties for defining a `RosSAMLIdentityProvider`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-samlidentityprovider
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosSAMLIdentityProviderProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudsso.RosSAMLIdentityProviderProps")]
    public interface IRosSAMLIdentityProviderProps
    {
        /// <remarks>
        /// <strong>Property</strong>: directoryId: The ID of the directory.
        /// </remarks>
        [JsiiProperty(name: "directoryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DirectoryId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: encodedMetadataDocument: The metadata file of the IdP. The value of this parameter is Base64-encoded.
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

        /// <remarks>
        /// <strong>Property</strong>: entityId: The entity ID of the IdP.
        /// </remarks>
        [JsiiProperty(name: "entityId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EntityId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: loginUrl: The logon URL of the IdP.
        /// </remarks>
        [JsiiProperty(name: "loginUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LoginUrl
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: ssoStatus: The status of SSO logon. Valid values:
        /// - Enabled
        /// - Disabled (default)
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

        /// <remarks>
        /// <strong>Property</strong>: wantRequestSigned: Specifies whether CloudSSO needs to sign SAML requests. The requests are sent when users log on to the CloudSSO user portal to initiate SAML-based SSO. Valid values:
        /// - true: yes
        /// - false: no (default)
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

        /// <remarks>
        /// <strong>Property</strong>: x509Certificate: The X.509 certificate n the PEM format. If you specify this parameter, all existing certificates are replaced.
        /// </remarks>
        [JsiiProperty(name: "x509Certificate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? X509Certificate
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosSAMLIdentityProvider`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-samlidentityprovider
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosSAMLIdentityProviderProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudsso.RosSAMLIdentityProviderProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudsso.IRosSAMLIdentityProviderProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: directoryId: The ID of the directory.
            /// </remarks>
            [JsiiProperty(name: "directoryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DirectoryId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: encodedMetadataDocument: The metadata file of the IdP. The value of this parameter is Base64-encoded.
            /// The file is provided by the IdP that supports SAML 2.0.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "encodedMetadataDocument", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EncodedMetadataDocument
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: entityId: The entity ID of the IdP.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "entityId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EntityId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: loginUrl: The logon URL of the IdP.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "loginUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LoginUrl
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ssoStatus: The status of SSO logon. Valid values:
            /// - Enabled
            /// - Disabled (default)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ssoStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SsoStatus
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: wantRequestSigned: Specifies whether CloudSSO needs to sign SAML requests. The requests are sent when users log on to the CloudSSO user portal to initiate SAML-based SSO. Valid values:
            /// - true: yes
            /// - false: no (default)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "wantRequestSigned", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? WantRequestSigned
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: x509Certificate: The X.509 certificate n the PEM format. If you specify this parameter, all existing certificates are replaced.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "x509Certificate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? X509Certificate
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
