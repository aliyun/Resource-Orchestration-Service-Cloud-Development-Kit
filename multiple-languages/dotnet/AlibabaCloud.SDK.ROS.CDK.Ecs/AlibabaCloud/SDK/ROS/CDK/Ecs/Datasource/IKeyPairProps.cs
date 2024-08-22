using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `KeyPair`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-keypair
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IKeyPairProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.KeyPairProps")]
    public interface IKeyPairProps
    {
        /// <summary>Property keyPairName: The name of the key pair.</summary>
        /// <remarks>
        /// You can use the asterisk (*) symbol as a wildcard in regular expressions to perform a fuzzy search for key pairs. Sample patterns:
        ///
        /// <list type="bullet">
        /// <description>*SshKey: queries key pairs whose names end with SshKey, including the key pair named SshKey.</description>
        /// <description>SshKey*: queries key pairs whose names start with SshKey, including the key pair named SshKey.</description>
        /// <description><em>SshKey</em>: queries key pairs whose names include SshKey, including the key pair named SshKey.</description>
        /// <description>SshKey: queries the key pair named SshKey.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "keyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object KeyPairName
        {
            get;
        }

        /// <summary>Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Never: Never refresh the datasource resource when the stack is updated.</description>
        /// <description>Always: Always refresh the datasource resource when the stack is updated.
        /// Default is Never.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "refreshOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RefreshOptions
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `KeyPair`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-keypair
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IKeyPairProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.KeyPairProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IKeyPairProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property keyPairName: The name of the key pair.</summary>
            /// <remarks>
            /// You can use the asterisk (*) symbol as a wildcard in regular expressions to perform a fuzzy search for key pairs. Sample patterns:
            ///
            /// <list type="bullet">
            /// <description>*SshKey: queries key pairs whose names end with SshKey, including the key pair named SshKey.</description>
            /// <description>SshKey*: queries key pairs whose names start with SshKey, including the key pair named SshKey.</description>
            /// <description><em>SshKey</em>: queries key pairs whose names include SshKey, including the key pair named SshKey.</description>
            /// <description>SshKey: queries the key pair named SshKey.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "keyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object KeyPairName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>Never: Never refresh the datasource resource when the stack is updated.</description>
            /// <description>Always: Always refresh the datasource resource when the stack is updated.
            /// Default is Never.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "refreshOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RefreshOptions
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
