package com.aliyun.ros.cdk.ecs;

/**
 * A ROS resource type:  `ALIYUN::ECS::NetworkInterfacePermission`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-28T07:49:02.297Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.NetworkInterfacePermission")
public class NetworkInterfacePermission extends com.aliyun.ros.cdk.core.Resource {

    protected NetworkInterfacePermission(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected NetworkInterfacePermission(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ECS::NetworkInterfacePermission`.
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
    public NetworkInterfacePermission(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.NetworkInterfacePermissionProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ECS::NetworkInterfacePermission`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public NetworkInterfacePermission(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.NetworkInterfacePermissionProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute NetworkInterfacePermissionId: the network interface permission id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNetworkInterfacePermissionId() {
        return software.amazon.jsii.Kernel.get(this, "attrNetworkInterfacePermissionId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.NetworkInterfacePermission}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.NetworkInterfacePermission> {
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
        private final com.aliyun.ros.cdk.ecs.NetworkInterfacePermissionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.NetworkInterfacePermissionProps.Builder();
        }

        /**
         * Property accountId: the account id.
         * <p>
         * @return {@code this}
         * @param accountId Property accountId: the account id. This parameter is required.
         */
        public Builder accountId(final java.lang.String accountId) {
            this.props.accountId(accountId);
            return this;
        }
        /**
         * Property accountId: the account id.
         * <p>
         * @return {@code this}
         * @param accountId Property accountId: the account id. This parameter is required.
         */
        public Builder accountId(final com.aliyun.ros.cdk.core.IResolvable accountId) {
            this.props.accountId(accountId);
            return this;
        }

        /**
         * Property networkInterfaceId: Network interface id.
         * <p>
         * @return {@code this}
         * @param networkInterfaceId Property networkInterfaceId: Network interface id. This parameter is required.
         */
        public Builder networkInterfaceId(final java.lang.String networkInterfaceId) {
            this.props.networkInterfaceId(networkInterfaceId);
            return this;
        }
        /**
         * Property networkInterfaceId: Network interface id.
         * <p>
         * @return {@code this}
         * @param networkInterfaceId Property networkInterfaceId: Network interface id. This parameter is required.
         */
        public Builder networkInterfaceId(final com.aliyun.ros.cdk.core.IResolvable networkInterfaceId) {
            this.props.networkInterfaceId(networkInterfaceId);
            return this;
        }

        /**
         * Property permission: the permission.
         * <p>
         * @return {@code this}
         * @param permission Property permission: the permission. This parameter is required.
         */
        public Builder permission(final java.lang.String permission) {
            this.props.permission(permission);
            return this;
        }
        /**
         * Property permission: the permission.
         * <p>
         * @return {@code this}
         * @param permission Property permission: the permission. This parameter is required.
         */
        public Builder permission(final com.aliyun.ros.cdk.core.IResolvable permission) {
            this.props.permission(permission);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ecs.NetworkInterfacePermission}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.NetworkInterfacePermission build() {
            return new com.aliyun.ros.cdk.ecs.NetworkInterfacePermission(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
