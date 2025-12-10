package com.aliyun.ros.cdk.aligreen;

/**
 * Properties for defining a <code>RosOssStockTask</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-ossstocktask
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:52.238Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.aligreen.$Module.class, fqn = "@alicloud/ros-cdk-aligreen.RosOssStockTaskProps")
@software.amazon.jsii.Jsii.Proxy(RosOssStockTaskProps.Jsii$Proxy.class)
public interface RosOssStockTaskProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBuckets();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStartDate();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAudioAntispamFreezeConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAudioAutoFreezeOpened() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAudioMaxSize() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAudioOpened() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAudioScanLimit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAudioScenes() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoFreezeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBizType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCallbackId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndDate() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageAdFreezeConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageAutoFreezeOpened() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageLiveFreezeConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageOpened() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImagePornFreezeConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageScanLimit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageScenes() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageTerrorismFreezeConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOssStockTaskName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScanImageNoFileType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVideoAdFreezeConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVideoAutoFreezeOpened() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVideoFrameInterval() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVideoLiveFreezeConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVideoMaxFrames() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVideoMaxSize() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVideoOpened() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVideoPornFreezeConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVideoScanLimit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVideoScenes() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVideoTerrorismFreezeConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVideoVoiceAntispamFreezeConfig() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosOssStockTaskProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosOssStockTaskProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosOssStockTaskProps> {
        java.lang.Object buckets;
        java.lang.Object startDate;
        java.lang.Object audioAntispamFreezeConfig;
        java.lang.Object audioAutoFreezeOpened;
        java.lang.Object audioMaxSize;
        java.lang.Object audioOpened;
        java.lang.Object audioScanLimit;
        java.lang.Object audioScenes;
        java.lang.Object autoFreezeType;
        java.lang.Object bizType;
        java.lang.Object callbackId;
        java.lang.Object endDate;
        java.lang.Object imageAdFreezeConfig;
        java.lang.Object imageAutoFreezeOpened;
        java.lang.Object imageLiveFreezeConfig;
        java.lang.Object imageOpened;
        java.lang.Object imagePornFreezeConfig;
        java.lang.Object imageScanLimit;
        java.lang.Object imageScenes;
        java.lang.Object imageTerrorismFreezeConfig;
        java.lang.Object ossStockTaskName;
        java.lang.Object scanImageNoFileType;
        java.lang.Object videoAdFreezeConfig;
        java.lang.Object videoAutoFreezeOpened;
        java.lang.Object videoFrameInterval;
        java.lang.Object videoLiveFreezeConfig;
        java.lang.Object videoMaxFrames;
        java.lang.Object videoMaxSize;
        java.lang.Object videoOpened;
        java.lang.Object videoPornFreezeConfig;
        java.lang.Object videoScanLimit;
        java.lang.Object videoScenes;
        java.lang.Object videoTerrorismFreezeConfig;
        java.lang.Object videoVoiceAntispamFreezeConfig;

        /**
         * Sets the value of {@link RosOssStockTaskProps#getBuckets}
         * @param buckets the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder buckets(java.util.List<? extends java.lang.Object> buckets) {
            this.buckets = buckets;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getBuckets}
         * @param buckets the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder buckets(com.aliyun.ros.cdk.core.IResolvable buckets) {
            this.buckets = buckets;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getStartDate}
         * @param startDate the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder startDate(java.lang.String startDate) {
            this.startDate = startDate;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getStartDate}
         * @param startDate the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder startDate(com.aliyun.ros.cdk.core.IResolvable startDate) {
            this.startDate = startDate;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getAudioAntispamFreezeConfig}
         * @param audioAntispamFreezeConfig the value to be set.
         * @return {@code this}
         */
        public Builder audioAntispamFreezeConfig(com.aliyun.ros.cdk.core.IResolvable audioAntispamFreezeConfig) {
            this.audioAntispamFreezeConfig = audioAntispamFreezeConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getAudioAntispamFreezeConfig}
         * @param audioAntispamFreezeConfig the value to be set.
         * @return {@code this}
         */
        public Builder audioAntispamFreezeConfig(java.util.Map<java.lang.String, ? extends java.lang.Object> audioAntispamFreezeConfig) {
            this.audioAntispamFreezeConfig = audioAntispamFreezeConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getAudioAutoFreezeOpened}
         * @param audioAutoFreezeOpened the value to be set.
         * @return {@code this}
         */
        public Builder audioAutoFreezeOpened(java.lang.Boolean audioAutoFreezeOpened) {
            this.audioAutoFreezeOpened = audioAutoFreezeOpened;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getAudioAutoFreezeOpened}
         * @param audioAutoFreezeOpened the value to be set.
         * @return {@code this}
         */
        public Builder audioAutoFreezeOpened(com.aliyun.ros.cdk.core.IResolvable audioAutoFreezeOpened) {
            this.audioAutoFreezeOpened = audioAutoFreezeOpened;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getAudioMaxSize}
         * @param audioMaxSize the value to be set.
         * @return {@code this}
         */
        public Builder audioMaxSize(java.lang.Number audioMaxSize) {
            this.audioMaxSize = audioMaxSize;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getAudioMaxSize}
         * @param audioMaxSize the value to be set.
         * @return {@code this}
         */
        public Builder audioMaxSize(com.aliyun.ros.cdk.core.IResolvable audioMaxSize) {
            this.audioMaxSize = audioMaxSize;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getAudioOpened}
         * @param audioOpened the value to be set.
         * @return {@code this}
         */
        public Builder audioOpened(java.lang.Boolean audioOpened) {
            this.audioOpened = audioOpened;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getAudioOpened}
         * @param audioOpened the value to be set.
         * @return {@code this}
         */
        public Builder audioOpened(com.aliyun.ros.cdk.core.IResolvable audioOpened) {
            this.audioOpened = audioOpened;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getAudioScanLimit}
         * @param audioScanLimit the value to be set.
         * @return {@code this}
         */
        public Builder audioScanLimit(java.lang.Number audioScanLimit) {
            this.audioScanLimit = audioScanLimit;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getAudioScanLimit}
         * @param audioScanLimit the value to be set.
         * @return {@code this}
         */
        public Builder audioScanLimit(com.aliyun.ros.cdk.core.IResolvable audioScanLimit) {
            this.audioScanLimit = audioScanLimit;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getAudioScenes}
         * @param audioScenes the value to be set.
         * @return {@code this}
         */
        public Builder audioScenes(com.aliyun.ros.cdk.core.IResolvable audioScenes) {
            this.audioScenes = audioScenes;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getAudioScenes}
         * @param audioScenes the value to be set.
         * @return {@code this}
         */
        public Builder audioScenes(java.util.List<? extends java.lang.Object> audioScenes) {
            this.audioScenes = audioScenes;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getAutoFreezeType}
         * @param autoFreezeType the value to be set.
         * @return {@code this}
         */
        public Builder autoFreezeType(java.lang.String autoFreezeType) {
            this.autoFreezeType = autoFreezeType;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getAutoFreezeType}
         * @param autoFreezeType the value to be set.
         * @return {@code this}
         */
        public Builder autoFreezeType(com.aliyun.ros.cdk.core.IResolvable autoFreezeType) {
            this.autoFreezeType = autoFreezeType;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getBizType}
         * @param bizType the value to be set.
         * @return {@code this}
         */
        public Builder bizType(java.lang.String bizType) {
            this.bizType = bizType;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getBizType}
         * @param bizType the value to be set.
         * @return {@code this}
         */
        public Builder bizType(com.aliyun.ros.cdk.core.IResolvable bizType) {
            this.bizType = bizType;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getCallbackId}
         * @param callbackId the value to be set.
         * @return {@code this}
         */
        public Builder callbackId(java.lang.Number callbackId) {
            this.callbackId = callbackId;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getCallbackId}
         * @param callbackId the value to be set.
         * @return {@code this}
         */
        public Builder callbackId(com.aliyun.ros.cdk.core.IResolvable callbackId) {
            this.callbackId = callbackId;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getEndDate}
         * @param endDate the value to be set.
         * @return {@code this}
         */
        public Builder endDate(java.lang.String endDate) {
            this.endDate = endDate;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getEndDate}
         * @param endDate the value to be set.
         * @return {@code this}
         */
        public Builder endDate(com.aliyun.ros.cdk.core.IResolvable endDate) {
            this.endDate = endDate;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getImageAdFreezeConfig}
         * @param imageAdFreezeConfig the value to be set.
         * @return {@code this}
         */
        public Builder imageAdFreezeConfig(com.aliyun.ros.cdk.core.IResolvable imageAdFreezeConfig) {
            this.imageAdFreezeConfig = imageAdFreezeConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getImageAdFreezeConfig}
         * @param imageAdFreezeConfig the value to be set.
         * @return {@code this}
         */
        public Builder imageAdFreezeConfig(java.util.Map<java.lang.String, ? extends java.lang.Object> imageAdFreezeConfig) {
            this.imageAdFreezeConfig = imageAdFreezeConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getImageAutoFreezeOpened}
         * @param imageAutoFreezeOpened the value to be set.
         * @return {@code this}
         */
        public Builder imageAutoFreezeOpened(java.lang.Boolean imageAutoFreezeOpened) {
            this.imageAutoFreezeOpened = imageAutoFreezeOpened;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getImageAutoFreezeOpened}
         * @param imageAutoFreezeOpened the value to be set.
         * @return {@code this}
         */
        public Builder imageAutoFreezeOpened(com.aliyun.ros.cdk.core.IResolvable imageAutoFreezeOpened) {
            this.imageAutoFreezeOpened = imageAutoFreezeOpened;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getImageLiveFreezeConfig}
         * @param imageLiveFreezeConfig the value to be set.
         * @return {@code this}
         */
        public Builder imageLiveFreezeConfig(com.aliyun.ros.cdk.core.IResolvable imageLiveFreezeConfig) {
            this.imageLiveFreezeConfig = imageLiveFreezeConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getImageLiveFreezeConfig}
         * @param imageLiveFreezeConfig the value to be set.
         * @return {@code this}
         */
        public Builder imageLiveFreezeConfig(java.util.Map<java.lang.String, ? extends java.lang.Object> imageLiveFreezeConfig) {
            this.imageLiveFreezeConfig = imageLiveFreezeConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getImageOpened}
         * @param imageOpened the value to be set.
         * @return {@code this}
         */
        public Builder imageOpened(java.lang.Boolean imageOpened) {
            this.imageOpened = imageOpened;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getImageOpened}
         * @param imageOpened the value to be set.
         * @return {@code this}
         */
        public Builder imageOpened(com.aliyun.ros.cdk.core.IResolvable imageOpened) {
            this.imageOpened = imageOpened;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getImagePornFreezeConfig}
         * @param imagePornFreezeConfig the value to be set.
         * @return {@code this}
         */
        public Builder imagePornFreezeConfig(com.aliyun.ros.cdk.core.IResolvable imagePornFreezeConfig) {
            this.imagePornFreezeConfig = imagePornFreezeConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getImagePornFreezeConfig}
         * @param imagePornFreezeConfig the value to be set.
         * @return {@code this}
         */
        public Builder imagePornFreezeConfig(java.util.Map<java.lang.String, ? extends java.lang.Object> imagePornFreezeConfig) {
            this.imagePornFreezeConfig = imagePornFreezeConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getImageScanLimit}
         * @param imageScanLimit the value to be set.
         * @return {@code this}
         */
        public Builder imageScanLimit(java.lang.Number imageScanLimit) {
            this.imageScanLimit = imageScanLimit;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getImageScanLimit}
         * @param imageScanLimit the value to be set.
         * @return {@code this}
         */
        public Builder imageScanLimit(com.aliyun.ros.cdk.core.IResolvable imageScanLimit) {
            this.imageScanLimit = imageScanLimit;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getImageScenes}
         * @param imageScenes the value to be set.
         * @return {@code this}
         */
        public Builder imageScenes(com.aliyun.ros.cdk.core.IResolvable imageScenes) {
            this.imageScenes = imageScenes;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getImageScenes}
         * @param imageScenes the value to be set.
         * @return {@code this}
         */
        public Builder imageScenes(java.util.List<? extends java.lang.Object> imageScenes) {
            this.imageScenes = imageScenes;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getImageTerrorismFreezeConfig}
         * @param imageTerrorismFreezeConfig the value to be set.
         * @return {@code this}
         */
        public Builder imageTerrorismFreezeConfig(com.aliyun.ros.cdk.core.IResolvable imageTerrorismFreezeConfig) {
            this.imageTerrorismFreezeConfig = imageTerrorismFreezeConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getImageTerrorismFreezeConfig}
         * @param imageTerrorismFreezeConfig the value to be set.
         * @return {@code this}
         */
        public Builder imageTerrorismFreezeConfig(java.util.Map<java.lang.String, ? extends java.lang.Object> imageTerrorismFreezeConfig) {
            this.imageTerrorismFreezeConfig = imageTerrorismFreezeConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getOssStockTaskName}
         * @param ossStockTaskName the value to be set.
         * @return {@code this}
         */
        public Builder ossStockTaskName(java.lang.String ossStockTaskName) {
            this.ossStockTaskName = ossStockTaskName;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getOssStockTaskName}
         * @param ossStockTaskName the value to be set.
         * @return {@code this}
         */
        public Builder ossStockTaskName(com.aliyun.ros.cdk.core.IResolvable ossStockTaskName) {
            this.ossStockTaskName = ossStockTaskName;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getScanImageNoFileType}
         * @param scanImageNoFileType the value to be set.
         * @return {@code this}
         */
        public Builder scanImageNoFileType(java.lang.Boolean scanImageNoFileType) {
            this.scanImageNoFileType = scanImageNoFileType;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getScanImageNoFileType}
         * @param scanImageNoFileType the value to be set.
         * @return {@code this}
         */
        public Builder scanImageNoFileType(com.aliyun.ros.cdk.core.IResolvable scanImageNoFileType) {
            this.scanImageNoFileType = scanImageNoFileType;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getVideoAdFreezeConfig}
         * @param videoAdFreezeConfig the value to be set.
         * @return {@code this}
         */
        public Builder videoAdFreezeConfig(com.aliyun.ros.cdk.core.IResolvable videoAdFreezeConfig) {
            this.videoAdFreezeConfig = videoAdFreezeConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getVideoAdFreezeConfig}
         * @param videoAdFreezeConfig the value to be set.
         * @return {@code this}
         */
        public Builder videoAdFreezeConfig(java.util.Map<java.lang.String, ? extends java.lang.Object> videoAdFreezeConfig) {
            this.videoAdFreezeConfig = videoAdFreezeConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getVideoAutoFreezeOpened}
         * @param videoAutoFreezeOpened the value to be set.
         * @return {@code this}
         */
        public Builder videoAutoFreezeOpened(java.lang.Boolean videoAutoFreezeOpened) {
            this.videoAutoFreezeOpened = videoAutoFreezeOpened;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getVideoAutoFreezeOpened}
         * @param videoAutoFreezeOpened the value to be set.
         * @return {@code this}
         */
        public Builder videoAutoFreezeOpened(com.aliyun.ros.cdk.core.IResolvable videoAutoFreezeOpened) {
            this.videoAutoFreezeOpened = videoAutoFreezeOpened;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getVideoFrameInterval}
         * @param videoFrameInterval the value to be set.
         * @return {@code this}
         */
        public Builder videoFrameInterval(java.lang.Number videoFrameInterval) {
            this.videoFrameInterval = videoFrameInterval;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getVideoFrameInterval}
         * @param videoFrameInterval the value to be set.
         * @return {@code this}
         */
        public Builder videoFrameInterval(com.aliyun.ros.cdk.core.IResolvable videoFrameInterval) {
            this.videoFrameInterval = videoFrameInterval;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getVideoLiveFreezeConfig}
         * @param videoLiveFreezeConfig the value to be set.
         * @return {@code this}
         */
        public Builder videoLiveFreezeConfig(com.aliyun.ros.cdk.core.IResolvable videoLiveFreezeConfig) {
            this.videoLiveFreezeConfig = videoLiveFreezeConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getVideoLiveFreezeConfig}
         * @param videoLiveFreezeConfig the value to be set.
         * @return {@code this}
         */
        public Builder videoLiveFreezeConfig(java.util.Map<java.lang.String, ? extends java.lang.Object> videoLiveFreezeConfig) {
            this.videoLiveFreezeConfig = videoLiveFreezeConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getVideoMaxFrames}
         * @param videoMaxFrames the value to be set.
         * @return {@code this}
         */
        public Builder videoMaxFrames(java.lang.Number videoMaxFrames) {
            this.videoMaxFrames = videoMaxFrames;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getVideoMaxFrames}
         * @param videoMaxFrames the value to be set.
         * @return {@code this}
         */
        public Builder videoMaxFrames(com.aliyun.ros.cdk.core.IResolvable videoMaxFrames) {
            this.videoMaxFrames = videoMaxFrames;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getVideoMaxSize}
         * @param videoMaxSize the value to be set.
         * @return {@code this}
         */
        public Builder videoMaxSize(java.lang.Number videoMaxSize) {
            this.videoMaxSize = videoMaxSize;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getVideoMaxSize}
         * @param videoMaxSize the value to be set.
         * @return {@code this}
         */
        public Builder videoMaxSize(com.aliyun.ros.cdk.core.IResolvable videoMaxSize) {
            this.videoMaxSize = videoMaxSize;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getVideoOpened}
         * @param videoOpened the value to be set.
         * @return {@code this}
         */
        public Builder videoOpened(java.lang.Boolean videoOpened) {
            this.videoOpened = videoOpened;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getVideoOpened}
         * @param videoOpened the value to be set.
         * @return {@code this}
         */
        public Builder videoOpened(com.aliyun.ros.cdk.core.IResolvable videoOpened) {
            this.videoOpened = videoOpened;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getVideoPornFreezeConfig}
         * @param videoPornFreezeConfig the value to be set.
         * @return {@code this}
         */
        public Builder videoPornFreezeConfig(com.aliyun.ros.cdk.core.IResolvable videoPornFreezeConfig) {
            this.videoPornFreezeConfig = videoPornFreezeConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getVideoPornFreezeConfig}
         * @param videoPornFreezeConfig the value to be set.
         * @return {@code this}
         */
        public Builder videoPornFreezeConfig(java.util.Map<java.lang.String, ? extends java.lang.Object> videoPornFreezeConfig) {
            this.videoPornFreezeConfig = videoPornFreezeConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getVideoScanLimit}
         * @param videoScanLimit the value to be set.
         * @return {@code this}
         */
        public Builder videoScanLimit(java.lang.Number videoScanLimit) {
            this.videoScanLimit = videoScanLimit;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getVideoScanLimit}
         * @param videoScanLimit the value to be set.
         * @return {@code this}
         */
        public Builder videoScanLimit(com.aliyun.ros.cdk.core.IResolvable videoScanLimit) {
            this.videoScanLimit = videoScanLimit;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getVideoScenes}
         * @param videoScenes the value to be set.
         * @return {@code this}
         */
        public Builder videoScenes(com.aliyun.ros.cdk.core.IResolvable videoScenes) {
            this.videoScenes = videoScenes;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getVideoScenes}
         * @param videoScenes the value to be set.
         * @return {@code this}
         */
        public Builder videoScenes(java.util.List<? extends java.lang.Object> videoScenes) {
            this.videoScenes = videoScenes;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getVideoTerrorismFreezeConfig}
         * @param videoTerrorismFreezeConfig the value to be set.
         * @return {@code this}
         */
        public Builder videoTerrorismFreezeConfig(com.aliyun.ros.cdk.core.IResolvable videoTerrorismFreezeConfig) {
            this.videoTerrorismFreezeConfig = videoTerrorismFreezeConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getVideoTerrorismFreezeConfig}
         * @param videoTerrorismFreezeConfig the value to be set.
         * @return {@code this}
         */
        public Builder videoTerrorismFreezeConfig(java.util.Map<java.lang.String, ? extends java.lang.Object> videoTerrorismFreezeConfig) {
            this.videoTerrorismFreezeConfig = videoTerrorismFreezeConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getVideoVoiceAntispamFreezeConfig}
         * @param videoVoiceAntispamFreezeConfig the value to be set.
         * @return {@code this}
         */
        public Builder videoVoiceAntispamFreezeConfig(com.aliyun.ros.cdk.core.IResolvable videoVoiceAntispamFreezeConfig) {
            this.videoVoiceAntispamFreezeConfig = videoVoiceAntispamFreezeConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosOssStockTaskProps#getVideoVoiceAntispamFreezeConfig}
         * @param videoVoiceAntispamFreezeConfig the value to be set.
         * @return {@code this}
         */
        public Builder videoVoiceAntispamFreezeConfig(java.util.Map<java.lang.String, ? extends java.lang.Object> videoVoiceAntispamFreezeConfig) {
            this.videoVoiceAntispamFreezeConfig = videoVoiceAntispamFreezeConfig;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosOssStockTaskProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosOssStockTaskProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosOssStockTaskProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosOssStockTaskProps {
        private final java.lang.Object buckets;
        private final java.lang.Object startDate;
        private final java.lang.Object audioAntispamFreezeConfig;
        private final java.lang.Object audioAutoFreezeOpened;
        private final java.lang.Object audioMaxSize;
        private final java.lang.Object audioOpened;
        private final java.lang.Object audioScanLimit;
        private final java.lang.Object audioScenes;
        private final java.lang.Object autoFreezeType;
        private final java.lang.Object bizType;
        private final java.lang.Object callbackId;
        private final java.lang.Object endDate;
        private final java.lang.Object imageAdFreezeConfig;
        private final java.lang.Object imageAutoFreezeOpened;
        private final java.lang.Object imageLiveFreezeConfig;
        private final java.lang.Object imageOpened;
        private final java.lang.Object imagePornFreezeConfig;
        private final java.lang.Object imageScanLimit;
        private final java.lang.Object imageScenes;
        private final java.lang.Object imageTerrorismFreezeConfig;
        private final java.lang.Object ossStockTaskName;
        private final java.lang.Object scanImageNoFileType;
        private final java.lang.Object videoAdFreezeConfig;
        private final java.lang.Object videoAutoFreezeOpened;
        private final java.lang.Object videoFrameInterval;
        private final java.lang.Object videoLiveFreezeConfig;
        private final java.lang.Object videoMaxFrames;
        private final java.lang.Object videoMaxSize;
        private final java.lang.Object videoOpened;
        private final java.lang.Object videoPornFreezeConfig;
        private final java.lang.Object videoScanLimit;
        private final java.lang.Object videoScenes;
        private final java.lang.Object videoTerrorismFreezeConfig;
        private final java.lang.Object videoVoiceAntispamFreezeConfig;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.buckets = software.amazon.jsii.Kernel.get(this, "buckets", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.startDate = software.amazon.jsii.Kernel.get(this, "startDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.audioAntispamFreezeConfig = software.amazon.jsii.Kernel.get(this, "audioAntispamFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.audioAutoFreezeOpened = software.amazon.jsii.Kernel.get(this, "audioAutoFreezeOpened", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.audioMaxSize = software.amazon.jsii.Kernel.get(this, "audioMaxSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.audioOpened = software.amazon.jsii.Kernel.get(this, "audioOpened", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.audioScanLimit = software.amazon.jsii.Kernel.get(this, "audioScanLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.audioScenes = software.amazon.jsii.Kernel.get(this, "audioScenes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoFreezeType = software.amazon.jsii.Kernel.get(this, "autoFreezeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bizType = software.amazon.jsii.Kernel.get(this, "bizType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.callbackId = software.amazon.jsii.Kernel.get(this, "callbackId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endDate = software.amazon.jsii.Kernel.get(this, "endDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageAdFreezeConfig = software.amazon.jsii.Kernel.get(this, "imageAdFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageAutoFreezeOpened = software.amazon.jsii.Kernel.get(this, "imageAutoFreezeOpened", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageLiveFreezeConfig = software.amazon.jsii.Kernel.get(this, "imageLiveFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageOpened = software.amazon.jsii.Kernel.get(this, "imageOpened", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imagePornFreezeConfig = software.amazon.jsii.Kernel.get(this, "imagePornFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageScanLimit = software.amazon.jsii.Kernel.get(this, "imageScanLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageScenes = software.amazon.jsii.Kernel.get(this, "imageScenes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageTerrorismFreezeConfig = software.amazon.jsii.Kernel.get(this, "imageTerrorismFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ossStockTaskName = software.amazon.jsii.Kernel.get(this, "ossStockTaskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scanImageNoFileType = software.amazon.jsii.Kernel.get(this, "scanImageNoFileType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.videoAdFreezeConfig = software.amazon.jsii.Kernel.get(this, "videoAdFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.videoAutoFreezeOpened = software.amazon.jsii.Kernel.get(this, "videoAutoFreezeOpened", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.videoFrameInterval = software.amazon.jsii.Kernel.get(this, "videoFrameInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.videoLiveFreezeConfig = software.amazon.jsii.Kernel.get(this, "videoLiveFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.videoMaxFrames = software.amazon.jsii.Kernel.get(this, "videoMaxFrames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.videoMaxSize = software.amazon.jsii.Kernel.get(this, "videoMaxSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.videoOpened = software.amazon.jsii.Kernel.get(this, "videoOpened", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.videoPornFreezeConfig = software.amazon.jsii.Kernel.get(this, "videoPornFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.videoScanLimit = software.amazon.jsii.Kernel.get(this, "videoScanLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.videoScenes = software.amazon.jsii.Kernel.get(this, "videoScenes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.videoTerrorismFreezeConfig = software.amazon.jsii.Kernel.get(this, "videoTerrorismFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.videoVoiceAntispamFreezeConfig = software.amazon.jsii.Kernel.get(this, "videoVoiceAntispamFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.buckets = java.util.Objects.requireNonNull(builder.buckets, "buckets is required");
            this.startDate = java.util.Objects.requireNonNull(builder.startDate, "startDate is required");
            this.audioAntispamFreezeConfig = builder.audioAntispamFreezeConfig;
            this.audioAutoFreezeOpened = builder.audioAutoFreezeOpened;
            this.audioMaxSize = builder.audioMaxSize;
            this.audioOpened = builder.audioOpened;
            this.audioScanLimit = builder.audioScanLimit;
            this.audioScenes = builder.audioScenes;
            this.autoFreezeType = builder.autoFreezeType;
            this.bizType = builder.bizType;
            this.callbackId = builder.callbackId;
            this.endDate = builder.endDate;
            this.imageAdFreezeConfig = builder.imageAdFreezeConfig;
            this.imageAutoFreezeOpened = builder.imageAutoFreezeOpened;
            this.imageLiveFreezeConfig = builder.imageLiveFreezeConfig;
            this.imageOpened = builder.imageOpened;
            this.imagePornFreezeConfig = builder.imagePornFreezeConfig;
            this.imageScanLimit = builder.imageScanLimit;
            this.imageScenes = builder.imageScenes;
            this.imageTerrorismFreezeConfig = builder.imageTerrorismFreezeConfig;
            this.ossStockTaskName = builder.ossStockTaskName;
            this.scanImageNoFileType = builder.scanImageNoFileType;
            this.videoAdFreezeConfig = builder.videoAdFreezeConfig;
            this.videoAutoFreezeOpened = builder.videoAutoFreezeOpened;
            this.videoFrameInterval = builder.videoFrameInterval;
            this.videoLiveFreezeConfig = builder.videoLiveFreezeConfig;
            this.videoMaxFrames = builder.videoMaxFrames;
            this.videoMaxSize = builder.videoMaxSize;
            this.videoOpened = builder.videoOpened;
            this.videoPornFreezeConfig = builder.videoPornFreezeConfig;
            this.videoScanLimit = builder.videoScanLimit;
            this.videoScenes = builder.videoScenes;
            this.videoTerrorismFreezeConfig = builder.videoTerrorismFreezeConfig;
            this.videoVoiceAntispamFreezeConfig = builder.videoVoiceAntispamFreezeConfig;
        }

        @Override
        public final java.lang.Object getBuckets() {
            return this.buckets;
        }

        @Override
        public final java.lang.Object getStartDate() {
            return this.startDate;
        }

        @Override
        public final java.lang.Object getAudioAntispamFreezeConfig() {
            return this.audioAntispamFreezeConfig;
        }

        @Override
        public final java.lang.Object getAudioAutoFreezeOpened() {
            return this.audioAutoFreezeOpened;
        }

        @Override
        public final java.lang.Object getAudioMaxSize() {
            return this.audioMaxSize;
        }

        @Override
        public final java.lang.Object getAudioOpened() {
            return this.audioOpened;
        }

        @Override
        public final java.lang.Object getAudioScanLimit() {
            return this.audioScanLimit;
        }

        @Override
        public final java.lang.Object getAudioScenes() {
            return this.audioScenes;
        }

        @Override
        public final java.lang.Object getAutoFreezeType() {
            return this.autoFreezeType;
        }

        @Override
        public final java.lang.Object getBizType() {
            return this.bizType;
        }

        @Override
        public final java.lang.Object getCallbackId() {
            return this.callbackId;
        }

        @Override
        public final java.lang.Object getEndDate() {
            return this.endDate;
        }

        @Override
        public final java.lang.Object getImageAdFreezeConfig() {
            return this.imageAdFreezeConfig;
        }

        @Override
        public final java.lang.Object getImageAutoFreezeOpened() {
            return this.imageAutoFreezeOpened;
        }

        @Override
        public final java.lang.Object getImageLiveFreezeConfig() {
            return this.imageLiveFreezeConfig;
        }

        @Override
        public final java.lang.Object getImageOpened() {
            return this.imageOpened;
        }

        @Override
        public final java.lang.Object getImagePornFreezeConfig() {
            return this.imagePornFreezeConfig;
        }

        @Override
        public final java.lang.Object getImageScanLimit() {
            return this.imageScanLimit;
        }

        @Override
        public final java.lang.Object getImageScenes() {
            return this.imageScenes;
        }

        @Override
        public final java.lang.Object getImageTerrorismFreezeConfig() {
            return this.imageTerrorismFreezeConfig;
        }

        @Override
        public final java.lang.Object getOssStockTaskName() {
            return this.ossStockTaskName;
        }

        @Override
        public final java.lang.Object getScanImageNoFileType() {
            return this.scanImageNoFileType;
        }

        @Override
        public final java.lang.Object getVideoAdFreezeConfig() {
            return this.videoAdFreezeConfig;
        }

        @Override
        public final java.lang.Object getVideoAutoFreezeOpened() {
            return this.videoAutoFreezeOpened;
        }

        @Override
        public final java.lang.Object getVideoFrameInterval() {
            return this.videoFrameInterval;
        }

        @Override
        public final java.lang.Object getVideoLiveFreezeConfig() {
            return this.videoLiveFreezeConfig;
        }

        @Override
        public final java.lang.Object getVideoMaxFrames() {
            return this.videoMaxFrames;
        }

        @Override
        public final java.lang.Object getVideoMaxSize() {
            return this.videoMaxSize;
        }

        @Override
        public final java.lang.Object getVideoOpened() {
            return this.videoOpened;
        }

        @Override
        public final java.lang.Object getVideoPornFreezeConfig() {
            return this.videoPornFreezeConfig;
        }

        @Override
        public final java.lang.Object getVideoScanLimit() {
            return this.videoScanLimit;
        }

        @Override
        public final java.lang.Object getVideoScenes() {
            return this.videoScenes;
        }

        @Override
        public final java.lang.Object getVideoTerrorismFreezeConfig() {
            return this.videoTerrorismFreezeConfig;
        }

        @Override
        public final java.lang.Object getVideoVoiceAntispamFreezeConfig() {
            return this.videoVoiceAntispamFreezeConfig;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("buckets", om.valueToTree(this.getBuckets()));
            data.set("startDate", om.valueToTree(this.getStartDate()));
            if (this.getAudioAntispamFreezeConfig() != null) {
                data.set("audioAntispamFreezeConfig", om.valueToTree(this.getAudioAntispamFreezeConfig()));
            }
            if (this.getAudioAutoFreezeOpened() != null) {
                data.set("audioAutoFreezeOpened", om.valueToTree(this.getAudioAutoFreezeOpened()));
            }
            if (this.getAudioMaxSize() != null) {
                data.set("audioMaxSize", om.valueToTree(this.getAudioMaxSize()));
            }
            if (this.getAudioOpened() != null) {
                data.set("audioOpened", om.valueToTree(this.getAudioOpened()));
            }
            if (this.getAudioScanLimit() != null) {
                data.set("audioScanLimit", om.valueToTree(this.getAudioScanLimit()));
            }
            if (this.getAudioScenes() != null) {
                data.set("audioScenes", om.valueToTree(this.getAudioScenes()));
            }
            if (this.getAutoFreezeType() != null) {
                data.set("autoFreezeType", om.valueToTree(this.getAutoFreezeType()));
            }
            if (this.getBizType() != null) {
                data.set("bizType", om.valueToTree(this.getBizType()));
            }
            if (this.getCallbackId() != null) {
                data.set("callbackId", om.valueToTree(this.getCallbackId()));
            }
            if (this.getEndDate() != null) {
                data.set("endDate", om.valueToTree(this.getEndDate()));
            }
            if (this.getImageAdFreezeConfig() != null) {
                data.set("imageAdFreezeConfig", om.valueToTree(this.getImageAdFreezeConfig()));
            }
            if (this.getImageAutoFreezeOpened() != null) {
                data.set("imageAutoFreezeOpened", om.valueToTree(this.getImageAutoFreezeOpened()));
            }
            if (this.getImageLiveFreezeConfig() != null) {
                data.set("imageLiveFreezeConfig", om.valueToTree(this.getImageLiveFreezeConfig()));
            }
            if (this.getImageOpened() != null) {
                data.set("imageOpened", om.valueToTree(this.getImageOpened()));
            }
            if (this.getImagePornFreezeConfig() != null) {
                data.set("imagePornFreezeConfig", om.valueToTree(this.getImagePornFreezeConfig()));
            }
            if (this.getImageScanLimit() != null) {
                data.set("imageScanLimit", om.valueToTree(this.getImageScanLimit()));
            }
            if (this.getImageScenes() != null) {
                data.set("imageScenes", om.valueToTree(this.getImageScenes()));
            }
            if (this.getImageTerrorismFreezeConfig() != null) {
                data.set("imageTerrorismFreezeConfig", om.valueToTree(this.getImageTerrorismFreezeConfig()));
            }
            if (this.getOssStockTaskName() != null) {
                data.set("ossStockTaskName", om.valueToTree(this.getOssStockTaskName()));
            }
            if (this.getScanImageNoFileType() != null) {
                data.set("scanImageNoFileType", om.valueToTree(this.getScanImageNoFileType()));
            }
            if (this.getVideoAdFreezeConfig() != null) {
                data.set("videoAdFreezeConfig", om.valueToTree(this.getVideoAdFreezeConfig()));
            }
            if (this.getVideoAutoFreezeOpened() != null) {
                data.set("videoAutoFreezeOpened", om.valueToTree(this.getVideoAutoFreezeOpened()));
            }
            if (this.getVideoFrameInterval() != null) {
                data.set("videoFrameInterval", om.valueToTree(this.getVideoFrameInterval()));
            }
            if (this.getVideoLiveFreezeConfig() != null) {
                data.set("videoLiveFreezeConfig", om.valueToTree(this.getVideoLiveFreezeConfig()));
            }
            if (this.getVideoMaxFrames() != null) {
                data.set("videoMaxFrames", om.valueToTree(this.getVideoMaxFrames()));
            }
            if (this.getVideoMaxSize() != null) {
                data.set("videoMaxSize", om.valueToTree(this.getVideoMaxSize()));
            }
            if (this.getVideoOpened() != null) {
                data.set("videoOpened", om.valueToTree(this.getVideoOpened()));
            }
            if (this.getVideoPornFreezeConfig() != null) {
                data.set("videoPornFreezeConfig", om.valueToTree(this.getVideoPornFreezeConfig()));
            }
            if (this.getVideoScanLimit() != null) {
                data.set("videoScanLimit", om.valueToTree(this.getVideoScanLimit()));
            }
            if (this.getVideoScenes() != null) {
                data.set("videoScenes", om.valueToTree(this.getVideoScenes()));
            }
            if (this.getVideoTerrorismFreezeConfig() != null) {
                data.set("videoTerrorismFreezeConfig", om.valueToTree(this.getVideoTerrorismFreezeConfig()));
            }
            if (this.getVideoVoiceAntispamFreezeConfig() != null) {
                data.set("videoVoiceAntispamFreezeConfig", om.valueToTree(this.getVideoVoiceAntispamFreezeConfig()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-aligreen.RosOssStockTaskProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosOssStockTaskProps.Jsii$Proxy that = (RosOssStockTaskProps.Jsii$Proxy) o;

            if (!buckets.equals(that.buckets)) return false;
            if (!startDate.equals(that.startDate)) return false;
            if (this.audioAntispamFreezeConfig != null ? !this.audioAntispamFreezeConfig.equals(that.audioAntispamFreezeConfig) : that.audioAntispamFreezeConfig != null) return false;
            if (this.audioAutoFreezeOpened != null ? !this.audioAutoFreezeOpened.equals(that.audioAutoFreezeOpened) : that.audioAutoFreezeOpened != null) return false;
            if (this.audioMaxSize != null ? !this.audioMaxSize.equals(that.audioMaxSize) : that.audioMaxSize != null) return false;
            if (this.audioOpened != null ? !this.audioOpened.equals(that.audioOpened) : that.audioOpened != null) return false;
            if (this.audioScanLimit != null ? !this.audioScanLimit.equals(that.audioScanLimit) : that.audioScanLimit != null) return false;
            if (this.audioScenes != null ? !this.audioScenes.equals(that.audioScenes) : that.audioScenes != null) return false;
            if (this.autoFreezeType != null ? !this.autoFreezeType.equals(that.autoFreezeType) : that.autoFreezeType != null) return false;
            if (this.bizType != null ? !this.bizType.equals(that.bizType) : that.bizType != null) return false;
            if (this.callbackId != null ? !this.callbackId.equals(that.callbackId) : that.callbackId != null) return false;
            if (this.endDate != null ? !this.endDate.equals(that.endDate) : that.endDate != null) return false;
            if (this.imageAdFreezeConfig != null ? !this.imageAdFreezeConfig.equals(that.imageAdFreezeConfig) : that.imageAdFreezeConfig != null) return false;
            if (this.imageAutoFreezeOpened != null ? !this.imageAutoFreezeOpened.equals(that.imageAutoFreezeOpened) : that.imageAutoFreezeOpened != null) return false;
            if (this.imageLiveFreezeConfig != null ? !this.imageLiveFreezeConfig.equals(that.imageLiveFreezeConfig) : that.imageLiveFreezeConfig != null) return false;
            if (this.imageOpened != null ? !this.imageOpened.equals(that.imageOpened) : that.imageOpened != null) return false;
            if (this.imagePornFreezeConfig != null ? !this.imagePornFreezeConfig.equals(that.imagePornFreezeConfig) : that.imagePornFreezeConfig != null) return false;
            if (this.imageScanLimit != null ? !this.imageScanLimit.equals(that.imageScanLimit) : that.imageScanLimit != null) return false;
            if (this.imageScenes != null ? !this.imageScenes.equals(that.imageScenes) : that.imageScenes != null) return false;
            if (this.imageTerrorismFreezeConfig != null ? !this.imageTerrorismFreezeConfig.equals(that.imageTerrorismFreezeConfig) : that.imageTerrorismFreezeConfig != null) return false;
            if (this.ossStockTaskName != null ? !this.ossStockTaskName.equals(that.ossStockTaskName) : that.ossStockTaskName != null) return false;
            if (this.scanImageNoFileType != null ? !this.scanImageNoFileType.equals(that.scanImageNoFileType) : that.scanImageNoFileType != null) return false;
            if (this.videoAdFreezeConfig != null ? !this.videoAdFreezeConfig.equals(that.videoAdFreezeConfig) : that.videoAdFreezeConfig != null) return false;
            if (this.videoAutoFreezeOpened != null ? !this.videoAutoFreezeOpened.equals(that.videoAutoFreezeOpened) : that.videoAutoFreezeOpened != null) return false;
            if (this.videoFrameInterval != null ? !this.videoFrameInterval.equals(that.videoFrameInterval) : that.videoFrameInterval != null) return false;
            if (this.videoLiveFreezeConfig != null ? !this.videoLiveFreezeConfig.equals(that.videoLiveFreezeConfig) : that.videoLiveFreezeConfig != null) return false;
            if (this.videoMaxFrames != null ? !this.videoMaxFrames.equals(that.videoMaxFrames) : that.videoMaxFrames != null) return false;
            if (this.videoMaxSize != null ? !this.videoMaxSize.equals(that.videoMaxSize) : that.videoMaxSize != null) return false;
            if (this.videoOpened != null ? !this.videoOpened.equals(that.videoOpened) : that.videoOpened != null) return false;
            if (this.videoPornFreezeConfig != null ? !this.videoPornFreezeConfig.equals(that.videoPornFreezeConfig) : that.videoPornFreezeConfig != null) return false;
            if (this.videoScanLimit != null ? !this.videoScanLimit.equals(that.videoScanLimit) : that.videoScanLimit != null) return false;
            if (this.videoScenes != null ? !this.videoScenes.equals(that.videoScenes) : that.videoScenes != null) return false;
            if (this.videoTerrorismFreezeConfig != null ? !this.videoTerrorismFreezeConfig.equals(that.videoTerrorismFreezeConfig) : that.videoTerrorismFreezeConfig != null) return false;
            return this.videoVoiceAntispamFreezeConfig != null ? this.videoVoiceAntispamFreezeConfig.equals(that.videoVoiceAntispamFreezeConfig) : that.videoVoiceAntispamFreezeConfig == null;
        }

        @Override
        public final int hashCode() {
            int result = this.buckets.hashCode();
            result = 31 * result + (this.startDate.hashCode());
            result = 31 * result + (this.audioAntispamFreezeConfig != null ? this.audioAntispamFreezeConfig.hashCode() : 0);
            result = 31 * result + (this.audioAutoFreezeOpened != null ? this.audioAutoFreezeOpened.hashCode() : 0);
            result = 31 * result + (this.audioMaxSize != null ? this.audioMaxSize.hashCode() : 0);
            result = 31 * result + (this.audioOpened != null ? this.audioOpened.hashCode() : 0);
            result = 31 * result + (this.audioScanLimit != null ? this.audioScanLimit.hashCode() : 0);
            result = 31 * result + (this.audioScenes != null ? this.audioScenes.hashCode() : 0);
            result = 31 * result + (this.autoFreezeType != null ? this.autoFreezeType.hashCode() : 0);
            result = 31 * result + (this.bizType != null ? this.bizType.hashCode() : 0);
            result = 31 * result + (this.callbackId != null ? this.callbackId.hashCode() : 0);
            result = 31 * result + (this.endDate != null ? this.endDate.hashCode() : 0);
            result = 31 * result + (this.imageAdFreezeConfig != null ? this.imageAdFreezeConfig.hashCode() : 0);
            result = 31 * result + (this.imageAutoFreezeOpened != null ? this.imageAutoFreezeOpened.hashCode() : 0);
            result = 31 * result + (this.imageLiveFreezeConfig != null ? this.imageLiveFreezeConfig.hashCode() : 0);
            result = 31 * result + (this.imageOpened != null ? this.imageOpened.hashCode() : 0);
            result = 31 * result + (this.imagePornFreezeConfig != null ? this.imagePornFreezeConfig.hashCode() : 0);
            result = 31 * result + (this.imageScanLimit != null ? this.imageScanLimit.hashCode() : 0);
            result = 31 * result + (this.imageScenes != null ? this.imageScenes.hashCode() : 0);
            result = 31 * result + (this.imageTerrorismFreezeConfig != null ? this.imageTerrorismFreezeConfig.hashCode() : 0);
            result = 31 * result + (this.ossStockTaskName != null ? this.ossStockTaskName.hashCode() : 0);
            result = 31 * result + (this.scanImageNoFileType != null ? this.scanImageNoFileType.hashCode() : 0);
            result = 31 * result + (this.videoAdFreezeConfig != null ? this.videoAdFreezeConfig.hashCode() : 0);
            result = 31 * result + (this.videoAutoFreezeOpened != null ? this.videoAutoFreezeOpened.hashCode() : 0);
            result = 31 * result + (this.videoFrameInterval != null ? this.videoFrameInterval.hashCode() : 0);
            result = 31 * result + (this.videoLiveFreezeConfig != null ? this.videoLiveFreezeConfig.hashCode() : 0);
            result = 31 * result + (this.videoMaxFrames != null ? this.videoMaxFrames.hashCode() : 0);
            result = 31 * result + (this.videoMaxSize != null ? this.videoMaxSize.hashCode() : 0);
            result = 31 * result + (this.videoOpened != null ? this.videoOpened.hashCode() : 0);
            result = 31 * result + (this.videoPornFreezeConfig != null ? this.videoPornFreezeConfig.hashCode() : 0);
            result = 31 * result + (this.videoScanLimit != null ? this.videoScanLimit.hashCode() : 0);
            result = 31 * result + (this.videoScenes != null ? this.videoScenes.hashCode() : 0);
            result = 31 * result + (this.videoTerrorismFreezeConfig != null ? this.videoTerrorismFreezeConfig.hashCode() : 0);
            result = 31 * result + (this.videoVoiceAntispamFreezeConfig != null ? this.videoVoiceAntispamFreezeConfig.hashCode() : 0);
            return result;
        }
    }
}
