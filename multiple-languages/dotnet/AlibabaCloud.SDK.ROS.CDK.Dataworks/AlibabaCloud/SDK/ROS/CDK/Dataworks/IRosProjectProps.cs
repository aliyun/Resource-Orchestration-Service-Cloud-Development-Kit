using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dataworks
{
    /// <summary>Properties for defining a `RosProject`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-project
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosProjectProps), fullyQualifiedName: "@alicloud/ros-cdk-dataworks.RosProjectProps")]
    public interface IRosProjectProps
    {
        /// <remarks>
        /// <strong>Property</strong>: projectIdentifier: The name of the workspace. The name can contain letters, digits, and underscores (_) and must start with a letter or digit.
        /// </remarks>
        [JsiiProperty(name: "projectIdentifier", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProjectIdentifier
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: disableDevelopment: Specifies whether to disable the Development role. Valid values:
        /// false: enables the Development role.
        /// true: disables the Development role.
        /// Default value: false.
        /// </remarks>
        [JsiiProperty(name: "disableDevelopment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DisableDevelopment
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: isAllowDownload: Specifies whether query result download from DataStudio is allowed. Valid values:
        /// true: allowed
        /// false: not allowed
        /// Default value: true.
        /// </remarks>
        [JsiiProperty(name: "isAllowDownload", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IsAllowDownload
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: projectDescription: The description of the workspace. If not provided, it is the same as ProjectIdentifier.
        /// </remarks>
        [JsiiProperty(name: "projectDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProjectDescription
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: projectMode: The mode of the workspace. For more information about the differences between the modes of workspaces, see Differences between workspaces in basic mode and workspaces in standard mode. Valid values:
        /// 2: basic mode
        /// 3: standard mode
        /// Default value: 2.
        /// </remarks>
        [JsiiProperty(name: "projectMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProjectMode
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: projectName: The display name of the workspace. If not provided, it is the same as ProjectIdentifier.
        /// </remarks>
        [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProjectName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to workspace. Max support 20 tags to add during create workspace. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-dataworks.RosProject.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Dataworks.RosProject.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosProject`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-project
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosProjectProps), fullyQualifiedName: "@alicloud/ros-cdk-dataworks.RosProjectProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dataworks.IRosProjectProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: projectIdentifier: The name of the workspace. The name can contain letters, digits, and underscores (_) and must start with a letter or digit.
            /// </remarks>
            [JsiiProperty(name: "projectIdentifier", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProjectIdentifier
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: disableDevelopment: Specifies whether to disable the Development role. Valid values:
            /// false: enables the Development role.
            /// true: disables the Development role.
            /// Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "disableDevelopment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DisableDevelopment
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: isAllowDownload: Specifies whether query result download from DataStudio is allowed. Valid values:
            /// true: allowed
            /// false: not allowed
            /// Default value: true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "isAllowDownload", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IsAllowDownload
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: projectDescription: The description of the workspace. If not provided, it is the same as ProjectIdentifier.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "projectDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProjectDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: projectMode: The mode of the workspace. For more information about the differences between the modes of workspaces, see Differences between workspaces in basic mode and workspaces in standard mode. Valid values:
            /// 2: basic mode
            /// 3: standard mode
            /// Default value: 2.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "projectMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProjectMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: projectName: The display name of the workspace. If not provided, it is the same as ProjectIdentifier.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProjectName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tags to attach to workspace. Max support 20 tags to add during create workspace. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-dataworks.RosProject.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Dataworks.RosProject.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Dataworks.RosProject.ITagsProperty[]?>();
            }
        }
    }
}
