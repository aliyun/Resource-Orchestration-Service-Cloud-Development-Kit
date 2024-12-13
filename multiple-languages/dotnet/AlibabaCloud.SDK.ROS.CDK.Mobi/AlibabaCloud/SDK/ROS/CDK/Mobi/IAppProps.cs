using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mobi
{
    /// <summary>Properties for defining a `App`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mobi-app
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAppProps), fullyQualifiedName: "@alicloud/ros-cdk-mobi.AppProps")]
    public interface IAppProps
    {
        /// <summary>Property appIcon: Application icon label, The system provides an icon by default, which is given in the form of a label.</summary>
        /// <remarks>
        /// The default value is -1.
        /// </remarks>
        [JsiiProperty(name: "appIcon", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AppIcon
        {
            get;
        }

        /// <summary>Property appName: The application name.</summary>
        [JsiiProperty(name: "appName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AppName
        {
            get;
        }

        /// <summary>Property appWorkspaceId: Workspace ID of application, The application belongs to the workspace.</summary>
        [JsiiProperty(name: "appWorkspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AppWorkspaceId
        {
            get;
        }

        /// <summary>Property template: Application Template.</summary>
        [JsiiProperty(name: "template", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mobi.RosApp.TemplateProperty\"}]}}")]
        object Template
        {
            get;
        }

        /// <summary>Property appDescription: Description of application.</summary>
        [JsiiProperty(name: "appDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AppDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property appType: The application type.</summary>
        /// <remarks>
        /// Web applications and Copilot applications are supported.
        ///
        /// <list type="bullet">
        /// <description><strong>Web</strong>:Web application.</description>
        /// <description><strong>Copilot</strong>:Copilot application.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "appType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AppType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `App`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mobi-app
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAppProps), fullyQualifiedName: "@alicloud/ros-cdk-mobi.AppProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mobi.IAppProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property appIcon: Application icon label, The system provides an icon by default, which is given in the form of a label.</summary>
            /// <remarks>
            /// The default value is -1.
            /// </remarks>
            [JsiiProperty(name: "appIcon", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AppIcon
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property appName: The application name.</summary>
            [JsiiProperty(name: "appName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AppName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property appWorkspaceId: Workspace ID of application, The application belongs to the workspace.</summary>
            [JsiiProperty(name: "appWorkspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AppWorkspaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property template: Application Template.</summary>
            [JsiiProperty(name: "template", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mobi.RosApp.TemplateProperty\"}]}}")]
            public object Template
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property appDescription: Description of application.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "appDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AppDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property appType: The application type.</summary>
            /// <remarks>
            /// Web applications and Copilot applications are supported.
            ///
            /// <list type="bullet">
            /// <description><strong>Web</strong>:Web application.</description>
            /// <description><strong>Copilot</strong>:Copilot application.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "appType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AppType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
