using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    /// <summary>Properties for defining a `ALIYUN::SLS::ApplyConfigToMachineGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sls.ApplyConfigToMachineGroupProps")]
    public class ApplyConfigToMachineGroupProps : AlibabaCloud.SDK.ROS.CDK.Sls.IApplyConfigToMachineGroupProps
    {
        /// <summary>Property configName: Apply config to the config name.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "configName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ConfigName
        {
            get;
            set;
        }

        /// <summary>Property groupName: Apply config to the group name.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? GroupName
        {
            get;
            set;
        }

        /// <summary>Property projectName: Apply config to the project name.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ProjectName
        {
            get;
            set;
        }
    }
}
