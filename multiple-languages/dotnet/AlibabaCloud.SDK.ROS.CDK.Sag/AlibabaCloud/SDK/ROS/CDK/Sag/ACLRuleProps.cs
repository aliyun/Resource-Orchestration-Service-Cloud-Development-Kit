using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SAG::ACLRule`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sag.ACLRuleProps")]
    public class ACLRuleProps : AlibabaCloud.SDK.ROS.CDK.Sag.IACLRuleProps
    {
        /// <summary>Property aclId: Access control ID.</summary>
        [JsiiProperty(name: "aclId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object AclId
        {
            get;
            set;
        }

        /// <summary>Property destCidr: Destination address, CIDR format and IP address range in IPv4 format.</summary>
        [JsiiProperty(name: "destCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DestCidr
        {
            get;
            set;
        }

        /// <summary>Property destPortRange: Destination port range, 80/80.</summary>
        [JsiiProperty(name: "destPortRange", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DestPortRange
        {
            get;
            set;
        }

        /// <summary>Property direction: Regular direction.</summary>
        /// <remarks>
        /// Value: in|out
        /// </remarks>
        [JsiiProperty(name: "direction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Direction
        {
            get;
            set;
        }

        /// <summary>Property ipProtocol: Protocol, not case sensitive.</summary>
        [JsiiProperty(name: "ipProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object IpProtocol
        {
            get;
            set;
        }

        /// <summary>Property policy: Access: accept|drop.</summary>
        [JsiiProperty(name: "policy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Policy
        {
            get;
            set;
        }

        /// <summary>Property sourceCidr: Source address, CIDR format and IP address range in IPv4 format.</summary>
        [JsiiProperty(name: "sourceCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SourceCidr
        {
            get;
            set;
        }

        /// <summary>Property sourcePortRange: Source port range, 80/80.</summary>
        [JsiiProperty(name: "sourcePortRange", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SourcePortRange
        {
            get;
            set;
        }

        /// <summary>Property description: Rule description information, ranging from 1 to 512 characters.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <summary>Property dpiGroupIds: The ID of the application group.</summary>
        /// <remarks>
        /// You can enter at most 100 application group IDs at a time.
        /// You can call the ListDpiGroups operation to query application group IDs and information about the applications.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dpiGroupIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? DpiGroupIds
        {
            get;
            set;
        }

        /// <summary>Property dpiSignatureIds: The ID of the application.</summary>
        /// <remarks>
        /// You can enter at most 100 application IDs at a time.
        /// You can call the ListDpiSignatures operation to query application IDs and information about the applications.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dpiSignatureIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? DpiSignatureIds
        {
            get;
            set;
        }

        /// <summary>Property name: The name of the ACL rule.</summary>
        /// <remarks>
        /// The name must be 2 to 100 characters in length, and can contain digits, underscores
        /// (_), and hyphens (-). It must start with a letter.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Name
        {
            get;
            set;
        }

        /// <summary>Property priority: Priority, ranging from 1 to 100.</summary>
        /// <remarks>
        /// Default: 1
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Priority
        {
            get;
            set;
        }

        /// <summary>Property type: The type of the ACL rule: Valid values: LAN: The ACL rule controls traffic of private IP addresses.</summary>
        /// <remarks>
        /// This is the default value.
        /// WAN: The ACL rule controls traffic of public IP addresses.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Type
        {
            get;
            set;
        }
    }
}
