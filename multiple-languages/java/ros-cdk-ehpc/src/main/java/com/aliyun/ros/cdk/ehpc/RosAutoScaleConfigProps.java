package com.aliyun.ros.cdk.ehpc;

/**
 * Properties for defining a <code>RosAutoScaleConfig</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-autoscaleconfig
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:06.157Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.RosAutoScaleConfigProps")
@software.amazon.jsii.Jsii.Proxy(RosAutoScaleConfigProps.Jsii$Proxy.class)
public interface RosAutoScaleConfigProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableAutoGrow() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableAutoShrink() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExcludeNodes() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExtraNodesGrowRatio() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGrowIntervalInMinutes() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGrowRatio() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGrowTimeoutInMinutes() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaxNodesInCluster() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQueues() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getShrinkIdleTimes() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getShrinkIntervalInMinutes() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpotPriceLimit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpotStrategy() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAutoScaleConfigProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAutoScaleConfigProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAutoScaleConfigProps> {
        java.lang.Object clusterId;
        java.lang.Object enableAutoGrow;
        java.lang.Object enableAutoShrink;
        java.lang.Object excludeNodes;
        java.lang.Object extraNodesGrowRatio;
        java.lang.Object growIntervalInMinutes;
        java.lang.Object growRatio;
        java.lang.Object growTimeoutInMinutes;
        java.lang.Object imageId;
        java.lang.Object maxNodesInCluster;
        java.lang.Object queues;
        java.lang.Object shrinkIdleTimes;
        java.lang.Object shrinkIntervalInMinutes;
        java.lang.Object spotPriceLimit;
        java.lang.Object spotStrategy;

        /**
         * Sets the value of {@link RosAutoScaleConfigProps#getClusterId}
         * @param clusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(java.lang.String clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoScaleConfigProps#getClusterId}
         * @param clusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoScaleConfigProps#getEnableAutoGrow}
         * @param enableAutoGrow the value to be set.
         * @return {@code this}
         */
        public Builder enableAutoGrow(java.lang.Boolean enableAutoGrow) {
            this.enableAutoGrow = enableAutoGrow;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoScaleConfigProps#getEnableAutoGrow}
         * @param enableAutoGrow the value to be set.
         * @return {@code this}
         */
        public Builder enableAutoGrow(com.aliyun.ros.cdk.core.IResolvable enableAutoGrow) {
            this.enableAutoGrow = enableAutoGrow;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoScaleConfigProps#getEnableAutoShrink}
         * @param enableAutoShrink the value to be set.
         * @return {@code this}
         */
        public Builder enableAutoShrink(java.lang.Boolean enableAutoShrink) {
            this.enableAutoShrink = enableAutoShrink;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoScaleConfigProps#getEnableAutoShrink}
         * @param enableAutoShrink the value to be set.
         * @return {@code this}
         */
        public Builder enableAutoShrink(com.aliyun.ros.cdk.core.IResolvable enableAutoShrink) {
            this.enableAutoShrink = enableAutoShrink;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoScaleConfigProps#getExcludeNodes}
         * @param excludeNodes the value to be set.
         * @return {@code this}
         */
        public Builder excludeNodes(java.lang.String excludeNodes) {
            this.excludeNodes = excludeNodes;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoScaleConfigProps#getExcludeNodes}
         * @param excludeNodes the value to be set.
         * @return {@code this}
         */
        public Builder excludeNodes(com.aliyun.ros.cdk.core.IResolvable excludeNodes) {
            this.excludeNodes = excludeNodes;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoScaleConfigProps#getExtraNodesGrowRatio}
         * @param extraNodesGrowRatio the value to be set.
         * @return {@code this}
         */
        public Builder extraNodesGrowRatio(java.lang.Number extraNodesGrowRatio) {
            this.extraNodesGrowRatio = extraNodesGrowRatio;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoScaleConfigProps#getExtraNodesGrowRatio}
         * @param extraNodesGrowRatio the value to be set.
         * @return {@code this}
         */
        public Builder extraNodesGrowRatio(com.aliyun.ros.cdk.core.IResolvable extraNodesGrowRatio) {
            this.extraNodesGrowRatio = extraNodesGrowRatio;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoScaleConfigProps#getGrowIntervalInMinutes}
         * @param growIntervalInMinutes the value to be set.
         * @return {@code this}
         */
        public Builder growIntervalInMinutes(java.lang.Number growIntervalInMinutes) {
            this.growIntervalInMinutes = growIntervalInMinutes;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoScaleConfigProps#getGrowIntervalInMinutes}
         * @param growIntervalInMinutes the value to be set.
         * @return {@code this}
         */
        public Builder growIntervalInMinutes(com.aliyun.ros.cdk.core.IResolvable growIntervalInMinutes) {
            this.growIntervalInMinutes = growIntervalInMinutes;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoScaleConfigProps#getGrowRatio}
         * @param growRatio the value to be set.
         * @return {@code this}
         */
        public Builder growRatio(java.lang.Number growRatio) {
            this.growRatio = growRatio;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoScaleConfigProps#getGrowRatio}
         * @param growRatio the value to be set.
         * @return {@code this}
         */
        public Builder growRatio(com.aliyun.ros.cdk.core.IResolvable growRatio) {
            this.growRatio = growRatio;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoScaleConfigProps#getGrowTimeoutInMinutes}
         * @param growTimeoutInMinutes the value to be set.
         * @return {@code this}
         */
        public Builder growTimeoutInMinutes(java.lang.Number growTimeoutInMinutes) {
            this.growTimeoutInMinutes = growTimeoutInMinutes;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoScaleConfigProps#getGrowTimeoutInMinutes}
         * @param growTimeoutInMinutes the value to be set.
         * @return {@code this}
         */
        public Builder growTimeoutInMinutes(com.aliyun.ros.cdk.core.IResolvable growTimeoutInMinutes) {
            this.growTimeoutInMinutes = growTimeoutInMinutes;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoScaleConfigProps#getImageId}
         * @param imageId the value to be set.
         * @return {@code this}
         */
        public Builder imageId(java.lang.String imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoScaleConfigProps#getImageId}
         * @param imageId the value to be set.
         * @return {@code this}
         */
        public Builder imageId(com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoScaleConfigProps#getMaxNodesInCluster}
         * @param maxNodesInCluster the value to be set.
         * @return {@code this}
         */
        public Builder maxNodesInCluster(java.lang.Number maxNodesInCluster) {
            this.maxNodesInCluster = maxNodesInCluster;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoScaleConfigProps#getMaxNodesInCluster}
         * @param maxNodesInCluster the value to be set.
         * @return {@code this}
         */
        public Builder maxNodesInCluster(com.aliyun.ros.cdk.core.IResolvable maxNodesInCluster) {
            this.maxNodesInCluster = maxNodesInCluster;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoScaleConfigProps#getQueues}
         * @param queues the value to be set.
         * @return {@code this}
         */
        public Builder queues(com.aliyun.ros.cdk.core.IResolvable queues) {
            this.queues = queues;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoScaleConfigProps#getQueues}
         * @param queues the value to be set.
         * @return {@code this}
         */
        public Builder queues(java.util.List<? extends java.lang.Object> queues) {
            this.queues = queues;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoScaleConfigProps#getShrinkIdleTimes}
         * @param shrinkIdleTimes the value to be set.
         * @return {@code this}
         */
        public Builder shrinkIdleTimes(java.lang.Number shrinkIdleTimes) {
            this.shrinkIdleTimes = shrinkIdleTimes;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoScaleConfigProps#getShrinkIdleTimes}
         * @param shrinkIdleTimes the value to be set.
         * @return {@code this}
         */
        public Builder shrinkIdleTimes(com.aliyun.ros.cdk.core.IResolvable shrinkIdleTimes) {
            this.shrinkIdleTimes = shrinkIdleTimes;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoScaleConfigProps#getShrinkIntervalInMinutes}
         * @param shrinkIntervalInMinutes the value to be set.
         * @return {@code this}
         */
        public Builder shrinkIntervalInMinutes(java.lang.Number shrinkIntervalInMinutes) {
            this.shrinkIntervalInMinutes = shrinkIntervalInMinutes;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoScaleConfigProps#getShrinkIntervalInMinutes}
         * @param shrinkIntervalInMinutes the value to be set.
         * @return {@code this}
         */
        public Builder shrinkIntervalInMinutes(com.aliyun.ros.cdk.core.IResolvable shrinkIntervalInMinutes) {
            this.shrinkIntervalInMinutes = shrinkIntervalInMinutes;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoScaleConfigProps#getSpotPriceLimit}
         * @param spotPriceLimit the value to be set.
         * @return {@code this}
         */
        public Builder spotPriceLimit(java.lang.Number spotPriceLimit) {
            this.spotPriceLimit = spotPriceLimit;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoScaleConfigProps#getSpotPriceLimit}
         * @param spotPriceLimit the value to be set.
         * @return {@code this}
         */
        public Builder spotPriceLimit(com.aliyun.ros.cdk.core.IResolvable spotPriceLimit) {
            this.spotPriceLimit = spotPriceLimit;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoScaleConfigProps#getSpotStrategy}
         * @param spotStrategy the value to be set.
         * @return {@code this}
         */
        public Builder spotStrategy(java.lang.String spotStrategy) {
            this.spotStrategy = spotStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoScaleConfigProps#getSpotStrategy}
         * @param spotStrategy the value to be set.
         * @return {@code this}
         */
        public Builder spotStrategy(com.aliyun.ros.cdk.core.IResolvable spotStrategy) {
            this.spotStrategy = spotStrategy;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAutoScaleConfigProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAutoScaleConfigProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAutoScaleConfigProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAutoScaleConfigProps {
        private final java.lang.Object clusterId;
        private final java.lang.Object enableAutoGrow;
        private final java.lang.Object enableAutoShrink;
        private final java.lang.Object excludeNodes;
        private final java.lang.Object extraNodesGrowRatio;
        private final java.lang.Object growIntervalInMinutes;
        private final java.lang.Object growRatio;
        private final java.lang.Object growTimeoutInMinutes;
        private final java.lang.Object imageId;
        private final java.lang.Object maxNodesInCluster;
        private final java.lang.Object queues;
        private final java.lang.Object shrinkIdleTimes;
        private final java.lang.Object shrinkIntervalInMinutes;
        private final java.lang.Object spotPriceLimit;
        private final java.lang.Object spotStrategy;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clusterId = software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableAutoGrow = software.amazon.jsii.Kernel.get(this, "enableAutoGrow", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableAutoShrink = software.amazon.jsii.Kernel.get(this, "enableAutoShrink", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.excludeNodes = software.amazon.jsii.Kernel.get(this, "excludeNodes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.extraNodesGrowRatio = software.amazon.jsii.Kernel.get(this, "extraNodesGrowRatio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.growIntervalInMinutes = software.amazon.jsii.Kernel.get(this, "growIntervalInMinutes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.growRatio = software.amazon.jsii.Kernel.get(this, "growRatio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.growTimeoutInMinutes = software.amazon.jsii.Kernel.get(this, "growTimeoutInMinutes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageId = software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maxNodesInCluster = software.amazon.jsii.Kernel.get(this, "maxNodesInCluster", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.queues = software.amazon.jsii.Kernel.get(this, "queues", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.shrinkIdleTimes = software.amazon.jsii.Kernel.get(this, "shrinkIdleTimes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.shrinkIntervalInMinutes = software.amazon.jsii.Kernel.get(this, "shrinkIntervalInMinutes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spotPriceLimit = software.amazon.jsii.Kernel.get(this, "spotPriceLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spotStrategy = software.amazon.jsii.Kernel.get(this, "spotStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clusterId = java.util.Objects.requireNonNull(builder.clusterId, "clusterId is required");
            this.enableAutoGrow = builder.enableAutoGrow;
            this.enableAutoShrink = builder.enableAutoShrink;
            this.excludeNodes = builder.excludeNodes;
            this.extraNodesGrowRatio = builder.extraNodesGrowRatio;
            this.growIntervalInMinutes = builder.growIntervalInMinutes;
            this.growRatio = builder.growRatio;
            this.growTimeoutInMinutes = builder.growTimeoutInMinutes;
            this.imageId = builder.imageId;
            this.maxNodesInCluster = builder.maxNodesInCluster;
            this.queues = builder.queues;
            this.shrinkIdleTimes = builder.shrinkIdleTimes;
            this.shrinkIntervalInMinutes = builder.shrinkIntervalInMinutes;
            this.spotPriceLimit = builder.spotPriceLimit;
            this.spotStrategy = builder.spotStrategy;
        }

        @Override
        public final java.lang.Object getClusterId() {
            return this.clusterId;
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
        public final java.lang.Object getExcludeNodes() {
            return this.excludeNodes;
        }

        @Override
        public final java.lang.Object getExtraNodesGrowRatio() {
            return this.extraNodesGrowRatio;
        }

        @Override
        public final java.lang.Object getGrowIntervalInMinutes() {
            return this.growIntervalInMinutes;
        }

        @Override
        public final java.lang.Object getGrowRatio() {
            return this.growRatio;
        }

        @Override
        public final java.lang.Object getGrowTimeoutInMinutes() {
            return this.growTimeoutInMinutes;
        }

        @Override
        public final java.lang.Object getImageId() {
            return this.imageId;
        }

        @Override
        public final java.lang.Object getMaxNodesInCluster() {
            return this.maxNodesInCluster;
        }

        @Override
        public final java.lang.Object getQueues() {
            return this.queues;
        }

        @Override
        public final java.lang.Object getShrinkIdleTimes() {
            return this.shrinkIdleTimes;
        }

        @Override
        public final java.lang.Object getShrinkIntervalInMinutes() {
            return this.shrinkIntervalInMinutes;
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

            data.set("clusterId", om.valueToTree(this.getClusterId()));
            if (this.getEnableAutoGrow() != null) {
                data.set("enableAutoGrow", om.valueToTree(this.getEnableAutoGrow()));
            }
            if (this.getEnableAutoShrink() != null) {
                data.set("enableAutoShrink", om.valueToTree(this.getEnableAutoShrink()));
            }
            if (this.getExcludeNodes() != null) {
                data.set("excludeNodes", om.valueToTree(this.getExcludeNodes()));
            }
            if (this.getExtraNodesGrowRatio() != null) {
                data.set("extraNodesGrowRatio", om.valueToTree(this.getExtraNodesGrowRatio()));
            }
            if (this.getGrowIntervalInMinutes() != null) {
                data.set("growIntervalInMinutes", om.valueToTree(this.getGrowIntervalInMinutes()));
            }
            if (this.getGrowRatio() != null) {
                data.set("growRatio", om.valueToTree(this.getGrowRatio()));
            }
            if (this.getGrowTimeoutInMinutes() != null) {
                data.set("growTimeoutInMinutes", om.valueToTree(this.getGrowTimeoutInMinutes()));
            }
            if (this.getImageId() != null) {
                data.set("imageId", om.valueToTree(this.getImageId()));
            }
            if (this.getMaxNodesInCluster() != null) {
                data.set("maxNodesInCluster", om.valueToTree(this.getMaxNodesInCluster()));
            }
            if (this.getQueues() != null) {
                data.set("queues", om.valueToTree(this.getQueues()));
            }
            if (this.getShrinkIdleTimes() != null) {
                data.set("shrinkIdleTimes", om.valueToTree(this.getShrinkIdleTimes()));
            }
            if (this.getShrinkIntervalInMinutes() != null) {
                data.set("shrinkIntervalInMinutes", om.valueToTree(this.getShrinkIntervalInMinutes()));
            }
            if (this.getSpotPriceLimit() != null) {
                data.set("spotPriceLimit", om.valueToTree(this.getSpotPriceLimit()));
            }
            if (this.getSpotStrategy() != null) {
                data.set("spotStrategy", om.valueToTree(this.getSpotStrategy()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ehpc.RosAutoScaleConfigProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAutoScaleConfigProps.Jsii$Proxy that = (RosAutoScaleConfigProps.Jsii$Proxy) o;

            if (!clusterId.equals(that.clusterId)) return false;
            if (this.enableAutoGrow != null ? !this.enableAutoGrow.equals(that.enableAutoGrow) : that.enableAutoGrow != null) return false;
            if (this.enableAutoShrink != null ? !this.enableAutoShrink.equals(that.enableAutoShrink) : that.enableAutoShrink != null) return false;
            if (this.excludeNodes != null ? !this.excludeNodes.equals(that.excludeNodes) : that.excludeNodes != null) return false;
            if (this.extraNodesGrowRatio != null ? !this.extraNodesGrowRatio.equals(that.extraNodesGrowRatio) : that.extraNodesGrowRatio != null) return false;
            if (this.growIntervalInMinutes != null ? !this.growIntervalInMinutes.equals(that.growIntervalInMinutes) : that.growIntervalInMinutes != null) return false;
            if (this.growRatio != null ? !this.growRatio.equals(that.growRatio) : that.growRatio != null) return false;
            if (this.growTimeoutInMinutes != null ? !this.growTimeoutInMinutes.equals(that.growTimeoutInMinutes) : that.growTimeoutInMinutes != null) return false;
            if (this.imageId != null ? !this.imageId.equals(that.imageId) : that.imageId != null) return false;
            if (this.maxNodesInCluster != null ? !this.maxNodesInCluster.equals(that.maxNodesInCluster) : that.maxNodesInCluster != null) return false;
            if (this.queues != null ? !this.queues.equals(that.queues) : that.queues != null) return false;
            if (this.shrinkIdleTimes != null ? !this.shrinkIdleTimes.equals(that.shrinkIdleTimes) : that.shrinkIdleTimes != null) return false;
            if (this.shrinkIntervalInMinutes != null ? !this.shrinkIntervalInMinutes.equals(that.shrinkIntervalInMinutes) : that.shrinkIntervalInMinutes != null) return false;
            if (this.spotPriceLimit != null ? !this.spotPriceLimit.equals(that.spotPriceLimit) : that.spotPriceLimit != null) return false;
            return this.spotStrategy != null ? this.spotStrategy.equals(that.spotStrategy) : that.spotStrategy == null;
        }

        @Override
        public final int hashCode() {
            int result = this.clusterId.hashCode();
            result = 31 * result + (this.enableAutoGrow != null ? this.enableAutoGrow.hashCode() : 0);
            result = 31 * result + (this.enableAutoShrink != null ? this.enableAutoShrink.hashCode() : 0);
            result = 31 * result + (this.excludeNodes != null ? this.excludeNodes.hashCode() : 0);
            result = 31 * result + (this.extraNodesGrowRatio != null ? this.extraNodesGrowRatio.hashCode() : 0);
            result = 31 * result + (this.growIntervalInMinutes != null ? this.growIntervalInMinutes.hashCode() : 0);
            result = 31 * result + (this.growRatio != null ? this.growRatio.hashCode() : 0);
            result = 31 * result + (this.growTimeoutInMinutes != null ? this.growTimeoutInMinutes.hashCode() : 0);
            result = 31 * result + (this.imageId != null ? this.imageId.hashCode() : 0);
            result = 31 * result + (this.maxNodesInCluster != null ? this.maxNodesInCluster.hashCode() : 0);
            result = 31 * result + (this.queues != null ? this.queues.hashCode() : 0);
            result = 31 * result + (this.shrinkIdleTimes != null ? this.shrinkIdleTimes.hashCode() : 0);
            result = 31 * result + (this.shrinkIntervalInMinutes != null ? this.shrinkIntervalInMinutes.hashCode() : 0);
            result = 31 * result + (this.spotPriceLimit != null ? this.spotPriceLimit.hashCode() : 0);
            result = 31 * result + (this.spotStrategy != null ? this.spotStrategy.hashCode() : 0);
            return result;
        }
    }
}
