using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Aligreen
{
    /// <summary>Properties for defining a `ImageLib`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-imagelib
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IImageLibProps), fullyQualifiedName: "@alicloud/ros-cdk-aligreen.ImageLibProps")]
    public interface IImageLibProps
    {
        /// <summary>Property category: The category of the image library.</summary>
        /// <remarks>
        /// Valid values: BLACK: a blacklist, WHITE: a whitelist, REVIEW: a review list.
        /// </remarks>
        [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Category
        {
            get;
        }

        /// <summary>Property imageLibName: The name of the image library defined by the customer.</summary>
        /// <remarks>
        /// It can contain no more than 20 characters in Chinese, English, and underscore (_).
        /// </remarks>
        [JsiiProperty(name: "imageLibName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ImageLibName
        {
            get;
        }

        /// <summary>Property scene: The moderation scenario to which the custom image library applies.</summary>
        /// <remarks>
        /// Valid values: PORN: pornography detection, AD: ad detection, ILLEGAL: terrorist content detection.
        /// </remarks>
        [JsiiProperty(name: "scene", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Scene
        {
            get;
        }

        /// <summary>Property bizTypes: List of business scenarios.</summary>
        /// <remarks>
        /// For example: ["bizTypeA", "bizTypeB", "bizTypeC"].
        /// </remarks>
        [JsiiProperty(name: "bizTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BizTypes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enable: Specifies whether to enable the image library.</summary>
        /// <remarks>
        /// Valid values:
        /// true: Enable the image library. This is the default value. false: Disable the image library.
        /// </remarks>
        [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Enable
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ImageLib`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-imagelib
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IImageLibProps), fullyQualifiedName: "@alicloud/ros-cdk-aligreen.ImageLibProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Aligreen.IImageLibProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property category: The category of the image library.</summary>
            /// <remarks>
            /// Valid values: BLACK: a blacklist, WHITE: a whitelist, REVIEW: a review list.
            /// </remarks>
            [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Category
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property imageLibName: The name of the image library defined by the customer.</summary>
            /// <remarks>
            /// It can contain no more than 20 characters in Chinese, English, and underscore (_).
            /// </remarks>
            [JsiiProperty(name: "imageLibName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ImageLibName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property scene: The moderation scenario to which the custom image library applies.</summary>
            /// <remarks>
            /// Valid values: PORN: pornography detection, AD: ad detection, ILLEGAL: terrorist content detection.
            /// </remarks>
            [JsiiProperty(name: "scene", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Scene
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property bizTypes: List of business scenarios.</summary>
            /// <remarks>
            /// For example: ["bizTypeA", "bizTypeB", "bizTypeC"].
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bizTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? BizTypes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enable: Specifies whether to enable the image library.</summary>
            /// <remarks>
            /// Valid values:
            /// true: Enable the image library. This is the default value. false: Disable the image library.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Enable
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
