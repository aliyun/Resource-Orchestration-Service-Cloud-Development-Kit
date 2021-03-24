using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    /// <summary>Properties for defining a `ALIYUN::SLS::MachineGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sls.MachineGroupProps")]
    public class MachineGroupProps : AlibabaCloud.SDK.ROS.CDK.Sls.IMachineGroupProps
    {
        /// <summary>Property groupAttribute: Group attribute, default is null.</summary>
        /// <remarks>
        /// The object value is groupToic and externalName
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "groupAttribute", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? GroupAttribute
        {
            get;
            set;
        }

        /// <summary>Property groupName: Display name of the group name, the Project only.</summary>
        /// <remarks>
        /// [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "groupName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? GroupName
        {
            get;
            set;
        }

        /// <summary>Property groupType: MachineGroup type, the value is empty or Armory.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "groupType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? GroupType
        {
            get;
            set;
        }

        /// <summary>Property machineIdentifyType: Machine indentify type, the value is 'ip' or 'userdefined'.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "machineIdentifyType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? MachineIdentifyType
        {
            get;
            set;
        }

        /// <summary>Property machineList: The machine tag, the value is ip or userdefined-id.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "machineList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? MachineList
        {
            get;
            set;
        }

        /// <summary>Property projectName: MachineGroup created in project.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "projectName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ProjectName
        {
            get;
            set;
        }
    }
}
