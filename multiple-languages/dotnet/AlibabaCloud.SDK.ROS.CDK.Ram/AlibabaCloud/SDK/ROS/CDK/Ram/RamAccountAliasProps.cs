using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::RAM::RamAccountAlias`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ram.RamAccountAliasProps")]
    public class RamAccountAliasProps : AlibabaCloud.SDK.ROS.CDK.Ram.IRamAccountAliasProps
    {
        /// <summary>Property accountAlias: The alias of the Alibaba Cloud account.</summary>
        /// <remarks>
        /// The alias must be 1 to 50 characters in length, and can contain lowercase letters,
        /// digits, hyphens (-), periods (.) and underscores (_).
        /// Note It cannot start or end with a hyphen (-).The default domain name cannot start or end with a
        /// hyphen (-) and cannot have two consecutive hyphens (-).
        /// </remarks>
        [JsiiProperty(name: "accountAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object AccountAlias
        {
            get;
            set;
        }
    }
}
