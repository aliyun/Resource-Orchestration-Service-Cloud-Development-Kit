using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `KeyPair`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-keypair
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.datasource.KeyPairProps")]
    public class KeyPairProps : AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IKeyPairProps
    {
        private object _keyPairName;

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
            get => _keyPairName;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _keyPairName = value;
            }
        }
    }
}
