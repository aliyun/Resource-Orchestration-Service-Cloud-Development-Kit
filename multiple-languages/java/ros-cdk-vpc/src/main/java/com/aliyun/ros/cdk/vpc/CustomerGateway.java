package com.aliyun.ros.cdk.vpc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::VPC::CustomerGateway</code>, which is used to create a customer gateway.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T12:05:00.173Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.CustomerGateway")
public class CustomerGateway extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.vpc.ICustomerGateway {

    protected CustomerGateway(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected CustomerGateway(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public CustomerGateway(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.CustomerGatewayProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public CustomerGateway(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.CustomerGatewayProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CustomerGatewayId: The ID of the user gateway.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCustomerGatewayId() {
        return software.amazon.jsii.Kernel.get(this, "attrCustomerGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.CustomerGatewayProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.CustomerGatewayProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.CustomerGateway}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.CustomerGateway> {
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
        private final com.aliyun.ros.cdk.vpc.CustomerGatewayProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.CustomerGatewayProps.Builder();
        }

        /**
         * Property ipAddress: The static IP address of the gateway device in the data center.
         * <p>
         * <ul>
         * <li>If you want to create a public IPsec-VPN connection, enter a public IP
         * address.</li>
         * <li>If you want to create a private IPsec-VPN connection, enter a private IP
         * address.
         * You cannot use the following IP addresses. Otherwise, a IPsec-VPN connection
         * cannot be established:</li>
         * <li>100.64.0.0~100.127.255.255</li>
         * <li>127.0.0.0~127.255.255.255</li>
         * <li>169.254.0.0~169.254.255.255</li>
         * <li>224.0.0.0~239.255.255.255</li>
         * <li>255.0.0.0~255.255.255.255</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param ipAddress Property ipAddress: The static IP address of the gateway device in the data center. This parameter is required.
         */
        public Builder ipAddress(final java.lang.String ipAddress) {
            this.props.ipAddress(ipAddress);
            return this;
        }
        /**
         * Property ipAddress: The static IP address of the gateway device in the data center.
         * <p>
         * <ul>
         * <li>If you want to create a public IPsec-VPN connection, enter a public IP
         * address.</li>
         * <li>If you want to create a private IPsec-VPN connection, enter a private IP
         * address.
         * You cannot use the following IP addresses. Otherwise, a IPsec-VPN connection
         * cannot be established:</li>
         * <li>100.64.0.0~100.127.255.255</li>
         * <li>127.0.0.0~127.255.255.255</li>
         * <li>169.254.0.0~169.254.255.255</li>
         * <li>224.0.0.0~239.255.255.255</li>
         * <li>255.0.0.0~255.255.255.255</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param ipAddress Property ipAddress: The static IP address of the gateway device in the data center. This parameter is required.
         */
        public Builder ipAddress(final com.aliyun.ros.cdk.core.IResolvable ipAddress) {
            this.props.ipAddress(ipAddress);
            return this;
        }

        /**
         * Property asn: The autonomous system number (ASN) of the gateway device in your data center.
         * <p>
         * This parameter is required If you want to use Border Gateway Protocol (BGP) for
         * the IPsec-VPN connection. Valid values: 1 to 4294967295. 45104 is not supported.
         * Asn is a 4-byte number. You can enter it in two segments and separate the first
         * 16 bits from the following 16 bits with a period (.). Enter the number in each
         * segment in decimal format.
         * For example, if you enter 123.456, the ASN is 8061384. The ASN is calculated by
         * using the following formula: 123 × 65536 + 456 = 8061384.
         * <p>
         * <blockquote>
         * <p>
         * <ul>
         * <li>We recommend that you use a private ASN to establish BGP connections to
         * the cloud platform. For information about the range of private ASNs, see the relevant
         * documentation.</li>
         * <li>45104 is a unique identifier assigned by IANA to the cloud platform. It is used to
         * identify the cloud platform during route selection and data transmission over the
         * Internet.</li>
         * </ul>
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param asn Property asn: The autonomous system number (ASN) of the gateway device in your data center. This parameter is required.
         */
        public Builder asn(final java.lang.Number asn) {
            this.props.asn(asn);
            return this;
        }
        /**
         * Property asn: The autonomous system number (ASN) of the gateway device in your data center.
         * <p>
         * This parameter is required If you want to use Border Gateway Protocol (BGP) for
         * the IPsec-VPN connection. Valid values: 1 to 4294967295. 45104 is not supported.
         * Asn is a 4-byte number. You can enter it in two segments and separate the first
         * 16 bits from the following 16 bits with a period (.). Enter the number in each
         * segment in decimal format.
         * For example, if you enter 123.456, the ASN is 8061384. The ASN is calculated by
         * using the following formula: 123 × 65536 + 456 = 8061384.
         * <p>
         * <blockquote>
         * <p>
         * <ul>
         * <li>We recommend that you use a private ASN to establish BGP connections to
         * the cloud platform. For information about the range of private ASNs, see the relevant
         * documentation.</li>
         * <li>45104 is a unique identifier assigned by IANA to the cloud platform. It is used to
         * identify the cloud platform during route selection and data transmission over the
         * Internet.</li>
         * </ul>
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param asn Property asn: The autonomous system number (ASN) of the gateway device in your data center. This parameter is required.
         */
        public Builder asn(final com.aliyun.ros.cdk.core.IResolvable asn) {
            this.props.asn(asn);
            return this;
        }

        /**
         * Property description: The description of the customer gateway.
         * <p>
         * The description must be 1 to 100 characters in length, and cannot start with
         * <code>http:\/\/</code> or <code>https:\/\/</code>.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the customer gateway. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the customer gateway.
         * <p>
         * The description must be 1 to 100 characters in length, and cannot start with
         * <code>http:\/\/</code> or <code>https:\/\/</code>.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the customer gateway. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property name: The name of the customer gateway.
         * <p>
         * The name must be 1 to 100 characters in length, and cannot start with <code>http:\/\/</code>
         * or <code>https:\/\/</code>.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the customer gateway. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the customer gateway.
         * <p>
         * The name must be 1 to 100 characters in length, and cannot start with <code>http:\/\/</code>
         * or <code>https:\/\/</code>.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the customer gateway. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group to which the user gateway belongs.
         * <p>
         * <ul>
         * <li>You can call the ListResourceGroups interface to query the resource group ID.</li>
         * <li>If you do not specify a resource group, the user gateway will belong to the default resource group after creation.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the user gateway belongs. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group to which the user gateway belongs.
         * <p>
         * <ul>
         * <li>You can call the ListResourceGroups interface to query the resource group ID.</li>
         * <li>If you do not specify a resource group, the user gateway will belong to the default resource group after creation.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the user gateway belongs. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.CustomerGateway}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.CustomerGateway build() {
            return new com.aliyun.ros.cdk.vpc.CustomerGateway(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
