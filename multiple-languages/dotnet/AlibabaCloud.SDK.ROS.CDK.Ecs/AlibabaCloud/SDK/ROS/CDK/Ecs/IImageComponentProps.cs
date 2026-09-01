using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ImageComponent`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-imagecomponent
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IImageComponentProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.ImageComponentProps")]
    public interface IImageComponentProps
    {
        /// <summary>Property content: The content of the image component.</summary>
        /// <remarks>
        /// The image component consists of multiple
        /// commands. The command content cannot exceed 16 KB in size. For information about
        /// the commands supported by Image Builder and the formats of the commands, see
        /// <a href="">Commands supported by Image Builder</a>.
        /// </remarks>
        [JsiiProperty(name: "content", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Content
        {
            get;
        }

        /// <summary>Property componentType: The type of the image component.</summary>
        /// <remarks>
        /// Only image building components and image test
        /// components are supported.
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Build</description>
        /// <description>Test
        /// Default value: Build.</description>
        /// </list>
        ///
        ///     Image building components can be used only in image building templates. Image
        ///     test components can be used only in image test templates.
        /// </remarks>
        [JsiiProperty(name: "componentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ComponentType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description.</summary>
        /// <remarks>
        /// The description must be 2 to 256 characters in length and cannot start with http:// or https://.
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

        /// <summary>Property name: The component name.</summary>
        /// <remarks>
        /// The name must be 2 to 128 characters in length. The name must start with a letter but cannot start with http:// or https://.The name can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
        /// Note If you do not configure Name, the return value of ImageComponentId is used.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Name
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property systemType: The type of the operating system supported by the image component.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Linux</description>
        /// <description>Windows
        /// Default value: Linux.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "systemType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SystemType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags:.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosImageComponent.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Ecs.RosImageComponent.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ImageComponent`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-imagecomponent
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IImageComponentProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.ImageComponentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IImageComponentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property content: The content of the image component.</summary>
            /// <remarks>
            /// The image component consists of multiple
            /// commands. The command content cannot exceed 16 KB in size. For information about
            /// the commands supported by Image Builder and the formats of the commands, see
            /// <a href="">Commands supported by Image Builder</a>.
            /// </remarks>
            [JsiiProperty(name: "content", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Content
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property componentType: The type of the image component.</summary>
            /// <remarks>
            /// Only image building components and image test
            /// components are supported.
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>Build</description>
            /// <description>Test
            /// Default value: Build.</description>
            /// </list>
            ///
            ///     Image building components can be used only in image building templates. Image
            ///     test components can be used only in image test templates.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "componentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ComponentType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description.</summary>
            /// <remarks>
            /// The description must be 2 to 256 characters in length and cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property name: The component name.</summary>
            /// <remarks>
            /// The name must be 2 to 128 characters in length. The name must start with a letter but cannot start with http:// or https://.The name can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
            /// Note If you do not configure Name, the return value of ImageComponentId is used.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property systemType: The type of the operating system supported by the image component.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>Linux</description>
            /// <description>Windows
            /// Default value: Linux.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "systemType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SystemType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosImageComponent.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.RosImageComponent.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.RosImageComponent.ITagsProperty[]?>();
            }
        }
    }
}
