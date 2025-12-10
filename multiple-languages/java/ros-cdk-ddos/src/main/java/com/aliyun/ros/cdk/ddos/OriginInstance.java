package com.aliyun.ros.cdk.ddos;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::DDoS::OriginInstance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:54.348Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ddos.$Module.class, fqn = "@alicloud/ros-cdk-ddos.OriginInstance")
public class OriginInstance extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ddos.IOriginInstance {

    protected OriginInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected OriginInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public OriginInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ddos.OriginInstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public OriginInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ddos.OriginInstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn() {
        return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceId: The ID of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ddos.OriginInstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ddos.OriginInstanceProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ddos.OriginInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ddos.OriginInstance> {
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
        private final com.aliyun.ros.cdk.ddos.OriginInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ddos.OriginInstanceProps.Builder();
        }

        /**
         * Property edition: Edition of the instance.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>enterprise: Enterprise Edition.</li>
         * <li>smb: Affordable and general edition for small and medium-sized enterprises.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param edition Property edition: Edition of the instance. This parameter is required.
         */
        public Builder edition(final java.lang.String edition) {
            this.props.edition(edition);
            return this;
        }
        /**
         * Property edition: Edition of the instance.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>enterprise: Enterprise Edition.</li>
         * <li>smb: Affordable and general edition for small and medium-sized enterprises.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param edition Property edition: Edition of the instance. This parameter is required.
         */
        public Builder edition(final com.aliyun.ros.cdk.core.IResolvable edition) {
            this.props.edition(edition);
            return this;
        }

        /**
         * Property protectionMode: The mode of the protection.
         * <p>
         * Valid values:
         * unlimited: The Unlimited protection mode is intended for internal use within enterprises.
         * <p>
         * @return {@code this}
         * @param protectionMode Property protectionMode: The mode of the protection. This parameter is required.
         */
        public Builder protectionMode(final java.lang.String protectionMode) {
            this.props.protectionMode(protectionMode);
            return this;
        }
        /**
         * Property protectionMode: The mode of the protection.
         * <p>
         * Valid values:
         * unlimited: The Unlimited protection mode is intended for internal use within enterprises.
         * <p>
         * @return {@code this}
         * @param protectionMode Property protectionMode: The mode of the protection. This parameter is required.
         */
        public Builder protectionMode(final com.aliyun.ros.cdk.core.IResolvable protectionMode) {
            this.props.protectionMode(protectionMode);
            return this;
        }

        /**
         * Property chargeType: The charge type of the instance.
         * <p>
         * Valid values:
         * PostPaid: Pay-as-you-go.
         * PrePaid: Subscription.
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: The charge type of the instance. This parameter is required.
         */
        public Builder chargeType(final java.lang.String chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }
        /**
         * Property chargeType: The charge type of the instance.
         * <p>
         * Valid values:
         * PostPaid: Pay-as-you-go.
         * PrePaid: Subscription.
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: The charge type of the instance. This parameter is required.
         */
        public Builder chargeType(final com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }

        /**
         * Property cleanBandwidth: The mitigation capability of Anti-DDoS is measured by the inbound or outbound clean bandwidth.
         * <p>
         * When Edition is enterprise, CleanBandwidth ranges from 100 to 1000 Mbit/s.When Edition is smb， CleanBandwidth ranges from 50 to 1000 Mbit/s.
         * <p>
         * @return {@code this}
         * @param cleanBandwidth Property cleanBandwidth: The mitigation capability of Anti-DDoS is measured by the inbound or outbound clean bandwidth. This parameter is required.
         */
        public Builder cleanBandwidth(final java.lang.Number cleanBandwidth) {
            this.props.cleanBandwidth(cleanBandwidth);
            return this;
        }
        /**
         * Property cleanBandwidth: The mitigation capability of Anti-DDoS is measured by the inbound or outbound clean bandwidth.
         * <p>
         * When Edition is enterprise, CleanBandwidth ranges from 100 to 1000 Mbit/s.When Edition is smb， CleanBandwidth ranges from 50 to 1000 Mbit/s.
         * <p>
         * @return {@code this}
         * @param cleanBandwidth Property cleanBandwidth: The mitigation capability of Anti-DDoS is measured by the inbound or outbound clean bandwidth. This parameter is required.
         */
        public Builder cleanBandwidth(final com.aliyun.ros.cdk.core.IResolvable cleanBandwidth) {
            this.props.cleanBandwidth(cleanBandwidth);
            return this;
        }

        /**
         * Property enableLog: Whether to enable protection logs.
         * <p>
         * @return {@code this}
         * @param enableLog Property enableLog: Whether to enable protection logs. This parameter is required.
         */
        public Builder enableLog(final java.lang.Boolean enableLog) {
            this.props.enableLog(enableLog);
            return this;
        }
        /**
         * Property enableLog: Whether to enable protection logs.
         * <p>
         * @return {@code this}
         * @param enableLog Property enableLog: Whether to enable protection logs. This parameter is required.
         */
        public Builder enableLog(final com.aliyun.ros.cdk.core.IResolvable enableLog) {
            this.props.enableLog(enableLog);
            return this;
        }

        /**
         * Property ipAddresses: The number of ip addresses.
         * <p>
         * When Edition is smb， IP Addresses ranges from 1 to 29.
         * When Edition is enterprise, The minimum number of IP Addresses is 30.
         * <p>
         * @return {@code this}
         * @param ipAddresses Property ipAddresses: The number of ip addresses. This parameter is required.
         */
        public Builder ipAddresses(final java.lang.Number ipAddresses) {
            this.props.ipAddresses(ipAddresses);
            return this;
        }
        /**
         * Property ipAddresses: The number of ip addresses.
         * <p>
         * When Edition is smb， IP Addresses ranges from 1 to 29.
         * When Edition is enterprise, The minimum number of IP Addresses is 30.
         * <p>
         * @return {@code this}
         * @param ipAddresses Property ipAddresses: The number of ip addresses. This parameter is required.
         */
        public Builder ipAddresses(final com.aliyun.ros.cdk.core.IResolvable ipAddresses) {
            this.props.ipAddresses(ipAddresses);
            return this;
        }

        /**
         * Property networkProtocol: The network protocol of the instance.
         * <p>
         * Valid values:
         * v4: IPv4.
         * v6: IPv6.
         * v4_6: IPv4+IPv6.
         * <p>
         * @return {@code this}
         * @param networkProtocol Property networkProtocol: The network protocol of the instance. This parameter is required.
         */
        public Builder networkProtocol(final java.lang.String networkProtocol) {
            this.props.networkProtocol(networkProtocol);
            return this;
        }
        /**
         * Property networkProtocol: The network protocol of the instance.
         * <p>
         * Valid values:
         * v4: IPv4.
         * v6: IPv6.
         * v4_6: IPv4+IPv6.
         * <p>
         * @return {@code this}
         * @param networkProtocol Property networkProtocol: The network protocol of the instance. This parameter is required.
         */
        public Builder networkProtocol(final com.aliyun.ros.cdk.core.IResolvable networkProtocol) {
            this.props.networkProtocol(networkProtocol);
            return this;
        }

        /**
         * Property period: The period of the instance.
         * <p>
         * @return {@code this}
         * @param period Property period: The period of the instance. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: The period of the instance.
         * <p>
         * @return {@code this}
         * @param period Property period: The period of the instance. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property periodUnit: The period unit of the instance.
         * <p>
         * Valid values:
         * Month: Month.
         * Year: Year.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The period unit of the instance. This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }
        /**
         * Property periodUnit: The period unit of the instance.
         * <p>
         * Valid values:
         * Month: Month.
         * Year: Year.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The period unit of the instance. This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }

        /**
         * Property tags: Tags to attach to instance.
         * <p>
         * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to instance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ddos.RosOriginInstance.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ddos.OriginInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.ddos.OriginInstance build() {
            return new com.aliyun.ros.cdk.ddos.OriginInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
