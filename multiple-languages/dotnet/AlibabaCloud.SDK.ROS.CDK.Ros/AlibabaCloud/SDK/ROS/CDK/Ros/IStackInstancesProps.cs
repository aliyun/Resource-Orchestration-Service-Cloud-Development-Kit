using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ros
{
    /// <summary>Properties for defining a `ALIYUN::ROS::StackInstances`.</summary>
    [JsiiInterface(nativeType: typeof(IStackInstancesProps), fullyQualifiedName: "@alicloud/ros-cdk-ros.StackInstancesProps")]
    public interface IStackInstancesProps
    {
        /// <summary>Property regionIds: undefined.</summary>
        [JsiiProperty(name: "regionIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object RegionIds
        {
            get;
        }

        /// <summary>Property stackGroupName: undefined.</summary>
        [JsiiProperty(name: "stackGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StackGroupName
        {
            get;
        }

        /// <summary>Property accountIds: undefined.</summary>
        [JsiiProperty(name: "accountIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccountIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property deploymentTargets: undefined.</summary>
        [JsiiProperty(name: "deploymentTargets", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ros.RosStackInstances.DeploymentTargetsProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeploymentTargets
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property disableRollback: undefined.</summary>
        [JsiiProperty(name: "disableRollback", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DisableRollback
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property operationDescription: undefined.</summary>
        [JsiiProperty(name: "operationDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OperationDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property operationPreferences: undefined.</summary>
        [JsiiProperty(name: "operationPreferences", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ros.RosStackInstances.OperationPreferencesProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OperationPreferences
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property parameterOverrides: undefined.</summary>
        [JsiiProperty(name: "parameterOverrides", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ParameterOverrides
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property retainStacks: undefined.</summary>
        [JsiiProperty(name: "retainStacks", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RetainStacks
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property timeoutInMinutes: undefined.</summary>
        [JsiiProperty(name: "timeoutInMinutes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TimeoutInMinutes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ROS::StackInstances`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IStackInstancesProps), fullyQualifiedName: "@alicloud/ros-cdk-ros.StackInstancesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ros.IStackInstancesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property regionIds: undefined.</summary>
            [JsiiProperty(name: "regionIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object RegionIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property stackGroupName: undefined.</summary>
            [JsiiProperty(name: "stackGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StackGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property accountIds: undefined.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "accountIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? AccountIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property deploymentTargets: undefined.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "deploymentTargets", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ros.RosStackInstances.DeploymentTargetsProperty\"}]}}", isOptional: true)]
            public object? DeploymentTargets
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property disableRollback: undefined.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "disableRollback", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DisableRollback
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property operationDescription: undefined.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "operationDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OperationDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property operationPreferences: undefined.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "operationPreferences", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ros.RosStackInstances.OperationPreferencesProperty\"}]}}", isOptional: true)]
            public object? OperationPreferences
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property parameterOverrides: undefined.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "parameterOverrides", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? ParameterOverrides
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property retainStacks: undefined.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "retainStacks", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RetainStacks
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property timeoutInMinutes: undefined.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "timeoutInMinutes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TimeoutInMinutes
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
