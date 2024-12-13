using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ice
{
    /// <summary>Properties for defining a `InsertMediaToSearchLib`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-insertmediatosearchlib
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IInsertMediaToSearchLibProps), fullyQualifiedName: "@alicloud/ros-cdk-ice.InsertMediaToSearchLibProps")]
    public interface IInsertMediaToSearchLibProps
    {
        /// <summary>Property input: The URL of the video, audio, or image file that you want to import to the search library.</summary>
        /// <remarks>
        /// Note: Make sure that you specify a correct file name and the bucket in which the file resides is in the same region where this operation is called. Otherwise, the file cannot be found or the operation may fail.
        /// Specify an Object Storage Service (OSS) URL in the following format: oss://[Bucket name]/[File path]. For example, you can specify oss://[example-bucket-]/[object_path-].
        /// Specify an HTTP URL in the following format: public endpoint. For example, you can specify http://example-test-****.mp4.
        /// </remarks>
        [JsiiProperty(name: "input", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Input
        {
            get;
        }

        /// <summary>Property mediaId: The ID of the media asset.</summary>
        /// <remarks>
        /// Each media ID is unique. If you leave this parameter empty, a media ID is automatically generated for this parameter.
        /// </remarks>
        [JsiiProperty(name: "mediaId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MediaId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property mediaType: The type of the media asset.</summary>
        /// <remarks>
        /// Valid values:
        /// video (default)
        /// image
        /// audio
        /// </remarks>
        [JsiiProperty(name: "mediaType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MediaType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property msgBody: The message body.</summary>
        [JsiiProperty(name: "msgBody", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MsgBody
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property searchLibName: The name of the search library.</summary>
        /// <remarks>
        /// Default value: ims-default-search-lib.
        /// </remarks>
        [JsiiProperty(name: "searchLibName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SearchLibName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `InsertMediaToSearchLib`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-insertmediatosearchlib
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IInsertMediaToSearchLibProps), fullyQualifiedName: "@alicloud/ros-cdk-ice.InsertMediaToSearchLibProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ice.IInsertMediaToSearchLibProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property input: The URL of the video, audio, or image file that you want to import to the search library.</summary>
            /// <remarks>
            /// Note: Make sure that you specify a correct file name and the bucket in which the file resides is in the same region where this operation is called. Otherwise, the file cannot be found or the operation may fail.
            /// Specify an Object Storage Service (OSS) URL in the following format: oss://[Bucket name]/[File path]. For example, you can specify oss://[example-bucket-]/[object_path-].
            /// Specify an HTTP URL in the following format: public endpoint. For example, you can specify http://example-test-****.mp4.
            /// </remarks>
            [JsiiProperty(name: "input", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Input
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property mediaId: The ID of the media asset.</summary>
            /// <remarks>
            /// Each media ID is unique. If you leave this parameter empty, a media ID is automatically generated for this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mediaId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MediaId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property mediaType: The type of the media asset.</summary>
            /// <remarks>
            /// Valid values:
            /// video (default)
            /// image
            /// audio
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mediaType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MediaType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property msgBody: The message body.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "msgBody", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? MsgBody
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property searchLibName: The name of the search library.</summary>
            /// <remarks>
            /// Default value: ims-default-search-lib.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "searchLibName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SearchLibName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
