using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Redis
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::REDIS::Whitelist`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-redis.WhitelistProps")]
    public class WhitelistProps : AlibabaCloud.SDK.ROS.CDK.Redis.IWhitelistProps
    {
        /// <summary>Property instanceId: Instance ID (globally unique).</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string InstanceId
        {
            get;
            set;
        }

        /// <summary>Property securityIps: IP address whitelist to be modified.</summary>
        [JsiiProperty(name: "securityIps", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SecurityIps
        {
            get;
            set;
        }

        /// <summary>Property securityIpGroupAttribute: The default is empty.</summary>
        /// <remarks>
        /// For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityIpGroupAttribute", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SecurityIpGroupAttribute
        {
            get;
            set;
        }

        /// <summary>Property securityIpGroupName: Whitelist group.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "securityIpGroupName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SecurityIpGroupName
        {
            get;
            set;
        }
    }
}
