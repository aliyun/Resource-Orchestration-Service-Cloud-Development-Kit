using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pai
{
    /// <summary>Properties for defining a `RosWorkspaceResourceFlink`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresourceflink
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosWorkspaceResourceFlinkProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.RosWorkspaceResourceFlinkProps")]
    public interface IRosWorkspaceResourceFlinkProps
    {
        /// <remarks>
        /// <strong>Property</strong>: groupName: Resource group name. If you want to obtain a resource group name, see [ListResources].
        /// </remarks>
        [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GroupName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: resources: Resource List.
        /// </remarks>
        [JsiiProperty(name: "resources", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-pai.RosWorkspaceResourceFlink.ResourcesProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Resources
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: workspaceId: The ID of the workspace to which the workspace belongs.
        /// </remarks>
        [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WorkspaceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: isDefault: Indicates whether it is the default resource. Currently, this parameter only supports the input of true and does not support false.
        /// </remarks>
        [JsiiProperty(name: "isDefault", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IsDefault
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: option: Create behavior that supports the following values:
        /// - CreateAndAttach: Create resource and bind to workspace
        /// - Attach: bind resource to workspace.
        /// </remarks>
        [JsiiProperty(name: "option", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Option
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosWorkspaceResourceFlink`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresourceflink
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosWorkspaceResourceFlinkProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.RosWorkspaceResourceFlinkProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pai.IRosWorkspaceResourceFlinkProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: groupName: Resource group name. If you want to obtain a resource group name, see [ListResources].
            /// </remarks>
            [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: resources: Resource List.
            /// </remarks>
            [JsiiProperty(name: "resources", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-pai.RosWorkspaceResourceFlink.ResourcesProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Resources
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: workspaceId: The ID of the workspace to which the workspace belongs.
            /// </remarks>
            [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WorkspaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: isDefault: Indicates whether it is the default resource. Currently, this parameter only supports the input of true and does not support false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "isDefault", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IsDefault
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: option: Create behavior that supports the following values:
            /// - CreateAndAttach: Create resource and bind to workspace
            /// - Attach: bind resource to workspace.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "option", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Option
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
