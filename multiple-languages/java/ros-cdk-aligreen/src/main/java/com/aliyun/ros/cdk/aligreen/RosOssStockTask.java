package com.aliyun.ros.cdk.aligreen;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::Aligreen::OssStockTask</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:34.481Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.aligreen.$Module.class, fqn = "@alicloud/ros-cdk-aligreen.RosOssStockTask")
public class RosOssStockTask extends com.aliyun.ros.cdk.core.RosResource {

    protected RosOssStockTask(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosOssStockTask(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.aligreen.RosOssStockTask.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosOssStockTask(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.aligreen.RosOssStockTaskProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAudioAntispamFreezeConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrAudioAntispamFreezeConfig", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAudioAutoFreezeOpened() {
        return software.amazon.jsii.Kernel.get(this, "attrAudioAutoFreezeOpened", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAudioMaxSize() {
        return software.amazon.jsii.Kernel.get(this, "attrAudioMaxSize", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAudioOpened() {
        return software.amazon.jsii.Kernel.get(this, "attrAudioOpened", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAudioScanLimit() {
        return software.amazon.jsii.Kernel.get(this, "attrAudioScanLimit", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAudioScenes() {
        return software.amazon.jsii.Kernel.get(this, "attrAudioScenes", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAutoFreezeType() {
        return software.amazon.jsii.Kernel.get(this, "attrAutoFreezeType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBizType() {
        return software.amazon.jsii.Kernel.get(this, "attrBizType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBuckets() {
        return software.amazon.jsii.Kernel.get(this, "attrBuckets", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCallbackId() {
        return software.amazon.jsii.Kernel.get(this, "attrCallbackId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEndDate() {
        return software.amazon.jsii.Kernel.get(this, "attrEndDate", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrImageAdFreezeConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrImageAdFreezeConfig", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrImageAutoFreezeOpened() {
        return software.amazon.jsii.Kernel.get(this, "attrImageAutoFreezeOpened", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrImageLiveFreezeConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrImageLiveFreezeConfig", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrImageOpened() {
        return software.amazon.jsii.Kernel.get(this, "attrImageOpened", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrImagePornFreezeConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrImagePornFreezeConfig", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrImageScanLimit() {
        return software.amazon.jsii.Kernel.get(this, "attrImageScanLimit", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrImageScenes() {
        return software.amazon.jsii.Kernel.get(this, "attrImageScenes", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrImageTerrorismFreezeConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrImageTerrorismFreezeConfig", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScanImageNoFileType() {
        return software.amazon.jsii.Kernel.get(this, "attrScanImageNoFileType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrStartDate() {
        return software.amazon.jsii.Kernel.get(this, "attrStartDate", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVideoAdFreezeConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrVideoAdFreezeConfig", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVideoAutoFreezeOpened() {
        return software.amazon.jsii.Kernel.get(this, "attrVideoAutoFreezeOpened", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVideoFrameInterval() {
        return software.amazon.jsii.Kernel.get(this, "attrVideoFrameInterval", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVideoLiveFreezeConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrVideoLiveFreezeConfig", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVideoMaxFrames() {
        return software.amazon.jsii.Kernel.get(this, "attrVideoMaxFrames", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVideoMaxSize() {
        return software.amazon.jsii.Kernel.get(this, "attrVideoMaxSize", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVideoOpened() {
        return software.amazon.jsii.Kernel.get(this, "attrVideoOpened", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVideoPornFreezeConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrVideoPornFreezeConfig", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVideoScanLimit() {
        return software.amazon.jsii.Kernel.get(this, "attrVideoScanLimit", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVideoScenes() {
        return software.amazon.jsii.Kernel.get(this, "attrVideoScenes", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVideoTerrorismFreezeConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrVideoTerrorismFreezeConfig", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVideoVoiceAntispamFreezeConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrVideoVoiceAntispamFreezeConfig", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getBuckets() {
        return software.amazon.jsii.Kernel.get(this, "buckets", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBuckets(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
            }
        }
        software.amazon.jsii.Kernel.set(this, "buckets", java.util.Objects.requireNonNull(value, "buckets is required"));
    }

    /**
     */
    public void setBuckets(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "buckets", java.util.Objects.requireNonNull(value, "buckets is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getStartDate() {
        return software.amazon.jsii.Kernel.get(this, "startDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStartDate(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "startDate", java.util.Objects.requireNonNull(value, "startDate is required"));
    }

    /**
     */
    public void setStartDate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "startDate", java.util.Objects.requireNonNull(value, "startDate is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAudioAntispamFreezeConfig() {
        return software.amazon.jsii.Kernel.get(this, "audioAntispamFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAudioAntispamFreezeConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "audioAntispamFreezeConfig", value);
    }

    /**
     */
    public void setAudioAntispamFreezeConfig(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "audioAntispamFreezeConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAudioAutoFreezeOpened() {
        return software.amazon.jsii.Kernel.get(this, "audioAutoFreezeOpened", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAudioAutoFreezeOpened(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "audioAutoFreezeOpened", value);
    }

    /**
     */
    public void setAudioAutoFreezeOpened(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "audioAutoFreezeOpened", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAudioMaxSize() {
        return software.amazon.jsii.Kernel.get(this, "audioMaxSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAudioMaxSize(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "audioMaxSize", value);
    }

    /**
     */
    public void setAudioMaxSize(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "audioMaxSize", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAudioOpened() {
        return software.amazon.jsii.Kernel.get(this, "audioOpened", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAudioOpened(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "audioOpened", value);
    }

    /**
     */
    public void setAudioOpened(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "audioOpened", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAudioScanLimit() {
        return software.amazon.jsii.Kernel.get(this, "audioScanLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAudioScanLimit(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "audioScanLimit", value);
    }

    /**
     */
    public void setAudioScanLimit(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "audioScanLimit", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAudioScenes() {
        return software.amazon.jsii.Kernel.get(this, "audioScenes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAudioScenes(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "audioScenes", value);
    }

    /**
     */
    public void setAudioScenes(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "audioScenes", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoFreezeType() {
        return software.amazon.jsii.Kernel.get(this, "autoFreezeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoFreezeType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "autoFreezeType", value);
    }

    /**
     */
    public void setAutoFreezeType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoFreezeType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBizType() {
        return software.amazon.jsii.Kernel.get(this, "bizType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBizType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "bizType", value);
    }

    /**
     */
    public void setBizType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "bizType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCallbackId() {
        return software.amazon.jsii.Kernel.get(this, "callbackId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCallbackId(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "callbackId", value);
    }

    /**
     */
    public void setCallbackId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "callbackId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEndDate() {
        return software.amazon.jsii.Kernel.get(this, "endDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEndDate(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "endDate", value);
    }

    /**
     */
    public void setEndDate(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "endDate", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getImageAdFreezeConfig() {
        return software.amazon.jsii.Kernel.get(this, "imageAdFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setImageAdFreezeConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "imageAdFreezeConfig", value);
    }

    /**
     */
    public void setImageAdFreezeConfig(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "imageAdFreezeConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getImageAutoFreezeOpened() {
        return software.amazon.jsii.Kernel.get(this, "imageAutoFreezeOpened", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setImageAutoFreezeOpened(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "imageAutoFreezeOpened", value);
    }

    /**
     */
    public void setImageAutoFreezeOpened(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "imageAutoFreezeOpened", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getImageLiveFreezeConfig() {
        return software.amazon.jsii.Kernel.get(this, "imageLiveFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setImageLiveFreezeConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "imageLiveFreezeConfig", value);
    }

    /**
     */
    public void setImageLiveFreezeConfig(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "imageLiveFreezeConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getImageOpened() {
        return software.amazon.jsii.Kernel.get(this, "imageOpened", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setImageOpened(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "imageOpened", value);
    }

    /**
     */
    public void setImageOpened(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "imageOpened", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getImagePornFreezeConfig() {
        return software.amazon.jsii.Kernel.get(this, "imagePornFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setImagePornFreezeConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "imagePornFreezeConfig", value);
    }

    /**
     */
    public void setImagePornFreezeConfig(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "imagePornFreezeConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getImageScanLimit() {
        return software.amazon.jsii.Kernel.get(this, "imageScanLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setImageScanLimit(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "imageScanLimit", value);
    }

    /**
     */
    public void setImageScanLimit(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "imageScanLimit", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getImageScenes() {
        return software.amazon.jsii.Kernel.get(this, "imageScenes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setImageScenes(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "imageScenes", value);
    }

    /**
     */
    public void setImageScenes(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "imageScenes", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getImageTerrorismFreezeConfig() {
        return software.amazon.jsii.Kernel.get(this, "imageTerrorismFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setImageTerrorismFreezeConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "imageTerrorismFreezeConfig", value);
    }

    /**
     */
    public void setImageTerrorismFreezeConfig(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "imageTerrorismFreezeConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOssStockTaskName() {
        return software.amazon.jsii.Kernel.get(this, "ossStockTaskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOssStockTaskName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ossStockTaskName", value);
    }

    /**
     */
    public void setOssStockTaskName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ossStockTaskName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getScanImageNoFileType() {
        return software.amazon.jsii.Kernel.get(this, "scanImageNoFileType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScanImageNoFileType(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "scanImageNoFileType", value);
    }

    /**
     */
    public void setScanImageNoFileType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scanImageNoFileType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVideoAdFreezeConfig() {
        return software.amazon.jsii.Kernel.get(this, "videoAdFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVideoAdFreezeConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "videoAdFreezeConfig", value);
    }

    /**
     */
    public void setVideoAdFreezeConfig(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "videoAdFreezeConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVideoAutoFreezeOpened() {
        return software.amazon.jsii.Kernel.get(this, "videoAutoFreezeOpened", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVideoAutoFreezeOpened(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "videoAutoFreezeOpened", value);
    }

    /**
     */
    public void setVideoAutoFreezeOpened(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "videoAutoFreezeOpened", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVideoFrameInterval() {
        return software.amazon.jsii.Kernel.get(this, "videoFrameInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVideoFrameInterval(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "videoFrameInterval", value);
    }

    /**
     */
    public void setVideoFrameInterval(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "videoFrameInterval", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVideoLiveFreezeConfig() {
        return software.amazon.jsii.Kernel.get(this, "videoLiveFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVideoLiveFreezeConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "videoLiveFreezeConfig", value);
    }

    /**
     */
    public void setVideoLiveFreezeConfig(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "videoLiveFreezeConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVideoMaxFrames() {
        return software.amazon.jsii.Kernel.get(this, "videoMaxFrames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVideoMaxFrames(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "videoMaxFrames", value);
    }

    /**
     */
    public void setVideoMaxFrames(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "videoMaxFrames", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVideoMaxSize() {
        return software.amazon.jsii.Kernel.get(this, "videoMaxSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVideoMaxSize(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "videoMaxSize", value);
    }

    /**
     */
    public void setVideoMaxSize(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "videoMaxSize", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVideoOpened() {
        return software.amazon.jsii.Kernel.get(this, "videoOpened", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVideoOpened(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "videoOpened", value);
    }

    /**
     */
    public void setVideoOpened(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "videoOpened", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVideoPornFreezeConfig() {
        return software.amazon.jsii.Kernel.get(this, "videoPornFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVideoPornFreezeConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "videoPornFreezeConfig", value);
    }

    /**
     */
    public void setVideoPornFreezeConfig(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "videoPornFreezeConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVideoScanLimit() {
        return software.amazon.jsii.Kernel.get(this, "videoScanLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVideoScanLimit(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "videoScanLimit", value);
    }

    /**
     */
    public void setVideoScanLimit(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "videoScanLimit", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVideoScenes() {
        return software.amazon.jsii.Kernel.get(this, "videoScenes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVideoScenes(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "videoScenes", value);
    }

    /**
     */
    public void setVideoScenes(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "videoScenes", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVideoTerrorismFreezeConfig() {
        return software.amazon.jsii.Kernel.get(this, "videoTerrorismFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVideoTerrorismFreezeConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "videoTerrorismFreezeConfig", value);
    }

    /**
     */
    public void setVideoTerrorismFreezeConfig(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "videoTerrorismFreezeConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVideoVoiceAntispamFreezeConfig() {
        return software.amazon.jsii.Kernel.get(this, "videoVoiceAntispamFreezeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVideoVoiceAntispamFreezeConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "videoVoiceAntispamFreezeConfig", value);
    }

    /**
     */
    public void setVideoVoiceAntispamFreezeConfig(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "videoVoiceAntispamFreezeConfig", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.aligreen.RosOssStockTask}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.aligreen.RosOssStockTask> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.aligreen.RosOssStockTaskProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.aligreen.RosOssStockTaskProps.Builder();
        }

        /**
         * @return {@code this}
         * @param buckets This parameter is required.
         */
        public Builder buckets(final java.util.List<? extends java.lang.Object> buckets) {
            this.props.buckets(buckets);
            return this;
        }
        /**
         * @return {@code this}
         * @param buckets This parameter is required.
         */
        public Builder buckets(final com.aliyun.ros.cdk.core.IResolvable buckets) {
            this.props.buckets(buckets);
            return this;
        }

        /**
         * @return {@code this}
         * @param startDate This parameter is required.
         */
        public Builder startDate(final java.lang.String startDate) {
            this.props.startDate(startDate);
            return this;
        }
        /**
         * @return {@code this}
         * @param startDate This parameter is required.
         */
        public Builder startDate(final com.aliyun.ros.cdk.core.IResolvable startDate) {
            this.props.startDate(startDate);
            return this;
        }

        /**
         * @return {@code this}
         * @param audioAntispamFreezeConfig This parameter is required.
         */
        public Builder audioAntispamFreezeConfig(final com.aliyun.ros.cdk.core.IResolvable audioAntispamFreezeConfig) {
            this.props.audioAntispamFreezeConfig(audioAntispamFreezeConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param audioAntispamFreezeConfig This parameter is required.
         */
        public Builder audioAntispamFreezeConfig(final java.util.Map<java.lang.String, ? extends java.lang.Object> audioAntispamFreezeConfig) {
            this.props.audioAntispamFreezeConfig(audioAntispamFreezeConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param audioAutoFreezeOpened This parameter is required.
         */
        public Builder audioAutoFreezeOpened(final java.lang.Boolean audioAutoFreezeOpened) {
            this.props.audioAutoFreezeOpened(audioAutoFreezeOpened);
            return this;
        }
        /**
         * @return {@code this}
         * @param audioAutoFreezeOpened This parameter is required.
         */
        public Builder audioAutoFreezeOpened(final com.aliyun.ros.cdk.core.IResolvable audioAutoFreezeOpened) {
            this.props.audioAutoFreezeOpened(audioAutoFreezeOpened);
            return this;
        }

        /**
         * @return {@code this}
         * @param audioMaxSize This parameter is required.
         */
        public Builder audioMaxSize(final java.lang.Number audioMaxSize) {
            this.props.audioMaxSize(audioMaxSize);
            return this;
        }
        /**
         * @return {@code this}
         * @param audioMaxSize This parameter is required.
         */
        public Builder audioMaxSize(final com.aliyun.ros.cdk.core.IResolvable audioMaxSize) {
            this.props.audioMaxSize(audioMaxSize);
            return this;
        }

        /**
         * @return {@code this}
         * @param audioOpened This parameter is required.
         */
        public Builder audioOpened(final java.lang.Boolean audioOpened) {
            this.props.audioOpened(audioOpened);
            return this;
        }
        /**
         * @return {@code this}
         * @param audioOpened This parameter is required.
         */
        public Builder audioOpened(final com.aliyun.ros.cdk.core.IResolvable audioOpened) {
            this.props.audioOpened(audioOpened);
            return this;
        }

        /**
         * @return {@code this}
         * @param audioScanLimit This parameter is required.
         */
        public Builder audioScanLimit(final java.lang.Number audioScanLimit) {
            this.props.audioScanLimit(audioScanLimit);
            return this;
        }
        /**
         * @return {@code this}
         * @param audioScanLimit This parameter is required.
         */
        public Builder audioScanLimit(final com.aliyun.ros.cdk.core.IResolvable audioScanLimit) {
            this.props.audioScanLimit(audioScanLimit);
            return this;
        }

        /**
         * @return {@code this}
         * @param audioScenes This parameter is required.
         */
        public Builder audioScenes(final com.aliyun.ros.cdk.core.IResolvable audioScenes) {
            this.props.audioScenes(audioScenes);
            return this;
        }
        /**
         * @return {@code this}
         * @param audioScenes This parameter is required.
         */
        public Builder audioScenes(final java.util.List<? extends java.lang.Object> audioScenes) {
            this.props.audioScenes(audioScenes);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoFreezeType This parameter is required.
         */
        public Builder autoFreezeType(final java.lang.String autoFreezeType) {
            this.props.autoFreezeType(autoFreezeType);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoFreezeType This parameter is required.
         */
        public Builder autoFreezeType(final com.aliyun.ros.cdk.core.IResolvable autoFreezeType) {
            this.props.autoFreezeType(autoFreezeType);
            return this;
        }

        /**
         * @return {@code this}
         * @param bizType This parameter is required.
         */
        public Builder bizType(final java.lang.String bizType) {
            this.props.bizType(bizType);
            return this;
        }
        /**
         * @return {@code this}
         * @param bizType This parameter is required.
         */
        public Builder bizType(final com.aliyun.ros.cdk.core.IResolvable bizType) {
            this.props.bizType(bizType);
            return this;
        }

        /**
         * @return {@code this}
         * @param callbackId This parameter is required.
         */
        public Builder callbackId(final java.lang.Number callbackId) {
            this.props.callbackId(callbackId);
            return this;
        }
        /**
         * @return {@code this}
         * @param callbackId This parameter is required.
         */
        public Builder callbackId(final com.aliyun.ros.cdk.core.IResolvable callbackId) {
            this.props.callbackId(callbackId);
            return this;
        }

        /**
         * @return {@code this}
         * @param endDate This parameter is required.
         */
        public Builder endDate(final java.lang.String endDate) {
            this.props.endDate(endDate);
            return this;
        }
        /**
         * @return {@code this}
         * @param endDate This parameter is required.
         */
        public Builder endDate(final com.aliyun.ros.cdk.core.IResolvable endDate) {
            this.props.endDate(endDate);
            return this;
        }

        /**
         * @return {@code this}
         * @param imageAdFreezeConfig This parameter is required.
         */
        public Builder imageAdFreezeConfig(final com.aliyun.ros.cdk.core.IResolvable imageAdFreezeConfig) {
            this.props.imageAdFreezeConfig(imageAdFreezeConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param imageAdFreezeConfig This parameter is required.
         */
        public Builder imageAdFreezeConfig(final java.util.Map<java.lang.String, ? extends java.lang.Object> imageAdFreezeConfig) {
            this.props.imageAdFreezeConfig(imageAdFreezeConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param imageAutoFreezeOpened This parameter is required.
         */
        public Builder imageAutoFreezeOpened(final java.lang.Boolean imageAutoFreezeOpened) {
            this.props.imageAutoFreezeOpened(imageAutoFreezeOpened);
            return this;
        }
        /**
         * @return {@code this}
         * @param imageAutoFreezeOpened This parameter is required.
         */
        public Builder imageAutoFreezeOpened(final com.aliyun.ros.cdk.core.IResolvable imageAutoFreezeOpened) {
            this.props.imageAutoFreezeOpened(imageAutoFreezeOpened);
            return this;
        }

        /**
         * @return {@code this}
         * @param imageLiveFreezeConfig This parameter is required.
         */
        public Builder imageLiveFreezeConfig(final com.aliyun.ros.cdk.core.IResolvable imageLiveFreezeConfig) {
            this.props.imageLiveFreezeConfig(imageLiveFreezeConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param imageLiveFreezeConfig This parameter is required.
         */
        public Builder imageLiveFreezeConfig(final java.util.Map<java.lang.String, ? extends java.lang.Object> imageLiveFreezeConfig) {
            this.props.imageLiveFreezeConfig(imageLiveFreezeConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param imageOpened This parameter is required.
         */
        public Builder imageOpened(final java.lang.Boolean imageOpened) {
            this.props.imageOpened(imageOpened);
            return this;
        }
        /**
         * @return {@code this}
         * @param imageOpened This parameter is required.
         */
        public Builder imageOpened(final com.aliyun.ros.cdk.core.IResolvable imageOpened) {
            this.props.imageOpened(imageOpened);
            return this;
        }

        /**
         * @return {@code this}
         * @param imagePornFreezeConfig This parameter is required.
         */
        public Builder imagePornFreezeConfig(final com.aliyun.ros.cdk.core.IResolvable imagePornFreezeConfig) {
            this.props.imagePornFreezeConfig(imagePornFreezeConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param imagePornFreezeConfig This parameter is required.
         */
        public Builder imagePornFreezeConfig(final java.util.Map<java.lang.String, ? extends java.lang.Object> imagePornFreezeConfig) {
            this.props.imagePornFreezeConfig(imagePornFreezeConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param imageScanLimit This parameter is required.
         */
        public Builder imageScanLimit(final java.lang.Number imageScanLimit) {
            this.props.imageScanLimit(imageScanLimit);
            return this;
        }
        /**
         * @return {@code this}
         * @param imageScanLimit This parameter is required.
         */
        public Builder imageScanLimit(final com.aliyun.ros.cdk.core.IResolvable imageScanLimit) {
            this.props.imageScanLimit(imageScanLimit);
            return this;
        }

        /**
         * @return {@code this}
         * @param imageScenes This parameter is required.
         */
        public Builder imageScenes(final com.aliyun.ros.cdk.core.IResolvable imageScenes) {
            this.props.imageScenes(imageScenes);
            return this;
        }
        /**
         * @return {@code this}
         * @param imageScenes This parameter is required.
         */
        public Builder imageScenes(final java.util.List<? extends java.lang.Object> imageScenes) {
            this.props.imageScenes(imageScenes);
            return this;
        }

        /**
         * @return {@code this}
         * @param imageTerrorismFreezeConfig This parameter is required.
         */
        public Builder imageTerrorismFreezeConfig(final com.aliyun.ros.cdk.core.IResolvable imageTerrorismFreezeConfig) {
            this.props.imageTerrorismFreezeConfig(imageTerrorismFreezeConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param imageTerrorismFreezeConfig This parameter is required.
         */
        public Builder imageTerrorismFreezeConfig(final java.util.Map<java.lang.String, ? extends java.lang.Object> imageTerrorismFreezeConfig) {
            this.props.imageTerrorismFreezeConfig(imageTerrorismFreezeConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param ossStockTaskName This parameter is required.
         */
        public Builder ossStockTaskName(final java.lang.String ossStockTaskName) {
            this.props.ossStockTaskName(ossStockTaskName);
            return this;
        }
        /**
         * @return {@code this}
         * @param ossStockTaskName This parameter is required.
         */
        public Builder ossStockTaskName(final com.aliyun.ros.cdk.core.IResolvable ossStockTaskName) {
            this.props.ossStockTaskName(ossStockTaskName);
            return this;
        }

        /**
         * @return {@code this}
         * @param scanImageNoFileType This parameter is required.
         */
        public Builder scanImageNoFileType(final java.lang.Boolean scanImageNoFileType) {
            this.props.scanImageNoFileType(scanImageNoFileType);
            return this;
        }
        /**
         * @return {@code this}
         * @param scanImageNoFileType This parameter is required.
         */
        public Builder scanImageNoFileType(final com.aliyun.ros.cdk.core.IResolvable scanImageNoFileType) {
            this.props.scanImageNoFileType(scanImageNoFileType);
            return this;
        }

        /**
         * @return {@code this}
         * @param videoAdFreezeConfig This parameter is required.
         */
        public Builder videoAdFreezeConfig(final com.aliyun.ros.cdk.core.IResolvable videoAdFreezeConfig) {
            this.props.videoAdFreezeConfig(videoAdFreezeConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param videoAdFreezeConfig This parameter is required.
         */
        public Builder videoAdFreezeConfig(final java.util.Map<java.lang.String, ? extends java.lang.Object> videoAdFreezeConfig) {
            this.props.videoAdFreezeConfig(videoAdFreezeConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param videoAutoFreezeOpened This parameter is required.
         */
        public Builder videoAutoFreezeOpened(final java.lang.Boolean videoAutoFreezeOpened) {
            this.props.videoAutoFreezeOpened(videoAutoFreezeOpened);
            return this;
        }
        /**
         * @return {@code this}
         * @param videoAutoFreezeOpened This parameter is required.
         */
        public Builder videoAutoFreezeOpened(final com.aliyun.ros.cdk.core.IResolvable videoAutoFreezeOpened) {
            this.props.videoAutoFreezeOpened(videoAutoFreezeOpened);
            return this;
        }

        /**
         * @return {@code this}
         * @param videoFrameInterval This parameter is required.
         */
        public Builder videoFrameInterval(final java.lang.Number videoFrameInterval) {
            this.props.videoFrameInterval(videoFrameInterval);
            return this;
        }
        /**
         * @return {@code this}
         * @param videoFrameInterval This parameter is required.
         */
        public Builder videoFrameInterval(final com.aliyun.ros.cdk.core.IResolvable videoFrameInterval) {
            this.props.videoFrameInterval(videoFrameInterval);
            return this;
        }

        /**
         * @return {@code this}
         * @param videoLiveFreezeConfig This parameter is required.
         */
        public Builder videoLiveFreezeConfig(final com.aliyun.ros.cdk.core.IResolvable videoLiveFreezeConfig) {
            this.props.videoLiveFreezeConfig(videoLiveFreezeConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param videoLiveFreezeConfig This parameter is required.
         */
        public Builder videoLiveFreezeConfig(final java.util.Map<java.lang.String, ? extends java.lang.Object> videoLiveFreezeConfig) {
            this.props.videoLiveFreezeConfig(videoLiveFreezeConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param videoMaxFrames This parameter is required.
         */
        public Builder videoMaxFrames(final java.lang.Number videoMaxFrames) {
            this.props.videoMaxFrames(videoMaxFrames);
            return this;
        }
        /**
         * @return {@code this}
         * @param videoMaxFrames This parameter is required.
         */
        public Builder videoMaxFrames(final com.aliyun.ros.cdk.core.IResolvable videoMaxFrames) {
            this.props.videoMaxFrames(videoMaxFrames);
            return this;
        }

        /**
         * @return {@code this}
         * @param videoMaxSize This parameter is required.
         */
        public Builder videoMaxSize(final java.lang.Number videoMaxSize) {
            this.props.videoMaxSize(videoMaxSize);
            return this;
        }
        /**
         * @return {@code this}
         * @param videoMaxSize This parameter is required.
         */
        public Builder videoMaxSize(final com.aliyun.ros.cdk.core.IResolvable videoMaxSize) {
            this.props.videoMaxSize(videoMaxSize);
            return this;
        }

        /**
         * @return {@code this}
         * @param videoOpened This parameter is required.
         */
        public Builder videoOpened(final java.lang.Boolean videoOpened) {
            this.props.videoOpened(videoOpened);
            return this;
        }
        /**
         * @return {@code this}
         * @param videoOpened This parameter is required.
         */
        public Builder videoOpened(final com.aliyun.ros.cdk.core.IResolvable videoOpened) {
            this.props.videoOpened(videoOpened);
            return this;
        }

        /**
         * @return {@code this}
         * @param videoPornFreezeConfig This parameter is required.
         */
        public Builder videoPornFreezeConfig(final com.aliyun.ros.cdk.core.IResolvable videoPornFreezeConfig) {
            this.props.videoPornFreezeConfig(videoPornFreezeConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param videoPornFreezeConfig This parameter is required.
         */
        public Builder videoPornFreezeConfig(final java.util.Map<java.lang.String, ? extends java.lang.Object> videoPornFreezeConfig) {
            this.props.videoPornFreezeConfig(videoPornFreezeConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param videoScanLimit This parameter is required.
         */
        public Builder videoScanLimit(final java.lang.Number videoScanLimit) {
            this.props.videoScanLimit(videoScanLimit);
            return this;
        }
        /**
         * @return {@code this}
         * @param videoScanLimit This parameter is required.
         */
        public Builder videoScanLimit(final com.aliyun.ros.cdk.core.IResolvable videoScanLimit) {
            this.props.videoScanLimit(videoScanLimit);
            return this;
        }

        /**
         * @return {@code this}
         * @param videoScenes This parameter is required.
         */
        public Builder videoScenes(final com.aliyun.ros.cdk.core.IResolvable videoScenes) {
            this.props.videoScenes(videoScenes);
            return this;
        }
        /**
         * @return {@code this}
         * @param videoScenes This parameter is required.
         */
        public Builder videoScenes(final java.util.List<? extends java.lang.Object> videoScenes) {
            this.props.videoScenes(videoScenes);
            return this;
        }

        /**
         * @return {@code this}
         * @param videoTerrorismFreezeConfig This parameter is required.
         */
        public Builder videoTerrorismFreezeConfig(final com.aliyun.ros.cdk.core.IResolvable videoTerrorismFreezeConfig) {
            this.props.videoTerrorismFreezeConfig(videoTerrorismFreezeConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param videoTerrorismFreezeConfig This parameter is required.
         */
        public Builder videoTerrorismFreezeConfig(final java.util.Map<java.lang.String, ? extends java.lang.Object> videoTerrorismFreezeConfig) {
            this.props.videoTerrorismFreezeConfig(videoTerrorismFreezeConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param videoVoiceAntispamFreezeConfig This parameter is required.
         */
        public Builder videoVoiceAntispamFreezeConfig(final com.aliyun.ros.cdk.core.IResolvable videoVoiceAntispamFreezeConfig) {
            this.props.videoVoiceAntispamFreezeConfig(videoVoiceAntispamFreezeConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param videoVoiceAntispamFreezeConfig This parameter is required.
         */
        public Builder videoVoiceAntispamFreezeConfig(final java.util.Map<java.lang.String, ? extends java.lang.Object> videoVoiceAntispamFreezeConfig) {
            this.props.videoVoiceAntispamFreezeConfig(videoVoiceAntispamFreezeConfig);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.aligreen.RosOssStockTask}.
         */
        @Override
        public com.aliyun.ros.cdk.aligreen.RosOssStockTask build() {
            return new com.aliyun.ros.cdk.aligreen.RosOssStockTask(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
