package com.aliyun.ros.cdk.cen;

/**
 * A ROS resource type:  `ALIYUN::CEN::TransitRouterRouteTable`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.49.0 (build e322d87)", date = "2021-12-21T15:12:57.019Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.TransitRouterRouteTable")
public class TransitRouterRouteTable extends com.aliyun.ros.cdk.core.Resource {

    protected TransitRouterRouteTable(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected TransitRouterRouteTable(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::CEN::TransitRouterRouteTable`.
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
    public TransitRouterRouteTable(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.TransitRouterRouteTableProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::CEN::TransitRouterRouteTable`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public TransitRouterRouteTable(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.TransitRouterRouteTableProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ClientToken: ClientToken.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClientToken() {
        return software.amazon.jsii.Kernel.get(this, "attrClientToken", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TransitRouterId: TransitRouterId.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterId() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TransitRouterRouteTableDescription: TransitRouterRouteTableDescription.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterRouteTableDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteTableDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TransitRouterRouteTableId: TransitRouterRouteTableId.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterRouteTableId() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteTableId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TransitRouterRouteTableName: TransitRouterRouteTableName.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterRouteTableName() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteTableName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TransitRouterRouteTableType: TransitRouterRouteTableType.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterRouteTableType() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteTableType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cen.TransitRouterRouteTable}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cen.TransitRouterRouteTable> {
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
        private final com.aliyun.ros.cdk.cen.TransitRouterRouteTableProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cen.TransitRouterRouteTableProps.Builder();
        }

        /**
         * Property transitRouterId: TransitRouterId.
         * <p>
         * @return {@code this}
         * @param transitRouterId Property transitRouterId: TransitRouterId. This parameter is required.
         */
        public Builder transitRouterId(final java.lang.String transitRouterId) {
            this.props.transitRouterId(transitRouterId);
            return this;
        }
        /**
         * Property transitRouterId: TransitRouterId.
         * <p>
         * @return {@code this}
         * @param transitRouterId Property transitRouterId: TransitRouterId. This parameter is required.
         */
        public Builder transitRouterId(final com.aliyun.ros.cdk.core.IResolvable transitRouterId) {
            this.props.transitRouterId(transitRouterId);
            return this;
        }

        /**
         * Property transitRouterRouteTableDescription: TransitRouterRouteTableDescription.
         * <p>
         * @return {@code this}
         * @param transitRouterRouteTableDescription Property transitRouterRouteTableDescription: TransitRouterRouteTableDescription. This parameter is required.
         */
        public Builder transitRouterRouteTableDescription(final java.lang.String transitRouterRouteTableDescription) {
            this.props.transitRouterRouteTableDescription(transitRouterRouteTableDescription);
            return this;
        }
        /**
         * Property transitRouterRouteTableDescription: TransitRouterRouteTableDescription.
         * <p>
         * @return {@code this}
         * @param transitRouterRouteTableDescription Property transitRouterRouteTableDescription: TransitRouterRouteTableDescription. This parameter is required.
         */
        public Builder transitRouterRouteTableDescription(final com.aliyun.ros.cdk.core.IResolvable transitRouterRouteTableDescription) {
            this.props.transitRouterRouteTableDescription(transitRouterRouteTableDescription);
            return this;
        }

        /**
         * Property transitRouterRouteTableName: TransitRouterRouteTableName.
         * <p>
         * @return {@code this}
         * @param transitRouterRouteTableName Property transitRouterRouteTableName: TransitRouterRouteTableName. This parameter is required.
         */
        public Builder transitRouterRouteTableName(final java.lang.String transitRouterRouteTableName) {
            this.props.transitRouterRouteTableName(transitRouterRouteTableName);
            return this;
        }
        /**
         * Property transitRouterRouteTableName: TransitRouterRouteTableName.
         * <p>
         * @return {@code this}
         * @param transitRouterRouteTableName Property transitRouterRouteTableName: TransitRouterRouteTableName. This parameter is required.
         */
        public Builder transitRouterRouteTableName(final com.aliyun.ros.cdk.core.IResolvable transitRouterRouteTableName) {
            this.props.transitRouterRouteTableName(transitRouterRouteTableName);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.cen.TransitRouterRouteTable}.
         */
        @Override
        public com.aliyun.ros.cdk.cen.TransitRouterRouteTable build() {
            return new com.aliyun.ros.cdk.cen.TransitRouterRouteTable(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
