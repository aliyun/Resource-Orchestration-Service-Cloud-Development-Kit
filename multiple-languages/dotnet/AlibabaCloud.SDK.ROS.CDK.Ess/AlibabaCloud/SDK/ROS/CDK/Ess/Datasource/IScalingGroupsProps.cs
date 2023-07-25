using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::ESS::ScalingGroups`.</summary>
    [JsiiInterface(nativeType: typeof(IScalingGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.datasource.ScalingGroupsProps")]
    public interface IScalingGroupsProps
    {
        /// <summary>Property groupType: The type of instances that are managed by the scaling group.</summary>
        /// <remarks>
        /// Valid values:
        /// ECS: the Elastic Compute Service (ECS) instances
        /// ECI: the elastic container instances
        /// Default value: ECS.
        /// </remarks>
        [JsiiProperty(name: "groupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GroupType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property scalingGroupIds: The ID of scaling group that you want to query.Valid values: 1 to 20. The IDs of inactive scaling groups are not displayed in the query results, and no error is reported.</summary>
        [JsiiProperty(name: "scalingGroupIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ScalingGroupIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property scalingGroupNames: The name of scaling group that you want to query.</summary>
        /// <remarks>
        /// Valid values: 1 to 20. The names of inactive scaling groups are not displayed in the query results, and no error is reported.
        /// </remarks>
        [JsiiProperty(name: "scalingGroupNames", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ScalingGroupNames
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::ESS::ScalingGroups`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IScalingGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.datasource.ScalingGroupsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ess.Datasource.IScalingGroupsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property groupType: The type of instances that are managed by the scaling group.</summary>
            /// <remarks>
            /// Valid values:
            /// ECS: the Elastic Compute Service (ECS) instances
            /// ECI: the elastic container instances
            /// Default value: ECS.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "groupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GroupType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scalingGroupIds: The ID of scaling group that you want to query.Valid values: 1 to 20. The IDs of inactive scaling groups are not displayed in the query results, and no error is reported.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "scalingGroupIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ScalingGroupIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scalingGroupNames: The name of scaling group that you want to query.</summary>
            /// <remarks>
            /// Valid values: 1 to 20. The names of inactive scaling groups are not displayed in the query results, and no error is reported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scalingGroupNames", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ScalingGroupNames
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
