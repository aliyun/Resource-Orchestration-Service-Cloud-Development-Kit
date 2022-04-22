package com.aliyun.ros.cdk.ecs;

/**
 * A ROS resource type:  `ALIYUN::ECS::AssignIpv6Addresses`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.57.0 (build f614666)", date = "2022-04-22T03:34:40.062Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.AssignIpv6Addresses")
public class AssignIpv6Addresses extends com.aliyun.ros.cdk.core.Resource {

    protected AssignIpv6Addresses(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AssignIpv6Addresses(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ECS::AssignIpv6Addresses`.
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
    public AssignIpv6Addresses(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.AssignIpv6AddressesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ECS::AssignIpv6Addresses`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public AssignIpv6Addresses(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.AssignIpv6AddressesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Ipv6Addresses: Assigned IPv6 addresses.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIpv6Addresses() {
        return software.amazon.jsii.Kernel.get(this, "attrIpv6Addresses", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Ipv6AddressIds: Assigned IPv6 address IDs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIpv6AddressIds() {
        return software.amazon.jsii.Kernel.get(this, "attrIpv6AddressIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute NetworkInterfaceId: Elastic network interface ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNetworkInterfaceId() {
        return software.amazon.jsii.Kernel.get(this, "attrNetworkInterfaceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.AssignIpv6Addresses}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.AssignIpv6Addresses> {
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
        private final com.aliyun.ros.cdk.ecs.AssignIpv6AddressesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.AssignIpv6AddressesProps.Builder();
        }

        /**
         * Property networkInterfaceId: Elastic network interface ID.
         * <p>
         * @return {@code this}
         * @param networkInterfaceId Property networkInterfaceId: Elastic network interface ID. This parameter is required.
         */
        public Builder networkInterfaceId(final java.lang.String networkInterfaceId) {
            this.props.networkInterfaceId(networkInterfaceId);
            return this;
        }
        /**
         * Property networkInterfaceId: Elastic network interface ID.
         * <p>
         * @return {@code this}
         * @param networkInterfaceId Property networkInterfaceId: Elastic network interface ID. This parameter is required.
         */
        public Builder networkInterfaceId(final com.aliyun.ros.cdk.core.IResolvable networkInterfaceId) {
            this.props.networkInterfaceId(networkInterfaceId);
            return this;
        }

        /**
         * Property ipv6AddressCount: IPv6 addresses specified number of randomly generated interfaces elasticity.
         * <p>
         * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
         * <p>
         * @return {@code this}
         * @param ipv6AddressCount Property ipv6AddressCount: IPv6 addresses specified number of randomly generated interfaces elasticity. This parameter is required.
         */
        public Builder ipv6AddressCount(final java.lang.Number ipv6AddressCount) {
            this.props.ipv6AddressCount(ipv6AddressCount);
            return this;
        }
        /**
         * Property ipv6AddressCount: IPv6 addresses specified number of randomly generated interfaces elasticity.
         * <p>
         * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
         * <p>
         * @return {@code this}
         * @param ipv6AddressCount Property ipv6AddressCount: IPv6 addresses specified number of randomly generated interfaces elasticity. This parameter is required.
         */
        public Builder ipv6AddressCount(final com.aliyun.ros.cdk.core.IResolvable ipv6AddressCount) {
            this.props.ipv6AddressCount(ipv6AddressCount);
            return this;
        }

        /**
         * Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC.
         * <p>
         * Currently, the maximum list size is 1. Example value: 2001:db8:1234:1a00::*** .
         * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
         * <p>
         * @return {@code this}
         * @param ipv6Addresses Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC. This parameter is required.
         */
        public Builder ipv6Addresses(final java.util.List<? extends java.lang.Object> ipv6Addresses) {
            this.props.ipv6Addresses(ipv6Addresses);
            return this;
        }
        /**
         * Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC.
         * <p>
         * Currently, the maximum list size is 1. Example value: 2001:db8:1234:1a00::*** .
         * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
         * <p>
         * @return {@code this}
         * @param ipv6Addresses Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC. This parameter is required.
         */
        public Builder ipv6Addresses(final com.aliyun.ros.cdk.core.IResolvable ipv6Addresses) {
            this.props.ipv6Addresses(ipv6Addresses);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ecs.AssignIpv6Addresses}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.AssignIpv6Addresses build() {
            return new com.aliyun.ros.cdk.ecs.AssignIpv6Addresses(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
