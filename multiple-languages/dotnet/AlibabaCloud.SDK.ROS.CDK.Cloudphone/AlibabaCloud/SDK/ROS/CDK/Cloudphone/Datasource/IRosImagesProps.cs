using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudphone.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::CloudPhone::Images`.</summary>
    [JsiiInterface(nativeType: typeof(IRosImagesProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudphone.datasource.RosImagesProps")]
    public interface IRosImagesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: imageCategory: Mirror type.
        /// </remarks>
        [JsiiProperty(name: "imageCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImageCategory
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: imageId: Image ID.
        /// </remarks>
        [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImageId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: imageName: The name of the mirror image.
        /// </remarks>
        [JsiiProperty(name: "imageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImageName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::CloudPhone::Images`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosImagesProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudphone.datasource.RosImagesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudphone.Datasource.IRosImagesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: imageCategory: Mirror type.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imageCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ImageCategory
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: imageId: Image ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ImageId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: imageName: The name of the mirror image.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ImageName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
