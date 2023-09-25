package com.aliyun.ros.cdk.cen.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::CEN::TransitRouterRouteTables</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T05:23:23.754Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.datasource.TransitRouterRouteTables")
public class TransitRouterRouteTables extends com.aliyun.ros.cdk.core.Resource {

    protected TransitRouterRouteTables(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected TransitRouterRouteTables(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::CEN::TransitRouterRouteTables</code>.
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
    public TransitRouterRouteTables(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.datasource.TransitRouterRouteTablesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::CEN::TransitRouterRouteTables</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public TransitRouterRouteTables(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.datasource.TransitRouterRouteTablesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute TransitRouterRouteTableIds: The list of TransitRouterRouteTable IDs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterRouteTableIds() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteTableIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TransitRouterRouteTables: The list of TransitRouterRouteTables.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterRouteTables() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteTables", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cen.datasource.TransitRouterRouteTables}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cen.datasource.TransitRouterRouteTables> {
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
        private final com.aliyun.ros.cdk.cen.datasource.TransitRouterRouteTablesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cen.datasource.TransitRouterRouteTablesProps.Builder();
        }

        /**
         * Property transitRouterId: The ID of the Enterprise Edition transit router.
         * <p>
         * @return {@code this}
         * @param transitRouterId Property transitRouterId: The ID of the Enterprise Edition transit router. This parameter is required.
         */
        public Builder transitRouterId(final java.lang.String transitRouterId) {
            this.props.transitRouterId(transitRouterId);
            return this;
        }
        /**
         * Property transitRouterId: The ID of the Enterprise Edition transit router.
         * <p>
         * @return {@code this}
         * @param transitRouterId Property transitRouterId: The ID of the Enterprise Edition transit router. This parameter is required.
         */
        public Builder transitRouterId(final com.aliyun.ros.cdk.core.IResolvable transitRouterId) {
            this.props.transitRouterId(transitRouterId);
            return this;
        }

        /**
         * Property transitRouterRouteTableIds: The ID of the route table.
         * <p>
         * You can query multiple route tables in each call. Maximum value of N: 20.
         * <p>
         * @return {@code this}
         * @param transitRouterRouteTableIds Property transitRouterRouteTableIds: The ID of the route table. This parameter is required.
         */
        public Builder transitRouterRouteTableIds(final com.aliyun.ros.cdk.core.IResolvable transitRouterRouteTableIds) {
            this.props.transitRouterRouteTableIds(transitRouterRouteTableIds);
            return this;
        }
        /**
         * Property transitRouterRouteTableIds: The ID of the route table.
         * <p>
         * You can query multiple route tables in each call. Maximum value of N: 20.
         * <p>
         * @return {@code this}
         * @param transitRouterRouteTableIds Property transitRouterRouteTableIds: The ID of the route table. This parameter is required.
         */
        public Builder transitRouterRouteTableIds(final java.util.List<? extends java.lang.Object> transitRouterRouteTableIds) {
            this.props.transitRouterRouteTableIds(transitRouterRouteTableIds);
            return this;
        }

        /**
         * Property transitRouterRouteTableNames: The name of the route table.
         * <p>
         * You can query multiple route tables in each call. Maximum value of N: 20.
         * Note If you specify both TransitRouterRouteTableNames.N and TransitRouterRouteTableIds.N, make sure that the specified name and ID belong to the same route table.
         * <p>
         * @return {@code this}
         * @param transitRouterRouteTableNames Property transitRouterRouteTableNames: The name of the route table. This parameter is required.
         */
        public Builder transitRouterRouteTableNames(final com.aliyun.ros.cdk.core.IResolvable transitRouterRouteTableNames) {
            this.props.transitRouterRouteTableNames(transitRouterRouteTableNames);
            return this;
        }
        /**
         * Property transitRouterRouteTableNames: The name of the route table.
         * <p>
         * You can query multiple route tables in each call. Maximum value of N: 20.
         * Note If you specify both TransitRouterRouteTableNames.N and TransitRouterRouteTableIds.N, make sure that the specified name and ID belong to the same route table.
         * <p>
         * @return {@code this}
         * @param transitRouterRouteTableNames Property transitRouterRouteTableNames: The name of the route table. This parameter is required.
         */
        public Builder transitRouterRouteTableNames(final java.util.List<? extends java.lang.Object> transitRouterRouteTableNames) {
            this.props.transitRouterRouteTableNames(transitRouterRouteTableNames);
            return this;
        }

        /**
         * Property transitRouterRouteTableStatus: The state of the route table.
         * <p>
         * Valid values:
         * Creating: The route table is being created.
         * Deleting: The route table is being deleted.
         * Active: The route table is available for use.
         * <p>
         * @return {@code this}
         * @param transitRouterRouteTableStatus Property transitRouterRouteTableStatus: The state of the route table. This parameter is required.
         */
        public Builder transitRouterRouteTableStatus(final java.lang.String transitRouterRouteTableStatus) {
            this.props.transitRouterRouteTableStatus(transitRouterRouteTableStatus);
            return this;
        }
        /**
         * Property transitRouterRouteTableStatus: The state of the route table.
         * <p>
         * Valid values:
         * Creating: The route table is being created.
         * Deleting: The route table is being deleted.
         * Active: The route table is available for use.
         * <p>
         * @return {@code this}
         * @param transitRouterRouteTableStatus Property transitRouterRouteTableStatus: The state of the route table. This parameter is required.
         */
        public Builder transitRouterRouteTableStatus(final com.aliyun.ros.cdk.core.IResolvable transitRouterRouteTableStatus) {
            this.props.transitRouterRouteTableStatus(transitRouterRouteTableStatus);
            return this;
        }

        /**
         * Property transitRouterRouteTableType: The type of route table.
         * <p>
         * Valid values:
         * Custom: a custom route table
         * System: the default route table
         * <p>
         * @return {@code this}
         * @param transitRouterRouteTableType Property transitRouterRouteTableType: The type of route table. This parameter is required.
         */
        public Builder transitRouterRouteTableType(final java.lang.String transitRouterRouteTableType) {
            this.props.transitRouterRouteTableType(transitRouterRouteTableType);
            return this;
        }
        /**
         * Property transitRouterRouteTableType: The type of route table.
         * <p>
         * Valid values:
         * Custom: a custom route table
         * System: the default route table
         * <p>
         * @return {@code this}
         * @param transitRouterRouteTableType Property transitRouterRouteTableType: The type of route table. This parameter is required.
         */
        public Builder transitRouterRouteTableType(final com.aliyun.ros.cdk.core.IResolvable transitRouterRouteTableType) {
            this.props.transitRouterRouteTableType(transitRouterRouteTableType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cen.datasource.TransitRouterRouteTables}.
         */
        @Override
        public com.aliyun.ros.cdk.cen.datasource.TransitRouterRouteTables build() {
            return new com.aliyun.ros.cdk.cen.datasource.TransitRouterRouteTables(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
