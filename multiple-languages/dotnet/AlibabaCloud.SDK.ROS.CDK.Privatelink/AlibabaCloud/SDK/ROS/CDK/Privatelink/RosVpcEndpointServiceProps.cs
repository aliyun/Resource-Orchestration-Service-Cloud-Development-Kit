using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Privatelink
{
    /// <summary>Properties for defining a `ALIYUN::PrivateLink::VpcEndpointService`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-privatelink.RosVpcEndpointServiceProps")]
    public class RosVpcEndpointServiceProps : AlibabaCloud.SDK.ROS.CDK.Privatelink.IRosVpcEndpointServiceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: autoAcceptEnabled: Specifies whether to automatically accept endpoint connection requests. Valid values:
        /// true: automatically accepts endpoint connection requests.
        /// false: does not automatically accept endpoint connection requests.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoAcceptEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AutoAcceptEnabled
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: connectBandwidth: The default maximum bandwidth of the endpoint connection. Valid values: 100 to 1024. Unit: Mbit/s.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "connectBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ConnectBandwidth
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: payer: The payer of the endpoint service. Valid values:
        /// Endpoint: the service consumer.
        /// EndpointService: the service provider.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "payer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Payer
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: resource:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resource", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-privatelink.RosVpcEndpointService.ResourceProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? Resource
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceDescription: The description for the endpoint service.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "serviceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ServiceDescription
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: user: Account IDs to the whitelist of an endpoint service.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "user", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? User
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneAffinityEnabled: Specifies whether to resolve domain names to IP addresses in the nearest zone.
        /// true: yes.
        /// false (default): no
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "zoneAffinityEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ZoneAffinityEnabled
        {
            get;
            set;
        }
    }
}
