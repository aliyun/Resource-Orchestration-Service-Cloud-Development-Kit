using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    /// <summary>Properties for defining a `OIDCProvider`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-oidcprovider
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IOIDCProviderProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.OIDCProviderProps")]
    public interface IOIDCProviderProps
    {
        /// <summary>Property fingerprints: The list of the fingerprints, max length is 5.</summary>
        [JsiiProperty(name: "fingerprints", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object Fingerprints
        {
            get;
        }

        /// <summary>Property issuerUrl: The URL of the issuer, which is provided by the external IdP.</summary>
        /// <remarks>
        /// The URL of the issuer must be unique within an Alibaba Cloud account.
        /// The URL of the issuer must start with https and be in the valid URL format. The URL cannot contain query parameters that follow a question mark (?) or logon information that is identified by at signs (@). The URL cannot be a fragment URL that contains number signs (#).
        /// The URL can be up to 255 characters in length.
        /// </remarks>
        [JsiiProperty(name: "issuerUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object IssuerUrl
        {
            get;
        }

        /// <summary>Property oidcProviderName: The name of the OIDC IdP.</summary>
        /// <remarks>
        /// The name can contain letters, digits, and special characters and cannot start or end with the special characters. The special characters are periods, (.), hyphens (-), and underscores (_).``
        /// The name can be up to 128 characters in length.
        /// </remarks>
        [JsiiProperty(name: "oidcProviderName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object OidcProviderName
        {
            get;
        }

        /// <summary>Property clientIds: The list of the client IDs, max length is 20.</summary>
        [JsiiProperty(name: "clientIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ClientIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the OIDC IdP.</summary>
        /// <remarks>
        /// The description can be up to 256 characters in length.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property issuanceLimitTime: The earliest time when an external IdP can issue an ID token.</summary>
        /// <remarks>
        /// If the value of the iat field in the ID token is later than the current time, the request is rejected. Unit: hours. Valid values: 1 to 168.
        /// </remarks>
        [JsiiProperty(name: "issuanceLimitTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IssuanceLimitTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `OIDCProvider`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-oidcprovider
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IOIDCProviderProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.OIDCProviderProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.IOIDCProviderProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property fingerprints: The list of the fingerprints, max length is 5.</summary>
            [JsiiProperty(name: "fingerprints", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object Fingerprints
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property issuerUrl: The URL of the issuer, which is provided by the external IdP.</summary>
            /// <remarks>
            /// The URL of the issuer must be unique within an Alibaba Cloud account.
            /// The URL of the issuer must start with https and be in the valid URL format. The URL cannot contain query parameters that follow a question mark (?) or logon information that is identified by at signs (@). The URL cannot be a fragment URL that contains number signs (#).
            /// The URL can be up to 255 characters in length.
            /// </remarks>
            [JsiiProperty(name: "issuerUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object IssuerUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property oidcProviderName: The name of the OIDC IdP.</summary>
            /// <remarks>
            /// The name can contain letters, digits, and special characters and cannot start or end with the special characters. The special characters are periods, (.), hyphens (-), and underscores (_).``
            /// The name can be up to 128 characters in length.
            /// </remarks>
            [JsiiProperty(name: "oidcProviderName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object OidcProviderName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property clientIds: The list of the client IDs, max length is 20.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "clientIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ClientIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the OIDC IdP.</summary>
            /// <remarks>
            /// The description can be up to 256 characters in length.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property issuanceLimitTime: The earliest time when an external IdP can issue an ID token.</summary>
            /// <remarks>
            /// If the value of the iat field in the ID token is later than the current time, the request is rejected. Unit: hours. Valid values: 1 to 168.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "issuanceLimitTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IssuanceLimitTime
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
