using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    /// <summary>Properties for defining a `ALIYUN::SLS::ApplyConfigToMachineGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IApplyConfigToMachineGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.ApplyConfigToMachineGroupProps")]
    public interface IApplyConfigToMachineGroupProps
    {
        /// <summary>Property configName: Apply config to the config name.</summary>
        [JsiiProperty(name: "configName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ConfigName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property groupName: Apply config to the group name.</summary>
        [JsiiProperty(name: "groupName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? GroupName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property projectName: Apply config to the project name.</summary>
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
        [JsiiTypeProxy(nativeType: typeof(IApplyConfigToMachineGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.ApplyConfigToMachineGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.IApplyConfigToMachineGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property configName: Apply config to the config name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "configName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ConfigName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property groupName: Apply config to the group name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "groupName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? GroupName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property projectName: Apply config to the project name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "projectName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ProjectName
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
