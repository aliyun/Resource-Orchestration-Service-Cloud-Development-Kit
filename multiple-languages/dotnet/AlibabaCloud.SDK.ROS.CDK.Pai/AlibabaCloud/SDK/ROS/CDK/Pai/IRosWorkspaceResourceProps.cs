using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pai
{
    /// <summary>Properties for defining a `RosWorkspaceResource`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresource
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosWorkspaceResourceProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.RosWorkspaceResourceProps")]
    public interface IRosWorkspaceResourceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: envType: Environment type, possible values:
        /// - dev: Development environment.
        /// - prod: Production environment.
        /// </remarks>
        [JsiiProperty(name: "envType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EnvType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceType: The resource types. Valid values:
        /// MaxCompute
        /// ECS
        /// Lingjun
        /// ACS
        /// FLINK
        /// </remarks>
        [JsiiProperty(name: "resourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ResourceType
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
        /// <strong>Property</strong>: workspaceResourceName: The resource name.
        /// </remarks>
        [JsiiProperty(name: "workspaceResourceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WorkspaceResourceName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: groupName: Resource group name. If you want to obtain a resource group name, see [ListResources](~~ 449143 ~~).
        /// </remarks>
        [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GroupName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: isDefault: Whether it is the default resource, each resource type has a default resource. Possible values:
        /// - true: is the default resource.
        /// - false: Not the default resource.
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
        /// <strong>Property</strong>: spec: Resource configuration, required for public resource groups of DLC, enter the content: {"clusterType": "share"}.
        /// </remarks>
        [JsiiProperty(name: "spec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Spec
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosWorkspaceResource`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresource
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosWorkspaceResourceProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.RosWorkspaceResourceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pai.IRosWorkspaceResourceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: envType: Environment type, possible values:
            /// - dev: Development environment.
            /// - prod: Production environment.
            /// </remarks>
            [JsiiProperty(name: "envType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EnvType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceType: The resource types. Valid values:
            /// MaxCompute
            /// ECS
            /// Lingjun
            /// ACS
            /// FLINK
            /// </remarks>
            [JsiiProperty(name: "resourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ResourceType
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
            /// <strong>Property</strong>: workspaceResourceName: The resource name.
            /// </remarks>
            [JsiiProperty(name: "workspaceResourceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WorkspaceResourceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: groupName: Resource group name. If you want to obtain a resource group name, see [ListResources](~~ 449143 ~~).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GroupName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: isDefault: Whether it is the default resource, each resource type has a default resource. Possible values:
            /// - true: is the default resource.
            /// - false: Not the default resource.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "isDefault", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IsDefault
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: spec: Resource configuration, required for public resource groups of DLC, enter the content: {"clusterType": "share"}.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Spec
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
