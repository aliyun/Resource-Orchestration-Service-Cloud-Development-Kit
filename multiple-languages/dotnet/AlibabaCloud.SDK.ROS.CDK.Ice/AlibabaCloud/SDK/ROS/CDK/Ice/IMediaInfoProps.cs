using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ice
{
    /// <summary>Properties for defining a `MediaInfo`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-mediainfo
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IMediaInfoProps), fullyQualifiedName: "@alicloud/ros-cdk-ice.MediaInfoProps")]
    public interface IMediaInfoProps
    {
        /// <summary>Property inputUrl: The URL of the media asset in another service.</summary>
        /// <remarks>
        /// The URL is associated with the ID of the media asset in IMS. The URL cannot be modified once registered. The following types of URLs are supported:
        /// OSS URL in one of the following formats:
        /// http(s)://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
        /// oss://example-bucket/example.mp4: In this format, it is considered by default that the region of the OSS bucket in which the media asset resides is the same as the region in which IMS is activated.
        /// URL of an ApsaraVideo VOD media asset
        /// vod://<em><strong>20b48fb04483915d4f2cd8ac</strong></em>*
        /// </remarks>
        [JsiiProperty(name: "inputUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InputUrl
        {
            get;
        }

        /// <summary>Property businessType: The business type of the media asset.</summary>
        /// <remarks>
        /// Valid values:
        /// subtitles
        /// watermark
        /// opening
        /// ending
        /// general
        /// </remarks>
        [JsiiProperty(name: "businessType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BusinessType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property cateId: The category ID.</summary>
        [JsiiProperty(name: "cateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CateId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property coverUrl: The thumbnail URL of the media asset.</summary>
        /// <remarks>
        /// The value can be up to 128 bytes in length.
        /// The value must be encoded in UTF-8.
        /// </remarks>
        [JsiiProperty(name: "coverUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CoverUrl
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the media asset.</summary>
        /// <remarks>
        /// The value can be up to 1,024 bytes in length.
        /// The value must be encoded in UTF-8.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property mediaTags: The tags of the media asset.</summary>
        /// <remarks>
        /// Up to 16 tags are supported.
        /// Separate multiple tags with commas (,).
        /// Each tag can be up to 32 bytes in length.
        /// The value must be encoded in UTF-8.
        /// </remarks>
        [JsiiProperty(name: "mediaTags", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MediaTags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property mediaType: The type of the media asset.</summary>
        /// <remarks>
        /// Valid values:
        /// image
        /// video
        /// audio
        /// text
        /// We recommend that you specify this parameter based on your business requirements. If you set InputURL to an OSS URL, the media asset type can be automatically determined based on the file name extension. For more information
        /// .
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

        /// <summary>Property overwrite: Specifies whether to overwrite the media asset that has been registered by using the same URL.</summary>
        /// <remarks>
        /// Default value: false. Valid values:
        ///
        /// <list type="bullet">
        /// <description>true: If a media asset has been registered by using the same URL, the original media asset is deleted and the new media asset is registered.</description>
        /// <description>false: If a media asset has been registered by using the same URL, the new media asset is not registered. A URL cannot be used to register multiple media assets.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "overwrite", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Overwrite
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property referenceId: The custom ID.</summary>
        /// <remarks>
        /// The ID can be 6 to 64 characters in length and can contain only letters, digits, hyphens (-), and underscores (_). Make sure that the ID is unique among users.
        /// </remarks>
        [JsiiProperty(name: "referenceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ReferenceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property registerConfig: The registration configurations.</summary>
        /// <remarks>
        /// By default, a sprite is generated for the media asset. You can set NeedSprite to false to disable automatic sprite generation.
        /// By default, a snapshot is generated for the media asset. You can set NeedSnapshot to false to disable automatic snapshot generation.
        /// </remarks>
        [JsiiProperty(name: "registerConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RegisterConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property smartTagTemplateId: The ID of the smart tagging template.</summary>
        /// <remarks>
        /// Valid values:
        /// S00000101-300080: the system template that supports natural language processing (NLP) for content recognition.
        /// S00000103-000001: the system template that supports NLP for content recognition and all tagging capabilities.
        /// S00000103-000002: the system template that supports all tagging capabilities but does not support NLP for content recognition.
        /// After you configure this parameter, a smart tag analysis task is automatically initiated after the media asset is registered. For more information about the billable items.
        /// </remarks>
        [JsiiProperty(name: "smartTagTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SmartTagTemplateId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property title: The title.</summary>
        /// <remarks>
        /// If you do not specify this parameter, a default title is automatically generated based on the date.
        /// The value can be up to 128 bytes in length.
        /// The value must be encoded in UTF-8.
        /// </remarks>
        [JsiiProperty(name: "title", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Title
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property userData: The user data.</summary>
        /// <remarks>
        /// You can specify a custom callback URL.
        /// </remarks>
        [JsiiProperty(name: "userData", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UserData
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property workflowId: The workflow ID.</summary>
        [JsiiProperty(name: "workflowId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WorkflowId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `MediaInfo`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-mediainfo
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IMediaInfoProps), fullyQualifiedName: "@alicloud/ros-cdk-ice.MediaInfoProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ice.IMediaInfoProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property inputUrl: The URL of the media asset in another service.</summary>
            /// <remarks>
            /// The URL is associated with the ID of the media asset in IMS. The URL cannot be modified once registered. The following types of URLs are supported:
            /// OSS URL in one of the following formats:
            /// http(s)://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
            /// oss://example-bucket/example.mp4: In this format, it is considered by default that the region of the OSS bucket in which the media asset resides is the same as the region in which IMS is activated.
            /// URL of an ApsaraVideo VOD media asset
            /// vod://<em><strong>20b48fb04483915d4f2cd8ac</strong></em>*
            /// </remarks>
            [JsiiProperty(name: "inputUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InputUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property businessType: The business type of the media asset.</summary>
            /// <remarks>
            /// Valid values:
            /// subtitles
            /// watermark
            /// opening
            /// ending
            /// general
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "businessType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BusinessType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property cateId: The category ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "cateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CateId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property coverUrl: The thumbnail URL of the media asset.</summary>
            /// <remarks>
            /// The value can be up to 128 bytes in length.
            /// The value must be encoded in UTF-8.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "coverUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CoverUrl
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the media asset.</summary>
            /// <remarks>
            /// The value can be up to 1,024 bytes in length.
            /// The value must be encoded in UTF-8.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property mediaTags: The tags of the media asset.</summary>
            /// <remarks>
            /// Up to 16 tags are supported.
            /// Separate multiple tags with commas (,).
            /// Each tag can be up to 32 bytes in length.
            /// The value must be encoded in UTF-8.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mediaTags", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? MediaTags
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property mediaType: The type of the media asset.</summary>
            /// <remarks>
            /// Valid values:
            /// image
            /// video
            /// audio
            /// text
            /// We recommend that you specify this parameter based on your business requirements. If you set InputURL to an OSS URL, the media asset type can be automatically determined based on the file name extension. For more information
            /// .
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mediaType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MediaType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property overwrite: Specifies whether to overwrite the media asset that has been registered by using the same URL.</summary>
            /// <remarks>
            /// Default value: false. Valid values:
            ///
            /// <list type="bullet">
            /// <description>true: If a media asset has been registered by using the same URL, the original media asset is deleted and the new media asset is registered.</description>
            /// <description>false: If a media asset has been registered by using the same URL, the new media asset is not registered. A URL cannot be used to register multiple media assets.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "overwrite", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Overwrite
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property referenceId: The custom ID.</summary>
            /// <remarks>
            /// The ID can be 6 to 64 characters in length and can contain only letters, digits, hyphens (-), and underscores (_). Make sure that the ID is unique among users.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "referenceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ReferenceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property registerConfig: The registration configurations.</summary>
            /// <remarks>
            /// By default, a sprite is generated for the media asset. You can set NeedSprite to false to disable automatic sprite generation.
            /// By default, a snapshot is generated for the media asset. You can set NeedSnapshot to false to disable automatic snapshot generation.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "registerConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RegisterConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property smartTagTemplateId: The ID of the smart tagging template.</summary>
            /// <remarks>
            /// Valid values:
            /// S00000101-300080: the system template that supports natural language processing (NLP) for content recognition.
            /// S00000103-000001: the system template that supports NLP for content recognition and all tagging capabilities.
            /// S00000103-000002: the system template that supports all tagging capabilities but does not support NLP for content recognition.
            /// After you configure this parameter, a smart tag analysis task is automatically initiated after the media asset is registered. For more information about the billable items.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "smartTagTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SmartTagTemplateId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property title: The title.</summary>
            /// <remarks>
            /// If you do not specify this parameter, a default title is automatically generated based on the date.
            /// The value can be up to 128 bytes in length.
            /// The value must be encoded in UTF-8.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "title", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Title
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property userData: The user data.</summary>
            /// <remarks>
            /// You can specify a custom callback URL.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "userData", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? UserData
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property workflowId: The workflow ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "workflowId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? WorkflowId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
