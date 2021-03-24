using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    /// <summary>Properties for defining a `ALIYUN::SLS::MachineGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IRosMachineGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosMachineGroupProps")]
    public interface IRosMachineGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: groupAttribute: Group attribute, default is null. The object value is groupToic and externalName
        /// </remarks>
        [JsiiProperty(name: "groupAttribute", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? GroupAttribute
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: groupName: Display name of the group name, the Project only. [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        /// </remarks>
        [JsiiProperty(name: "groupName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? GroupName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: groupType: MachineGroup type, the value is empty or Armory
        /// </remarks>
        [JsiiProperty(name: "groupType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? GroupType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: machineIdentifyType: Machine indentify type, the value is 'ip' or 'userdefined'
        /// </remarks>
        [JsiiProperty(name: "machineIdentifyType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? MachineIdentifyType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: machineList: The machine tag, the value is ip or userdefined-id.
        /// </remarks>
        [JsiiProperty(name: "machineList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MachineList
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: projectName: MachineGroup created in project.
        /// </remarks>
        [JsiiProperty(name: "projectName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ProjectName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::SLS::MachineGroup`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosMachineGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosMachineGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.IRosMachineGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: groupAttribute: Group attribute, default is null. The object value is groupToic and externalName
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "groupAttribute", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? GroupAttribute
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: groupName: Display name of the group name, the Project only. [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "groupName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? GroupName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: groupType: MachineGroup type, the value is empty or Armory
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "groupType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? GroupType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: machineIdentifyType: Machine indentify type, the value is 'ip' or 'userdefined'
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "machineIdentifyType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? MachineIdentifyType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: machineList: The machine tag, the value is ip or userdefined-id.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "machineList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MachineList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: projectName: MachineGroup created in project.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "projectName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ProjectName
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
