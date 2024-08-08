package com.aliyun.ros.cdk.cen.datasource;

/**
 * This class is a base encapsulation around the ROS resource type <code>DATASOURCE::CEN::TransitRouterRouteTables</code>, which is used to query the route tables of an Enterprise Edition transit router.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:08.077Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.datasource.RosTransitRouterRouteTables")
public class RosTransitRouterRouteTables extends com.aliyun.ros.cdk.core.RosResource {

    protected RosTransitRouterRouteTables(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosTransitRouterRouteTables(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cen.datasource.RosTransitRouterRouteTables.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosTransitRouterRouteTables(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.datasource.RosTransitRouterRouteTablesProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterRouteTableIds() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteTableIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterRouteTables() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteTables", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getTransitRouterId() {
        return software.amazon.jsii.Kernel.get(this, "transitRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTransitRouterId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "transitRouterId", java.util.Objects.requireNonNull(value, "transitRouterId is required"));
    }

    /**
     */
    public void setTransitRouterId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "transitRouterId", java.util.Objects.requireNonNull(value, "transitRouterId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRefreshOptions(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "refreshOptions", value);
    }

    /**
     */
    public void setRefreshOptions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "refreshOptions", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterRouteTableIds() {
        return software.amazon.jsii.Kernel.get(this, "transitRouterRouteTableIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTransitRouterRouteTableIds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "transitRouterRouteTableIds", value);
    }

    /**
     */
    public void setTransitRouterRouteTableIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "transitRouterRouteTableIds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterRouteTableNames() {
        return software.amazon.jsii.Kernel.get(this, "transitRouterRouteTableNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTransitRouterRouteTableNames(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "transitRouterRouteTableNames", value);
    }

    /**
     */
    public void setTransitRouterRouteTableNames(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "transitRouterRouteTableNames", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterRouteTableStatus() {
        return software.amazon.jsii.Kernel.get(this, "transitRouterRouteTableStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTransitRouterRouteTableStatus(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "transitRouterRouteTableStatus", value);
    }

    /**
     */
    public void setTransitRouterRouteTableStatus(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "transitRouterRouteTableStatus", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterRouteTableType() {
        return software.amazon.jsii.Kernel.get(this, "transitRouterRouteTableType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTransitRouterRouteTableType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "transitRouterRouteTableType", value);
    }

    /**
     */
    public void setTransitRouterRouteTableType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "transitRouterRouteTableType", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cen.datasource.RosTransitRouterRouteTables}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cen.datasource.RosTransitRouterRouteTables> {
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
        private final com.aliyun.ros.cdk.cen.datasource.RosTransitRouterRouteTablesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cen.datasource.RosTransitRouterRouteTablesProps.Builder();
        }

        /**
         * @return {@code this}
         * @param transitRouterId This parameter is required.
         */
        public Builder transitRouterId(final java.lang.String transitRouterId) {
            this.props.transitRouterId(transitRouterId);
            return this;
        }
        /**
         * @return {@code this}
         * @param transitRouterId This parameter is required.
         */
        public Builder transitRouterId(final com.aliyun.ros.cdk.core.IResolvable transitRouterId) {
            this.props.transitRouterId(transitRouterId);
            return this;
        }

        /**
         * @return {@code this}
         * @param refreshOptions This parameter is required.
         */
        public Builder refreshOptions(final java.lang.String refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }
        /**
         * @return {@code this}
         * @param refreshOptions This parameter is required.
         */
        public Builder refreshOptions(final com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }

        /**
         * @return {@code this}
         * @param transitRouterRouteTableIds This parameter is required.
         */
        public Builder transitRouterRouteTableIds(final com.aliyun.ros.cdk.core.IResolvable transitRouterRouteTableIds) {
            this.props.transitRouterRouteTableIds(transitRouterRouteTableIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param transitRouterRouteTableIds This parameter is required.
         */
        public Builder transitRouterRouteTableIds(final java.util.List<? extends java.lang.Object> transitRouterRouteTableIds) {
            this.props.transitRouterRouteTableIds(transitRouterRouteTableIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param transitRouterRouteTableNames This parameter is required.
         */
        public Builder transitRouterRouteTableNames(final com.aliyun.ros.cdk.core.IResolvable transitRouterRouteTableNames) {
            this.props.transitRouterRouteTableNames(transitRouterRouteTableNames);
            return this;
        }
        /**
         * @return {@code this}
         * @param transitRouterRouteTableNames This parameter is required.
         */
        public Builder transitRouterRouteTableNames(final java.util.List<? extends java.lang.Object> transitRouterRouteTableNames) {
            this.props.transitRouterRouteTableNames(transitRouterRouteTableNames);
            return this;
        }

        /**
         * @return {@code this}
         * @param transitRouterRouteTableStatus This parameter is required.
         */
        public Builder transitRouterRouteTableStatus(final java.lang.String transitRouterRouteTableStatus) {
            this.props.transitRouterRouteTableStatus(transitRouterRouteTableStatus);
            return this;
        }
        /**
         * @return {@code this}
         * @param transitRouterRouteTableStatus This parameter is required.
         */
        public Builder transitRouterRouteTableStatus(final com.aliyun.ros.cdk.core.IResolvable transitRouterRouteTableStatus) {
            this.props.transitRouterRouteTableStatus(transitRouterRouteTableStatus);
            return this;
        }

        /**
         * @return {@code this}
         * @param transitRouterRouteTableType This parameter is required.
         */
        public Builder transitRouterRouteTableType(final java.lang.String transitRouterRouteTableType) {
            this.props.transitRouterRouteTableType(transitRouterRouteTableType);
            return this;
        }
        /**
         * @return {@code this}
         * @param transitRouterRouteTableType This parameter is required.
         */
        public Builder transitRouterRouteTableType(final com.aliyun.ros.cdk.core.IResolvable transitRouterRouteTableType) {
            this.props.transitRouterRouteTableType(transitRouterRouteTableType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cen.datasource.RosTransitRouterRouteTables}.
         */
        @Override
        public com.aliyun.ros.cdk.cen.datasource.RosTransitRouterRouteTables build() {
            return new com.aliyun.ros.cdk.cen.datasource.RosTransitRouterRouteTables(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
