package com.aliyun.ros.cdk.emr;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::EMR::SparkWorkspace</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T08:59:08.334Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosSparkWorkspace")
public class RosSparkWorkspace extends com.aliyun.ros.cdk.core.RosResource {

    protected RosSparkWorkspace(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosSparkWorkspace(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.emr.RosSparkWorkspace.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosSparkWorkspace(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.emr.RosSparkWorkspaceProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrStorage() {
        return software.amazon.jsii.Kernel.get(this, "attrStorage", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrWorkspaceId() {
        return software.amazon.jsii.Kernel.get(this, "attrWorkspaceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getOssBucket() {
        return software.amazon.jsii.Kernel.get(this, "ossBucket", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOssBucket(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ossBucket", java.util.Objects.requireNonNull(value, "ossBucket is required"));
    }

    /**
     */
    public void setOssBucket(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ossBucket", java.util.Objects.requireNonNull(value, "ossBucket is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPaymentType() {
        return software.amazon.jsii.Kernel.get(this, "paymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPaymentType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "paymentType", java.util.Objects.requireNonNull(value, "paymentType is required"));
    }

    /**
     */
    public void setPaymentType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "paymentType", java.util.Objects.requireNonNull(value, "paymentType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRamRoleName() {
        return software.amazon.jsii.Kernel.get(this, "ramRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRamRoleName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ramRoleName", java.util.Objects.requireNonNull(value, "ramRoleName is required"));
    }

    /**
     */
    public void setRamRoleName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ramRoleName", java.util.Objects.requireNonNull(value, "ramRoleName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getResourceSpec() {
        return software.amazon.jsii.Kernel.get(this, "resourceSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResourceSpec(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resourceSpec", java.util.Objects.requireNonNull(value, "resourceSpec is required"));
    }

    /**
     */
    public void setResourceSpec(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.emr.RosSparkWorkspace.ResourceSpecProperty value) {
        software.amazon.jsii.Kernel.set(this, "resourceSpec", java.util.Objects.requireNonNull(value, "resourceSpec is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getWorkspaceName() {
        return software.amazon.jsii.Kernel.get(this, "workspaceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWorkspaceName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "workspaceName", java.util.Objects.requireNonNull(value, "workspaceName is required"));
    }

    /**
     */
    public void setWorkspaceName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "workspaceName", java.util.Objects.requireNonNull(value, "workspaceName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoRenew(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "autoRenew", value);
    }

    /**
     */
    public void setAutoRenew(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoRenew", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewPeriod() {
        return software.amazon.jsii.Kernel.get(this, "autoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoRenewPeriod(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "autoRenewPeriod", value);
    }

    /**
     */
    public void setAutoRenewPeriod(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoRenewPeriod", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewPeriodUnit() {
        return software.amazon.jsii.Kernel.get(this, "autoRenewPeriodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoRenewPeriodUnit(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "autoRenewPeriodUnit", value);
    }

    /**
     */
    public void setAutoRenewPeriodUnit(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoRenewPeriodUnit", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoStartSessionCluster() {
        return software.amazon.jsii.Kernel.get(this, "autoStartSessionCluster", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoStartSessionCluster(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "autoStartSessionCluster", value);
    }

    /**
     */
    public void setAutoStartSessionCluster(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoStartSessionCluster", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDlfCatalogId() {
        return software.amazon.jsii.Kernel.get(this, "dlfCatalogId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDlfCatalogId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dlfCatalogId", value);
    }

    /**
     */
    public void setDlfCatalogId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dlfCatalogId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDlfType() {
        return software.amazon.jsii.Kernel.get(this, "dlfType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDlfType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dlfType", value);
    }

    /**
     */
    public void setDlfType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dlfType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDuration() {
        return software.amazon.jsii.Kernel.get(this, "duration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDuration(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "duration", value);
    }

    /**
     */
    public void setDuration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "duration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getGpuSpec() {
        return software.amazon.jsii.Kernel.get(this, "gpuSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGpuSpec(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "gpuSpec", value);
    }

    /**
     */
    public void setGpuSpec(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "gpuSpec", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getGpuSubscription() {
        return software.amazon.jsii.Kernel.get(this, "gpuSubscription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGpuSubscription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "gpuSubscription", value);
    }

    /**
     */
    public void setGpuSubscription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.emr.RosSparkWorkspace.GpuSubscriptionProperty value) {
        software.amazon.jsii.Kernel.set(this, "gpuSubscription", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIpWhiteList() {
        return software.amazon.jsii.Kernel.get(this, "ipWhiteList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIpWhiteList(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ipWhiteList", value);
    }

    /**
     */
    public void setIpWhiteList(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "ipWhiteList", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPaymentDurationUnit() {
        return software.amazon.jsii.Kernel.get(this, "paymentDurationUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPaymentDurationUnit(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "paymentDurationUnit", value);
    }

    /**
     */
    public void setPaymentDurationUnit(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "paymentDurationUnit", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getReleaseType() {
        return software.amazon.jsii.Kernel.get(this, "releaseType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReleaseType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "releaseType", value);
    }

    /**
     */
    public void setReleaseType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "releaseType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSubscription() {
        return software.amazon.jsii.Kernel.get(this, "subscription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSubscription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "subscription", value);
    }

    /**
     */
    public void setSubscription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.emr.RosSparkWorkspace.SubscriptionProperty value) {
        software.amazon.jsii.Kernel.set(this, "subscription", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.emr.RosSparkWorkspace.TagsProperty> getTags() {
        return java.util.Optional.ofNullable((java.util.List<com.aliyun.ros.cdk.emr.RosSparkWorkspace.TagsProperty>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.emr.RosSparkWorkspace.TagsProperty.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    /**
     */
    public void setTags(final @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.emr.RosSparkWorkspace.TagsProperty> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosSparkWorkspace.GpuSubscriptionProperty")
    @software.amazon.jsii.Jsii.Proxy(GpuSubscriptionProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface GpuSubscriptionProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDuration() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getGpuMachineNum() {
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceTypeId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOperation() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPaymentDurationUnit() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link GpuSubscriptionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link GpuSubscriptionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<GpuSubscriptionProperty> {
            java.lang.Object autoRenew;
            java.lang.Object duration;
            java.lang.Object gpuMachineNum;
            java.lang.Object instanceId;
            java.lang.Object instanceTypeId;
            java.lang.Object operation;
            java.lang.Object paymentDurationUnit;

            /**
             * Sets the value of {@link GpuSubscriptionProperty#getAutoRenew}
             * @param autoRenew the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoRenew(java.lang.Boolean autoRenew) {
                this.autoRenew = autoRenew;
                return this;
            }

            /**
             * Sets the value of {@link GpuSubscriptionProperty#getAutoRenew}
             * @param autoRenew the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
                this.autoRenew = autoRenew;
                return this;
            }

            /**
             * Sets the value of {@link GpuSubscriptionProperty#getDuration}
             * @param duration the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder duration(java.lang.Number duration) {
                this.duration = duration;
                return this;
            }

            /**
             * Sets the value of {@link GpuSubscriptionProperty#getDuration}
             * @param duration the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder duration(com.aliyun.ros.cdk.core.IResolvable duration) {
                this.duration = duration;
                return this;
            }

            /**
             * Sets the value of {@link GpuSubscriptionProperty#getGpuMachineNum}
             * @param gpuMachineNum the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gpuMachineNum(java.lang.Number gpuMachineNum) {
                this.gpuMachineNum = gpuMachineNum;
                return this;
            }

            /**
             * Sets the value of {@link GpuSubscriptionProperty#getGpuMachineNum}
             * @param gpuMachineNum the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gpuMachineNum(com.aliyun.ros.cdk.core.IResolvable gpuMachineNum) {
                this.gpuMachineNum = gpuMachineNum;
                return this;
            }

            /**
             * Sets the value of {@link GpuSubscriptionProperty#getInstanceId}
             * @param instanceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceId(java.lang.String instanceId) {
                this.instanceId = instanceId;
                return this;
            }

            /**
             * Sets the value of {@link GpuSubscriptionProperty#getInstanceId}
             * @param instanceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
                this.instanceId = instanceId;
                return this;
            }

            /**
             * Sets the value of {@link GpuSubscriptionProperty#getInstanceTypeId}
             * @param instanceTypeId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceTypeId(java.lang.String instanceTypeId) {
                this.instanceTypeId = instanceTypeId;
                return this;
            }

            /**
             * Sets the value of {@link GpuSubscriptionProperty#getInstanceTypeId}
             * @param instanceTypeId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceTypeId(com.aliyun.ros.cdk.core.IResolvable instanceTypeId) {
                this.instanceTypeId = instanceTypeId;
                return this;
            }

            /**
             * Sets the value of {@link GpuSubscriptionProperty#getOperation}
             * @param operation the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder operation(java.lang.String operation) {
                this.operation = operation;
                return this;
            }

            /**
             * Sets the value of {@link GpuSubscriptionProperty#getOperation}
             * @param operation the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder operation(com.aliyun.ros.cdk.core.IResolvable operation) {
                this.operation = operation;
                return this;
            }

            /**
             * Sets the value of {@link GpuSubscriptionProperty#getPaymentDurationUnit}
             * @param paymentDurationUnit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder paymentDurationUnit(java.lang.String paymentDurationUnit) {
                this.paymentDurationUnit = paymentDurationUnit;
                return this;
            }

            /**
             * Sets the value of {@link GpuSubscriptionProperty#getPaymentDurationUnit}
             * @param paymentDurationUnit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder paymentDurationUnit(com.aliyun.ros.cdk.core.IResolvable paymentDurationUnit) {
                this.paymentDurationUnit = paymentDurationUnit;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link GpuSubscriptionProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public GpuSubscriptionProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link GpuSubscriptionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements GpuSubscriptionProperty {
            private final java.lang.Object autoRenew;
            private final java.lang.Object duration;
            private final java.lang.Object gpuMachineNum;
            private final java.lang.Object instanceId;
            private final java.lang.Object instanceTypeId;
            private final java.lang.Object operation;
            private final java.lang.Object paymentDurationUnit;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.duration = software.amazon.jsii.Kernel.get(this, "duration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.gpuMachineNum = software.amazon.jsii.Kernel.get(this, "gpuMachineNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.instanceTypeId = software.amazon.jsii.Kernel.get(this, "instanceTypeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.operation = software.amazon.jsii.Kernel.get(this, "operation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.paymentDurationUnit = software.amazon.jsii.Kernel.get(this, "paymentDurationUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.autoRenew = builder.autoRenew;
                this.duration = builder.duration;
                this.gpuMachineNum = builder.gpuMachineNum;
                this.instanceId = builder.instanceId;
                this.instanceTypeId = builder.instanceTypeId;
                this.operation = builder.operation;
                this.paymentDurationUnit = builder.paymentDurationUnit;
            }

            @Override
            public final java.lang.Object getAutoRenew() {
                return this.autoRenew;
            }

            @Override
            public final java.lang.Object getDuration() {
                return this.duration;
            }

            @Override
            public final java.lang.Object getGpuMachineNum() {
                return this.gpuMachineNum;
            }

            @Override
            public final java.lang.Object getInstanceId() {
                return this.instanceId;
            }

            @Override
            public final java.lang.Object getInstanceTypeId() {
                return this.instanceTypeId;
            }

            @Override
            public final java.lang.Object getOperation() {
                return this.operation;
            }

            @Override
            public final java.lang.Object getPaymentDurationUnit() {
                return this.paymentDurationUnit;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAutoRenew() != null) {
                    data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
                }
                if (this.getDuration() != null) {
                    data.set("duration", om.valueToTree(this.getDuration()));
                }
                if (this.getGpuMachineNum() != null) {
                    data.set("gpuMachineNum", om.valueToTree(this.getGpuMachineNum()));
                }
                if (this.getInstanceId() != null) {
                    data.set("instanceId", om.valueToTree(this.getInstanceId()));
                }
                if (this.getInstanceTypeId() != null) {
                    data.set("instanceTypeId", om.valueToTree(this.getInstanceTypeId()));
                }
                if (this.getOperation() != null) {
                    data.set("operation", om.valueToTree(this.getOperation()));
                }
                if (this.getPaymentDurationUnit() != null) {
                    data.set("paymentDurationUnit", om.valueToTree(this.getPaymentDurationUnit()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.RosSparkWorkspace.GpuSubscriptionProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                GpuSubscriptionProperty.Jsii$Proxy that = (GpuSubscriptionProperty.Jsii$Proxy) o;

                if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
                if (this.duration != null ? !this.duration.equals(that.duration) : that.duration != null) return false;
                if (this.gpuMachineNum != null ? !this.gpuMachineNum.equals(that.gpuMachineNum) : that.gpuMachineNum != null) return false;
                if (this.instanceId != null ? !this.instanceId.equals(that.instanceId) : that.instanceId != null) return false;
                if (this.instanceTypeId != null ? !this.instanceTypeId.equals(that.instanceTypeId) : that.instanceTypeId != null) return false;
                if (this.operation != null ? !this.operation.equals(that.operation) : that.operation != null) return false;
                return this.paymentDurationUnit != null ? this.paymentDurationUnit.equals(that.paymentDurationUnit) : that.paymentDurationUnit == null;
            }

            @Override
            public final int hashCode() {
                int result = this.autoRenew != null ? this.autoRenew.hashCode() : 0;
                result = 31 * result + (this.duration != null ? this.duration.hashCode() : 0);
                result = 31 * result + (this.gpuMachineNum != null ? this.gpuMachineNum.hashCode() : 0);
                result = 31 * result + (this.instanceId != null ? this.instanceId.hashCode() : 0);
                result = 31 * result + (this.instanceTypeId != null ? this.instanceTypeId.hashCode() : 0);
                result = 31 * result + (this.operation != null ? this.operation.hashCode() : 0);
                result = 31 * result + (this.paymentDurationUnit != null ? this.paymentDurationUnit.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosSparkWorkspace.ResourceSpecProperty")
    @software.amazon.jsii.Jsii.Proxy(ResourceSpecProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ResourceSpecProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getCu();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getGpu() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ResourceSpecProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ResourceSpecProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ResourceSpecProperty> {
            java.lang.Object cu;
            java.lang.Object gpu;

            /**
             * Sets the value of {@link ResourceSpecProperty#getCu}
             * @param cu the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cu(java.lang.String cu) {
                this.cu = cu;
                return this;
            }

            /**
             * Sets the value of {@link ResourceSpecProperty#getCu}
             * @param cu the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cu(com.aliyun.ros.cdk.core.IResolvable cu) {
                this.cu = cu;
                return this;
            }

            /**
             * Sets the value of {@link ResourceSpecProperty#getGpu}
             * @param gpu the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gpu(java.lang.Number gpu) {
                this.gpu = gpu;
                return this;
            }

            /**
             * Sets the value of {@link ResourceSpecProperty#getGpu}
             * @param gpu the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gpu(com.aliyun.ros.cdk.core.IResolvable gpu) {
                this.gpu = gpu;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ResourceSpecProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ResourceSpecProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ResourceSpecProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ResourceSpecProperty {
            private final java.lang.Object cu;
            private final java.lang.Object gpu;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.cu = software.amazon.jsii.Kernel.get(this, "cu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.gpu = software.amazon.jsii.Kernel.get(this, "gpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.cu = java.util.Objects.requireNonNull(builder.cu, "cu is required");
                this.gpu = builder.gpu;
            }

            @Override
            public final java.lang.Object getCu() {
                return this.cu;
            }

            @Override
            public final java.lang.Object getGpu() {
                return this.gpu;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("cu", om.valueToTree(this.getCu()));
                if (this.getGpu() != null) {
                    data.set("gpu", om.valueToTree(this.getGpu()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.RosSparkWorkspace.ResourceSpecProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ResourceSpecProperty.Jsii$Proxy that = (ResourceSpecProperty.Jsii$Proxy) o;

                if (!cu.equals(that.cu)) return false;
                return this.gpu != null ? this.gpu.equals(that.gpu) : that.gpu == null;
            }

            @Override
            public final int hashCode() {
                int result = this.cu.hashCode();
                result = 31 * result + (this.gpu != null ? this.gpu.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosSparkWorkspace.SubscriptionProperty")
    @software.amazon.jsii.Jsii.Proxy(SubscriptionProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SubscriptionProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewPeriod() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewPeriodUnit() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDuration() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPaymentDurationUnit() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getQueue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SubscriptionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SubscriptionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SubscriptionProperty> {
            java.lang.Object autoRenew;
            java.lang.Object autoRenewPeriod;
            java.lang.Object autoRenewPeriodUnit;
            java.lang.Object duration;
            java.lang.Object paymentDurationUnit;
            java.lang.Object queue;

            /**
             * Sets the value of {@link SubscriptionProperty#getAutoRenew}
             * @param autoRenew the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoRenew(java.lang.Boolean autoRenew) {
                this.autoRenew = autoRenew;
                return this;
            }

            /**
             * Sets the value of {@link SubscriptionProperty#getAutoRenew}
             * @param autoRenew the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
                this.autoRenew = autoRenew;
                return this;
            }

            /**
             * Sets the value of {@link SubscriptionProperty#getAutoRenewPeriod}
             * @param autoRenewPeriod the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoRenewPeriod(java.lang.String autoRenewPeriod) {
                this.autoRenewPeriod = autoRenewPeriod;
                return this;
            }

            /**
             * Sets the value of {@link SubscriptionProperty#getAutoRenewPeriod}
             * @param autoRenewPeriod the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoRenewPeriod(com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
                this.autoRenewPeriod = autoRenewPeriod;
                return this;
            }

            /**
             * Sets the value of {@link SubscriptionProperty#getAutoRenewPeriodUnit}
             * @param autoRenewPeriodUnit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoRenewPeriodUnit(java.lang.String autoRenewPeriodUnit) {
                this.autoRenewPeriodUnit = autoRenewPeriodUnit;
                return this;
            }

            /**
             * Sets the value of {@link SubscriptionProperty#getAutoRenewPeriodUnit}
             * @param autoRenewPeriodUnit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoRenewPeriodUnit(com.aliyun.ros.cdk.core.IResolvable autoRenewPeriodUnit) {
                this.autoRenewPeriodUnit = autoRenewPeriodUnit;
                return this;
            }

            /**
             * Sets the value of {@link SubscriptionProperty#getDuration}
             * @param duration the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder duration(java.lang.String duration) {
                this.duration = duration;
                return this;
            }

            /**
             * Sets the value of {@link SubscriptionProperty#getDuration}
             * @param duration the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder duration(com.aliyun.ros.cdk.core.IResolvable duration) {
                this.duration = duration;
                return this;
            }

            /**
             * Sets the value of {@link SubscriptionProperty#getPaymentDurationUnit}
             * @param paymentDurationUnit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder paymentDurationUnit(java.lang.String paymentDurationUnit) {
                this.paymentDurationUnit = paymentDurationUnit;
                return this;
            }

            /**
             * Sets the value of {@link SubscriptionProperty#getPaymentDurationUnit}
             * @param paymentDurationUnit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder paymentDurationUnit(com.aliyun.ros.cdk.core.IResolvable paymentDurationUnit) {
                this.paymentDurationUnit = paymentDurationUnit;
                return this;
            }

            /**
             * Sets the value of {@link SubscriptionProperty#getQueue}
             * @param queue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder queue(com.aliyun.ros.cdk.core.IResolvable queue) {
                this.queue = queue;
                return this;
            }

            /**
             * Sets the value of {@link SubscriptionProperty#getQueue}
             * @param queue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder queue(java.util.List<? extends java.lang.Object> queue) {
                this.queue = queue;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SubscriptionProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SubscriptionProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SubscriptionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SubscriptionProperty {
            private final java.lang.Object autoRenew;
            private final java.lang.Object autoRenewPeriod;
            private final java.lang.Object autoRenewPeriodUnit;
            private final java.lang.Object duration;
            private final java.lang.Object paymentDurationUnit;
            private final java.lang.Object queue;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.autoRenewPeriod = software.amazon.jsii.Kernel.get(this, "autoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.autoRenewPeriodUnit = software.amazon.jsii.Kernel.get(this, "autoRenewPeriodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.duration = software.amazon.jsii.Kernel.get(this, "duration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.paymentDurationUnit = software.amazon.jsii.Kernel.get(this, "paymentDurationUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.queue = software.amazon.jsii.Kernel.get(this, "queue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.autoRenew = builder.autoRenew;
                this.autoRenewPeriod = builder.autoRenewPeriod;
                this.autoRenewPeriodUnit = builder.autoRenewPeriodUnit;
                this.duration = builder.duration;
                this.paymentDurationUnit = builder.paymentDurationUnit;
                this.queue = builder.queue;
            }

            @Override
            public final java.lang.Object getAutoRenew() {
                return this.autoRenew;
            }

            @Override
            public final java.lang.Object getAutoRenewPeriod() {
                return this.autoRenewPeriod;
            }

            @Override
            public final java.lang.Object getAutoRenewPeriodUnit() {
                return this.autoRenewPeriodUnit;
            }

            @Override
            public final java.lang.Object getDuration() {
                return this.duration;
            }

            @Override
            public final java.lang.Object getPaymentDurationUnit() {
                return this.paymentDurationUnit;
            }

            @Override
            public final java.lang.Object getQueue() {
                return this.queue;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAutoRenew() != null) {
                    data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
                }
                if (this.getAutoRenewPeriod() != null) {
                    data.set("autoRenewPeriod", om.valueToTree(this.getAutoRenewPeriod()));
                }
                if (this.getAutoRenewPeriodUnit() != null) {
                    data.set("autoRenewPeriodUnit", om.valueToTree(this.getAutoRenewPeriodUnit()));
                }
                if (this.getDuration() != null) {
                    data.set("duration", om.valueToTree(this.getDuration()));
                }
                if (this.getPaymentDurationUnit() != null) {
                    data.set("paymentDurationUnit", om.valueToTree(this.getPaymentDurationUnit()));
                }
                if (this.getQueue() != null) {
                    data.set("queue", om.valueToTree(this.getQueue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.RosSparkWorkspace.SubscriptionProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SubscriptionProperty.Jsii$Proxy that = (SubscriptionProperty.Jsii$Proxy) o;

                if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
                if (this.autoRenewPeriod != null ? !this.autoRenewPeriod.equals(that.autoRenewPeriod) : that.autoRenewPeriod != null) return false;
                if (this.autoRenewPeriodUnit != null ? !this.autoRenewPeriodUnit.equals(that.autoRenewPeriodUnit) : that.autoRenewPeriodUnit != null) return false;
                if (this.duration != null ? !this.duration.equals(that.duration) : that.duration != null) return false;
                if (this.paymentDurationUnit != null ? !this.paymentDurationUnit.equals(that.paymentDurationUnit) : that.paymentDurationUnit != null) return false;
                return this.queue != null ? this.queue.equals(that.queue) : that.queue == null;
            }

            @Override
            public final int hashCode() {
                int result = this.autoRenew != null ? this.autoRenew.hashCode() : 0;
                result = 31 * result + (this.autoRenewPeriod != null ? this.autoRenewPeriod.hashCode() : 0);
                result = 31 * result + (this.autoRenewPeriodUnit != null ? this.autoRenewPeriodUnit.hashCode() : 0);
                result = 31 * result + (this.duration != null ? this.duration.hashCode() : 0);
                result = 31 * result + (this.paymentDurationUnit != null ? this.paymentDurationUnit.hashCode() : 0);
                result = 31 * result + (this.queue != null ? this.queue.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosSparkWorkspace.TagsProperty")
    @software.amazon.jsii.Jsii.Proxy(TagsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TagsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TagsProperty> {
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link TagsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TagsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TagsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TagsProperty {
            private final java.lang.Object key;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = java.util.Objects.requireNonNull(builder.key, "key is required");
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("key", om.valueToTree(this.getKey()));
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.RosSparkWorkspace.TagsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TagsProperty.Jsii$Proxy that = (TagsProperty.Jsii$Proxy) o;

                if (!key.equals(that.key)) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key.hashCode();
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.emr.RosSparkWorkspace}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.emr.RosSparkWorkspace> {
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
        private final com.aliyun.ros.cdk.emr.RosSparkWorkspaceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.emr.RosSparkWorkspaceProps.Builder();
        }

        /**
         * @return {@code this}
         * @param ossBucket This parameter is required.
         */
        public Builder ossBucket(final java.lang.String ossBucket) {
            this.props.ossBucket(ossBucket);
            return this;
        }
        /**
         * @return {@code this}
         * @param ossBucket This parameter is required.
         */
        public Builder ossBucket(final com.aliyun.ros.cdk.core.IResolvable ossBucket) {
            this.props.ossBucket(ossBucket);
            return this;
        }

        /**
         * @return {@code this}
         * @param paymentType This parameter is required.
         */
        public Builder paymentType(final java.lang.String paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }
        /**
         * @return {@code this}
         * @param paymentType This parameter is required.
         */
        public Builder paymentType(final com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }

        /**
         * @return {@code this}
         * @param ramRoleName This parameter is required.
         */
        public Builder ramRoleName(final java.lang.String ramRoleName) {
            this.props.ramRoleName(ramRoleName);
            return this;
        }
        /**
         * @return {@code this}
         * @param ramRoleName This parameter is required.
         */
        public Builder ramRoleName(final com.aliyun.ros.cdk.core.IResolvable ramRoleName) {
            this.props.ramRoleName(ramRoleName);
            return this;
        }

        /**
         * @return {@code this}
         * @param resourceSpec This parameter is required.
         */
        public Builder resourceSpec(final com.aliyun.ros.cdk.core.IResolvable resourceSpec) {
            this.props.resourceSpec(resourceSpec);
            return this;
        }
        /**
         * @return {@code this}
         * @param resourceSpec This parameter is required.
         */
        public Builder resourceSpec(final com.aliyun.ros.cdk.emr.RosSparkWorkspace.ResourceSpecProperty resourceSpec) {
            this.props.resourceSpec(resourceSpec);
            return this;
        }

        /**
         * @return {@code this}
         * @param workspaceName This parameter is required.
         */
        public Builder workspaceName(final java.lang.String workspaceName) {
            this.props.workspaceName(workspaceName);
            return this;
        }
        /**
         * @return {@code this}
         * @param workspaceName This parameter is required.
         */
        public Builder workspaceName(final com.aliyun.ros.cdk.core.IResolvable workspaceName) {
            this.props.workspaceName(workspaceName);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoRenew This parameter is required.
         */
        public Builder autoRenew(final java.lang.Boolean autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoRenew This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoRenewPeriod This parameter is required.
         */
        public Builder autoRenewPeriod(final java.lang.String autoRenewPeriod) {
            this.props.autoRenewPeriod(autoRenewPeriod);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoRenewPeriod This parameter is required.
         */
        public Builder autoRenewPeriod(final com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.props.autoRenewPeriod(autoRenewPeriod);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoRenewPeriodUnit This parameter is required.
         */
        public Builder autoRenewPeriodUnit(final java.lang.String autoRenewPeriodUnit) {
            this.props.autoRenewPeriodUnit(autoRenewPeriodUnit);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoRenewPeriodUnit This parameter is required.
         */
        public Builder autoRenewPeriodUnit(final com.aliyun.ros.cdk.core.IResolvable autoRenewPeriodUnit) {
            this.props.autoRenewPeriodUnit(autoRenewPeriodUnit);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoStartSessionCluster This parameter is required.
         */
        public Builder autoStartSessionCluster(final java.lang.Boolean autoStartSessionCluster) {
            this.props.autoStartSessionCluster(autoStartSessionCluster);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoStartSessionCluster This parameter is required.
         */
        public Builder autoStartSessionCluster(final com.aliyun.ros.cdk.core.IResolvable autoStartSessionCluster) {
            this.props.autoStartSessionCluster(autoStartSessionCluster);
            return this;
        }

        /**
         * @return {@code this}
         * @param dlfCatalogId This parameter is required.
         */
        public Builder dlfCatalogId(final java.lang.String dlfCatalogId) {
            this.props.dlfCatalogId(dlfCatalogId);
            return this;
        }
        /**
         * @return {@code this}
         * @param dlfCatalogId This parameter is required.
         */
        public Builder dlfCatalogId(final com.aliyun.ros.cdk.core.IResolvable dlfCatalogId) {
            this.props.dlfCatalogId(dlfCatalogId);
            return this;
        }

        /**
         * @return {@code this}
         * @param dlfType This parameter is required.
         */
        public Builder dlfType(final java.lang.String dlfType) {
            this.props.dlfType(dlfType);
            return this;
        }
        /**
         * @return {@code this}
         * @param dlfType This parameter is required.
         */
        public Builder dlfType(final com.aliyun.ros.cdk.core.IResolvable dlfType) {
            this.props.dlfType(dlfType);
            return this;
        }

        /**
         * @return {@code this}
         * @param duration This parameter is required.
         */
        public Builder duration(final java.lang.String duration) {
            this.props.duration(duration);
            return this;
        }
        /**
         * @return {@code this}
         * @param duration This parameter is required.
         */
        public Builder duration(final com.aliyun.ros.cdk.core.IResolvable duration) {
            this.props.duration(duration);
            return this;
        }

        /**
         * @return {@code this}
         * @param gpuSpec This parameter is required.
         */
        public Builder gpuSpec(final com.aliyun.ros.cdk.core.IResolvable gpuSpec) {
            this.props.gpuSpec(gpuSpec);
            return this;
        }
        /**
         * @return {@code this}
         * @param gpuSpec This parameter is required.
         */
        public Builder gpuSpec(final java.util.List<? extends java.lang.Object> gpuSpec) {
            this.props.gpuSpec(gpuSpec);
            return this;
        }

        /**
         * @return {@code this}
         * @param gpuSubscription This parameter is required.
         */
        public Builder gpuSubscription(final com.aliyun.ros.cdk.core.IResolvable gpuSubscription) {
            this.props.gpuSubscription(gpuSubscription);
            return this;
        }
        /**
         * @return {@code this}
         * @param gpuSubscription This parameter is required.
         */
        public Builder gpuSubscription(final com.aliyun.ros.cdk.emr.RosSparkWorkspace.GpuSubscriptionProperty gpuSubscription) {
            this.props.gpuSubscription(gpuSubscription);
            return this;
        }

        /**
         * @return {@code this}
         * @param ipWhiteList This parameter is required.
         */
        public Builder ipWhiteList(final com.aliyun.ros.cdk.core.IResolvable ipWhiteList) {
            this.props.ipWhiteList(ipWhiteList);
            return this;
        }
        /**
         * @return {@code this}
         * @param ipWhiteList This parameter is required.
         */
        public Builder ipWhiteList(final java.util.List<? extends java.lang.Object> ipWhiteList) {
            this.props.ipWhiteList(ipWhiteList);
            return this;
        }

        /**
         * @return {@code this}
         * @param paymentDurationUnit This parameter is required.
         */
        public Builder paymentDurationUnit(final java.lang.String paymentDurationUnit) {
            this.props.paymentDurationUnit(paymentDurationUnit);
            return this;
        }
        /**
         * @return {@code this}
         * @param paymentDurationUnit This parameter is required.
         */
        public Builder paymentDurationUnit(final com.aliyun.ros.cdk.core.IResolvable paymentDurationUnit) {
            this.props.paymentDurationUnit(paymentDurationUnit);
            return this;
        }

        /**
         * @return {@code this}
         * @param releaseType This parameter is required.
         */
        public Builder releaseType(final java.lang.String releaseType) {
            this.props.releaseType(releaseType);
            return this;
        }
        /**
         * @return {@code this}
         * @param releaseType This parameter is required.
         */
        public Builder releaseType(final com.aliyun.ros.cdk.core.IResolvable releaseType) {
            this.props.releaseType(releaseType);
            return this;
        }

        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param subscription This parameter is required.
         */
        public Builder subscription(final com.aliyun.ros.cdk.core.IResolvable subscription) {
            this.props.subscription(subscription);
            return this;
        }
        /**
         * @return {@code this}
         * @param subscription This parameter is required.
         */
        public Builder subscription(final com.aliyun.ros.cdk.emr.RosSparkWorkspace.SubscriptionProperty subscription) {
            this.props.subscription(subscription);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.emr.RosSparkWorkspace.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.emr.RosSparkWorkspace}.
         */
        @Override
        public com.aliyun.ros.cdk.emr.RosSparkWorkspace build() {
            return new com.aliyun.ros.cdk.emr.RosSparkWorkspace(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
