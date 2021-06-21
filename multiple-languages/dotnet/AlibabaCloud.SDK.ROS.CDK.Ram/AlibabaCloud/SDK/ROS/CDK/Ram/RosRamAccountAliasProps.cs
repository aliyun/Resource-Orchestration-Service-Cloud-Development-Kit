using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::RAM::RamAccountAlias`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ram.RosRamAccountAliasProps")]
    public class RosRamAccountAliasProps : AlibabaCloud.SDK.ROS.CDK.Ram.IRosRamAccountAliasProps
    {
        /// <remarks>
        /// <strong>Property</strong>: accountAlias: The alias of the Alibaba Cloud account.
        /// The alias must be 3 to 32 characters in length, and can contain lowercase letters,
        /// digits, and hyphens (-).
        /// Note It cannot start or end with a hyphen (-), and cannot contain consecutive hyphens (-).
        /// </remarks>
        [JsiiProperty(name: "accountAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object AccountAlias
        {
            get;
            set;
        }
    }
}
