package com.aliyun.ros.cdk.sag;

/**
 * A ROS resource type:  <code>ALIYUN::SAG::SmartAccessGateway</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.84.0 (build 5404dcf)", date = "2023-06-28T08:22:30.434Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sag.$Module.class, fqn = "@alicloud/ros-cdk-sag.SmartAccessGateway")
public class SmartAccessGateway extends com.aliyun.ros.cdk.core.Resource {

    protected SmartAccessGateway(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SmartAccessGateway(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::SAG::SmartAccessGateway</code>.
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
    public SmartAccessGateway(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sag.SmartAccessGatewayProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::SAG::SmartAccessGateway</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public SmartAccessGateway(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sag.SmartAccessGatewayProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute OrderId: The ID of the order.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SmartAGId: The ID of the SAG instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSmartAgId() {
        return software.amazon.jsii.Kernel.get(this, "attrSmartAgId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sag.SmartAccessGateway}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sag.SmartAccessGateway> {
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
        private final com.aliyun.ros.cdk.sag.SmartAccessGatewayProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sag.SmartAccessGatewayProps.Builder();
        }

        /**
         * Property buyerMessage: The remarks left by the buyer.
         * <p>
         * @return {@code this}
         * @param buyerMessage Property buyerMessage: The remarks left by the buyer. This parameter is required.
         */
        public Builder buyerMessage(final java.lang.String buyerMessage) {
            this.props.buyerMessage(buyerMessage);
            return this;
        }
        /**
         * Property buyerMessage: The remarks left by the buyer.
         * <p>
         * @return {@code this}
         * @param buyerMessage Property buyerMessage: The remarks left by the buyer. This parameter is required.
         */
        public Builder buyerMessage(final com.aliyun.ros.cdk.core.IResolvable buyerMessage) {
            this.props.buyerMessage(buyerMessage);
            return this;
        }

        /**
         * Property chargeType: The billing method of the SAG instance.
         * <p>
         * Set the value to PREPAY, which specifies the subscription billing method.
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: The billing method of the SAG instance. This parameter is required.
         */
        public Builder chargeType(final java.lang.String chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }
        /**
         * Property chargeType: The billing method of the SAG instance.
         * <p>
         * Set the value to PREPAY, which specifies the subscription billing method.
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: The billing method of the SAG instance. This parameter is required.
         */
        public Builder chargeType(final com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }

        /**
         * Property hardWareSpec: The type of the SAG instance.
         * <p>
         * Valid values:
         * sag-100wm
         * sag-1000
         * sag-vcpe
         * <p>
         * @return {@code this}
         * @param hardWareSpec Property hardWareSpec: The type of the SAG instance. This parameter is required.
         */
        public Builder hardWareSpec(final java.lang.String hardWareSpec) {
            this.props.hardWareSpec(hardWareSpec);
            return this;
        }
        /**
         * Property hardWareSpec: The type of the SAG instance.
         * <p>
         * Valid values:
         * sag-100wm
         * sag-1000
         * sag-vcpe
         * <p>
         * @return {@code this}
         * @param hardWareSpec Property hardWareSpec: The type of the SAG instance. This parameter is required.
         */
        public Builder hardWareSpec(final com.aliyun.ros.cdk.core.IResolvable hardWareSpec) {
            this.props.hardWareSpec(hardWareSpec);
            return this;
        }

        /**
         * Property haType: The deployment mode.
         * <p>
         * Valid values:
         * no_backup: You buy only one SAG device to connect private networks to Alibaba Cloud.
         * cold_backup: You buy two SAG devices in active-standby mode. One SAG device serves as an active
         * device and the other serves as a standby device. Only the active device is connected
         * to Alibaba Cloud. If the active device is not working as expected, you must manually
         * perform a switchover.
         * warm_backup: You buy two SAG devices in active-active mode. Both SAG devices are connected to
         * Alibaba Cloud. If an active device is not working as expected, a failover is automatically
         * performed.
         * Note If you want to create an SAG vCPE instance, set the value to warm_backup.
         * <p>
         * @return {@code this}
         * @param haType Property haType: The deployment mode. This parameter is required.
         */
        public Builder haType(final java.lang.String haType) {
            this.props.haType(haType);
            return this;
        }
        /**
         * Property haType: The deployment mode.
         * <p>
         * Valid values:
         * no_backup: You buy only one SAG device to connect private networks to Alibaba Cloud.
         * cold_backup: You buy two SAG devices in active-standby mode. One SAG device serves as an active
         * device and the other serves as a standby device. Only the active device is connected
         * to Alibaba Cloud. If the active device is not working as expected, you must manually
         * perform a switchover.
         * warm_backup: You buy two SAG devices in active-active mode. Both SAG devices are connected to
         * Alibaba Cloud. If an active device is not working as expected, a failover is automatically
         * performed.
         * Note If you want to create an SAG vCPE instance, set the value to warm_backup.
         * <p>
         * @return {@code this}
         * @param haType Property haType: The deployment mode. This parameter is required.
         */
        public Builder haType(final com.aliyun.ros.cdk.core.IResolvable haType) {
            this.props.haType(haType);
            return this;
        }

        /**
         * Property maxBandWidth: The bandwidth of the SAG instance.
         * <p>
         * If you want to create an SAG CPE instance and the model is sag-100wm, valid values of this parameter are 2 to 50. Unit: Mbit/s.
         * If you want to create an SAG CPE instance and the model is sag-1000, valid values of this parameter are 10 to 500. Unit: Mbit/s.
         * If you want to create an SAG vCPE instance, valid values of this parameter are 10 to 1000. Unit: Mbit/s.
         * <p>
         * @return {@code this}
         * @param maxBandWidth Property maxBandWidth: The bandwidth of the SAG instance. This parameter is required.
         */
        public Builder maxBandWidth(final java.lang.Number maxBandWidth) {
            this.props.maxBandWidth(maxBandWidth);
            return this;
        }
        /**
         * Property maxBandWidth: The bandwidth of the SAG instance.
         * <p>
         * If you want to create an SAG CPE instance and the model is sag-100wm, valid values of this parameter are 2 to 50. Unit: Mbit/s.
         * If you want to create an SAG CPE instance and the model is sag-1000, valid values of this parameter are 10 to 500. Unit: Mbit/s.
         * If you want to create an SAG vCPE instance, valid values of this parameter are 10 to 1000. Unit: Mbit/s.
         * <p>
         * @return {@code this}
         * @param maxBandWidth Property maxBandWidth: The bandwidth of the SAG instance. This parameter is required.
         */
        public Builder maxBandWidth(final com.aliyun.ros.cdk.core.IResolvable maxBandWidth) {
            this.props.maxBandWidth(maxBandWidth);
            return this;
        }

        /**
         * Property period: The subscription period of the SAG instance.
         * <p>
         * Unit: months.
         * Valid values: 1 to 9, 12, 24, and 36.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription period of the SAG instance. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: The subscription period of the SAG instance.
         * <p>
         * Unit: months.
         * Valid values: 1 to 9, 12, 24, and 36.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription period of the SAG instance. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property receiverAddress: The detailed address of the recipient.
         * <p>
         * @return {@code this}
         * @param receiverAddress Property receiverAddress: The detailed address of the recipient. This parameter is required.
         */
        public Builder receiverAddress(final java.lang.String receiverAddress) {
            this.props.receiverAddress(receiverAddress);
            return this;
        }
        /**
         * Property receiverAddress: The detailed address of the recipient.
         * <p>
         * @return {@code this}
         * @param receiverAddress Property receiverAddress: The detailed address of the recipient. This parameter is required.
         */
        public Builder receiverAddress(final com.aliyun.ros.cdk.core.IResolvable receiverAddress) {
            this.props.receiverAddress(receiverAddress);
            return this;
        }

        /**
         * Property receiverCity: The city of the recipient address.
         * <p>
         * @return {@code this}
         * @param receiverCity Property receiverCity: The city of the recipient address. This parameter is required.
         */
        public Builder receiverCity(final java.lang.String receiverCity) {
            this.props.receiverCity(receiverCity);
            return this;
        }
        /**
         * Property receiverCity: The city of the recipient address.
         * <p>
         * @return {@code this}
         * @param receiverCity Property receiverCity: The city of the recipient address. This parameter is required.
         */
        public Builder receiverCity(final com.aliyun.ros.cdk.core.IResolvable receiverCity) {
            this.props.receiverCity(receiverCity);
            return this;
        }

        /**
         * Property receiverCountry: The country of the recipient address.
         * <p>
         * @return {@code this}
         * @param receiverCountry Property receiverCountry: The country of the recipient address. This parameter is required.
         */
        public Builder receiverCountry(final java.lang.String receiverCountry) {
            this.props.receiverCountry(receiverCountry);
            return this;
        }
        /**
         * Property receiverCountry: The country of the recipient address.
         * <p>
         * @return {@code this}
         * @param receiverCountry Property receiverCountry: The country of the recipient address. This parameter is required.
         */
        public Builder receiverCountry(final com.aliyun.ros.cdk.core.IResolvable receiverCountry) {
            this.props.receiverCountry(receiverCountry);
            return this;
        }

        /**
         * Property receiverDistrict: The district of the recipient address.
         * <p>
         * @return {@code this}
         * @param receiverDistrict Property receiverDistrict: The district of the recipient address. This parameter is required.
         */
        public Builder receiverDistrict(final java.lang.String receiverDistrict) {
            this.props.receiverDistrict(receiverDistrict);
            return this;
        }
        /**
         * Property receiverDistrict: The district of the recipient address.
         * <p>
         * @return {@code this}
         * @param receiverDistrict Property receiverDistrict: The district of the recipient address. This parameter is required.
         */
        public Builder receiverDistrict(final com.aliyun.ros.cdk.core.IResolvable receiverDistrict) {
            this.props.receiverDistrict(receiverDistrict);
            return this;
        }

        /**
         * Property receiverEmail: The email address of the recipient.
         * <p>
         * @return {@code this}
         * @param receiverEmail Property receiverEmail: The email address of the recipient. This parameter is required.
         */
        public Builder receiverEmail(final java.lang.String receiverEmail) {
            this.props.receiverEmail(receiverEmail);
            return this;
        }
        /**
         * Property receiverEmail: The email address of the recipient.
         * <p>
         * @return {@code this}
         * @param receiverEmail Property receiverEmail: The email address of the recipient. This parameter is required.
         */
        public Builder receiverEmail(final com.aliyun.ros.cdk.core.IResolvable receiverEmail) {
            this.props.receiverEmail(receiverEmail);
            return this;
        }

        /**
         * Property receiverMobile: The mobile phone number of the recipient.
         * <p>
         * @return {@code this}
         * @param receiverMobile Property receiverMobile: The mobile phone number of the recipient. This parameter is required.
         */
        public Builder receiverMobile(final java.lang.String receiverMobile) {
            this.props.receiverMobile(receiverMobile);
            return this;
        }
        /**
         * Property receiverMobile: The mobile phone number of the recipient.
         * <p>
         * @return {@code this}
         * @param receiverMobile Property receiverMobile: The mobile phone number of the recipient. This parameter is required.
         */
        public Builder receiverMobile(final com.aliyun.ros.cdk.core.IResolvable receiverMobile) {
            this.props.receiverMobile(receiverMobile);
            return this;
        }

        /**
         * Property receiverName: The name of the recipient.
         * <p>
         * @return {@code this}
         * @param receiverName Property receiverName: The name of the recipient. This parameter is required.
         */
        public Builder receiverName(final java.lang.String receiverName) {
            this.props.receiverName(receiverName);
            return this;
        }
        /**
         * Property receiverName: The name of the recipient.
         * <p>
         * @return {@code this}
         * @param receiverName Property receiverName: The name of the recipient. This parameter is required.
         */
        public Builder receiverName(final com.aliyun.ros.cdk.core.IResolvable receiverName) {
            this.props.receiverName(receiverName);
            return this;
        }

        /**
         * Property receiverState: The province of the recipient address.
         * <p>
         * @return {@code this}
         * @param receiverState Property receiverState: The province of the recipient address. This parameter is required.
         */
        public Builder receiverState(final java.lang.String receiverState) {
            this.props.receiverState(receiverState);
            return this;
        }
        /**
         * Property receiverState: The province of the recipient address.
         * <p>
         * @return {@code this}
         * @param receiverState Property receiverState: The province of the recipient address. This parameter is required.
         */
        public Builder receiverState(final com.aliyun.ros.cdk.core.IResolvable receiverState) {
            this.props.receiverState(receiverState);
            return this;
        }

        /**
         * Property receiverTown: The town of the recipient address.
         * <p>
         * @return {@code this}
         * @param receiverTown Property receiverTown: The town of the recipient address. This parameter is required.
         */
        public Builder receiverTown(final java.lang.String receiverTown) {
            this.props.receiverTown(receiverTown);
            return this;
        }
        /**
         * Property receiverTown: The town of the recipient address.
         * <p>
         * @return {@code this}
         * @param receiverTown Property receiverTown: The town of the recipient address. This parameter is required.
         */
        public Builder receiverTown(final com.aliyun.ros.cdk.core.IResolvable receiverTown) {
            this.props.receiverTown(receiverTown);
            return this;
        }

        /**
         * Property receiverZip: The postcode of the recipient address.
         * <p>
         * @return {@code this}
         * @param receiverZip Property receiverZip: The postcode of the recipient address. This parameter is required.
         */
        public Builder receiverZip(final java.lang.String receiverZip) {
            this.props.receiverZip(receiverZip);
            return this;
        }
        /**
         * Property receiverZip: The postcode of the recipient address.
         * <p>
         * @return {@code this}
         * @param receiverZip Property receiverZip: The postcode of the recipient address. This parameter is required.
         */
        public Builder receiverZip(final com.aliyun.ros.cdk.core.IResolvable receiverZip) {
            this.props.receiverZip(receiverZip);
            return this;
        }

        /**
         * Property activate: Activate SAG or not.
         * <p>
         * Default is False
         * <p>
         * @return {@code this}
         * @param activate Property activate: Activate SAG or not. This parameter is required.
         */
        public Builder activate(final java.lang.Boolean activate) {
            this.props.activate(activate);
            return this;
        }
        /**
         * Property activate: Activate SAG or not.
         * <p>
         * Default is False
         * <p>
         * @return {@code this}
         * @param activate Property activate: Activate SAG or not. This parameter is required.
         */
        public Builder activate(final com.aliyun.ros.cdk.core.IResolvable activate) {
            this.props.activate(activate);
            return this;
        }

        /**
         * Property alreadyHaveSag: Specifies whether you already have an SAG device.
         * <p>
         * Valid values:
         * true: yes
         * false (default): no
         * <p>
         * @return {@code this}
         * @param alreadyHaveSag Property alreadyHaveSag: Specifies whether you already have an SAG device. This parameter is required.
         */
        public Builder alreadyHaveSag(final java.lang.Boolean alreadyHaveSag) {
            this.props.alreadyHaveSag(alreadyHaveSag);
            return this;
        }
        /**
         * Property alreadyHaveSag: Specifies whether you already have an SAG device.
         * <p>
         * Valid values:
         * true: yes
         * false (default): no
         * <p>
         * @return {@code this}
         * @param alreadyHaveSag Property alreadyHaveSag: Specifies whether you already have an SAG device. This parameter is required.
         */
        public Builder alreadyHaveSag(final com.aliyun.ros.cdk.core.IResolvable alreadyHaveSag) {
            this.props.alreadyHaveSag(alreadyHaveSag);
            return this;
        }

        /**
         * Property autoPay: Specifies whether to enable auto-payment for the instance.
         * <p>
         * Valid values:
         * true: yes
         * false: no
         * If you set the parameter to false, go to Billing Management to complete the payment
         * after you call this operation. After you complete the payment, the instance can be
         * created.
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Specifies whether to enable auto-payment for the instance. This parameter is required.
         */
        public Builder autoPay(final java.lang.Boolean autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }
        /**
         * Property autoPay: Specifies whether to enable auto-payment for the instance.
         * <p>
         * Valid values:
         * true: yes
         * false: no
         * If you set the parameter to false, go to Billing Management to complete the payment
         * after you call this operation. After you complete the payment, the instance can be
         * created.
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Specifies whether to enable auto-payment for the instance. This parameter is required.
         */
        public Builder autoPay(final com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }

        /**
         * Property cidrBlock: The CIDR blocks of terminals in the private network.
         * <p>
         * Make sure that the CIDR blocks
         * do not overlap with each other.
         * If the LAN port of the SAG device dynamically assigns IP addresses, IP addresses within
         * the first CIDR block are assigned to terminals that have the Dynamic Host Configuration
         * Protocol (DHCP) enabled.
         * <p>
         * @return {@code this}
         * @param cidrBlock Property cidrBlock: The CIDR blocks of terminals in the private network. This parameter is required.
         */
        public Builder cidrBlock(final java.lang.String cidrBlock) {
            this.props.cidrBlock(cidrBlock);
            return this;
        }
        /**
         * Property cidrBlock: The CIDR blocks of terminals in the private network.
         * <p>
         * Make sure that the CIDR blocks
         * do not overlap with each other.
         * If the LAN port of the SAG device dynamically assigns IP addresses, IP addresses within
         * the first CIDR block are assigned to terminals that have the Dynamic Host Configuration
         * Protocol (DHCP) enabled.
         * <p>
         * @return {@code this}
         * @param cidrBlock Property cidrBlock: The CIDR blocks of terminals in the private network. This parameter is required.
         */
        public Builder cidrBlock(final com.aliyun.ros.cdk.core.IResolvable cidrBlock) {
            this.props.cidrBlock(cidrBlock);
            return this;
        }

        /**
         * Property description: The description of the SAG instance.
         * <p>
         * The description must be 2 to 256 characters in length, and can contain digits, periods
         * (.), underscores (_), and hyphens (-). It must start with a letter.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the SAG instance. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the SAG instance.
         * <p>
         * The description must be 2 to 256 characters in length, and can contain digits, periods
         * (.), underscores (_), and hyphens (-). It must start with a letter.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the SAG instance. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property name: The name of the SAG instance.
         * <p>
         * The name must be 2 to 128 characters in length and can contain digits, periods (.),
         * underscores (_), and hyphens (-). It must start with a letter.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the SAG instance. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the SAG instance.
         * <p>
         * The name must be 2 to 128 characters in length and can contain digits, periods (.),
         * underscores (_), and hyphens (-). It must start with a letter.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the SAG instance. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property receiverPhone: The landline phone number of the recipient.
         * <p>
         * @return {@code this}
         * @param receiverPhone Property receiverPhone: The landline phone number of the recipient. This parameter is required.
         */
        public Builder receiverPhone(final java.lang.String receiverPhone) {
            this.props.receiverPhone(receiverPhone);
            return this;
        }
        /**
         * Property receiverPhone: The landline phone number of the recipient.
         * <p>
         * @return {@code this}
         * @param receiverPhone Property receiverPhone: The landline phone number of the recipient. This parameter is required.
         */
        public Builder receiverPhone(final com.aliyun.ros.cdk.core.IResolvable receiverPhone) {
            this.props.receiverPhone(receiverPhone);
            return this;
        }

        /**
         * Property routingStrategy: The policy to advertise routes from the private network to Alibaba Cloud.
         * <p>
         * static: static routing.
         * dynamic: dynamic routing.
         * <p>
         * @return {@code this}
         * @param routingStrategy Property routingStrategy: The policy to advertise routes from the private network to Alibaba Cloud. This parameter is required.
         */
        public Builder routingStrategy(final java.lang.String routingStrategy) {
            this.props.routingStrategy(routingStrategy);
            return this;
        }
        /**
         * Property routingStrategy: The policy to advertise routes from the private network to Alibaba Cloud.
         * <p>
         * static: static routing.
         * dynamic: dynamic routing.
         * <p>
         * @return {@code this}
         * @param routingStrategy Property routingStrategy: The policy to advertise routes from the private network to Alibaba Cloud. This parameter is required.
         */
        public Builder routingStrategy(final com.aliyun.ros.cdk.core.IResolvable routingStrategy) {
            this.props.routingStrategy(routingStrategy);
            return this;
        }

        /**
         * Property securityLockThreshold: The time that a disconnected SAG device remain locked.
         * <p>
         * The time must be no shorter
         * than zero second.
         * Unit: second.
         * <p>
         * @return {@code this}
         * @param securityLockThreshold Property securityLockThreshold: The time that a disconnected SAG device remain locked. This parameter is required.
         */
        public Builder securityLockThreshold(final java.lang.Number securityLockThreshold) {
            this.props.securityLockThreshold(securityLockThreshold);
            return this;
        }
        /**
         * Property securityLockThreshold: The time that a disconnected SAG device remain locked.
         * <p>
         * The time must be no shorter
         * than zero second.
         * Unit: second.
         * <p>
         * @return {@code this}
         * @param securityLockThreshold Property securityLockThreshold: The time that a disconnected SAG device remain locked. This parameter is required.
         */
        public Builder securityLockThreshold(final com.aliyun.ros.cdk.core.IResolvable securityLockThreshold) {
            this.props.securityLockThreshold(securityLockThreshold);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.sag.SmartAccessGateway}.
         */
        @Override
        public com.aliyun.ros.cdk.sag.SmartAccessGateway build() {
            return new com.aliyun.ros.cdk.sag.SmartAccessGateway(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
