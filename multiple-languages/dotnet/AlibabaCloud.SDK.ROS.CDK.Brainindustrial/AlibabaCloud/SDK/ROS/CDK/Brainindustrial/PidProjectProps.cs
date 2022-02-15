using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Brainindustrial
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::BrainIndustrial::PidProject`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-brainindustrial.PidProjectProps")]
    public class PidProjectProps : AlibabaCloud.SDK.ROS.CDK.Brainindustrial.IPidProjectProps
    {
        /// <summary>Property pidOrganizationId: PidOrganizationId.</summary>
        [JsiiProperty(name: "pidOrganizationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object PidOrganizationId
        {
            get;
            set;
        }

        /// <summary>Property pidProjectName: PidProjectName.</summary>
        [JsiiProperty(name: "pidProjectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object PidProjectName
        {
            get;
            set;
        }

        /// <summary>Property pidProjectDesc: PidProjectDesc.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "pidProjectDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? PidProjectDesc
        {
            get;
            set;
        }
    }
}
