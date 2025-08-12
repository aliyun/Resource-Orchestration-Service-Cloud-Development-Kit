using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Aligreen
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::Aligreen::OssStockTask`, which is used to create a full scan task for Object Storage Service (OSS) buckets.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosOssStockTask`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-ossstocktask
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Aligreen.OssStockTask), fullyQualifiedName: "@alicloud/ros-cdk-aligreen.OssStockTask", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-aligreen.OssStockTaskProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class OssStockTask : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Aligreen.IOssStockTask
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public OssStockTask(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Aligreen.IOssStockTaskProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Aligreen.IOssStockTaskProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected OssStockTask(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected OssStockTask(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute AudioAntispamFreezeConfig: Voice auto freeze configuration.</summary>
        [JsiiProperty(name: "attrAudioAntispamFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAudioAntispamFreezeConfig
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute AudioAutoFreezeOpened: Audio detection auto freeze switch.</summary>
        /// <remarks>
        /// Value: true: automatically freeze, false: not automatically freeze.
        /// </remarks>
        [JsiiProperty(name: "attrAudioAutoFreezeOpened", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAudioAutoFreezeOpened
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute AudioMaxSize: Resource property field representing the maximum size of a single audio.</summary>
        [JsiiProperty(name: "attrAudioMaxSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAudioMaxSize
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute AudioOpened: oss stock scan task detect audio.</summary>
        [JsiiProperty(name: "attrAudioOpened", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAudioOpened
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute AudioScanLimit: The upper limit of voice scan in the oss stock scan task.</summary>
        /// <remarks>
        /// The default value is 1000/Bucket.
        /// </remarks>
        [JsiiProperty(name: "attrAudioScanLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAudioScanLimit
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute AudioScenes: The audio detection scenarios included in the oss stock scan task.</summary>
        /// <remarks>
        /// Set the value to antispam.
        /// </remarks>
        [JsiiProperty(name: "attrAudioScenes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAudioScenes
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute AutoFreezeType: Automatic freeze type.</summary>
        [JsiiProperty(name: "attrAutoFreezeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAutoFreezeType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute BizType: Business scenarios used by the oss stock scan task.</summary>
        [JsiiProperty(name: "attrBizType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrBizType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Buckets: The bucket configuration list of the oss stock scan task.</summary>
        [JsiiProperty(name: "attrBuckets", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrBuckets
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CallbackId: The ID of the primary key of the notification message bound to the oss stock scan task.</summary>
        [JsiiProperty(name: "attrCallbackId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCallbackId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EndDate: The end time of the file upload time range indicates the scanning of files uploaded before this time point.</summary>
        [JsiiProperty(name: "attrEndDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEndDate
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ImageAdFreezeConfig: Picture automatically freezes the configuration of ad scenes.</summary>
        [JsiiProperty(name: "attrImageAdFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrImageAdFreezeConfig
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ImageAutoFreezeOpened: Picture detection auto freeze switch.</summary>
        /// <remarks>
        /// Value: true: auto freeze, false: not auto freeze.
        /// </remarks>
        [JsiiProperty(name: "attrImageAutoFreezeOpened", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrImageAutoFreezeOpened
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ImageLiveFreezeConfig: Picture automatic freezing live scene configuration.</summary>
        [JsiiProperty(name: "attrImageLiveFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrImageLiveFreezeConfig
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ImageOpened: oss stock scan task detect images.</summary>
        [JsiiProperty(name: "attrImageOpened", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrImageOpened
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ImagePornFreezeConfig: Picture automatic freezing porn scene configuration.</summary>
        [JsiiProperty(name: "attrImagePornFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrImagePornFreezeConfig
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ImageScanLimit: The upper limit for scanning images in the oss stock scan task.</summary>
        [JsiiProperty(name: "attrImageScanLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrImageScanLimit
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ImageScenes: The image moderation scenario included in the oss stock scan task.</summary>
        [JsiiProperty(name: "attrImageScenes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrImageScenes
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ImageTerrorismFreezeConfig: The picture automatically freezes the configuration of terrorism scenes.</summary>
        [JsiiProperty(name: "attrImageTerrorismFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrImageTerrorismFreezeConfig
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ScanImageNoFileType: Whether the oss stock scan task detects images with file names without suffixes.</summary>
        [JsiiProperty(name: "attrScanImageNoFileType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrScanImageNoFileType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute StartDate: The start time of the file upload time range represents the files uploaded after scanning this time point.</summary>
        [JsiiProperty(name: "attrStartDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrStartDate
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VideoAdFreezeConfig: The video automatically freezes the configuration of ad scenarios.</summary>
        [JsiiProperty(name: "attrVideoAdFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVideoAdFreezeConfig
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VideoAutoFreezeOpened: Video detection auto freeze switch.</summary>
        /// <remarks>
        /// Value: true: automatically freeze, false: not automatically freeze.
        /// </remarks>
        [JsiiProperty(name: "attrVideoAutoFreezeOpened", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVideoAutoFreezeOpened
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VideoFrameInterval: Resource attribute field representing the framing frequency.</summary>
        [JsiiProperty(name: "attrVideoFrameInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVideoFrameInterval
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VideoLiveFreezeConfig: Video automatic freeze live scene configuration.</summary>
        [JsiiProperty(name: "attrVideoLiveFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVideoLiveFreezeConfig
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VideoMaxFrames: A resource attribute field that represents the upper limit of a single video frame cut.</summary>
        [JsiiProperty(name: "attrVideoMaxFrames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVideoMaxFrames
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VideoMaxSize: Resource property field representing the maximum size of a single video.</summary>
        [JsiiProperty(name: "attrVideoMaxSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVideoMaxSize
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VideoOpened: oss stock scan task detect video.</summary>
        [JsiiProperty(name: "attrVideoOpened", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVideoOpened
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VideoPornFreezeConfig: Video automatic freezing porn scene configuration.</summary>
        [JsiiProperty(name: "attrVideoPornFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVideoPornFreezeConfig
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VideoScanLimit: The upper limit of video scanning in the oss stock scan task.</summary>
        /// <remarks>
        /// The default value is 1000/Bucket.
        /// </remarks>
        [JsiiProperty(name: "attrVideoScanLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVideoScanLimit
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VideoScenes: The video detection scenarios included in the oss stock scan task.</summary>
        [JsiiProperty(name: "attrVideoScenes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVideoScenes
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VideoTerrorismFreezeConfig: The video automatically freezes the configuration of terrorism scenes.</summary>
        [JsiiProperty(name: "attrVideoTerrorismFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVideoTerrorismFreezeConfig
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VideoVoiceAntispamFreezeConfig: Voice auto freeze configuration in video.</summary>
        [JsiiProperty(name: "attrVideoVoiceAntispamFreezeConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVideoVoiceAntispamFreezeConfig
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-aligreen.OssStockTaskProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Aligreen.IOssStockTaskProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Aligreen.IOssStockTaskProps>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        protected virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "id", typeJson: "{\"primitive\":\"string\"}")]
        protected virtual string Id
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "scope", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}")]
        protected virtual AlibabaCloud.SDK.ROS.CDK.Core.Construct Scope
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Construct>()!;
            set => SetInstanceProperty(value);
        }
    }
}
