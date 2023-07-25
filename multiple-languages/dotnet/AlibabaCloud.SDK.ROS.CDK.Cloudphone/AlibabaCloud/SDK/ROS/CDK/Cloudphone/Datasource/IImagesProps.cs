using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudphone.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::CloudPhone::Images`.</summary>
    [JsiiInterface(nativeType: typeof(IImagesProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudphone.datasource.ImagesProps")]
    public interface IImagesProps
    {
        /// <summary>Property imageCategory: Mirror type.</summary>
        [JsiiProperty(name: "imageCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImageCategory
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property imageId: Image ID.</summary>
        [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImageId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property imageName: The name of the mirror image.</summary>
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
        [JsiiTypeProxy(nativeType: typeof(IImagesProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudphone.datasource.ImagesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudphone.Datasource.IImagesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property imageCategory: Mirror type.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "imageCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ImageCategory
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property imageId: Image ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ImageId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property imageName: The name of the mirror image.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "imageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ImageName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
