using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ice
{
    /// <summary>Properties for defining a `UploadMedia`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-uploadmedia
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IUploadMediaProps), fullyQualifiedName: "@alicloud/ros-cdk-ice.UploadMediaProps")]
    public interface IUploadMediaProps
    {
        /// <summary>Property appId: The application ID.</summary>
        /// <remarks>
        /// Default value: app-1000000.
        /// </remarks>
        [JsiiProperty(name: "appId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AppId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property entityId: The entity ID.</summary>
        /// <remarks>
        /// You can call the CreateEntity operation to create an entity and specify a dynamic metadata structure.
        /// </remarks>
        [JsiiProperty(name: "entityId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EntityId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property fileInfo: The file information, which is in the JSON format and contains the following fields: Type: required.</summary>
        /// <remarks>
        /// The file type. Valid values: video, image, audio, text, and other.
        /// Name: required. The file name without the extension.
        /// Size: optional. The file size.
        /// Ext: required. The file name extension.
        /// </remarks>
        [JsiiProperty(name: "fileInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FileInfo
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property mediaMetaData: The metadata of the media asset, which is a JSON string that contains the following fields: Title: required.</summary>
        /// <remarks>
        /// The value can be up to 128 characters in length.
        /// The value must be encoded in UTF-8.
        /// Description: optional.
        /// The value can be up to 1,024 characters in length.
        /// The value must be encoded in UTF-8.
        /// CateId: optional.
        /// Tags: optional.
        /// BusinessType: required. Valid values:
        /// opening or ending if Type is set to video
        /// default or cover if Type is set to image
        /// subtitles or font if Type is set to text
        /// watermark if Type is set to material
        /// general CoverURL: optional.
        /// DynamicMetaData: The value is a string.
        /// </remarks>
        [JsiiProperty(name: "mediaMetaData", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MediaMetaData
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property postProcessConfig: Type = video || audio There is a post-upload processing action.</summary>
        /// <remarks>
        /// ProcessType Value: Workflow.
        /// </remarks>
        [JsiiProperty(name: "postProcessConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PostProcessConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property uploadTargetConfig: The destination storage address.</summary>
        /// <remarks>
        /// Set StorageType to oss.
        /// Set StorageLocation to an address in ApsaraVideo VOD. You cannot set this field to an OSS URL.
        /// </remarks>
        [JsiiProperty(name: "uploadTargetConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UploadTargetConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property userData: The user data.</summary>
        /// <remarks>
        /// The value must be a JSON string. You can configure settings such as message callbacks.
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

        /// <summary>Properties for defining a `UploadMedia`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-uploadmedia
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IUploadMediaProps), fullyQualifiedName: "@alicloud/ros-cdk-ice.UploadMediaProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ice.IUploadMediaProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property appId: The application ID.</summary>
            /// <remarks>
            /// Default value: app-1000000.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "appId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AppId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property entityId: The entity ID.</summary>
            /// <remarks>
            /// You can call the CreateEntity operation to create an entity and specify a dynamic metadata structure.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "entityId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EntityId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property fileInfo: The file information, which is in the JSON format and contains the following fields: Type: required.</summary>
            /// <remarks>
            /// The file type. Valid values: video, image, audio, text, and other.
            /// Name: required. The file name without the extension.
            /// Size: optional. The file size.
            /// Ext: required. The file name extension.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fileInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? FileInfo
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property mediaMetaData: The metadata of the media asset, which is a JSON string that contains the following fields: Title: required.</summary>
            /// <remarks>
            /// The value can be up to 128 characters in length.
            /// The value must be encoded in UTF-8.
            /// Description: optional.
            /// The value can be up to 1,024 characters in length.
            /// The value must be encoded in UTF-8.
            /// CateId: optional.
            /// Tags: optional.
            /// BusinessType: required. Valid values:
            /// opening or ending if Type is set to video
            /// default or cover if Type is set to image
            /// subtitles or font if Type is set to text
            /// watermark if Type is set to material
            /// general CoverURL: optional.
            /// DynamicMetaData: The value is a string.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mediaMetaData", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? MediaMetaData
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property postProcessConfig: Type = video || audio There is a post-upload processing action.</summary>
            /// <remarks>
            /// ProcessType Value: Workflow.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "postProcessConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? PostProcessConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property uploadTargetConfig: The destination storage address.</summary>
            /// <remarks>
            /// Set StorageType to oss.
            /// Set StorageLocation to an address in ApsaraVideo VOD. You cannot set this field to an OSS URL.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "uploadTargetConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? UploadTargetConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property userData: The user data.</summary>
            /// <remarks>
            /// The value must be a JSON string. You can configure settings such as message callbacks.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "userData", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? UserData
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
