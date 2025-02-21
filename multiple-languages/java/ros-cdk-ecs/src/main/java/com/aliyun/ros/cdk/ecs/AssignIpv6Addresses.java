package com.aliyun.ros.cdk.ecs;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ECS::AssignIpv6Addresses</code>, which is used to assign one or more IPv6 addresses to an elastic network interface (ENI).
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:15.030Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.AssignIpv6Addresses")
public class AssignIpv6Addresses extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ecs.IAssignIpv6Addresses {

    protected AssignIpv6Addresses(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AssignIpv6Addresses(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public AssignIpv6Addresses(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.AssignIpv6AddressesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public AssignIpv6Addresses(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.AssignIpv6AddressesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Ipv6Addresses: Assigned IPv6 addresses.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv6Addresses() {
        return software.amazon.jsii.Kernel.get(this, "attrIpv6Addresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Ipv6AddressIds: Assigned IPv6 address IDs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv6AddressIds() {
        return software.amazon.jsii.Kernel.get(this, "attrIpv6AddressIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NetworkInterfaceId: Elastic network interface ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkInterfaceId() {
        return software.amazon.jsii.Kernel.get(this, "attrNetworkInterfaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.AssignIpv6AddressesProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.AssignIpv6AddressesProps.class));
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
         * Currently, the maximum list size is 10. Example value: 2001:db8:1234:1a00::*** .
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
         * Currently, the maximum list size is 10. Example value: 2001:db8:1234:1a00::*** .
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
         * Property ipv6PrefixCount: IPv6 prefix specified number of randomly generated interfaces elasticity.
         * <p>
         * @return {@code this}
         * @param ipv6PrefixCount Property ipv6PrefixCount: IPv6 prefix specified number of randomly generated interfaces elasticity. This parameter is required.
         */
        public Builder ipv6PrefixCount(final java.lang.Number ipv6PrefixCount) {
            this.props.ipv6PrefixCount(ipv6PrefixCount);
            return this;
        }
        /**
         * Property ipv6PrefixCount: IPv6 prefix specified number of randomly generated interfaces elasticity.
         * <p>
         * @return {@code this}
         * @param ipv6PrefixCount Property ipv6PrefixCount: IPv6 prefix specified number of randomly generated interfaces elasticity. This parameter is required.
         */
        public Builder ipv6PrefixCount(final com.aliyun.ros.cdk.core.IResolvable ipv6PrefixCount) {
            this.props.ipv6PrefixCount(ipv6PrefixCount);
            return this;
        }

        /**
         * Property ipv6Prefixes: Specify one or more IPv6 prefixes for the elastic NIC.
         * <p>
         * @return {@code this}
         * @param ipv6Prefixes Property ipv6Prefixes: Specify one or more IPv6 prefixes for the elastic NIC. This parameter is required.
         */
        public Builder ipv6Prefixes(final java.util.List<? extends java.lang.Object> ipv6Prefixes) {
            this.props.ipv6Prefixes(ipv6Prefixes);
            return this;
        }
        /**
         * Property ipv6Prefixes: Specify one or more IPv6 prefixes for the elastic NIC.
         * <p>
         * @return {@code this}
         * @param ipv6Prefixes Property ipv6Prefixes: Specify one or more IPv6 prefixes for the elastic NIC. This parameter is required.
         */
        public Builder ipv6Prefixes(final com.aliyun.ros.cdk.core.IResolvable ipv6Prefixes) {
            this.props.ipv6Prefixes(ipv6Prefixes);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.AssignIpv6Addresses}.
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
