using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Brainindustrial
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::BrainIndustrial::PidOrganization`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-brainindustrial.PidOrganizationProps")]
    public class PidOrganizationProps : AlibabaCloud.SDK.ROS.CDK.Brainindustrial.IPidOrganizationProps
    {
        /// <summary>Property pidOrganizationName: PidOrganizationName.</summary>
        [JsiiProperty(name: "pidOrganizationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object PidOrganizationName
        {
            get;
            set;
        }

        /// <summary>Property parentPidOrganizationId: ParentPidOrganizationId.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "parentPidOrganizationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ParentPidOrganizationId
        {
            get;
            set;
        }
    }
}
