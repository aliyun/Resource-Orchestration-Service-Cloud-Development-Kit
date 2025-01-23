using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Aligreen
{
    /// <summary>Represents a `OssStockTask`.</summary>
    [JsiiInterface(nativeType: typeof(IOssStockTask), fullyQualifiedName: "@alicloud/ros-cdk-aligreen.IOssStockTask")]
    public interface IOssStockTask : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AudioAntispamFreezeConfig: Voice auto freeze configuration.</summary>
        [JsiiProperty(name: "attrAudioAntispamFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAudioAntispamFreezeConfig
        {
            get;
        }

        /// <summary>Attribute AudioAutoFreezeOpened: Audio detection auto freeze switch.</summary>
        /// <remarks>
        /// Value: true: automatically freeze, false: not automatically freeze.
        /// </remarks>
        [JsiiProperty(name: "attrAudioAutoFreezeOpened", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAudioAutoFreezeOpened
        {
            get;
        }

        /// <summary>Attribute AudioMaxSize: Resource property field representing the maximum size of a single audio.</summary>
        [JsiiProperty(name: "attrAudioMaxSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAudioMaxSize
        {
            get;
        }

        /// <summary>Attribute AudioOpened: oss stock scan task detect audio.</summary>
        [JsiiProperty(name: "attrAudioOpened", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAudioOpened
        {
            get;
        }

        /// <summary>Attribute AudioScanLimit: The upper limit of voice scan in the oss stock scan task.</summary>
        /// <remarks>
        /// The default value is 1000/Bucket.
        /// </remarks>
        [JsiiProperty(name: "attrAudioScanLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAudioScanLimit
        {
            get;
        }

        /// <summary>Attribute AudioScenes: The audio detection scenarios included in the oss stock scan task.</summary>
        /// <remarks>
        /// Set the value to antispam.
        /// </remarks>
        [JsiiProperty(name: "attrAudioScenes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAudioScenes
        {
            get;
        }

        /// <summary>Attribute AutoFreezeType: Automatic freeze type.</summary>
        [JsiiProperty(name: "attrAutoFreezeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAutoFreezeType
        {
            get;
        }

        /// <summary>Attribute BizType: Business scenarios used by the oss stock scan task.</summary>
        [JsiiProperty(name: "attrBizType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBizType
        {
            get;
        }

        /// <summary>Attribute Buckets: The bucket configuration list of the oss stock scan task.</summary>
        [JsiiProperty(name: "attrBuckets", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBuckets
        {
            get;
        }

        /// <summary>Attribute CallbackId: The ID of the primary key of the notification message bound to the oss stock scan task.</summary>
        [JsiiProperty(name: "attrCallbackId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCallbackId
        {
            get;
        }

        /// <summary>Attribute EndDate: The end time of the file upload time range indicates the scanning of files uploaded before this time point.</summary>
        [JsiiProperty(name: "attrEndDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEndDate
        {
            get;
        }

        /// <summary>Attribute ImageAdFreezeConfig: Picture automatically freezes the configuration of ad scenes.</summary>
        [JsiiProperty(name: "attrImageAdFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrImageAdFreezeConfig
        {
            get;
        }

        /// <summary>Attribute ImageAutoFreezeOpened: Picture detection auto freeze switch.</summary>
        /// <remarks>
        /// Value: true: auto freeze, false: not auto freeze.
        /// </remarks>
        [JsiiProperty(name: "attrImageAutoFreezeOpened", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrImageAutoFreezeOpened
        {
            get;
        }

        /// <summary>Attribute ImageLiveFreezeConfig: Picture automatic freezing live scene configuration.</summary>
        [JsiiProperty(name: "attrImageLiveFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrImageLiveFreezeConfig
        {
            get;
        }

        /// <summary>Attribute ImageOpened: oss stock scan task detect images.</summary>
        [JsiiProperty(name: "attrImageOpened", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrImageOpened
        {
            get;
        }

        /// <summary>Attribute ImagePornFreezeConfig: Picture automatic freezing porn scene configuration.</summary>
        [JsiiProperty(name: "attrImagePornFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrImagePornFreezeConfig
        {
            get;
        }

        /// <summary>Attribute ImageScanLimit: The upper limit for scanning images in the oss stock scan task.</summary>
        [JsiiProperty(name: "attrImageScanLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrImageScanLimit
        {
            get;
        }

        /// <summary>Attribute ImageScenes: The image moderation scenario included in the oss stock scan task.</summary>
        [JsiiProperty(name: "attrImageScenes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrImageScenes
        {
            get;
        }

        /// <summary>Attribute ImageTerrorismFreezeConfig: The picture automatically freezes the configuration of terrorism scenes.</summary>
        [JsiiProperty(name: "attrImageTerrorismFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrImageTerrorismFreezeConfig
        {
            get;
        }

        /// <summary>Attribute ScanImageNoFileType: Whether the oss stock scan task detects images with file names without suffixes.</summary>
        [JsiiProperty(name: "attrScanImageNoFileType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScanImageNoFileType
        {
            get;
        }

        /// <summary>Attribute StartDate: The start time of the file upload time range represents the files uploaded after scanning this time point.</summary>
        [JsiiProperty(name: "attrStartDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStartDate
        {
            get;
        }

        /// <summary>Attribute VideoAdFreezeConfig: The video automatically freezes the configuration of ad scenarios.</summary>
        [JsiiProperty(name: "attrVideoAdFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVideoAdFreezeConfig
        {
            get;
        }

        /// <summary>Attribute VideoAutoFreezeOpened: Video detection auto freeze switch.</summary>
        /// <remarks>
        /// Value: true: automatically freeze, false: not automatically freeze.
        /// </remarks>
        [JsiiProperty(name: "attrVideoAutoFreezeOpened", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVideoAutoFreezeOpened
        {
            get;
        }

        /// <summary>Attribute VideoFrameInterval: Resource attribute field representing the framing frequency.</summary>
        [JsiiProperty(name: "attrVideoFrameInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVideoFrameInterval
        {
            get;
        }

        /// <summary>Attribute VideoLiveFreezeConfig: Video automatic freeze live scene configuration.</summary>
        [JsiiProperty(name: "attrVideoLiveFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVideoLiveFreezeConfig
        {
            get;
        }

        /// <summary>Attribute VideoMaxFrames: A resource attribute field that represents the upper limit of a single video frame cut.</summary>
        [JsiiProperty(name: "attrVideoMaxFrames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVideoMaxFrames
        {
            get;
        }

        /// <summary>Attribute VideoMaxSize: Resource property field representing the maximum size of a single video.</summary>
        [JsiiProperty(name: "attrVideoMaxSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVideoMaxSize
        {
            get;
        }

        /// <summary>Attribute VideoOpened: oss stock scan task detect video.</summary>
        [JsiiProperty(name: "attrVideoOpened", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVideoOpened
        {
            get;
        }

        /// <summary>Attribute VideoPornFreezeConfig: Video automatic freezing porn scene configuration.</summary>
        [JsiiProperty(name: "attrVideoPornFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVideoPornFreezeConfig
        {
            get;
        }

        /// <summary>Attribute VideoScanLimit: The upper limit of video scanning in the oss stock scan task.</summary>
        /// <remarks>
        /// The default value is 1000/Bucket.
        /// </remarks>
        [JsiiProperty(name: "attrVideoScanLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVideoScanLimit
        {
            get;
        }

        /// <summary>Attribute VideoScenes: The video detection scenarios included in the oss stock scan task.</summary>
        [JsiiProperty(name: "attrVideoScenes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVideoScenes
        {
            get;
        }

        /// <summary>Attribute VideoTerrorismFreezeConfig: The video automatically freezes the configuration of terrorism scenes.</summary>
        [JsiiProperty(name: "attrVideoTerrorismFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVideoTerrorismFreezeConfig
        {
            get;
        }

        /// <summary>Attribute VideoVoiceAntispamFreezeConfig: Voice auto freeze configuration in video.</summary>
        [JsiiProperty(name: "attrVideoVoiceAntispamFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVideoVoiceAntispamFreezeConfig
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-aligreen.OssStockTaskProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Aligreen.IOssStockTaskProps Props
        {
            get;
        }

        /// <summary>Represents a `OssStockTask`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IOssStockTask), fullyQualifiedName: "@alicloud/ros-cdk-aligreen.IOssStockTask")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Aligreen.IOssStockTask
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AudioAntispamFreezeConfig: Voice auto freeze configuration.</summary>
            [JsiiProperty(name: "attrAudioAntispamFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAudioAntispamFreezeConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AudioAutoFreezeOpened: Audio detection auto freeze switch.</summary>
            /// <remarks>
            /// Value: true: automatically freeze, false: not automatically freeze.
            /// </remarks>
            [JsiiProperty(name: "attrAudioAutoFreezeOpened", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAudioAutoFreezeOpened
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AudioMaxSize: Resource property field representing the maximum size of a single audio.</summary>
            [JsiiProperty(name: "attrAudioMaxSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAudioMaxSize
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AudioOpened: oss stock scan task detect audio.</summary>
            [JsiiProperty(name: "attrAudioOpened", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAudioOpened
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AudioScanLimit: The upper limit of voice scan in the oss stock scan task.</summary>
            /// <remarks>
            /// The default value is 1000/Bucket.
            /// </remarks>
            [JsiiProperty(name: "attrAudioScanLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAudioScanLimit
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AudioScenes: The audio detection scenarios included in the oss stock scan task.</summary>
            /// <remarks>
            /// Set the value to antispam.
            /// </remarks>
            [JsiiProperty(name: "attrAudioScenes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAudioScenes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AutoFreezeType: Automatic freeze type.</summary>
            [JsiiProperty(name: "attrAutoFreezeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAutoFreezeType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BizType: Business scenarios used by the oss stock scan task.</summary>
            [JsiiProperty(name: "attrBizType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBizType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Buckets: The bucket configuration list of the oss stock scan task.</summary>
            [JsiiProperty(name: "attrBuckets", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBuckets
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CallbackId: The ID of the primary key of the notification message bound to the oss stock scan task.</summary>
            [JsiiProperty(name: "attrCallbackId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCallbackId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EndDate: The end time of the file upload time range indicates the scanning of files uploaded before this time point.</summary>
            [JsiiProperty(name: "attrEndDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEndDate
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ImageAdFreezeConfig: Picture automatically freezes the configuration of ad scenes.</summary>
            [JsiiProperty(name: "attrImageAdFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrImageAdFreezeConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ImageAutoFreezeOpened: Picture detection auto freeze switch.</summary>
            /// <remarks>
            /// Value: true: auto freeze, false: not auto freeze.
            /// </remarks>
            [JsiiProperty(name: "attrImageAutoFreezeOpened", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrImageAutoFreezeOpened
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ImageLiveFreezeConfig: Picture automatic freezing live scene configuration.</summary>
            [JsiiProperty(name: "attrImageLiveFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrImageLiveFreezeConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ImageOpened: oss stock scan task detect images.</summary>
            [JsiiProperty(name: "attrImageOpened", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrImageOpened
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ImagePornFreezeConfig: Picture automatic freezing porn scene configuration.</summary>
            [JsiiProperty(name: "attrImagePornFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrImagePornFreezeConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ImageScanLimit: The upper limit for scanning images in the oss stock scan task.</summary>
            [JsiiProperty(name: "attrImageScanLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrImageScanLimit
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ImageScenes: The image moderation scenario included in the oss stock scan task.</summary>
            [JsiiProperty(name: "attrImageScenes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrImageScenes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ImageTerrorismFreezeConfig: The picture automatically freezes the configuration of terrorism scenes.</summary>
            [JsiiProperty(name: "attrImageTerrorismFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrImageTerrorismFreezeConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ScanImageNoFileType: Whether the oss stock scan task detects images with file names without suffixes.</summary>
            [JsiiProperty(name: "attrScanImageNoFileType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScanImageNoFileType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute StartDate: The start time of the file upload time range represents the files uploaded after scanning this time point.</summary>
            [JsiiProperty(name: "attrStartDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStartDate
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VideoAdFreezeConfig: The video automatically freezes the configuration of ad scenarios.</summary>
            [JsiiProperty(name: "attrVideoAdFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVideoAdFreezeConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VideoAutoFreezeOpened: Video detection auto freeze switch.</summary>
            /// <remarks>
            /// Value: true: automatically freeze, false: not automatically freeze.
            /// </remarks>
            [JsiiProperty(name: "attrVideoAutoFreezeOpened", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVideoAutoFreezeOpened
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VideoFrameInterval: Resource attribute field representing the framing frequency.</summary>
            [JsiiProperty(name: "attrVideoFrameInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVideoFrameInterval
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VideoLiveFreezeConfig: Video automatic freeze live scene configuration.</summary>
            [JsiiProperty(name: "attrVideoLiveFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVideoLiveFreezeConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VideoMaxFrames: A resource attribute field that represents the upper limit of a single video frame cut.</summary>
            [JsiiProperty(name: "attrVideoMaxFrames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVideoMaxFrames
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VideoMaxSize: Resource property field representing the maximum size of a single video.</summary>
            [JsiiProperty(name: "attrVideoMaxSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVideoMaxSize
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VideoOpened: oss stock scan task detect video.</summary>
            [JsiiProperty(name: "attrVideoOpened", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVideoOpened
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VideoPornFreezeConfig: Video automatic freezing porn scene configuration.</summary>
            [JsiiProperty(name: "attrVideoPornFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVideoPornFreezeConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VideoScanLimit: The upper limit of video scanning in the oss stock scan task.</summary>
            /// <remarks>
            /// The default value is 1000/Bucket.
            /// </remarks>
            [JsiiProperty(name: "attrVideoScanLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVideoScanLimit
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VideoScenes: The video detection scenarios included in the oss stock scan task.</summary>
            [JsiiProperty(name: "attrVideoScenes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVideoScenes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VideoTerrorismFreezeConfig: The video automatically freezes the configuration of terrorism scenes.</summary>
            [JsiiProperty(name: "attrVideoTerrorismFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVideoTerrorismFreezeConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VideoVoiceAntispamFreezeConfig: Voice auto freeze configuration in video.</summary>
            [JsiiProperty(name: "attrVideoVoiceAntispamFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVideoVoiceAntispamFreezeConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-aligreen.OssStockTaskProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Aligreen.IOssStockTaskProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Aligreen.IOssStockTaskProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
