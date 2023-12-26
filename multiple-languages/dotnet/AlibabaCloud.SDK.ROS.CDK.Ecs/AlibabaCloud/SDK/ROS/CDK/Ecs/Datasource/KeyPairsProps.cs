using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `KeyPairs`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-keypairs
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.datasource.KeyPairsProps")]
    public class KeyPairsProps : AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IKeyPairsProps
    {
        private object? _keyPairFingerPrint;

        /// <summary>Property keyPairFingerPrint: The fingerprint of the key pair.</summary>
        /// <remarks>
        /// The message-digest algorithm 5 (MD5) is used based on the public key fingerprint format defined in RFC 4716. For more information, see RFC 4716.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "keyPairFingerPrint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? KeyPairFingerPrint
        {
            get => _keyPairFingerPrint;
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
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _keyPairFingerPrint = value;
            }
        }

        private object? _keyPairName;

        /// <summary>Property keyPairName: he name of the key pair.</summary>
        /// <remarks>
        /// You can use the asterisk (*) symbol as a wildcard in regular expressions to query key pairs by performing a fuzzy search. Sample patterns:
        /// <em>SshKey: queries key pairs whose names end with SshKey, including the key pair named SshKey.
        /// SshKey</em>: queries key pairs whose names start with SshKey, including the key pair named SshKey.
        /// <em>SshKey</em>: queries key pairs whose names include SshKey, including the key pair named SshKey.
        /// SshKey: queries the key pair named SshKey.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "keyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? KeyPairName
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
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _keyPairName = value;
            }
        }

        private object? _resourceGroupId;

        /// <summary>Property resourceGroupId: The ID of the resource group to which the key pair belongs.</summary>
        /// <remarks>
        /// If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ResourceGroupId
        {
            get => _resourceGroupId;
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
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _resourceGroupId = value;
            }
        }

        /// <summary>Property tags: Tags of keypair.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.RosKeyPairs.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.RosKeyPairs.ITagsProperty[]? Tags
        {
            get;
            set;
        }
    }
}
