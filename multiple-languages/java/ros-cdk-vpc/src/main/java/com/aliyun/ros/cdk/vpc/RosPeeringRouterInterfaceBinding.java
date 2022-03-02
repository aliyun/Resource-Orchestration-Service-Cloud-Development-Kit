package com.aliyun.ros.cdk.vpc;

/**
 * A ROS template type:  `ALIYUN::VPC::PeeringRouterInterfaceBinding`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.53.0 (build c071d26)", date = "2022-02-11T01:44:08.600Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosPeeringRouterInterfaceBinding")
public class RosPeeringRouterInterfaceBinding extends com.aliyun.ros.cdk.core.RosResource {

    protected RosPeeringRouterInterfaceBinding(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosPeeringRouterInterfaceBinding(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.vpc.RosPeeringRouterInterfaceBinding.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::VPC::PeeringRouterInterfaceBinding`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosPeeringRouterInterfaceBinding(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.RosPeeringRouterInterfaceBindingProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRouterInterfaceId() {
        return software.amazon.jsii.Kernel.get(this, "attrRouterInterfaceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getOppositeInterfaceId() {
        return software.amazon.jsii.Kernel.get(this, "oppositeInterfaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOppositeInterfaceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "oppositeInterfaceId", java.util.Objects.requireNonNull(value, "oppositeInterfaceId is required"));
    }

    /**
     */
    public void setOppositeInterfaceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "oppositeInterfaceId", java.util.Objects.requireNonNull(value, "oppositeInterfaceId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRouterInterfaceId() {
        return software.amazon.jsii.Kernel.get(this, "routerInterfaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRouterInterfaceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "routerInterfaceId", java.util.Objects.requireNonNull(value, "routerInterfaceId is required"));
    }

    /**
     */
    public void setRouterInterfaceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "routerInterfaceId", java.util.Objects.requireNonNull(value, "routerInterfaceId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOppositeInterfaceOwnerId() {
        return software.amazon.jsii.Kernel.get(this, "oppositeInterfaceOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOppositeInterfaceOwnerId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "oppositeInterfaceOwnerId", value);
    }

    /**
     */
    public void setOppositeInterfaceOwnerId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "oppositeInterfaceOwnerId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOppositeRouterId() {
        return software.amazon.jsii.Kernel.get(this, "oppositeRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOppositeRouterId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "oppositeRouterId", value);
    }

    /**
     */
    public void setOppositeRouterId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "oppositeRouterId", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.RosPeeringRouterInterfaceBinding}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.RosPeeringRouterInterfaceBinding> {
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
        private final com.aliyun.ros.cdk.vpc.RosPeeringRouterInterfaceBindingProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.RosPeeringRouterInterfaceBindingProps.Builder();
        }

        /**
         * @return {@code this}
         * @param oppositeInterfaceId This parameter is required.
         */
        public Builder oppositeInterfaceId(final java.lang.String oppositeInterfaceId) {
            this.props.oppositeInterfaceId(oppositeInterfaceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param oppositeInterfaceId This parameter is required.
         */
        public Builder oppositeInterfaceId(final com.aliyun.ros.cdk.core.IResolvable oppositeInterfaceId) {
            this.props.oppositeInterfaceId(oppositeInterfaceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param routerInterfaceId This parameter is required.
         */
        public Builder routerInterfaceId(final java.lang.String routerInterfaceId) {
            this.props.routerInterfaceId(routerInterfaceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param routerInterfaceId This parameter is required.
         */
        public Builder routerInterfaceId(final com.aliyun.ros.cdk.core.IResolvable routerInterfaceId) {
            this.props.routerInterfaceId(routerInterfaceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param oppositeInterfaceOwnerId This parameter is required.
         */
        public Builder oppositeInterfaceOwnerId(final java.lang.String oppositeInterfaceOwnerId) {
            this.props.oppositeInterfaceOwnerId(oppositeInterfaceOwnerId);
            return this;
        }
        /**
         * @return {@code this}
         * @param oppositeInterfaceOwnerId This parameter is required.
         */
        public Builder oppositeInterfaceOwnerId(final com.aliyun.ros.cdk.core.IResolvable oppositeInterfaceOwnerId) {
            this.props.oppositeInterfaceOwnerId(oppositeInterfaceOwnerId);
            return this;
        }

        /**
         * @return {@code this}
         * @param oppositeRouterId This parameter is required.
         */
        public Builder oppositeRouterId(final java.lang.String oppositeRouterId) {
            this.props.oppositeRouterId(oppositeRouterId);
            return this;
        }
        /**
         * @return {@code this}
         * @param oppositeRouterId This parameter is required.
         */
        public Builder oppositeRouterId(final com.aliyun.ros.cdk.core.IResolvable oppositeRouterId) {
            this.props.oppositeRouterId(oppositeRouterId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.vpc.RosPeeringRouterInterfaceBinding}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.RosPeeringRouterInterfaceBinding build() {
            return new com.aliyun.ros.cdk.vpc.RosPeeringRouterInterfaceBinding(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
