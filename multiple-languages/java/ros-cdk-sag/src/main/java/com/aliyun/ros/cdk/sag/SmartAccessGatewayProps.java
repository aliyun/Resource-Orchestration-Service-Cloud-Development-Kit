package com.aliyun.ros.cdk.sag;

/**
 * Properties for defining a <code>ALIYUN::SAG::SmartAccessGateway</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-18T08:28:03.663Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sag.$Module.class, fqn = "@alicloud/ros-cdk-sag.SmartAccessGatewayProps")
@software.amazon.jsii.Jsii.Proxy(SmartAccessGatewayProps.Jsii$Proxy.class)
public interface SmartAccessGatewayProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property buyerMessage: The remarks left by the buyer.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBuyerMessage();

    /**
     * Property chargeType: The billing method of the SAG instance.
     * <p>
     * Set the value to PREPAY, which specifies the subscription billing method.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getChargeType();

    /**
     * Property hardWareSpec: The type of the SAG instance.
     * <p>
     * Valid values:
     * sag-100wm
     * sag-1000
     * sag-vcpe
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHardWareSpec();

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
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHaType();

    /**
     * Property maxBandWidth: The bandwidth of the SAG instance.
     * <p>
     * If you want to create an SAG CPE instance and the model is sag-100wm, valid values of this parameter are 2 to 50. Unit: Mbit/s.
     * If you want to create an SAG CPE instance and the model is sag-1000, valid values of this parameter are 10 to 500. Unit: Mbit/s.
     * If you want to create an SAG vCPE instance, valid values of this parameter are 10 to 1000. Unit: Mbit/s.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMaxBandWidth();

    /**
     * Property period: The subscription period of the SAG instance.
     * <p>
     * Unit: months.
     * Valid values: 1 to 9, 12, 24, and 36.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPeriod();

    /**
     * Property receiverAddress: The detailed address of the recipient.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getReceiverAddress();

    /**
     * Property receiverCity: The city of the recipient address.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getReceiverCity();

    /**
     * Property receiverCountry: The country of the recipient address.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getReceiverCountry();

    /**
     * Property receiverDistrict: The district of the recipient address.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getReceiverDistrict();

    /**
     * Property receiverEmail: The email address of the recipient.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getReceiverEmail();

    /**
     * Property receiverMobile: The mobile phone number of the recipient.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getReceiverMobile();

    /**
     * Property receiverName: The name of the recipient.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getReceiverName();

    /**
     * Property receiverState: The province of the recipient address.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getReceiverState();

    /**
     * Property receiverTown: The town of the recipient address.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getReceiverTown();

    /**
     * Property receiverZip: The postcode of the recipient address.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getReceiverZip();

    /**
     * Property activate: Activate SAG or not.
     * <p>
     * Default is False
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getActivate() {
        return null;
    }

    /**
     * Property alreadyHaveSag: Specifies whether you already have an SAG device.
     * <p>
     * Valid values:
     * true: yes
     * false (default): no
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAlreadyHaveSag() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoPay() {
        return null;
    }

    /**
     * Property cidrBlock: The CIDR blocks of terminals in the private network.
     * <p>
     * Make sure that the CIDR blocks
     * do not overlap with each other.
     * If the LAN port of the SAG device dynamically assigns IP addresses, IP addresses within
     * the first CIDR block are assigned to terminals that have the Dynamic Host Configuration
     * Protocol (DHCP) enabled.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCidrBlock() {
        return null;
    }

    /**
     * Property description: The description of the SAG instance.
     * <p>
     * The description must be 2 to 256 characters in length, and can contain digits, periods
     * (.), underscores (_), and hyphens (-). It must start with a letter.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property name: The name of the SAG instance.
     * <p>
     * The name must be 2 to 128 characters in length and can contain digits, periods (.),
     * underscores (_), and hyphens (-). It must start with a letter.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * Property receiverPhone: The landline phone number of the recipient.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getReceiverPhone() {
        return null;
    }

    /**
     * Property routingStrategy: The policy to advertise routes from the private network to Alibaba Cloud.
     * <p>
     * static: static routing.
     * dynamic: dynamic routing.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRoutingStrategy() {
        return null;
    }

    /**
     * Property securityLockThreshold: The time that a disconnected SAG device remain locked.
     * <p>
     * The time must be no shorter
     * than zero second.
     * Unit: second.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityLockThreshold() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SmartAccessGatewayProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SmartAccessGatewayProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SmartAccessGatewayProps> {
        java.lang.Object buyerMessage;
        java.lang.Object chargeType;
        java.lang.Object hardWareSpec;
        java.lang.Object haType;
        java.lang.Object maxBandWidth;
        java.lang.Object period;
        java.lang.Object receiverAddress;
        java.lang.Object receiverCity;
        java.lang.Object receiverCountry;
        java.lang.Object receiverDistrict;
        java.lang.Object receiverEmail;
        java.lang.Object receiverMobile;
        java.lang.Object receiverName;
        java.lang.Object receiverState;
        java.lang.Object receiverTown;
        java.lang.Object receiverZip;
        java.lang.Object activate;
        java.lang.Object alreadyHaveSag;
        java.lang.Object autoPay;
        java.lang.Object cidrBlock;
        java.lang.Object description;
        java.lang.Object name;
        java.lang.Object receiverPhone;
        java.lang.Object routingStrategy;
        java.lang.Object securityLockThreshold;

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getBuyerMessage}
         * @param buyerMessage Property buyerMessage: The remarks left by the buyer. This parameter is required.
         * @return {@code this}
         */
        public Builder buyerMessage(java.lang.String buyerMessage) {
            this.buyerMessage = buyerMessage;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getBuyerMessage}
         * @param buyerMessage Property buyerMessage: The remarks left by the buyer. This parameter is required.
         * @return {@code this}
         */
        public Builder buyerMessage(com.aliyun.ros.cdk.core.IResolvable buyerMessage) {
            this.buyerMessage = buyerMessage;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getChargeType}
         * @param chargeType Property chargeType: The billing method of the SAG instance. This parameter is required.
         *                   Set the value to PREPAY, which specifies the subscription billing method.
         * @return {@code this}
         */
        public Builder chargeType(java.lang.String chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getChargeType}
         * @param chargeType Property chargeType: The billing method of the SAG instance. This parameter is required.
         *                   Set the value to PREPAY, which specifies the subscription billing method.
         * @return {@code this}
         */
        public Builder chargeType(com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getHardWareSpec}
         * @param hardWareSpec Property hardWareSpec: The type of the SAG instance. This parameter is required.
         *                     Valid values:
         *                     sag-100wm
         *                     sag-1000
         *                     sag-vcpe
         * @return {@code this}
         */
        public Builder hardWareSpec(java.lang.String hardWareSpec) {
            this.hardWareSpec = hardWareSpec;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getHardWareSpec}
         * @param hardWareSpec Property hardWareSpec: The type of the SAG instance. This parameter is required.
         *                     Valid values:
         *                     sag-100wm
         *                     sag-1000
         *                     sag-vcpe
         * @return {@code this}
         */
        public Builder hardWareSpec(com.aliyun.ros.cdk.core.IResolvable hardWareSpec) {
            this.hardWareSpec = hardWareSpec;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getHaType}
         * @param haType Property haType: The deployment mode. This parameter is required.
         *               Valid values:
         *               no_backup: You buy only one SAG device to connect private networks to Alibaba Cloud.
         *               cold_backup: You buy two SAG devices in active-standby mode. One SAG device serves as an active
         *               device and the other serves as a standby device. Only the active device is connected
         *               to Alibaba Cloud. If the active device is not working as expected, you must manually
         *               perform a switchover.
         *               warm_backup: You buy two SAG devices in active-active mode. Both SAG devices are connected to
         *               Alibaba Cloud. If an active device is not working as expected, a failover is automatically
         *               performed.
         *               Note If you want to create an SAG vCPE instance, set the value to warm_backup.
         * @return {@code this}
         */
        public Builder haType(java.lang.String haType) {
            this.haType = haType;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getHaType}
         * @param haType Property haType: The deployment mode. This parameter is required.
         *               Valid values:
         *               no_backup: You buy only one SAG device to connect private networks to Alibaba Cloud.
         *               cold_backup: You buy two SAG devices in active-standby mode. One SAG device serves as an active
         *               device and the other serves as a standby device. Only the active device is connected
         *               to Alibaba Cloud. If the active device is not working as expected, you must manually
         *               perform a switchover.
         *               warm_backup: You buy two SAG devices in active-active mode. Both SAG devices are connected to
         *               Alibaba Cloud. If an active device is not working as expected, a failover is automatically
         *               performed.
         *               Note If you want to create an SAG vCPE instance, set the value to warm_backup.
         * @return {@code this}
         */
        public Builder haType(com.aliyun.ros.cdk.core.IResolvable haType) {
            this.haType = haType;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getMaxBandWidth}
         * @param maxBandWidth Property maxBandWidth: The bandwidth of the SAG instance. This parameter is required.
         *                     If you want to create an SAG CPE instance and the model is sag-100wm, valid values of this parameter are 2 to 50. Unit: Mbit/s.
         *                     If you want to create an SAG CPE instance and the model is sag-1000, valid values of this parameter are 10 to 500. Unit: Mbit/s.
         *                     If you want to create an SAG vCPE instance, valid values of this parameter are 10 to 1000. Unit: Mbit/s.
         * @return {@code this}
         */
        public Builder maxBandWidth(java.lang.Number maxBandWidth) {
            this.maxBandWidth = maxBandWidth;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getMaxBandWidth}
         * @param maxBandWidth Property maxBandWidth: The bandwidth of the SAG instance. This parameter is required.
         *                     If you want to create an SAG CPE instance and the model is sag-100wm, valid values of this parameter are 2 to 50. Unit: Mbit/s.
         *                     If you want to create an SAG CPE instance and the model is sag-1000, valid values of this parameter are 10 to 500. Unit: Mbit/s.
         *                     If you want to create an SAG vCPE instance, valid values of this parameter are 10 to 1000. Unit: Mbit/s.
         * @return {@code this}
         */
        public Builder maxBandWidth(com.aliyun.ros.cdk.core.IResolvable maxBandWidth) {
            this.maxBandWidth = maxBandWidth;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getPeriod}
         * @param period Property period: The subscription period of the SAG instance. This parameter is required.
         *               Unit: months.
         *               Valid values: 1 to 9, 12, 24, and 36.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getPeriod}
         * @param period Property period: The subscription period of the SAG instance. This parameter is required.
         *               Unit: months.
         *               Valid values: 1 to 9, 12, 24, and 36.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getReceiverAddress}
         * @param receiverAddress Property receiverAddress: The detailed address of the recipient. This parameter is required.
         * @return {@code this}
         */
        public Builder receiverAddress(java.lang.String receiverAddress) {
            this.receiverAddress = receiverAddress;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getReceiverAddress}
         * @param receiverAddress Property receiverAddress: The detailed address of the recipient. This parameter is required.
         * @return {@code this}
         */
        public Builder receiverAddress(com.aliyun.ros.cdk.core.IResolvable receiverAddress) {
            this.receiverAddress = receiverAddress;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getReceiverCity}
         * @param receiverCity Property receiverCity: The city of the recipient address. This parameter is required.
         * @return {@code this}
         */
        public Builder receiverCity(java.lang.String receiverCity) {
            this.receiverCity = receiverCity;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getReceiverCity}
         * @param receiverCity Property receiverCity: The city of the recipient address. This parameter is required.
         * @return {@code this}
         */
        public Builder receiverCity(com.aliyun.ros.cdk.core.IResolvable receiverCity) {
            this.receiverCity = receiverCity;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getReceiverCountry}
         * @param receiverCountry Property receiverCountry: The country of the recipient address. This parameter is required.
         * @return {@code this}
         */
        public Builder receiverCountry(java.lang.String receiverCountry) {
            this.receiverCountry = receiverCountry;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getReceiverCountry}
         * @param receiverCountry Property receiverCountry: The country of the recipient address. This parameter is required.
         * @return {@code this}
         */
        public Builder receiverCountry(com.aliyun.ros.cdk.core.IResolvable receiverCountry) {
            this.receiverCountry = receiverCountry;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getReceiverDistrict}
         * @param receiverDistrict Property receiverDistrict: The district of the recipient address. This parameter is required.
         * @return {@code this}
         */
        public Builder receiverDistrict(java.lang.String receiverDistrict) {
            this.receiverDistrict = receiverDistrict;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getReceiverDistrict}
         * @param receiverDistrict Property receiverDistrict: The district of the recipient address. This parameter is required.
         * @return {@code this}
         */
        public Builder receiverDistrict(com.aliyun.ros.cdk.core.IResolvable receiverDistrict) {
            this.receiverDistrict = receiverDistrict;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getReceiverEmail}
         * @param receiverEmail Property receiverEmail: The email address of the recipient. This parameter is required.
         * @return {@code this}
         */
        public Builder receiverEmail(java.lang.String receiverEmail) {
            this.receiverEmail = receiverEmail;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getReceiverEmail}
         * @param receiverEmail Property receiverEmail: The email address of the recipient. This parameter is required.
         * @return {@code this}
         */
        public Builder receiverEmail(com.aliyun.ros.cdk.core.IResolvable receiverEmail) {
            this.receiverEmail = receiverEmail;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getReceiverMobile}
         * @param receiverMobile Property receiverMobile: The mobile phone number of the recipient. This parameter is required.
         * @return {@code this}
         */
        public Builder receiverMobile(java.lang.String receiverMobile) {
            this.receiverMobile = receiverMobile;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getReceiverMobile}
         * @param receiverMobile Property receiverMobile: The mobile phone number of the recipient. This parameter is required.
         * @return {@code this}
         */
        public Builder receiverMobile(com.aliyun.ros.cdk.core.IResolvable receiverMobile) {
            this.receiverMobile = receiverMobile;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getReceiverName}
         * @param receiverName Property receiverName: The name of the recipient. This parameter is required.
         * @return {@code this}
         */
        public Builder receiverName(java.lang.String receiverName) {
            this.receiverName = receiverName;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getReceiverName}
         * @param receiverName Property receiverName: The name of the recipient. This parameter is required.
         * @return {@code this}
         */
        public Builder receiverName(com.aliyun.ros.cdk.core.IResolvable receiverName) {
            this.receiverName = receiverName;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getReceiverState}
         * @param receiverState Property receiverState: The province of the recipient address. This parameter is required.
         * @return {@code this}
         */
        public Builder receiverState(java.lang.String receiverState) {
            this.receiverState = receiverState;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getReceiverState}
         * @param receiverState Property receiverState: The province of the recipient address. This parameter is required.
         * @return {@code this}
         */
        public Builder receiverState(com.aliyun.ros.cdk.core.IResolvable receiverState) {
            this.receiverState = receiverState;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getReceiverTown}
         * @param receiverTown Property receiverTown: The town of the recipient address. This parameter is required.
         * @return {@code this}
         */
        public Builder receiverTown(java.lang.String receiverTown) {
            this.receiverTown = receiverTown;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getReceiverTown}
         * @param receiverTown Property receiverTown: The town of the recipient address. This parameter is required.
         * @return {@code this}
         */
        public Builder receiverTown(com.aliyun.ros.cdk.core.IResolvable receiverTown) {
            this.receiverTown = receiverTown;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getReceiverZip}
         * @param receiverZip Property receiverZip: The postcode of the recipient address. This parameter is required.
         * @return {@code this}
         */
        public Builder receiverZip(java.lang.String receiverZip) {
            this.receiverZip = receiverZip;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getReceiverZip}
         * @param receiverZip Property receiverZip: The postcode of the recipient address. This parameter is required.
         * @return {@code this}
         */
        public Builder receiverZip(com.aliyun.ros.cdk.core.IResolvable receiverZip) {
            this.receiverZip = receiverZip;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getActivate}
         * @param activate Property activate: Activate SAG or not.
         *                 Default is False
         * @return {@code this}
         */
        public Builder activate(java.lang.Boolean activate) {
            this.activate = activate;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getActivate}
         * @param activate Property activate: Activate SAG or not.
         *                 Default is False
         * @return {@code this}
         */
        public Builder activate(com.aliyun.ros.cdk.core.IResolvable activate) {
            this.activate = activate;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getAlreadyHaveSag}
         * @param alreadyHaveSag Property alreadyHaveSag: Specifies whether you already have an SAG device.
         *                       Valid values:
         *                       true: yes
         *                       false (default): no
         * @return {@code this}
         */
        public Builder alreadyHaveSag(java.lang.Boolean alreadyHaveSag) {
            this.alreadyHaveSag = alreadyHaveSag;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getAlreadyHaveSag}
         * @param alreadyHaveSag Property alreadyHaveSag: Specifies whether you already have an SAG device.
         *                       Valid values:
         *                       true: yes
         *                       false (default): no
         * @return {@code this}
         */
        public Builder alreadyHaveSag(com.aliyun.ros.cdk.core.IResolvable alreadyHaveSag) {
            this.alreadyHaveSag = alreadyHaveSag;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getAutoPay}
         * @param autoPay Property autoPay: Specifies whether to enable auto-payment for the instance.
         *                Valid values:
         *                true: yes
         *                false: no
         *                If you set the parameter to false, go to Billing Management to complete the payment
         *                after you call this operation. After you complete the payment, the instance can be
         *                created.
         * @return {@code this}
         */
        public Builder autoPay(java.lang.Boolean autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getAutoPay}
         * @param autoPay Property autoPay: Specifies whether to enable auto-payment for the instance.
         *                Valid values:
         *                true: yes
         *                false: no
         *                If you set the parameter to false, go to Billing Management to complete the payment
         *                after you call this operation. After you complete the payment, the instance can be
         *                created.
         * @return {@code this}
         */
        public Builder autoPay(com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getCidrBlock}
         * @param cidrBlock Property cidrBlock: The CIDR blocks of terminals in the private network.
         *                  Make sure that the CIDR blocks
         *                  do not overlap with each other.
         *                  If the LAN port of the SAG device dynamically assigns IP addresses, IP addresses within
         *                  the first CIDR block are assigned to terminals that have the Dynamic Host Configuration
         *                  Protocol (DHCP) enabled.
         * @return {@code this}
         */
        public Builder cidrBlock(java.lang.String cidrBlock) {
            this.cidrBlock = cidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getCidrBlock}
         * @param cidrBlock Property cidrBlock: The CIDR blocks of terminals in the private network.
         *                  Make sure that the CIDR blocks
         *                  do not overlap with each other.
         *                  If the LAN port of the SAG device dynamically assigns IP addresses, IP addresses within
         *                  the first CIDR block are assigned to terminals that have the Dynamic Host Configuration
         *                  Protocol (DHCP) enabled.
         * @return {@code this}
         */
        public Builder cidrBlock(com.aliyun.ros.cdk.core.IResolvable cidrBlock) {
            this.cidrBlock = cidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getDescription}
         * @param description Property description: The description of the SAG instance.
         *                    The description must be 2 to 256 characters in length, and can contain digits, periods
         *                    (.), underscores (_), and hyphens (-). It must start with a letter.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getDescription}
         * @param description Property description: The description of the SAG instance.
         *                    The description must be 2 to 256 characters in length, and can contain digits, periods
         *                    (.), underscores (_), and hyphens (-). It must start with a letter.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getName}
         * @param name Property name: The name of the SAG instance.
         *             The name must be 2 to 128 characters in length and can contain digits, periods (.),
         *             underscores (_), and hyphens (-). It must start with a letter.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getName}
         * @param name Property name: The name of the SAG instance.
         *             The name must be 2 to 128 characters in length and can contain digits, periods (.),
         *             underscores (_), and hyphens (-). It must start with a letter.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getReceiverPhone}
         * @param receiverPhone Property receiverPhone: The landline phone number of the recipient.
         * @return {@code this}
         */
        public Builder receiverPhone(java.lang.String receiverPhone) {
            this.receiverPhone = receiverPhone;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getReceiverPhone}
         * @param receiverPhone Property receiverPhone: The landline phone number of the recipient.
         * @return {@code this}
         */
        public Builder receiverPhone(com.aliyun.ros.cdk.core.IResolvable receiverPhone) {
            this.receiverPhone = receiverPhone;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getRoutingStrategy}
         * @param routingStrategy Property routingStrategy: The policy to advertise routes from the private network to Alibaba Cloud.
         *                        static: static routing.
         *                        dynamic: dynamic routing.
         * @return {@code this}
         */
        public Builder routingStrategy(java.lang.String routingStrategy) {
            this.routingStrategy = routingStrategy;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getRoutingStrategy}
         * @param routingStrategy Property routingStrategy: The policy to advertise routes from the private network to Alibaba Cloud.
         *                        static: static routing.
         *                        dynamic: dynamic routing.
         * @return {@code this}
         */
        public Builder routingStrategy(com.aliyun.ros.cdk.core.IResolvable routingStrategy) {
            this.routingStrategy = routingStrategy;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getSecurityLockThreshold}
         * @param securityLockThreshold Property securityLockThreshold: The time that a disconnected SAG device remain locked.
         *                              The time must be no shorter
         *                              than zero second.
         *                              Unit: second.
         * @return {@code this}
         */
        public Builder securityLockThreshold(java.lang.Number securityLockThreshold) {
            this.securityLockThreshold = securityLockThreshold;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayProps#getSecurityLockThreshold}
         * @param securityLockThreshold Property securityLockThreshold: The time that a disconnected SAG device remain locked.
         *                              The time must be no shorter
         *                              than zero second.
         *                              Unit: second.
         * @return {@code this}
         */
        public Builder securityLockThreshold(com.aliyun.ros.cdk.core.IResolvable securityLockThreshold) {
            this.securityLockThreshold = securityLockThreshold;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SmartAccessGatewayProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SmartAccessGatewayProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SmartAccessGatewayProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SmartAccessGatewayProps {
        private final java.lang.Object buyerMessage;
        private final java.lang.Object chargeType;
        private final java.lang.Object hardWareSpec;
        private final java.lang.Object haType;
        private final java.lang.Object maxBandWidth;
        private final java.lang.Object period;
        private final java.lang.Object receiverAddress;
        private final java.lang.Object receiverCity;
        private final java.lang.Object receiverCountry;
        private final java.lang.Object receiverDistrict;
        private final java.lang.Object receiverEmail;
        private final java.lang.Object receiverMobile;
        private final java.lang.Object receiverName;
        private final java.lang.Object receiverState;
        private final java.lang.Object receiverTown;
        private final java.lang.Object receiverZip;
        private final java.lang.Object activate;
        private final java.lang.Object alreadyHaveSag;
        private final java.lang.Object autoPay;
        private final java.lang.Object cidrBlock;
        private final java.lang.Object description;
        private final java.lang.Object name;
        private final java.lang.Object receiverPhone;
        private final java.lang.Object routingStrategy;
        private final java.lang.Object securityLockThreshold;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.buyerMessage = software.amazon.jsii.Kernel.get(this, "buyerMessage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.chargeType = software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hardWareSpec = software.amazon.jsii.Kernel.get(this, "hardWareSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.haType = software.amazon.jsii.Kernel.get(this, "haType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maxBandWidth = software.amazon.jsii.Kernel.get(this, "maxBandWidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.receiverAddress = software.amazon.jsii.Kernel.get(this, "receiverAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.receiverCity = software.amazon.jsii.Kernel.get(this, "receiverCity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.receiverCountry = software.amazon.jsii.Kernel.get(this, "receiverCountry", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.receiverDistrict = software.amazon.jsii.Kernel.get(this, "receiverDistrict", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.receiverEmail = software.amazon.jsii.Kernel.get(this, "receiverEmail", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.receiverMobile = software.amazon.jsii.Kernel.get(this, "receiverMobile", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.receiverName = software.amazon.jsii.Kernel.get(this, "receiverName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.receiverState = software.amazon.jsii.Kernel.get(this, "receiverState", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.receiverTown = software.amazon.jsii.Kernel.get(this, "receiverTown", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.receiverZip = software.amazon.jsii.Kernel.get(this, "receiverZip", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.activate = software.amazon.jsii.Kernel.get(this, "activate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.alreadyHaveSag = software.amazon.jsii.Kernel.get(this, "alreadyHaveSag", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoPay = software.amazon.jsii.Kernel.get(this, "autoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cidrBlock = software.amazon.jsii.Kernel.get(this, "cidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.receiverPhone = software.amazon.jsii.Kernel.get(this, "receiverPhone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routingStrategy = software.amazon.jsii.Kernel.get(this, "routingStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityLockThreshold = software.amazon.jsii.Kernel.get(this, "securityLockThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.buyerMessage = java.util.Objects.requireNonNull(builder.buyerMessage, "buyerMessage is required");
            this.chargeType = java.util.Objects.requireNonNull(builder.chargeType, "chargeType is required");
            this.hardWareSpec = java.util.Objects.requireNonNull(builder.hardWareSpec, "hardWareSpec is required");
            this.haType = java.util.Objects.requireNonNull(builder.haType, "haType is required");
            this.maxBandWidth = java.util.Objects.requireNonNull(builder.maxBandWidth, "maxBandWidth is required");
            this.period = java.util.Objects.requireNonNull(builder.period, "period is required");
            this.receiverAddress = java.util.Objects.requireNonNull(builder.receiverAddress, "receiverAddress is required");
            this.receiverCity = java.util.Objects.requireNonNull(builder.receiverCity, "receiverCity is required");
            this.receiverCountry = java.util.Objects.requireNonNull(builder.receiverCountry, "receiverCountry is required");
            this.receiverDistrict = java.util.Objects.requireNonNull(builder.receiverDistrict, "receiverDistrict is required");
            this.receiverEmail = java.util.Objects.requireNonNull(builder.receiverEmail, "receiverEmail is required");
            this.receiverMobile = java.util.Objects.requireNonNull(builder.receiverMobile, "receiverMobile is required");
            this.receiverName = java.util.Objects.requireNonNull(builder.receiverName, "receiverName is required");
            this.receiverState = java.util.Objects.requireNonNull(builder.receiverState, "receiverState is required");
            this.receiverTown = java.util.Objects.requireNonNull(builder.receiverTown, "receiverTown is required");
            this.receiverZip = java.util.Objects.requireNonNull(builder.receiverZip, "receiverZip is required");
            this.activate = builder.activate;
            this.alreadyHaveSag = builder.alreadyHaveSag;
            this.autoPay = builder.autoPay;
            this.cidrBlock = builder.cidrBlock;
            this.description = builder.description;
            this.name = builder.name;
            this.receiverPhone = builder.receiverPhone;
            this.routingStrategy = builder.routingStrategy;
            this.securityLockThreshold = builder.securityLockThreshold;
        }

        @Override
        public final java.lang.Object getBuyerMessage() {
            return this.buyerMessage;
        }

        @Override
        public final java.lang.Object getChargeType() {
            return this.chargeType;
        }

        @Override
        public final java.lang.Object getHardWareSpec() {
            return this.hardWareSpec;
        }

        @Override
        public final java.lang.Object getHaType() {
            return this.haType;
        }

        @Override
        public final java.lang.Object getMaxBandWidth() {
            return this.maxBandWidth;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getReceiverAddress() {
            return this.receiverAddress;
        }

        @Override
        public final java.lang.Object getReceiverCity() {
            return this.receiverCity;
        }

        @Override
        public final java.lang.Object getReceiverCountry() {
            return this.receiverCountry;
        }

        @Override
        public final java.lang.Object getReceiverDistrict() {
            return this.receiverDistrict;
        }

        @Override
        public final java.lang.Object getReceiverEmail() {
            return this.receiverEmail;
        }

        @Override
        public final java.lang.Object getReceiverMobile() {
            return this.receiverMobile;
        }

        @Override
        public final java.lang.Object getReceiverName() {
            return this.receiverName;
        }

        @Override
        public final java.lang.Object getReceiverState() {
            return this.receiverState;
        }

        @Override
        public final java.lang.Object getReceiverTown() {
            return this.receiverTown;
        }

        @Override
        public final java.lang.Object getReceiverZip() {
            return this.receiverZip;
        }

        @Override
        public final java.lang.Object getActivate() {
            return this.activate;
        }

        @Override
        public final java.lang.Object getAlreadyHaveSag() {
            return this.alreadyHaveSag;
        }

        @Override
        public final java.lang.Object getAutoPay() {
            return this.autoPay;
        }

        @Override
        public final java.lang.Object getCidrBlock() {
            return this.cidrBlock;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getReceiverPhone() {
            return this.receiverPhone;
        }

        @Override
        public final java.lang.Object getRoutingStrategy() {
            return this.routingStrategy;
        }

        @Override
        public final java.lang.Object getSecurityLockThreshold() {
            return this.securityLockThreshold;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("buyerMessage", om.valueToTree(this.getBuyerMessage()));
            data.set("chargeType", om.valueToTree(this.getChargeType()));
            data.set("hardWareSpec", om.valueToTree(this.getHardWareSpec()));
            data.set("haType", om.valueToTree(this.getHaType()));
            data.set("maxBandWidth", om.valueToTree(this.getMaxBandWidth()));
            data.set("period", om.valueToTree(this.getPeriod()));
            data.set("receiverAddress", om.valueToTree(this.getReceiverAddress()));
            data.set("receiverCity", om.valueToTree(this.getReceiverCity()));
            data.set("receiverCountry", om.valueToTree(this.getReceiverCountry()));
            data.set("receiverDistrict", om.valueToTree(this.getReceiverDistrict()));
            data.set("receiverEmail", om.valueToTree(this.getReceiverEmail()));
            data.set("receiverMobile", om.valueToTree(this.getReceiverMobile()));
            data.set("receiverName", om.valueToTree(this.getReceiverName()));
            data.set("receiverState", om.valueToTree(this.getReceiverState()));
            data.set("receiverTown", om.valueToTree(this.getReceiverTown()));
            data.set("receiverZip", om.valueToTree(this.getReceiverZip()));
            if (this.getActivate() != null) {
                data.set("activate", om.valueToTree(this.getActivate()));
            }
            if (this.getAlreadyHaveSag() != null) {
                data.set("alreadyHaveSag", om.valueToTree(this.getAlreadyHaveSag()));
            }
            if (this.getAutoPay() != null) {
                data.set("autoPay", om.valueToTree(this.getAutoPay()));
            }
            if (this.getCidrBlock() != null) {
                data.set("cidrBlock", om.valueToTree(this.getCidrBlock()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getReceiverPhone() != null) {
                data.set("receiverPhone", om.valueToTree(this.getReceiverPhone()));
            }
            if (this.getRoutingStrategy() != null) {
                data.set("routingStrategy", om.valueToTree(this.getRoutingStrategy()));
            }
            if (this.getSecurityLockThreshold() != null) {
                data.set("securityLockThreshold", om.valueToTree(this.getSecurityLockThreshold()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sag.SmartAccessGatewayProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SmartAccessGatewayProps.Jsii$Proxy that = (SmartAccessGatewayProps.Jsii$Proxy) o;

            if (!buyerMessage.equals(that.buyerMessage)) return false;
            if (!chargeType.equals(that.chargeType)) return false;
            if (!hardWareSpec.equals(that.hardWareSpec)) return false;
            if (!haType.equals(that.haType)) return false;
            if (!maxBandWidth.equals(that.maxBandWidth)) return false;
            if (!period.equals(that.period)) return false;
            if (!receiverAddress.equals(that.receiverAddress)) return false;
            if (!receiverCity.equals(that.receiverCity)) return false;
            if (!receiverCountry.equals(that.receiverCountry)) return false;
            if (!receiverDistrict.equals(that.receiverDistrict)) return false;
            if (!receiverEmail.equals(that.receiverEmail)) return false;
            if (!receiverMobile.equals(that.receiverMobile)) return false;
            if (!receiverName.equals(that.receiverName)) return false;
            if (!receiverState.equals(that.receiverState)) return false;
            if (!receiverTown.equals(that.receiverTown)) return false;
            if (!receiverZip.equals(that.receiverZip)) return false;
            if (this.activate != null ? !this.activate.equals(that.activate) : that.activate != null) return false;
            if (this.alreadyHaveSag != null ? !this.alreadyHaveSag.equals(that.alreadyHaveSag) : that.alreadyHaveSag != null) return false;
            if (this.autoPay != null ? !this.autoPay.equals(that.autoPay) : that.autoPay != null) return false;
            if (this.cidrBlock != null ? !this.cidrBlock.equals(that.cidrBlock) : that.cidrBlock != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.receiverPhone != null ? !this.receiverPhone.equals(that.receiverPhone) : that.receiverPhone != null) return false;
            if (this.routingStrategy != null ? !this.routingStrategy.equals(that.routingStrategy) : that.routingStrategy != null) return false;
            return this.securityLockThreshold != null ? this.securityLockThreshold.equals(that.securityLockThreshold) : that.securityLockThreshold == null;
        }

        @Override
        public final int hashCode() {
            int result = this.buyerMessage.hashCode();
            result = 31 * result + (this.chargeType.hashCode());
            result = 31 * result + (this.hardWareSpec.hashCode());
            result = 31 * result + (this.haType.hashCode());
            result = 31 * result + (this.maxBandWidth.hashCode());
            result = 31 * result + (this.period.hashCode());
            result = 31 * result + (this.receiverAddress.hashCode());
            result = 31 * result + (this.receiverCity.hashCode());
            result = 31 * result + (this.receiverCountry.hashCode());
            result = 31 * result + (this.receiverDistrict.hashCode());
            result = 31 * result + (this.receiverEmail.hashCode());
            result = 31 * result + (this.receiverMobile.hashCode());
            result = 31 * result + (this.receiverName.hashCode());
            result = 31 * result + (this.receiverState.hashCode());
            result = 31 * result + (this.receiverTown.hashCode());
            result = 31 * result + (this.receiverZip.hashCode());
            result = 31 * result + (this.activate != null ? this.activate.hashCode() : 0);
            result = 31 * result + (this.alreadyHaveSag != null ? this.alreadyHaveSag.hashCode() : 0);
            result = 31 * result + (this.autoPay != null ? this.autoPay.hashCode() : 0);
            result = 31 * result + (this.cidrBlock != null ? this.cidrBlock.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.receiverPhone != null ? this.receiverPhone.hashCode() : 0);
            result = 31 * result + (this.routingStrategy != null ? this.routingStrategy.hashCode() : 0);
            result = 31 * result + (this.securityLockThreshold != null ? this.securityLockThreshold.hashCode() : 0);
            return result;
        }
    }
}
