using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>Properties for defining a `MonitoringAgent`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-monitoringagent
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IMonitoringAgentProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.MonitoringAgentProps")]
    public interface IMonitoringAgentProps
    {
        /// <summary>Property force: Specifies whether to install the CloudMonitor agent.</summary>
        /// <remarks>
        /// Valid values:
        /// true (default value): yes
        /// false: no
        /// </remarks>
        [JsiiProperty(name: "force", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Force
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property installCommand: Specifies whether to install the CloudMonitor agent on all ECS instances that belong to the current Alibaba Cloud account.</summary>
        /// <remarks>
        /// Valid values:
        /// onlyInstallNotHasAgent: installs the latest version of the CloudMonitor agent only on ECS instances on which the agent is not installed.
        /// onlyUpgradeAgent: upgrades the CloudMonitor agent to the latest version only for ECS instances on which an earlier version of the agent is installed.
        /// installAndUpgrade: installs the latest version of the CloudMonitor agent on ECS instances on which the agent is not installed, and upgrades the CloudMonitor agent to the latest version for ECS instances on which an earlier version of the agent is installed.
        /// Note If you set the InstallCommand parameter, the InstanceIds parameter does not take effect.
        /// </remarks>
        [JsiiProperty(name: "installCommand", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstallCommand
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceIds: Alibaba Cloud host ID.</summary>
        /// <remarks>
        /// The range of n: 1 ~ 10.
        /// Explain that InstallCommand and InstanceIds must be selected one by one.
        /// </remarks>
        [JsiiProperty(name: "instanceIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `MonitoringAgent`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-monitoringagent
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IMonitoringAgentProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.MonitoringAgentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.IMonitoringAgentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property force: Specifies whether to install the CloudMonitor agent.</summary>
            /// <remarks>
            /// Valid values:
            /// true (default value): yes
            /// false: no
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "force", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Force
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property installCommand: Specifies whether to install the CloudMonitor agent on all ECS instances that belong to the current Alibaba Cloud account.</summary>
            /// <remarks>
            /// Valid values:
            /// onlyInstallNotHasAgent: installs the latest version of the CloudMonitor agent only on ECS instances on which the agent is not installed.
            /// onlyUpgradeAgent: upgrades the CloudMonitor agent to the latest version only for ECS instances on which an earlier version of the agent is installed.
            /// installAndUpgrade: installs the latest version of the CloudMonitor agent on ECS instances on which the agent is not installed, and upgrades the CloudMonitor agent to the latest version for ECS instances on which an earlier version of the agent is installed.
            /// Note If you set the InstallCommand parameter, the InstanceIds parameter does not take effect.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "installCommand", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstallCommand
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceIds: Alibaba Cloud host ID.</summary>
            /// <remarks>
            /// The range of n: 1 ~ 10.
            /// Explain that InstallCommand and InstanceIds must be selected one by one.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceIds
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
