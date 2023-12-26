using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Devops
{
    /// <summary>Properties for defining a `RosVariableGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-variablegroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosVariableGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-devops.RosVariableGroupProps")]
    public interface IRosVariableGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: name: The name of variable group.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
        /// </remarks>
        [JsiiProperty(name: "organizationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object OrganizationId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: variables: Variables information.
        /// </remarks>
        [JsiiProperty(name: "variables", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-devops.RosVariableGroup.VariablesProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Variables
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of variable group.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosVariableGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-variablegroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosVariableGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-devops.RosVariableGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Devops.IRosVariableGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of variable group.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
            /// </remarks>
            [JsiiProperty(name: "organizationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object OrganizationId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: variables: Variables information.
            /// </remarks>
            [JsiiProperty(name: "variables", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-devops.RosVariableGroup.VariablesProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Variables
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of variable group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
