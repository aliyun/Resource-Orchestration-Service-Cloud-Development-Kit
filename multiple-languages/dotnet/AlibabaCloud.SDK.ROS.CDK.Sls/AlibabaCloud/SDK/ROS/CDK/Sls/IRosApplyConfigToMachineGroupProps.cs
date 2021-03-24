using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    /// <summary>Properties for defining a `ALIYUN::SLS::ApplyConfigToMachineGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IRosApplyConfigToMachineGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosApplyConfigToMachineGroupProps")]
    public interface IRosApplyConfigToMachineGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: configName: Apply config to the config name
        /// </remarks>
        [JsiiProperty(name: "configName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ConfigName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: groupName: Apply config to the group name
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
        /// <strong>Property</strong>: projectName: Apply config to the project name.
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

        /// <summary>Properties for defining a `ALIYUN::SLS::ApplyConfigToMachineGroup`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosApplyConfigToMachineGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosApplyConfigToMachineGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.IRosApplyConfigToMachineGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: configName: Apply config to the config name
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "configName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ConfigName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: groupName: Apply config to the group name
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "groupName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? GroupName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: projectName: Apply config to the project name.
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
