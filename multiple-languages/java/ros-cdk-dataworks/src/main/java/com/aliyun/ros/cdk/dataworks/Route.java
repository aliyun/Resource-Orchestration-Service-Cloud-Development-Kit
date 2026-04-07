package com.aliyun.ros.cdk.dataworks;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::DataWorks::Route</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:23.626Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dataworks.$Module.class, fqn = "@alicloud/ros-cdk-dataworks.Route")
public class Route extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.dataworks.IRoute {

    protected Route(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Route(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Route(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dataworks.RouteProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Route(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dataworks.RouteProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CreateTime: Time when route information was created.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DestinationCidr: The CIDR blocks of the destination-based route.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDestinationCidr() {
        return software.amazon.jsii.Kernel.get(this, "attrDestinationCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DwResourceGroupId: ID of the resource group to which the route belongs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDwResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrDwResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NetworkId: The ID of the network resource to which the route belongs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkId() {
        return software.amazon.jsii.Kernel.get(this, "attrNetworkId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceId: Identifier of the network resource to which the route belongs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RouteId: The route ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouteId() {
        return software.amazon.jsii.Kernel.get(this, "attrRouteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dataworks.RouteProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dataworks.RouteProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.dataworks.Route}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dataworks.Route> {
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
        private final com.aliyun.ros.cdk.dataworks.RouteProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dataworks.RouteProps.Builder();
        }

        /**
         * Property destinationCidr: The CIDR blocks of the destination-based route.
         * <p>
         * @return {@code this}
         * @param destinationCidr Property destinationCidr: The CIDR blocks of the destination-based route. This parameter is required.
         */
        public Builder destinationCidr(final java.lang.String destinationCidr) {
            this.props.destinationCidr(destinationCidr);
            return this;
        }
        /**
         * Property destinationCidr: The CIDR blocks of the destination-based route.
         * <p>
         * @return {@code this}
         * @param destinationCidr Property destinationCidr: The CIDR blocks of the destination-based route. This parameter is required.
         */
        public Builder destinationCidr(final com.aliyun.ros.cdk.core.IResolvable destinationCidr) {
            this.props.destinationCidr(destinationCidr);
            return this;
        }

        /**
         * Property networkId: The ID of the network resource to which the route belongs.
         * <p>
         * @return {@code this}
         * @param networkId Property networkId: The ID of the network resource to which the route belongs. This parameter is required.
         */
        public Builder networkId(final java.lang.Number networkId) {
            this.props.networkId(networkId);
            return this;
        }
        /**
         * Property networkId: The ID of the network resource to which the route belongs.
         * <p>
         * @return {@code this}
         * @param networkId Property networkId: The ID of the network resource to which the route belongs. This parameter is required.
         */
        public Builder networkId(final com.aliyun.ros.cdk.core.IResolvable networkId) {
            this.props.networkId(networkId);
            return this;
        }

        /**
         * Property dwResourceGroupId: ID of the resource group to which the route belongs.
         * <p>
         * @return {@code this}
         * @param dwResourceGroupId Property dwResourceGroupId: ID of the resource group to which the route belongs. This parameter is required.
         */
        public Builder dwResourceGroupId(final java.lang.String dwResourceGroupId) {
            this.props.dwResourceGroupId(dwResourceGroupId);
            return this;
        }
        /**
         * Property dwResourceGroupId: ID of the resource group to which the route belongs.
         * <p>
         * @return {@code this}
         * @param dwResourceGroupId Property dwResourceGroupId: ID of the resource group to which the route belongs. This parameter is required.
         */
        public Builder dwResourceGroupId(final com.aliyun.ros.cdk.core.IResolvable dwResourceGroupId) {
            this.props.dwResourceGroupId(dwResourceGroupId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dataworks.Route}.
         */
        @Override
        public com.aliyun.ros.cdk.dataworks.Route build() {
            return new com.aliyun.ros.cdk.dataworks.Route(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
