using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CEN::CenRouteService`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cen.CenRouteServiceProps")]
    public class CenRouteServiceProps : AlibabaCloud.SDK.ROS.CDK.Cen.ICenRouteServiceProps
    {
        /// <summary>Property accessRegionId: The region where the cloud service is deployed.</summary>
        [JsiiProperty(name: "accessRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object AccessRegionId
        {
            get;
            set;
        }

        /// <summary>Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.</summary>
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object CenId
        {
            get;
            set;
        }

        /// <summary>Property host: The domain or IP address of the cloud service.</summary>
        [JsiiProperty(name: "host", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Host
        {
            get;
            set;
        }

        /// <summary>Property hostRegionId: The region where the cloud service is deployed.</summary>
        /// <remarks>
        /// You can call the DescribeRegions operation to query region IDs.
        /// Note The HostRegionId and AccessRegionIds.N must be set to the same value.
        /// </remarks>
        [JsiiProperty(name: "hostRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object HostRegionId
        {
            get;
            set;
        }

        /// <summary>Property hostVpcId: The virtual private cloud (VPC) that is associated with the cloud service.</summary>
        [JsiiProperty(name: "hostVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object HostVpcId
        {
            get;
            set;
        }

        /// <summary>Property conflictIgnore: Whether to ignore conflict when creating.</summary>
        /// <remarks>
        /// If true, when the CloudRoute.Conflict error code is encountered during creation, it will be ignored as the creation is successful, and the deletion phase will be skipped.
        /// Default false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "conflictIgnore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ConflictIgnore
        {
            get;
            set;
        }

        /// <summary>Property description: The description of the cloud service.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }
    }
}
