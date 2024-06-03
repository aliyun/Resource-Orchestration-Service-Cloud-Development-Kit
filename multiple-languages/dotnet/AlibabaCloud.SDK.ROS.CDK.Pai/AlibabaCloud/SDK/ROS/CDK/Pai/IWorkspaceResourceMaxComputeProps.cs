using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pai
{
    /// <summary>Properties for defining a `WorkspaceResourceMaxCompute`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresourcemaxcompute
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IWorkspaceResourceMaxComputeProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.WorkspaceResourceMaxComputeProps")]
    public interface IWorkspaceResourceMaxComputeProps
    {
        /// <summary>Property groupName: Resource group name.</summary>
        /// <remarks>
        /// If you want to obtain a resource group name.
        /// </remarks>
        [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GroupName
        {
            get;
        }

        /// <summary>Property resources: Resource List.</summary>
        [JsiiProperty(name: "resources", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-pai.RosWorkspaceResourceMaxCompute.ResourcesProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Resources
        {
            get;
        }

        /// <summary>Property workspaceId: The ID of the workspace to which the workspace belongs.</summary>
        [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WorkspaceId
        {
            get;
        }

        /// <summary>Property isDefault: Indicates whether it is the default resource.</summary>
        /// <remarks>
        /// Currently, this parameter only supports the input of true and does not support false.
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

        /// <summary>Property option: Create behavior that supports the following values: - CreateAndAttach: Create resource and bind to workspace - Attach: bind resource to workspace.</summary>
        [JsiiProperty(name: "option", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Option
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `WorkspaceResourceMaxCompute`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresourcemaxcompute
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IWorkspaceResourceMaxComputeProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.WorkspaceResourceMaxComputeProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pai.IWorkspaceResourceMaxComputeProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property groupName: Resource group name.</summary>
            /// <remarks>
            /// If you want to obtain a resource group name.
            /// </remarks>
            [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property resources: Resource List.</summary>
            [JsiiProperty(name: "resources", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-pai.RosWorkspaceResourceMaxCompute.ResourcesProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Resources
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property workspaceId: The ID of the workspace to which the workspace belongs.</summary>
            [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WorkspaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property isDefault: Indicates whether it is the default resource.</summary>
            /// <remarks>
            /// Currently, this parameter only supports the input of true and does not support false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "isDefault", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IsDefault
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property option: Create behavior that supports the following values: - CreateAndAttach: Create resource and bind to workspace - Attach: bind resource to workspace.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "option", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Option
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
