using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    /// <summary>Properties for defining a `ALIYUN::SLS::ApplyConfigToMachineGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sls.RosApplyConfigToMachineGroupProps")]
    public class RosApplyConfigToMachineGroupProps : AlibabaCloud.SDK.ROS.CDK.Sls.IRosApplyConfigToMachineGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: configName: Apply config to the config name
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "configName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ConfigName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: groupName: Apply config to the group name
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? GroupName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: projectName: Apply config to the project name.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ProjectName
        {
            get;
            set;
        }
    }
}
