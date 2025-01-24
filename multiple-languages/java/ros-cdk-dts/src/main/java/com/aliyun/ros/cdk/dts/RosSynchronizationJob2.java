package com.aliyun.ros.cdk.dts;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::DTS::SynchronizationJob2</code>, which is used to configure a data synchronization task.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:37.339Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.RosSynchronizationJob2")
public class RosSynchronizationJob2 extends com.aliyun.ros.cdk.core.RosResource {

    protected RosSynchronizationJob2(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosSynchronizationJob2(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.dts.RosSynchronizationJob2.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosSynchronizationJob2(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.RosSynchronizationJob2Props props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDtsInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrDtsInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDtsJobId() {
        return software.amazon.jsii.Kernel.get(this, "attrDtsJobId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDtsJobName() {
        return software.amazon.jsii.Kernel.get(this, "attrDtsJobName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDataInitialization() {
        return software.amazon.jsii.Kernel.get(this, "dataInitialization", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDataInitialization(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "dataInitialization", java.util.Objects.requireNonNull(value, "dataInitialization is required"));
    }

    /**
     */
    public void setDataInitialization(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dataInitialization", java.util.Objects.requireNonNull(value, "dataInitialization is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDataSynchronization() {
        return software.amazon.jsii.Kernel.get(this, "dataSynchronization", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDataSynchronization(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "dataSynchronization", java.util.Objects.requireNonNull(value, "dataSynchronization is required"));
    }

    /**
     */
    public void setDataSynchronization(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dataSynchronization", java.util.Objects.requireNonNull(value, "dataSynchronization is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDbList() {
        return software.amazon.jsii.Kernel.get(this, "dbList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbList(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbList", java.util.Objects.requireNonNull(value, "dbList is required"));
    }

    /**
     */
    public void setDbList(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "dbList", java.util.Objects.requireNonNull(value, "dbList is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDestinationEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "destinationEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDestinationEndpoint(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "destinationEndpoint", java.util.Objects.requireNonNull(value, "destinationEndpoint is required"));
    }

    /**
     */
    public void setDestinationEndpoint(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.RosSynchronizationJob2.DestinationEndpointProperty value) {
        software.amazon.jsii.Kernel.set(this, "destinationEndpoint", java.util.Objects.requireNonNull(value, "destinationEndpoint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDtsJobName() {
        return software.amazon.jsii.Kernel.get(this, "dtsJobName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDtsJobName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dtsJobName", java.util.Objects.requireNonNull(value, "dtsJobName is required"));
    }

    /**
     */
    public void setDtsJobName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dtsJobName", java.util.Objects.requireNonNull(value, "dtsJobName is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSourceEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "sourceEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceEndpoint(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceEndpoint", java.util.Objects.requireNonNull(value, "sourceEndpoint is required"));
    }

    /**
     */
    public void setSourceEndpoint(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.RosSynchronizationJob2.SourceEndpointProperty value) {
        software.amazon.jsii.Kernel.set(this, "sourceEndpoint", java.util.Objects.requireNonNull(value, "sourceEndpoint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getStructureInitialization() {
        return software.amazon.jsii.Kernel.get(this, "structureInitialization", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStructureInitialization(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "structureInitialization", java.util.Objects.requireNonNull(value, "structureInitialization is required"));
    }

    /**
     */
    public void setStructureInitialization(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "structureInitialization", java.util.Objects.requireNonNull(value, "structureInitialization is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCheckpoint() {
        return software.amazon.jsii.Kernel.get(this, "checkpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCheckpoint(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "checkpoint", value);
    }

    /**
     */
    public void setCheckpoint(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "checkpoint", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDataCheckConfigure() {
        return software.amazon.jsii.Kernel.get(this, "dataCheckConfigure", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDataCheckConfigure(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dataCheckConfigure", value);
    }

    /**
     */
    public void setDataCheckConfigure(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.dts.RosSynchronizationJob2.DataCheckConfigureProperty value) {
        software.amazon.jsii.Kernel.set(this, "dataCheckConfigure", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDedicatedClusterId() {
        return software.amazon.jsii.Kernel.get(this, "dedicatedClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDedicatedClusterId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dedicatedClusterId", value);
    }

    /**
     */
    public void setDedicatedClusterId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dedicatedClusterId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDelayNotice() {
        return software.amazon.jsii.Kernel.get(this, "delayNotice", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDelayNotice(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "delayNotice", value);
    }

    /**
     */
    public void setDelayNotice(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "delayNotice", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDelayPhone() {
        return software.amazon.jsii.Kernel.get(this, "delayPhone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDelayPhone(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "delayPhone", value);
    }

    /**
     */
    public void setDelayPhone(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "delayPhone", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDelayRuleTime() {
        return software.amazon.jsii.Kernel.get(this, "delayRuleTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDelayRuleTime(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "delayRuleTime", value);
    }

    /**
     */
    public void setDelayRuleTime(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "delayRuleTime", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDisasterRecoveryJob() {
        return software.amazon.jsii.Kernel.get(this, "disasterRecoveryJob", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDisasterRecoveryJob(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "disasterRecoveryJob", value);
    }

    /**
     */
    public void setDisasterRecoveryJob(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "disasterRecoveryJob", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDtsBisLabel() {
        return software.amazon.jsii.Kernel.get(this, "dtsBisLabel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDtsBisLabel(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dtsBisLabel", value);
    }

    /**
     */
    public void setDtsBisLabel(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dtsBisLabel", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDtsInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "dtsInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDtsInstanceId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dtsInstanceId", value);
    }

    /**
     */
    public void setDtsInstanceId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dtsInstanceId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDtsJobId() {
        return software.amazon.jsii.Kernel.get(this, "dtsJobId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDtsJobId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dtsJobId", value);
    }

    /**
     */
    public void setDtsJobId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dtsJobId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getErrorNotice() {
        return software.amazon.jsii.Kernel.get(this, "errorNotice", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setErrorNotice(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "errorNotice", value);
    }

    /**
     */
    public void setErrorNotice(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "errorNotice", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getErrorPhone() {
        return software.amazon.jsii.Kernel.get(this, "errorPhone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setErrorPhone(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "errorPhone", value);
    }

    /**
     */
    public void setErrorPhone(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "errorPhone", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFileOssUrl() {
        return software.amazon.jsii.Kernel.get(this, "fileOssUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFileOssUrl(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "fileOssUrl", value);
    }

    /**
     */
    public void setFileOssUrl(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "fileOssUrl", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getReserve() {
        return software.amazon.jsii.Kernel.get(this, "reserve", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReserve(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "reserve", value);
    }

    /**
     */
    public void setReserve(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "reserve", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getStatus() {
        return software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStatus(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "status", value);
    }

    /**
     */
    public void setStatus(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "status", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSynchronizationDirection() {
        return software.amazon.jsii.Kernel.get(this, "synchronizationDirection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSynchronizationDirection(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "synchronizationDirection", value);
    }

    /**
     */
    public void setSynchronizationDirection(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "synchronizationDirection", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.RosSynchronizationJob2.DataCheckConfigureProperty")
    @software.amazon.jsii.Jsii.Proxy(DataCheckConfigureProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DataCheckConfigureProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCheckMaximumHour() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCheckMaximumHourEnable() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDataCheckDbList() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDataCheckNoticePhone() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFullCheckErrorNotice() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFullCheckFixData() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFullCheckMaxReadBps() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFullCheckMaxReadRps() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFullCheckModel() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFullCheckNoticeValue() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFullCheckRatio() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFullCheckReferEndpoint() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFullCheckValidFailNotice() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFullDataCheck() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIncrementalCheckDelayNotice() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIncrementalCheckDelayNoticePeriod() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIncrementalCheckDelayNoticeTimes() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIncrementalCheckDelayNoticeValue() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIncrementalCheckErrorNotice() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIncrementalCheckValidFailNotice() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIncrementalCheckValidFailNoticePeriod() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIncrementalCheckValidFailNoticeTimes() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIncrementalCheckValidFailNoticeValue() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIncrementalDataCheck() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DataCheckConfigureProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DataCheckConfigureProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DataCheckConfigureProperty> {
            java.lang.Object checkMaximumHour;
            java.lang.Object checkMaximumHourEnable;
            java.lang.Object dataCheckDbList;
            java.lang.Object dataCheckNoticePhone;
            java.lang.Object fullCheckErrorNotice;
            java.lang.Object fullCheckFixData;
            java.lang.Object fullCheckMaxReadBps;
            java.lang.Object fullCheckMaxReadRps;
            java.lang.Object fullCheckModel;
            java.lang.Object fullCheckNoticeValue;
            java.lang.Object fullCheckRatio;
            java.lang.Object fullCheckReferEndpoint;
            java.lang.Object fullCheckValidFailNotice;
            java.lang.Object fullDataCheck;
            java.lang.Object incrementalCheckDelayNotice;
            java.lang.Object incrementalCheckDelayNoticePeriod;
            java.lang.Object incrementalCheckDelayNoticeTimes;
            java.lang.Object incrementalCheckDelayNoticeValue;
            java.lang.Object incrementalCheckErrorNotice;
            java.lang.Object incrementalCheckValidFailNotice;
            java.lang.Object incrementalCheckValidFailNoticePeriod;
            java.lang.Object incrementalCheckValidFailNoticeTimes;
            java.lang.Object incrementalCheckValidFailNoticeValue;
            java.lang.Object incrementalDataCheck;

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getCheckMaximumHour}
             * @param checkMaximumHour the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder checkMaximumHour(java.lang.Number checkMaximumHour) {
                this.checkMaximumHour = checkMaximumHour;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getCheckMaximumHour}
             * @param checkMaximumHour the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder checkMaximumHour(com.aliyun.ros.cdk.core.IResolvable checkMaximumHour) {
                this.checkMaximumHour = checkMaximumHour;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getCheckMaximumHourEnable}
             * @param checkMaximumHourEnable the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder checkMaximumHourEnable(java.lang.Number checkMaximumHourEnable) {
                this.checkMaximumHourEnable = checkMaximumHourEnable;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getCheckMaximumHourEnable}
             * @param checkMaximumHourEnable the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder checkMaximumHourEnable(com.aliyun.ros.cdk.core.IResolvable checkMaximumHourEnable) {
                this.checkMaximumHourEnable = checkMaximumHourEnable;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getDataCheckDbList}
             * @param dataCheckDbList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dataCheckDbList(java.lang.String dataCheckDbList) {
                this.dataCheckDbList = dataCheckDbList;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getDataCheckDbList}
             * @param dataCheckDbList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dataCheckDbList(com.aliyun.ros.cdk.core.IResolvable dataCheckDbList) {
                this.dataCheckDbList = dataCheckDbList;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getDataCheckNoticePhone}
             * @param dataCheckNoticePhone the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dataCheckNoticePhone(java.lang.String dataCheckNoticePhone) {
                this.dataCheckNoticePhone = dataCheckNoticePhone;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getDataCheckNoticePhone}
             * @param dataCheckNoticePhone the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dataCheckNoticePhone(com.aliyun.ros.cdk.core.IResolvable dataCheckNoticePhone) {
                this.dataCheckNoticePhone = dataCheckNoticePhone;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getFullCheckErrorNotice}
             * @param fullCheckErrorNotice the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fullCheckErrorNotice(java.lang.Boolean fullCheckErrorNotice) {
                this.fullCheckErrorNotice = fullCheckErrorNotice;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getFullCheckErrorNotice}
             * @param fullCheckErrorNotice the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fullCheckErrorNotice(com.aliyun.ros.cdk.core.IResolvable fullCheckErrorNotice) {
                this.fullCheckErrorNotice = fullCheckErrorNotice;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getFullCheckFixData}
             * @param fullCheckFixData the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fullCheckFixData(java.lang.Boolean fullCheckFixData) {
                this.fullCheckFixData = fullCheckFixData;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getFullCheckFixData}
             * @param fullCheckFixData the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fullCheckFixData(com.aliyun.ros.cdk.core.IResolvable fullCheckFixData) {
                this.fullCheckFixData = fullCheckFixData;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getFullCheckMaxReadBps}
             * @param fullCheckMaxReadBps the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fullCheckMaxReadBps(java.lang.Number fullCheckMaxReadBps) {
                this.fullCheckMaxReadBps = fullCheckMaxReadBps;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getFullCheckMaxReadBps}
             * @param fullCheckMaxReadBps the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fullCheckMaxReadBps(com.aliyun.ros.cdk.core.IResolvable fullCheckMaxReadBps) {
                this.fullCheckMaxReadBps = fullCheckMaxReadBps;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getFullCheckMaxReadRps}
             * @param fullCheckMaxReadRps the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fullCheckMaxReadRps(java.lang.Number fullCheckMaxReadRps) {
                this.fullCheckMaxReadRps = fullCheckMaxReadRps;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getFullCheckMaxReadRps}
             * @param fullCheckMaxReadRps the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fullCheckMaxReadRps(com.aliyun.ros.cdk.core.IResolvable fullCheckMaxReadRps) {
                this.fullCheckMaxReadRps = fullCheckMaxReadRps;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getFullCheckModel}
             * @param fullCheckModel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fullCheckModel(java.lang.Number fullCheckModel) {
                this.fullCheckModel = fullCheckModel;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getFullCheckModel}
             * @param fullCheckModel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fullCheckModel(com.aliyun.ros.cdk.core.IResolvable fullCheckModel) {
                this.fullCheckModel = fullCheckModel;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getFullCheckNoticeValue}
             * @param fullCheckNoticeValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fullCheckNoticeValue(java.lang.Number fullCheckNoticeValue) {
                this.fullCheckNoticeValue = fullCheckNoticeValue;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getFullCheckNoticeValue}
             * @param fullCheckNoticeValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fullCheckNoticeValue(com.aliyun.ros.cdk.core.IResolvable fullCheckNoticeValue) {
                this.fullCheckNoticeValue = fullCheckNoticeValue;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getFullCheckRatio}
             * @param fullCheckRatio the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fullCheckRatio(java.lang.Number fullCheckRatio) {
                this.fullCheckRatio = fullCheckRatio;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getFullCheckRatio}
             * @param fullCheckRatio the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fullCheckRatio(com.aliyun.ros.cdk.core.IResolvable fullCheckRatio) {
                this.fullCheckRatio = fullCheckRatio;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getFullCheckReferEndpoint}
             * @param fullCheckReferEndpoint the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fullCheckReferEndpoint(java.lang.String fullCheckReferEndpoint) {
                this.fullCheckReferEndpoint = fullCheckReferEndpoint;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getFullCheckReferEndpoint}
             * @param fullCheckReferEndpoint the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fullCheckReferEndpoint(com.aliyun.ros.cdk.core.IResolvable fullCheckReferEndpoint) {
                this.fullCheckReferEndpoint = fullCheckReferEndpoint;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getFullCheckValidFailNotice}
             * @param fullCheckValidFailNotice the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fullCheckValidFailNotice(java.lang.Boolean fullCheckValidFailNotice) {
                this.fullCheckValidFailNotice = fullCheckValidFailNotice;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getFullCheckValidFailNotice}
             * @param fullCheckValidFailNotice the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fullCheckValidFailNotice(com.aliyun.ros.cdk.core.IResolvable fullCheckValidFailNotice) {
                this.fullCheckValidFailNotice = fullCheckValidFailNotice;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getFullDataCheck}
             * @param fullDataCheck the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fullDataCheck(java.lang.Boolean fullDataCheck) {
                this.fullDataCheck = fullDataCheck;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getFullDataCheck}
             * @param fullDataCheck the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fullDataCheck(com.aliyun.ros.cdk.core.IResolvable fullDataCheck) {
                this.fullDataCheck = fullDataCheck;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getIncrementalCheckDelayNotice}
             * @param incrementalCheckDelayNotice the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder incrementalCheckDelayNotice(java.lang.Boolean incrementalCheckDelayNotice) {
                this.incrementalCheckDelayNotice = incrementalCheckDelayNotice;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getIncrementalCheckDelayNotice}
             * @param incrementalCheckDelayNotice the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder incrementalCheckDelayNotice(com.aliyun.ros.cdk.core.IResolvable incrementalCheckDelayNotice) {
                this.incrementalCheckDelayNotice = incrementalCheckDelayNotice;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getIncrementalCheckDelayNoticePeriod}
             * @param incrementalCheckDelayNoticePeriod the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder incrementalCheckDelayNoticePeriod(java.lang.Number incrementalCheckDelayNoticePeriod) {
                this.incrementalCheckDelayNoticePeriod = incrementalCheckDelayNoticePeriod;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getIncrementalCheckDelayNoticePeriod}
             * @param incrementalCheckDelayNoticePeriod the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder incrementalCheckDelayNoticePeriod(com.aliyun.ros.cdk.core.IResolvable incrementalCheckDelayNoticePeriod) {
                this.incrementalCheckDelayNoticePeriod = incrementalCheckDelayNoticePeriod;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getIncrementalCheckDelayNoticeTimes}
             * @param incrementalCheckDelayNoticeTimes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder incrementalCheckDelayNoticeTimes(java.lang.Number incrementalCheckDelayNoticeTimes) {
                this.incrementalCheckDelayNoticeTimes = incrementalCheckDelayNoticeTimes;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getIncrementalCheckDelayNoticeTimes}
             * @param incrementalCheckDelayNoticeTimes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder incrementalCheckDelayNoticeTimes(com.aliyun.ros.cdk.core.IResolvable incrementalCheckDelayNoticeTimes) {
                this.incrementalCheckDelayNoticeTimes = incrementalCheckDelayNoticeTimes;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getIncrementalCheckDelayNoticeValue}
             * @param incrementalCheckDelayNoticeValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder incrementalCheckDelayNoticeValue(java.lang.Number incrementalCheckDelayNoticeValue) {
                this.incrementalCheckDelayNoticeValue = incrementalCheckDelayNoticeValue;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getIncrementalCheckDelayNoticeValue}
             * @param incrementalCheckDelayNoticeValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder incrementalCheckDelayNoticeValue(com.aliyun.ros.cdk.core.IResolvable incrementalCheckDelayNoticeValue) {
                this.incrementalCheckDelayNoticeValue = incrementalCheckDelayNoticeValue;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getIncrementalCheckErrorNotice}
             * @param incrementalCheckErrorNotice the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder incrementalCheckErrorNotice(java.lang.Boolean incrementalCheckErrorNotice) {
                this.incrementalCheckErrorNotice = incrementalCheckErrorNotice;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getIncrementalCheckErrorNotice}
             * @param incrementalCheckErrorNotice the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder incrementalCheckErrorNotice(com.aliyun.ros.cdk.core.IResolvable incrementalCheckErrorNotice) {
                this.incrementalCheckErrorNotice = incrementalCheckErrorNotice;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getIncrementalCheckValidFailNotice}
             * @param incrementalCheckValidFailNotice the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder incrementalCheckValidFailNotice(java.lang.Boolean incrementalCheckValidFailNotice) {
                this.incrementalCheckValidFailNotice = incrementalCheckValidFailNotice;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getIncrementalCheckValidFailNotice}
             * @param incrementalCheckValidFailNotice the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder incrementalCheckValidFailNotice(com.aliyun.ros.cdk.core.IResolvable incrementalCheckValidFailNotice) {
                this.incrementalCheckValidFailNotice = incrementalCheckValidFailNotice;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getIncrementalCheckValidFailNoticePeriod}
             * @param incrementalCheckValidFailNoticePeriod the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder incrementalCheckValidFailNoticePeriod(java.lang.Number incrementalCheckValidFailNoticePeriod) {
                this.incrementalCheckValidFailNoticePeriod = incrementalCheckValidFailNoticePeriod;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getIncrementalCheckValidFailNoticePeriod}
             * @param incrementalCheckValidFailNoticePeriod the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder incrementalCheckValidFailNoticePeriod(com.aliyun.ros.cdk.core.IResolvable incrementalCheckValidFailNoticePeriod) {
                this.incrementalCheckValidFailNoticePeriod = incrementalCheckValidFailNoticePeriod;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getIncrementalCheckValidFailNoticeTimes}
             * @param incrementalCheckValidFailNoticeTimes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder incrementalCheckValidFailNoticeTimes(java.lang.Number incrementalCheckValidFailNoticeTimes) {
                this.incrementalCheckValidFailNoticeTimes = incrementalCheckValidFailNoticeTimes;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getIncrementalCheckValidFailNoticeTimes}
             * @param incrementalCheckValidFailNoticeTimes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder incrementalCheckValidFailNoticeTimes(com.aliyun.ros.cdk.core.IResolvable incrementalCheckValidFailNoticeTimes) {
                this.incrementalCheckValidFailNoticeTimes = incrementalCheckValidFailNoticeTimes;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getIncrementalCheckValidFailNoticeValue}
             * @param incrementalCheckValidFailNoticeValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder incrementalCheckValidFailNoticeValue(java.lang.Number incrementalCheckValidFailNoticeValue) {
                this.incrementalCheckValidFailNoticeValue = incrementalCheckValidFailNoticeValue;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getIncrementalCheckValidFailNoticeValue}
             * @param incrementalCheckValidFailNoticeValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder incrementalCheckValidFailNoticeValue(com.aliyun.ros.cdk.core.IResolvable incrementalCheckValidFailNoticeValue) {
                this.incrementalCheckValidFailNoticeValue = incrementalCheckValidFailNoticeValue;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getIncrementalDataCheck}
             * @param incrementalDataCheck the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder incrementalDataCheck(java.lang.Boolean incrementalDataCheck) {
                this.incrementalDataCheck = incrementalDataCheck;
                return this;
            }

            /**
             * Sets the value of {@link DataCheckConfigureProperty#getIncrementalDataCheck}
             * @param incrementalDataCheck the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder incrementalDataCheck(com.aliyun.ros.cdk.core.IResolvable incrementalDataCheck) {
                this.incrementalDataCheck = incrementalDataCheck;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DataCheckConfigureProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DataCheckConfigureProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DataCheckConfigureProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DataCheckConfigureProperty {
            private final java.lang.Object checkMaximumHour;
            private final java.lang.Object checkMaximumHourEnable;
            private final java.lang.Object dataCheckDbList;
            private final java.lang.Object dataCheckNoticePhone;
            private final java.lang.Object fullCheckErrorNotice;
            private final java.lang.Object fullCheckFixData;
            private final java.lang.Object fullCheckMaxReadBps;
            private final java.lang.Object fullCheckMaxReadRps;
            private final java.lang.Object fullCheckModel;
            private final java.lang.Object fullCheckNoticeValue;
            private final java.lang.Object fullCheckRatio;
            private final java.lang.Object fullCheckReferEndpoint;
            private final java.lang.Object fullCheckValidFailNotice;
            private final java.lang.Object fullDataCheck;
            private final java.lang.Object incrementalCheckDelayNotice;
            private final java.lang.Object incrementalCheckDelayNoticePeriod;
            private final java.lang.Object incrementalCheckDelayNoticeTimes;
            private final java.lang.Object incrementalCheckDelayNoticeValue;
            private final java.lang.Object incrementalCheckErrorNotice;
            private final java.lang.Object incrementalCheckValidFailNotice;
            private final java.lang.Object incrementalCheckValidFailNoticePeriod;
            private final java.lang.Object incrementalCheckValidFailNoticeTimes;
            private final java.lang.Object incrementalCheckValidFailNoticeValue;
            private final java.lang.Object incrementalDataCheck;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.checkMaximumHour = software.amazon.jsii.Kernel.get(this, "checkMaximumHour", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.checkMaximumHourEnable = software.amazon.jsii.Kernel.get(this, "checkMaximumHourEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.dataCheckDbList = software.amazon.jsii.Kernel.get(this, "dataCheckDbList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.dataCheckNoticePhone = software.amazon.jsii.Kernel.get(this, "dataCheckNoticePhone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.fullCheckErrorNotice = software.amazon.jsii.Kernel.get(this, "fullCheckErrorNotice", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.fullCheckFixData = software.amazon.jsii.Kernel.get(this, "fullCheckFixData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.fullCheckMaxReadBps = software.amazon.jsii.Kernel.get(this, "fullCheckMaxReadBps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.fullCheckMaxReadRps = software.amazon.jsii.Kernel.get(this, "fullCheckMaxReadRps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.fullCheckModel = software.amazon.jsii.Kernel.get(this, "fullCheckModel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.fullCheckNoticeValue = software.amazon.jsii.Kernel.get(this, "fullCheckNoticeValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.fullCheckRatio = software.amazon.jsii.Kernel.get(this, "fullCheckRatio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.fullCheckReferEndpoint = software.amazon.jsii.Kernel.get(this, "fullCheckReferEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.fullCheckValidFailNotice = software.amazon.jsii.Kernel.get(this, "fullCheckValidFailNotice", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.fullDataCheck = software.amazon.jsii.Kernel.get(this, "fullDataCheck", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.incrementalCheckDelayNotice = software.amazon.jsii.Kernel.get(this, "incrementalCheckDelayNotice", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.incrementalCheckDelayNoticePeriod = software.amazon.jsii.Kernel.get(this, "incrementalCheckDelayNoticePeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.incrementalCheckDelayNoticeTimes = software.amazon.jsii.Kernel.get(this, "incrementalCheckDelayNoticeTimes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.incrementalCheckDelayNoticeValue = software.amazon.jsii.Kernel.get(this, "incrementalCheckDelayNoticeValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.incrementalCheckErrorNotice = software.amazon.jsii.Kernel.get(this, "incrementalCheckErrorNotice", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.incrementalCheckValidFailNotice = software.amazon.jsii.Kernel.get(this, "incrementalCheckValidFailNotice", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.incrementalCheckValidFailNoticePeriod = software.amazon.jsii.Kernel.get(this, "incrementalCheckValidFailNoticePeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.incrementalCheckValidFailNoticeTimes = software.amazon.jsii.Kernel.get(this, "incrementalCheckValidFailNoticeTimes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.incrementalCheckValidFailNoticeValue = software.amazon.jsii.Kernel.get(this, "incrementalCheckValidFailNoticeValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.incrementalDataCheck = software.amazon.jsii.Kernel.get(this, "incrementalDataCheck", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.checkMaximumHour = builder.checkMaximumHour;
                this.checkMaximumHourEnable = builder.checkMaximumHourEnable;
                this.dataCheckDbList = builder.dataCheckDbList;
                this.dataCheckNoticePhone = builder.dataCheckNoticePhone;
                this.fullCheckErrorNotice = builder.fullCheckErrorNotice;
                this.fullCheckFixData = builder.fullCheckFixData;
                this.fullCheckMaxReadBps = builder.fullCheckMaxReadBps;
                this.fullCheckMaxReadRps = builder.fullCheckMaxReadRps;
                this.fullCheckModel = builder.fullCheckModel;
                this.fullCheckNoticeValue = builder.fullCheckNoticeValue;
                this.fullCheckRatio = builder.fullCheckRatio;
                this.fullCheckReferEndpoint = builder.fullCheckReferEndpoint;
                this.fullCheckValidFailNotice = builder.fullCheckValidFailNotice;
                this.fullDataCheck = builder.fullDataCheck;
                this.incrementalCheckDelayNotice = builder.incrementalCheckDelayNotice;
                this.incrementalCheckDelayNoticePeriod = builder.incrementalCheckDelayNoticePeriod;
                this.incrementalCheckDelayNoticeTimes = builder.incrementalCheckDelayNoticeTimes;
                this.incrementalCheckDelayNoticeValue = builder.incrementalCheckDelayNoticeValue;
                this.incrementalCheckErrorNotice = builder.incrementalCheckErrorNotice;
                this.incrementalCheckValidFailNotice = builder.incrementalCheckValidFailNotice;
                this.incrementalCheckValidFailNoticePeriod = builder.incrementalCheckValidFailNoticePeriod;
                this.incrementalCheckValidFailNoticeTimes = builder.incrementalCheckValidFailNoticeTimes;
                this.incrementalCheckValidFailNoticeValue = builder.incrementalCheckValidFailNoticeValue;
                this.incrementalDataCheck = builder.incrementalDataCheck;
            }

            @Override
            public final java.lang.Object getCheckMaximumHour() {
                return this.checkMaximumHour;
            }

            @Override
            public final java.lang.Object getCheckMaximumHourEnable() {
                return this.checkMaximumHourEnable;
            }

            @Override
            public final java.lang.Object getDataCheckDbList() {
                return this.dataCheckDbList;
            }

            @Override
            public final java.lang.Object getDataCheckNoticePhone() {
                return this.dataCheckNoticePhone;
            }

            @Override
            public final java.lang.Object getFullCheckErrorNotice() {
                return this.fullCheckErrorNotice;
            }

            @Override
            public final java.lang.Object getFullCheckFixData() {
                return this.fullCheckFixData;
            }

            @Override
            public final java.lang.Object getFullCheckMaxReadBps() {
                return this.fullCheckMaxReadBps;
            }

            @Override
            public final java.lang.Object getFullCheckMaxReadRps() {
                return this.fullCheckMaxReadRps;
            }

            @Override
            public final java.lang.Object getFullCheckModel() {
                return this.fullCheckModel;
            }

            @Override
            public final java.lang.Object getFullCheckNoticeValue() {
                return this.fullCheckNoticeValue;
            }

            @Override
            public final java.lang.Object getFullCheckRatio() {
                return this.fullCheckRatio;
            }

            @Override
            public final java.lang.Object getFullCheckReferEndpoint() {
                return this.fullCheckReferEndpoint;
            }

            @Override
            public final java.lang.Object getFullCheckValidFailNotice() {
                return this.fullCheckValidFailNotice;
            }

            @Override
            public final java.lang.Object getFullDataCheck() {
                return this.fullDataCheck;
            }

            @Override
            public final java.lang.Object getIncrementalCheckDelayNotice() {
                return this.incrementalCheckDelayNotice;
            }

            @Override
            public final java.lang.Object getIncrementalCheckDelayNoticePeriod() {
                return this.incrementalCheckDelayNoticePeriod;
            }

            @Override
            public final java.lang.Object getIncrementalCheckDelayNoticeTimes() {
                return this.incrementalCheckDelayNoticeTimes;
            }

            @Override
            public final java.lang.Object getIncrementalCheckDelayNoticeValue() {
                return this.incrementalCheckDelayNoticeValue;
            }

            @Override
            public final java.lang.Object getIncrementalCheckErrorNotice() {
                return this.incrementalCheckErrorNotice;
            }

            @Override
            public final java.lang.Object getIncrementalCheckValidFailNotice() {
                return this.incrementalCheckValidFailNotice;
            }

            @Override
            public final java.lang.Object getIncrementalCheckValidFailNoticePeriod() {
                return this.incrementalCheckValidFailNoticePeriod;
            }

            @Override
            public final java.lang.Object getIncrementalCheckValidFailNoticeTimes() {
                return this.incrementalCheckValidFailNoticeTimes;
            }

            @Override
            public final java.lang.Object getIncrementalCheckValidFailNoticeValue() {
                return this.incrementalCheckValidFailNoticeValue;
            }

            @Override
            public final java.lang.Object getIncrementalDataCheck() {
                return this.incrementalDataCheck;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCheckMaximumHour() != null) {
                    data.set("checkMaximumHour", om.valueToTree(this.getCheckMaximumHour()));
                }
                if (this.getCheckMaximumHourEnable() != null) {
                    data.set("checkMaximumHourEnable", om.valueToTree(this.getCheckMaximumHourEnable()));
                }
                if (this.getDataCheckDbList() != null) {
                    data.set("dataCheckDbList", om.valueToTree(this.getDataCheckDbList()));
                }
                if (this.getDataCheckNoticePhone() != null) {
                    data.set("dataCheckNoticePhone", om.valueToTree(this.getDataCheckNoticePhone()));
                }
                if (this.getFullCheckErrorNotice() != null) {
                    data.set("fullCheckErrorNotice", om.valueToTree(this.getFullCheckErrorNotice()));
                }
                if (this.getFullCheckFixData() != null) {
                    data.set("fullCheckFixData", om.valueToTree(this.getFullCheckFixData()));
                }
                if (this.getFullCheckMaxReadBps() != null) {
                    data.set("fullCheckMaxReadBps", om.valueToTree(this.getFullCheckMaxReadBps()));
                }
                if (this.getFullCheckMaxReadRps() != null) {
                    data.set("fullCheckMaxReadRps", om.valueToTree(this.getFullCheckMaxReadRps()));
                }
                if (this.getFullCheckModel() != null) {
                    data.set("fullCheckModel", om.valueToTree(this.getFullCheckModel()));
                }
                if (this.getFullCheckNoticeValue() != null) {
                    data.set("fullCheckNoticeValue", om.valueToTree(this.getFullCheckNoticeValue()));
                }
                if (this.getFullCheckRatio() != null) {
                    data.set("fullCheckRatio", om.valueToTree(this.getFullCheckRatio()));
                }
                if (this.getFullCheckReferEndpoint() != null) {
                    data.set("fullCheckReferEndpoint", om.valueToTree(this.getFullCheckReferEndpoint()));
                }
                if (this.getFullCheckValidFailNotice() != null) {
                    data.set("fullCheckValidFailNotice", om.valueToTree(this.getFullCheckValidFailNotice()));
                }
                if (this.getFullDataCheck() != null) {
                    data.set("fullDataCheck", om.valueToTree(this.getFullDataCheck()));
                }
                if (this.getIncrementalCheckDelayNotice() != null) {
                    data.set("incrementalCheckDelayNotice", om.valueToTree(this.getIncrementalCheckDelayNotice()));
                }
                if (this.getIncrementalCheckDelayNoticePeriod() != null) {
                    data.set("incrementalCheckDelayNoticePeriod", om.valueToTree(this.getIncrementalCheckDelayNoticePeriod()));
                }
                if (this.getIncrementalCheckDelayNoticeTimes() != null) {
                    data.set("incrementalCheckDelayNoticeTimes", om.valueToTree(this.getIncrementalCheckDelayNoticeTimes()));
                }
                if (this.getIncrementalCheckDelayNoticeValue() != null) {
                    data.set("incrementalCheckDelayNoticeValue", om.valueToTree(this.getIncrementalCheckDelayNoticeValue()));
                }
                if (this.getIncrementalCheckErrorNotice() != null) {
                    data.set("incrementalCheckErrorNotice", om.valueToTree(this.getIncrementalCheckErrorNotice()));
                }
                if (this.getIncrementalCheckValidFailNotice() != null) {
                    data.set("incrementalCheckValidFailNotice", om.valueToTree(this.getIncrementalCheckValidFailNotice()));
                }
                if (this.getIncrementalCheckValidFailNoticePeriod() != null) {
                    data.set("incrementalCheckValidFailNoticePeriod", om.valueToTree(this.getIncrementalCheckValidFailNoticePeriod()));
                }
                if (this.getIncrementalCheckValidFailNoticeTimes() != null) {
                    data.set("incrementalCheckValidFailNoticeTimes", om.valueToTree(this.getIncrementalCheckValidFailNoticeTimes()));
                }
                if (this.getIncrementalCheckValidFailNoticeValue() != null) {
                    data.set("incrementalCheckValidFailNoticeValue", om.valueToTree(this.getIncrementalCheckValidFailNoticeValue()));
                }
                if (this.getIncrementalDataCheck() != null) {
                    data.set("incrementalDataCheck", om.valueToTree(this.getIncrementalDataCheck()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dts.RosSynchronizationJob2.DataCheckConfigureProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DataCheckConfigureProperty.Jsii$Proxy that = (DataCheckConfigureProperty.Jsii$Proxy) o;

                if (this.checkMaximumHour != null ? !this.checkMaximumHour.equals(that.checkMaximumHour) : that.checkMaximumHour != null) return false;
                if (this.checkMaximumHourEnable != null ? !this.checkMaximumHourEnable.equals(that.checkMaximumHourEnable) : that.checkMaximumHourEnable != null) return false;
                if (this.dataCheckDbList != null ? !this.dataCheckDbList.equals(that.dataCheckDbList) : that.dataCheckDbList != null) return false;
                if (this.dataCheckNoticePhone != null ? !this.dataCheckNoticePhone.equals(that.dataCheckNoticePhone) : that.dataCheckNoticePhone != null) return false;
                if (this.fullCheckErrorNotice != null ? !this.fullCheckErrorNotice.equals(that.fullCheckErrorNotice) : that.fullCheckErrorNotice != null) return false;
                if (this.fullCheckFixData != null ? !this.fullCheckFixData.equals(that.fullCheckFixData) : that.fullCheckFixData != null) return false;
                if (this.fullCheckMaxReadBps != null ? !this.fullCheckMaxReadBps.equals(that.fullCheckMaxReadBps) : that.fullCheckMaxReadBps != null) return false;
                if (this.fullCheckMaxReadRps != null ? !this.fullCheckMaxReadRps.equals(that.fullCheckMaxReadRps) : that.fullCheckMaxReadRps != null) return false;
                if (this.fullCheckModel != null ? !this.fullCheckModel.equals(that.fullCheckModel) : that.fullCheckModel != null) return false;
                if (this.fullCheckNoticeValue != null ? !this.fullCheckNoticeValue.equals(that.fullCheckNoticeValue) : that.fullCheckNoticeValue != null) return false;
                if (this.fullCheckRatio != null ? !this.fullCheckRatio.equals(that.fullCheckRatio) : that.fullCheckRatio != null) return false;
                if (this.fullCheckReferEndpoint != null ? !this.fullCheckReferEndpoint.equals(that.fullCheckReferEndpoint) : that.fullCheckReferEndpoint != null) return false;
                if (this.fullCheckValidFailNotice != null ? !this.fullCheckValidFailNotice.equals(that.fullCheckValidFailNotice) : that.fullCheckValidFailNotice != null) return false;
                if (this.fullDataCheck != null ? !this.fullDataCheck.equals(that.fullDataCheck) : that.fullDataCheck != null) return false;
                if (this.incrementalCheckDelayNotice != null ? !this.incrementalCheckDelayNotice.equals(that.incrementalCheckDelayNotice) : that.incrementalCheckDelayNotice != null) return false;
                if (this.incrementalCheckDelayNoticePeriod != null ? !this.incrementalCheckDelayNoticePeriod.equals(that.incrementalCheckDelayNoticePeriod) : that.incrementalCheckDelayNoticePeriod != null) return false;
                if (this.incrementalCheckDelayNoticeTimes != null ? !this.incrementalCheckDelayNoticeTimes.equals(that.incrementalCheckDelayNoticeTimes) : that.incrementalCheckDelayNoticeTimes != null) return false;
                if (this.incrementalCheckDelayNoticeValue != null ? !this.incrementalCheckDelayNoticeValue.equals(that.incrementalCheckDelayNoticeValue) : that.incrementalCheckDelayNoticeValue != null) return false;
                if (this.incrementalCheckErrorNotice != null ? !this.incrementalCheckErrorNotice.equals(that.incrementalCheckErrorNotice) : that.incrementalCheckErrorNotice != null) return false;
                if (this.incrementalCheckValidFailNotice != null ? !this.incrementalCheckValidFailNotice.equals(that.incrementalCheckValidFailNotice) : that.incrementalCheckValidFailNotice != null) return false;
                if (this.incrementalCheckValidFailNoticePeriod != null ? !this.incrementalCheckValidFailNoticePeriod.equals(that.incrementalCheckValidFailNoticePeriod) : that.incrementalCheckValidFailNoticePeriod != null) return false;
                if (this.incrementalCheckValidFailNoticeTimes != null ? !this.incrementalCheckValidFailNoticeTimes.equals(that.incrementalCheckValidFailNoticeTimes) : that.incrementalCheckValidFailNoticeTimes != null) return false;
                if (this.incrementalCheckValidFailNoticeValue != null ? !this.incrementalCheckValidFailNoticeValue.equals(that.incrementalCheckValidFailNoticeValue) : that.incrementalCheckValidFailNoticeValue != null) return false;
                return this.incrementalDataCheck != null ? this.incrementalDataCheck.equals(that.incrementalDataCheck) : that.incrementalDataCheck == null;
            }

            @Override
            public final int hashCode() {
                int result = this.checkMaximumHour != null ? this.checkMaximumHour.hashCode() : 0;
                result = 31 * result + (this.checkMaximumHourEnable != null ? this.checkMaximumHourEnable.hashCode() : 0);
                result = 31 * result + (this.dataCheckDbList != null ? this.dataCheckDbList.hashCode() : 0);
                result = 31 * result + (this.dataCheckNoticePhone != null ? this.dataCheckNoticePhone.hashCode() : 0);
                result = 31 * result + (this.fullCheckErrorNotice != null ? this.fullCheckErrorNotice.hashCode() : 0);
                result = 31 * result + (this.fullCheckFixData != null ? this.fullCheckFixData.hashCode() : 0);
                result = 31 * result + (this.fullCheckMaxReadBps != null ? this.fullCheckMaxReadBps.hashCode() : 0);
                result = 31 * result + (this.fullCheckMaxReadRps != null ? this.fullCheckMaxReadRps.hashCode() : 0);
                result = 31 * result + (this.fullCheckModel != null ? this.fullCheckModel.hashCode() : 0);
                result = 31 * result + (this.fullCheckNoticeValue != null ? this.fullCheckNoticeValue.hashCode() : 0);
                result = 31 * result + (this.fullCheckRatio != null ? this.fullCheckRatio.hashCode() : 0);
                result = 31 * result + (this.fullCheckReferEndpoint != null ? this.fullCheckReferEndpoint.hashCode() : 0);
                result = 31 * result + (this.fullCheckValidFailNotice != null ? this.fullCheckValidFailNotice.hashCode() : 0);
                result = 31 * result + (this.fullDataCheck != null ? this.fullDataCheck.hashCode() : 0);
                result = 31 * result + (this.incrementalCheckDelayNotice != null ? this.incrementalCheckDelayNotice.hashCode() : 0);
                result = 31 * result + (this.incrementalCheckDelayNoticePeriod != null ? this.incrementalCheckDelayNoticePeriod.hashCode() : 0);
                result = 31 * result + (this.incrementalCheckDelayNoticeTimes != null ? this.incrementalCheckDelayNoticeTimes.hashCode() : 0);
                result = 31 * result + (this.incrementalCheckDelayNoticeValue != null ? this.incrementalCheckDelayNoticeValue.hashCode() : 0);
                result = 31 * result + (this.incrementalCheckErrorNotice != null ? this.incrementalCheckErrorNotice.hashCode() : 0);
                result = 31 * result + (this.incrementalCheckValidFailNotice != null ? this.incrementalCheckValidFailNotice.hashCode() : 0);
                result = 31 * result + (this.incrementalCheckValidFailNoticePeriod != null ? this.incrementalCheckValidFailNoticePeriod.hashCode() : 0);
                result = 31 * result + (this.incrementalCheckValidFailNoticeTimes != null ? this.incrementalCheckValidFailNoticeTimes.hashCode() : 0);
                result = 31 * result + (this.incrementalCheckValidFailNoticeValue != null ? this.incrementalCheckValidFailNoticeValue.hashCode() : 0);
                result = 31 * result + (this.incrementalDataCheck != null ? this.incrementalDataCheck.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.RosSynchronizationJob2.DestinationEndpointProperty")
    @software.amazon.jsii.Jsii.Proxy(DestinationEndpointProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DestinationEndpointProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getInstanceType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDatabaseName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEngineName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIp() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOracleSid() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOwnerId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPassword() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRegion() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRole() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getUserName() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DestinationEndpointProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DestinationEndpointProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DestinationEndpointProperty> {
            java.lang.Object instanceType;
            java.lang.Object databaseName;
            java.lang.Object engineName;
            java.lang.Object instanceId;
            java.lang.Object ip;
            java.lang.Object oracleSid;
            java.lang.Object ownerId;
            java.lang.Object password;
            java.lang.Object port;
            java.lang.Object region;
            java.lang.Object role;
            java.lang.Object userName;

            /**
             * Sets the value of {@link DestinationEndpointProperty#getInstanceType}
             * @param instanceType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceType(java.lang.String instanceType) {
                this.instanceType = instanceType;
                return this;
            }

            /**
             * Sets the value of {@link DestinationEndpointProperty#getInstanceType}
             * @param instanceType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
                this.instanceType = instanceType;
                return this;
            }

            /**
             * Sets the value of {@link DestinationEndpointProperty#getDatabaseName}
             * @param databaseName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder databaseName(java.lang.String databaseName) {
                this.databaseName = databaseName;
                return this;
            }

            /**
             * Sets the value of {@link DestinationEndpointProperty#getDatabaseName}
             * @param databaseName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder databaseName(com.aliyun.ros.cdk.core.IResolvable databaseName) {
                this.databaseName = databaseName;
                return this;
            }

            /**
             * Sets the value of {@link DestinationEndpointProperty#getEngineName}
             * @param engineName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder engineName(java.lang.String engineName) {
                this.engineName = engineName;
                return this;
            }

            /**
             * Sets the value of {@link DestinationEndpointProperty#getEngineName}
             * @param engineName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder engineName(com.aliyun.ros.cdk.core.IResolvable engineName) {
                this.engineName = engineName;
                return this;
            }

            /**
             * Sets the value of {@link DestinationEndpointProperty#getInstanceId}
             * @param instanceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceId(java.lang.String instanceId) {
                this.instanceId = instanceId;
                return this;
            }

            /**
             * Sets the value of {@link DestinationEndpointProperty#getInstanceId}
             * @param instanceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
                this.instanceId = instanceId;
                return this;
            }

            /**
             * Sets the value of {@link DestinationEndpointProperty#getIp}
             * @param ip the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ip(java.lang.String ip) {
                this.ip = ip;
                return this;
            }

            /**
             * Sets the value of {@link DestinationEndpointProperty#getIp}
             * @param ip the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ip(com.aliyun.ros.cdk.core.IResolvable ip) {
                this.ip = ip;
                return this;
            }

            /**
             * Sets the value of {@link DestinationEndpointProperty#getOracleSid}
             * @param oracleSid the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder oracleSid(java.lang.String oracleSid) {
                this.oracleSid = oracleSid;
                return this;
            }

            /**
             * Sets the value of {@link DestinationEndpointProperty#getOracleSid}
             * @param oracleSid the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder oracleSid(com.aliyun.ros.cdk.core.IResolvable oracleSid) {
                this.oracleSid = oracleSid;
                return this;
            }

            /**
             * Sets the value of {@link DestinationEndpointProperty#getOwnerId}
             * @param ownerId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ownerId(java.lang.String ownerId) {
                this.ownerId = ownerId;
                return this;
            }

            /**
             * Sets the value of {@link DestinationEndpointProperty#getOwnerId}
             * @param ownerId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ownerId(com.aliyun.ros.cdk.core.IResolvable ownerId) {
                this.ownerId = ownerId;
                return this;
            }

            /**
             * Sets the value of {@link DestinationEndpointProperty#getPassword}
             * @param password the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder password(java.lang.String password) {
                this.password = password;
                return this;
            }

            /**
             * Sets the value of {@link DestinationEndpointProperty#getPassword}
             * @param password the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
                this.password = password;
                return this;
            }

            /**
             * Sets the value of {@link DestinationEndpointProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(java.lang.String port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link DestinationEndpointProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link DestinationEndpointProperty#getRegion}
             * @param region the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder region(java.lang.String region) {
                this.region = region;
                return this;
            }

            /**
             * Sets the value of {@link DestinationEndpointProperty#getRegion}
             * @param region the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder region(com.aliyun.ros.cdk.core.IResolvable region) {
                this.region = region;
                return this;
            }

            /**
             * Sets the value of {@link DestinationEndpointProperty#getRole}
             * @param role the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder role(java.lang.String role) {
                this.role = role;
                return this;
            }

            /**
             * Sets the value of {@link DestinationEndpointProperty#getRole}
             * @param role the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder role(com.aliyun.ros.cdk.core.IResolvable role) {
                this.role = role;
                return this;
            }

            /**
             * Sets the value of {@link DestinationEndpointProperty#getUserName}
             * @param userName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userName(java.lang.String userName) {
                this.userName = userName;
                return this;
            }

            /**
             * Sets the value of {@link DestinationEndpointProperty#getUserName}
             * @param userName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userName(com.aliyun.ros.cdk.core.IResolvable userName) {
                this.userName = userName;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DestinationEndpointProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DestinationEndpointProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DestinationEndpointProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DestinationEndpointProperty {
            private final java.lang.Object instanceType;
            private final java.lang.Object databaseName;
            private final java.lang.Object engineName;
            private final java.lang.Object instanceId;
            private final java.lang.Object ip;
            private final java.lang.Object oracleSid;
            private final java.lang.Object ownerId;
            private final java.lang.Object password;
            private final java.lang.Object port;
            private final java.lang.Object region;
            private final java.lang.Object role;
            private final java.lang.Object userName;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.databaseName = software.amazon.jsii.Kernel.get(this, "databaseName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.engineName = software.amazon.jsii.Kernel.get(this, "engineName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ip = software.amazon.jsii.Kernel.get(this, "ip", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.oracleSid = software.amazon.jsii.Kernel.get(this, "oracleSid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ownerId = software.amazon.jsii.Kernel.get(this, "ownerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.region = software.amazon.jsii.Kernel.get(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.role = software.amazon.jsii.Kernel.get(this, "role", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.userName = software.amazon.jsii.Kernel.get(this, "userName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.instanceType = java.util.Objects.requireNonNull(builder.instanceType, "instanceType is required");
                this.databaseName = builder.databaseName;
                this.engineName = builder.engineName;
                this.instanceId = builder.instanceId;
                this.ip = builder.ip;
                this.oracleSid = builder.oracleSid;
                this.ownerId = builder.ownerId;
                this.password = builder.password;
                this.port = builder.port;
                this.region = builder.region;
                this.role = builder.role;
                this.userName = builder.userName;
            }

            @Override
            public final java.lang.Object getInstanceType() {
                return this.instanceType;
            }

            @Override
            public final java.lang.Object getDatabaseName() {
                return this.databaseName;
            }

            @Override
            public final java.lang.Object getEngineName() {
                return this.engineName;
            }

            @Override
            public final java.lang.Object getInstanceId() {
                return this.instanceId;
            }

            @Override
            public final java.lang.Object getIp() {
                return this.ip;
            }

            @Override
            public final java.lang.Object getOracleSid() {
                return this.oracleSid;
            }

            @Override
            public final java.lang.Object getOwnerId() {
                return this.ownerId;
            }

            @Override
            public final java.lang.Object getPassword() {
                return this.password;
            }

            @Override
            public final java.lang.Object getPort() {
                return this.port;
            }

            @Override
            public final java.lang.Object getRegion() {
                return this.region;
            }

            @Override
            public final java.lang.Object getRole() {
                return this.role;
            }

            @Override
            public final java.lang.Object getUserName() {
                return this.userName;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("instanceType", om.valueToTree(this.getInstanceType()));
                if (this.getDatabaseName() != null) {
                    data.set("databaseName", om.valueToTree(this.getDatabaseName()));
                }
                if (this.getEngineName() != null) {
                    data.set("engineName", om.valueToTree(this.getEngineName()));
                }
                if (this.getInstanceId() != null) {
                    data.set("instanceId", om.valueToTree(this.getInstanceId()));
                }
                if (this.getIp() != null) {
                    data.set("ip", om.valueToTree(this.getIp()));
                }
                if (this.getOracleSid() != null) {
                    data.set("oracleSid", om.valueToTree(this.getOracleSid()));
                }
                if (this.getOwnerId() != null) {
                    data.set("ownerId", om.valueToTree(this.getOwnerId()));
                }
                if (this.getPassword() != null) {
                    data.set("password", om.valueToTree(this.getPassword()));
                }
                if (this.getPort() != null) {
                    data.set("port", om.valueToTree(this.getPort()));
                }
                if (this.getRegion() != null) {
                    data.set("region", om.valueToTree(this.getRegion()));
                }
                if (this.getRole() != null) {
                    data.set("role", om.valueToTree(this.getRole()));
                }
                if (this.getUserName() != null) {
                    data.set("userName", om.valueToTree(this.getUserName()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dts.RosSynchronizationJob2.DestinationEndpointProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DestinationEndpointProperty.Jsii$Proxy that = (DestinationEndpointProperty.Jsii$Proxy) o;

                if (!instanceType.equals(that.instanceType)) return false;
                if (this.databaseName != null ? !this.databaseName.equals(that.databaseName) : that.databaseName != null) return false;
                if (this.engineName != null ? !this.engineName.equals(that.engineName) : that.engineName != null) return false;
                if (this.instanceId != null ? !this.instanceId.equals(that.instanceId) : that.instanceId != null) return false;
                if (this.ip != null ? !this.ip.equals(that.ip) : that.ip != null) return false;
                if (this.oracleSid != null ? !this.oracleSid.equals(that.oracleSid) : that.oracleSid != null) return false;
                if (this.ownerId != null ? !this.ownerId.equals(that.ownerId) : that.ownerId != null) return false;
                if (this.password != null ? !this.password.equals(that.password) : that.password != null) return false;
                if (this.port != null ? !this.port.equals(that.port) : that.port != null) return false;
                if (this.region != null ? !this.region.equals(that.region) : that.region != null) return false;
                if (this.role != null ? !this.role.equals(that.role) : that.role != null) return false;
                return this.userName != null ? this.userName.equals(that.userName) : that.userName == null;
            }

            @Override
            public final int hashCode() {
                int result = this.instanceType.hashCode();
                result = 31 * result + (this.databaseName != null ? this.databaseName.hashCode() : 0);
                result = 31 * result + (this.engineName != null ? this.engineName.hashCode() : 0);
                result = 31 * result + (this.instanceId != null ? this.instanceId.hashCode() : 0);
                result = 31 * result + (this.ip != null ? this.ip.hashCode() : 0);
                result = 31 * result + (this.oracleSid != null ? this.oracleSid.hashCode() : 0);
                result = 31 * result + (this.ownerId != null ? this.ownerId.hashCode() : 0);
                result = 31 * result + (this.password != null ? this.password.hashCode() : 0);
                result = 31 * result + (this.port != null ? this.port.hashCode() : 0);
                result = 31 * result + (this.region != null ? this.region.hashCode() : 0);
                result = 31 * result + (this.role != null ? this.role.hashCode() : 0);
                result = 31 * result + (this.userName != null ? this.userName.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.RosSynchronizationJob2.SourceEndpointProperty")
    @software.amazon.jsii.Jsii.Proxy(SourceEndpointProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SourceEndpointProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getInstanceType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDatabaseName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEngineName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIp() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOracleSid() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOwnerId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPassword() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRegion() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRole() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getUserName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SourceEndpointProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SourceEndpointProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SourceEndpointProperty> {
            java.lang.Object instanceType;
            java.lang.Object databaseName;
            java.lang.Object engineName;
            java.lang.Object instanceId;
            java.lang.Object ip;
            java.lang.Object oracleSid;
            java.lang.Object ownerId;
            java.lang.Object password;
            java.lang.Object port;
            java.lang.Object region;
            java.lang.Object role;
            java.lang.Object userName;
            java.lang.Object vSwitchId;

            /**
             * Sets the value of {@link SourceEndpointProperty#getInstanceType}
             * @param instanceType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceType(java.lang.String instanceType) {
                this.instanceType = instanceType;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getInstanceType}
             * @param instanceType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
                this.instanceType = instanceType;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getDatabaseName}
             * @param databaseName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder databaseName(java.lang.String databaseName) {
                this.databaseName = databaseName;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getDatabaseName}
             * @param databaseName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder databaseName(com.aliyun.ros.cdk.core.IResolvable databaseName) {
                this.databaseName = databaseName;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getEngineName}
             * @param engineName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder engineName(java.lang.String engineName) {
                this.engineName = engineName;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getEngineName}
             * @param engineName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder engineName(com.aliyun.ros.cdk.core.IResolvable engineName) {
                this.engineName = engineName;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getInstanceId}
             * @param instanceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceId(java.lang.String instanceId) {
                this.instanceId = instanceId;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getInstanceId}
             * @param instanceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
                this.instanceId = instanceId;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getIp}
             * @param ip the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ip(java.lang.String ip) {
                this.ip = ip;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getIp}
             * @param ip the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ip(com.aliyun.ros.cdk.core.IResolvable ip) {
                this.ip = ip;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getOracleSid}
             * @param oracleSid the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder oracleSid(java.lang.String oracleSid) {
                this.oracleSid = oracleSid;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getOracleSid}
             * @param oracleSid the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder oracleSid(com.aliyun.ros.cdk.core.IResolvable oracleSid) {
                this.oracleSid = oracleSid;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getOwnerId}
             * @param ownerId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ownerId(java.lang.String ownerId) {
                this.ownerId = ownerId;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getOwnerId}
             * @param ownerId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ownerId(com.aliyun.ros.cdk.core.IResolvable ownerId) {
                this.ownerId = ownerId;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getPassword}
             * @param password the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder password(java.lang.String password) {
                this.password = password;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getPassword}
             * @param password the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
                this.password = password;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(java.lang.String port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getRegion}
             * @param region the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder region(java.lang.String region) {
                this.region = region;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getRegion}
             * @param region the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder region(com.aliyun.ros.cdk.core.IResolvable region) {
                this.region = region;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getRole}
             * @param role the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder role(java.lang.String role) {
                this.role = role;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getRole}
             * @param role the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder role(com.aliyun.ros.cdk.core.IResolvable role) {
                this.role = role;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getUserName}
             * @param userName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userName(java.lang.String userName) {
                this.userName = userName;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getUserName}
             * @param userName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userName(com.aliyun.ros.cdk.core.IResolvable userName) {
                this.userName = userName;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getVSwitchId}
             * @param vSwitchId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchId(java.lang.String vSwitchId) {
                this.vSwitchId = vSwitchId;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getVSwitchId}
             * @param vSwitchId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
                this.vSwitchId = vSwitchId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SourceEndpointProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SourceEndpointProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SourceEndpointProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SourceEndpointProperty {
            private final java.lang.Object instanceType;
            private final java.lang.Object databaseName;
            private final java.lang.Object engineName;
            private final java.lang.Object instanceId;
            private final java.lang.Object ip;
            private final java.lang.Object oracleSid;
            private final java.lang.Object ownerId;
            private final java.lang.Object password;
            private final java.lang.Object port;
            private final java.lang.Object region;
            private final java.lang.Object role;
            private final java.lang.Object userName;
            private final java.lang.Object vSwitchId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.databaseName = software.amazon.jsii.Kernel.get(this, "databaseName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.engineName = software.amazon.jsii.Kernel.get(this, "engineName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ip = software.amazon.jsii.Kernel.get(this, "ip", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.oracleSid = software.amazon.jsii.Kernel.get(this, "oracleSid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ownerId = software.amazon.jsii.Kernel.get(this, "ownerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.region = software.amazon.jsii.Kernel.get(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.role = software.amazon.jsii.Kernel.get(this, "role", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.userName = software.amazon.jsii.Kernel.get(this, "userName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.instanceType = java.util.Objects.requireNonNull(builder.instanceType, "instanceType is required");
                this.databaseName = builder.databaseName;
                this.engineName = builder.engineName;
                this.instanceId = builder.instanceId;
                this.ip = builder.ip;
                this.oracleSid = builder.oracleSid;
                this.ownerId = builder.ownerId;
                this.password = builder.password;
                this.port = builder.port;
                this.region = builder.region;
                this.role = builder.role;
                this.userName = builder.userName;
                this.vSwitchId = builder.vSwitchId;
            }

            @Override
            public final java.lang.Object getInstanceType() {
                return this.instanceType;
            }

            @Override
            public final java.lang.Object getDatabaseName() {
                return this.databaseName;
            }

            @Override
            public final java.lang.Object getEngineName() {
                return this.engineName;
            }

            @Override
            public final java.lang.Object getInstanceId() {
                return this.instanceId;
            }

            @Override
            public final java.lang.Object getIp() {
                return this.ip;
            }

            @Override
            public final java.lang.Object getOracleSid() {
                return this.oracleSid;
            }

            @Override
            public final java.lang.Object getOwnerId() {
                return this.ownerId;
            }

            @Override
            public final java.lang.Object getPassword() {
                return this.password;
            }

            @Override
            public final java.lang.Object getPort() {
                return this.port;
            }

            @Override
            public final java.lang.Object getRegion() {
                return this.region;
            }

            @Override
            public final java.lang.Object getRole() {
                return this.role;
            }

            @Override
            public final java.lang.Object getUserName() {
                return this.userName;
            }

            @Override
            public final java.lang.Object getVSwitchId() {
                return this.vSwitchId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("instanceType", om.valueToTree(this.getInstanceType()));
                if (this.getDatabaseName() != null) {
                    data.set("databaseName", om.valueToTree(this.getDatabaseName()));
                }
                if (this.getEngineName() != null) {
                    data.set("engineName", om.valueToTree(this.getEngineName()));
                }
                if (this.getInstanceId() != null) {
                    data.set("instanceId", om.valueToTree(this.getInstanceId()));
                }
                if (this.getIp() != null) {
                    data.set("ip", om.valueToTree(this.getIp()));
                }
                if (this.getOracleSid() != null) {
                    data.set("oracleSid", om.valueToTree(this.getOracleSid()));
                }
                if (this.getOwnerId() != null) {
                    data.set("ownerId", om.valueToTree(this.getOwnerId()));
                }
                if (this.getPassword() != null) {
                    data.set("password", om.valueToTree(this.getPassword()));
                }
                if (this.getPort() != null) {
                    data.set("port", om.valueToTree(this.getPort()));
                }
                if (this.getRegion() != null) {
                    data.set("region", om.valueToTree(this.getRegion()));
                }
                if (this.getRole() != null) {
                    data.set("role", om.valueToTree(this.getRole()));
                }
                if (this.getUserName() != null) {
                    data.set("userName", om.valueToTree(this.getUserName()));
                }
                if (this.getVSwitchId() != null) {
                    data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dts.RosSynchronizationJob2.SourceEndpointProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SourceEndpointProperty.Jsii$Proxy that = (SourceEndpointProperty.Jsii$Proxy) o;

                if (!instanceType.equals(that.instanceType)) return false;
                if (this.databaseName != null ? !this.databaseName.equals(that.databaseName) : that.databaseName != null) return false;
                if (this.engineName != null ? !this.engineName.equals(that.engineName) : that.engineName != null) return false;
                if (this.instanceId != null ? !this.instanceId.equals(that.instanceId) : that.instanceId != null) return false;
                if (this.ip != null ? !this.ip.equals(that.ip) : that.ip != null) return false;
                if (this.oracleSid != null ? !this.oracleSid.equals(that.oracleSid) : that.oracleSid != null) return false;
                if (this.ownerId != null ? !this.ownerId.equals(that.ownerId) : that.ownerId != null) return false;
                if (this.password != null ? !this.password.equals(that.password) : that.password != null) return false;
                if (this.port != null ? !this.port.equals(that.port) : that.port != null) return false;
                if (this.region != null ? !this.region.equals(that.region) : that.region != null) return false;
                if (this.role != null ? !this.role.equals(that.role) : that.role != null) return false;
                if (this.userName != null ? !this.userName.equals(that.userName) : that.userName != null) return false;
                return this.vSwitchId != null ? this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.instanceType.hashCode();
                result = 31 * result + (this.databaseName != null ? this.databaseName.hashCode() : 0);
                result = 31 * result + (this.engineName != null ? this.engineName.hashCode() : 0);
                result = 31 * result + (this.instanceId != null ? this.instanceId.hashCode() : 0);
                result = 31 * result + (this.ip != null ? this.ip.hashCode() : 0);
                result = 31 * result + (this.oracleSid != null ? this.oracleSid.hashCode() : 0);
                result = 31 * result + (this.ownerId != null ? this.ownerId.hashCode() : 0);
                result = 31 * result + (this.password != null ? this.password.hashCode() : 0);
                result = 31 * result + (this.port != null ? this.port.hashCode() : 0);
                result = 31 * result + (this.region != null ? this.region.hashCode() : 0);
                result = 31 * result + (this.role != null ? this.role.hashCode() : 0);
                result = 31 * result + (this.userName != null ? this.userName.hashCode() : 0);
                result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dts.RosSynchronizationJob2}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dts.RosSynchronizationJob2> {
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
        private final com.aliyun.ros.cdk.dts.RosSynchronizationJob2Props.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dts.RosSynchronizationJob2Props.Builder();
        }

        /**
         * @return {@code this}
         * @param dataInitialization This parameter is required.
         */
        public Builder dataInitialization(final java.lang.Boolean dataInitialization) {
            this.props.dataInitialization(dataInitialization);
            return this;
        }
        /**
         * @return {@code this}
         * @param dataInitialization This parameter is required.
         */
        public Builder dataInitialization(final com.aliyun.ros.cdk.core.IResolvable dataInitialization) {
            this.props.dataInitialization(dataInitialization);
            return this;
        }

        /**
         * @return {@code this}
         * @param dataSynchronization This parameter is required.
         */
        public Builder dataSynchronization(final java.lang.Boolean dataSynchronization) {
            this.props.dataSynchronization(dataSynchronization);
            return this;
        }
        /**
         * @return {@code this}
         * @param dataSynchronization This parameter is required.
         */
        public Builder dataSynchronization(final com.aliyun.ros.cdk.core.IResolvable dataSynchronization) {
            this.props.dataSynchronization(dataSynchronization);
            return this;
        }

        /**
         * @return {@code this}
         * @param dbList This parameter is required.
         */
        public Builder dbList(final com.aliyun.ros.cdk.core.IResolvable dbList) {
            this.props.dbList(dbList);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbList This parameter is required.
         */
        public Builder dbList(final java.util.Map<java.lang.String, ? extends java.lang.Object> dbList) {
            this.props.dbList(dbList);
            return this;
        }

        /**
         * @return {@code this}
         * @param destinationEndpoint This parameter is required.
         */
        public Builder destinationEndpoint(final com.aliyun.ros.cdk.core.IResolvable destinationEndpoint) {
            this.props.destinationEndpoint(destinationEndpoint);
            return this;
        }
        /**
         * @return {@code this}
         * @param destinationEndpoint This parameter is required.
         */
        public Builder destinationEndpoint(final com.aliyun.ros.cdk.dts.RosSynchronizationJob2.DestinationEndpointProperty destinationEndpoint) {
            this.props.destinationEndpoint(destinationEndpoint);
            return this;
        }

        /**
         * @return {@code this}
         * @param dtsJobName This parameter is required.
         */
        public Builder dtsJobName(final java.lang.String dtsJobName) {
            this.props.dtsJobName(dtsJobName);
            return this;
        }
        /**
         * @return {@code this}
         * @param dtsJobName This parameter is required.
         */
        public Builder dtsJobName(final com.aliyun.ros.cdk.core.IResolvable dtsJobName) {
            this.props.dtsJobName(dtsJobName);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceEndpoint This parameter is required.
         */
        public Builder sourceEndpoint(final com.aliyun.ros.cdk.core.IResolvable sourceEndpoint) {
            this.props.sourceEndpoint(sourceEndpoint);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceEndpoint This parameter is required.
         */
        public Builder sourceEndpoint(final com.aliyun.ros.cdk.dts.RosSynchronizationJob2.SourceEndpointProperty sourceEndpoint) {
            this.props.sourceEndpoint(sourceEndpoint);
            return this;
        }

        /**
         * @return {@code this}
         * @param structureInitialization This parameter is required.
         */
        public Builder structureInitialization(final java.lang.Boolean structureInitialization) {
            this.props.structureInitialization(structureInitialization);
            return this;
        }
        /**
         * @return {@code this}
         * @param structureInitialization This parameter is required.
         */
        public Builder structureInitialization(final com.aliyun.ros.cdk.core.IResolvable structureInitialization) {
            this.props.structureInitialization(structureInitialization);
            return this;
        }

        /**
         * @return {@code this}
         * @param checkpoint This parameter is required.
         */
        public Builder checkpoint(final java.lang.String checkpoint) {
            this.props.checkpoint(checkpoint);
            return this;
        }
        /**
         * @return {@code this}
         * @param checkpoint This parameter is required.
         */
        public Builder checkpoint(final com.aliyun.ros.cdk.core.IResolvable checkpoint) {
            this.props.checkpoint(checkpoint);
            return this;
        }

        /**
         * @return {@code this}
         * @param dataCheckConfigure This parameter is required.
         */
        public Builder dataCheckConfigure(final com.aliyun.ros.cdk.core.IResolvable dataCheckConfigure) {
            this.props.dataCheckConfigure(dataCheckConfigure);
            return this;
        }
        /**
         * @return {@code this}
         * @param dataCheckConfigure This parameter is required.
         */
        public Builder dataCheckConfigure(final com.aliyun.ros.cdk.dts.RosSynchronizationJob2.DataCheckConfigureProperty dataCheckConfigure) {
            this.props.dataCheckConfigure(dataCheckConfigure);
            return this;
        }

        /**
         * @return {@code this}
         * @param dedicatedClusterId This parameter is required.
         */
        public Builder dedicatedClusterId(final java.lang.String dedicatedClusterId) {
            this.props.dedicatedClusterId(dedicatedClusterId);
            return this;
        }
        /**
         * @return {@code this}
         * @param dedicatedClusterId This parameter is required.
         */
        public Builder dedicatedClusterId(final com.aliyun.ros.cdk.core.IResolvable dedicatedClusterId) {
            this.props.dedicatedClusterId(dedicatedClusterId);
            return this;
        }

        /**
         * @return {@code this}
         * @param delayNotice This parameter is required.
         */
        public Builder delayNotice(final java.lang.Boolean delayNotice) {
            this.props.delayNotice(delayNotice);
            return this;
        }
        /**
         * @return {@code this}
         * @param delayNotice This parameter is required.
         */
        public Builder delayNotice(final com.aliyun.ros.cdk.core.IResolvable delayNotice) {
            this.props.delayNotice(delayNotice);
            return this;
        }

        /**
         * @return {@code this}
         * @param delayPhone This parameter is required.
         */
        public Builder delayPhone(final java.lang.String delayPhone) {
            this.props.delayPhone(delayPhone);
            return this;
        }
        /**
         * @return {@code this}
         * @param delayPhone This parameter is required.
         */
        public Builder delayPhone(final com.aliyun.ros.cdk.core.IResolvable delayPhone) {
            this.props.delayPhone(delayPhone);
            return this;
        }

        /**
         * @return {@code this}
         * @param delayRuleTime This parameter is required.
         */
        public Builder delayRuleTime(final java.lang.Number delayRuleTime) {
            this.props.delayRuleTime(delayRuleTime);
            return this;
        }
        /**
         * @return {@code this}
         * @param delayRuleTime This parameter is required.
         */
        public Builder delayRuleTime(final com.aliyun.ros.cdk.core.IResolvable delayRuleTime) {
            this.props.delayRuleTime(delayRuleTime);
            return this;
        }

        /**
         * @return {@code this}
         * @param disasterRecoveryJob This parameter is required.
         */
        public Builder disasterRecoveryJob(final java.lang.Boolean disasterRecoveryJob) {
            this.props.disasterRecoveryJob(disasterRecoveryJob);
            return this;
        }
        /**
         * @return {@code this}
         * @param disasterRecoveryJob This parameter is required.
         */
        public Builder disasterRecoveryJob(final com.aliyun.ros.cdk.core.IResolvable disasterRecoveryJob) {
            this.props.disasterRecoveryJob(disasterRecoveryJob);
            return this;
        }

        /**
         * @return {@code this}
         * @param dtsBisLabel This parameter is required.
         */
        public Builder dtsBisLabel(final java.lang.String dtsBisLabel) {
            this.props.dtsBisLabel(dtsBisLabel);
            return this;
        }
        /**
         * @return {@code this}
         * @param dtsBisLabel This parameter is required.
         */
        public Builder dtsBisLabel(final com.aliyun.ros.cdk.core.IResolvable dtsBisLabel) {
            this.props.dtsBisLabel(dtsBisLabel);
            return this;
        }

        /**
         * @return {@code this}
         * @param dtsInstanceId This parameter is required.
         */
        public Builder dtsInstanceId(final java.lang.String dtsInstanceId) {
            this.props.dtsInstanceId(dtsInstanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param dtsInstanceId This parameter is required.
         */
        public Builder dtsInstanceId(final com.aliyun.ros.cdk.core.IResolvable dtsInstanceId) {
            this.props.dtsInstanceId(dtsInstanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param dtsJobId This parameter is required.
         */
        public Builder dtsJobId(final java.lang.String dtsJobId) {
            this.props.dtsJobId(dtsJobId);
            return this;
        }
        /**
         * @return {@code this}
         * @param dtsJobId This parameter is required.
         */
        public Builder dtsJobId(final com.aliyun.ros.cdk.core.IResolvable dtsJobId) {
            this.props.dtsJobId(dtsJobId);
            return this;
        }

        /**
         * @return {@code this}
         * @param errorNotice This parameter is required.
         */
        public Builder errorNotice(final java.lang.Boolean errorNotice) {
            this.props.errorNotice(errorNotice);
            return this;
        }
        /**
         * @return {@code this}
         * @param errorNotice This parameter is required.
         */
        public Builder errorNotice(final com.aliyun.ros.cdk.core.IResolvable errorNotice) {
            this.props.errorNotice(errorNotice);
            return this;
        }

        /**
         * @return {@code this}
         * @param errorPhone This parameter is required.
         */
        public Builder errorPhone(final java.lang.String errorPhone) {
            this.props.errorPhone(errorPhone);
            return this;
        }
        /**
         * @return {@code this}
         * @param errorPhone This parameter is required.
         */
        public Builder errorPhone(final com.aliyun.ros.cdk.core.IResolvable errorPhone) {
            this.props.errorPhone(errorPhone);
            return this;
        }

        /**
         * @return {@code this}
         * @param fileOssUrl This parameter is required.
         */
        public Builder fileOssUrl(final java.lang.String fileOssUrl) {
            this.props.fileOssUrl(fileOssUrl);
            return this;
        }
        /**
         * @return {@code this}
         * @param fileOssUrl This parameter is required.
         */
        public Builder fileOssUrl(final com.aliyun.ros.cdk.core.IResolvable fileOssUrl) {
            this.props.fileOssUrl(fileOssUrl);
            return this;
        }

        /**
         * @return {@code this}
         * @param reserve This parameter is required.
         */
        public Builder reserve(final com.aliyun.ros.cdk.core.IResolvable reserve) {
            this.props.reserve(reserve);
            return this;
        }
        /**
         * @return {@code this}
         * @param reserve This parameter is required.
         */
        public Builder reserve(final java.util.Map<java.lang.String, ? extends java.lang.Object> reserve) {
            this.props.reserve(reserve);
            return this;
        }

        /**
         * @return {@code this}
         * @param status This parameter is required.
         */
        public Builder status(final java.lang.String status) {
            this.props.status(status);
            return this;
        }
        /**
         * @return {@code this}
         * @param status This parameter is required.
         */
        public Builder status(final com.aliyun.ros.cdk.core.IResolvable status) {
            this.props.status(status);
            return this;
        }

        /**
         * @return {@code this}
         * @param synchronizationDirection This parameter is required.
         */
        public Builder synchronizationDirection(final java.lang.String synchronizationDirection) {
            this.props.synchronizationDirection(synchronizationDirection);
            return this;
        }
        /**
         * @return {@code this}
         * @param synchronizationDirection This parameter is required.
         */
        public Builder synchronizationDirection(final com.aliyun.ros.cdk.core.IResolvable synchronizationDirection) {
            this.props.synchronizationDirection(synchronizationDirection);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dts.RosSynchronizationJob2}.
         */
        @Override
        public com.aliyun.ros.cdk.dts.RosSynchronizationJob2 build() {
            return new com.aliyun.ros.cdk.dts.RosSynchronizationJob2(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
