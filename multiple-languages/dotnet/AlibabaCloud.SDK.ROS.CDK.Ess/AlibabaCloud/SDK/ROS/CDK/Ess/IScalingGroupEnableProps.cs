using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    /// <summary>Properties for defining a `ALIYUN::ESS::ScalingGroupEnable`.</summary>
    [JsiiInterface(nativeType: typeof(IScalingGroupEnableProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.ScalingGroupEnableProps")]
    public interface IScalingGroupEnableProps
    {
        /// <summary>Property scalingGroupId: The id of operated scaling group.</summary>
        [JsiiProperty(name: "scalingGroupId", typeJson: "{\"primitive\":\"string\"}")]
        string ScalingGroupId
        {
            get;
        }

        /// <summary>Property instanceIds: The id list of ECS instance which will be attached.</summary>
        /// <remarks>
        /// Max support 1000 instances.
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

        /// <summary>Property removeInstanceIds: The id list of ECS instance which will be removed.</summary>
        /// <remarks>
        /// Max support 1000 instances.
        /// </remarks>
        [JsiiProperty(name: "removeInstanceIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RemoveInstanceIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property scalingConfigurationId: The id of scaling configuration which will be activate.</summary>
        [JsiiProperty(name: "scalingConfigurationId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ScalingConfigurationId
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
        [JsiiProperty(name: "scalingRuleAris", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ScalingRuleAris
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property scalingRuleArisExecuteVersion: The change of the property leads to the execution of all the scaling rule aris in ScalingRuleAris.</summary>
        [JsiiProperty(name: "scalingRuleArisExecuteVersion", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? ScalingRuleArisExecuteVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ESS::ScalingGroupEnable`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IScalingGroupEnableProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.ScalingGroupEnableProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ess.IScalingGroupEnableProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property scalingGroupId: The id of operated scaling group.</summary>
            [JsiiProperty(name: "scalingGroupId", typeJson: "{\"primitive\":\"string\"}")]
            public string ScalingGroupId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property instanceIds: The id list of ECS instance which will be attached.</summary>
            /// <remarks>
            /// Max support 1000 instances.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property removeInstanceIds: The id list of ECS instance which will be removed.</summary>
            /// <remarks>
            /// Max support 1000 instances.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "removeInstanceIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RemoveInstanceIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scalingConfigurationId: The id of scaling configuration which will be activate.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "scalingConfigurationId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ScalingConfigurationId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property scalingRuleAris: A list of scaling rule aris which will be executed.</summary>
            /// <remarks>
            /// Max support 10 scaling rule aris.
            /// When creating the resource, all the scaling rule aris in the list will be executed.
            /// When updating the resource, none of scaling rule aris in the list will be executed, unless ScalingRuleArisExecuteVersion is changed.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scalingRuleAris", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ScalingRuleAris
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scalingRuleArisExecuteVersion: The change of the property leads to the execution of all the scaling rule aris in ScalingRuleAris.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "scalingRuleArisExecuteVersion", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? ScalingRuleArisExecuteVersion
            {
                get => GetInstanceProperty<double?>();
            }
        }
    }
}
