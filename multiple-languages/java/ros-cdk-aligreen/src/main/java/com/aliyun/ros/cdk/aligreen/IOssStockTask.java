package com.aliyun.ros.cdk.aligreen;

/**
 * Represents a <code>OssStockTask</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:20.725Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.aligreen.$Module.class, fqn = "@alicloud/ros-cdk-aligreen.IOssStockTask")
@software.amazon.jsii.Jsii.Proxy(IOssStockTask.Jsii$Proxy.class)
public interface IOssStockTask extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AudioAntispamFreezeConfig: Voice auto freeze configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAudioAntispamFreezeConfig();

    /**
     * Attribute AudioAutoFreezeOpened: Audio detection auto freeze switch.
     * <p>
     * Value: true: automatically freeze, false: not automatically freeze.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAudioAutoFreezeOpened();

    /**
     * Attribute AudioMaxSize: Resource property field representing the maximum size of a single audio.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAudioMaxSize();

    /**
     * Attribute AudioOpened: oss stock scan task detect audio.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAudioOpened();

    /**
     * Attribute AudioScanLimit: The upper limit of voice scan in the oss stock scan task.
     * <p>
     * The default value is 1000/Bucket.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAudioScanLimit();

    /**
     * Attribute AudioScenes: The audio detection scenarios included in the oss stock scan task.
     * <p>
     * Set the value to antispam.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAudioScenes();

    /**
     * Attribute AutoFreezeType: Automatic freeze type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoFreezeType();

    /**
     * Attribute BizType: Business scenarios used by the oss stock scan task.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBizType();

    /**
     * Attribute Buckets: The bucket configuration list of the oss stock scan task.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBuckets();

    /**
     * Attribute CallbackId: The ID of the primary key of the notification message bound to the oss stock scan task.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCallbackId();

    /**
     * Attribute EndDate: The end time of the file upload time range indicates the scanning of files uploaded before this time point.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndDate();

    /**
     * Attribute ImageAdFreezeConfig: Picture automatically freezes the configuration of ad scenes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageAdFreezeConfig();

    /**
     * Attribute ImageAutoFreezeOpened: Picture detection auto freeze switch.
     * <p>
     * Value: true: auto freeze, false: not auto freeze.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageAutoFreezeOpened();

    /**
     * Attribute ImageLiveFreezeConfig: Picture automatic freezing live scene configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageLiveFreezeConfig();

    /**
     * Attribute ImageOpened: oss stock scan task detect images.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageOpened();

    /**
     * Attribute ImagePornFreezeConfig: Picture automatic freezing porn scene configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrImagePornFreezeConfig();

    /**
     * Attribute ImageScanLimit: The upper limit for scanning images in the oss stock scan task.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageScanLimit();

    /**
     * Attribute ImageScenes: The image moderation scenario included in the oss stock scan task.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageScenes();

    /**
     * Attribute ImageTerrorismFreezeConfig: The picture automatically freezes the configuration of terrorism scenes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageTerrorismFreezeConfig();

    /**
     * Attribute ScanImageNoFileType: Whether the oss stock scan task detects images with file names without suffixes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScanImageNoFileType();

    /**
     * Attribute StartDate: The start time of the file upload time range represents the files uploaded after scanning this time point.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStartDate();

    /**
     * Attribute VideoAdFreezeConfig: The video automatically freezes the configuration of ad scenarios.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoAdFreezeConfig();

    /**
     * Attribute VideoAutoFreezeOpened: Video detection auto freeze switch.
     * <p>
     * Value: true: automatically freeze, false: not automatically freeze.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoAutoFreezeOpened();

    /**
     * Attribute VideoFrameInterval: Resource attribute field representing the framing frequency.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoFrameInterval();

    /**
     * Attribute VideoLiveFreezeConfig: Video automatic freeze live scene configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoLiveFreezeConfig();

    /**
     * Attribute VideoMaxFrames: A resource attribute field that represents the upper limit of a single video frame cut.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoMaxFrames();

    /**
     * Attribute VideoMaxSize: Resource property field representing the maximum size of a single video.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoMaxSize();

    /**
     * Attribute VideoOpened: oss stock scan task detect video.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoOpened();

    /**
     * Attribute VideoPornFreezeConfig: Video automatic freezing porn scene configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoPornFreezeConfig();

    /**
     * Attribute VideoScanLimit: The upper limit of video scanning in the oss stock scan task.
     * <p>
     * The default value is 1000/Bucket.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoScanLimit();

    /**
     * Attribute VideoScenes: The video detection scenarios included in the oss stock scan task.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoScenes();

    /**
     * Attribute VideoTerrorismFreezeConfig: The video automatically freezes the configuration of terrorism scenes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoTerrorismFreezeConfig();

    /**
     * Attribute VideoVoiceAntispamFreezeConfig: Voice auto freeze configuration in video.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoVoiceAntispamFreezeConfig();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.aligreen.OssStockTaskProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.aligreen.IOssStockTask.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * The construct tree node for this construct.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute AudioAntispamFreezeConfig: Voice auto freeze configuration.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAudioAntispamFreezeConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrAudioAntispamFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AudioAutoFreezeOpened: Audio detection auto freeze switch.
         * <p>
         * Value: true: automatically freeze, false: not automatically freeze.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAudioAutoFreezeOpened() {
            return software.amazon.jsii.Kernel.get(this, "attrAudioAutoFreezeOpened", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AudioMaxSize: Resource property field representing the maximum size of a single audio.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAudioMaxSize() {
            return software.amazon.jsii.Kernel.get(this, "attrAudioMaxSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AudioOpened: oss stock scan task detect audio.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAudioOpened() {
            return software.amazon.jsii.Kernel.get(this, "attrAudioOpened", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AudioScanLimit: The upper limit of voice scan in the oss stock scan task.
         * <p>
         * The default value is 1000/Bucket.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAudioScanLimit() {
            return software.amazon.jsii.Kernel.get(this, "attrAudioScanLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AudioScenes: The audio detection scenarios included in the oss stock scan task.
         * <p>
         * Set the value to antispam.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAudioScenes() {
            return software.amazon.jsii.Kernel.get(this, "attrAudioScenes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AutoFreezeType: Automatic freeze type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoFreezeType() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoFreezeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BizType: Business scenarios used by the oss stock scan task.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBizType() {
            return software.amazon.jsii.Kernel.get(this, "attrBizType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Buckets: The bucket configuration list of the oss stock scan task.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBuckets() {
            return software.amazon.jsii.Kernel.get(this, "attrBuckets", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CallbackId: The ID of the primary key of the notification message bound to the oss stock scan task.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCallbackId() {
            return software.amazon.jsii.Kernel.get(this, "attrCallbackId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EndDate: The end time of the file upload time range indicates the scanning of files uploaded before this time point.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndDate() {
            return software.amazon.jsii.Kernel.get(this, "attrEndDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageAdFreezeConfig: Picture automatically freezes the configuration of ad scenes.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageAdFreezeConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrImageAdFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageAutoFreezeOpened: Picture detection auto freeze switch.
         * <p>
         * Value: true: auto freeze, false: not auto freeze.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageAutoFreezeOpened() {
            return software.amazon.jsii.Kernel.get(this, "attrImageAutoFreezeOpened", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageLiveFreezeConfig: Picture automatic freezing live scene configuration.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageLiveFreezeConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrImageLiveFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageOpened: oss stock scan task detect images.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageOpened() {
            return software.amazon.jsii.Kernel.get(this, "attrImageOpened", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImagePornFreezeConfig: Picture automatic freezing porn scene configuration.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrImagePornFreezeConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrImagePornFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageScanLimit: The upper limit for scanning images in the oss stock scan task.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageScanLimit() {
            return software.amazon.jsii.Kernel.get(this, "attrImageScanLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageScenes: The image moderation scenario included in the oss stock scan task.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageScenes() {
            return software.amazon.jsii.Kernel.get(this, "attrImageScenes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageTerrorismFreezeConfig: The picture automatically freezes the configuration of terrorism scenes.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageTerrorismFreezeConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrImageTerrorismFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScanImageNoFileType: Whether the oss stock scan task detects images with file names without suffixes.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScanImageNoFileType() {
            return software.amazon.jsii.Kernel.get(this, "attrScanImageNoFileType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StartDate: The start time of the file upload time range represents the files uploaded after scanning this time point.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStartDate() {
            return software.amazon.jsii.Kernel.get(this, "attrStartDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VideoAdFreezeConfig: The video automatically freezes the configuration of ad scenarios.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoAdFreezeConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrVideoAdFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VideoAutoFreezeOpened: Video detection auto freeze switch.
         * <p>
         * Value: true: automatically freeze, false: not automatically freeze.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoAutoFreezeOpened() {
            return software.amazon.jsii.Kernel.get(this, "attrVideoAutoFreezeOpened", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VideoFrameInterval: Resource attribute field representing the framing frequency.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoFrameInterval() {
            return software.amazon.jsii.Kernel.get(this, "attrVideoFrameInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VideoLiveFreezeConfig: Video automatic freeze live scene configuration.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoLiveFreezeConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrVideoLiveFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VideoMaxFrames: A resource attribute field that represents the upper limit of a single video frame cut.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoMaxFrames() {
            return software.amazon.jsii.Kernel.get(this, "attrVideoMaxFrames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VideoMaxSize: Resource property field representing the maximum size of a single video.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoMaxSize() {
            return software.amazon.jsii.Kernel.get(this, "attrVideoMaxSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VideoOpened: oss stock scan task detect video.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoOpened() {
            return software.amazon.jsii.Kernel.get(this, "attrVideoOpened", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VideoPornFreezeConfig: Video automatic freezing porn scene configuration.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoPornFreezeConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrVideoPornFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VideoScanLimit: The upper limit of video scanning in the oss stock scan task.
         * <p>
         * The default value is 1000/Bucket.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoScanLimit() {
            return software.amazon.jsii.Kernel.get(this, "attrVideoScanLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VideoScenes: The video detection scenarios included in the oss stock scan task.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoScenes() {
            return software.amazon.jsii.Kernel.get(this, "attrVideoScenes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VideoTerrorismFreezeConfig: The video automatically freezes the configuration of terrorism scenes.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoTerrorismFreezeConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrVideoTerrorismFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VideoVoiceAntispamFreezeConfig: Voice auto freeze configuration in video.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoVoiceAntispamFreezeConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrVideoVoiceAntispamFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.aligreen.OssStockTaskProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.aligreen.OssStockTaskProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IOssStockTask}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IOssStockTask, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

        /**
         * The construct tree node for this construct.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute AudioAntispamFreezeConfig: Voice auto freeze configuration.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAudioAntispamFreezeConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrAudioAntispamFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AudioAutoFreezeOpened: Audio detection auto freeze switch.
         * <p>
         * Value: true: automatically freeze, false: not automatically freeze.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAudioAutoFreezeOpened() {
            return software.amazon.jsii.Kernel.get(this, "attrAudioAutoFreezeOpened", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AudioMaxSize: Resource property field representing the maximum size of a single audio.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAudioMaxSize() {
            return software.amazon.jsii.Kernel.get(this, "attrAudioMaxSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AudioOpened: oss stock scan task detect audio.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAudioOpened() {
            return software.amazon.jsii.Kernel.get(this, "attrAudioOpened", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AudioScanLimit: The upper limit of voice scan in the oss stock scan task.
         * <p>
         * The default value is 1000/Bucket.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAudioScanLimit() {
            return software.amazon.jsii.Kernel.get(this, "attrAudioScanLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AudioScenes: The audio detection scenarios included in the oss stock scan task.
         * <p>
         * Set the value to antispam.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAudioScenes() {
            return software.amazon.jsii.Kernel.get(this, "attrAudioScenes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AutoFreezeType: Automatic freeze type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoFreezeType() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoFreezeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BizType: Business scenarios used by the oss stock scan task.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBizType() {
            return software.amazon.jsii.Kernel.get(this, "attrBizType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Buckets: The bucket configuration list of the oss stock scan task.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBuckets() {
            return software.amazon.jsii.Kernel.get(this, "attrBuckets", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CallbackId: The ID of the primary key of the notification message bound to the oss stock scan task.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCallbackId() {
            return software.amazon.jsii.Kernel.get(this, "attrCallbackId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EndDate: The end time of the file upload time range indicates the scanning of files uploaded before this time point.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndDate() {
            return software.amazon.jsii.Kernel.get(this, "attrEndDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageAdFreezeConfig: Picture automatically freezes the configuration of ad scenes.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageAdFreezeConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrImageAdFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageAutoFreezeOpened: Picture detection auto freeze switch.
         * <p>
         * Value: true: auto freeze, false: not auto freeze.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageAutoFreezeOpened() {
            return software.amazon.jsii.Kernel.get(this, "attrImageAutoFreezeOpened", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageLiveFreezeConfig: Picture automatic freezing live scene configuration.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageLiveFreezeConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrImageLiveFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageOpened: oss stock scan task detect images.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageOpened() {
            return software.amazon.jsii.Kernel.get(this, "attrImageOpened", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImagePornFreezeConfig: Picture automatic freezing porn scene configuration.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrImagePornFreezeConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrImagePornFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageScanLimit: The upper limit for scanning images in the oss stock scan task.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageScanLimit() {
            return software.amazon.jsii.Kernel.get(this, "attrImageScanLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageScenes: The image moderation scenario included in the oss stock scan task.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageScenes() {
            return software.amazon.jsii.Kernel.get(this, "attrImageScenes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageTerrorismFreezeConfig: The picture automatically freezes the configuration of terrorism scenes.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageTerrorismFreezeConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrImageTerrorismFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScanImageNoFileType: Whether the oss stock scan task detects images with file names without suffixes.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScanImageNoFileType() {
            return software.amazon.jsii.Kernel.get(this, "attrScanImageNoFileType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StartDate: The start time of the file upload time range represents the files uploaded after scanning this time point.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStartDate() {
            return software.amazon.jsii.Kernel.get(this, "attrStartDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VideoAdFreezeConfig: The video automatically freezes the configuration of ad scenarios.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoAdFreezeConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrVideoAdFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VideoAutoFreezeOpened: Video detection auto freeze switch.
         * <p>
         * Value: true: automatically freeze, false: not automatically freeze.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoAutoFreezeOpened() {
            return software.amazon.jsii.Kernel.get(this, "attrVideoAutoFreezeOpened", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VideoFrameInterval: Resource attribute field representing the framing frequency.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoFrameInterval() {
            return software.amazon.jsii.Kernel.get(this, "attrVideoFrameInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VideoLiveFreezeConfig: Video automatic freeze live scene configuration.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoLiveFreezeConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrVideoLiveFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VideoMaxFrames: A resource attribute field that represents the upper limit of a single video frame cut.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoMaxFrames() {
            return software.amazon.jsii.Kernel.get(this, "attrVideoMaxFrames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VideoMaxSize: Resource property field representing the maximum size of a single video.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoMaxSize() {
            return software.amazon.jsii.Kernel.get(this, "attrVideoMaxSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VideoOpened: oss stock scan task detect video.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoOpened() {
            return software.amazon.jsii.Kernel.get(this, "attrVideoOpened", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VideoPornFreezeConfig: Video automatic freezing porn scene configuration.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoPornFreezeConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrVideoPornFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VideoScanLimit: The upper limit of video scanning in the oss stock scan task.
         * <p>
         * The default value is 1000/Bucket.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoScanLimit() {
            return software.amazon.jsii.Kernel.get(this, "attrVideoScanLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VideoScenes: The video detection scenarios included in the oss stock scan task.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoScenes() {
            return software.amazon.jsii.Kernel.get(this, "attrVideoScenes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VideoTerrorismFreezeConfig: The video automatically freezes the configuration of terrorism scenes.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoTerrorismFreezeConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrVideoTerrorismFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VideoVoiceAntispamFreezeConfig: Voice auto freeze configuration in video.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoVoiceAntispamFreezeConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrVideoVoiceAntispamFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.aligreen.OssStockTaskProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.aligreen.OssStockTaskProps.class));
        }
    }
}
