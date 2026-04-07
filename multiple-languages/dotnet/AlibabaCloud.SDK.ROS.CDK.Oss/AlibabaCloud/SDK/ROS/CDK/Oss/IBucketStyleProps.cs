using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oss
{
    /// <summary>Properties for defining a `BucketStyle`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketstyle
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IBucketStyleProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.BucketStyleProps")]
    public interface IBucketStyleProps
    {
        /// <summary>Property bucket: Storage space to which the picture style belongs.</summary>
        [JsiiProperty(name: "bucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Bucket
        {
            get;
        }

        /// <summary>Property content: The Image style content can contain single or multiple image processing parameters.</summary>
        [JsiiProperty(name: "content", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Content
        {
            get;
        }

        /// <summary>Property styleName: Image Style Name.</summary>
        [JsiiProperty(name: "styleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StyleName
        {
            get;
        }

        /// <summary>Property category: Style category, valid values: image, document, video.</summary>
        [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Category
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `BucketStyle`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketstyle
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IBucketStyleProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.BucketStyleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.IBucketStyleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property bucket: Storage space to which the picture style belongs.</summary>
            [JsiiProperty(name: "bucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Bucket
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property content: The Image style content can contain single or multiple image processing parameters.</summary>
            [JsiiProperty(name: "content", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Content
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property styleName: Image Style Name.</summary>
            [JsiiProperty(name: "styleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StyleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property category: Style category, valid values: image, document, video.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Category
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
