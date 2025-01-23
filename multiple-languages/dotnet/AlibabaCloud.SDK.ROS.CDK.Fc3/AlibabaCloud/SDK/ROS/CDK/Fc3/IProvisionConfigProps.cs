using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc3
{
    /// <summary>Properties for defining a `ProvisionConfig`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-provisionconfig
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IProvisionConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-fc3.ProvisionConfigProps")]
    public interface IProvisionConfigProps
    {
        /// <summary>Property defaultTarget: The number of target resources to reserve.</summary>
        [JsiiProperty(name: "defaultTarget", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DefaultTarget
        {
            get;
        }

        /// <summary>Property functionName: Function name.</summary>
        [JsiiProperty(name: "functionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FunctionName
        {
            get;
        }

        /// <summary>Property alwaysAllocateCpu: Whether CPU should always be allocated;</summary>
        /// <remarks>
        /// defaults to true.
        /// </remarks>
        [JsiiProperty(name: "alwaysAllocateCpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AlwaysAllocateCpu
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property alwaysAllocateGpu: Whether GPU should always be allocated;</summary>
        /// <remarks>
        /// defaults to true.
        /// </remarks>
        [JsiiProperty(name: "alwaysAllocateGpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AlwaysAllocateGpu
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property qualifier: Function alias or LATEST.</summary>
        [JsiiProperty(name: "qualifier", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Qualifier
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property scheduledActions: Timing policy configuration.</summary>
        [JsiiProperty(name: "scheduledActions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosProvisionConfig.ScheduledActionsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ScheduledActions
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property targetTrackingPolicies: Target tracking policy configuration.</summary>
        [JsiiProperty(name: "targetTrackingPolicies", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosProvisionConfig.TargetTrackingPoliciesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TargetTrackingPolicies
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ProvisionConfig`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-provisionconfig
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IProvisionConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-fc3.ProvisionConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc3.IProvisionConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property defaultTarget: The number of target resources to reserve.</summary>
            [JsiiProperty(name: "defaultTarget", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DefaultTarget
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property functionName: Function name.</summary>
            [JsiiProperty(name: "functionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FunctionName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property alwaysAllocateCpu: Whether CPU should always be allocated;</summary>
            /// <remarks>
            /// defaults to true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "alwaysAllocateCpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AlwaysAllocateCpu
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property alwaysAllocateGpu: Whether GPU should always be allocated;</summary>
            /// <remarks>
            /// defaults to true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "alwaysAllocateGpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AlwaysAllocateGpu
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property qualifier: Function alias or LATEST.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "qualifier", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Qualifier
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scheduledActions: Timing policy configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "scheduledActions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosProvisionConfig.ScheduledActionsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ScheduledActions
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property targetTrackingPolicies: Target tracking policy configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "targetTrackingPolicies", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosProvisionConfig.TargetTrackingPoliciesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? TargetTrackingPolicies
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
