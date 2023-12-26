using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms.Datasource
{
    /// <summary>Properties for defining a `RosMonitorGroups`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-monitorgroups
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosMonitorGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.datasource.RosMonitorGroupsProps")]
    public interface IRosMonitorGroupsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dynamicTagRuleId: The ID of the tag rule.
        /// </remarks>
        [JsiiProperty(name: "dynamicTagRuleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DynamicTagRuleId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: groupId: The IDs of the application groups.
        /// </remarks>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: monitorGroupName: The name of the application group.
        /// </remarks>
        [JsiiProperty(name: "monitorGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MonitorGroupName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: type: The type of the application group. Valid values:
        /// custom: a self-managed application group.
        /// ehpc_cluster: an application group that is synchronized from an Elastic High Performance Computing (E-HPC) cluster.
        /// kubernetes: an application group that is synchronized from a Container Service for Kubernetes (ACK) cluster.
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Type
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosMonitorGroups`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-monitorgroups
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosMonitorGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.datasource.RosMonitorGroupsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.Datasource.IRosMonitorGroupsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dynamicTagRuleId: The ID of the tag rule.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dynamicTagRuleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DynamicTagRuleId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: groupId: The IDs of the application groups.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: monitorGroupName: The name of the application group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "monitorGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MonitorGroupName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: type: The type of the application group. Valid values:
            /// custom: a self-managed application group.
            /// ehpc_cluster: an application group that is synchronized from an Elastic High Performance Computing (E-HPC) cluster.
            /// kubernetes: an application group that is synchronized from a Container Service for Kubernetes (ACK) cluster.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Type
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
