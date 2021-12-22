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
        [JsiiProperty(name: "externalIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ExternalIp
        {
            get;
            set;
        }

        /// <summary>Property externalPort: Source port, now support [1-65535]|Any|x/y.</summary>
        [JsiiProperty(name: "externalPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ExternalPort
        {
            get;
            set;
        }

        /// <summary>Property forwardTableId: Create forward entry in specified forward table.</summary>
        [JsiiProperty(name: "forwardTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ForwardTableId
        {
            get;
            set;
        }

        /// <summary>Property internalIp: Destination IP, must belong to VPC private IP.</summary>
        [JsiiProperty(name: "internalIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object InternalIp
        {
            get;
            set;
        }

        /// <summary>Property internalPort: Destination port, now support [1-65535]|Any|x/y.</summary>
        [JsiiProperty(name: "internalPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object InternalPort
        {
            get;
            set;
        }

        /// <summary>Property ipProtocol: Supported protocol, Now support 'TCP|UDP|Any'.</summary>
        [JsiiProperty(name: "ipProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object IpProtocol
        {
            get;
            set;
        }

        /// <summary>Property forwardEntryName: the name of the DNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "forwardEntryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ForwardEntryName
        {
            get;
            set;
        }

        /// <summary>Property portBreak: Specifies whether to remove limits on the port range.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "portBreak", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? PortBreak
        {
            get;
            set;
        }
    }
}
