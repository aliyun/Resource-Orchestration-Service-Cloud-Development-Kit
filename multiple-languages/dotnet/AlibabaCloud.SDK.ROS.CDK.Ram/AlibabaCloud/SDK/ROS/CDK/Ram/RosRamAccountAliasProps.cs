using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `RosRamAccountAlias`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-ramaccountalias
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ram.RosRamAccountAliasProps")]
    public class RosRamAccountAliasProps : AlibabaCloud.SDK.ROS.CDK.Ram.IRosRamAccountAliasProps
    {
        private object _accountAlias;

        /// <remarks>
        /// <strong>Property</strong>: accountAlias: The alias of the Alibaba Cloud account.
        /// The alias must be 1 to 50 characters in length, and can contain lowercase letters,
        /// digits, hyphens (-), periods (.) and underscores (_).
        /// Note It cannot start or end with a hyphen (-).The default domain name cannot start or end with a
        /// hyphen (-) and cannot have two consecutive hyphens (-).
        /// </remarks>
        [JsiiProperty(name: "accountAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object AccountAlias
        {
            get => _accountAlias;
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
                _accountAlias = value;
            }
        }
    }
}
