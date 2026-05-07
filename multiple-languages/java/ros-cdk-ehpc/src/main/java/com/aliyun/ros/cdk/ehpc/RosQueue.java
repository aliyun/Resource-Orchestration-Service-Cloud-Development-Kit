package com.aliyun.ros.cdk.ehpc;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::EHPC::Queue</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:49.591Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.RosQueue")
public class RosQueue extends com.aliyun.ros.cdk.core.RosResource {

    protected RosQueue(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosQueue(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ehpc.RosQueue.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosQueue(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ehpc.RosQueueProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrComputeNodes() {
        return software.amazon.jsii.Kernel.get(this, "attrComputeNodes", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEnableScaleIn() {
        return software.amazon.jsii.Kernel.get(this, "attrEnableScaleIn", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEnableScaleOut() {
        return software.amazon.jsii.Kernel.get(this, "attrEnableScaleOut", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHostnamePrefix() {
        return software.amazon.jsii.Kernel.get(this, "attrHostnamePrefix", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHostnameSuffix() {
        return software.amazon.jsii.Kernel.get(this, "attrHostnameSuffix", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInitialCount() {
        return software.amazon.jsii.Kernel.get(this, "attrInitialCount", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInterConnect() {
        return software.amazon.jsii.Kernel.get(this, "attrInterConnect", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMaxCount() {
        return software.amazon.jsii.Kernel.get(this, "attrMaxCount", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMinCount() {
        return software.amazon.jsii.Kernel.get(this, "attrMinCount", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrQueueName() {
        return software.amazon.jsii.Kernel.get(this, "attrQueueName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUpdateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVSwitchIds() {
        return software.amazon.jsii.Kernel.get(this, "attrVSwitchIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getClusterId() {
        return software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setClusterId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "clusterId", value);
    }

    /**
     */
    public void setClusterId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "clusterId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getComputeNodes() {
        return software.amazon.jsii.Kernel.get(this, "computeNodes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setComputeNodes(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "computeNodes", value);
    }

    /**
     */
    public void setComputeNodes(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ehpc.RosQueue.ComputeNodesProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ehpc.RosQueue.ComputeNodesProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "computeNodes", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableScaleIn() {
        return software.amazon.jsii.Kernel.get(this, "enableScaleIn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableScaleIn(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableScaleIn", value);
    }

    /**
     */
    public void setEnableScaleIn(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableScaleIn", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableScaleOut() {
        return software.amazon.jsii.Kernel.get(this, "enableScaleOut", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableScaleOut(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableScaleOut", value);
    }

    /**
     */
    public void setEnableScaleOut(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableScaleOut", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHostnamePrefix() {
        return software.amazon.jsii.Kernel.get(this, "hostnamePrefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHostnamePrefix(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "hostnamePrefix", value);
    }

    /**
     */
    public void setHostnamePrefix(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "hostnamePrefix", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHostnameSuffix() {
        return software.amazon.jsii.Kernel.get(this, "hostnameSuffix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHostnameSuffix(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "hostnameSuffix", value);
    }

    /**
     */
    public void setHostnameSuffix(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "hostnameSuffix", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInitialCount() {
        return software.amazon.jsii.Kernel.get(this, "initialCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInitialCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "initialCount", value);
    }

    /**
     */
    public void setInitialCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "initialCount", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInterConnect() {
        return software.amazon.jsii.Kernel.get(this, "interConnect", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInterConnect(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "interConnect", value);
    }

    /**
     */
    public void setInterConnect(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "interConnect", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMaxCount() {
        return software.amazon.jsii.Kernel.get(this, "maxCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMaxCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "maxCount", value);
    }

    /**
     */
    public void setMaxCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "maxCount", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMinCount() {
        return software.amazon.jsii.Kernel.get(this, "minCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMinCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "minCount", value);
    }

    /**
     */
    public void setMinCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "minCount", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getQueueName() {
        return software.amazon.jsii.Kernel.get(this, "queueName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setQueueName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "queueName", value);
    }

    /**
     */
    public void setQueueName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "queueName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchIds() {
        return software.amazon.jsii.Kernel.get(this, "vSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVSwitchIds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vSwitchIds", value);
    }

    /**
     */
    public void setVSwitchIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "vSwitchIds", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.RosQueue.ComputeNodesProperty")
    @software.amazon.jsii.Jsii.Proxy(ComputeNodesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ComputeNodesProperty extends software.amazon.jsii.JsiiSerializable {

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
        default @org.jetbrains.annotations.Nullable java.lang.Object getDuration() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableHt() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getImageId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceChargeType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSpotPriceLimit() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSpotStrategy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDisk() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ComputeNodesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ComputeNodesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ComputeNodesProperty> {
            java.lang.Object autoRenew;
            java.lang.Object autoRenewPeriod;
            java.lang.Object duration;
            java.lang.Object enableHt;
            java.lang.Object imageId;
            java.lang.Object instanceChargeType;
            java.lang.Object instanceType;
            java.lang.Object period;
            java.lang.Object periodUnit;
            java.lang.Object spotPriceLimit;
            java.lang.Object spotStrategy;
            java.lang.Object systemDisk;

            /**
             * Sets the value of {@link ComputeNodesProperty#getAutoRenew}
             * @param autoRenew the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoRenew(java.lang.Boolean autoRenew) {
                this.autoRenew = autoRenew;
                return this;
            }

            /**
             * Sets the value of {@link ComputeNodesProperty#getAutoRenew}
             * @param autoRenew the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
                this.autoRenew = autoRenew;
                return this;
            }

            /**
             * Sets the value of {@link ComputeNodesProperty#getAutoRenewPeriod}
             * @param autoRenewPeriod the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoRenewPeriod(java.lang.Number autoRenewPeriod) {
                this.autoRenewPeriod = autoRenewPeriod;
                return this;
            }

            /**
             * Sets the value of {@link ComputeNodesProperty#getAutoRenewPeriod}
             * @param autoRenewPeriod the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoRenewPeriod(com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
                this.autoRenewPeriod = autoRenewPeriod;
                return this;
            }

            /**
             * Sets the value of {@link ComputeNodesProperty#getDuration}
             * @param duration the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder duration(java.lang.Number duration) {
                this.duration = duration;
                return this;
            }

            /**
             * Sets the value of {@link ComputeNodesProperty#getDuration}
             * @param duration the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder duration(com.aliyun.ros.cdk.core.IResolvable duration) {
                this.duration = duration;
                return this;
            }

            /**
             * Sets the value of {@link ComputeNodesProperty#getEnableHt}
             * @param enableHt the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableHt(java.lang.Boolean enableHt) {
                this.enableHt = enableHt;
                return this;
            }

            /**
             * Sets the value of {@link ComputeNodesProperty#getEnableHt}
             * @param enableHt the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableHt(com.aliyun.ros.cdk.core.IResolvable enableHt) {
                this.enableHt = enableHt;
                return this;
            }

            /**
             * Sets the value of {@link ComputeNodesProperty#getImageId}
             * @param imageId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder imageId(java.lang.String imageId) {
                this.imageId = imageId;
                return this;
            }

            /**
             * Sets the value of {@link ComputeNodesProperty#getImageId}
             * @param imageId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder imageId(com.aliyun.ros.cdk.core.IResolvable imageId) {
                this.imageId = imageId;
                return this;
            }

            /**
             * Sets the value of {@link ComputeNodesProperty#getInstanceChargeType}
             * @param instanceChargeType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceChargeType(java.lang.String instanceChargeType) {
                this.instanceChargeType = instanceChargeType;
                return this;
            }

            /**
             * Sets the value of {@link ComputeNodesProperty#getInstanceChargeType}
             * @param instanceChargeType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceChargeType(com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
                this.instanceChargeType = instanceChargeType;
                return this;
            }

            /**
             * Sets the value of {@link ComputeNodesProperty#getInstanceType}
             * @param instanceType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceType(java.lang.String instanceType) {
                this.instanceType = instanceType;
                return this;
            }

            /**
             * Sets the value of {@link ComputeNodesProperty#getInstanceType}
             * @param instanceType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
                this.instanceType = instanceType;
                return this;
            }

            /**
             * Sets the value of {@link ComputeNodesProperty#getPeriod}
             * @param period the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder period(java.lang.Number period) {
                this.period = period;
                return this;
            }

            /**
             * Sets the value of {@link ComputeNodesProperty#getPeriod}
             * @param period the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
                this.period = period;
                return this;
            }

            /**
             * Sets the value of {@link ComputeNodesProperty#getPeriodUnit}
             * @param periodUnit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder periodUnit(java.lang.String periodUnit) {
                this.periodUnit = periodUnit;
                return this;
            }

            /**
             * Sets the value of {@link ComputeNodesProperty#getPeriodUnit}
             * @param periodUnit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
                this.periodUnit = periodUnit;
                return this;
            }

            /**
             * Sets the value of {@link ComputeNodesProperty#getSpotPriceLimit}
             * @param spotPriceLimit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spotPriceLimit(java.lang.Number spotPriceLimit) {
                this.spotPriceLimit = spotPriceLimit;
                return this;
            }

            /**
             * Sets the value of {@link ComputeNodesProperty#getSpotPriceLimit}
             * @param spotPriceLimit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spotPriceLimit(com.aliyun.ros.cdk.core.IResolvable spotPriceLimit) {
                this.spotPriceLimit = spotPriceLimit;
                return this;
            }

            /**
             * Sets the value of {@link ComputeNodesProperty#getSpotStrategy}
             * @param spotStrategy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spotStrategy(java.lang.String spotStrategy) {
                this.spotStrategy = spotStrategy;
                return this;
            }

            /**
             * Sets the value of {@link ComputeNodesProperty#getSpotStrategy}
             * @param spotStrategy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spotStrategy(com.aliyun.ros.cdk.core.IResolvable spotStrategy) {
                this.spotStrategy = spotStrategy;
                return this;
            }

            /**
             * Sets the value of {@link ComputeNodesProperty#getSystemDisk}
             * @param systemDisk the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDisk(com.aliyun.ros.cdk.core.IResolvable systemDisk) {
                this.systemDisk = systemDisk;
                return this;
            }

            /**
             * Sets the value of {@link ComputeNodesProperty#getSystemDisk}
             * @param systemDisk the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDisk(com.aliyun.ros.cdk.ehpc.RosQueue.SystemDiskProperty systemDisk) {
                this.systemDisk = systemDisk;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ComputeNodesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ComputeNodesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ComputeNodesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ComputeNodesProperty {
            private final java.lang.Object autoRenew;
            private final java.lang.Object autoRenewPeriod;
            private final java.lang.Object duration;
            private final java.lang.Object enableHt;
            private final java.lang.Object imageId;
            private final java.lang.Object instanceChargeType;
            private final java.lang.Object instanceType;
            private final java.lang.Object period;
            private final java.lang.Object periodUnit;
            private final java.lang.Object spotPriceLimit;
            private final java.lang.Object spotStrategy;
            private final java.lang.Object systemDisk;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.autoRenewPeriod = software.amazon.jsii.Kernel.get(this, "autoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.duration = software.amazon.jsii.Kernel.get(this, "duration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enableHt = software.amazon.jsii.Kernel.get(this, "enableHt", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.imageId = software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.instanceChargeType = software.amazon.jsii.Kernel.get(this, "instanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.spotPriceLimit = software.amazon.jsii.Kernel.get(this, "spotPriceLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.spotStrategy = software.amazon.jsii.Kernel.get(this, "spotStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.systemDisk = software.amazon.jsii.Kernel.get(this, "systemDisk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.autoRenew = builder.autoRenew;
                this.autoRenewPeriod = builder.autoRenewPeriod;
                this.duration = builder.duration;
                this.enableHt = builder.enableHt;
                this.imageId = builder.imageId;
                this.instanceChargeType = builder.instanceChargeType;
                this.instanceType = builder.instanceType;
                this.period = builder.period;
                this.periodUnit = builder.periodUnit;
                this.spotPriceLimit = builder.spotPriceLimit;
                this.spotStrategy = builder.spotStrategy;
                this.systemDisk = builder.systemDisk;
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
            public final java.lang.Object getDuration() {
                return this.duration;
            }

            @Override
            public final java.lang.Object getEnableHt() {
                return this.enableHt;
            }

            @Override
            public final java.lang.Object getImageId() {
                return this.imageId;
            }

            @Override
            public final java.lang.Object getInstanceChargeType() {
                return this.instanceChargeType;
            }

            @Override
            public final java.lang.Object getInstanceType() {
                return this.instanceType;
            }

            @Override
            public final java.lang.Object getPeriod() {
                return this.period;
            }

            @Override
            public final java.lang.Object getPeriodUnit() {
                return this.periodUnit;
            }

            @Override
            public final java.lang.Object getSpotPriceLimit() {
                return this.spotPriceLimit;
            }

            @Override
            public final java.lang.Object getSpotStrategy() {
                return this.spotStrategy;
            }

            @Override
            public final java.lang.Object getSystemDisk() {
                return this.systemDisk;
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
                if (this.getDuration() != null) {
                    data.set("duration", om.valueToTree(this.getDuration()));
                }
                if (this.getEnableHt() != null) {
                    data.set("enableHt", om.valueToTree(this.getEnableHt()));
                }
                if (this.getImageId() != null) {
                    data.set("imageId", om.valueToTree(this.getImageId()));
                }
                if (this.getInstanceChargeType() != null) {
                    data.set("instanceChargeType", om.valueToTree(this.getInstanceChargeType()));
                }
                if (this.getInstanceType() != null) {
                    data.set("instanceType", om.valueToTree(this.getInstanceType()));
                }
                if (this.getPeriod() != null) {
                    data.set("period", om.valueToTree(this.getPeriod()));
                }
                if (this.getPeriodUnit() != null) {
                    data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
                }
                if (this.getSpotPriceLimit() != null) {
                    data.set("spotPriceLimit", om.valueToTree(this.getSpotPriceLimit()));
                }
                if (this.getSpotStrategy() != null) {
                    data.set("spotStrategy", om.valueToTree(this.getSpotStrategy()));
                }
                if (this.getSystemDisk() != null) {
                    data.set("systemDisk", om.valueToTree(this.getSystemDisk()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ehpc.RosQueue.ComputeNodesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ComputeNodesProperty.Jsii$Proxy that = (ComputeNodesProperty.Jsii$Proxy) o;

                if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
                if (this.autoRenewPeriod != null ? !this.autoRenewPeriod.equals(that.autoRenewPeriod) : that.autoRenewPeriod != null) return false;
                if (this.duration != null ? !this.duration.equals(that.duration) : that.duration != null) return false;
                if (this.enableHt != null ? !this.enableHt.equals(that.enableHt) : that.enableHt != null) return false;
                if (this.imageId != null ? !this.imageId.equals(that.imageId) : that.imageId != null) return false;
                if (this.instanceChargeType != null ? !this.instanceChargeType.equals(that.instanceChargeType) : that.instanceChargeType != null) return false;
                if (this.instanceType != null ? !this.instanceType.equals(that.instanceType) : that.instanceType != null) return false;
                if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
                if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
                if (this.spotPriceLimit != null ? !this.spotPriceLimit.equals(that.spotPriceLimit) : that.spotPriceLimit != null) return false;
                if (this.spotStrategy != null ? !this.spotStrategy.equals(that.spotStrategy) : that.spotStrategy != null) return false;
                return this.systemDisk != null ? this.systemDisk.equals(that.systemDisk) : that.systemDisk == null;
            }

            @Override
            public final int hashCode() {
                int result = this.autoRenew != null ? this.autoRenew.hashCode() : 0;
                result = 31 * result + (this.autoRenewPeriod != null ? this.autoRenewPeriod.hashCode() : 0);
                result = 31 * result + (this.duration != null ? this.duration.hashCode() : 0);
                result = 31 * result + (this.enableHt != null ? this.enableHt.hashCode() : 0);
                result = 31 * result + (this.imageId != null ? this.imageId.hashCode() : 0);
                result = 31 * result + (this.instanceChargeType != null ? this.instanceChargeType.hashCode() : 0);
                result = 31 * result + (this.instanceType != null ? this.instanceType.hashCode() : 0);
                result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
                result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
                result = 31 * result + (this.spotPriceLimit != null ? this.spotPriceLimit.hashCode() : 0);
                result = 31 * result + (this.spotStrategy != null ? this.spotStrategy.hashCode() : 0);
                result = 31 * result + (this.systemDisk != null ? this.systemDisk.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.RosQueue.SystemDiskProperty")
    @software.amazon.jsii.Jsii.Proxy(SystemDiskProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SystemDiskProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCategory() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLevel() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSize() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SystemDiskProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SystemDiskProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SystemDiskProperty> {
            java.lang.Object category;
            java.lang.Object level;
            java.lang.Object size;

            /**
             * Sets the value of {@link SystemDiskProperty#getCategory}
             * @param category the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder category(java.lang.String category) {
                this.category = category;
                return this;
            }

            /**
             * Sets the value of {@link SystemDiskProperty#getCategory}
             * @param category the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder category(com.aliyun.ros.cdk.core.IResolvable category) {
                this.category = category;
                return this;
            }

            /**
             * Sets the value of {@link SystemDiskProperty#getLevel}
             * @param level the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder level(java.lang.String level) {
                this.level = level;
                return this;
            }

            /**
             * Sets the value of {@link SystemDiskProperty#getLevel}
             * @param level the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder level(com.aliyun.ros.cdk.core.IResolvable level) {
                this.level = level;
                return this;
            }

            /**
             * Sets the value of {@link SystemDiskProperty#getSize}
             * @param size the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder size(java.lang.Number size) {
                this.size = size;
                return this;
            }

            /**
             * Sets the value of {@link SystemDiskProperty#getSize}
             * @param size the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder size(com.aliyun.ros.cdk.core.IResolvable size) {
                this.size = size;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SystemDiskProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SystemDiskProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SystemDiskProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SystemDiskProperty {
            private final java.lang.Object category;
            private final java.lang.Object level;
            private final java.lang.Object size;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.category = software.amazon.jsii.Kernel.get(this, "category", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.level = software.amazon.jsii.Kernel.get(this, "level", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.size = software.amazon.jsii.Kernel.get(this, "size", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.category = builder.category;
                this.level = builder.level;
                this.size = builder.size;
            }

            @Override
            public final java.lang.Object getCategory() {
                return this.category;
            }

            @Override
            public final java.lang.Object getLevel() {
                return this.level;
            }

            @Override
            public final java.lang.Object getSize() {
                return this.size;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCategory() != null) {
                    data.set("category", om.valueToTree(this.getCategory()));
                }
                if (this.getLevel() != null) {
                    data.set("level", om.valueToTree(this.getLevel()));
                }
                if (this.getSize() != null) {
                    data.set("size", om.valueToTree(this.getSize()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ehpc.RosQueue.SystemDiskProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SystemDiskProperty.Jsii$Proxy that = (SystemDiskProperty.Jsii$Proxy) o;

                if (this.category != null ? !this.category.equals(that.category) : that.category != null) return false;
                if (this.level != null ? !this.level.equals(that.level) : that.level != null) return false;
                return this.size != null ? this.size.equals(that.size) : that.size == null;
            }

            @Override
            public final int hashCode() {
                int result = this.category != null ? this.category.hashCode() : 0;
                result = 31 * result + (this.level != null ? this.level.hashCode() : 0);
                result = 31 * result + (this.size != null ? this.size.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ehpc.RosQueue}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ehpc.RosQueue> {
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
        private final com.aliyun.ros.cdk.ehpc.RosQueueProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ehpc.RosQueueProps.Builder();
        }

        /**
         * @return {@code this}
         * @param clusterId This parameter is required.
         */
        public Builder clusterId(final java.lang.String clusterId) {
            this.props.clusterId(clusterId);
            return this;
        }
        /**
         * @return {@code this}
         * @param clusterId This parameter is required.
         */
        public Builder clusterId(final com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.props.clusterId(clusterId);
            return this;
        }

        /**
         * @return {@code this}
         * @param computeNodes This parameter is required.
         */
        public Builder computeNodes(final com.aliyun.ros.cdk.core.IResolvable computeNodes) {
            this.props.computeNodes(computeNodes);
            return this;
        }
        /**
         * @return {@code this}
         * @param computeNodes This parameter is required.
         */
        public Builder computeNodes(final java.util.List<? extends java.lang.Object> computeNodes) {
            this.props.computeNodes(computeNodes);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableScaleIn This parameter is required.
         */
        public Builder enableScaleIn(final java.lang.Boolean enableScaleIn) {
            this.props.enableScaleIn(enableScaleIn);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableScaleIn This parameter is required.
         */
        public Builder enableScaleIn(final com.aliyun.ros.cdk.core.IResolvable enableScaleIn) {
            this.props.enableScaleIn(enableScaleIn);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableScaleOut This parameter is required.
         */
        public Builder enableScaleOut(final java.lang.Boolean enableScaleOut) {
            this.props.enableScaleOut(enableScaleOut);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableScaleOut This parameter is required.
         */
        public Builder enableScaleOut(final com.aliyun.ros.cdk.core.IResolvable enableScaleOut) {
            this.props.enableScaleOut(enableScaleOut);
            return this;
        }

        /**
         * @return {@code this}
         * @param hostnamePrefix This parameter is required.
         */
        public Builder hostnamePrefix(final java.lang.String hostnamePrefix) {
            this.props.hostnamePrefix(hostnamePrefix);
            return this;
        }
        /**
         * @return {@code this}
         * @param hostnamePrefix This parameter is required.
         */
        public Builder hostnamePrefix(final com.aliyun.ros.cdk.core.IResolvable hostnamePrefix) {
            this.props.hostnamePrefix(hostnamePrefix);
            return this;
        }

        /**
         * @return {@code this}
         * @param hostnameSuffix This parameter is required.
         */
        public Builder hostnameSuffix(final java.lang.String hostnameSuffix) {
            this.props.hostnameSuffix(hostnameSuffix);
            return this;
        }
        /**
         * @return {@code this}
         * @param hostnameSuffix This parameter is required.
         */
        public Builder hostnameSuffix(final com.aliyun.ros.cdk.core.IResolvable hostnameSuffix) {
            this.props.hostnameSuffix(hostnameSuffix);
            return this;
        }

        /**
         * @return {@code this}
         * @param initialCount This parameter is required.
         */
        public Builder initialCount(final java.lang.Number initialCount) {
            this.props.initialCount(initialCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param initialCount This parameter is required.
         */
        public Builder initialCount(final com.aliyun.ros.cdk.core.IResolvable initialCount) {
            this.props.initialCount(initialCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param interConnect This parameter is required.
         */
        public Builder interConnect(final java.lang.String interConnect) {
            this.props.interConnect(interConnect);
            return this;
        }
        /**
         * @return {@code this}
         * @param interConnect This parameter is required.
         */
        public Builder interConnect(final com.aliyun.ros.cdk.core.IResolvable interConnect) {
            this.props.interConnect(interConnect);
            return this;
        }

        /**
         * @return {@code this}
         * @param maxCount This parameter is required.
         */
        public Builder maxCount(final java.lang.Number maxCount) {
            this.props.maxCount(maxCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param maxCount This parameter is required.
         */
        public Builder maxCount(final com.aliyun.ros.cdk.core.IResolvable maxCount) {
            this.props.maxCount(maxCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param minCount This parameter is required.
         */
        public Builder minCount(final java.lang.Number minCount) {
            this.props.minCount(minCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param minCount This parameter is required.
         */
        public Builder minCount(final com.aliyun.ros.cdk.core.IResolvable minCount) {
            this.props.minCount(minCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param queueName This parameter is required.
         */
        public Builder queueName(final java.lang.String queueName) {
            this.props.queueName(queueName);
            return this;
        }
        /**
         * @return {@code this}
         * @param queueName This parameter is required.
         */
        public Builder queueName(final com.aliyun.ros.cdk.core.IResolvable queueName) {
            this.props.queueName(queueName);
            return this;
        }

        /**
         * @return {@code this}
         * @param vSwitchIds This parameter is required.
         */
        public Builder vSwitchIds(final com.aliyun.ros.cdk.core.IResolvable vSwitchIds) {
            this.props.vSwitchIds(vSwitchIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param vSwitchIds This parameter is required.
         */
        public Builder vSwitchIds(final java.util.List<? extends java.lang.Object> vSwitchIds) {
            this.props.vSwitchIds(vSwitchIds);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ehpc.RosQueue}.
         */
        @Override
        public com.aliyun.ros.cdk.ehpc.RosQueue build() {
            return new com.aliyun.ros.cdk.ehpc.RosQueue(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
