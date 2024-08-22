package com.aliyun.ros.cdk.vpc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::VPC::DhcpOptionsSet</code>, which is used to create Dynamic Host Configuration Protocol (DHCP) options sets.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:24.610Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.DhcpOptionsSet")
public class DhcpOptionsSet extends com.aliyun.ros.cdk.core.Resource {

    protected DhcpOptionsSet(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DhcpOptionsSet(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public DhcpOptionsSet(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.DhcpOptionsSetProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public DhcpOptionsSet(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.DhcpOptionsSetProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public DhcpOptionsSet(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute DhcpOptionsSetId: The ID of the DHCP options set that is created.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDhcpOptionsSetId() {
        return software.amazon.jsii.Kernel.get(this, "attrDhcpOptionsSetId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.DhcpOptionsSetProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.DhcpOptionsSetProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.DhcpOptionsSetProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.DhcpOptionsSet}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.DhcpOptionsSet> {
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
        private com.aliyun.ros.cdk.vpc.DhcpOptionsSetProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property dhcpOptionsSetDescription: The description of the DHCP options set.
         * <p>
         * The description must be 2 to 256 characters in length and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param dhcpOptionsSetDescription Property dhcpOptionsSetDescription: The description of the DHCP options set. This parameter is required.
         */
        public Builder dhcpOptionsSetDescription(final java.lang.String dhcpOptionsSetDescription) {
            this.props().dhcpOptionsSetDescription(dhcpOptionsSetDescription);
            return this;
        }
        /**
         * Property dhcpOptionsSetDescription: The description of the DHCP options set.
         * <p>
         * The description must be 2 to 256 characters in length and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param dhcpOptionsSetDescription Property dhcpOptionsSetDescription: The description of the DHCP options set. This parameter is required.
         */
        public Builder dhcpOptionsSetDescription(final com.aliyun.ros.cdk.core.IResolvable dhcpOptionsSetDescription) {
            this.props().dhcpOptionsSetDescription(dhcpOptionsSetDescription);
            return this;
        }

        /**
         * Property dhcpOptionsSetName: The name of the DHCP options set.
         * <p>
         * The name must be 2 to 128 characters in length and can contain letters, Chinese characters, digits, underscores (_), and hyphens (-). It must start with a letter or a Chinese character.
         * <p>
         * @return {@code this}
         * @param dhcpOptionsSetName Property dhcpOptionsSetName: The name of the DHCP options set. This parameter is required.
         */
        public Builder dhcpOptionsSetName(final java.lang.String dhcpOptionsSetName) {
            this.props().dhcpOptionsSetName(dhcpOptionsSetName);
            return this;
        }
        /**
         * Property dhcpOptionsSetName: The name of the DHCP options set.
         * <p>
         * The name must be 2 to 128 characters in length and can contain letters, Chinese characters, digits, underscores (_), and hyphens (-). It must start with a letter or a Chinese character.
         * <p>
         * @return {@code this}
         * @param dhcpOptionsSetName Property dhcpOptionsSetName: The name of the DHCP options set. This parameter is required.
         */
        public Builder dhcpOptionsSetName(final com.aliyun.ros.cdk.core.IResolvable dhcpOptionsSetName) {
            this.props().dhcpOptionsSetName(dhcpOptionsSetName);
            return this;
        }

        /**
         * Property domainName: The root domain, for example, example.com. After a DHCP options set is associated with a Virtual Private Cloud (VPC) network, the root domain in the DHCP options set is automatically synchronized to the ECS instances in the VPC network.
         * <p>
         * @return {@code this}
         * @param domainName Property domainName: The root domain, for example, example.com. After a DHCP options set is associated with a Virtual Private Cloud (VPC) network, the root domain in the DHCP options set is automatically synchronized to the ECS instances in the VPC network. This parameter is required.
         */
        public Builder domainName(final java.lang.String domainName) {
            this.props().domainName(domainName);
            return this;
        }
        /**
         * Property domainName: The root domain, for example, example.com. After a DHCP options set is associated with a Virtual Private Cloud (VPC) network, the root domain in the DHCP options set is automatically synchronized to the ECS instances in the VPC network.
         * <p>
         * @return {@code this}
         * @param domainName Property domainName: The root domain, for example, example.com. After a DHCP options set is associated with a Virtual Private Cloud (VPC) network, the root domain in the DHCP options set is automatically synchronized to the ECS instances in the VPC network. This parameter is required.
         */
        public Builder domainName(final com.aliyun.ros.cdk.core.IResolvable domainName) {
            this.props().domainName(domainName);
            return this;
        }

        /**
         * Property domainNameServers: The DNS server IP addresses.
         * <p>
         * Note Before you specify any DNS server IP address, all ECS instances in the associated VPC network use the IP addresses of the Alibaba Cloud DNS servers, which are 100.100.2.136 and 100.100.2.138.
         * <p>
         * @return {@code this}
         * @param domainNameServers Property domainNameServers: The DNS server IP addresses. This parameter is required.
         */
        public Builder domainNameServers(final com.aliyun.ros.cdk.core.IResolvable domainNameServers) {
            this.props().domainNameServers(domainNameServers);
            return this;
        }
        /**
         * Property domainNameServers: The DNS server IP addresses.
         * <p>
         * Note Before you specify any DNS server IP address, all ECS instances in the associated VPC network use the IP addresses of the Alibaba Cloud DNS servers, which are 100.100.2.136 and 100.100.2.138.
         * <p>
         * @return {@code this}
         * @param domainNameServers Property domainNameServers: The DNS server IP addresses. This parameter is required.
         */
        public Builder domainNameServers(final java.util.List<? extends java.lang.Object> domainNameServers) {
            this.props().domainNameServers(domainNameServers);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.DhcpOptionsSet}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.DhcpOptionsSet build() {
            return new com.aliyun.ros.cdk.vpc.DhcpOptionsSet(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.vpc.DhcpOptionsSetProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.vpc.DhcpOptionsSetProps.Builder();
            }
            return this.props;
        }
    }
}
