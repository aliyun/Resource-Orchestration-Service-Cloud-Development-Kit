using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ros
{
    /// <summary>Properties for defining a `RosStackInstances`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-stackinstances
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosStackInstancesProps), fullyQualifiedName: "@alicloud/ros-cdk-ros.RosStackInstancesProps")]
    public interface IRosStackInstancesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: regionIds: undefined
        /// </remarks>
        [JsiiProperty(name: "regionIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object RegionIds
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: stackGroupName: undefined
        /// </remarks>
        [JsiiProperty(name: "stackGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StackGroupName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: accountIds: undefined
        /// </remarks>
        [JsiiProperty(name: "accountIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccountIds
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: deploymentTargets: undefined
        /// </remarks>
        [JsiiProperty(name: "deploymentTargets", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ros.RosStackInstances.DeploymentTargetsProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeploymentTargets
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: disableRollback: undefined
        /// </remarks>
        [JsiiProperty(name: "disableRollback", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DisableRollback
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: operationDescription: undefined
        /// </remarks>
        [JsiiProperty(name: "operationDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OperationDescription
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: operationPreferences: undefined
        /// </remarks>
        [JsiiProperty(name: "operationPreferences", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ros.RosStackInstances.OperationPreferencesProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OperationPreferences
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: parameterOverrides: undefined
        /// </remarks>
        [JsiiProperty(name: "parameterOverrides", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ParameterOverrides
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: retainStacks: undefined
        /// </remarks>
        [JsiiProperty(name: "retainStacks", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RetainStacks
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: timeoutInMinutes: undefined
        /// </remarks>
        [JsiiProperty(name: "timeoutInMinutes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TimeoutInMinutes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosStackInstances`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-stackinstances
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosStackInstancesProps), fullyQualifiedName: "@alicloud/ros-cdk-ros.RosStackInstancesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ros.IRosStackInstancesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: regionIds: undefined
            /// </remarks>
            [JsiiProperty(name: "regionIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object RegionIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: stackGroupName: undefined
            /// </remarks>
            [JsiiProperty(name: "stackGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StackGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: accountIds: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accountIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? AccountIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: deploymentTargets: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deploymentTargets", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ros.RosStackInstances.DeploymentTargetsProperty\"}]}}", isOptional: true)]
            public object? DeploymentTargets
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: disableRollback: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "disableRollback", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DisableRollback
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: operationDescription: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "operationDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OperationDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: operationPreferences: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "operationPreferences", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ros.RosStackInstances.OperationPreferencesProperty\"}]}}", isOptional: true)]
            public object? OperationPreferences
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: parameterOverrides: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "parameterOverrides", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? ParameterOverrides
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: retainStacks: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "retainStacks", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RetainStacks
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: timeoutInMinutes: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "timeoutInMinutes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TimeoutInMinutes
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
