package com.aliyun.ros.cdk.ehpc;

/**
 * Properties for defining a <code>AutoScaleConfig</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-autoscaleconfig
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:39.392Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.AutoScaleConfigProps")
@software.amazon.jsii.Jsii.Proxy(AutoScaleConfigProps.Jsii$Proxy.class)
public interface AutoScaleConfigProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property clusterId: Cluster ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterId();

    /**
     * Property enableAutoGrow: Specifies whether to enable auto scale-out.
     * <p>
     * Valid values:
     * true: enables auto scale-out.
     * false: disables auto scale-out
     * Default value: false
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableAutoGrow() {
        return null;
    }

    /**
     * Property enableAutoShrink: Specifies whether to enable auto scale-in.
     * <p>
     * Valid values:
     * true: enables auto scale-in.
     * false: disables auto scale-in
     * Default value: false
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableAutoShrink() {
        return null;
    }

    /**
     * Property excludeNodes: The compute nodes that are excluded from the list of auto scaling nodes.
     * <p>
     * Separate multiple compute nodes with commas (,). If you want to retain a compute node, you can set the node as an exceptional node. Then, the node is not released if it is idle.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExcludeNodes() {
        return null;
    }

    /**
     * Property extraNodesGrowRatio: The percentage of extra compute nodes.
     * <p>
     * Default value: 0
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExtraNodesGrowRatio() {
        return null;
    }

    /**
     * Property growIntervalInMinutes: The interval between two consecutive rounds of scale-out.
     * <p>
     * Unit: minutes.
     * Default value: 2
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGrowIntervalInMinutes() {
        return null;
    }

    /**
     * Property growRatio: The percentage of each round of scale-out.
     * <p>
     * Default value: 100
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGrowRatio() {
        return null;
    }

    /**
     * Property growTimeoutInMinutes: The scale-out timeout period.
     * <p>
     * Unit: minutes.
     * Default value: 20
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGrowTimeoutInMinutes() {
        return null;
    }

    /**
     * Property imageId: The ID of the image.
     * <p>
     * If you set both Queues.N.QueueImageId and ImageId, Queues.N.QueueImageId prevails.
     * If you set Queues.N.QueueImageId or ImageId, the parameter that you set takes effect.
     * If you leave both Queues.N.QueueImageId and ImageId empty, the image that was specified when you created the cluster or the last time when you scaled out the cluster is used by default.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageId() {
        return null;
    }

    /**
     * Property maxNodesInCluster: The maximum number of compute nodes that can be added in the cluster.
     * <p>
     * Default value: 100
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaxNodesInCluster() {
        return null;
    }

    /**
     * Property queues:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQueues() {
        return null;
    }

    /**
     * Property shrinkIdleTimes: The number of consecutive times that a compute node is idle during the resource scale-in check.
     * <p>
     * Default value: 3
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getShrinkIdleTimes() {
        return null;
    }

    /**
     * Property shrinkIntervalInMinutes: SThe interval between two consecutive rounds of scale-in.
     * <p>
     * Unit: minutes.
     * Default value: 2
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getShrinkIntervalInMinutes() {
        return null;
    }

    /**
     * Property spotPriceLimit: The maximum hourly price of the compute nodes.
     * <p>
     * The value can be accurate to three decimal places. The parameter takes effect only when SpotStrategy is set to SpotWithPriceLimit.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpotPriceLimit() {
        return null;
    }

    /**
     * Property spotStrategy: The preemption policy of the compute nodes.
     * <p>
     * Valid values:
     * NoSpot: The compute nodes are pay-as-you-go instances.
     * SpotWithPriceLimit: The compute nodes are preemptible instances that have a user-defined maximum hourly price.
     * SpotAsPriceGo: The compute nodes are preemptible instances for which the market price at the time of purchase is used as the bid price.
     * Default value: NoSpot
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpotStrategy() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AutoScaleConfigProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AutoScaleConfigProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AutoScaleConfigProps> {
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
         * Sets the value of {@link AutoScaleConfigProps#getClusterId}
         * @param clusterId Property clusterId: Cluster ID. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(java.lang.String clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link AutoScaleConfigProps#getClusterId}
         * @param clusterId Property clusterId: Cluster ID. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link AutoScaleConfigProps#getEnableAutoGrow}
         * @param enableAutoGrow Property enableAutoGrow: Specifies whether to enable auto scale-out.
         *                       Valid values:
         *                       true: enables auto scale-out.
         *                       false: disables auto scale-out
         *                       Default value: false
         * @return {@code this}
         */
        public Builder enableAutoGrow(java.lang.Boolean enableAutoGrow) {
            this.enableAutoGrow = enableAutoGrow;
            return this;
        }

        /**
         * Sets the value of {@link AutoScaleConfigProps#getEnableAutoGrow}
         * @param enableAutoGrow Property enableAutoGrow: Specifies whether to enable auto scale-out.
         *                       Valid values:
         *                       true: enables auto scale-out.
         *                       false: disables auto scale-out
         *                       Default value: false
         * @return {@code this}
         */
        public Builder enableAutoGrow(com.aliyun.ros.cdk.core.IResolvable enableAutoGrow) {
            this.enableAutoGrow = enableAutoGrow;
            return this;
        }

        /**
         * Sets the value of {@link AutoScaleConfigProps#getEnableAutoShrink}
         * @param enableAutoShrink Property enableAutoShrink: Specifies whether to enable auto scale-in.
         *                         Valid values:
         *                         true: enables auto scale-in.
         *                         false: disables auto scale-in
         *                         Default value: false
         * @return {@code this}
         */
        public Builder enableAutoShrink(java.lang.Boolean enableAutoShrink) {
            this.enableAutoShrink = enableAutoShrink;
            return this;
        }

        /**
         * Sets the value of {@link AutoScaleConfigProps#getEnableAutoShrink}
         * @param enableAutoShrink Property enableAutoShrink: Specifies whether to enable auto scale-in.
         *                         Valid values:
         *                         true: enables auto scale-in.
         *                         false: disables auto scale-in
         *                         Default value: false
         * @return {@code this}
         */
        public Builder enableAutoShrink(com.aliyun.ros.cdk.core.IResolvable enableAutoShrink) {
            this.enableAutoShrink = enableAutoShrink;
            return this;
        }

        /**
         * Sets the value of {@link AutoScaleConfigProps#getExcludeNodes}
         * @param excludeNodes Property excludeNodes: The compute nodes that are excluded from the list of auto scaling nodes.
         *                     Separate multiple compute nodes with commas (,). If you want to retain a compute node, you can set the node as an exceptional node. Then, the node is not released if it is idle.
         * @return {@code this}
         */
        public Builder excludeNodes(java.lang.String excludeNodes) {
            this.excludeNodes = excludeNodes;
            return this;
        }

        /**
         * Sets the value of {@link AutoScaleConfigProps#getExcludeNodes}
         * @param excludeNodes Property excludeNodes: The compute nodes that are excluded from the list of auto scaling nodes.
         *                     Separate multiple compute nodes with commas (,). If you want to retain a compute node, you can set the node as an exceptional node. Then, the node is not released if it is idle.
         * @return {@code this}
         */
        public Builder excludeNodes(com.aliyun.ros.cdk.core.IResolvable excludeNodes) {
            this.excludeNodes = excludeNodes;
            return this;
        }

        /**
         * Sets the value of {@link AutoScaleConfigProps#getExtraNodesGrowRatio}
         * @param extraNodesGrowRatio Property extraNodesGrowRatio: The percentage of extra compute nodes.
         *                            Default value: 0
         * @return {@code this}
         */
        public Builder extraNodesGrowRatio(java.lang.Number extraNodesGrowRatio) {
            this.extraNodesGrowRatio = extraNodesGrowRatio;
            return this;
        }

        /**
         * Sets the value of {@link AutoScaleConfigProps#getExtraNodesGrowRatio}
         * @param extraNodesGrowRatio Property extraNodesGrowRatio: The percentage of extra compute nodes.
         *                            Default value: 0
         * @return {@code this}
         */
        public Builder extraNodesGrowRatio(com.aliyun.ros.cdk.core.IResolvable extraNodesGrowRatio) {
            this.extraNodesGrowRatio = extraNodesGrowRatio;
            return this;
        }

        /**
         * Sets the value of {@link AutoScaleConfigProps#getGrowIntervalInMinutes}
         * @param growIntervalInMinutes Property growIntervalInMinutes: The interval between two consecutive rounds of scale-out.
         *                              Unit: minutes.
         *                              Default value: 2
         * @return {@code this}
         */
        public Builder growIntervalInMinutes(java.lang.Number growIntervalInMinutes) {
            this.growIntervalInMinutes = growIntervalInMinutes;
            return this;
        }

        /**
         * Sets the value of {@link AutoScaleConfigProps#getGrowIntervalInMinutes}
         * @param growIntervalInMinutes Property growIntervalInMinutes: The interval between two consecutive rounds of scale-out.
         *                              Unit: minutes.
         *                              Default value: 2
         * @return {@code this}
         */
        public Builder growIntervalInMinutes(com.aliyun.ros.cdk.core.IResolvable growIntervalInMinutes) {
            this.growIntervalInMinutes = growIntervalInMinutes;
            return this;
        }

        /**
         * Sets the value of {@link AutoScaleConfigProps#getGrowRatio}
         * @param growRatio Property growRatio: The percentage of each round of scale-out.
         *                  Default value: 100
         * @return {@code this}
         */
        public Builder growRatio(java.lang.Number growRatio) {
            this.growRatio = growRatio;
            return this;
        }

        /**
         * Sets the value of {@link AutoScaleConfigProps#getGrowRatio}
         * @param growRatio Property growRatio: The percentage of each round of scale-out.
         *                  Default value: 100
         * @return {@code this}
         */
        public Builder growRatio(com.aliyun.ros.cdk.core.IResolvable growRatio) {
            this.growRatio = growRatio;
            return this;
        }

        /**
         * Sets the value of {@link AutoScaleConfigProps#getGrowTimeoutInMinutes}
         * @param growTimeoutInMinutes Property growTimeoutInMinutes: The scale-out timeout period.
         *                             Unit: minutes.
         *                             Default value: 20
         * @return {@code this}
         */
        public Builder growTimeoutInMinutes(java.lang.Number growTimeoutInMinutes) {
            this.growTimeoutInMinutes = growTimeoutInMinutes;
            return this;
        }

        /**
         * Sets the value of {@link AutoScaleConfigProps#getGrowTimeoutInMinutes}
         * @param growTimeoutInMinutes Property growTimeoutInMinutes: The scale-out timeout period.
         *                             Unit: minutes.
         *                             Default value: 20
         * @return {@code this}
         */
        public Builder growTimeoutInMinutes(com.aliyun.ros.cdk.core.IResolvable growTimeoutInMinutes) {
            this.growTimeoutInMinutes = growTimeoutInMinutes;
            return this;
        }

        /**
         * Sets the value of {@link AutoScaleConfigProps#getImageId}
         * @param imageId Property imageId: The ID of the image.
         *                If you set both Queues.N.QueueImageId and ImageId, Queues.N.QueueImageId prevails.
         *                If you set Queues.N.QueueImageId or ImageId, the parameter that you set takes effect.
         *                If you leave both Queues.N.QueueImageId and ImageId empty, the image that was specified when you created the cluster or the last time when you scaled out the cluster is used by default.
         * @return {@code this}
         */
        public Builder imageId(java.lang.String imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link AutoScaleConfigProps#getImageId}
         * @param imageId Property imageId: The ID of the image.
         *                If you set both Queues.N.QueueImageId and ImageId, Queues.N.QueueImageId prevails.
         *                If you set Queues.N.QueueImageId or ImageId, the parameter that you set takes effect.
         *                If you leave both Queues.N.QueueImageId and ImageId empty, the image that was specified when you created the cluster or the last time when you scaled out the cluster is used by default.
         * @return {@code this}
         */
        public Builder imageId(com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link AutoScaleConfigProps#getMaxNodesInCluster}
         * @param maxNodesInCluster Property maxNodesInCluster: The maximum number of compute nodes that can be added in the cluster.
         *                          Default value: 100
         * @return {@code this}
         */
        public Builder maxNodesInCluster(java.lang.Number maxNodesInCluster) {
            this.maxNodesInCluster = maxNodesInCluster;
            return this;
        }

        /**
         * Sets the value of {@link AutoScaleConfigProps#getMaxNodesInCluster}
         * @param maxNodesInCluster Property maxNodesInCluster: The maximum number of compute nodes that can be added in the cluster.
         *                          Default value: 100
         * @return {@code this}
         */
        public Builder maxNodesInCluster(com.aliyun.ros.cdk.core.IResolvable maxNodesInCluster) {
            this.maxNodesInCluster = maxNodesInCluster;
            return this;
        }

        /**
         * Sets the value of {@link AutoScaleConfigProps#getQueues}
         * @param queues Property queues:.
         * @return {@code this}
         */
        public Builder queues(com.aliyun.ros.cdk.core.IResolvable queues) {
            this.queues = queues;
            return this;
        }

        /**
         * Sets the value of {@link AutoScaleConfigProps#getQueues}
         * @param queues Property queues:.
         * @return {@code this}
         */
        public Builder queues(java.util.List<? extends java.lang.Object> queues) {
            this.queues = queues;
            return this;
        }

        /**
         * Sets the value of {@link AutoScaleConfigProps#getShrinkIdleTimes}
         * @param shrinkIdleTimes Property shrinkIdleTimes: The number of consecutive times that a compute node is idle during the resource scale-in check.
         *                        Default value: 3
         * @return {@code this}
         */
        public Builder shrinkIdleTimes(java.lang.Number shrinkIdleTimes) {
            this.shrinkIdleTimes = shrinkIdleTimes;
            return this;
        }

        /**
         * Sets the value of {@link AutoScaleConfigProps#getShrinkIdleTimes}
         * @param shrinkIdleTimes Property shrinkIdleTimes: The number of consecutive times that a compute node is idle during the resource scale-in check.
         *                        Default value: 3
         * @return {@code this}
         */
        public Builder shrinkIdleTimes(com.aliyun.ros.cdk.core.IResolvable shrinkIdleTimes) {
            this.shrinkIdleTimes = shrinkIdleTimes;
            return this;
        }

        /**
         * Sets the value of {@link AutoScaleConfigProps#getShrinkIntervalInMinutes}
         * @param shrinkIntervalInMinutes Property shrinkIntervalInMinutes: SThe interval between two consecutive rounds of scale-in.
         *                                Unit: minutes.
         *                                Default value: 2
         * @return {@code this}
         */
        public Builder shrinkIntervalInMinutes(java.lang.Number shrinkIntervalInMinutes) {
            this.shrinkIntervalInMinutes = shrinkIntervalInMinutes;
            return this;
        }

        /**
         * Sets the value of {@link AutoScaleConfigProps#getShrinkIntervalInMinutes}
         * @param shrinkIntervalInMinutes Property shrinkIntervalInMinutes: SThe interval between two consecutive rounds of scale-in.
         *                                Unit: minutes.
         *                                Default value: 2
         * @return {@code this}
         */
        public Builder shrinkIntervalInMinutes(com.aliyun.ros.cdk.core.IResolvable shrinkIntervalInMinutes) {
            this.shrinkIntervalInMinutes = shrinkIntervalInMinutes;
            return this;
        }

        /**
         * Sets the value of {@link AutoScaleConfigProps#getSpotPriceLimit}
         * @param spotPriceLimit Property spotPriceLimit: The maximum hourly price of the compute nodes.
         *                       The value can be accurate to three decimal places. The parameter takes effect only when SpotStrategy is set to SpotWithPriceLimit.
         * @return {@code this}
         */
        public Builder spotPriceLimit(java.lang.Number spotPriceLimit) {
            this.spotPriceLimit = spotPriceLimit;
            return this;
        }

        /**
         * Sets the value of {@link AutoScaleConfigProps#getSpotPriceLimit}
         * @param spotPriceLimit Property spotPriceLimit: The maximum hourly price of the compute nodes.
         *                       The value can be accurate to three decimal places. The parameter takes effect only when SpotStrategy is set to SpotWithPriceLimit.
         * @return {@code this}
         */
        public Builder spotPriceLimit(com.aliyun.ros.cdk.core.IResolvable spotPriceLimit) {
            this.spotPriceLimit = spotPriceLimit;
            return this;
        }

        /**
         * Sets the value of {@link AutoScaleConfigProps#getSpotStrategy}
         * @param spotStrategy Property spotStrategy: The preemption policy of the compute nodes.
         *                     Valid values:
         *                     NoSpot: The compute nodes are pay-as-you-go instances.
         *                     SpotWithPriceLimit: The compute nodes are preemptible instances that have a user-defined maximum hourly price.
         *                     SpotAsPriceGo: The compute nodes are preemptible instances for which the market price at the time of purchase is used as the bid price.
         *                     Default value: NoSpot
         * @return {@code this}
         */
        public Builder spotStrategy(java.lang.String spotStrategy) {
            this.spotStrategy = spotStrategy;
            return this;
        }

        /**
         * Sets the value of {@link AutoScaleConfigProps#getSpotStrategy}
         * @param spotStrategy Property spotStrategy: The preemption policy of the compute nodes.
         *                     Valid values:
         *                     NoSpot: The compute nodes are pay-as-you-go instances.
         *                     SpotWithPriceLimit: The compute nodes are preemptible instances that have a user-defined maximum hourly price.
         *                     SpotAsPriceGo: The compute nodes are preemptible instances for which the market price at the time of purchase is used as the bid price.
         *                     Default value: NoSpot
         * @return {@code this}
         */
        public Builder spotStrategy(com.aliyun.ros.cdk.core.IResolvable spotStrategy) {
            this.spotStrategy = spotStrategy;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AutoScaleConfigProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AutoScaleConfigProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AutoScaleConfigProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AutoScaleConfigProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ehpc.AutoScaleConfigProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AutoScaleConfigProps.Jsii$Proxy that = (AutoScaleConfigProps.Jsii$Proxy) o;

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
