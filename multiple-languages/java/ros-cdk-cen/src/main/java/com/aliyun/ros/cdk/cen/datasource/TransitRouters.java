package com.aliyun.ros.cdk.cen.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::CEN::TransitRouters</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T05:23:23.756Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.datasource.TransitRouters")
public class TransitRouters extends com.aliyun.ros.cdk.core.Resource {

    protected TransitRouters(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected TransitRouters(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::CEN::TransitRouters</code>.
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
    public TransitRouters(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.datasource.TransitRoutersProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::CEN::TransitRouters</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public TransitRouters(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.datasource.TransitRoutersProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute TransitRouterIds: The list of TransitRouter IDs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterIds() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TransitRouters: The list of TransitRouters.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouters() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouters", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cen.datasource.TransitRouters}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cen.datasource.TransitRouters> {
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
        private final com.aliyun.ros.cdk.cen.datasource.TransitRoutersProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cen.datasource.TransitRoutersProps.Builder();
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
         * Property regionId: The ID of the region where the transit router is deployed.
         * <p>
         * You can call the DescribeRegions operation to query region IDs.
         * <p>
         * @return {@code this}
         * @param regionId Property regionId: The ID of the region where the transit router is deployed. This parameter is required.
         */
        public Builder regionId(final java.lang.String regionId) {
            this.props.regionId(regionId);
            return this;
        }
        /**
         * Property regionId: The ID of the region where the transit router is deployed.
         * <p>
         * You can call the DescribeRegions operation to query region IDs.
         * <p>
         * @return {@code this}
         * @param regionId Property regionId: The ID of the region where the transit router is deployed. This parameter is required.
         */
        public Builder regionId(final com.aliyun.ros.cdk.core.IResolvable regionId) {
            this.props.regionId(regionId);
            return this;
        }

        /**
         * Property transitRouterId: The ID of the transit router.
         * <p>
         * @return {@code this}
         * @param transitRouterId Property transitRouterId: The ID of the transit router. This parameter is required.
         */
        public Builder transitRouterId(final java.lang.String transitRouterId) {
            this.props.transitRouterId(transitRouterId);
            return this;
        }
        /**
         * Property transitRouterId: The ID of the transit router.
         * <p>
         * @return {@code this}
         * @param transitRouterId Property transitRouterId: The ID of the transit router. This parameter is required.
         */
        public Builder transitRouterId(final com.aliyun.ros.cdk.core.IResolvable transitRouterId) {
            this.props.transitRouterId(transitRouterId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cen.datasource.TransitRouters}.
         */
        @Override
        public com.aliyun.ros.cdk.cen.datasource.TransitRouters build() {
            return new com.aliyun.ros.cdk.cen.datasource.TransitRouters(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
