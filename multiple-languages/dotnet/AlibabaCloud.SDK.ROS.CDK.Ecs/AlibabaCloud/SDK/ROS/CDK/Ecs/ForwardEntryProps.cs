using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::ForwardEntry`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.ForwardEntryProps")]
    public class ForwardEntryProps : AlibabaCloud.SDK.ROS.CDK.Ecs.IForwardEntryProps
    {
        /// <summary>Property externalIp: Source IP, must belongs to bandwidth package internet IP.</summary>
        [JsiiProperty(name: "externalIp", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ExternalIp
        {
            get;
            set;
        }

        /// <summary>Property externalPort: Source port, now support [1-65535]|Any.</summary>
        [JsiiProperty(name: "externalPort", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ExternalPort
        {
            get;
            set;
        }

        /// <summary>Property forwardTableId: Create forward entry in specified forward table.</summary>
        [JsiiProperty(name: "forwardTableId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ForwardTableId
        {
            get;
            set;
        }

        /// <summary>Property internalIp: Destination IP, must belong to VPC private IP.</summary>
        [JsiiProperty(name: "internalIp", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string InternalIp
        {
            get;
            set;
        }

        /// <summary>Property internalPort: Destination port, now support [1-65535]|Any.</summary>
        [JsiiProperty(name: "internalPort", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string InternalPort
        {
            get;
            set;
        }

        /// <summary>Property ipProtocol: Supported protocol, Now support 'TCP|UDP|Any'.</summary>
        [JsiiProperty(name: "ipProtocol", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string IpProtocol
        {
            get;
            set;
        }
    }
}
