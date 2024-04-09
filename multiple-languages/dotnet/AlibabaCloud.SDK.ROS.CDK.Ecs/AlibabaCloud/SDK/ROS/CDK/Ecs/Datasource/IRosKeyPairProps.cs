using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `RosKeyPair`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-keypair
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosKeyPairProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.RosKeyPairProps")]
    public interface IRosKeyPairProps
    {
        /// <remarks>
        /// <strong>Property</strong>: keyPairName: The name of the key pair. You can use the asterisk (*) symbol as a wildcard in regular expressions to perform a fuzzy search for key pairs. Sample patterns:
        /// - *SshKey: queries key pairs whose names end with SshKey, including the key pair named SshKey.
        /// - SshKey*: queries key pairs whose names start with SshKey, including the key pair named SshKey.
        /// - *SshKey*: queries key pairs whose names include SshKey, including the key pair named SshKey.
        /// - SshKey: queries the key pair named SshKey.
        /// </remarks>
        [JsiiProperty(name: "keyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object KeyPairName
        {
            get;
        }

        /// <summary>Properties for defining a `RosKeyPair`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-keypair
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosKeyPairProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.RosKeyPairProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IRosKeyPairProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: keyPairName: The name of the key pair. You can use the asterisk (*) symbol as a wildcard in regular expressions to perform a fuzzy search for key pairs. Sample patterns:
            /// - *SshKey: queries key pairs whose names end with SshKey, including the key pair named SshKey.
            /// - SshKey*: queries key pairs whose names start with SshKey, including the key pair named SshKey.
            /// - *SshKey*: queries key pairs whose names include SshKey, including the key pair named SshKey.
            /// - SshKey: queries the key pair named SshKey.
            /// </remarks>
            [JsiiProperty(name: "keyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object KeyPairName
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
