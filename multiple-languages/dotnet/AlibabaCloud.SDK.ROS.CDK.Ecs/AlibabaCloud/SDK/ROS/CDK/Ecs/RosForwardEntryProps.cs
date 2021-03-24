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
        [JsiiProperty(name: "externalIp", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ExternalIp
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: externalPort: Source port, now support [1-65535]|Any
        /// </remarks>
        [JsiiProperty(name: "externalPort", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ExternalPort
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: forwardTableId: Create forward entry in specified forward table.
        /// </remarks>
        [JsiiProperty(name: "forwardTableId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ForwardTableId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: internalIp: Destination IP, must belong to VPC private IP
        /// </remarks>
        [JsiiProperty(name: "internalIp", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string InternalIp
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: internalPort: Destination port, now support [1-65535]|Any
        /// </remarks>
        [JsiiProperty(name: "internalPort", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string InternalPort
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ipProtocol: Supported protocol, Now support 'TCP|UDP|Any'
        /// </remarks>
        [JsiiProperty(name: "ipProtocol", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string IpProtocol
        {
            get;
            set;
        }
    }
}
