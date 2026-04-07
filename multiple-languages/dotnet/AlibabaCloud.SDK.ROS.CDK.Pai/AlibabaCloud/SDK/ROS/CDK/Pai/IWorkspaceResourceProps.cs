using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pai
{
    /// <summary>Properties for defining a `WorkspaceResource`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresource
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IWorkspaceResourceProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.WorkspaceResourceProps")]
    public interface IWorkspaceResourceProps
    {
        /// <summary>Property envType: Environment type, possible values: - dev: Development environment.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>prod: Production environment.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "envType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EnvType
        {
            get;
        }

        /// <summary>Property resourceType: The resource types.</summary>
        /// <remarks>
        /// Valid values:
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

        /// <summary>Property workspaceId: The ID of the workspace to which the workspace belongs.</summary>
        [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WorkspaceId
        {
            get;
        }

        /// <summary>Property workspaceResourceName: The resource name.</summary>
        [JsiiProperty(name: "workspaceResourceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WorkspaceResourceName
        {
            get;
        }

        /// <summary>Property groupName: Resource group name.</summary>
        /// <remarks>
        /// If you want to obtain a resource group name, see [ListResources](~~ 449143 ~~).
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

        /// <summary>Property isDefault: Whether it is the default resource, each resource type has a default resource.</summary>
        /// <remarks>
        /// Possible values:
        ///
        /// <list type="bullet">
        /// <description>true: is the default resource.</description>
        /// <description>false: Not the default resource.</description>
        /// </list>
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

        /// <summary>Property spec: Resource configuration, required for public resource groups of DLC, enter the content: {"clusterType": "share"}.</summary>
        [JsiiProperty(name: "spec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Spec
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `WorkspaceResource`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresource
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IWorkspaceResourceProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.WorkspaceResourceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pai.IWorkspaceResourceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property envType: Environment type, possible values: - dev: Development environment.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>prod: Production environment.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "envType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EnvType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property resourceType: The resource types.</summary>
            /// <remarks>
            /// Valid values:
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

            /// <summary>Property workspaceId: The ID of the workspace to which the workspace belongs.</summary>
            [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WorkspaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property workspaceResourceName: The resource name.</summary>
            [JsiiProperty(name: "workspaceResourceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WorkspaceResourceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property groupName: Resource group name.</summary>
            /// <remarks>
            /// If you want to obtain a resource group name, see [ListResources](~~ 449143 ~~).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GroupName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property isDefault: Whether it is the default resource, each resource type has a default resource.</summary>
            /// <remarks>
            /// Possible values:
            ///
            /// <list type="bullet">
            /// <description>true: is the default resource.</description>
            /// <description>false: Not the default resource.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "isDefault", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IsDefault
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property spec: Resource configuration, required for public resource groups of DLC, enter the content: {"clusterType": "share"}.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "spec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Spec
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
