using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cr
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CR::InstanceEndpointAclPolicy`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cr.InstanceEndpointAclPolicyProps")]
    public class InstanceEndpointAclPolicyProps : AlibabaCloud.SDK.ROS.CDK.Cr.IInstanceEndpointAclPolicyProps
    {
        /// <summary>Property entry: The IP address range that is allowed to access the instance.</summary>
        [JsiiProperty(name: "entry", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Entry
        {
            get;
            set;
        }

        /// <summary>Property instanceId: The ID of the instance.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string InstanceId
        {
            get;
            set;
        }

        /// <summary>Property comment: The description of the entry.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "comment", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Comment
        {
            get;
            set;
        }

        /// <summary>Property endpointType: The type of the endpoint.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "endpointType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? EndpointType
        {
            get;
            set;
        }

        /// <summary>Property moduleName: The name of the module in the instance for which a whitelist is configured.</summary>
        /// <remarks>
        /// Valid
        /// values: Registry and Chart.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "moduleName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ModuleName
        {
            get;
            set;
        }

        /// <summary>Property regionId: Region ID of instance.</summary>
        /// <remarks>
        /// Default is current region.
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
