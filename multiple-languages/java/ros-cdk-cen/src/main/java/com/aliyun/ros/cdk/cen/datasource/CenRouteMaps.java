package com.aliyun.ros.cdk.cen.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::CEN::CenRouteMaps</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T10:01:44.643Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.datasource.CenRouteMaps")
public class CenRouteMaps extends com.aliyun.ros.cdk.core.Resource {

    protected CenRouteMaps(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected CenRouteMaps(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::CEN::CenRouteMaps</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public CenRouteMaps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.datasource.CenRouteMapsProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::CEN::CenRouteMaps</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public CenRouteMaps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.datasource.CenRouteMapsProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute RouteMapIds: The list of The RouteMap ids.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRouteMapIds() {
        return software.amazon.jsii.Kernel.get(this, "attrRouteMapIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RouteMaps: The information about RouteMaps.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRouteMaps() {
        return software.amazon.jsii.Kernel.get(this, "attrRouteMaps", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cen.datasource.CenRouteMaps}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cen.datasource.CenRouteMaps> {
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
        private final com.aliyun.ros.cdk.cen.datasource.CenRouteMapsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cen.datasource.CenRouteMapsProps.Builder();
        }

        /**
         * Property cenId: The ID of the CEN instance.
         * <p>
         * @return {@code this}
         * @param cenId Property cenId: The ID of the CEN instance. This parameter is required.
         */
        public Builder cenId(final java.lang.String cenId) {
            this.props.cenId(cenId);
            return this;
        }
        /**
         * Property cenId: The ID of the CEN instance.
         * <p>
         * @return {@code this}
         * @param cenId Property cenId: The ID of the CEN instance. This parameter is required.
         */
        public Builder cenId(final com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.props.cenId(cenId);
            return this;
        }

        /**
         * Property cenRegionId: The ID of the region where the routing policy is applied.
         * <p>
         * @return {@code this}
         * @param cenRegionId Property cenRegionId: The ID of the region where the routing policy is applied. This parameter is required.
         */
        public Builder cenRegionId(final java.lang.String cenRegionId) {
            this.props.cenRegionId(cenRegionId);
            return this;
        }
        /**
         * Property cenRegionId: The ID of the region where the routing policy is applied.
         * <p>
         * @return {@code this}
         * @param cenRegionId Property cenRegionId: The ID of the region where the routing policy is applied. This parameter is required.
         */
        public Builder cenRegionId(final com.aliyun.ros.cdk.core.IResolvable cenRegionId) {
            this.props.cenRegionId(cenRegionId);
            return this;
        }

        /**
         * Property routeMapId: The ID of the routing policy.
         * <p>
         * @return {@code this}
         * @param routeMapId Property routeMapId: The ID of the routing policy. This parameter is required.
         */
        public Builder routeMapId(final java.lang.String routeMapId) {
            this.props.routeMapId(routeMapId);
            return this;
        }
        /**
         * Property routeMapId: The ID of the routing policy.
         * <p>
         * @return {@code this}
         * @param routeMapId Property routeMapId: The ID of the routing policy. This parameter is required.
         */
        public Builder routeMapId(final com.aliyun.ros.cdk.core.IResolvable routeMapId) {
            this.props.routeMapId(routeMapId);
            return this;
        }

        /**
         * Property transitRouterRouteTableId: The route table ID of the transit router with which the routing policy is associated.
         * <p>
         * @return {@code this}
         * @param transitRouterRouteTableId Property transitRouterRouteTableId: The route table ID of the transit router with which the routing policy is associated. This parameter is required.
         */
        public Builder transitRouterRouteTableId(final java.lang.String transitRouterRouteTableId) {
            this.props.transitRouterRouteTableId(transitRouterRouteTableId);
            return this;
        }
        /**
         * Property transitRouterRouteTableId: The route table ID of the transit router with which the routing policy is associated.
         * <p>
         * @return {@code this}
         * @param transitRouterRouteTableId Property transitRouterRouteTableId: The route table ID of the transit router with which the routing policy is associated. This parameter is required.
         */
        public Builder transitRouterRouteTableId(final com.aliyun.ros.cdk.core.IResolvable transitRouterRouteTableId) {
            this.props.transitRouterRouteTableId(transitRouterRouteTableId);
            return this;
        }

        /**
         * Property transmitDirection: The direction in which the routing policy is applied.
         * <p>
         * @return {@code this}
         * @param transmitDirection Property transmitDirection: The direction in which the routing policy is applied. This parameter is required.
         */
        public Builder transmitDirection(final java.lang.String transmitDirection) {
            this.props.transmitDirection(transmitDirection);
            return this;
        }
        /**
         * Property transmitDirection: The direction in which the routing policy is applied.
         * <p>
         * @return {@code this}
         * @param transmitDirection Property transmitDirection: The direction in which the routing policy is applied. This parameter is required.
         */
        public Builder transmitDirection(final com.aliyun.ros.cdk.core.IResolvable transmitDirection) {
            this.props.transmitDirection(transmitDirection);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cen.datasource.CenRouteMaps}.
         */
        @Override
        public com.aliyun.ros.cdk.cen.datasource.CenRouteMaps build() {
            return new com.aliyun.ros.cdk.cen.datasource.CenRouteMaps(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
