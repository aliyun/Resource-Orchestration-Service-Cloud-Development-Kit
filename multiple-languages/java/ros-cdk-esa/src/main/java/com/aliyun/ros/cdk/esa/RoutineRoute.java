package com.aliyun.ros.cdk.esa;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ESA::RoutineRoute</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:26.297Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RoutineRoute")
public class RoutineRoute extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.esa.IRoutineRoute {

    protected RoutineRoute(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RoutineRoute(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public RoutineRoute(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.RoutineRouteProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public RoutineRoute(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.RoutineRouteProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Bypass: Bypass mode.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBypass() {
        return software.amazon.jsii.Kernel.get(this, "attrBypass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ConfigId: The configuration ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigId() {
        return software.amazon.jsii.Kernel.get(this, "attrConfigId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ConfigType: The configuration type.
     * <p>
     * You can use this parameter to check the global configuration or rule configuration.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigType() {
        return software.amazon.jsii.Kernel.get(this, "attrConfigType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Fallback: An exception to the origin server switch will be enabled.
     * <p>
     * If an exception occurs in the function, such as CPU usage exceeding limits, a request will be made to return to the origin server.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFallback() {
        return software.amazon.jsii.Kernel.get(this, "attrFallback", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Mode: Configuration mode.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMode() {
        return software.amazon.jsii.Kernel.get(this, "attrMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RouteEnable: Routing switch.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouteEnable() {
        return software.amazon.jsii.Kernel.get(this, "attrRouteEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RouteName: The route name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouteName() {
        return software.amazon.jsii.Kernel.get(this, "attrRouteName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RoutineName: The edge function Routine name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRoutineName() {
        return software.amazon.jsii.Kernel.get(this, "attrRoutineName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Rule: The content of the rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRule() {
        return software.amazon.jsii.Kernel.get(this, "attrRule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Sequence: Rule execution order.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSequence() {
        return software.amazon.jsii.Kernel.get(this, "attrSequence", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SiteVersion: Version number of the site.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrSiteVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.RoutineRouteProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.RoutineRouteProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.esa.RoutineRoute}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.esa.RoutineRoute> {
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
        private final com.aliyun.ros.cdk.esa.RoutineRouteProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.esa.RoutineRouteProps.Builder();
        }

        /**
         * Property routineName: The edge function Routine name.
         * <p>
         * @return {@code this}
         * @param routineName Property routineName: The edge function Routine name. This parameter is required.
         */
        public Builder routineName(final java.lang.String routineName) {
            this.props.routineName(routineName);
            return this;
        }
        /**
         * Property routineName: The edge function Routine name.
         * <p>
         * @return {@code this}
         * @param routineName Property routineName: The edge function Routine name. This parameter is required.
         */
        public Builder routineName(final com.aliyun.ros.cdk.core.IResolvable routineName) {
            this.props.routineName(routineName);
            return this;
        }

        /**
         * Property siteId: The website ID.
         * <p>
         * @return {@code this}
         * @param siteId Property siteId: The website ID. This parameter is required.
         */
        public Builder siteId(final java.lang.Number siteId) {
            this.props.siteId(siteId);
            return this;
        }
        /**
         * Property siteId: The website ID.
         * <p>
         * @return {@code this}
         * @param siteId Property siteId: The website ID. This parameter is required.
         */
        public Builder siteId(final com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.props.siteId(siteId);
            return this;
        }

        /**
         * Property bypass: Bypass mode.
         * <p>
         * Value range:
         * <p>
         * <ul>
         * <li>on: Open</li>
         * <li>off: off.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param bypass Property bypass: Bypass mode. This parameter is required.
         */
        public Builder bypass(final java.lang.String bypass) {
            this.props.bypass(bypass);
            return this;
        }
        /**
         * Property bypass: Bypass mode.
         * <p>
         * Value range:
         * <p>
         * <ul>
         * <li>on: Open</li>
         * <li>off: off.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param bypass Property bypass: Bypass mode. This parameter is required.
         */
        public Builder bypass(final com.aliyun.ros.cdk.core.IResolvable bypass) {
            this.props.bypass(bypass);
            return this;
        }

        /**
         * Property fallback: The exception origin fetch switch.
         * <p>
         * After you turn on this switch, if a function exception occurs, such as CPU usage exceeding the upper limit, requests are sent back to the origin. Valid values:
         * on
         * off
         * <p>
         * @return {@code this}
         * @param fallback Property fallback: The exception origin fetch switch. This parameter is required.
         */
        public Builder fallback(final java.lang.String fallback) {
            this.props.fallback(fallback);
            return this;
        }
        /**
         * Property fallback: The exception origin fetch switch.
         * <p>
         * After you turn on this switch, if a function exception occurs, such as CPU usage exceeding the upper limit, requests are sent back to the origin. Valid values:
         * on
         * off
         * <p>
         * @return {@code this}
         * @param fallback Property fallback: The exception origin fetch switch. This parameter is required.
         */
        public Builder fallback(final com.aliyun.ros.cdk.core.IResolvable fallback) {
            this.props.fallback(fallback);
            return this;
        }

        /**
         * Property routeEnable: Routing switch.
         * <p>
         * Value range:
         * <p>
         * <ul>
         * <li>on: Open</li>
         * <li>off: off.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param routeEnable Property routeEnable: Routing switch. This parameter is required.
         */
        public Builder routeEnable(final java.lang.String routeEnable) {
            this.props.routeEnable(routeEnable);
            return this;
        }
        /**
         * Property routeEnable: Routing switch.
         * <p>
         * Value range:
         * <p>
         * <ul>
         * <li>on: Open</li>
         * <li>off: off.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param routeEnable Property routeEnable: Routing switch. This parameter is required.
         */
        public Builder routeEnable(final com.aliyun.ros.cdk.core.IResolvable routeEnable) {
            this.props.routeEnable(routeEnable);
            return this;
        }

        /**
         * Property routeName: The name of the route.
         * <p>
         * @return {@code this}
         * @param routeName Property routeName: The name of the route. This parameter is required.
         */
        public Builder routeName(final java.lang.String routeName) {
            this.props.routeName(routeName);
            return this;
        }
        /**
         * Property routeName: The name of the route.
         * <p>
         * @return {@code this}
         * @param routeName Property routeName: The name of the route. This parameter is required.
         */
        public Builder routeName(final com.aliyun.ros.cdk.core.IResolvable routeName) {
            this.props.routeName(routeName);
            return this;
        }

        /**
         * Property rule: The content of the rule.
         * <p>
         * @return {@code this}
         * @param rule Property rule: The content of the rule. This parameter is required.
         */
        public Builder rule(final java.lang.String rule) {
            this.props.rule(rule);
            return this;
        }
        /**
         * Property rule: The content of the rule.
         * <p>
         * @return {@code this}
         * @param rule Property rule: The content of the rule. This parameter is required.
         */
        public Builder rule(final com.aliyun.ros.cdk.core.IResolvable rule) {
            this.props.rule(rule);
            return this;
        }

        /**
         * Property sequence: Rule execution order.
         * <p>
         * @return {@code this}
         * @param sequence Property sequence: Rule execution order. This parameter is required.
         */
        public Builder sequence(final java.lang.Number sequence) {
            this.props.sequence(sequence);
            return this;
        }
        /**
         * Property sequence: Rule execution order.
         * <p>
         * @return {@code this}
         * @param sequence Property sequence: Rule execution order. This parameter is required.
         */
        public Builder sequence(final com.aliyun.ros.cdk.core.IResolvable sequence) {
            this.props.sequence(sequence);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.esa.RoutineRoute}.
         */
        @Override
        public com.aliyun.ros.cdk.esa.RoutineRoute build() {
            return new com.aliyun.ros.cdk.esa.RoutineRoute(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
