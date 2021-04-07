using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Privatelink
{
    /// <summary>Properties for defining a `ALIYUN::PrivateLink::VpcEndpointService`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-privatelink.VpcEndpointServiceProps")]
    public class VpcEndpointServiceProps : AlibabaCloud.SDK.ROS.CDK.Privatelink.IVpcEndpointServiceProps
    {
        /// <summary>Property autoAcceptEnabled: Specifies whether to automatically accept endpoint connection requests.</summary>
        /// <remarks>
        /// Valid values:
        /// true: automatically accepts endpoint connection requests.
        /// false: does not automatically accept endpoint connection requests.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoAcceptEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AutoAcceptEnabled
        {
            get;
            set;
        }

        /// <summary>Property connectBandwidth: The default maximum bandwidth of the endpoint connection.</summary>
        /// <remarks>
        /// Valid values: 100 to 1024. Unit: Mbit/s.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "connectBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ConnectBandwidth
        {
            get;
            set;
        }

        /// <summary>Property resource:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "resource", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-privatelink.RosVpcEndpointService.ResourceProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? Resource
        {
            get;
            set;
        }

        /// <summary>Property serviceDescription: The description for the endpoint service.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "serviceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ServiceDescription
        {
            get;
            set;
        }

        /// <summary>Property user: Account IDs to the whitelist of an endpoint service.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "user", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? User
        {
            get;
            set;
        }
    }
}
