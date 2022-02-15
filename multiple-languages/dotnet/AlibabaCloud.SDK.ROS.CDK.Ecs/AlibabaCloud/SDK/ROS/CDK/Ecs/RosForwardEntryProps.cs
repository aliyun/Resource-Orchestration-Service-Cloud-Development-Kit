using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::ForwardEntry`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.RosForwardEntryProps")]
    public class RosForwardEntryProps : AlibabaCloud.SDK.ROS.CDK.Ecs.IRosForwardEntryProps
    {
        /// <remarks>
        /// <strong>Property</strong>: externalIp: Source IP, must belongs to bandwidth package internet IP
        /// </remarks>
        [JsiiProperty(name: "externalIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ExternalIp
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: externalPort: Source port, now support [1-65535]|Any|x/y
        /// </remarks>
        [JsiiProperty(name: "externalPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ExternalPort
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: forwardTableId: Create forward entry in specified forward table.
        /// </remarks>
        [JsiiProperty(name: "forwardTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ForwardTableId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: internalIp: Destination IP, must belong to VPC private IP
        /// </remarks>
        [JsiiProperty(name: "internalIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object InternalIp
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: internalPort: Destination port, now support [1-65535]|Any|x/y
        /// </remarks>
        [JsiiProperty(name: "internalPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object InternalPort
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ipProtocol: Supported protocol, Now support 'TCP|UDP|Any'
        /// </remarks>
        [JsiiProperty(name: "ipProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object IpProtocol
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: forwardEntryName: the name of the DNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "forwardEntryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ForwardEntryName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: portBreak: Specifies whether to remove limits on the port range.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "portBreak", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? PortBreak
        {
            get;
            set;
        }
    }
}
