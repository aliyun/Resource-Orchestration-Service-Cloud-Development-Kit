using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::GA::EndpointGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ga.EndpointGroupProps")]
    public class EndpointGroupProps : AlibabaCloud.SDK.ROS.CDK.Ga.IEndpointGroupProps
    {
        /// <summary>Property acceleratorId: The ID of the Global Accelerator instance with which the endpoint group will be associated.</summary>
        [JsiiProperty(name: "acceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object AcceleratorId
        {
            get;
            set;
        }

        /// <summary>Property endpointConfigurations:.</summary>
        [JsiiProperty(name: "endpointConfigurations", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ga.RosEndpointGroup.EndpointConfigurationsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public object EndpointConfigurations
        {
            get;
            set;
        }

        /// <summary>Property endpointGroupRegion: The region ID of the endpoint group.</summary>
        [JsiiProperty(name: "endpointGroupRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object EndpointGroupRegion
        {
            get;
            set;
        }

        /// <summary>Property listenerId: The ID of the listener to be associated with the endpoint group.</summary>
        [JsiiProperty(name: "listenerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ListenerId
        {
            get;
            set;
        }

        /// <summary>Property description: The description of the endpoint group.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <summary>Property healthCheckIntervalSeconds: The interval between two consecutive health checks.</summary>
        /// <remarks>
        /// Unit: seconds.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "healthCheckIntervalSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? HealthCheckIntervalSeconds
        {
            get;
            set;
        }

        /// <summary>Property healthCheckPath: The path set as the destination on the targets for health checks.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "healthCheckPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? HealthCheckPath
        {
            get;
            set;
        }

        /// <summary>Property healthCheckPort: The port that is used to connect with the targets for health checks.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "healthCheckPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? HealthCheckPort
        {
            get;
            set;
        }

        /// <summary>Property healthCheckProtocol: The protocol that is used to connect with the targets for health checks.</summary>
        /// <remarks>
        /// tcp: TCP protocol
        /// http: HTTP protocol
        /// https: HTTPS protocol
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "healthCheckProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? HealthCheckProtocol
        {
            get;
            set;
        }

        /// <summary>Property name: The name of the endpoint group.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Name
        {
            get;
            set;
        }

        /// <summary>Property thresholdCount: The number of consecutive failed heath checks that must occur before declaring an endpoint unhealthy.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "thresholdCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ThresholdCount
        {
            get;
            set;
        }

        /// <summary>Property trafficPercentage: The weight of the endpoint group when the corresponding listener is associated with multiple endpoint groups.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "trafficPercentage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? TrafficPercentage
        {
            get;
            set;
        }
    }
}
