using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::ESS::ScalingGroups`.</summary>
    [JsiiInterface(nativeType: typeof(IRosScalingGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.datasource.RosScalingGroupsProps")]
    public interface IRosScalingGroupsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: groupType: The type of instances that are managed by the scaling group. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: scalingGroupIds: The ID of scaling group that you want to query.Valid values: 1 to 20. The IDs of inactive scaling groups are not displayed in the query results, and no error is reported.
        /// </remarks>
        [JsiiProperty(name: "scalingGroupIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ScalingGroupIds
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: scalingGroupNames: The name of scaling group that you want to query. Valid values: 1 to 20. The names of inactive scaling groups are not displayed in the query results, and no error is reported.
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
        [JsiiTypeProxy(nativeType: typeof(IRosScalingGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.datasource.RosScalingGroupsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ess.Datasource.IRosScalingGroupsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: groupType: The type of instances that are managed by the scaling group. Valid values:
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

            /// <remarks>
            /// <strong>Property</strong>: scalingGroupIds: The ID of scaling group that you want to query.Valid values: 1 to 20. The IDs of inactive scaling groups are not displayed in the query results, and no error is reported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scalingGroupIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ScalingGroupIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: scalingGroupNames: The name of scaling group that you want to query. Valid values: 1 to 20. The names of inactive scaling groups are not displayed in the query results, and no error is reported.
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
