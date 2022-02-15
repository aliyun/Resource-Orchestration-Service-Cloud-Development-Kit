using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CEN::CenVbrHealthCheck`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cen.CenVbrHealthCheckProps")]
    public class CenVbrHealthCheckProps : AlibabaCloud.SDK.ROS.CDK.Cen.ICenVbrHealthCheckProps
    {
        /// <summary>Property cenId: The ID of the CEN instance.</summary>
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object CenId
        {
            get;
            set;
        }

        /// <summary>Property healthCheckTargetIp: Specifies the destination IP address of the health check.</summary>
        /// <remarks>
        /// The destination IP address is the IP address of the client-facing interface on the VBR instance.
        /// </remarks>
        [JsiiProperty(name: "healthCheckTargetIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object HealthCheckTargetIp
        {
            get;
            set;
        }

        /// <summary>Property vbrInstanceId: The ID of the VBR instance.</summary>
        [JsiiProperty(name: "vbrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object VbrInstanceId
        {
            get;
            set;
        }

        /// <summary>Property vbrInstanceRegionId: The ID of the region where the VBR instance is deployed.</summary>
        /// <remarks>
        /// You can call the DescribeRegionsoperation to query region IDs.
        /// </remarks>
        [JsiiProperty(name: "vbrInstanceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object VbrInstanceRegionId
        {
            get;
            set;
        }

        /// <summary>Property healthCheckInterval: Specifies the time interval at which probe packets are sent during the health check.</summary>
        /// <remarks>
        /// Default value: 2. Valid values: 2 to 3.  Unit: second.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "healthCheckInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? HealthCheckInterval
        {
            get;
            set;
        }

        /// <summary>Property healthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check.</summary>
        /// <remarks>
        /// Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0/16 (recommended).  Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0/8, 192.168.0.0/16, or 172.16.0.0/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "healthCheckSourceIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? HealthCheckSourceIp
        {
            get;
            set;
        }

        /// <summary>Property healthyThreshold: Specifies the number of probe packets to be sent during the health check.</summary>
        /// <remarks>
        /// Default value: 8. Valid values: 3 to 8.  Unit: packet.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "healthyThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? HealthyThreshold
        {
            get;
            set;
        }

        /// <summary>Property vbrInstanceOwnerId: The User ID (UID) of the account to which the VBR instance belongs.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "vbrInstanceOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? VbrInstanceOwnerId
        {
            get;
            set;
        }
    }
}
