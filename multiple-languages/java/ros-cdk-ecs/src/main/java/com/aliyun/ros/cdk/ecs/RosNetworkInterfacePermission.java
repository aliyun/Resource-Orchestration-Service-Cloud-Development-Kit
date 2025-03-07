package com.aliyun.ros.cdk.ecs;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ECS::NetworkInterfacePermission</code>, which is used to grant an account the permission to attach an elastic network interface (ENI) to an instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:05.111Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosNetworkInterfacePermission")
public class RosNetworkInterfacePermission extends com.aliyun.ros.cdk.core.RosResource {

    protected RosNetworkInterfacePermission(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosNetworkInterfacePermission(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ecs.RosNetworkInterfacePermission.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosNetworkInterfacePermission(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.RosNetworkInterfacePermissionProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNetworkInterfacePermissionId() {
        return software.amazon.jsii.Kernel.get(this, "attrNetworkInterfacePermissionId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAccountId() {
        return software.amazon.jsii.Kernel.get(this, "accountId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAccountId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "accountId", java.util.Objects.requireNonNull(value, "accountId is required"));
    }

    /**
     */
    public void setAccountId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "accountId", java.util.Objects.requireNonNull(value, "accountId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getNetworkInterfaceId() {
        return software.amazon.jsii.Kernel.get(this, "networkInterfaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNetworkInterfaceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "networkInterfaceId", java.util.Objects.requireNonNull(value, "networkInterfaceId is required"));
    }

    /**
     */
    public void setNetworkInterfaceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "networkInterfaceId", java.util.Objects.requireNonNull(value, "networkInterfaceId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPermission() {
        return software.amazon.jsii.Kernel.get(this, "permission", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPermission(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "permission", java.util.Objects.requireNonNull(value, "permission is required"));
    }

    /**
     */
    public void setPermission(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "permission", java.util.Objects.requireNonNull(value, "permission is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.RosNetworkInterfacePermission}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.RosNetworkInterfacePermission> {
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
        private final com.aliyun.ros.cdk.ecs.RosNetworkInterfacePermissionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.RosNetworkInterfacePermissionProps.Builder();
        }

        /**
         * @return {@code this}
         * @param accountId This parameter is required.
         */
        public Builder accountId(final java.lang.String accountId) {
            this.props.accountId(accountId);
            return this;
        }
        /**
         * @return {@code this}
         * @param accountId This parameter is required.
         */
        public Builder accountId(final com.aliyun.ros.cdk.core.IResolvable accountId) {
            this.props.accountId(accountId);
            return this;
        }

        /**
         * @return {@code this}
         * @param networkInterfaceId This parameter is required.
         */
        public Builder networkInterfaceId(final java.lang.String networkInterfaceId) {
            this.props.networkInterfaceId(networkInterfaceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param networkInterfaceId This parameter is required.
         */
        public Builder networkInterfaceId(final com.aliyun.ros.cdk.core.IResolvable networkInterfaceId) {
            this.props.networkInterfaceId(networkInterfaceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param permission This parameter is required.
         */
        public Builder permission(final java.lang.String permission) {
            this.props.permission(permission);
            return this;
        }
        /**
         * @return {@code this}
         * @param permission This parameter is required.
         */
        public Builder permission(final com.aliyun.ros.cdk.core.IResolvable permission) {
            this.props.permission(permission);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.RosNetworkInterfacePermission}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.RosNetworkInterfacePermission build() {
            return new com.aliyun.ros.cdk.ecs.RosNetworkInterfacePermission(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
