using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Memcache
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::Memcache::Whitelist`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-memcache.WhitelistProps")]
    public class WhitelistProps : AlibabaCloud.SDK.ROS.CDK.Memcache.IWhitelistProps
    {
        /// <summary>Property instanceId: Instance ID (globally unique).</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object InstanceId
        {
            get;
            set;
        }

        /// <summary>Property securityIps: IP address whitelist to be modified.</summary>
        [JsiiProperty(name: "securityIps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object SecurityIps
        {
            get;
            set;
        }

        /// <summary>Property securityIpGroupAttribute: The default is empty.</summary>
        /// <remarks>
        /// For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityIpGroupAttribute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? SecurityIpGroupAttribute
        {
            get;
            set;
        }

        /// <summary>Property securityIpGroupName: Whitelist group.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "securityIpGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? SecurityIpGroupName
        {
            get;
            set;
        }
    }
}
