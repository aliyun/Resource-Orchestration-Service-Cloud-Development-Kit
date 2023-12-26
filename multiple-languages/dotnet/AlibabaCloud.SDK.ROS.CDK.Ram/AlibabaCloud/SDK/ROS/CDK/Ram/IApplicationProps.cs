using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    /// <summary>Properties for defining a `Application`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-application
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IApplicationProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.ApplicationProps")]
    public interface IApplicationProps
    {
        /// <summary>Property appName: The name of the application.</summary>
        /// <remarks>
        /// The name can be up to 64 characters in length. The name can contain letters, digits, periods (.), underscores (_), and hyphens (-).
        /// </remarks>
        [JsiiProperty(name: "appName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AppName
        {
            get;
        }

        /// <summary>Property appType: The type of the application.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>WebApp</strong>: a web application that interacts with a browser.</description>
        /// <description><strong>NativeApp</strong>: a native application that runs on an operating system, such as a desktop operating system or a mobile operating system.</description>
        /// <description><strong>ServerApp</strong>: an application that accesses Alibaba Cloud services without the need of manual user logon. User provisioning is automated based on the System for Cross-Domain Identity Management (SCIM) protocol.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "appType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AppType
        {
            get;
        }

        /// <summary>Property displayName: The display name of the application.</summary>
        /// <remarks>
        /// The name can be up to 24 characters in length.
        /// </remarks>
        [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DisplayName
        {
            get;
        }

        /// <summary>Property accessTokenValidity: The validity period of the access token.</summary>
        /// <remarks>
        /// Valid values: 900 to 10800. Unit: seconds.
        /// Default value: 3600.
        /// </remarks>
        [JsiiProperty(name: "accessTokenValidity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccessTokenValidity
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property isMultiTenant: Indicates whether the application can be installed by using other Alibaba Cloud accounts.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>true</strong>: If you do not set this parameter for applications of the NativeApp and ServerApp types, true is used.</description>
        /// <description><strong>false</strong>: If you do not set this parameter for applications of the WebApp type, false is used.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "isMultiTenant", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IsMultiTenant
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property predefinedScopes: List of the scopes of application permissions.</summary>
        [JsiiProperty(name: "predefinedScopes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PredefinedScopes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property redirectUris: List of the callback URLs.</summary>
        [JsiiProperty(name: "redirectUris", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RedirectUris
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property refreshTokenValidity: The validity period of the refreshed token.</summary>
        /// <remarks>
        /// Valid values: 7200 to 31536000. Unit: seconds.
        /// Default value:
        ///
        /// <list type="bullet">
        /// <description>For applications of the WebApp and ServerApp types, if this parameter is left empty, the value 2592000 is used. The value 2592000 indicates that the validity period of the refreshed token is 30 days.</description>
        /// <description>For applications of the NativeApp type, if this parameter is left empty, the value 7776000 is used. The value 7776000 indicates that the validity period of the refreshed token is 90 days.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "refreshTokenValidity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RefreshTokenValidity
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property requiredScopes: Required scope of application permissions.</summary>
        /// <remarks>
        /// You can set one or more of the scopes set in the <strong>PredefinedScopes</strong> to be required, so that when a user authorizes the application, the required scopes are selected by default and cannot be canceled.
        /// <strong>Notes</strong>: If you set a <strong>RequiredScopes</strong> entry that is not within the scope of <strong>PredefinedScopes</strong>, the required range will not take effect.
        /// </remarks>
        [JsiiProperty(name: "requiredScopes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RequiredScopes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property secretRequired: Indicates whether a secret is required.</summary>
        /// <remarks>
        /// Valid values: <strong>true</strong> and <strong>false</strong>.
        /// <strong>Note</strong>:
        ///
        /// <list type="bullet">
        /// <description>For applications of the WebApp and ServerApp types, this parameter is automatically set to <strong>true</strong> and cannot be changed.</description>
        /// <description>For applications of the NativeApp type, this parameter can be set to true or false. If you do not set this parameter, false is used. Applications of the NativeApp type run in untrusted environments and the secrets of these applications are not protected. Therefore, we recommend that you do not set this parameter to true unless otherwise specified.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "secretRequired", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecretRequired
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Application`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-application
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IApplicationProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.ApplicationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.IApplicationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property appName: The name of the application.</summary>
            /// <remarks>
            /// The name can be up to 64 characters in length. The name can contain letters, digits, periods (.), underscores (_), and hyphens (-).
            /// </remarks>
            [JsiiProperty(name: "appName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AppName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property appType: The type of the application.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>WebApp</strong>: a web application that interacts with a browser.</description>
            /// <description><strong>NativeApp</strong>: a native application that runs on an operating system, such as a desktop operating system or a mobile operating system.</description>
            /// <description><strong>ServerApp</strong>: an application that accesses Alibaba Cloud services without the need of manual user logon. User provisioning is automated based on the System for Cross-Domain Identity Management (SCIM) protocol.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "appType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AppType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property displayName: The display name of the application.</summary>
            /// <remarks>
            /// The name can be up to 24 characters in length.
            /// </remarks>
            [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DisplayName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property accessTokenValidity: The validity period of the access token.</summary>
            /// <remarks>
            /// Valid values: 900 to 10800. Unit: seconds.
            /// Default value: 3600.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accessTokenValidity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccessTokenValidity
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property isMultiTenant: Indicates whether the application can be installed by using other Alibaba Cloud accounts.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>true</strong>: If you do not set this parameter for applications of the NativeApp and ServerApp types, true is used.</description>
            /// <description><strong>false</strong>: If you do not set this parameter for applications of the WebApp type, false is used.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "isMultiTenant", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IsMultiTenant
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property predefinedScopes: List of the scopes of application permissions.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "predefinedScopes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? PredefinedScopes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property redirectUris: List of the callback URLs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "redirectUris", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? RedirectUris
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property refreshTokenValidity: The validity period of the refreshed token.</summary>
            /// <remarks>
            /// Valid values: 7200 to 31536000. Unit: seconds.
            /// Default value:
            ///
            /// <list type="bullet">
            /// <description>For applications of the WebApp and ServerApp types, if this parameter is left empty, the value 2592000 is used. The value 2592000 indicates that the validity period of the refreshed token is 30 days.</description>
            /// <description>For applications of the NativeApp type, if this parameter is left empty, the value 7776000 is used. The value 7776000 indicates that the validity period of the refreshed token is 90 days.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "refreshTokenValidity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RefreshTokenValidity
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property requiredScopes: Required scope of application permissions.</summary>
            /// <remarks>
            /// You can set one or more of the scopes set in the <strong>PredefinedScopes</strong> to be required, so that when a user authorizes the application, the required scopes are selected by default and cannot be canceled.
            /// <strong>Notes</strong>: If you set a <strong>RequiredScopes</strong> entry that is not within the scope of <strong>PredefinedScopes</strong>, the required range will not take effect.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "requiredScopes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? RequiredScopes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property secretRequired: Indicates whether a secret is required.</summary>
            /// <remarks>
            /// Valid values: <strong>true</strong> and <strong>false</strong>.
            /// <strong>Note</strong>:
            ///
            /// <list type="bullet">
            /// <description>For applications of the WebApp and ServerApp types, this parameter is automatically set to <strong>true</strong> and cannot be changed.</description>
            /// <description>For applications of the NativeApp type, this parameter can be set to true or false. If you do not set this parameter, false is used. Applications of the NativeApp type run in untrusted environments and the secrets of these applications are not protected. Therefore, we recommend that you do not set this parameter to true unless otherwise specified.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "secretRequired", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecretRequired
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
