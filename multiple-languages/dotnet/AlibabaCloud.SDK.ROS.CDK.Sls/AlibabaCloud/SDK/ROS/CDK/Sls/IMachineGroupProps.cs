using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    /// <summary>Properties for defining a `MachineGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-machinegroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IMachineGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.MachineGroupProps")]
    public interface IMachineGroupProps
    {
        /// <summary>Property groupAttribute: Group attribute, default is null.</summary>
        /// <remarks>
        /// The object value is groupToic and externalName
        /// </remarks>
        [JsiiProperty(name: "groupAttribute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GroupAttribute
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property groupName: Display name of the group name, the Project only.</summary>
        /// <remarks>
        /// [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        /// </remarks>
        [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GroupName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property groupType: MachineGroup type, the value is empty or Armory.</summary>
        [JsiiProperty(name: "groupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GroupType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property machineIdentifyType: Machine indentify type, the value is 'ip' or 'userdefined'.</summary>
        [JsiiProperty(name: "machineIdentifyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MachineIdentifyType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property machineList: The machine tag, the value is ip or userdefined-id.</summary>
        [JsiiProperty(name: "machineList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MachineList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property projectName: MachineGroup created in project.</summary>
        [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProjectName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `MachineGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-machinegroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IMachineGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.MachineGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.IMachineGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property groupAttribute: Group attribute, default is null.</summary>
            /// <remarks>
            /// The object value is groupToic and externalName
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "groupAttribute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GroupAttribute
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property groupName: Display name of the group name, the Project only.</summary>
            /// <remarks>
            /// [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GroupName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property groupType: MachineGroup type, the value is empty or Armory.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "groupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GroupType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property machineIdentifyType: Machine indentify type, the value is 'ip' or 'userdefined'.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "machineIdentifyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MachineIdentifyType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property machineList: The machine tag, the value is ip or userdefined-id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "machineList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MachineList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property projectName: MachineGroup created in project.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProjectName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
