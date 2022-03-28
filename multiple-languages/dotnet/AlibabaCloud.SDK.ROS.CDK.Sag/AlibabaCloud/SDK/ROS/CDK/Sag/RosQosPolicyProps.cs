using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SAG::QosPolicy`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sag.RosQosPolicyProps")]
    public class RosQosPolicyProps : AlibabaCloud.SDK.ROS.CDK.Sag.IRosQosPolicyProps
    {
        /// <remarks>
        /// <strong>Property</strong>: destCidr: The range of the destination IP addresses.
        /// Specify the value of this parameter in CIDR notation. Example: 192.168.10.0/24.
        /// </remarks>
        [JsiiProperty(name: "destCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DestCidr
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: destPortRange: The range of destination ports.
        /// Valid values: 1 to 65535 and -1.
        /// Set this parameter in one of the following formats:
        /// 1/200: a port range from 1 to 200
        /// 80/80: port 80
        /// -1/-1: all ports
        /// </remarks>
        [JsiiProperty(name: "destPortRange", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DestPortRange
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ipProtocol: The type of the protocol that applies to the traffic classification rule.
        /// The supported protocols provided in this topic are for reference only. The actual
        /// protocols in the console shall prevail.
        /// </remarks>
        [JsiiProperty(name: "ipProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object IpProtocol
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: priority: The priority of the traffic throttling policy to which the traffic classification
        /// rule belongs.
        /// </remarks>
        [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Priority
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: qosId: The ID of the QoS policy.
        /// </remarks>
        [JsiiProperty(name: "qosId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object QosId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceCidr: The range of the source IP addresses.
        /// Specify the value of this parameter in CIDR notation. Example: 192.168.1.0/24.
        /// </remarks>
        [JsiiProperty(name: "sourceCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SourceCidr
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourcePortRange: The range of source ports.
        /// Valid values: 1 to 65535 and -1.
        /// Set this parameter in one of the following formats:
        /// 1/200: a port range from 1 to 200
        /// 80/80: port 80
        /// -1/-1: all ports
        /// </remarks>
        [JsiiProperty(name: "sourcePortRange", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SourcePortRange
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the traffic classification rule.
        /// The description must be 1 to 512 characters in length and can contain letters, digits,
        /// underscores (_), and hyphens (-). It must start with a letter.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dpiGroupIds: The ID of the application group.
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

        /// <remarks>
        /// <strong>Property</strong>: dpiSignatureIds: The ID of the application.
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

        /// <remarks>
        /// <strong>Property</strong>: endTime: The time when the traffic classification rule becomes invalid.
        /// Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss+0800 format.
        /// The time must be in UTC+8.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "endTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? EndTime
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the traffic classification rule.
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

        /// <remarks>
        /// <strong>Property</strong>: startTime: The time when the traffic classification rule takes effect.
        /// Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss+0800 format.
        /// The time must be in UTC+8.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "startTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? StartTime
        {
            get;
            set;
        }
    }
}
