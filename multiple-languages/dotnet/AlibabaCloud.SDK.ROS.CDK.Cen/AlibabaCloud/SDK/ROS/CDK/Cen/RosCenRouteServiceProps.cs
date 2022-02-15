using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CEN::CenRouteService`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cen.RosCenRouteServiceProps")]
    public class RosCenRouteServiceProps : AlibabaCloud.SDK.ROS.CDK.Cen.IRosCenRouteServiceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: accessRegionId: The region where the cloud service is deployed.
        /// </remarks>
        [JsiiProperty(name: "accessRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object AccessRegionId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: cenId: The ID of the Cloud Enterprise Network (CEN) instance.
        /// </remarks>
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object CenId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: host: The domain or IP address of the cloud service.
        /// </remarks>
        [JsiiProperty(name: "host", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Host
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: hostRegionId: The region where the cloud service is deployed.
        /// You can call the DescribeRegions operation to query region IDs.
        /// Note The HostRegionId and AccessRegionIds.N must be set to the same value.
        /// </remarks>
        [JsiiProperty(name: "hostRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object HostRegionId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: hostVpcId: The virtual private cloud (VPC) that is associated with the cloud service.
        /// </remarks>
        [JsiiProperty(name: "hostVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object HostVpcId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the cloud service.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }
    }
}
