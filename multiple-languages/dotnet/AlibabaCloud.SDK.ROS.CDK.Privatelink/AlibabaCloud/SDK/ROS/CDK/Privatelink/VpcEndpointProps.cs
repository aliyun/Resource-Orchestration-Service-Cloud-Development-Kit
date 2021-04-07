using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Privatelink
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::PrivateLink::VpcEndpoint`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-privatelink.VpcEndpointProps")]
    public class VpcEndpointProps : AlibabaCloud.SDK.ROS.CDK.Privatelink.IVpcEndpointProps
    {
        /// <summary>Property securityGroupId: The security group associated with the endpoint network interface.</summary>
        /// <remarks>
        /// The security group can control the data communication from the VPC to the endpoint network interface.
        /// </remarks>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOverride: true)]
        public object SecurityGroupId
        {
            get;
            set;
        }

        /// <summary>Property vpcId: The VPC to which the endpoint belongs.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object VpcId
        {
            get;
            set;
        }

        /// <summary>Property endpointDescription: The description of the endpoint.</summary>
        /// <remarks>
        /// The description must be 2 to 256 characters in length and cannot start with http:// or https://.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "endpointDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? EndpointDescription
        {
            get;
            set;
        }

        /// <summary>Property endpointName: The name of the endpoint.</summary>
        /// <remarks>
        /// The name must be 2 to 128 characters in length and can contain digits, underscores
        /// (_), and hyphens (-). The name must start with a letter.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "endpointName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? EndpointName
        {
            get;
            set;
        }

        /// <summary>Property serviceId: The endpoint service that is associated with the endpoint.</summary>
        /// <remarks>
        /// One of ServiceId and ServiceName is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "serviceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ServiceId
        {
            get;
            set;
        }

        /// <summary>Property serviceName: The name of the endpoint service that is associated with the endpoint.</summary>
        /// <remarks>
        /// One of ServiceId and ServiceName is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ServiceName
        {
            get;
            set;
        }

        /// <summary>Property zone:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "zone", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-privatelink.RosVpcEndpoint.ZoneProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? Zone
        {
            get;
            set;
        }
    }
}
