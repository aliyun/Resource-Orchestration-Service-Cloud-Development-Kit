using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Brainindustrial
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::BrainIndustrial::PidProject`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-brainindustrial.RosPidProjectProps")]
    public class RosPidProjectProps : AlibabaCloud.SDK.ROS.CDK.Brainindustrial.IRosPidProjectProps
    {
        /// <remarks>
        /// <strong>Property</strong>: pidOrganizationId: PidOrganizationId
        /// </remarks>
        [JsiiProperty(name: "pidOrganizationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object PidOrganizationId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: pidProjectName: PidProjectName
        /// </remarks>
        [JsiiProperty(name: "pidProjectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object PidProjectName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: pidProjectDesc: PidProjectDesc
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "pidProjectDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? PidProjectDesc
        {
            get;
            set;
        }
    }
}
