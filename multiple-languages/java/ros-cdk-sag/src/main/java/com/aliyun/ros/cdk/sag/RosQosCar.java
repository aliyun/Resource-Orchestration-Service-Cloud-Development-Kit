package com.aliyun.ros.cdk.sag;

/**
 * A ROS template type:  `ALIYUN::SAG::QosCar`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.62.0 (build 293ac17)", date = "2022-07-21T02:24:26.421Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sag.$Module.class, fqn = "@alicloud/ros-cdk-sag.RosQosCar")
public class RosQosCar extends com.aliyun.ros.cdk.core.RosResource {

    protected RosQosCar(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosQosCar(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.sag.RosQosCar.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::SAG::QosCar`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosQosCar(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sag.RosQosCarProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrQosCarId() {
        return software.amazon.jsii.Kernel.get(this, "attrQosCarId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getLimitType() {
        return software.amazon.jsii.Kernel.get(this, "limitType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLimitType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "limitType", java.util.Objects.requireNonNull(value, "limitType is required"));
    }

    /**
     */
    public void setLimitType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "limitType", java.util.Objects.requireNonNull(value, "limitType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPriority() {
        return software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPriority(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "priority", java.util.Objects.requireNonNull(value, "priority is required"));
    }

    /**
     */
    public void setPriority(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "priority", java.util.Objects.requireNonNull(value, "priority is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getQosId() {
        return software.amazon.jsii.Kernel.get(this, "qosId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setQosId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "qosId", java.util.Objects.requireNonNull(value, "qosId is required"));
    }

    /**
     */
    public void setQosId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "qosId", java.util.Objects.requireNonNull(value, "qosId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMaxBandwidthAbs() {
        return software.amazon.jsii.Kernel.get(this, "maxBandwidthAbs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMaxBandwidthAbs(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "maxBandwidthAbs", value);
    }

    /**
     */
    public void setMaxBandwidthAbs(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "maxBandwidthAbs", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMaxBandwidthPercent() {
        return software.amazon.jsii.Kernel.get(this, "maxBandwidthPercent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMaxBandwidthPercent(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "maxBandwidthPercent", value);
    }

    /**
     */
    public void setMaxBandwidthPercent(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "maxBandwidthPercent", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMinBandwidthAbs() {
        return software.amazon.jsii.Kernel.get(this, "minBandwidthAbs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMinBandwidthAbs(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "minBandwidthAbs", value);
    }

    /**
     */
    public void setMinBandwidthAbs(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "minBandwidthAbs", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMinBandwidthPercent() {
        return software.amazon.jsii.Kernel.get(this, "minBandwidthPercent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMinBandwidthPercent(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "minBandwidthPercent", value);
    }

    /**
     */
    public void setMinBandwidthPercent(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "minBandwidthPercent", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "name", value);
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "name", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPercentSourceType() {
        return software.amazon.jsii.Kernel.get(this, "percentSourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPercentSourceType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "percentSourceType", value);
    }

    /**
     */
    public void setPercentSourceType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "percentSourceType", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sag.RosQosCar}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sag.RosQosCar> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.sag.RosQosCarProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sag.RosQosCarProps.Builder();
        }

        /**
         * @return {@code this}
         * @param limitType This parameter is required.
         */
        public Builder limitType(final java.lang.String limitType) {
            this.props.limitType(limitType);
            return this;
        }
        /**
         * @return {@code this}
         * @param limitType This parameter is required.
         */
        public Builder limitType(final com.aliyun.ros.cdk.core.IResolvable limitType) {
            this.props.limitType(limitType);
            return this;
        }

        /**
         * @return {@code this}
         * @param priority This parameter is required.
         */
        public Builder priority(final java.lang.Number priority) {
            this.props.priority(priority);
            return this;
        }
        /**
         * @return {@code this}
         * @param priority This parameter is required.
         */
        public Builder priority(final com.aliyun.ros.cdk.core.IResolvable priority) {
            this.props.priority(priority);
            return this;
        }

        /**
         * @return {@code this}
         * @param qosId This parameter is required.
         */
        public Builder qosId(final java.lang.String qosId) {
            this.props.qosId(qosId);
            return this;
        }
        /**
         * @return {@code this}
         * @param qosId This parameter is required.
         */
        public Builder qosId(final com.aliyun.ros.cdk.core.IResolvable qosId) {
            this.props.qosId(qosId);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param maxBandwidthAbs This parameter is required.
         */
        public Builder maxBandwidthAbs(final java.lang.Number maxBandwidthAbs) {
            this.props.maxBandwidthAbs(maxBandwidthAbs);
            return this;
        }
        /**
         * @return {@code this}
         * @param maxBandwidthAbs This parameter is required.
         */
        public Builder maxBandwidthAbs(final com.aliyun.ros.cdk.core.IResolvable maxBandwidthAbs) {
            this.props.maxBandwidthAbs(maxBandwidthAbs);
            return this;
        }

        /**
         * @return {@code this}
         * @param maxBandwidthPercent This parameter is required.
         */
        public Builder maxBandwidthPercent(final java.lang.Number maxBandwidthPercent) {
            this.props.maxBandwidthPercent(maxBandwidthPercent);
            return this;
        }
        /**
         * @return {@code this}
         * @param maxBandwidthPercent This parameter is required.
         */
        public Builder maxBandwidthPercent(final com.aliyun.ros.cdk.core.IResolvable maxBandwidthPercent) {
            this.props.maxBandwidthPercent(maxBandwidthPercent);
            return this;
        }

        /**
         * @return {@code this}
         * @param minBandwidthAbs This parameter is required.
         */
        public Builder minBandwidthAbs(final java.lang.Number minBandwidthAbs) {
            this.props.minBandwidthAbs(minBandwidthAbs);
            return this;
        }
        /**
         * @return {@code this}
         * @param minBandwidthAbs This parameter is required.
         */
        public Builder minBandwidthAbs(final com.aliyun.ros.cdk.core.IResolvable minBandwidthAbs) {
            this.props.minBandwidthAbs(minBandwidthAbs);
            return this;
        }

        /**
         * @return {@code this}
         * @param minBandwidthPercent This parameter is required.
         */
        public Builder minBandwidthPercent(final java.lang.Number minBandwidthPercent) {
            this.props.minBandwidthPercent(minBandwidthPercent);
            return this;
        }
        /**
         * @return {@code this}
         * @param minBandwidthPercent This parameter is required.
         */
        public Builder minBandwidthPercent(final com.aliyun.ros.cdk.core.IResolvable minBandwidthPercent) {
            this.props.minBandwidthPercent(minBandwidthPercent);
            return this;
        }

        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * @return {@code this}
         * @param percentSourceType This parameter is required.
         */
        public Builder percentSourceType(final java.lang.String percentSourceType) {
            this.props.percentSourceType(percentSourceType);
            return this;
        }
        /**
         * @return {@code this}
         * @param percentSourceType This parameter is required.
         */
        public Builder percentSourceType(final com.aliyun.ros.cdk.core.IResolvable percentSourceType) {
            this.props.percentSourceType(percentSourceType);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.sag.RosQosCar}.
         */
        @Override
        public com.aliyun.ros.cdk.sag.RosQosCar build() {
            return new com.aliyun.ros.cdk.sag.RosQosCar(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
