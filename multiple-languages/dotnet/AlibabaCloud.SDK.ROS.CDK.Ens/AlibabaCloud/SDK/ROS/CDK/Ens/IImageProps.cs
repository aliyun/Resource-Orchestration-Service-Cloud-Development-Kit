using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ens
{
    /// <summary>Properties for defining a `Image`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-image
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IImageProps), fullyQualifiedName: "@alicloud/ros-cdk-ens.ImageProps")]
    public interface IImageProps
    {
        /// <summary>Property imageName: The name of the image.</summary>
        /// <remarks>
        /// The name must be 2 to 128 characters in length.
        /// The name can contain letters, digits, colons (:), underscores (<em>), and hyphens (-).
        /// It must start with a letter but cannot start with http:// or https://.
        /// The name can contain letters, digits, colons (:), underscores (</em>), and hyphens (-).
        /// </remarks>
        [JsiiProperty(name: "imageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ImageName
        {
            get;
        }

        /// <summary>Property deleteAfterImageUpload: Whether the instance is automatically released after the image is packaged and uploaded successfully, only the build machine is supported.</summary>
        /// <remarks>
        /// Optional values:
        /// true: When the instance is released, the image is released together with the instance.
        /// false: When the instance is released, the image is retained and is not released together with the instance.
        /// Empty means false by default.
        /// </remarks>
        [JsiiProperty(name: "deleteAfterImageUpload", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeleteAfterImageUpload
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceId: The ID of the instance corresponding to the image.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Image`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-image
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IImageProps), fullyQualifiedName: "@alicloud/ros-cdk-ens.ImageProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ens.IImageProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property imageName: The name of the image.</summary>
            /// <remarks>
            /// The name must be 2 to 128 characters in length.
            /// The name can contain letters, digits, colons (:), underscores (<em>), and hyphens (-).
            /// It must start with a letter but cannot start with http:// or https://.
            /// The name can contain letters, digits, colons (:), underscores (</em>), and hyphens (-).
            /// </remarks>
            [JsiiProperty(name: "imageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ImageName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property deleteAfterImageUpload: Whether the instance is automatically released after the image is packaged and uploaded successfully, only the build machine is supported.</summary>
            /// <remarks>
            /// Optional values:
            /// true: When the instance is released, the image is released together with the instance.
            /// false: When the instance is released, the image is retained and is not released together with the instance.
            /// Empty means false by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deleteAfterImageUpload", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeleteAfterImageUpload
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceId: The ID of the instance corresponding to the image.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
