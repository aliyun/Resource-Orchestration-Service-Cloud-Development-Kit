using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess.Datasource
{
    /// <summary>Properties for defining a `ScalingConfigurations`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingconfigurations
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IScalingConfigurationsProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.datasource.ScalingConfigurationsProps")]
    public interface IScalingConfigurationsProps
    {
        /// <summary>Property scalingConfigurationIds: The ID of scaling configuration that you want to query.</summary>
        /// <remarks>
        /// Valid values : 1 to 10. The IDs of active and inactive scaling configurations are displayed in the query results, and can be differentiated by LifecycleState.
        /// </remarks>
        [JsiiProperty(name: "scalingConfigurationIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ScalingConfigurationIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property scalingConfigurationNames: The name of scaling configuration that you want to query.</summary>
        /// <remarks>
        /// Valid values : 1 to 10. The names of inactive scaling configurations are not displayed in the query results, and no error is reported.
        /// </remarks>
        [JsiiProperty(name: "scalingConfigurationNames", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ScalingConfigurationNames
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property scalingGroupId: The ID of the scaling group.</summary>
        /// <remarks>
        /// You can use the ID to query all scaling configurations in the scaling group.
        /// </remarks>
        [JsiiProperty(name: "scalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ScalingGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ScalingConfigurations`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingconfigurations
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IScalingConfigurationsProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.datasource.ScalingConfigurationsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ess.Datasource.IScalingConfigurationsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property scalingConfigurationIds: The ID of scaling configuration that you want to query.</summary>
            /// <remarks>
            /// Valid values : 1 to 10. The IDs of active and inactive scaling configurations are displayed in the query results, and can be differentiated by LifecycleState.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scalingConfigurationIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ScalingConfigurationIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scalingConfigurationNames: The name of scaling configuration that you want to query.</summary>
            /// <remarks>
            /// Valid values : 1 to 10. The names of inactive scaling configurations are not displayed in the query results, and no error is reported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scalingConfigurationNames", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ScalingConfigurationNames
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scalingGroupId: The ID of the scaling group.</summary>
            /// <remarks>
            /// You can use the ID to query all scaling configurations in the scaling group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ScalingGroupId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
