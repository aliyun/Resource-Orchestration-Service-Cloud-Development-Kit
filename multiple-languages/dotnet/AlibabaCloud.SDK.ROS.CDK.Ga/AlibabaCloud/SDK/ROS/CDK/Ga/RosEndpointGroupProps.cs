using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::GA::EndpointGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ga.RosEndpointGroupProps")]
    public class RosEndpointGroupProps : AlibabaCloud.SDK.ROS.CDK.Ga.IRosEndpointGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: acceleratorId: The ID of the Global Accelerator instance with which the endpoint group will be associated.
        /// </remarks>
        [JsiiProperty(name: "acceleratorId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string AcceleratorId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: endpointConfigurations:
        /// </remarks>
        [JsiiProperty(name: "endpointConfigurations", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ga.RosEndpointGroup.EndpointConfigurationsProperty\"}]}},\"kind\":\"array\"}}]}}", isOverride: true)]
        public object EndpointConfigurations
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: endpointGroupRegion: The region ID of the endpoint group.
        /// </remarks>
        [JsiiProperty(name: "endpointGroupRegion", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string EndpointGroupRegion
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: listenerId: The ID of the listener to be associated with the endpoint group.
        /// </remarks>
        [JsiiProperty(name: "listenerId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ListenerId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the endpoint group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: healthCheckIntervalSeconds: The interval between two consecutive health checks. Unit: seconds.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "healthCheckIntervalSeconds", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? HealthCheckIntervalSeconds
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: healthCheckPath: The path set as the destination on the targets for health checks.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "healthCheckPath", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? HealthCheckPath
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: healthCheckPort: The port that is used to connect with the targets for health checks.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "healthCheckPort", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? HealthCheckPort
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: healthCheckProtocol: The protocol that is used to connect with the targets for health checks.
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

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the endpoint group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Name
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: thresholdCount: The number of consecutive failed heath checks that must occur before declaring an endpoint unhealthy.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "thresholdCount", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? ThresholdCount
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: trafficPercentage: The weight of the endpoint group when the corresponding listener is associated with
        /// multiple endpoint groups.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "trafficPercentage", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? TrafficPercentage
        {
            get;
            set;
        }
    }
}
