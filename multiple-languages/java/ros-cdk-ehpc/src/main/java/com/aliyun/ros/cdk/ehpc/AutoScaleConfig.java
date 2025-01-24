package com.aliyun.ros.cdk.ehpc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::EHPC::AutoScaleConfig</code>, which is used to configure the auto scaling settings of a cluster.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:39.008Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.AutoScaleConfig")
public class AutoScaleConfig extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ehpc.IAutoScaleConfig {

    protected AutoScaleConfig(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AutoScaleConfig(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public AutoScaleConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ehpc.AutoScaleConfigProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public AutoScaleConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ehpc.AutoScaleConfigProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ClusterId: Cluster Id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ehpc.AutoScaleConfigProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ehpc.AutoScaleConfigProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ehpc.AutoScaleConfig}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ehpc.AutoScaleConfig> {
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
        private final com.aliyun.ros.cdk.ehpc.AutoScaleConfigProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ehpc.AutoScaleConfigProps.Builder();
        }

        /**
         * Property clusterId: Cluster ID.
         * <p>
         * @return {@code this}
         * @param clusterId Property clusterId: Cluster ID. This parameter is required.
         */
        public Builder clusterId(final java.lang.String clusterId) {
            this.props.clusterId(clusterId);
            return this;
        }
        /**
         * Property clusterId: Cluster ID.
         * <p>
         * @return {@code this}
         * @param clusterId Property clusterId: Cluster ID. This parameter is required.
         */
        public Builder clusterId(final com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.props.clusterId(clusterId);
            return this;
        }

        /**
         * Property enableAutoGrow: Specifies whether to enable auto scale-out.
         * <p>
         * Valid values:
         * true: enables auto scale-out.
         * false: disables auto scale-out
         * Default value: false
         * <p>
         * @return {@code this}
         * @param enableAutoGrow Property enableAutoGrow: Specifies whether to enable auto scale-out. This parameter is required.
         */
        public Builder enableAutoGrow(final java.lang.Boolean enableAutoGrow) {
            this.props.enableAutoGrow(enableAutoGrow);
            return this;
        }
        /**
         * Property enableAutoGrow: Specifies whether to enable auto scale-out.
         * <p>
         * Valid values:
         * true: enables auto scale-out.
         * false: disables auto scale-out
         * Default value: false
         * <p>
         * @return {@code this}
         * @param enableAutoGrow Property enableAutoGrow: Specifies whether to enable auto scale-out. This parameter is required.
         */
        public Builder enableAutoGrow(final com.aliyun.ros.cdk.core.IResolvable enableAutoGrow) {
            this.props.enableAutoGrow(enableAutoGrow);
            return this;
        }

        /**
         * Property enableAutoShrink: Specifies whether to enable auto scale-in.
         * <p>
         * Valid values:
         * true: enables auto scale-in.
         * false: disables auto scale-in
         * Default value: false
         * <p>
         * @return {@code this}
         * @param enableAutoShrink Property enableAutoShrink: Specifies whether to enable auto scale-in. This parameter is required.
         */
        public Builder enableAutoShrink(final java.lang.Boolean enableAutoShrink) {
            this.props.enableAutoShrink(enableAutoShrink);
            return this;
        }
        /**
         * Property enableAutoShrink: Specifies whether to enable auto scale-in.
         * <p>
         * Valid values:
         * true: enables auto scale-in.
         * false: disables auto scale-in
         * Default value: false
         * <p>
         * @return {@code this}
         * @param enableAutoShrink Property enableAutoShrink: Specifies whether to enable auto scale-in. This parameter is required.
         */
        public Builder enableAutoShrink(final com.aliyun.ros.cdk.core.IResolvable enableAutoShrink) {
            this.props.enableAutoShrink(enableAutoShrink);
            return this;
        }

        /**
         * Property excludeNodes: The compute nodes that are excluded from the list of auto scaling nodes.
         * <p>
         * Separate multiple compute nodes with commas (,). If you want to retain a compute node, you can set the node as an exceptional node. Then, the node is not released if it is idle.
         * <p>
         * @return {@code this}
         * @param excludeNodes Property excludeNodes: The compute nodes that are excluded from the list of auto scaling nodes. This parameter is required.
         */
        public Builder excludeNodes(final java.lang.String excludeNodes) {
            this.props.excludeNodes(excludeNodes);
            return this;
        }
        /**
         * Property excludeNodes: The compute nodes that are excluded from the list of auto scaling nodes.
         * <p>
         * Separate multiple compute nodes with commas (,). If you want to retain a compute node, you can set the node as an exceptional node. Then, the node is not released if it is idle.
         * <p>
         * @return {@code this}
         * @param excludeNodes Property excludeNodes: The compute nodes that are excluded from the list of auto scaling nodes. This parameter is required.
         */
        public Builder excludeNodes(final com.aliyun.ros.cdk.core.IResolvable excludeNodes) {
            this.props.excludeNodes(excludeNodes);
            return this;
        }

        /**
         * Property extraNodesGrowRatio: The percentage of extra compute nodes.
         * <p>
         * Default value: 0
         * <p>
         * @return {@code this}
         * @param extraNodesGrowRatio Property extraNodesGrowRatio: The percentage of extra compute nodes. This parameter is required.
         */
        public Builder extraNodesGrowRatio(final java.lang.Number extraNodesGrowRatio) {
            this.props.extraNodesGrowRatio(extraNodesGrowRatio);
            return this;
        }
        /**
         * Property extraNodesGrowRatio: The percentage of extra compute nodes.
         * <p>
         * Default value: 0
         * <p>
         * @return {@code this}
         * @param extraNodesGrowRatio Property extraNodesGrowRatio: The percentage of extra compute nodes. This parameter is required.
         */
        public Builder extraNodesGrowRatio(final com.aliyun.ros.cdk.core.IResolvable extraNodesGrowRatio) {
            this.props.extraNodesGrowRatio(extraNodesGrowRatio);
            return this;
        }

        /**
         * Property growIntervalInMinutes: The interval between two consecutive rounds of scale-out.
         * <p>
         * Unit: minutes.
         * Default value: 2
         * <p>
         * @return {@code this}
         * @param growIntervalInMinutes Property growIntervalInMinutes: The interval between two consecutive rounds of scale-out. This parameter is required.
         */
        public Builder growIntervalInMinutes(final java.lang.Number growIntervalInMinutes) {
            this.props.growIntervalInMinutes(growIntervalInMinutes);
            return this;
        }
        /**
         * Property growIntervalInMinutes: The interval between two consecutive rounds of scale-out.
         * <p>
         * Unit: minutes.
         * Default value: 2
         * <p>
         * @return {@code this}
         * @param growIntervalInMinutes Property growIntervalInMinutes: The interval between two consecutive rounds of scale-out. This parameter is required.
         */
        public Builder growIntervalInMinutes(final com.aliyun.ros.cdk.core.IResolvable growIntervalInMinutes) {
            this.props.growIntervalInMinutes(growIntervalInMinutes);
            return this;
        }

        /**
         * Property growRatio: The percentage of each round of scale-out.
         * <p>
         * Default value: 100
         * <p>
         * @return {@code this}
         * @param growRatio Property growRatio: The percentage of each round of scale-out. This parameter is required.
         */
        public Builder growRatio(final java.lang.Number growRatio) {
            this.props.growRatio(growRatio);
            return this;
        }
        /**
         * Property growRatio: The percentage of each round of scale-out.
         * <p>
         * Default value: 100
         * <p>
         * @return {@code this}
         * @param growRatio Property growRatio: The percentage of each round of scale-out. This parameter is required.
         */
        public Builder growRatio(final com.aliyun.ros.cdk.core.IResolvable growRatio) {
            this.props.growRatio(growRatio);
            return this;
        }

        /**
         * Property growTimeoutInMinutes: The scale-out timeout period.
         * <p>
         * Unit: minutes.
         * Default value: 20
         * <p>
         * @return {@code this}
         * @param growTimeoutInMinutes Property growTimeoutInMinutes: The scale-out timeout period. This parameter is required.
         */
        public Builder growTimeoutInMinutes(final java.lang.Number growTimeoutInMinutes) {
            this.props.growTimeoutInMinutes(growTimeoutInMinutes);
            return this;
        }
        /**
         * Property growTimeoutInMinutes: The scale-out timeout period.
         * <p>
         * Unit: minutes.
         * Default value: 20
         * <p>
         * @return {@code this}
         * @param growTimeoutInMinutes Property growTimeoutInMinutes: The scale-out timeout period. This parameter is required.
         */
        public Builder growTimeoutInMinutes(final com.aliyun.ros.cdk.core.IResolvable growTimeoutInMinutes) {
            this.props.growTimeoutInMinutes(growTimeoutInMinutes);
            return this;
        }

        /**
         * Property imageId: The ID of the image.
         * <p>
         * If you set both Queues.N.QueueImageId and ImageId, Queues.N.QueueImageId prevails.
         * If you set Queues.N.QueueImageId or ImageId, the parameter that you set takes effect.
         * If you leave both Queues.N.QueueImageId and ImageId empty, the image that was specified when you created the cluster or the last time when you scaled out the cluster is used by default.
         * <p>
         * @return {@code this}
         * @param imageId Property imageId: The ID of the image. This parameter is required.
         */
        public Builder imageId(final java.lang.String imageId) {
            this.props.imageId(imageId);
            return this;
        }
        /**
         * Property imageId: The ID of the image.
         * <p>
         * If you set both Queues.N.QueueImageId and ImageId, Queues.N.QueueImageId prevails.
         * If you set Queues.N.QueueImageId or ImageId, the parameter that you set takes effect.
         * If you leave both Queues.N.QueueImageId and ImageId empty, the image that was specified when you created the cluster or the last time when you scaled out the cluster is used by default.
         * <p>
         * @return {@code this}
         * @param imageId Property imageId: The ID of the image. This parameter is required.
         */
        public Builder imageId(final com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.props.imageId(imageId);
            return this;
        }

        /**
         * Property maxNodesInCluster: The maximum number of compute nodes that can be added in the cluster.
         * <p>
         * Default value: 100
         * <p>
         * @return {@code this}
         * @param maxNodesInCluster Property maxNodesInCluster: The maximum number of compute nodes that can be added in the cluster. This parameter is required.
         */
        public Builder maxNodesInCluster(final java.lang.Number maxNodesInCluster) {
            this.props.maxNodesInCluster(maxNodesInCluster);
            return this;
        }
        /**
         * Property maxNodesInCluster: The maximum number of compute nodes that can be added in the cluster.
         * <p>
         * Default value: 100
         * <p>
         * @return {@code this}
         * @param maxNodesInCluster Property maxNodesInCluster: The maximum number of compute nodes that can be added in the cluster. This parameter is required.
         */
        public Builder maxNodesInCluster(final com.aliyun.ros.cdk.core.IResolvable maxNodesInCluster) {
            this.props.maxNodesInCluster(maxNodesInCluster);
            return this;
        }

        /**
         * Property queues:.
         * <p>
         * @return {@code this}
         * @param queues Property queues:. This parameter is required.
         */
        public Builder queues(final com.aliyun.ros.cdk.core.IResolvable queues) {
            this.props.queues(queues);
            return this;
        }
        /**
         * Property queues:.
         * <p>
         * @return {@code this}
         * @param queues Property queues:. This parameter is required.
         */
        public Builder queues(final java.util.List<? extends java.lang.Object> queues) {
            this.props.queues(queues);
            return this;
        }

        /**
         * Property shrinkIdleTimes: The number of consecutive times that a compute node is idle during the resource scale-in check.
         * <p>
         * Default value: 3
         * <p>
         * @return {@code this}
         * @param shrinkIdleTimes Property shrinkIdleTimes: The number of consecutive times that a compute node is idle during the resource scale-in check. This parameter is required.
         */
        public Builder shrinkIdleTimes(final java.lang.Number shrinkIdleTimes) {
            this.props.shrinkIdleTimes(shrinkIdleTimes);
            return this;
        }
        /**
         * Property shrinkIdleTimes: The number of consecutive times that a compute node is idle during the resource scale-in check.
         * <p>
         * Default value: 3
         * <p>
         * @return {@code this}
         * @param shrinkIdleTimes Property shrinkIdleTimes: The number of consecutive times that a compute node is idle during the resource scale-in check. This parameter is required.
         */
        public Builder shrinkIdleTimes(final com.aliyun.ros.cdk.core.IResolvable shrinkIdleTimes) {
            this.props.shrinkIdleTimes(shrinkIdleTimes);
            return this;
        }

        /**
         * Property shrinkIntervalInMinutes: SThe interval between two consecutive rounds of scale-in.
         * <p>
         * Unit: minutes.
         * Default value: 2
         * <p>
         * @return {@code this}
         * @param shrinkIntervalInMinutes Property shrinkIntervalInMinutes: SThe interval between two consecutive rounds of scale-in. This parameter is required.
         */
        public Builder shrinkIntervalInMinutes(final java.lang.Number shrinkIntervalInMinutes) {
            this.props.shrinkIntervalInMinutes(shrinkIntervalInMinutes);
            return this;
        }
        /**
         * Property shrinkIntervalInMinutes: SThe interval between two consecutive rounds of scale-in.
         * <p>
         * Unit: minutes.
         * Default value: 2
         * <p>
         * @return {@code this}
         * @param shrinkIntervalInMinutes Property shrinkIntervalInMinutes: SThe interval between two consecutive rounds of scale-in. This parameter is required.
         */
        public Builder shrinkIntervalInMinutes(final com.aliyun.ros.cdk.core.IResolvable shrinkIntervalInMinutes) {
            this.props.shrinkIntervalInMinutes(shrinkIntervalInMinutes);
            return this;
        }

        /**
         * Property spotPriceLimit: The maximum hourly price of the compute nodes.
         * <p>
         * The value can be accurate to three decimal places. The parameter takes effect only when SpotStrategy is set to SpotWithPriceLimit.
         * <p>
         * @return {@code this}
         * @param spotPriceLimit Property spotPriceLimit: The maximum hourly price of the compute nodes. This parameter is required.
         */
        public Builder spotPriceLimit(final java.lang.Number spotPriceLimit) {
            this.props.spotPriceLimit(spotPriceLimit);
            return this;
        }
        /**
         * Property spotPriceLimit: The maximum hourly price of the compute nodes.
         * <p>
         * The value can be accurate to three decimal places. The parameter takes effect only when SpotStrategy is set to SpotWithPriceLimit.
         * <p>
         * @return {@code this}
         * @param spotPriceLimit Property spotPriceLimit: The maximum hourly price of the compute nodes. This parameter is required.
         */
        public Builder spotPriceLimit(final com.aliyun.ros.cdk.core.IResolvable spotPriceLimit) {
            this.props.spotPriceLimit(spotPriceLimit);
            return this;
        }

        /**
         * Property spotStrategy: The preemption policy of the compute nodes.
         * <p>
         * Valid values:
         * NoSpot: The compute nodes are pay-as-you-go instances.
         * SpotWithPriceLimit: The compute nodes are preemptible instances that have a user-defined maximum hourly price.
         * SpotAsPriceGo: The compute nodes are preemptible instances for which the market price at the time of purchase is used as the bid price.
         * Default value: NoSpot
         * <p>
         * @return {@code this}
         * @param spotStrategy Property spotStrategy: The preemption policy of the compute nodes. This parameter is required.
         */
        public Builder spotStrategy(final java.lang.String spotStrategy) {
            this.props.spotStrategy(spotStrategy);
            return this;
        }
        /**
         * Property spotStrategy: The preemption policy of the compute nodes.
         * <p>
         * Valid values:
         * NoSpot: The compute nodes are pay-as-you-go instances.
         * SpotWithPriceLimit: The compute nodes are preemptible instances that have a user-defined maximum hourly price.
         * SpotAsPriceGo: The compute nodes are preemptible instances for which the market price at the time of purchase is used as the bid price.
         * Default value: NoSpot
         * <p>
         * @return {@code this}
         * @param spotStrategy Property spotStrategy: The preemption policy of the compute nodes. This parameter is required.
         */
        public Builder spotStrategy(final com.aliyun.ros.cdk.core.IResolvable spotStrategy) {
            this.props.spotStrategy(spotStrategy);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ehpc.AutoScaleConfig}.
         */
        @Override
        public com.aliyun.ros.cdk.ehpc.AutoScaleConfig build() {
            return new com.aliyun.ros.cdk.ehpc.AutoScaleConfig(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
