package com.aliyun.ros.cdk.vpc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::VPC::Ipv6InternetBandwidth</code>, which is used to purchase Internet bandwidth for an IPv6 address.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:18.387Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.Ipv6InternetBandwidth")
public class Ipv6InternetBandwidth extends com.aliyun.ros.cdk.core.Resource {

    protected Ipv6InternetBandwidth(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Ipv6InternetBandwidth(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Ipv6InternetBandwidth(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.Ipv6InternetBandwidthProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Ipv6InternetBandwidth(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.Ipv6InternetBandwidthProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute InternetBandwidthId: Purchase of public network bandwidth.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInternetBandwidthId() {
        return software.amazon.jsii.Kernel.get(this, "attrInternetBandwidthId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.Ipv6InternetBandwidth}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.Ipv6InternetBandwidth> {
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
        private final com.aliyun.ros.cdk.vpc.Ipv6InternetBandwidthProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.Ipv6InternetBandwidthProps.Builder();
        }

        /**
         * Property bandwidth: Public IPv6 address of bandwidth, unit: Mbps, range: 1-5000.
         * <p>
         * When InternetChargeType is PayByBandwidth, the bandwidth of the public network is the IPv6 address 1-5000.
         * When InternetChargeType is PayByTraffic, public network bandwidth IPv6 addresses while IPv6 gateway restricted specifications.
         * Small (default free version), the public network bandwidth range 1-500.
         * Medium (Enterprise Edition), the public network bandwidth range from 1 to 1000.
         * Large (Enterprise Edition), the public network bandwidth range 1-2000.
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: Public IPv6 address of bandwidth, unit: Mbps, range: 1-5000. This parameter is required.
         */
        public Builder bandwidth(final java.lang.Number bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }
        /**
         * Property bandwidth: Public IPv6 address of bandwidth, unit: Mbps, range: 1-5000.
         * <p>
         * When InternetChargeType is PayByBandwidth, the bandwidth of the public network is the IPv6 address 1-5000.
         * When InternetChargeType is PayByTraffic, public network bandwidth IPv6 addresses while IPv6 gateway restricted specifications.
         * Small (default free version), the public network bandwidth range 1-500.
         * Medium (Enterprise Edition), the public network bandwidth range from 1 to 1000.
         * Large (Enterprise Edition), the public network bandwidth range 1-2000.
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: Public IPv6 address of bandwidth, unit: Mbps, range: 1-5000. This parameter is required.
         */
        public Builder bandwidth(final com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }

        /**
         * Property ipv6AddressId: ID of IPv6 address.
         * <p>
         * @return {@code this}
         * @param ipv6AddressId Property ipv6AddressId: ID of IPv6 address. This parameter is required.
         */
        public Builder ipv6AddressId(final java.lang.String ipv6AddressId) {
            this.props.ipv6AddressId(ipv6AddressId);
            return this;
        }
        /**
         * Property ipv6AddressId: ID of IPv6 address.
         * <p>
         * @return {@code this}
         * @param ipv6AddressId Property ipv6AddressId: ID of IPv6 address. This parameter is required.
         */
        public Builder ipv6AddressId(final com.aliyun.ros.cdk.core.IResolvable ipv6AddressId) {
            this.props.ipv6AddressId(ipv6AddressId);
            return this;
        }

        /**
         * Property ipv6GatewayId: ID of IPv6 gateway.
         * <p>
         * @return {@code this}
         * @param ipv6GatewayId Property ipv6GatewayId: ID of IPv6 gateway. This parameter is required.
         */
        public Builder ipv6GatewayId(final java.lang.String ipv6GatewayId) {
            this.props.ipv6GatewayId(ipv6GatewayId);
            return this;
        }
        /**
         * Property ipv6GatewayId: ID of IPv6 gateway.
         * <p>
         * @return {@code this}
         * @param ipv6GatewayId Property ipv6GatewayId: ID of IPv6 gateway. This parameter is required.
         */
        public Builder ipv6GatewayId(final com.aliyun.ros.cdk.core.IResolvable ipv6GatewayId) {
            this.props.ipv6GatewayId(ipv6GatewayId);
            return this;
        }

        /**
         * Property internetChargeType: IPv6 public network bandwidth billing, value: - <strong>PayByTraffic</strong>: by using the traffic accounting.
         * <p>
         * <ul>
         * <li><strong>PayByBandwidth</strong> (default): Bandwidth billing.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param internetChargeType Property internetChargeType: IPv6 public network bandwidth billing, value: - <strong>PayByTraffic</strong>: by using the traffic accounting. This parameter is required.
         */
        public Builder internetChargeType(final java.lang.String internetChargeType) {
            this.props.internetChargeType(internetChargeType);
            return this;
        }
        /**
         * Property internetChargeType: IPv6 public network bandwidth billing, value: - <strong>PayByTraffic</strong>: by using the traffic accounting.
         * <p>
         * <ul>
         * <li><strong>PayByBandwidth</strong> (default): Bandwidth billing.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param internetChargeType Property internetChargeType: IPv6 public network bandwidth billing, value: - <strong>PayByTraffic</strong>: by using the traffic accounting. This parameter is required.
         */
        public Builder internetChargeType(final com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
            this.props.internetChargeType(internetChargeType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.Ipv6InternetBandwidth}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.Ipv6InternetBandwidth build() {
            return new com.aliyun.ros.cdk.vpc.Ipv6InternetBandwidth(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
