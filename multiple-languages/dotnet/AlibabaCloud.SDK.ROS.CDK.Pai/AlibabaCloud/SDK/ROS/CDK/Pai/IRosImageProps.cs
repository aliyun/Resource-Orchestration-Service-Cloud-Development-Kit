using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pai
{
    /// <summary>Properties for defining a `RosImage`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-image
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosImageProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.RosImageProps")]
    public interface IRosImageProps
    {
        /// <remarks>
        /// <strong>Property</strong>: imageName: The image name.
        /// </remarks>
        [JsiiProperty(name: "imageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ImageName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: imageUri: The Image address, which contains the version number.
        /// </remarks>
        [JsiiProperty(name: "imageUri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ImageUri
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: accessibility: Visibility of the mirror, possible values:
        /// - PUBLIC: all members of the current workspace can operate.
        /// - PRIVATE: Only the creator can operate.
        /// </remarks>
        [JsiiProperty(name: "accessibility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Accessibility
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: labels: Labels.
        /// </remarks>
        [JsiiProperty(name: "labels", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-pai.RosImage.LabelsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Labels
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: workspaceId: The ID of the workspace to which the image belongs.
        /// </remarks>
        [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WorkspaceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosImage`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-image
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosImageProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.RosImageProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pai.IRosImageProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: imageName: The image name.
            /// </remarks>
            [JsiiProperty(name: "imageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ImageName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: imageUri: The Image address, which contains the version number.
            /// </remarks>
            [JsiiProperty(name: "imageUri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ImageUri
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: accessibility: Visibility of the mirror, possible values:
            /// - PUBLIC: all members of the current workspace can operate.
            /// - PRIVATE: Only the creator can operate.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accessibility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Accessibility
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: labels: Labels.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "labels", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-pai.RosImage.LabelsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Labels
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: workspaceId: The ID of the workspace to which the image belongs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? WorkspaceId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
