using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Privatelink
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::PrivateLink::VpcEndpoint`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-privatelink.RosVpcEndpointProps")]
    public class RosVpcEndpointProps : AlibabaCloud.SDK.ROS.CDK.Privatelink.IRosVpcEndpointProps
    {
        /// <remarks>
        /// <strong>Property</strong>: securityGroupId: The security group associated with the endpoint network interface. The security group can control the data communication from the VPC to the endpoint network interface.
        /// </remarks>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        public object SecurityGroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The VPC to which the endpoint belongs.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object VpcId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: endpointDescription: The description of the endpoint.
        /// The description must be 2 to 256 characters in length and cannot start with http:// or https://.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "endpointDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? EndpointDescription
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: endpointName: The name of the endpoint.
        /// The name must be 2 to 128 characters in length and can contain digits, underscores
        /// (_), and hyphens (-). The name must start with a letter.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "endpointName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? EndpointName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceId: The endpoint service that is associated with the endpoint. One of ServiceId and ServiceName is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "serviceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ServiceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceName: The name of the endpoint service that is associated with the endpoint. One of ServiceId and ServiceName is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ServiceName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: zone:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "zone", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-privatelink.RosVpcEndpoint.ZoneProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? Zone
        {
            get;
            set;
        }
    }
}
