using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ice
{
    /// <summary>Properties for defining a `Category`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-category
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ICategoryProps), fullyQualifiedName: "@alicloud/ros-cdk-ice.CategoryProps")]
    public interface ICategoryProps
    {
        /// <summary>Property cateName: The category name.</summary>
        /// <remarks>
        /// The value can be up to 64 bytes in length.
        /// The value must be encoded in UTF-8.
        /// </remarks>
        [JsiiProperty(name: "cateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CateName
        {
            get;
        }

        /// <summary>Property parentId: The ID of the parent category.</summary>
        [JsiiProperty(name: "parentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ParentId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property type: The type of the category.</summary>
        /// <remarks>
        /// Valid values:
        /// default: audio, video, and image files. This is the default value.
        /// material: short video materials.
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

        /// <summary>Properties for defining a `Category`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-category
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ICategoryProps), fullyQualifiedName: "@alicloud/ros-cdk-ice.CategoryProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ice.ICategoryProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property cateName: The category name.</summary>
            /// <remarks>
            /// The value can be up to 64 bytes in length.
            /// The value must be encoded in UTF-8.
            /// </remarks>
            [JsiiProperty(name: "cateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CateName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property parentId: The ID of the parent category.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "parentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ParentId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property type: The type of the category.</summary>
            /// <remarks>
            /// Valid values:
            /// default: audio, video, and image files. This is the default value.
            /// material: short video materials.
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
