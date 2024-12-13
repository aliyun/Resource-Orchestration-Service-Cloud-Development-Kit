using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ice
{
    /// <summary>Properties for defining a `RosCategory`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-category
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosCategoryProps), fullyQualifiedName: "@alicloud/ros-cdk-ice.RosCategoryProps")]
    public interface IRosCategoryProps
    {
        /// <remarks>
        /// <strong>Property</strong>: cateName: The category name.
        /// The value can be up to 64 bytes in length.
        /// The value must be encoded in UTF-8.
        /// </remarks>
        [JsiiProperty(name: "cateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CateName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: parentId: The ID of the parent category.
        /// </remarks>
        [JsiiProperty(name: "parentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ParentId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: type: The type of the category. Valid values:
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

        /// <summary>Properties for defining a `RosCategory`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-category
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosCategoryProps), fullyQualifiedName: "@alicloud/ros-cdk-ice.RosCategoryProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ice.IRosCategoryProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: cateName: The category name.
            /// The value can be up to 64 bytes in length.
            /// The value must be encoded in UTF-8.
            /// </remarks>
            [JsiiProperty(name: "cateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CateName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: parentId: The ID of the parent category.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "parentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ParentId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: type: The type of the category. Valid values:
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
