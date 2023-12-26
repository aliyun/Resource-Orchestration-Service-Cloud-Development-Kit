using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    /// <summary>Properties for defining a `RosApplyConfigToMachineGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-applyconfigtomachinegroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosApplyConfigToMachineGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosApplyConfigToMachineGroupProps")]
    public interface IRosApplyConfigToMachineGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: configName: Apply config to the config name
        /// </remarks>
        [JsiiProperty(name: "configName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ConfigName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: groupName: Apply config to the group name
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

        /// <remarks>
        /// <strong>Property</strong>: projectName: Apply config to the project name.
        /// </remarks>
        [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProjectName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosApplyConfigToMachineGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-applyconfigtomachinegroup
        /// </remarks>
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
            [JsiiProperty(name: "configName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ConfigName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: groupName: Apply config to the group name
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GroupName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: projectName: Apply config to the project name.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProjectName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
