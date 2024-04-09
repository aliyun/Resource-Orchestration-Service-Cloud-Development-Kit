using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    /// <summary>Properties for defining a `ScalingGroupEnable`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scalinggroupenable
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IScalingGroupEnableProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.ScalingGroupEnableProps")]
    public interface IScalingGroupEnableProps
    {
        /// <summary>Property scalingGroupId: The id of operated scaling group.</summary>
        [JsiiProperty(name: "scalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ScalingGroupId
        {
            get;
        }

        /// <summary>Property attachOptions: Options for attaching instances.</summary>
        [JsiiProperty(name: "attachOptions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingGroupEnable.AttachOptionsProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AttachOptions
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property detachOptions: Options for detaching instances.</summary>
        [JsiiProperty(name: "detachOptions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingGroupEnable.DetachOptionsProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DetachOptions
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceIds: The id list of ECS instance which will be attached.</summary>
        /// <remarks>
        /// Max support 1000 instances.
        /// </remarks>
        [JsiiProperty(name: "instanceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property removeInstanceIds: The id list of ECS instance which will be removed.</summary>
        /// <remarks>
        /// Max support 1000 instances.
        /// </remarks>
        [JsiiProperty(name: "removeInstanceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RemoveInstanceIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property scalingConfigurationId: The id of scaling configuration which will be activate.</summary>
        [JsiiProperty(name: "scalingConfigurationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ScalingConfigurationId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property scalingRuleAris: A list of scaling rule aris which will be executed.</summary>
        /// <remarks>
        /// Max support 10 scaling rule aris.
        /// When creating the resource, all the scaling rule aris in the list will be executed.
        /// When updating the resource, none of scaling rule aris in the list will be executed, unless ScalingRuleArisExecuteVersion is changed.
        /// </remarks>
        [JsiiProperty(name: "scalingRuleAris", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ScalingRuleAris
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property scalingRuleArisExecuteVersion: The change of the property leads to the execution of all the scaling rule aris in ScalingRuleAris.</summary>
        [JsiiProperty(name: "scalingRuleArisExecuteVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ScalingRuleArisExecuteVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ScalingGroupEnable`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scalinggroupenable
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IScalingGroupEnableProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.ScalingGroupEnableProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ess.IScalingGroupEnableProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property scalingGroupId: The id of operated scaling group.</summary>
            [JsiiProperty(name: "scalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ScalingGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property attachOptions: Options for attaching instances.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "attachOptions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingGroupEnable.AttachOptionsProperty\"}]}}", isOptional: true)]
            public object? AttachOptions
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property detachOptions: Options for detaching instances.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "detachOptions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingGroupEnable.DetachOptionsProperty\"}]}}", isOptional: true)]
            public object? DetachOptions
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceIds: The id list of ECS instance which will be attached.</summary>
            /// <remarks>
            /// Max support 1000 instances.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? InstanceIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property removeInstanceIds: The id list of ECS instance which will be removed.</summary>
            /// <remarks>
            /// Max support 1000 instances.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "removeInstanceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? RemoveInstanceIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scalingConfigurationId: The id of scaling configuration which will be activate.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "scalingConfigurationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ScalingConfigurationId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scalingRuleAris: A list of scaling rule aris which will be executed.</summary>
            /// <remarks>
            /// Max support 10 scaling rule aris.
            /// When creating the resource, all the scaling rule aris in the list will be executed.
            /// When updating the resource, none of scaling rule aris in the list will be executed, unless ScalingRuleArisExecuteVersion is changed.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scalingRuleAris", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ScalingRuleAris
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scalingRuleArisExecuteVersion: The change of the property leads to the execution of all the scaling rule aris in ScalingRuleAris.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "scalingRuleArisExecuteVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ScalingRuleArisExecuteVersion
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
