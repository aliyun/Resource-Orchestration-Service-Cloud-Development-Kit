using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Memcache
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::Memcache::Whitelist`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-memcache.RosWhitelistProps")]
    public class RosWhitelistProps : AlibabaCloud.SDK.ROS.CDK.Memcache.IRosWhitelistProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceId: Instance ID (globally unique)
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string InstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: securityIps: IP address whitelist to be modified
        /// </remarks>
        [JsiiProperty(name: "securityIps", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SecurityIps
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: securityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityIpGroupAttribute", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SecurityIpGroupAttribute
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: securityIpGroupName: Whitelist group
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityIpGroupName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SecurityIpGroupName
        {
            get;
            set;
        }
    }
}
