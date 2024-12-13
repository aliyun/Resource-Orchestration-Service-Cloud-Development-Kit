using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Aligreen
{
    /// <summary>Properties for defining a `OssStockTask`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-ossstocktask
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IOssStockTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-aligreen.OssStockTaskProps")]
    public interface IOssStockTaskProps
    {
        /// <summary>Property buckets: The bucket configuration list of the oss stock scan task.</summary>
        /// <remarks>
        /// Example:[{"Bucket":"bucket_01","Selected":true,"Prefixes":["img/test_"],"Type":"exclude"}].
        /// </remarks>
        [JsiiProperty(name: "buckets", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Buckets
        {
            get;
        }

        /// <summary>Property startDate: The start time of the file upload time range represents the files uploaded after scanning this time point.Example: 2024-08-01 00:00:00 +0800.</summary>
        [JsiiProperty(name: "startDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StartDate
        {
            get;
        }

        /// <summary>Property audioAntispamFreezeConfig: Voice auto freeze configuration.</summary>
        /// <remarks>
        /// Example:{"Type": "suggestion", "Value" : "block" }. The results are frozen according to the suggestion in the speech detection results.
        /// </remarks>
        [JsiiProperty(name: "audioAntispamFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AudioAntispamFreezeConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property audioAutoFreezeOpened: Audio detection auto freeze switch.</summary>
        /// <remarks>
        /// Value: true: automatically freeze, false: not automatically freeze.
        /// </remarks>
        [JsiiProperty(name: "audioAutoFreezeOpened", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AudioAutoFreezeOpened
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property audioMaxSize: Resource property field representing the maximum size of a single audio.</summary>
        /// <remarks>
        /// 1~2048MB, the default is 200MB, more than not detected.
        /// </remarks>
        [JsiiProperty(name: "audioMaxSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AudioMaxSize
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property audioOpened: Oss stock scan task detect audio.</summary>
        /// <remarks>
        /// true: scan audio, false: do not scan audio.
        /// </remarks>
        [JsiiProperty(name: "audioOpened", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AudioOpened
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property audioScanLimit: The upper limit of voice scan in the oss stock scan task.</summary>
        /// <remarks>
        /// The default value is 1000/Bucket.
        /// </remarks>
        [JsiiProperty(name: "audioScanLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AudioScanLimit
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property audioScenes: The audio detection scenarios included in the oss stock scan task.</summary>
        /// <remarks>
        /// Set the value to ["antispam"].
        /// </remarks>
        [JsiiProperty(name: "audioScenes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AudioScenes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoFreezeType: Automatic freeze type.</summary>
        /// <remarks>
        /// Value: acl: modify permissions, copy: Move files.
        /// </remarks>
        [JsiiProperty(name: "autoFreezeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoFreezeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property bizType: Business scenarios used by the oss stock scan task.</summary>
        [JsiiProperty(name: "bizType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BizType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property callbackId: The ID of the primary key of the notification message bound to the oss stock scan task.</summary>
        [JsiiProperty(name: "callbackId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CallbackId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property endDate: The end time of the file upload time range indicates the scanning of files uploaded before this time point.</summary>
        /// <remarks>
        /// Example: 2024-12-30 00:00:00 +0800
        /// </remarks>
        [JsiiProperty(name: "endDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EndDate
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property imageAdFreezeConfig: Picture automatically freezes the configuration of ad scenes.</summary>
        /// <remarks>
        /// Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
        /// </remarks>
        [JsiiProperty(name: "imageAdFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImageAdFreezeConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property imageAutoFreezeOpened: Picture detection auto freeze switch.</summary>
        /// <remarks>
        /// Value: true: auto freeze, false: not auto freeze.
        /// </remarks>
        [JsiiProperty(name: "imageAutoFreezeOpened", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImageAutoFreezeOpened
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property imageLiveFreezeConfig: Picture automatic freezing live scene configuration.</summary>
        /// <remarks>
        /// Example:{"Type":"suggestion","Value":"block,review"}. The result will be frozen according to the suggestion in the picture detection result.
        /// </remarks>
        [JsiiProperty(name: "imageLiveFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImageLiveFreezeConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property imageOpened: Oss stock scan task detect images.</summary>
        /// <remarks>
        /// true: scan images, false: do not scan images.
        /// </remarks>
        [JsiiProperty(name: "imageOpened", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImageOpened
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property imagePornFreezeConfig: Picture automatic freezing porn scene configuration.</summary>
        /// <remarks>
        /// Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
        /// </remarks>
        [JsiiProperty(name: "imagePornFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImagePornFreezeConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property imageScanLimit: The upper limit for scanning images in the oss stock scan task.</summary>
        /// <remarks>
        /// The default value is 10000 images per Bucket.
        /// </remarks>
        [JsiiProperty(name: "imageScanLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImageScanLimit
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property imageScenes: The image moderation scenario included in the oss stock scan task.Valid values: porn: pornography detection terrorism: terrorist content detection ad: ad violation detection live: undesirable scene detection.</summary>
        [JsiiProperty(name: "imageScenes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImageScenes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property imageTerrorismFreezeConfig: The picture automatically freezes the configuration of terrorism scenes.</summary>
        /// <remarks>
        /// Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
        /// </remarks>
        [JsiiProperty(name: "imageTerrorismFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImageTerrorismFreezeConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ossStockTaskName: The name of the oss stock scan task.</summary>
        [JsiiProperty(name: "ossStockTaskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OssStockTaskName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property scanImageNoFileType: Whether the oss stock scan task detects images with file names without suffixes.</summary>
        /// <remarks>
        /// true: Detect pictures with file names without suffixes, false: Do not detect pictures with file names without suffixes.
        /// </remarks>
        [JsiiProperty(name: "scanImageNoFileType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ScanImageNoFileType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property videoAdFreezeConfig: The video automatically freezes the configuration of ad scenarios.</summary>
        /// <remarks>
        /// Example:{"Type":"suggestion","Value":"block,review"}. The results will be frozen according to the suggestion in the video detection results.
        /// </remarks>
        [JsiiProperty(name: "videoAdFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VideoAdFreezeConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property videoAutoFreezeOpened: Video detection auto freeze switch.</summary>
        /// <remarks>
        /// Value: true: automatically freeze, false: not automatically freeze.
        /// </remarks>
        [JsiiProperty(name: "videoAutoFreezeOpened", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VideoAutoFreezeOpened
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property videoFrameInterval: Resource attribute field representing the framing frequency.</summary>
        /// <remarks>
        /// 1~60 seconds/frame, the default is 1 second/frame.
        /// </remarks>
        [JsiiProperty(name: "videoFrameInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VideoFrameInterval
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property videoLiveFreezeConfig: Video automatic freeze live scene configuration.</summary>
        /// <remarks>
        /// Example:{"Type" : "suggestion", "Value" : "block" }. The results will be frozen according to the suggestion in the video detection results.
        /// </remarks>
        [JsiiProperty(name: "videoLiveFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VideoLiveFreezeConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property videoMaxFrames: A resource attribute field that represents the upper limit of a single video frame cut.</summary>
        /// <remarks>
        /// 5 to 20000 frames, the default is 200 frames.
        /// </remarks>
        [JsiiProperty(name: "videoMaxFrames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VideoMaxFrames
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property videoMaxSize: Resource property field representing the maximum size of a single video.</summary>
        /// <remarks>
        /// 1~2048MB, the default is 500MB, more than not detected.
        /// </remarks>
        [JsiiProperty(name: "videoMaxSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VideoMaxSize
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property videoOpened: Oss stock scan task detect video.</summary>
        /// <remarks>
        /// true: scan video, false: do not scan video.
        /// </remarks>
        [JsiiProperty(name: "videoOpened", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VideoOpened
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property videoPornFreezeConfig: Video automatic freezing porn scene configuration.</summary>
        /// <remarks>
        /// Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the video detection result.
        /// </remarks>
        [JsiiProperty(name: "videoPornFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VideoPornFreezeConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property videoScanLimit: The upper limit of video scanning in the oss stock scan task.</summary>
        /// <remarks>
        /// The default value is 1000/Bucket.
        /// </remarks>
        [JsiiProperty(name: "videoScanLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VideoScanLimit
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property videoScenes: The video detection scenarios included in the oss stock scan task.</summary>
        /// <remarks>
        /// porn: pornography detection
        /// terrorism: terrorist content detection
        /// ad: ad violation detection
        /// live: undesirable scene detection
        /// antispam: Video voice antispam.
        /// </remarks>
        [JsiiProperty(name: "videoScenes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VideoScenes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property videoTerrorismFreezeConfig: The video automatically freezes the configuration of terrorism scenes.</summary>
        /// <remarks>
        /// Example:{"Type": "suggestion","Value":"block,review"}. The results will be frozen according to the suggestion in the video detection results.
        /// </remarks>
        [JsiiProperty(name: "videoTerrorismFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VideoTerrorismFreezeConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property videoVoiceAntispamFreezeConfig: Voice auto freeze configuration in video.</summary>
        /// <remarks>
        /// Example:{"Type": "suggestion", "Value" : "block" }. The results will be frozen according to the suggestion in the video detection results.
        /// </remarks>
        [JsiiProperty(name: "videoVoiceAntispamFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VideoVoiceAntispamFreezeConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `OssStockTask`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-ossstocktask
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IOssStockTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-aligreen.OssStockTaskProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Aligreen.IOssStockTaskProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property buckets: The bucket configuration list of the oss stock scan task.</summary>
            /// <remarks>
            /// Example:[{"Bucket":"bucket_01","Selected":true,"Prefixes":["img/test_"],"Type":"exclude"}].
            /// </remarks>
            [JsiiProperty(name: "buckets", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Buckets
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property startDate: The start time of the file upload time range represents the files uploaded after scanning this time point.Example: 2024-08-01 00:00:00 +0800.</summary>
            [JsiiProperty(name: "startDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StartDate
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property audioAntispamFreezeConfig: Voice auto freeze configuration.</summary>
            /// <remarks>
            /// Example:{"Type": "suggestion", "Value" : "block" }. The results are frozen according to the suggestion in the speech detection results.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "audioAntispamFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? AudioAntispamFreezeConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property audioAutoFreezeOpened: Audio detection auto freeze switch.</summary>
            /// <remarks>
            /// Value: true: automatically freeze, false: not automatically freeze.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "audioAutoFreezeOpened", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AudioAutoFreezeOpened
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property audioMaxSize: Resource property field representing the maximum size of a single audio.</summary>
            /// <remarks>
            /// 1~2048MB, the default is 200MB, more than not detected.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "audioMaxSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AudioMaxSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property audioOpened: Oss stock scan task detect audio.</summary>
            /// <remarks>
            /// true: scan audio, false: do not scan audio.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "audioOpened", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AudioOpened
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property audioScanLimit: The upper limit of voice scan in the oss stock scan task.</summary>
            /// <remarks>
            /// The default value is 1000/Bucket.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "audioScanLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AudioScanLimit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property audioScenes: The audio detection scenarios included in the oss stock scan task.</summary>
            /// <remarks>
            /// Set the value to ["antispam"].
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "audioScenes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? AudioScenes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoFreezeType: Automatic freeze type.</summary>
            /// <remarks>
            /// Value: acl: modify permissions, copy: Move files.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoFreezeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoFreezeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property bizType: Business scenarios used by the oss stock scan task.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "bizType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BizType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property callbackId: The ID of the primary key of the notification message bound to the oss stock scan task.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "callbackId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CallbackId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property endDate: The end time of the file upload time range indicates the scanning of files uploaded before this time point.</summary>
            /// <remarks>
            /// Example: 2024-12-30 00:00:00 +0800
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndDate
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property imageAdFreezeConfig: Picture automatically freezes the configuration of ad scenes.</summary>
            /// <remarks>
            /// Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imageAdFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? ImageAdFreezeConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property imageAutoFreezeOpened: Picture detection auto freeze switch.</summary>
            /// <remarks>
            /// Value: true: auto freeze, false: not auto freeze.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imageAutoFreezeOpened", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ImageAutoFreezeOpened
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property imageLiveFreezeConfig: Picture automatic freezing live scene configuration.</summary>
            /// <remarks>
            /// Example:{"Type":"suggestion","Value":"block,review"}. The result will be frozen according to the suggestion in the picture detection result.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imageLiveFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? ImageLiveFreezeConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property imageOpened: Oss stock scan task detect images.</summary>
            /// <remarks>
            /// true: scan images, false: do not scan images.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imageOpened", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ImageOpened
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property imagePornFreezeConfig: Picture automatic freezing porn scene configuration.</summary>
            /// <remarks>
            /// Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imagePornFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? ImagePornFreezeConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property imageScanLimit: The upper limit for scanning images in the oss stock scan task.</summary>
            /// <remarks>
            /// The default value is 10000 images per Bucket.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imageScanLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ImageScanLimit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property imageScenes: The image moderation scenario included in the oss stock scan task.Valid values: porn: pornography detection terrorism: terrorist content detection ad: ad violation detection live: undesirable scene detection.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "imageScenes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ImageScenes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property imageTerrorismFreezeConfig: The picture automatically freezes the configuration of terrorism scenes.</summary>
            /// <remarks>
            /// Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imageTerrorismFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? ImageTerrorismFreezeConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ossStockTaskName: The name of the oss stock scan task.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ossStockTaskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OssStockTaskName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scanImageNoFileType: Whether the oss stock scan task detects images with file names without suffixes.</summary>
            /// <remarks>
            /// true: Detect pictures with file names without suffixes, false: Do not detect pictures with file names without suffixes.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scanImageNoFileType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ScanImageNoFileType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property videoAdFreezeConfig: The video automatically freezes the configuration of ad scenarios.</summary>
            /// <remarks>
            /// Example:{"Type":"suggestion","Value":"block,review"}. The results will be frozen according to the suggestion in the video detection results.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "videoAdFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? VideoAdFreezeConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property videoAutoFreezeOpened: Video detection auto freeze switch.</summary>
            /// <remarks>
            /// Value: true: automatically freeze, false: not automatically freeze.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "videoAutoFreezeOpened", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VideoAutoFreezeOpened
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property videoFrameInterval: Resource attribute field representing the framing frequency.</summary>
            /// <remarks>
            /// 1~60 seconds/frame, the default is 1 second/frame.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "videoFrameInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VideoFrameInterval
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property videoLiveFreezeConfig: Video automatic freeze live scene configuration.</summary>
            /// <remarks>
            /// Example:{"Type" : "suggestion", "Value" : "block" }. The results will be frozen according to the suggestion in the video detection results.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "videoLiveFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? VideoLiveFreezeConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property videoMaxFrames: A resource attribute field that represents the upper limit of a single video frame cut.</summary>
            /// <remarks>
            /// 5 to 20000 frames, the default is 200 frames.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "videoMaxFrames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VideoMaxFrames
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property videoMaxSize: Resource property field representing the maximum size of a single video.</summary>
            /// <remarks>
            /// 1~2048MB, the default is 500MB, more than not detected.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "videoMaxSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VideoMaxSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property videoOpened: Oss stock scan task detect video.</summary>
            /// <remarks>
            /// true: scan video, false: do not scan video.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "videoOpened", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VideoOpened
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property videoPornFreezeConfig: Video automatic freezing porn scene configuration.</summary>
            /// <remarks>
            /// Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the video detection result.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "videoPornFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? VideoPornFreezeConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property videoScanLimit: The upper limit of video scanning in the oss stock scan task.</summary>
            /// <remarks>
            /// The default value is 1000/Bucket.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "videoScanLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VideoScanLimit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property videoScenes: The video detection scenarios included in the oss stock scan task.</summary>
            /// <remarks>
            /// porn: pornography detection
            /// terrorism: terrorist content detection
            /// ad: ad violation detection
            /// live: undesirable scene detection
            /// antispam: Video voice antispam.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "videoScenes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? VideoScenes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property videoTerrorismFreezeConfig: The video automatically freezes the configuration of terrorism scenes.</summary>
            /// <remarks>
            /// Example:{"Type": "suggestion","Value":"block,review"}. The results will be frozen according to the suggestion in the video detection results.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "videoTerrorismFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? VideoTerrorismFreezeConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property videoVoiceAntispamFreezeConfig: Voice auto freeze configuration in video.</summary>
            /// <remarks>
            /// Example:{"Type": "suggestion", "Value" : "block" }. The results will be frozen according to the suggestion in the video detection results.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "videoVoiceAntispamFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? VideoVoiceAntispamFreezeConfig
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
