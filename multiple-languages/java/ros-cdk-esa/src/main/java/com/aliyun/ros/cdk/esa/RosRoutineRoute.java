package com.aliyun.ros.cdk.esa;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ESA::RoutineRoute</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T11:49:07.873Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosRoutineRoute")
public class RosRoutineRoute extends com.aliyun.ros.cdk.core.RosResource {

    protected RosRoutineRoute(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosRoutineRoute(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.esa.RosRoutineRoute.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosRoutineRoute(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.RosRoutineRouteProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBypass() {
        return software.amazon.jsii.Kernel.get(this, "attrBypass", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConfigId() {
        return software.amazon.jsii.Kernel.get(this, "attrConfigId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConfigType() {
        return software.amazon.jsii.Kernel.get(this, "attrConfigType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFallback() {
        return software.amazon.jsii.Kernel.get(this, "attrFallback", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMode() {
        return software.amazon.jsii.Kernel.get(this, "attrMode", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRouteEnable() {
        return software.amazon.jsii.Kernel.get(this, "attrRouteEnable", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRouteName() {
        return software.amazon.jsii.Kernel.get(this, "attrRouteName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRoutineName() {
        return software.amazon.jsii.Kernel.get(this, "attrRoutineName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRule() {
        return software.amazon.jsii.Kernel.get(this, "attrRule", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSequence() {
        return software.amazon.jsii.Kernel.get(this, "attrSequence", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSiteVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrSiteVersion", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getRoutineName() {
        return software.amazon.jsii.Kernel.get(this, "routineName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRoutineName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "routineName", java.util.Objects.requireNonNull(value, "routineName is required"));
    }

    /**
     */
    public void setRoutineName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "routineName", java.util.Objects.requireNonNull(value, "routineName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSiteId() {
        return software.amazon.jsii.Kernel.get(this, "siteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSiteId(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "siteId", java.util.Objects.requireNonNull(value, "siteId is required"));
    }

    /**
     */
    public void setSiteId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "siteId", java.util.Objects.requireNonNull(value, "siteId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBypass() {
        return software.amazon.jsii.Kernel.get(this, "bypass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBypass(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "bypass", value);
    }

    /**
     */
    public void setBypass(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "bypass", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFallback() {
        return software.amazon.jsii.Kernel.get(this, "fallback", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFallback(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "fallback", value);
    }

    /**
     */
    public void setFallback(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "fallback", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRouteEnable() {
        return software.amazon.jsii.Kernel.get(this, "routeEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRouteEnable(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "routeEnable", value);
    }

    /**
     */
    public void setRouteEnable(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "routeEnable", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRouteName() {
        return software.amazon.jsii.Kernel.get(this, "routeName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRouteName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "routeName", value);
    }

    /**
     */
    public void setRouteName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "routeName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRule() {
        return software.amazon.jsii.Kernel.get(this, "rule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRule(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "rule", value);
    }

    /**
     */
    public void setRule(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "rule", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSequence() {
        return software.amazon.jsii.Kernel.get(this, "sequence", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSequence(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "sequence", value);
    }

    /**
     */
    public void setSequence(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sequence", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.esa.RosRoutineRoute}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.esa.RosRoutineRoute> {
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
        private final com.aliyun.ros.cdk.esa.RosRoutineRouteProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.esa.RosRoutineRouteProps.Builder();
        }

        /**
         * @return {@code this}
         * @param routineName This parameter is required.
         */
        public Builder routineName(final java.lang.String routineName) {
            this.props.routineName(routineName);
            return this;
        }
        /**
         * @return {@code this}
         * @param routineName This parameter is required.
         */
        public Builder routineName(final com.aliyun.ros.cdk.core.IResolvable routineName) {
            this.props.routineName(routineName);
            return this;
        }

        /**
         * @return {@code this}
         * @param siteId This parameter is required.
         */
        public Builder siteId(final java.lang.Number siteId) {
            this.props.siteId(siteId);
            return this;
        }
        /**
         * @return {@code this}
         * @param siteId This parameter is required.
         */
        public Builder siteId(final com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.props.siteId(siteId);
            return this;
        }

        /**
         * @return {@code this}
         * @param bypass This parameter is required.
         */
        public Builder bypass(final java.lang.String bypass) {
            this.props.bypass(bypass);
            return this;
        }
        /**
         * @return {@code this}
         * @param bypass This parameter is required.
         */
        public Builder bypass(final com.aliyun.ros.cdk.core.IResolvable bypass) {
            this.props.bypass(bypass);
            return this;
        }

        /**
         * @return {@code this}
         * @param fallback This parameter is required.
         */
        public Builder fallback(final java.lang.String fallback) {
            this.props.fallback(fallback);
            return this;
        }
        /**
         * @return {@code this}
         * @param fallback This parameter is required.
         */
        public Builder fallback(final com.aliyun.ros.cdk.core.IResolvable fallback) {
            this.props.fallback(fallback);
            return this;
        }

        /**
         * @return {@code this}
         * @param routeEnable This parameter is required.
         */
        public Builder routeEnable(final java.lang.String routeEnable) {
            this.props.routeEnable(routeEnable);
            return this;
        }
        /**
         * @return {@code this}
         * @param routeEnable This parameter is required.
         */
        public Builder routeEnable(final com.aliyun.ros.cdk.core.IResolvable routeEnable) {
            this.props.routeEnable(routeEnable);
            return this;
        }

        /**
         * @return {@code this}
         * @param routeName This parameter is required.
         */
        public Builder routeName(final java.lang.String routeName) {
            this.props.routeName(routeName);
            return this;
        }
        /**
         * @return {@code this}
         * @param routeName This parameter is required.
         */
        public Builder routeName(final com.aliyun.ros.cdk.core.IResolvable routeName) {
            this.props.routeName(routeName);
            return this;
        }

        /**
         * @return {@code this}
         * @param rule This parameter is required.
         */
        public Builder rule(final java.lang.String rule) {
            this.props.rule(rule);
            return this;
        }
        /**
         * @return {@code this}
         * @param rule This parameter is required.
         */
        public Builder rule(final com.aliyun.ros.cdk.core.IResolvable rule) {
            this.props.rule(rule);
            return this;
        }

        /**
         * @return {@code this}
         * @param sequence This parameter is required.
         */
        public Builder sequence(final java.lang.Number sequence) {
            this.props.sequence(sequence);
            return this;
        }
        /**
         * @return {@code this}
         * @param sequence This parameter is required.
         */
        public Builder sequence(final com.aliyun.ros.cdk.core.IResolvable sequence) {
            this.props.sequence(sequence);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.esa.RosRoutineRoute}.
         */
        @Override
        public com.aliyun.ros.cdk.esa.RosRoutineRoute build() {
            return new com.aliyun.ros.cdk.esa.RosRoutineRoute(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
