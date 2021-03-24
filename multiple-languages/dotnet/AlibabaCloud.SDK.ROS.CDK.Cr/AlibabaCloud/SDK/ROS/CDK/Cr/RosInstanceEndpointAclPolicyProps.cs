using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cr
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CR::InstanceEndpointAclPolicy`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cr.RosInstanceEndpointAclPolicyProps")]
    public class RosInstanceEndpointAclPolicyProps : AlibabaCloud.SDK.ROS.CDK.Cr.IRosInstanceEndpointAclPolicyProps
    {
        /// <remarks>
        /// <strong>Property</strong>: entry: The IP address range that is allowed to access the instance.
        /// </remarks>
        [JsiiProperty(name: "entry", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Entry
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the instance.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string InstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: comment: The description of the entry.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "comment", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Comment
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: endpointType: The type of the endpoint.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "endpointType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? EndpointType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: moduleName: The name of the module in the instance for which a whitelist is configured. Valid
        /// values: Registry and Chart.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "moduleName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ModuleName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: regionId: Region ID of instance. Default is current region.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "regionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? RegionId
        {
            get;
            set;
        }
    }
}
