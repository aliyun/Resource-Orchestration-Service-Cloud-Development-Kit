using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SAG::ACLRule`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sag.RosACLRuleProps")]
    public class RosACLRuleProps : AlibabaCloud.SDK.ROS.CDK.Sag.IRosACLRuleProps
    {
        /// <remarks>
        /// <strong>Property</strong>: aclId: Access control ID.
        /// </remarks>
        [JsiiProperty(name: "aclId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string AclId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: destCidr: Destination address, CIDR format and IP address range in IPv4 format.
        /// </remarks>
        [JsiiProperty(name: "destCidr", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DestCidr
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: destPortRange: Destination port range, 80/80.
        /// </remarks>
        [JsiiProperty(name: "destPortRange", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DestPortRange
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: direction: Regular direction.
        /// Value: in|out
        /// </remarks>
        [JsiiProperty(name: "direction", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Direction
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ipProtocol: Protocol, not case sensitive.
        /// </remarks>
        [JsiiProperty(name: "ipProtocol", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string IpProtocol
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: policy: Access: accept|drop
        /// </remarks>
        [JsiiProperty(name: "policy", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Policy
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceCidr: Source address, CIDR format and IP address range in IPv4 format.
        /// </remarks>
        [JsiiProperty(name: "sourceCidr", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SourceCidr
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourcePortRange: Source port range, 80/80.
        /// </remarks>
        [JsiiProperty(name: "sourcePortRange", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SourcePortRange
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Rule description information, ranging from 1 to 512 characters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: priority: Priority, ranging from 1 to 100.
        /// Default: 1
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "priority", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Priority
        {
            get;
            set;
        }
    }
}
