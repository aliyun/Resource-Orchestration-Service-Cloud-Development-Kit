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
        [JsiiProperty(name: "acceleratorId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string AcceleratorId
        {
            get;
            set;
        }

        /// <summary>Property endpointConfigurations:.</summary>
        [JsiiProperty(name: "endpointConfigurations", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ga.RosEndpointGroup.EndpointConfigurationsProperty\"}]}},\"kind\":\"array\"}}]}}", isOverride: true)]
        public object EndpointConfigurations
        {
            get;
            set;
        }

        /// <summary>Property endpointGroupRegion: The region ID of the endpoint group.</summary>
        [JsiiProperty(name: "endpointGroupRegion", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string EndpointGroupRegion
        {
            get;
            set;
        }

        /// <summary>Property listenerId: The ID of the listener to be associated with the endpoint group.</summary>
        [JsiiProperty(name: "listenerId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ListenerId
        {
            get;
            set;
        }

        /// <summary>Property description: The description of the endpoint group.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <summary>Property healthCheckIntervalSeconds: The interval between two consecutive health checks.</summary>
        /// <remarks>
        /// Unit: seconds.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "healthCheckIntervalSeconds", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? HealthCheckIntervalSeconds
        {
            get;
            set;
        }

        /// <summary>Property healthCheckPath: The path set as the destination on the targets for health checks.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "healthCheckPath", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? HealthCheckPath
        {
            get;
            set;
        }

        /// <summary>Property healthCheckPort: The port that is used to connect with the targets for health checks.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "healthCheckPort", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? HealthCheckPort
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
        [JsiiProperty(name: "healthCheckProtocol", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? HealthCheckProtocol
        {
            get;
            set;
        }

        /// <summary>Property name: The name of the endpoint group.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Name
        {
            get;
            set;
        }

        /// <summary>Property thresholdCount: The number of consecutive failed heath checks that must occur before declaring an endpoint unhealthy.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "thresholdCount", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? ThresholdCount
        {
            get;
            set;
        }

        /// <summary>Property trafficPercentage: The weight of the endpoint group when the corresponding listener is associated with multiple endpoint groups.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "trafficPercentage", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? TrafficPercentage
        {
            get;
            set;
        }
    }
}
