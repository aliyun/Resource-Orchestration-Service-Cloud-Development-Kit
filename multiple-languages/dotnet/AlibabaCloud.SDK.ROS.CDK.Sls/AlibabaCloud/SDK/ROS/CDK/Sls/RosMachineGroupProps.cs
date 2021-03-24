using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    /// <summary>Properties for defining a `ALIYUN::SLS::MachineGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sls.RosMachineGroupProps")]
    public class RosMachineGroupProps : AlibabaCloud.SDK.ROS.CDK.Sls.IRosMachineGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: groupAttribute: Group attribute, default is null. The object value is groupToic and externalName
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "groupAttribute", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? GroupAttribute
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: groupName: Display name of the group name, the Project only. [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "groupName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? GroupName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: groupType: MachineGroup type, the value is empty or Armory
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "groupType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? GroupType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: machineIdentifyType: Machine indentify type, the value is 'ip' or 'userdefined'
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "machineIdentifyType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? MachineIdentifyType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: machineList: The machine tag, the value is ip or userdefined-id.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "machineList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? MachineList
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: projectName: MachineGroup created in project.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "projectName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ProjectName
        {
            get;
            set;
        }
    }
}
