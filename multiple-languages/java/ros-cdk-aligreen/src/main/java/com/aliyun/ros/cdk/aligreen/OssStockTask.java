package com.aliyun.ros.cdk.aligreen;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::Aligreen::OssStockTask</code>, which is used to create a full scan task for Object Storage Service (OSS) buckets.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:20.760Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.aligreen.$Module.class, fqn = "@alicloud/ros-cdk-aligreen.OssStockTask")
public class OssStockTask extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.aligreen.IOssStockTask {

    protected OssStockTask(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected OssStockTask(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public OssStockTask(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.aligreen.OssStockTaskProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public OssStockTask(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.aligreen.OssStockTaskProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AudioAntispamFreezeConfig: Voice auto freeze configuration.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAudioAntispamFreezeConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrAudioAntispamFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AudioAutoFreezeOpened: Audio detection auto freeze switch.
     * <p>
     * Value: true: automatically freeze, false: not automatically freeze.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAudioAutoFreezeOpened() {
        return software.amazon.jsii.Kernel.get(this, "attrAudioAutoFreezeOpened", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AudioMaxSize: Resource property field representing the maximum size of a single audio.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAudioMaxSize() {
        return software.amazon.jsii.Kernel.get(this, "attrAudioMaxSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AudioOpened: oss stock scan task detect audio.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAudioOpened() {
        return software.amazon.jsii.Kernel.get(this, "attrAudioOpened", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AudioScanLimit: The upper limit of voice scan in the oss stock scan task.
     * <p>
     * The default value is 1000/Bucket.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAudioScanLimit() {
        return software.amazon.jsii.Kernel.get(this, "attrAudioScanLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AudioScenes: The audio detection scenarios included in the oss stock scan task.
     * <p>
     * Set the value to antispam.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAudioScenes() {
        return software.amazon.jsii.Kernel.get(this, "attrAudioScenes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AutoFreezeType: Automatic freeze type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoFreezeType() {
        return software.amazon.jsii.Kernel.get(this, "attrAutoFreezeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute BizType: Business scenarios used by the oss stock scan task.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBizType() {
        return software.amazon.jsii.Kernel.get(this, "attrBizType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Buckets: The bucket configuration list of the oss stock scan task.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBuckets() {
        return software.amazon.jsii.Kernel.get(this, "attrBuckets", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CallbackId: The ID of the primary key of the notification message bound to the oss stock scan task.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCallbackId() {
        return software.amazon.jsii.Kernel.get(this, "attrCallbackId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EndDate: The end time of the file upload time range indicates the scanning of files uploaded before this time point.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndDate() {
        return software.amazon.jsii.Kernel.get(this, "attrEndDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ImageAdFreezeConfig: Picture automatically freezes the configuration of ad scenes.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageAdFreezeConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrImageAdFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ImageAutoFreezeOpened: Picture detection auto freeze switch.
     * <p>
     * Value: true: auto freeze, false: not auto freeze.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageAutoFreezeOpened() {
        return software.amazon.jsii.Kernel.get(this, "attrImageAutoFreezeOpened", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ImageLiveFreezeConfig: Picture automatic freezing live scene configuration.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageLiveFreezeConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrImageLiveFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ImageOpened: oss stock scan task detect images.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageOpened() {
        return software.amazon.jsii.Kernel.get(this, "attrImageOpened", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ImagePornFreezeConfig: Picture automatic freezing porn scene configuration.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrImagePornFreezeConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrImagePornFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ImageScanLimit: The upper limit for scanning images in the oss stock scan task.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageScanLimit() {
        return software.amazon.jsii.Kernel.get(this, "attrImageScanLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ImageScenes: The image moderation scenario included in the oss stock scan task.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageScenes() {
        return software.amazon.jsii.Kernel.get(this, "attrImageScenes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ImageTerrorismFreezeConfig: The picture automatically freezes the configuration of terrorism scenes.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageTerrorismFreezeConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrImageTerrorismFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ScanImageNoFileType: Whether the oss stock scan task detects images with file names without suffixes.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScanImageNoFileType() {
        return software.amazon.jsii.Kernel.get(this, "attrScanImageNoFileType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute StartDate: The start time of the file upload time range represents the files uploaded after scanning this time point.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrStartDate() {
        return software.amazon.jsii.Kernel.get(this, "attrStartDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VideoAdFreezeConfig: The video automatically freezes the configuration of ad scenarios.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoAdFreezeConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrVideoAdFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VideoAutoFreezeOpened: Video detection auto freeze switch.
     * <p>
     * Value: true: automatically freeze, false: not automatically freeze.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoAutoFreezeOpened() {
        return software.amazon.jsii.Kernel.get(this, "attrVideoAutoFreezeOpened", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VideoFrameInterval: Resource attribute field representing the framing frequency.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoFrameInterval() {
        return software.amazon.jsii.Kernel.get(this, "attrVideoFrameInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VideoLiveFreezeConfig: Video automatic freeze live scene configuration.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoLiveFreezeConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrVideoLiveFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VideoMaxFrames: A resource attribute field that represents the upper limit of a single video frame cut.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoMaxFrames() {
        return software.amazon.jsii.Kernel.get(this, "attrVideoMaxFrames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VideoMaxSize: Resource property field representing the maximum size of a single video.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoMaxSize() {
        return software.amazon.jsii.Kernel.get(this, "attrVideoMaxSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VideoOpened: oss stock scan task detect video.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoOpened() {
        return software.amazon.jsii.Kernel.get(this, "attrVideoOpened", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VideoPornFreezeConfig: Video automatic freezing porn scene configuration.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoPornFreezeConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrVideoPornFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VideoScanLimit: The upper limit of video scanning in the oss stock scan task.
     * <p>
     * The default value is 1000/Bucket.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoScanLimit() {
        return software.amazon.jsii.Kernel.get(this, "attrVideoScanLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VideoScenes: The video detection scenarios included in the oss stock scan task.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoScenes() {
        return software.amazon.jsii.Kernel.get(this, "attrVideoScenes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VideoTerrorismFreezeConfig: The video automatically freezes the configuration of terrorism scenes.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoTerrorismFreezeConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrVideoTerrorismFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VideoVoiceAntispamFreezeConfig: Voice auto freeze configuration in video.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoVoiceAntispamFreezeConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrVideoVoiceAntispamFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.aligreen.OssStockTaskProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.aligreen.OssStockTaskProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.aligreen.OssStockTask}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.aligreen.OssStockTask> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.aligreen.OssStockTaskProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.aligreen.OssStockTaskProps.Builder();
        }

        /**
         * Property buckets: The bucket configuration list of the oss stock scan task.
         * <p>
         * Example:[{"Bucket":"bucket_01","Selected":true,"Prefixes":["img/test_"],"Type":"exclude"}].
         * <p>
         * @return {@code this}
         * @param buckets Property buckets: The bucket configuration list of the oss stock scan task. This parameter is required.
         */
        public Builder buckets(final java.util.List<? extends java.lang.Object> buckets) {
            this.props.buckets(buckets);
            return this;
        }
        /**
         * Property buckets: The bucket configuration list of the oss stock scan task.
         * <p>
         * Example:[{"Bucket":"bucket_01","Selected":true,"Prefixes":["img/test_"],"Type":"exclude"}].
         * <p>
         * @return {@code this}
         * @param buckets Property buckets: The bucket configuration list of the oss stock scan task. This parameter is required.
         */
        public Builder buckets(final com.aliyun.ros.cdk.core.IResolvable buckets) {
            this.props.buckets(buckets);
            return this;
        }

        /**
         * Property startDate: The start time of the file upload time range represents the files uploaded after scanning this time point.Example: 2024-08-01 00:00:00 +0800.
         * <p>
         * @return {@code this}
         * @param startDate Property startDate: The start time of the file upload time range represents the files uploaded after scanning this time point.Example: 2024-08-01 00:00:00 +0800. This parameter is required.
         */
        public Builder startDate(final java.lang.String startDate) {
            this.props.startDate(startDate);
            return this;
        }
        /**
         * Property startDate: The start time of the file upload time range represents the files uploaded after scanning this time point.Example: 2024-08-01 00:00:00 +0800.
         * <p>
         * @return {@code this}
         * @param startDate Property startDate: The start time of the file upload time range represents the files uploaded after scanning this time point.Example: 2024-08-01 00:00:00 +0800. This parameter is required.
         */
        public Builder startDate(final com.aliyun.ros.cdk.core.IResolvable startDate) {
            this.props.startDate(startDate);
            return this;
        }

        /**
         * Property audioAntispamFreezeConfig: Voice auto freeze configuration.
         * <p>
         * Example:{"Type": "suggestion", "Value" : "block" }. The results are frozen according to the suggestion in the speech detection results.
         * <p>
         * @return {@code this}
         * @param audioAntispamFreezeConfig Property audioAntispamFreezeConfig: Voice auto freeze configuration. This parameter is required.
         */
        public Builder audioAntispamFreezeConfig(final com.aliyun.ros.cdk.core.IResolvable audioAntispamFreezeConfig) {
            this.props.audioAntispamFreezeConfig(audioAntispamFreezeConfig);
            return this;
        }
        /**
         * Property audioAntispamFreezeConfig: Voice auto freeze configuration.
         * <p>
         * Example:{"Type": "suggestion", "Value" : "block" }. The results are frozen according to the suggestion in the speech detection results.
         * <p>
         * @return {@code this}
         * @param audioAntispamFreezeConfig Property audioAntispamFreezeConfig: Voice auto freeze configuration. This parameter is required.
         */
        public Builder audioAntispamFreezeConfig(final java.util.Map<java.lang.String, ? extends java.lang.Object> audioAntispamFreezeConfig) {
            this.props.audioAntispamFreezeConfig(audioAntispamFreezeConfig);
            return this;
        }

        /**
         * Property audioAutoFreezeOpened: Audio detection auto freeze switch.
         * <p>
         * Value: true: automatically freeze, false: not automatically freeze.
         * <p>
         * @return {@code this}
         * @param audioAutoFreezeOpened Property audioAutoFreezeOpened: Audio detection auto freeze switch. This parameter is required.
         */
        public Builder audioAutoFreezeOpened(final java.lang.Boolean audioAutoFreezeOpened) {
            this.props.audioAutoFreezeOpened(audioAutoFreezeOpened);
            return this;
        }
        /**
         * Property audioAutoFreezeOpened: Audio detection auto freeze switch.
         * <p>
         * Value: true: automatically freeze, false: not automatically freeze.
         * <p>
         * @return {@code this}
         * @param audioAutoFreezeOpened Property audioAutoFreezeOpened: Audio detection auto freeze switch. This parameter is required.
         */
        public Builder audioAutoFreezeOpened(final com.aliyun.ros.cdk.core.IResolvable audioAutoFreezeOpened) {
            this.props.audioAutoFreezeOpened(audioAutoFreezeOpened);
            return this;
        }

        /**
         * Property audioMaxSize: Resource property field representing the maximum size of a single audio.
         * <p>
         * 1~2048MB, the default is 200MB, more than not detected.
         * <p>
         * @return {@code this}
         * @param audioMaxSize Property audioMaxSize: Resource property field representing the maximum size of a single audio. This parameter is required.
         */
        public Builder audioMaxSize(final java.lang.Number audioMaxSize) {
            this.props.audioMaxSize(audioMaxSize);
            return this;
        }
        /**
         * Property audioMaxSize: Resource property field representing the maximum size of a single audio.
         * <p>
         * 1~2048MB, the default is 200MB, more than not detected.
         * <p>
         * @return {@code this}
         * @param audioMaxSize Property audioMaxSize: Resource property field representing the maximum size of a single audio. This parameter is required.
         */
        public Builder audioMaxSize(final com.aliyun.ros.cdk.core.IResolvable audioMaxSize) {
            this.props.audioMaxSize(audioMaxSize);
            return this;
        }

        /**
         * Property audioOpened: Oss stock scan task detect audio.
         * <p>
         * true: scan audio, false: do not scan audio.
         * <p>
         * @return {@code this}
         * @param audioOpened Property audioOpened: Oss stock scan task detect audio. This parameter is required.
         */
        public Builder audioOpened(final java.lang.Boolean audioOpened) {
            this.props.audioOpened(audioOpened);
            return this;
        }
        /**
         * Property audioOpened: Oss stock scan task detect audio.
         * <p>
         * true: scan audio, false: do not scan audio.
         * <p>
         * @return {@code this}
         * @param audioOpened Property audioOpened: Oss stock scan task detect audio. This parameter is required.
         */
        public Builder audioOpened(final com.aliyun.ros.cdk.core.IResolvable audioOpened) {
            this.props.audioOpened(audioOpened);
            return this;
        }

        /**
         * Property audioScanLimit: The upper limit of voice scan in the oss stock scan task.
         * <p>
         * The default value is 1000/Bucket.
         * <p>
         * @return {@code this}
         * @param audioScanLimit Property audioScanLimit: The upper limit of voice scan in the oss stock scan task. This parameter is required.
         */
        public Builder audioScanLimit(final java.lang.Number audioScanLimit) {
            this.props.audioScanLimit(audioScanLimit);
            return this;
        }
        /**
         * Property audioScanLimit: The upper limit of voice scan in the oss stock scan task.
         * <p>
         * The default value is 1000/Bucket.
         * <p>
         * @return {@code this}
         * @param audioScanLimit Property audioScanLimit: The upper limit of voice scan in the oss stock scan task. This parameter is required.
         */
        public Builder audioScanLimit(final com.aliyun.ros.cdk.core.IResolvable audioScanLimit) {
            this.props.audioScanLimit(audioScanLimit);
            return this;
        }

        /**
         * Property audioScenes: The audio detection scenarios included in the oss stock scan task.
         * <p>
         * Set the value to ["antispam"].
         * <p>
         * @return {@code this}
         * @param audioScenes Property audioScenes: The audio detection scenarios included in the oss stock scan task. This parameter is required.
         */
        public Builder audioScenes(final com.aliyun.ros.cdk.core.IResolvable audioScenes) {
            this.props.audioScenes(audioScenes);
            return this;
        }
        /**
         * Property audioScenes: The audio detection scenarios included in the oss stock scan task.
         * <p>
         * Set the value to ["antispam"].
         * <p>
         * @return {@code this}
         * @param audioScenes Property audioScenes: The audio detection scenarios included in the oss stock scan task. This parameter is required.
         */
        public Builder audioScenes(final java.util.List<? extends java.lang.Object> audioScenes) {
            this.props.audioScenes(audioScenes);
            return this;
        }

        /**
         * Property autoFreezeType: Automatic freeze type.
         * <p>
         * Value: acl: modify permissions, copy: Move files.
         * <p>
         * @return {@code this}
         * @param autoFreezeType Property autoFreezeType: Automatic freeze type. This parameter is required.
         */
        public Builder autoFreezeType(final java.lang.String autoFreezeType) {
            this.props.autoFreezeType(autoFreezeType);
            return this;
        }
        /**
         * Property autoFreezeType: Automatic freeze type.
         * <p>
         * Value: acl: modify permissions, copy: Move files.
         * <p>
         * @return {@code this}
         * @param autoFreezeType Property autoFreezeType: Automatic freeze type. This parameter is required.
         */
        public Builder autoFreezeType(final com.aliyun.ros.cdk.core.IResolvable autoFreezeType) {
            this.props.autoFreezeType(autoFreezeType);
            return this;
        }

        /**
         * Property bizType: Business scenarios used by the oss stock scan task.
         * <p>
         * @return {@code this}
         * @param bizType Property bizType: Business scenarios used by the oss stock scan task. This parameter is required.
         */
        public Builder bizType(final java.lang.String bizType) {
            this.props.bizType(bizType);
            return this;
        }
        /**
         * Property bizType: Business scenarios used by the oss stock scan task.
         * <p>
         * @return {@code this}
         * @param bizType Property bizType: Business scenarios used by the oss stock scan task. This parameter is required.
         */
        public Builder bizType(final com.aliyun.ros.cdk.core.IResolvable bizType) {
            this.props.bizType(bizType);
            return this;
        }

        /**
         * Property callbackId: The ID of the primary key of the notification message bound to the oss stock scan task.
         * <p>
         * @return {@code this}
         * @param callbackId Property callbackId: The ID of the primary key of the notification message bound to the oss stock scan task. This parameter is required.
         */
        public Builder callbackId(final java.lang.Number callbackId) {
            this.props.callbackId(callbackId);
            return this;
        }
        /**
         * Property callbackId: The ID of the primary key of the notification message bound to the oss stock scan task.
         * <p>
         * @return {@code this}
         * @param callbackId Property callbackId: The ID of the primary key of the notification message bound to the oss stock scan task. This parameter is required.
         */
        public Builder callbackId(final com.aliyun.ros.cdk.core.IResolvable callbackId) {
            this.props.callbackId(callbackId);
            return this;
        }

        /**
         * Property endDate: The end time of the file upload time range indicates the scanning of files uploaded before this time point.
         * <p>
         * Example: 2024-12-30 00:00:00 +0800
         * <p>
         * @return {@code this}
         * @param endDate Property endDate: The end time of the file upload time range indicates the scanning of files uploaded before this time point. This parameter is required.
         */
        public Builder endDate(final java.lang.String endDate) {
            this.props.endDate(endDate);
            return this;
        }
        /**
         * Property endDate: The end time of the file upload time range indicates the scanning of files uploaded before this time point.
         * <p>
         * Example: 2024-12-30 00:00:00 +0800
         * <p>
         * @return {@code this}
         * @param endDate Property endDate: The end time of the file upload time range indicates the scanning of files uploaded before this time point. This parameter is required.
         */
        public Builder endDate(final com.aliyun.ros.cdk.core.IResolvable endDate) {
            this.props.endDate(endDate);
            return this;
        }

        /**
         * Property imageAdFreezeConfig: Picture automatically freezes the configuration of ad scenes.
         * <p>
         * Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
         * <p>
         * @return {@code this}
         * @param imageAdFreezeConfig Property imageAdFreezeConfig: Picture automatically freezes the configuration of ad scenes. This parameter is required.
         */
        public Builder imageAdFreezeConfig(final com.aliyun.ros.cdk.core.IResolvable imageAdFreezeConfig) {
            this.props.imageAdFreezeConfig(imageAdFreezeConfig);
            return this;
        }
        /**
         * Property imageAdFreezeConfig: Picture automatically freezes the configuration of ad scenes.
         * <p>
         * Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
         * <p>
         * @return {@code this}
         * @param imageAdFreezeConfig Property imageAdFreezeConfig: Picture automatically freezes the configuration of ad scenes. This parameter is required.
         */
        public Builder imageAdFreezeConfig(final java.util.Map<java.lang.String, ? extends java.lang.Object> imageAdFreezeConfig) {
            this.props.imageAdFreezeConfig(imageAdFreezeConfig);
            return this;
        }

        /**
         * Property imageAutoFreezeOpened: Picture detection auto freeze switch.
         * <p>
         * Value: true: auto freeze, false: not auto freeze.
         * <p>
         * @return {@code this}
         * @param imageAutoFreezeOpened Property imageAutoFreezeOpened: Picture detection auto freeze switch. This parameter is required.
         */
        public Builder imageAutoFreezeOpened(final java.lang.Boolean imageAutoFreezeOpened) {
            this.props.imageAutoFreezeOpened(imageAutoFreezeOpened);
            return this;
        }
        /**
         * Property imageAutoFreezeOpened: Picture detection auto freeze switch.
         * <p>
         * Value: true: auto freeze, false: not auto freeze.
         * <p>
         * @return {@code this}
         * @param imageAutoFreezeOpened Property imageAutoFreezeOpened: Picture detection auto freeze switch. This parameter is required.
         */
        public Builder imageAutoFreezeOpened(final com.aliyun.ros.cdk.core.IResolvable imageAutoFreezeOpened) {
            this.props.imageAutoFreezeOpened(imageAutoFreezeOpened);
            return this;
        }

        /**
         * Property imageLiveFreezeConfig: Picture automatic freezing live scene configuration.
         * <p>
         * Example:{"Type":"suggestion","Value":"block,review"}. The result will be frozen according to the suggestion in the picture detection result.
         * <p>
         * @return {@code this}
         * @param imageLiveFreezeConfig Property imageLiveFreezeConfig: Picture automatic freezing live scene configuration. This parameter is required.
         */
        public Builder imageLiveFreezeConfig(final com.aliyun.ros.cdk.core.IResolvable imageLiveFreezeConfig) {
            this.props.imageLiveFreezeConfig(imageLiveFreezeConfig);
            return this;
        }
        /**
         * Property imageLiveFreezeConfig: Picture automatic freezing live scene configuration.
         * <p>
         * Example:{"Type":"suggestion","Value":"block,review"}. The result will be frozen according to the suggestion in the picture detection result.
         * <p>
         * @return {@code this}
         * @param imageLiveFreezeConfig Property imageLiveFreezeConfig: Picture automatic freezing live scene configuration. This parameter is required.
         */
        public Builder imageLiveFreezeConfig(final java.util.Map<java.lang.String, ? extends java.lang.Object> imageLiveFreezeConfig) {
            this.props.imageLiveFreezeConfig(imageLiveFreezeConfig);
            return this;
        }

        /**
         * Property imageOpened: Oss stock scan task detect images.
         * <p>
         * true: scan images, false: do not scan images.
         * <p>
         * @return {@code this}
         * @param imageOpened Property imageOpened: Oss stock scan task detect images. This parameter is required.
         */
        public Builder imageOpened(final java.lang.Boolean imageOpened) {
            this.props.imageOpened(imageOpened);
            return this;
        }
        /**
         * Property imageOpened: Oss stock scan task detect images.
         * <p>
         * true: scan images, false: do not scan images.
         * <p>
         * @return {@code this}
         * @param imageOpened Property imageOpened: Oss stock scan task detect images. This parameter is required.
         */
        public Builder imageOpened(final com.aliyun.ros.cdk.core.IResolvable imageOpened) {
            this.props.imageOpened(imageOpened);
            return this;
        }

        /**
         * Property imagePornFreezeConfig: Picture automatic freezing porn scene configuration.
         * <p>
         * Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
         * <p>
         * @return {@code this}
         * @param imagePornFreezeConfig Property imagePornFreezeConfig: Picture automatic freezing porn scene configuration. This parameter is required.
         */
        public Builder imagePornFreezeConfig(final com.aliyun.ros.cdk.core.IResolvable imagePornFreezeConfig) {
            this.props.imagePornFreezeConfig(imagePornFreezeConfig);
            return this;
        }
        /**
         * Property imagePornFreezeConfig: Picture automatic freezing porn scene configuration.
         * <p>
         * Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
         * <p>
         * @return {@code this}
         * @param imagePornFreezeConfig Property imagePornFreezeConfig: Picture automatic freezing porn scene configuration. This parameter is required.
         */
        public Builder imagePornFreezeConfig(final java.util.Map<java.lang.String, ? extends java.lang.Object> imagePornFreezeConfig) {
            this.props.imagePornFreezeConfig(imagePornFreezeConfig);
            return this;
        }

        /**
         * Property imageScanLimit: The upper limit for scanning images in the oss stock scan task.
         * <p>
         * The default value is 10000 images per Bucket.
         * <p>
         * @return {@code this}
         * @param imageScanLimit Property imageScanLimit: The upper limit for scanning images in the oss stock scan task. This parameter is required.
         */
        public Builder imageScanLimit(final java.lang.Number imageScanLimit) {
            this.props.imageScanLimit(imageScanLimit);
            return this;
        }
        /**
         * Property imageScanLimit: The upper limit for scanning images in the oss stock scan task.
         * <p>
         * The default value is 10000 images per Bucket.
         * <p>
         * @return {@code this}
         * @param imageScanLimit Property imageScanLimit: The upper limit for scanning images in the oss stock scan task. This parameter is required.
         */
        public Builder imageScanLimit(final com.aliyun.ros.cdk.core.IResolvable imageScanLimit) {
            this.props.imageScanLimit(imageScanLimit);
            return this;
        }

        /**
         * Property imageScenes: The image moderation scenario included in the oss stock scan task.Valid values: porn: pornography detection terrorism: terrorist content detection ad: ad violation detection live: undesirable scene detection.
         * <p>
         * @return {@code this}
         * @param imageScenes Property imageScenes: The image moderation scenario included in the oss stock scan task.Valid values: porn: pornography detection terrorism: terrorist content detection ad: ad violation detection live: undesirable scene detection. This parameter is required.
         */
        public Builder imageScenes(final com.aliyun.ros.cdk.core.IResolvable imageScenes) {
            this.props.imageScenes(imageScenes);
            return this;
        }
        /**
         * Property imageScenes: The image moderation scenario included in the oss stock scan task.Valid values: porn: pornography detection terrorism: terrorist content detection ad: ad violation detection live: undesirable scene detection.
         * <p>
         * @return {@code this}
         * @param imageScenes Property imageScenes: The image moderation scenario included in the oss stock scan task.Valid values: porn: pornography detection terrorism: terrorist content detection ad: ad violation detection live: undesirable scene detection. This parameter is required.
         */
        public Builder imageScenes(final java.util.List<? extends java.lang.Object> imageScenes) {
            this.props.imageScenes(imageScenes);
            return this;
        }

        /**
         * Property imageTerrorismFreezeConfig: The picture automatically freezes the configuration of terrorism scenes.
         * <p>
         * Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
         * <p>
         * @return {@code this}
         * @param imageTerrorismFreezeConfig Property imageTerrorismFreezeConfig: The picture automatically freezes the configuration of terrorism scenes. This parameter is required.
         */
        public Builder imageTerrorismFreezeConfig(final com.aliyun.ros.cdk.core.IResolvable imageTerrorismFreezeConfig) {
            this.props.imageTerrorismFreezeConfig(imageTerrorismFreezeConfig);
            return this;
        }
        /**
         * Property imageTerrorismFreezeConfig: The picture automatically freezes the configuration of terrorism scenes.
         * <p>
         * Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
         * <p>
         * @return {@code this}
         * @param imageTerrorismFreezeConfig Property imageTerrorismFreezeConfig: The picture automatically freezes the configuration of terrorism scenes. This parameter is required.
         */
        public Builder imageTerrorismFreezeConfig(final java.util.Map<java.lang.String, ? extends java.lang.Object> imageTerrorismFreezeConfig) {
            this.props.imageTerrorismFreezeConfig(imageTerrorismFreezeConfig);
            return this;
        }

        /**
         * Property ossStockTaskName: The name of the oss stock scan task.
         * <p>
         * @return {@code this}
         * @param ossStockTaskName Property ossStockTaskName: The name of the oss stock scan task. This parameter is required.
         */
        public Builder ossStockTaskName(final java.lang.String ossStockTaskName) {
            this.props.ossStockTaskName(ossStockTaskName);
            return this;
        }
        /**
         * Property ossStockTaskName: The name of the oss stock scan task.
         * <p>
         * @return {@code this}
         * @param ossStockTaskName Property ossStockTaskName: The name of the oss stock scan task. This parameter is required.
         */
        public Builder ossStockTaskName(final com.aliyun.ros.cdk.core.IResolvable ossStockTaskName) {
            this.props.ossStockTaskName(ossStockTaskName);
            return this;
        }

        /**
         * Property scanImageNoFileType: Whether the oss stock scan task detects images with file names without suffixes.
         * <p>
         * true: Detect pictures with file names without suffixes, false: Do not detect pictures with file names without suffixes.
         * <p>
         * @return {@code this}
         * @param scanImageNoFileType Property scanImageNoFileType: Whether the oss stock scan task detects images with file names without suffixes. This parameter is required.
         */
        public Builder scanImageNoFileType(final java.lang.Boolean scanImageNoFileType) {
            this.props.scanImageNoFileType(scanImageNoFileType);
            return this;
        }
        /**
         * Property scanImageNoFileType: Whether the oss stock scan task detects images with file names without suffixes.
         * <p>
         * true: Detect pictures with file names without suffixes, false: Do not detect pictures with file names without suffixes.
         * <p>
         * @return {@code this}
         * @param scanImageNoFileType Property scanImageNoFileType: Whether the oss stock scan task detects images with file names without suffixes. This parameter is required.
         */
        public Builder scanImageNoFileType(final com.aliyun.ros.cdk.core.IResolvable scanImageNoFileType) {
            this.props.scanImageNoFileType(scanImageNoFileType);
            return this;
        }

        /**
         * Property videoAdFreezeConfig: The video automatically freezes the configuration of ad scenarios.
         * <p>
         * Example:{"Type":"suggestion","Value":"block,review"}. The results will be frozen according to the suggestion in the video detection results.
         * <p>
         * @return {@code this}
         * @param videoAdFreezeConfig Property videoAdFreezeConfig: The video automatically freezes the configuration of ad scenarios. This parameter is required.
         */
        public Builder videoAdFreezeConfig(final com.aliyun.ros.cdk.core.IResolvable videoAdFreezeConfig) {
            this.props.videoAdFreezeConfig(videoAdFreezeConfig);
            return this;
        }
        /**
         * Property videoAdFreezeConfig: The video automatically freezes the configuration of ad scenarios.
         * <p>
         * Example:{"Type":"suggestion","Value":"block,review"}. The results will be frozen according to the suggestion in the video detection results.
         * <p>
         * @return {@code this}
         * @param videoAdFreezeConfig Property videoAdFreezeConfig: The video automatically freezes the configuration of ad scenarios. This parameter is required.
         */
        public Builder videoAdFreezeConfig(final java.util.Map<java.lang.String, ? extends java.lang.Object> videoAdFreezeConfig) {
            this.props.videoAdFreezeConfig(videoAdFreezeConfig);
            return this;
        }

        /**
         * Property videoAutoFreezeOpened: Video detection auto freeze switch.
         * <p>
         * Value: true: automatically freeze, false: not automatically freeze.
         * <p>
         * @return {@code this}
         * @param videoAutoFreezeOpened Property videoAutoFreezeOpened: Video detection auto freeze switch. This parameter is required.
         */
        public Builder videoAutoFreezeOpened(final java.lang.Boolean videoAutoFreezeOpened) {
            this.props.videoAutoFreezeOpened(videoAutoFreezeOpened);
            return this;
        }
        /**
         * Property videoAutoFreezeOpened: Video detection auto freeze switch.
         * <p>
         * Value: true: automatically freeze, false: not automatically freeze.
         * <p>
         * @return {@code this}
         * @param videoAutoFreezeOpened Property videoAutoFreezeOpened: Video detection auto freeze switch. This parameter is required.
         */
        public Builder videoAutoFreezeOpened(final com.aliyun.ros.cdk.core.IResolvable videoAutoFreezeOpened) {
            this.props.videoAutoFreezeOpened(videoAutoFreezeOpened);
            return this;
        }

        /**
         * Property videoFrameInterval: Resource attribute field representing the framing frequency.
         * <p>
         * 1~60 seconds/frame, the default is 1 second/frame.
         * <p>
         * @return {@code this}
         * @param videoFrameInterval Property videoFrameInterval: Resource attribute field representing the framing frequency. This parameter is required.
         */
        public Builder videoFrameInterval(final java.lang.Number videoFrameInterval) {
            this.props.videoFrameInterval(videoFrameInterval);
            return this;
        }
        /**
         * Property videoFrameInterval: Resource attribute field representing the framing frequency.
         * <p>
         * 1~60 seconds/frame, the default is 1 second/frame.
         * <p>
         * @return {@code this}
         * @param videoFrameInterval Property videoFrameInterval: Resource attribute field representing the framing frequency. This parameter is required.
         */
        public Builder videoFrameInterval(final com.aliyun.ros.cdk.core.IResolvable videoFrameInterval) {
            this.props.videoFrameInterval(videoFrameInterval);
            return this;
        }

        /**
         * Property videoLiveFreezeConfig: Video automatic freeze live scene configuration.
         * <p>
         * Example:{"Type" : "suggestion", "Value" : "block" }. The results will be frozen according to the suggestion in the video detection results.
         * <p>
         * @return {@code this}
         * @param videoLiveFreezeConfig Property videoLiveFreezeConfig: Video automatic freeze live scene configuration. This parameter is required.
         */
        public Builder videoLiveFreezeConfig(final com.aliyun.ros.cdk.core.IResolvable videoLiveFreezeConfig) {
            this.props.videoLiveFreezeConfig(videoLiveFreezeConfig);
            return this;
        }
        /**
         * Property videoLiveFreezeConfig: Video automatic freeze live scene configuration.
         * <p>
         * Example:{"Type" : "suggestion", "Value" : "block" }. The results will be frozen according to the suggestion in the video detection results.
         * <p>
         * @return {@code this}
         * @param videoLiveFreezeConfig Property videoLiveFreezeConfig: Video automatic freeze live scene configuration. This parameter is required.
         */
        public Builder videoLiveFreezeConfig(final java.util.Map<java.lang.String, ? extends java.lang.Object> videoLiveFreezeConfig) {
            this.props.videoLiveFreezeConfig(videoLiveFreezeConfig);
            return this;
        }

        /**
         * Property videoMaxFrames: A resource attribute field that represents the upper limit of a single video frame cut.
         * <p>
         * 5 to 20000 frames, the default is 200 frames.
         * <p>
         * @return {@code this}
         * @param videoMaxFrames Property videoMaxFrames: A resource attribute field that represents the upper limit of a single video frame cut. This parameter is required.
         */
        public Builder videoMaxFrames(final java.lang.Number videoMaxFrames) {
            this.props.videoMaxFrames(videoMaxFrames);
            return this;
        }
        /**
         * Property videoMaxFrames: A resource attribute field that represents the upper limit of a single video frame cut.
         * <p>
         * 5 to 20000 frames, the default is 200 frames.
         * <p>
         * @return {@code this}
         * @param videoMaxFrames Property videoMaxFrames: A resource attribute field that represents the upper limit of a single video frame cut. This parameter is required.
         */
        public Builder videoMaxFrames(final com.aliyun.ros.cdk.core.IResolvable videoMaxFrames) {
            this.props.videoMaxFrames(videoMaxFrames);
            return this;
        }

        /**
         * Property videoMaxSize: Resource property field representing the maximum size of a single video.
         * <p>
         * 1~2048MB, the default is 500MB, more than not detected.
         * <p>
         * @return {@code this}
         * @param videoMaxSize Property videoMaxSize: Resource property field representing the maximum size of a single video. This parameter is required.
         */
        public Builder videoMaxSize(final java.lang.Number videoMaxSize) {
            this.props.videoMaxSize(videoMaxSize);
            return this;
        }
        /**
         * Property videoMaxSize: Resource property field representing the maximum size of a single video.
         * <p>
         * 1~2048MB, the default is 500MB, more than not detected.
         * <p>
         * @return {@code this}
         * @param videoMaxSize Property videoMaxSize: Resource property field representing the maximum size of a single video. This parameter is required.
         */
        public Builder videoMaxSize(final com.aliyun.ros.cdk.core.IResolvable videoMaxSize) {
            this.props.videoMaxSize(videoMaxSize);
            return this;
        }

        /**
         * Property videoOpened: Oss stock scan task detect video.
         * <p>
         * true: scan video, false: do not scan video.
         * <p>
         * @return {@code this}
         * @param videoOpened Property videoOpened: Oss stock scan task detect video. This parameter is required.
         */
        public Builder videoOpened(final java.lang.Boolean videoOpened) {
            this.props.videoOpened(videoOpened);
            return this;
        }
        /**
         * Property videoOpened: Oss stock scan task detect video.
         * <p>
         * true: scan video, false: do not scan video.
         * <p>
         * @return {@code this}
         * @param videoOpened Property videoOpened: Oss stock scan task detect video. This parameter is required.
         */
        public Builder videoOpened(final com.aliyun.ros.cdk.core.IResolvable videoOpened) {
            this.props.videoOpened(videoOpened);
            return this;
        }

        /**
         * Property videoPornFreezeConfig: Video automatic freezing porn scene configuration.
         * <p>
         * Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the video detection result.
         * <p>
         * @return {@code this}
         * @param videoPornFreezeConfig Property videoPornFreezeConfig: Video automatic freezing porn scene configuration. This parameter is required.
         */
        public Builder videoPornFreezeConfig(final com.aliyun.ros.cdk.core.IResolvable videoPornFreezeConfig) {
            this.props.videoPornFreezeConfig(videoPornFreezeConfig);
            return this;
        }
        /**
         * Property videoPornFreezeConfig: Video automatic freezing porn scene configuration.
         * <p>
         * Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the video detection result.
         * <p>
         * @return {@code this}
         * @param videoPornFreezeConfig Property videoPornFreezeConfig: Video automatic freezing porn scene configuration. This parameter is required.
         */
        public Builder videoPornFreezeConfig(final java.util.Map<java.lang.String, ? extends java.lang.Object> videoPornFreezeConfig) {
            this.props.videoPornFreezeConfig(videoPornFreezeConfig);
            return this;
        }

        /**
         * Property videoScanLimit: The upper limit of video scanning in the oss stock scan task.
         * <p>
         * The default value is 1000/Bucket.
         * <p>
         * @return {@code this}
         * @param videoScanLimit Property videoScanLimit: The upper limit of video scanning in the oss stock scan task. This parameter is required.
         */
        public Builder videoScanLimit(final java.lang.Number videoScanLimit) {
            this.props.videoScanLimit(videoScanLimit);
            return this;
        }
        /**
         * Property videoScanLimit: The upper limit of video scanning in the oss stock scan task.
         * <p>
         * The default value is 1000/Bucket.
         * <p>
         * @return {@code this}
         * @param videoScanLimit Property videoScanLimit: The upper limit of video scanning in the oss stock scan task. This parameter is required.
         */
        public Builder videoScanLimit(final com.aliyun.ros.cdk.core.IResolvable videoScanLimit) {
            this.props.videoScanLimit(videoScanLimit);
            return this;
        }

        /**
         * Property videoScenes: The video detection scenarios included in the oss stock scan task.
         * <p>
         * porn: pornography detection
         * terrorism: terrorist content detection
         * ad: ad violation detection
         * live: undesirable scene detection
         * antispam: Video voice antispam.
         * <p>
         * @return {@code this}
         * @param videoScenes Property videoScenes: The video detection scenarios included in the oss stock scan task. This parameter is required.
         */
        public Builder videoScenes(final com.aliyun.ros.cdk.core.IResolvable videoScenes) {
            this.props.videoScenes(videoScenes);
            return this;
        }
        /**
         * Property videoScenes: The video detection scenarios included in the oss stock scan task.
         * <p>
         * porn: pornography detection
         * terrorism: terrorist content detection
         * ad: ad violation detection
         * live: undesirable scene detection
         * antispam: Video voice antispam.
         * <p>
         * @return {@code this}
         * @param videoScenes Property videoScenes: The video detection scenarios included in the oss stock scan task. This parameter is required.
         */
        public Builder videoScenes(final java.util.List<? extends java.lang.Object> videoScenes) {
            this.props.videoScenes(videoScenes);
            return this;
        }

        /**
         * Property videoTerrorismFreezeConfig: The video automatically freezes the configuration of terrorism scenes.
         * <p>
         * Example:{"Type": "suggestion","Value":"block,review"}. The results will be frozen according to the suggestion in the video detection results.
         * <p>
         * @return {@code this}
         * @param videoTerrorismFreezeConfig Property videoTerrorismFreezeConfig: The video automatically freezes the configuration of terrorism scenes. This parameter is required.
         */
        public Builder videoTerrorismFreezeConfig(final com.aliyun.ros.cdk.core.IResolvable videoTerrorismFreezeConfig) {
            this.props.videoTerrorismFreezeConfig(videoTerrorismFreezeConfig);
            return this;
        }
        /**
         * Property videoTerrorismFreezeConfig: The video automatically freezes the configuration of terrorism scenes.
         * <p>
         * Example:{"Type": "suggestion","Value":"block,review"}. The results will be frozen according to the suggestion in the video detection results.
         * <p>
         * @return {@code this}
         * @param videoTerrorismFreezeConfig Property videoTerrorismFreezeConfig: The video automatically freezes the configuration of terrorism scenes. This parameter is required.
         */
        public Builder videoTerrorismFreezeConfig(final java.util.Map<java.lang.String, ? extends java.lang.Object> videoTerrorismFreezeConfig) {
            this.props.videoTerrorismFreezeConfig(videoTerrorismFreezeConfig);
            return this;
        }

        /**
         * Property videoVoiceAntispamFreezeConfig: Voice auto freeze configuration in video.
         * <p>
         * Example:{"Type": "suggestion", "Value" : "block" }. The results will be frozen according to the suggestion in the video detection results.
         * <p>
         * @return {@code this}
         * @param videoVoiceAntispamFreezeConfig Property videoVoiceAntispamFreezeConfig: Voice auto freeze configuration in video. This parameter is required.
         */
        public Builder videoVoiceAntispamFreezeConfig(final com.aliyun.ros.cdk.core.IResolvable videoVoiceAntispamFreezeConfig) {
            this.props.videoVoiceAntispamFreezeConfig(videoVoiceAntispamFreezeConfig);
            return this;
        }
        /**
         * Property videoVoiceAntispamFreezeConfig: Voice auto freeze configuration in video.
         * <p>
         * Example:{"Type": "suggestion", "Value" : "block" }. The results will be frozen according to the suggestion in the video detection results.
         * <p>
         * @return {@code this}
         * @param videoVoiceAntispamFreezeConfig Property videoVoiceAntispamFreezeConfig: Voice auto freeze configuration in video. This parameter is required.
         */
        public Builder videoVoiceAntispamFreezeConfig(final java.util.Map<java.lang.String, ? extends java.lang.Object> videoVoiceAntispamFreezeConfig) {
            this.props.videoVoiceAntispamFreezeConfig(videoVoiceAntispamFreezeConfig);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.aligreen.OssStockTask}.
         */
        @Override
        public com.aliyun.ros.cdk.aligreen.OssStockTask build() {
            return new com.aliyun.ros.cdk.aligreen.OssStockTask(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
