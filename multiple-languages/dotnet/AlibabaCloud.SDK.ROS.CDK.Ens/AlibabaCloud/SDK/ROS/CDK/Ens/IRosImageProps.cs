using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ens
{
    /// <summary>Properties for defining a `RosImage`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-image
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosImageProps), fullyQualifiedName: "@alicloud/ros-cdk-ens.RosImageProps")]
    public interface IRosImageProps
    {
        /// <remarks>
        /// <strong>Property</strong>: imageName: The name of the image. The name must be 2 to 128 characters in length.
        /// The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
        /// It must start with a letter but cannot start with http:\/\/ or https:\/\/.
        /// The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
        /// </remarks>
        [JsiiProperty(name: "imageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ImageName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: deleteAfterImageUpload: Whether the instance is automatically released after the image is packaged and uploaded successfully, only the build machine is supported.
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

        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the instance corresponding to the image.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosImage`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-image
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosImageProps), fullyQualifiedName: "@alicloud/ros-cdk-ens.RosImageProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ens.IRosImageProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: imageName: The name of the image. The name must be 2 to 128 characters in length.
            /// The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
            /// It must start with a letter but cannot start with http:\/\/ or https:\/\/.
            /// The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
            /// </remarks>
            [JsiiProperty(name: "imageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ImageName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: deleteAfterImageUpload: Whether the instance is automatically released after the image is packaged and uploaded successfully, only the build machine is supported.
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

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of the instance corresponding to the image.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
