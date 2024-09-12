package com.aliyun.ros.cdk.ehpc;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::EHPC::AutoScaleConfig</code>, which is used to configure the auto scaling settings of a cluster.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:26.740Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.RosAutoScaleConfig")
public class RosAutoScaleConfig extends com.aliyun.ros.cdk.core.RosResource {

    protected RosAutoScaleConfig(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosAutoScaleConfig(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ehpc.RosAutoScaleConfig.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosAutoScaleConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ehpc.RosAutoScaleConfigProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getClusterId() {
        return software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setClusterId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "clusterId", java.util.Objects.requireNonNull(value, "clusterId is required"));
    }

    /**
     */
    public void setClusterId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "clusterId", java.util.Objects.requireNonNull(value, "clusterId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableAutoGrow() {
        return software.amazon.jsii.Kernel.get(this, "enableAutoGrow", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableAutoGrow(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableAutoGrow", value);
    }

    /**
     */
    public void setEnableAutoGrow(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableAutoGrow", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableAutoShrink() {
        return software.amazon.jsii.Kernel.get(this, "enableAutoShrink", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableAutoShrink(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableAutoShrink", value);
    }

    /**
     */
    public void setEnableAutoShrink(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableAutoShrink", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getExcludeNodes() {
        return software.amazon.jsii.Kernel.get(this, "excludeNodes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExcludeNodes(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "excludeNodes", value);
    }

    /**
     */
    public void setExcludeNodes(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "excludeNodes", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getExtraNodesGrowRatio() {
        return software.amazon.jsii.Kernel.get(this, "extraNodesGrowRatio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExtraNodesGrowRatio(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "extraNodesGrowRatio", value);
    }

    /**
     */
    public void setExtraNodesGrowRatio(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "extraNodesGrowRatio", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getGrowIntervalInMinutes() {
        return software.amazon.jsii.Kernel.get(this, "growIntervalInMinutes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGrowIntervalInMinutes(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "growIntervalInMinutes", value);
    }

    /**
     */
    public void setGrowIntervalInMinutes(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "growIntervalInMinutes", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getGrowRatio() {
        return software.amazon.jsii.Kernel.get(this, "growRatio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGrowRatio(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "growRatio", value);
    }

    /**
     */
    public void setGrowRatio(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "growRatio", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getGrowTimeoutInMinutes() {
        return software.amazon.jsii.Kernel.get(this, "growTimeoutInMinutes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGrowTimeoutInMinutes(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "growTimeoutInMinutes", value);
    }

    /**
     */
    public void setGrowTimeoutInMinutes(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "growTimeoutInMinutes", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getImageId() {
        return software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setImageId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "imageId", value);
    }

    /**
     */
    public void setImageId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "imageId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMaxNodesInCluster() {
        return software.amazon.jsii.Kernel.get(this, "maxNodesInCluster", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMaxNodesInCluster(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "maxNodesInCluster", value);
    }

    /**
     */
    public void setMaxNodesInCluster(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "maxNodesInCluster", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getQueues() {
        return software.amazon.jsii.Kernel.get(this, "queues", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setQueues(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "queues", value);
    }

    /**
     */
    public void setQueues(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ehpc.RosAutoScaleConfig.QueuesProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ehpc.RosAutoScaleConfig.QueuesProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "queues", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getShrinkIdleTimes() {
        return software.amazon.jsii.Kernel.get(this, "shrinkIdleTimes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setShrinkIdleTimes(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "shrinkIdleTimes", value);
    }

    /**
     */
    public void setShrinkIdleTimes(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "shrinkIdleTimes", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getShrinkIntervalInMinutes() {
        return software.amazon.jsii.Kernel.get(this, "shrinkIntervalInMinutes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setShrinkIntervalInMinutes(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "shrinkIntervalInMinutes", value);
    }

    /**
     */
    public void setShrinkIntervalInMinutes(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "shrinkIntervalInMinutes", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSpotPriceLimit() {
        return software.amazon.jsii.Kernel.get(this, "spotPriceLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSpotPriceLimit(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "spotPriceLimit", value);
    }

    /**
     */
    public void setSpotPriceLimit(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "spotPriceLimit", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSpotStrategy() {
        return software.amazon.jsii.Kernel.get(this, "spotStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSpotStrategy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "spotStrategy", value);
    }

    /**
     */
    public void setSpotStrategy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "spotStrategy", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.RosAutoScaleConfig.DataDisksProperty")
    @software.amazon.jsii.Jsii.Proxy(DataDisksProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DataDisksProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDataDiskCategory() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDataDiskDeleteWithInstance() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDataDiskEncrypted() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDataDiskKmsKeyId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDataDiskPerformanceLevel() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDataDiskSize() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DataDisksProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DataDisksProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DataDisksProperty> {
            java.lang.Object dataDiskCategory;
            java.lang.Object dataDiskDeleteWithInstance;
            java.lang.Object dataDiskEncrypted;
            java.lang.Object dataDiskKmsKeyId;
            java.lang.Object dataDiskPerformanceLevel;
            java.lang.Object dataDiskSize;

            /**
             * Sets the value of {@link DataDisksProperty#getDataDiskCategory}
             * @param dataDiskCategory the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dataDiskCategory(java.lang.String dataDiskCategory) {
                this.dataDiskCategory = dataDiskCategory;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getDataDiskCategory}
             * @param dataDiskCategory the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dataDiskCategory(com.aliyun.ros.cdk.core.IResolvable dataDiskCategory) {
                this.dataDiskCategory = dataDiskCategory;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getDataDiskDeleteWithInstance}
             * @param dataDiskDeleteWithInstance the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dataDiskDeleteWithInstance(java.lang.Boolean dataDiskDeleteWithInstance) {
                this.dataDiskDeleteWithInstance = dataDiskDeleteWithInstance;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getDataDiskDeleteWithInstance}
             * @param dataDiskDeleteWithInstance the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dataDiskDeleteWithInstance(com.aliyun.ros.cdk.core.IResolvable dataDiskDeleteWithInstance) {
                this.dataDiskDeleteWithInstance = dataDiskDeleteWithInstance;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getDataDiskEncrypted}
             * @param dataDiskEncrypted the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dataDiskEncrypted(java.lang.Boolean dataDiskEncrypted) {
                this.dataDiskEncrypted = dataDiskEncrypted;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getDataDiskEncrypted}
             * @param dataDiskEncrypted the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dataDiskEncrypted(com.aliyun.ros.cdk.core.IResolvable dataDiskEncrypted) {
                this.dataDiskEncrypted = dataDiskEncrypted;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getDataDiskKmsKeyId}
             * @param dataDiskKmsKeyId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dataDiskKmsKeyId(java.lang.String dataDiskKmsKeyId) {
                this.dataDiskKmsKeyId = dataDiskKmsKeyId;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getDataDiskKmsKeyId}
             * @param dataDiskKmsKeyId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dataDiskKmsKeyId(com.aliyun.ros.cdk.core.IResolvable dataDiskKmsKeyId) {
                this.dataDiskKmsKeyId = dataDiskKmsKeyId;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getDataDiskPerformanceLevel}
             * @param dataDiskPerformanceLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dataDiskPerformanceLevel(java.lang.String dataDiskPerformanceLevel) {
                this.dataDiskPerformanceLevel = dataDiskPerformanceLevel;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getDataDiskPerformanceLevel}
             * @param dataDiskPerformanceLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dataDiskPerformanceLevel(com.aliyun.ros.cdk.core.IResolvable dataDiskPerformanceLevel) {
                this.dataDiskPerformanceLevel = dataDiskPerformanceLevel;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getDataDiskSize}
             * @param dataDiskSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dataDiskSize(java.lang.Number dataDiskSize) {
                this.dataDiskSize = dataDiskSize;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getDataDiskSize}
             * @param dataDiskSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dataDiskSize(com.aliyun.ros.cdk.core.IResolvable dataDiskSize) {
                this.dataDiskSize = dataDiskSize;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DataDisksProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DataDisksProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DataDisksProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DataDisksProperty {
            private final java.lang.Object dataDiskCategory;
            private final java.lang.Object dataDiskDeleteWithInstance;
            private final java.lang.Object dataDiskEncrypted;
            private final java.lang.Object dataDiskKmsKeyId;
            private final java.lang.Object dataDiskPerformanceLevel;
            private final java.lang.Object dataDiskSize;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.dataDiskCategory = software.amazon.jsii.Kernel.get(this, "dataDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.dataDiskDeleteWithInstance = software.amazon.jsii.Kernel.get(this, "dataDiskDeleteWithInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.dataDiskEncrypted = software.amazon.jsii.Kernel.get(this, "dataDiskEncrypted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.dataDiskKmsKeyId = software.amazon.jsii.Kernel.get(this, "dataDiskKmsKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.dataDiskPerformanceLevel = software.amazon.jsii.Kernel.get(this, "dataDiskPerformanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.dataDiskSize = software.amazon.jsii.Kernel.get(this, "dataDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.dataDiskCategory = builder.dataDiskCategory;
                this.dataDiskDeleteWithInstance = builder.dataDiskDeleteWithInstance;
                this.dataDiskEncrypted = builder.dataDiskEncrypted;
                this.dataDiskKmsKeyId = builder.dataDiskKmsKeyId;
                this.dataDiskPerformanceLevel = builder.dataDiskPerformanceLevel;
                this.dataDiskSize = builder.dataDiskSize;
            }

            @Override
            public final java.lang.Object getDataDiskCategory() {
                return this.dataDiskCategory;
            }

            @Override
            public final java.lang.Object getDataDiskDeleteWithInstance() {
                return this.dataDiskDeleteWithInstance;
            }

            @Override
            public final java.lang.Object getDataDiskEncrypted() {
                return this.dataDiskEncrypted;
            }

            @Override
            public final java.lang.Object getDataDiskKmsKeyId() {
                return this.dataDiskKmsKeyId;
            }

            @Override
            public final java.lang.Object getDataDiskPerformanceLevel() {
                return this.dataDiskPerformanceLevel;
            }

            @Override
            public final java.lang.Object getDataDiskSize() {
                return this.dataDiskSize;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getDataDiskCategory() != null) {
                    data.set("dataDiskCategory", om.valueToTree(this.getDataDiskCategory()));
                }
                if (this.getDataDiskDeleteWithInstance() != null) {
                    data.set("dataDiskDeleteWithInstance", om.valueToTree(this.getDataDiskDeleteWithInstance()));
                }
                if (this.getDataDiskEncrypted() != null) {
                    data.set("dataDiskEncrypted", om.valueToTree(this.getDataDiskEncrypted()));
                }
                if (this.getDataDiskKmsKeyId() != null) {
                    data.set("dataDiskKmsKeyId", om.valueToTree(this.getDataDiskKmsKeyId()));
                }
                if (this.getDataDiskPerformanceLevel() != null) {
                    data.set("dataDiskPerformanceLevel", om.valueToTree(this.getDataDiskPerformanceLevel()));
                }
                if (this.getDataDiskSize() != null) {
                    data.set("dataDiskSize", om.valueToTree(this.getDataDiskSize()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ehpc.RosAutoScaleConfig.DataDisksProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DataDisksProperty.Jsii$Proxy that = (DataDisksProperty.Jsii$Proxy) o;

                if (this.dataDiskCategory != null ? !this.dataDiskCategory.equals(that.dataDiskCategory) : that.dataDiskCategory != null) return false;
                if (this.dataDiskDeleteWithInstance != null ? !this.dataDiskDeleteWithInstance.equals(that.dataDiskDeleteWithInstance) : that.dataDiskDeleteWithInstance != null) return false;
                if (this.dataDiskEncrypted != null ? !this.dataDiskEncrypted.equals(that.dataDiskEncrypted) : that.dataDiskEncrypted != null) return false;
                if (this.dataDiskKmsKeyId != null ? !this.dataDiskKmsKeyId.equals(that.dataDiskKmsKeyId) : that.dataDiskKmsKeyId != null) return false;
                if (this.dataDiskPerformanceLevel != null ? !this.dataDiskPerformanceLevel.equals(that.dataDiskPerformanceLevel) : that.dataDiskPerformanceLevel != null) return false;
                return this.dataDiskSize != null ? this.dataDiskSize.equals(that.dataDiskSize) : that.dataDiskSize == null;
            }

            @Override
            public final int hashCode() {
                int result = this.dataDiskCategory != null ? this.dataDiskCategory.hashCode() : 0;
                result = 31 * result + (this.dataDiskDeleteWithInstance != null ? this.dataDiskDeleteWithInstance.hashCode() : 0);
                result = 31 * result + (this.dataDiskEncrypted != null ? this.dataDiskEncrypted.hashCode() : 0);
                result = 31 * result + (this.dataDiskKmsKeyId != null ? this.dataDiskKmsKeyId.hashCode() : 0);
                result = 31 * result + (this.dataDiskPerformanceLevel != null ? this.dataDiskPerformanceLevel.hashCode() : 0);
                result = 31 * result + (this.dataDiskSize != null ? this.dataDiskSize.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.RosAutoScaleConfig.InstanceTypesProperty")
    @software.amazon.jsii.Jsii.Proxy(InstanceTypesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface InstanceTypesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getInstanceType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getZoneId();

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
         * @return a {@link Builder} of {@link InstanceTypesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link InstanceTypesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<InstanceTypesProperty> {
            java.lang.Object instanceType;
            java.lang.Object vSwitchId;
            java.lang.Object zoneId;
            java.lang.Object spotPriceLimit;
            java.lang.Object spotStrategy;

            /**
             * Sets the value of {@link InstanceTypesProperty#getInstanceType}
             * @param instanceType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceType(java.lang.String instanceType) {
                this.instanceType = instanceType;
                return this;
            }

            /**
             * Sets the value of {@link InstanceTypesProperty#getInstanceType}
             * @param instanceType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
                this.instanceType = instanceType;
                return this;
            }

            /**
             * Sets the value of {@link InstanceTypesProperty#getVSwitchId}
             * @param vSwitchId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchId(java.lang.String vSwitchId) {
                this.vSwitchId = vSwitchId;
                return this;
            }

            /**
             * Sets the value of {@link InstanceTypesProperty#getVSwitchId}
             * @param vSwitchId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
                this.vSwitchId = vSwitchId;
                return this;
            }

            /**
             * Sets the value of {@link InstanceTypesProperty#getZoneId}
             * @param zoneId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder zoneId(java.lang.String zoneId) {
                this.zoneId = zoneId;
                return this;
            }

            /**
             * Sets the value of {@link InstanceTypesProperty#getZoneId}
             * @param zoneId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
                this.zoneId = zoneId;
                return this;
            }

            /**
             * Sets the value of {@link InstanceTypesProperty#getSpotPriceLimit}
             * @param spotPriceLimit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spotPriceLimit(java.lang.Number spotPriceLimit) {
                this.spotPriceLimit = spotPriceLimit;
                return this;
            }

            /**
             * Sets the value of {@link InstanceTypesProperty#getSpotPriceLimit}
             * @param spotPriceLimit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spotPriceLimit(com.aliyun.ros.cdk.core.IResolvable spotPriceLimit) {
                this.spotPriceLimit = spotPriceLimit;
                return this;
            }

            /**
             * Sets the value of {@link InstanceTypesProperty#getSpotStrategy}
             * @param spotStrategy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spotStrategy(java.lang.String spotStrategy) {
                this.spotStrategy = spotStrategy;
                return this;
            }

            /**
             * Sets the value of {@link InstanceTypesProperty#getSpotStrategy}
             * @param spotStrategy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spotStrategy(com.aliyun.ros.cdk.core.IResolvable spotStrategy) {
                this.spotStrategy = spotStrategy;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link InstanceTypesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public InstanceTypesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link InstanceTypesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InstanceTypesProperty {
            private final java.lang.Object instanceType;
            private final java.lang.Object vSwitchId;
            private final java.lang.Object zoneId;
            private final java.lang.Object spotPriceLimit;
            private final java.lang.Object spotStrategy;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.spotPriceLimit = software.amazon.jsii.Kernel.get(this, "spotPriceLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.spotStrategy = software.amazon.jsii.Kernel.get(this, "spotStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.instanceType = java.util.Objects.requireNonNull(builder.instanceType, "instanceType is required");
                this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
                this.zoneId = java.util.Objects.requireNonNull(builder.zoneId, "zoneId is required");
                this.spotPriceLimit = builder.spotPriceLimit;
                this.spotStrategy = builder.spotStrategy;
            }

            @Override
            public final java.lang.Object getInstanceType() {
                return this.instanceType;
            }

            @Override
            public final java.lang.Object getVSwitchId() {
                return this.vSwitchId;
            }

            @Override
            public final java.lang.Object getZoneId() {
                return this.zoneId;
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
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("instanceType", om.valueToTree(this.getInstanceType()));
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
                data.set("zoneId", om.valueToTree(this.getZoneId()));
                if (this.getSpotPriceLimit() != null) {
                    data.set("spotPriceLimit", om.valueToTree(this.getSpotPriceLimit()));
                }
                if (this.getSpotStrategy() != null) {
                    data.set("spotStrategy", om.valueToTree(this.getSpotStrategy()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ehpc.RosAutoScaleConfig.InstanceTypesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                InstanceTypesProperty.Jsii$Proxy that = (InstanceTypesProperty.Jsii$Proxy) o;

                if (!instanceType.equals(that.instanceType)) return false;
                if (!vSwitchId.equals(that.vSwitchId)) return false;
                if (!zoneId.equals(that.zoneId)) return false;
                if (this.spotPriceLimit != null ? !this.spotPriceLimit.equals(that.spotPriceLimit) : that.spotPriceLimit != null) return false;
                return this.spotStrategy != null ? this.spotStrategy.equals(that.spotStrategy) : that.spotStrategy == null;
            }

            @Override
            public final int hashCode() {
                int result = this.instanceType.hashCode();
                result = 31 * result + (this.vSwitchId.hashCode());
                result = 31 * result + (this.zoneId.hashCode());
                result = 31 * result + (this.spotPriceLimit != null ? this.spotPriceLimit.hashCode() : 0);
                result = 31 * result + (this.spotStrategy != null ? this.spotStrategy.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.RosAutoScaleConfig.QueuesProperty")
    @software.amazon.jsii.Jsii.Proxy(QueuesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface QueuesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDataDisks() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableAutoGrow() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableAutoShrink() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHostNamePrefix() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHostNameSuffix() {
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceTypes() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMaxNodesInQueue() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMaxNodesPerCycle() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMinNodesInQueue() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMinNodesPerCycle() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getQueueImageId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getQueueName() {
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskCategory() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskLevel() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskSize() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link QueuesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link QueuesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<QueuesProperty> {
            java.lang.Object dataDisks;
            java.lang.Object enableAutoGrow;
            java.lang.Object enableAutoShrink;
            java.lang.Object hostNamePrefix;
            java.lang.Object hostNameSuffix;
            java.lang.Object instanceType;
            java.lang.Object instanceTypes;
            java.lang.Object maxNodesInQueue;
            java.lang.Object maxNodesPerCycle;
            java.lang.Object minNodesInQueue;
            java.lang.Object minNodesPerCycle;
            java.lang.Object queueImageId;
            java.lang.Object queueName;
            java.lang.Object spotPriceLimit;
            java.lang.Object spotStrategy;
            java.lang.Object systemDiskCategory;
            java.lang.Object systemDiskLevel;
            java.lang.Object systemDiskSize;

            /**
             * Sets the value of {@link QueuesProperty#getDataDisks}
             * @param dataDisks the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dataDisks(com.aliyun.ros.cdk.core.IResolvable dataDisks) {
                this.dataDisks = dataDisks;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getDataDisks}
             * @param dataDisks the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dataDisks(java.util.List<? extends java.lang.Object> dataDisks) {
                this.dataDisks = dataDisks;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getEnableAutoGrow}
             * @param enableAutoGrow the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableAutoGrow(java.lang.Boolean enableAutoGrow) {
                this.enableAutoGrow = enableAutoGrow;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getEnableAutoGrow}
             * @param enableAutoGrow the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableAutoGrow(com.aliyun.ros.cdk.core.IResolvable enableAutoGrow) {
                this.enableAutoGrow = enableAutoGrow;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getEnableAutoShrink}
             * @param enableAutoShrink the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableAutoShrink(java.lang.Boolean enableAutoShrink) {
                this.enableAutoShrink = enableAutoShrink;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getEnableAutoShrink}
             * @param enableAutoShrink the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableAutoShrink(com.aliyun.ros.cdk.core.IResolvable enableAutoShrink) {
                this.enableAutoShrink = enableAutoShrink;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getHostNamePrefix}
             * @param hostNamePrefix the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostNamePrefix(java.lang.String hostNamePrefix) {
                this.hostNamePrefix = hostNamePrefix;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getHostNamePrefix}
             * @param hostNamePrefix the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostNamePrefix(com.aliyun.ros.cdk.core.IResolvable hostNamePrefix) {
                this.hostNamePrefix = hostNamePrefix;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getHostNameSuffix}
             * @param hostNameSuffix the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostNameSuffix(java.lang.String hostNameSuffix) {
                this.hostNameSuffix = hostNameSuffix;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getHostNameSuffix}
             * @param hostNameSuffix the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostNameSuffix(com.aliyun.ros.cdk.core.IResolvable hostNameSuffix) {
                this.hostNameSuffix = hostNameSuffix;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getInstanceType}
             * @param instanceType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceType(java.lang.String instanceType) {
                this.instanceType = instanceType;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getInstanceType}
             * @param instanceType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
                this.instanceType = instanceType;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getInstanceTypes}
             * @param instanceTypes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceTypes(com.aliyun.ros.cdk.core.IResolvable instanceTypes) {
                this.instanceTypes = instanceTypes;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getInstanceTypes}
             * @param instanceTypes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceTypes(java.util.List<? extends java.lang.Object> instanceTypes) {
                this.instanceTypes = instanceTypes;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getMaxNodesInQueue}
             * @param maxNodesInQueue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxNodesInQueue(java.lang.Number maxNodesInQueue) {
                this.maxNodesInQueue = maxNodesInQueue;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getMaxNodesInQueue}
             * @param maxNodesInQueue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxNodesInQueue(com.aliyun.ros.cdk.core.IResolvable maxNodesInQueue) {
                this.maxNodesInQueue = maxNodesInQueue;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getMaxNodesPerCycle}
             * @param maxNodesPerCycle the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxNodesPerCycle(java.lang.Number maxNodesPerCycle) {
                this.maxNodesPerCycle = maxNodesPerCycle;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getMaxNodesPerCycle}
             * @param maxNodesPerCycle the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxNodesPerCycle(com.aliyun.ros.cdk.core.IResolvable maxNodesPerCycle) {
                this.maxNodesPerCycle = maxNodesPerCycle;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getMinNodesInQueue}
             * @param minNodesInQueue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder minNodesInQueue(java.lang.Number minNodesInQueue) {
                this.minNodesInQueue = minNodesInQueue;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getMinNodesInQueue}
             * @param minNodesInQueue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder minNodesInQueue(com.aliyun.ros.cdk.core.IResolvable minNodesInQueue) {
                this.minNodesInQueue = minNodesInQueue;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getMinNodesPerCycle}
             * @param minNodesPerCycle the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder minNodesPerCycle(java.lang.Number minNodesPerCycle) {
                this.minNodesPerCycle = minNodesPerCycle;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getMinNodesPerCycle}
             * @param minNodesPerCycle the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder minNodesPerCycle(com.aliyun.ros.cdk.core.IResolvable minNodesPerCycle) {
                this.minNodesPerCycle = minNodesPerCycle;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getQueueImageId}
             * @param queueImageId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder queueImageId(java.lang.String queueImageId) {
                this.queueImageId = queueImageId;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getQueueImageId}
             * @param queueImageId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder queueImageId(com.aliyun.ros.cdk.core.IResolvable queueImageId) {
                this.queueImageId = queueImageId;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getQueueName}
             * @param queueName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder queueName(java.lang.String queueName) {
                this.queueName = queueName;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getQueueName}
             * @param queueName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder queueName(com.aliyun.ros.cdk.core.IResolvable queueName) {
                this.queueName = queueName;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getSpotPriceLimit}
             * @param spotPriceLimit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spotPriceLimit(java.lang.Number spotPriceLimit) {
                this.spotPriceLimit = spotPriceLimit;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getSpotPriceLimit}
             * @param spotPriceLimit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spotPriceLimit(com.aliyun.ros.cdk.core.IResolvable spotPriceLimit) {
                this.spotPriceLimit = spotPriceLimit;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getSpotStrategy}
             * @param spotStrategy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spotStrategy(java.lang.String spotStrategy) {
                this.spotStrategy = spotStrategy;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getSpotStrategy}
             * @param spotStrategy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spotStrategy(com.aliyun.ros.cdk.core.IResolvable spotStrategy) {
                this.spotStrategy = spotStrategy;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getSystemDiskCategory}
             * @param systemDiskCategory the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskCategory(java.lang.String systemDiskCategory) {
                this.systemDiskCategory = systemDiskCategory;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getSystemDiskCategory}
             * @param systemDiskCategory the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskCategory(com.aliyun.ros.cdk.core.IResolvable systemDiskCategory) {
                this.systemDiskCategory = systemDiskCategory;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getSystemDiskLevel}
             * @param systemDiskLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskLevel(java.lang.String systemDiskLevel) {
                this.systemDiskLevel = systemDiskLevel;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getSystemDiskLevel}
             * @param systemDiskLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskLevel(com.aliyun.ros.cdk.core.IResolvable systemDiskLevel) {
                this.systemDiskLevel = systemDiskLevel;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getSystemDiskSize}
             * @param systemDiskSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskSize(java.lang.Number systemDiskSize) {
                this.systemDiskSize = systemDiskSize;
                return this;
            }

            /**
             * Sets the value of {@link QueuesProperty#getSystemDiskSize}
             * @param systemDiskSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskSize(com.aliyun.ros.cdk.core.IResolvable systemDiskSize) {
                this.systemDiskSize = systemDiskSize;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link QueuesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public QueuesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link QueuesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements QueuesProperty {
            private final java.lang.Object dataDisks;
            private final java.lang.Object enableAutoGrow;
            private final java.lang.Object enableAutoShrink;
            private final java.lang.Object hostNamePrefix;
            private final java.lang.Object hostNameSuffix;
            private final java.lang.Object instanceType;
            private final java.lang.Object instanceTypes;
            private final java.lang.Object maxNodesInQueue;
            private final java.lang.Object maxNodesPerCycle;
            private final java.lang.Object minNodesInQueue;
            private final java.lang.Object minNodesPerCycle;
            private final java.lang.Object queueImageId;
            private final java.lang.Object queueName;
            private final java.lang.Object spotPriceLimit;
            private final java.lang.Object spotStrategy;
            private final java.lang.Object systemDiskCategory;
            private final java.lang.Object systemDiskLevel;
            private final java.lang.Object systemDiskSize;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.dataDisks = software.amazon.jsii.Kernel.get(this, "dataDisks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enableAutoGrow = software.amazon.jsii.Kernel.get(this, "enableAutoGrow", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enableAutoShrink = software.amazon.jsii.Kernel.get(this, "enableAutoShrink", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.hostNamePrefix = software.amazon.jsii.Kernel.get(this, "hostNamePrefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.hostNameSuffix = software.amazon.jsii.Kernel.get(this, "hostNameSuffix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.instanceTypes = software.amazon.jsii.Kernel.get(this, "instanceTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.maxNodesInQueue = software.amazon.jsii.Kernel.get(this, "maxNodesInQueue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.maxNodesPerCycle = software.amazon.jsii.Kernel.get(this, "maxNodesPerCycle", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.minNodesInQueue = software.amazon.jsii.Kernel.get(this, "minNodesInQueue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.minNodesPerCycle = software.amazon.jsii.Kernel.get(this, "minNodesPerCycle", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.queueImageId = software.amazon.jsii.Kernel.get(this, "queueImageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.queueName = software.amazon.jsii.Kernel.get(this, "queueName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.spotPriceLimit = software.amazon.jsii.Kernel.get(this, "spotPriceLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.spotStrategy = software.amazon.jsii.Kernel.get(this, "spotStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.systemDiskCategory = software.amazon.jsii.Kernel.get(this, "systemDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.systemDiskLevel = software.amazon.jsii.Kernel.get(this, "systemDiskLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.systemDiskSize = software.amazon.jsii.Kernel.get(this, "systemDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.dataDisks = builder.dataDisks;
                this.enableAutoGrow = builder.enableAutoGrow;
                this.enableAutoShrink = builder.enableAutoShrink;
                this.hostNamePrefix = builder.hostNamePrefix;
                this.hostNameSuffix = builder.hostNameSuffix;
                this.instanceType = builder.instanceType;
                this.instanceTypes = builder.instanceTypes;
                this.maxNodesInQueue = builder.maxNodesInQueue;
                this.maxNodesPerCycle = builder.maxNodesPerCycle;
                this.minNodesInQueue = builder.minNodesInQueue;
                this.minNodesPerCycle = builder.minNodesPerCycle;
                this.queueImageId = builder.queueImageId;
                this.queueName = builder.queueName;
                this.spotPriceLimit = builder.spotPriceLimit;
                this.spotStrategy = builder.spotStrategy;
                this.systemDiskCategory = builder.systemDiskCategory;
                this.systemDiskLevel = builder.systemDiskLevel;
                this.systemDiskSize = builder.systemDiskSize;
            }

            @Override
            public final java.lang.Object getDataDisks() {
                return this.dataDisks;
            }

            @Override
            public final java.lang.Object getEnableAutoGrow() {
                return this.enableAutoGrow;
            }

            @Override
            public final java.lang.Object getEnableAutoShrink() {
                return this.enableAutoShrink;
            }

            @Override
            public final java.lang.Object getHostNamePrefix() {
                return this.hostNamePrefix;
            }

            @Override
            public final java.lang.Object getHostNameSuffix() {
                return this.hostNameSuffix;
            }

            @Override
            public final java.lang.Object getInstanceType() {
                return this.instanceType;
            }

            @Override
            public final java.lang.Object getInstanceTypes() {
                return this.instanceTypes;
            }

            @Override
            public final java.lang.Object getMaxNodesInQueue() {
                return this.maxNodesInQueue;
            }

            @Override
            public final java.lang.Object getMaxNodesPerCycle() {
                return this.maxNodesPerCycle;
            }

            @Override
            public final java.lang.Object getMinNodesInQueue() {
                return this.minNodesInQueue;
            }

            @Override
            public final java.lang.Object getMinNodesPerCycle() {
                return this.minNodesPerCycle;
            }

            @Override
            public final java.lang.Object getQueueImageId() {
                return this.queueImageId;
            }

            @Override
            public final java.lang.Object getQueueName() {
                return this.queueName;
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
            public final java.lang.Object getSystemDiskCategory() {
                return this.systemDiskCategory;
            }

            @Override
            public final java.lang.Object getSystemDiskLevel() {
                return this.systemDiskLevel;
            }

            @Override
            public final java.lang.Object getSystemDiskSize() {
                return this.systemDiskSize;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getDataDisks() != null) {
                    data.set("dataDisks", om.valueToTree(this.getDataDisks()));
                }
                if (this.getEnableAutoGrow() != null) {
                    data.set("enableAutoGrow", om.valueToTree(this.getEnableAutoGrow()));
                }
                if (this.getEnableAutoShrink() != null) {
                    data.set("enableAutoShrink", om.valueToTree(this.getEnableAutoShrink()));
                }
                if (this.getHostNamePrefix() != null) {
                    data.set("hostNamePrefix", om.valueToTree(this.getHostNamePrefix()));
                }
                if (this.getHostNameSuffix() != null) {
                    data.set("hostNameSuffix", om.valueToTree(this.getHostNameSuffix()));
                }
                if (this.getInstanceType() != null) {
                    data.set("instanceType", om.valueToTree(this.getInstanceType()));
                }
                if (this.getInstanceTypes() != null) {
                    data.set("instanceTypes", om.valueToTree(this.getInstanceTypes()));
                }
                if (this.getMaxNodesInQueue() != null) {
                    data.set("maxNodesInQueue", om.valueToTree(this.getMaxNodesInQueue()));
                }
                if (this.getMaxNodesPerCycle() != null) {
                    data.set("maxNodesPerCycle", om.valueToTree(this.getMaxNodesPerCycle()));
                }
                if (this.getMinNodesInQueue() != null) {
                    data.set("minNodesInQueue", om.valueToTree(this.getMinNodesInQueue()));
                }
                if (this.getMinNodesPerCycle() != null) {
                    data.set("minNodesPerCycle", om.valueToTree(this.getMinNodesPerCycle()));
                }
                if (this.getQueueImageId() != null) {
                    data.set("queueImageId", om.valueToTree(this.getQueueImageId()));
                }
                if (this.getQueueName() != null) {
                    data.set("queueName", om.valueToTree(this.getQueueName()));
                }
                if (this.getSpotPriceLimit() != null) {
                    data.set("spotPriceLimit", om.valueToTree(this.getSpotPriceLimit()));
                }
                if (this.getSpotStrategy() != null) {
                    data.set("spotStrategy", om.valueToTree(this.getSpotStrategy()));
                }
                if (this.getSystemDiskCategory() != null) {
                    data.set("systemDiskCategory", om.valueToTree(this.getSystemDiskCategory()));
                }
                if (this.getSystemDiskLevel() != null) {
                    data.set("systemDiskLevel", om.valueToTree(this.getSystemDiskLevel()));
                }
                if (this.getSystemDiskSize() != null) {
                    data.set("systemDiskSize", om.valueToTree(this.getSystemDiskSize()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ehpc.RosAutoScaleConfig.QueuesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                QueuesProperty.Jsii$Proxy that = (QueuesProperty.Jsii$Proxy) o;

                if (this.dataDisks != null ? !this.dataDisks.equals(that.dataDisks) : that.dataDisks != null) return false;
                if (this.enableAutoGrow != null ? !this.enableAutoGrow.equals(that.enableAutoGrow) : that.enableAutoGrow != null) return false;
                if (this.enableAutoShrink != null ? !this.enableAutoShrink.equals(that.enableAutoShrink) : that.enableAutoShrink != null) return false;
                if (this.hostNamePrefix != null ? !this.hostNamePrefix.equals(that.hostNamePrefix) : that.hostNamePrefix != null) return false;
                if (this.hostNameSuffix != null ? !this.hostNameSuffix.equals(that.hostNameSuffix) : that.hostNameSuffix != null) return false;
                if (this.instanceType != null ? !this.instanceType.equals(that.instanceType) : that.instanceType != null) return false;
                if (this.instanceTypes != null ? !this.instanceTypes.equals(that.instanceTypes) : that.instanceTypes != null) return false;
                if (this.maxNodesInQueue != null ? !this.maxNodesInQueue.equals(that.maxNodesInQueue) : that.maxNodesInQueue != null) return false;
                if (this.maxNodesPerCycle != null ? !this.maxNodesPerCycle.equals(that.maxNodesPerCycle) : that.maxNodesPerCycle != null) return false;
                if (this.minNodesInQueue != null ? !this.minNodesInQueue.equals(that.minNodesInQueue) : that.minNodesInQueue != null) return false;
                if (this.minNodesPerCycle != null ? !this.minNodesPerCycle.equals(that.minNodesPerCycle) : that.minNodesPerCycle != null) return false;
                if (this.queueImageId != null ? !this.queueImageId.equals(that.queueImageId) : that.queueImageId != null) return false;
                if (this.queueName != null ? !this.queueName.equals(that.queueName) : that.queueName != null) return false;
                if (this.spotPriceLimit != null ? !this.spotPriceLimit.equals(that.spotPriceLimit) : that.spotPriceLimit != null) return false;
                if (this.spotStrategy != null ? !this.spotStrategy.equals(that.spotStrategy) : that.spotStrategy != null) return false;
                if (this.systemDiskCategory != null ? !this.systemDiskCategory.equals(that.systemDiskCategory) : that.systemDiskCategory != null) return false;
                if (this.systemDiskLevel != null ? !this.systemDiskLevel.equals(that.systemDiskLevel) : that.systemDiskLevel != null) return false;
                return this.systemDiskSize != null ? this.systemDiskSize.equals(that.systemDiskSize) : that.systemDiskSize == null;
            }

            @Override
            public final int hashCode() {
                int result = this.dataDisks != null ? this.dataDisks.hashCode() : 0;
                result = 31 * result + (this.enableAutoGrow != null ? this.enableAutoGrow.hashCode() : 0);
                result = 31 * result + (this.enableAutoShrink != null ? this.enableAutoShrink.hashCode() : 0);
                result = 31 * result + (this.hostNamePrefix != null ? this.hostNamePrefix.hashCode() : 0);
                result = 31 * result + (this.hostNameSuffix != null ? this.hostNameSuffix.hashCode() : 0);
                result = 31 * result + (this.instanceType != null ? this.instanceType.hashCode() : 0);
                result = 31 * result + (this.instanceTypes != null ? this.instanceTypes.hashCode() : 0);
                result = 31 * result + (this.maxNodesInQueue != null ? this.maxNodesInQueue.hashCode() : 0);
                result = 31 * result + (this.maxNodesPerCycle != null ? this.maxNodesPerCycle.hashCode() : 0);
                result = 31 * result + (this.minNodesInQueue != null ? this.minNodesInQueue.hashCode() : 0);
                result = 31 * result + (this.minNodesPerCycle != null ? this.minNodesPerCycle.hashCode() : 0);
                result = 31 * result + (this.queueImageId != null ? this.queueImageId.hashCode() : 0);
                result = 31 * result + (this.queueName != null ? this.queueName.hashCode() : 0);
                result = 31 * result + (this.spotPriceLimit != null ? this.spotPriceLimit.hashCode() : 0);
                result = 31 * result + (this.spotStrategy != null ? this.spotStrategy.hashCode() : 0);
                result = 31 * result + (this.systemDiskCategory != null ? this.systemDiskCategory.hashCode() : 0);
                result = 31 * result + (this.systemDiskLevel != null ? this.systemDiskLevel.hashCode() : 0);
                result = 31 * result + (this.systemDiskSize != null ? this.systemDiskSize.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ehpc.RosAutoScaleConfig}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ehpc.RosAutoScaleConfig> {
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
        private final com.aliyun.ros.cdk.ehpc.RosAutoScaleConfigProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ehpc.RosAutoScaleConfigProps.Builder();
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
         * @param enableAutoGrow This parameter is required.
         */
        public Builder enableAutoGrow(final java.lang.Boolean enableAutoGrow) {
            this.props.enableAutoGrow(enableAutoGrow);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableAutoGrow This parameter is required.
         */
        public Builder enableAutoGrow(final com.aliyun.ros.cdk.core.IResolvable enableAutoGrow) {
            this.props.enableAutoGrow(enableAutoGrow);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableAutoShrink This parameter is required.
         */
        public Builder enableAutoShrink(final java.lang.Boolean enableAutoShrink) {
            this.props.enableAutoShrink(enableAutoShrink);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableAutoShrink This parameter is required.
         */
        public Builder enableAutoShrink(final com.aliyun.ros.cdk.core.IResolvable enableAutoShrink) {
            this.props.enableAutoShrink(enableAutoShrink);
            return this;
        }

        /**
         * @return {@code this}
         * @param excludeNodes This parameter is required.
         */
        public Builder excludeNodes(final java.lang.String excludeNodes) {
            this.props.excludeNodes(excludeNodes);
            return this;
        }
        /**
         * @return {@code this}
         * @param excludeNodes This parameter is required.
         */
        public Builder excludeNodes(final com.aliyun.ros.cdk.core.IResolvable excludeNodes) {
            this.props.excludeNodes(excludeNodes);
            return this;
        }

        /**
         * @return {@code this}
         * @param extraNodesGrowRatio This parameter is required.
         */
        public Builder extraNodesGrowRatio(final java.lang.Number extraNodesGrowRatio) {
            this.props.extraNodesGrowRatio(extraNodesGrowRatio);
            return this;
        }
        /**
         * @return {@code this}
         * @param extraNodesGrowRatio This parameter is required.
         */
        public Builder extraNodesGrowRatio(final com.aliyun.ros.cdk.core.IResolvable extraNodesGrowRatio) {
            this.props.extraNodesGrowRatio(extraNodesGrowRatio);
            return this;
        }

        /**
         * @return {@code this}
         * @param growIntervalInMinutes This parameter is required.
         */
        public Builder growIntervalInMinutes(final java.lang.Number growIntervalInMinutes) {
            this.props.growIntervalInMinutes(growIntervalInMinutes);
            return this;
        }
        /**
         * @return {@code this}
         * @param growIntervalInMinutes This parameter is required.
         */
        public Builder growIntervalInMinutes(final com.aliyun.ros.cdk.core.IResolvable growIntervalInMinutes) {
            this.props.growIntervalInMinutes(growIntervalInMinutes);
            return this;
        }

        /**
         * @return {@code this}
         * @param growRatio This parameter is required.
         */
        public Builder growRatio(final java.lang.Number growRatio) {
            this.props.growRatio(growRatio);
            return this;
        }
        /**
         * @return {@code this}
         * @param growRatio This parameter is required.
         */
        public Builder growRatio(final com.aliyun.ros.cdk.core.IResolvable growRatio) {
            this.props.growRatio(growRatio);
            return this;
        }

        /**
         * @return {@code this}
         * @param growTimeoutInMinutes This parameter is required.
         */
        public Builder growTimeoutInMinutes(final java.lang.Number growTimeoutInMinutes) {
            this.props.growTimeoutInMinutes(growTimeoutInMinutes);
            return this;
        }
        /**
         * @return {@code this}
         * @param growTimeoutInMinutes This parameter is required.
         */
        public Builder growTimeoutInMinutes(final com.aliyun.ros.cdk.core.IResolvable growTimeoutInMinutes) {
            this.props.growTimeoutInMinutes(growTimeoutInMinutes);
            return this;
        }

        /**
         * @return {@code this}
         * @param imageId This parameter is required.
         */
        public Builder imageId(final java.lang.String imageId) {
            this.props.imageId(imageId);
            return this;
        }
        /**
         * @return {@code this}
         * @param imageId This parameter is required.
         */
        public Builder imageId(final com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.props.imageId(imageId);
            return this;
        }

        /**
         * @return {@code this}
         * @param maxNodesInCluster This parameter is required.
         */
        public Builder maxNodesInCluster(final java.lang.Number maxNodesInCluster) {
            this.props.maxNodesInCluster(maxNodesInCluster);
            return this;
        }
        /**
         * @return {@code this}
         * @param maxNodesInCluster This parameter is required.
         */
        public Builder maxNodesInCluster(final com.aliyun.ros.cdk.core.IResolvable maxNodesInCluster) {
            this.props.maxNodesInCluster(maxNodesInCluster);
            return this;
        }

        /**
         * @return {@code this}
         * @param queues This parameter is required.
         */
        public Builder queues(final com.aliyun.ros.cdk.core.IResolvable queues) {
            this.props.queues(queues);
            return this;
        }
        /**
         * @return {@code this}
         * @param queues This parameter is required.
         */
        public Builder queues(final java.util.List<? extends java.lang.Object> queues) {
            this.props.queues(queues);
            return this;
        }

        /**
         * @return {@code this}
         * @param shrinkIdleTimes This parameter is required.
         */
        public Builder shrinkIdleTimes(final java.lang.Number shrinkIdleTimes) {
            this.props.shrinkIdleTimes(shrinkIdleTimes);
            return this;
        }
        /**
         * @return {@code this}
         * @param shrinkIdleTimes This parameter is required.
         */
        public Builder shrinkIdleTimes(final com.aliyun.ros.cdk.core.IResolvable shrinkIdleTimes) {
            this.props.shrinkIdleTimes(shrinkIdleTimes);
            return this;
        }

        /**
         * @return {@code this}
         * @param shrinkIntervalInMinutes This parameter is required.
         */
        public Builder shrinkIntervalInMinutes(final java.lang.Number shrinkIntervalInMinutes) {
            this.props.shrinkIntervalInMinutes(shrinkIntervalInMinutes);
            return this;
        }
        /**
         * @return {@code this}
         * @param shrinkIntervalInMinutes This parameter is required.
         */
        public Builder shrinkIntervalInMinutes(final com.aliyun.ros.cdk.core.IResolvable shrinkIntervalInMinutes) {
            this.props.shrinkIntervalInMinutes(shrinkIntervalInMinutes);
            return this;
        }

        /**
         * @return {@code this}
         * @param spotPriceLimit This parameter is required.
         */
        public Builder spotPriceLimit(final java.lang.Number spotPriceLimit) {
            this.props.spotPriceLimit(spotPriceLimit);
            return this;
        }
        /**
         * @return {@code this}
         * @param spotPriceLimit This parameter is required.
         */
        public Builder spotPriceLimit(final com.aliyun.ros.cdk.core.IResolvable spotPriceLimit) {
            this.props.spotPriceLimit(spotPriceLimit);
            return this;
        }

        /**
         * @return {@code this}
         * @param spotStrategy This parameter is required.
         */
        public Builder spotStrategy(final java.lang.String spotStrategy) {
            this.props.spotStrategy(spotStrategy);
            return this;
        }
        /**
         * @return {@code this}
         * @param spotStrategy This parameter is required.
         */
        public Builder spotStrategy(final com.aliyun.ros.cdk.core.IResolvable spotStrategy) {
            this.props.spotStrategy(spotStrategy);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ehpc.RosAutoScaleConfig}.
         */
        @Override
        public com.aliyun.ros.cdk.ehpc.RosAutoScaleConfig build() {
            return new com.aliyun.ros.cdk.ehpc.RosAutoScaleConfig(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
