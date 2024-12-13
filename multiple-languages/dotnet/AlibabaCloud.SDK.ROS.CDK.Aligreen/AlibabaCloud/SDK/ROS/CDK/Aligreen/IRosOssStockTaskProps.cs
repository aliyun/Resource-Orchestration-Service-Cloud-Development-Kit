using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Aligreen
{
    /// <summary>Properties for defining a `RosOssStockTask`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-ossstocktask
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosOssStockTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-aligreen.RosOssStockTaskProps")]
    public interface IRosOssStockTaskProps
    {
        /// <remarks>
        /// <strong>Property</strong>: buckets: The bucket configuration list of the oss stock scan task. Example:[{"Bucket":"bucket_01","Selected":true,"Prefixes":["img\/test_"],"Type":"exclude"}].
        /// </remarks>
        [JsiiProperty(name: "buckets", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Buckets
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: startDate: The start time of the file upload time range represents the files uploaded after scanning this time point.Example: 2024-08-01 00:00:00 +0800
        /// </remarks>
        [JsiiProperty(name: "startDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StartDate
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: audioAntispamFreezeConfig: Voice auto freeze configuration. Example:{"Type": "suggestion", "Value" : "block" }. The results are frozen according to the suggestion in the speech detection results.
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

        /// <remarks>
        /// <strong>Property</strong>: audioAutoFreezeOpened: Audio detection auto freeze switch. Value: true: automatically freeze, false: not automatically freeze.
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

        /// <remarks>
        /// <strong>Property</strong>: audioMaxSize: Resource property field representing the maximum size of a single audio. 1~2048MB, the default is 200MB, more than not detected.
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

        /// <remarks>
        /// <strong>Property</strong>: audioOpened: Oss stock scan task detect audio. true: scan audio, false: do not scan audio.
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

        /// <remarks>
        /// <strong>Property</strong>: audioScanLimit: The upper limit of voice scan in the oss stock scan task. The default value is 1000\/Bucket.
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

        /// <remarks>
        /// <strong>Property</strong>: audioScenes: The audio detection scenarios included in the oss stock scan task. Set the value to ["antispam"].
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

        /// <remarks>
        /// <strong>Property</strong>: autoFreezeType: Automatic freeze type. Value: acl: modify permissions, copy: Move files.
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

        /// <remarks>
        /// <strong>Property</strong>: bizType: Business scenarios used by the oss stock scan task.
        /// </remarks>
        [JsiiProperty(name: "bizType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BizType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: callbackId: The ID of the primary key of the notification message bound to the oss stock scan task.
        /// </remarks>
        [JsiiProperty(name: "callbackId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CallbackId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: endDate: The end time of the file upload time range indicates the scanning of files uploaded before this time point. Example: 2024-12-30 00:00:00 +0800
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

        /// <remarks>
        /// <strong>Property</strong>: imageAdFreezeConfig: Picture automatically freezes the configuration of ad scenes. Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
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

        /// <remarks>
        /// <strong>Property</strong>: imageAutoFreezeOpened: Picture detection auto freeze switch. Value: true: auto freeze, false: not auto freeze.
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

        /// <remarks>
        /// <strong>Property</strong>: imageLiveFreezeConfig: Picture automatic freezing live scene configuration. Example:{"Type":"suggestion","Value":"block,review"}. The result will be frozen according to the suggestion in the picture detection result.
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

        /// <remarks>
        /// <strong>Property</strong>: imageOpened: Oss stock scan task detect images. true: scan images, false: do not scan images.
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

        /// <remarks>
        /// <strong>Property</strong>: imagePornFreezeConfig: Picture automatic freezing porn scene configuration. Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
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

        /// <remarks>
        /// <strong>Property</strong>: imageScanLimit: The upper limit for scanning images in the oss stock scan task. The default value is 10000 images per Bucket.
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

        /// <remarks>
        /// <strong>Property</strong>: imageScenes: The image moderation scenario included in the oss stock scan task.Valid values:
        /// porn: pornography detection
        /// terrorism: terrorist content detection
        /// ad: ad violation detection
        /// live: undesirable scene detection.
        /// </remarks>
        [JsiiProperty(name: "imageScenes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImageScenes
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: imageTerrorismFreezeConfig: The picture automatically freezes the configuration of terrorism scenes. Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
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

        /// <remarks>
        /// <strong>Property</strong>: ossStockTaskName: The name of the oss stock scan task.
        /// </remarks>
        [JsiiProperty(name: "ossStockTaskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OssStockTaskName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: scanImageNoFileType: Whether the oss stock scan task detects images with file names without suffixes. true: Detect pictures with file names without suffixes, false: Do not detect pictures with file names without suffixes.
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

        /// <remarks>
        /// <strong>Property</strong>: videoAdFreezeConfig: The video automatically freezes the configuration of ad scenarios. Example:{"Type":"suggestion","Value":"block,review"}. The results will be frozen according to the suggestion in the video detection results.
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

        /// <remarks>
        /// <strong>Property</strong>: videoAutoFreezeOpened: Video detection auto freeze switch. Value: true: automatically freeze, false: not automatically freeze.
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

        /// <remarks>
        /// <strong>Property</strong>: videoFrameInterval: Resource attribute field representing the framing frequency. 1~60 seconds\/frame, the default is 1 second\/frame.
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

        /// <remarks>
        /// <strong>Property</strong>: videoLiveFreezeConfig: Video automatic freeze live scene configuration. Example:{"Type" : "suggestion", "Value" : "block" }. The results will be frozen according to the suggestion in the video detection results.
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

        /// <remarks>
        /// <strong>Property</strong>: videoMaxFrames: A resource attribute field that represents the upper limit of a single video frame cut. 5 to 20000 frames, the default is 200 frames.
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

        /// <remarks>
        /// <strong>Property</strong>: videoMaxSize: Resource property field representing the maximum size of a single video. 1~2048MB, the default is 500MB, more than not detected.
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

        /// <remarks>
        /// <strong>Property</strong>: videoOpened: Oss stock scan task detect video. true: scan video, false: do not scan video.
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

        /// <remarks>
        /// <strong>Property</strong>: videoPornFreezeConfig: Video automatic freezing porn scene configuration. Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the video detection result.
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

        /// <remarks>
        /// <strong>Property</strong>: videoScanLimit: The upper limit of video scanning in the oss stock scan task. The default value is 1000\/Bucket.
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

        /// <remarks>
        /// <strong>Property</strong>: videoScenes: The video detection scenarios included in the oss stock scan task.
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

        /// <remarks>
        /// <strong>Property</strong>: videoTerrorismFreezeConfig: The video automatically freezes the configuration of terrorism scenes. Example:{"Type": "suggestion","Value":"block,review"}. The results will be frozen according to the suggestion in the video detection results.
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

        /// <remarks>
        /// <strong>Property</strong>: videoVoiceAntispamFreezeConfig: Voice auto freeze configuration in video. Example:{"Type": "suggestion", "Value" : "block" }. The results will be frozen according to the suggestion in the video detection results.
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

        /// <summary>Properties for defining a `RosOssStockTask`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-ossstocktask
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosOssStockTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-aligreen.RosOssStockTaskProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Aligreen.IRosOssStockTaskProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: buckets: The bucket configuration list of the oss stock scan task. Example:[{"Bucket":"bucket_01","Selected":true,"Prefixes":["img\/test_"],"Type":"exclude"}].
            /// </remarks>
            [JsiiProperty(name: "buckets", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Buckets
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: startDate: The start time of the file upload time range represents the files uploaded after scanning this time point.Example: 2024-08-01 00:00:00 +0800
            /// </remarks>
            [JsiiProperty(name: "startDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StartDate
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: audioAntispamFreezeConfig: Voice auto freeze configuration. Example:{"Type": "suggestion", "Value" : "block" }. The results are frozen according to the suggestion in the speech detection results.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "audioAntispamFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? AudioAntispamFreezeConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: audioAutoFreezeOpened: Audio detection auto freeze switch. Value: true: automatically freeze, false: not automatically freeze.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "audioAutoFreezeOpened", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AudioAutoFreezeOpened
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: audioMaxSize: Resource property field representing the maximum size of a single audio. 1~2048MB, the default is 200MB, more than not detected.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "audioMaxSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AudioMaxSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: audioOpened: Oss stock scan task detect audio. true: scan audio, false: do not scan audio.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "audioOpened", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AudioOpened
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: audioScanLimit: The upper limit of voice scan in the oss stock scan task. The default value is 1000\/Bucket.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "audioScanLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AudioScanLimit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: audioScenes: The audio detection scenarios included in the oss stock scan task. Set the value to ["antispam"].
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "audioScenes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? AudioScenes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: autoFreezeType: Automatic freeze type. Value: acl: modify permissions, copy: Move files.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoFreezeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoFreezeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: bizType: Business scenarios used by the oss stock scan task.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bizType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BizType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: callbackId: The ID of the primary key of the notification message bound to the oss stock scan task.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "callbackId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CallbackId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: endDate: The end time of the file upload time range indicates the scanning of files uploaded before this time point. Example: 2024-12-30 00:00:00 +0800
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndDate
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: imageAdFreezeConfig: Picture automatically freezes the configuration of ad scenes. Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imageAdFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? ImageAdFreezeConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: imageAutoFreezeOpened: Picture detection auto freeze switch. Value: true: auto freeze, false: not auto freeze.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imageAutoFreezeOpened", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ImageAutoFreezeOpened
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: imageLiveFreezeConfig: Picture automatic freezing live scene configuration. Example:{"Type":"suggestion","Value":"block,review"}. The result will be frozen according to the suggestion in the picture detection result.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imageLiveFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? ImageLiveFreezeConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: imageOpened: Oss stock scan task detect images. true: scan images, false: do not scan images.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imageOpened", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ImageOpened
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: imagePornFreezeConfig: Picture automatic freezing porn scene configuration. Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imagePornFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? ImagePornFreezeConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: imageScanLimit: The upper limit for scanning images in the oss stock scan task. The default value is 10000 images per Bucket.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imageScanLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ImageScanLimit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: imageScenes: The image moderation scenario included in the oss stock scan task.Valid values:
            /// porn: pornography detection
            /// terrorism: terrorist content detection
            /// ad: ad violation detection
            /// live: undesirable scene detection.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imageScenes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ImageScenes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: imageTerrorismFreezeConfig: The picture automatically freezes the configuration of terrorism scenes. Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imageTerrorismFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? ImageTerrorismFreezeConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ossStockTaskName: The name of the oss stock scan task.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ossStockTaskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OssStockTaskName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: scanImageNoFileType: Whether the oss stock scan task detects images with file names without suffixes. true: Detect pictures with file names without suffixes, false: Do not detect pictures with file names without suffixes.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scanImageNoFileType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ScanImageNoFileType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: videoAdFreezeConfig: The video automatically freezes the configuration of ad scenarios. Example:{"Type":"suggestion","Value":"block,review"}. The results will be frozen according to the suggestion in the video detection results.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "videoAdFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? VideoAdFreezeConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: videoAutoFreezeOpened: Video detection auto freeze switch. Value: true: automatically freeze, false: not automatically freeze.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "videoAutoFreezeOpened", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VideoAutoFreezeOpened
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: videoFrameInterval: Resource attribute field representing the framing frequency. 1~60 seconds\/frame, the default is 1 second\/frame.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "videoFrameInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VideoFrameInterval
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: videoLiveFreezeConfig: Video automatic freeze live scene configuration. Example:{"Type" : "suggestion", "Value" : "block" }. The results will be frozen according to the suggestion in the video detection results.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "videoLiveFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? VideoLiveFreezeConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: videoMaxFrames: A resource attribute field that represents the upper limit of a single video frame cut. 5 to 20000 frames, the default is 200 frames.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "videoMaxFrames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VideoMaxFrames
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: videoMaxSize: Resource property field representing the maximum size of a single video. 1~2048MB, the default is 500MB, more than not detected.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "videoMaxSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VideoMaxSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: videoOpened: Oss stock scan task detect video. true: scan video, false: do not scan video.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "videoOpened", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VideoOpened
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: videoPornFreezeConfig: Video automatic freezing porn scene configuration. Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the video detection result.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "videoPornFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? VideoPornFreezeConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: videoScanLimit: The upper limit of video scanning in the oss stock scan task. The default value is 1000\/Bucket.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "videoScanLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VideoScanLimit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: videoScenes: The video detection scenarios included in the oss stock scan task.
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

            /// <remarks>
            /// <strong>Property</strong>: videoTerrorismFreezeConfig: The video automatically freezes the configuration of terrorism scenes. Example:{"Type": "suggestion","Value":"block,review"}. The results will be frozen according to the suggestion in the video detection results.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "videoTerrorismFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? VideoTerrorismFreezeConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: videoVoiceAntispamFreezeConfig: Voice auto freeze configuration in video. Example:{"Type": "suggestion", "Value" : "block" }. The results will be frozen according to the suggestion in the video detection results.
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
