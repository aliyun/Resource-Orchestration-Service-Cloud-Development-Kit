using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Brainindustrial
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::BrainIndustrial::PidOrganization`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-brainindustrial.RosPidOrganizationProps")]
    public class RosPidOrganizationProps : AlibabaCloud.SDK.ROS.CDK.Brainindustrial.IRosPidOrganizationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: pidOrganizationName: PidOrganizationName
        /// </remarks>
        [JsiiProperty(name: "pidOrganizationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object PidOrganizationName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: parentPidOrganizationId: ParentPidOrganizationId
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "parentPidOrganizationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ParentPidOrganizationId
        {
            get;
            set;
        }
    }
}
