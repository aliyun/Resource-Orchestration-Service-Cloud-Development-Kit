package com.aliyun.ros.cdk.memcache;

/**
 * Properties for defining a <code>Instance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-memcache-instance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:07.981Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.memcache.$Module.class, fqn = "@alicloud/ros-cdk-memcache.InstanceProps")
@software.amazon.jsii.Jsii.Proxy(InstanceProps.Jsii$Proxy.class)
public interface InstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property autoRenew: Specifies whether to enable auto renewal.
     * <p>
     * Valid values:
     * true
     * false
     * Note Default value: false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     * Property autoRenewPeriod: The period of the auto renewal.
     * <p>
     * Unit: months. Valid values:
     * 1
     * 2
     * 3
     * 6
     * 12
     * Note You must specify this parameter if the value of the AutoRenew parameter is true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewPeriod() {
        return null;
    }

    /**
     * Property autoUseCoupon: Specifies whether to use a coupon.
     * <p>
     * Valid values:
     * true
     * false
     * Note Default value: false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoUseCoupon() {
        return null;
    }

    /**
     * Property backupPolicy: Backup policy.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackupPolicy() {
        return null;
    }

    /**
     * Property capacity: The storage capacity of the instance.
     * <p>
     * Unit: MB.
     * Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
     * the CreateInstance operation.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCapacity() {
        return null;
    }

    /**
     * Property chargeType: The billing method of the instance.
     * <p>
     * Valid values:
     * PrePaid: subscription.
     * PostPaid: pay-as-you-go.
     * Note Default value: PostPaid.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getChargeType() {
        return null;
    }

    /**
     * Property config: The parameter configuration of the instance, in a JSON string.
     * <p>
     * For more information,
     * see Set parameters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConfig() {
        return null;
    }

    /**
     * Property couponNo: The coupon number.
     * <p>
     * Default value: youhuiquan_promotion_option_id_for_blank.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCouponNo() {
        return null;
    }

    /**
     * Property instanceClass: The instance type.
     * <p>
     * For more information, see Instance types.
     * Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
     * the CreateInstance operation.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceClass() {
        return null;
    }

    /**
     * Property instanceName: The name of the instance.
     * <p>
     * The name can be 2 to 128 characters in length and must start
     * with a letter. The following characters are not supported: at signs (&#64;), forward slashes (/), colons (:), equal signs (=), double quotation marks
     * ("), angle brackets (&lt;&gt;), braces ([]), curly brackets ({}) and spaces.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceName() {
        return null;
    }

    /**
     * Property networkType: The network type of the instance.
     * <p>
     * Valid values:
     * CLASSIC
     * VPC
     * Note Default value: CLASSIC.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkType() {
        return null;
    }

    /**
     * Property password: The password of the instance.
     * <p>
     * The password can be 8 to 32 characters in length and
     * must contain at least three types of the following characters: uppercase letters,
     * lowercase letters, digits, and special characters. Special characters include ! at signs (&#64;), number signs (#), dollar signs ($), percent signs (%), carets (^),
     * ampersands (&amp;), asterisks (*), parentheses (()), underscores (_), plus signs (+),
     * hyphens (-), and equal signs (=).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPassword() {
        return null;
    }

    /**
     * Property period: The subscription period.
     * <p>
     * You must specify this parameter if the value of the ChargeType
     * parameter is PrePaid. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24,
     * and 36.
     * Note This parameter is invalid if the value of the ChargeType parameter is PostPaid.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property privateIpAddress: The internal IP address of the instance.
     * <p>
     * Note The internal IP address must be located in the Classless Inter-Domain Routing (CIDR)
     * block of the VSwitch to which the instance belongs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrivateIpAddress() {
        return null;
    }

    /**
     * Property resourceGroupId: Resource group ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property vpcId: The ID of the VPC.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC.
     * <p>
     * If set to:
     * <p>
     * <ul>
     * <li>true: enables password free.</li>
     * <li>false: disables password free.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcPasswordFree() {
        return null;
    }

    /**
     * Property vSwitchId: The ID of the VSwitch.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     * Property zoneId: The ID of the zone in which the instance is created.
     * <p>
     * You can call the DescribeRegions operation to query the latest region list.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link InstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link InstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<InstanceProps> {
        java.lang.Object autoRenew;
        java.lang.Object autoRenewPeriod;
        java.lang.Object autoUseCoupon;
        java.lang.Object backupPolicy;
        java.lang.Object capacity;
        java.lang.Object chargeType;
        java.lang.Object config;
        java.lang.Object couponNo;
        java.lang.Object instanceClass;
        java.lang.Object instanceName;
        java.lang.Object networkType;
        java.lang.Object password;
        java.lang.Object period;
        java.lang.Object privateIpAddress;
        java.lang.Object resourceGroupId;
        java.lang.Object vpcId;
        java.lang.Object vpcPasswordFree;
        java.lang.Object vSwitchId;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link InstanceProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Specifies whether to enable auto renewal.
         *                  Valid values:
         *                  true
         *                  false
         *                  Note Default value: false.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.String autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Specifies whether to enable auto renewal.
         *                  Valid values:
         *                  true
         *                  false
         *                  Note Default value: false.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAutoRenewPeriod}
         * @param autoRenewPeriod Property autoRenewPeriod: The period of the auto renewal.
         *                        Unit: months. Valid values:
         *                        1
         *                        2
         *                        3
         *                        6
         *                        12
         *                        Note You must specify this parameter if the value of the AutoRenew parameter is true.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(java.lang.String autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAutoRenewPeriod}
         * @param autoRenewPeriod Property autoRenewPeriod: The period of the auto renewal.
         *                        Unit: months. Valid values:
         *                        1
         *                        2
         *                        3
         *                        6
         *                        12
         *                        Note You must specify this parameter if the value of the AutoRenew parameter is true.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAutoUseCoupon}
         * @param autoUseCoupon Property autoUseCoupon: Specifies whether to use a coupon.
         *                      Valid values:
         *                      true
         *                      false
         *                      Note Default value: false.
         * @return {@code this}
         */
        public Builder autoUseCoupon(java.lang.String autoUseCoupon) {
            this.autoUseCoupon = autoUseCoupon;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAutoUseCoupon}
         * @param autoUseCoupon Property autoUseCoupon: Specifies whether to use a coupon.
         *                      Valid values:
         *                      true
         *                      false
         *                      Note Default value: false.
         * @return {@code this}
         */
        public Builder autoUseCoupon(com.aliyun.ros.cdk.core.IResolvable autoUseCoupon) {
            this.autoUseCoupon = autoUseCoupon;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getBackupPolicy}
         * @param backupPolicy Property backupPolicy: Backup policy.
         * @return {@code this}
         */
        public Builder backupPolicy(com.aliyun.ros.cdk.core.IResolvable backupPolicy) {
            this.backupPolicy = backupPolicy;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getBackupPolicy}
         * @param backupPolicy Property backupPolicy: Backup policy.
         * @return {@code this}
         */
        public Builder backupPolicy(com.aliyun.ros.cdk.memcache.RosInstance.BackupPolicyProperty backupPolicy) {
            this.backupPolicy = backupPolicy;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getCapacity}
         * @param capacity Property capacity: The storage capacity of the instance.
         *                 Unit: MB.
         *                 Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
         *                 the CreateInstance operation.
         * @return {@code this}
         */
        public Builder capacity(java.lang.Number capacity) {
            this.capacity = capacity;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getCapacity}
         * @param capacity Property capacity: The storage capacity of the instance.
         *                 Unit: MB.
         *                 Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
         *                 the CreateInstance operation.
         * @return {@code this}
         */
        public Builder capacity(com.aliyun.ros.cdk.core.IResolvable capacity) {
            this.capacity = capacity;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getChargeType}
         * @param chargeType Property chargeType: The billing method of the instance.
         *                   Valid values:
         *                   PrePaid: subscription.
         *                   PostPaid: pay-as-you-go.
         *                   Note Default value: PostPaid.
         * @return {@code this}
         */
        public Builder chargeType(java.lang.String chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getChargeType}
         * @param chargeType Property chargeType: The billing method of the instance.
         *                   Valid values:
         *                   PrePaid: subscription.
         *                   PostPaid: pay-as-you-go.
         *                   Note Default value: PostPaid.
         * @return {@code this}
         */
        public Builder chargeType(com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getConfig}
         * @param config Property config: The parameter configuration of the instance, in a JSON string.
         *               For more information,
         *               see Set parameters.
         * @return {@code this}
         */
        public Builder config(java.lang.String config) {
            this.config = config;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getConfig}
         * @param config Property config: The parameter configuration of the instance, in a JSON string.
         *               For more information,
         *               see Set parameters.
         * @return {@code this}
         */
        public Builder config(com.aliyun.ros.cdk.core.IResolvable config) {
            this.config = config;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getCouponNo}
         * @param couponNo Property couponNo: The coupon number.
         *                 Default value: youhuiquan_promotion_option_id_for_blank.
         * @return {@code this}
         */
        public Builder couponNo(java.lang.String couponNo) {
            this.couponNo = couponNo;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getCouponNo}
         * @param couponNo Property couponNo: The coupon number.
         *                 Default value: youhuiquan_promotion_option_id_for_blank.
         * @return {@code this}
         */
        public Builder couponNo(com.aliyun.ros.cdk.core.IResolvable couponNo) {
            this.couponNo = couponNo;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceClass}
         * @param instanceClass Property instanceClass: The instance type.
         *                      For more information, see Instance types.
         *                      Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
         *                      the CreateInstance operation.
         * @return {@code this}
         */
        public Builder instanceClass(java.lang.String instanceClass) {
            this.instanceClass = instanceClass;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceClass}
         * @param instanceClass Property instanceClass: The instance type.
         *                      For more information, see Instance types.
         *                      Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
         *                      the CreateInstance operation.
         * @return {@code this}
         */
        public Builder instanceClass(com.aliyun.ros.cdk.core.IResolvable instanceClass) {
            this.instanceClass = instanceClass;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceName}
         * @param instanceName Property instanceName: The name of the instance.
         *                     The name can be 2 to 128 characters in length and must start
         *                     with a letter. The following characters are not supported: at signs (&#64;), forward slashes (/), colons (:), equal signs (=), double quotation marks
         *                     ("), angle brackets (&lt;&gt;), braces ([]), curly brackets ({}) and spaces.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceName}
         * @param instanceName Property instanceName: The name of the instance.
         *                     The name can be 2 to 128 characters in length and must start
         *                     with a letter. The following characters are not supported: at signs (&#64;), forward slashes (/), colons (:), equal signs (=), double quotation marks
         *                     ("), angle brackets (&lt;&gt;), braces ([]), curly brackets ({}) and spaces.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getNetworkType}
         * @param networkType Property networkType: The network type of the instance.
         *                    Valid values:
         *                    CLASSIC
         *                    VPC
         *                    Note Default value: CLASSIC.
         * @return {@code this}
         */
        public Builder networkType(java.lang.String networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getNetworkType}
         * @param networkType Property networkType: The network type of the instance.
         *                    Valid values:
         *                    CLASSIC
         *                    VPC
         *                    Note Default value: CLASSIC.
         * @return {@code this}
         */
        public Builder networkType(com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPassword}
         * @param password Property password: The password of the instance.
         *                 The password can be 8 to 32 characters in length and
         *                 must contain at least three types of the following characters: uppercase letters,
         *                 lowercase letters, digits, and special characters. Special characters include ! at signs (&#64;), number signs (#), dollar signs ($), percent signs (%), carets (^),
         *                 ampersands (&amp;), asterisks (*), parentheses (()), underscores (_), plus signs (+),
         *                 hyphens (-), and equal signs (=).
         * @return {@code this}
         */
        public Builder password(java.lang.String password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPassword}
         * @param password Property password: The password of the instance.
         *                 The password can be 8 to 32 characters in length and
         *                 must contain at least three types of the following characters: uppercase letters,
         *                 lowercase letters, digits, and special characters. Special characters include ! at signs (&#64;), number signs (#), dollar signs ($), percent signs (%), carets (^),
         *                 ampersands (&amp;), asterisks (*), parentheses (()), underscores (_), plus signs (+),
         *                 hyphens (-), and equal signs (=).
         * @return {@code this}
         */
        public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPeriod}
         * @param period Property period: The subscription period.
         *               You must specify this parameter if the value of the ChargeType
         *               parameter is PrePaid. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24,
         *               and 36.
         *               Note This parameter is invalid if the value of the ChargeType parameter is PostPaid.
         * @return {@code this}
         */
        public Builder period(java.lang.String period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPeriod}
         * @param period Property period: The subscription period.
         *               You must specify this parameter if the value of the ChargeType
         *               parameter is PrePaid. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24,
         *               and 36.
         *               Note This parameter is invalid if the value of the ChargeType parameter is PostPaid.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPrivateIpAddress}
         * @param privateIpAddress Property privateIpAddress: The internal IP address of the instance.
         *                         Note The internal IP address must be located in the Classless Inter-Domain Routing (CIDR)
         *                         block of the VSwitch to which the instance belongs.
         * @return {@code this}
         */
        public Builder privateIpAddress(java.lang.String privateIpAddress) {
            this.privateIpAddress = privateIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPrivateIpAddress}
         * @param privateIpAddress Property privateIpAddress: The internal IP address of the instance.
         *                         Note The internal IP address must be located in the Classless Inter-Domain Routing (CIDR)
         *                         block of the VSwitch to which the instance belongs.
         * @return {@code this}
         */
        public Builder privateIpAddress(com.aliyun.ros.cdk.core.IResolvable privateIpAddress) {
            this.privateIpAddress = privateIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group ID.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group ID.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVpcPasswordFree}
         * @param vpcPasswordFree Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC.
         *                        If set to:
         *                        <p>
         *                        <ul>
         *                        <li>true: enables password free.</li>
         *                        <li>false: disables password free.</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder vpcPasswordFree(java.lang.Boolean vpcPasswordFree) {
            this.vpcPasswordFree = vpcPasswordFree;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVpcPasswordFree}
         * @param vpcPasswordFree Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC.
         *                        If set to:
         *                        <p>
         *                        <ul>
         *                        <li>true: enables password free.</li>
         *                        <li>false: disables password free.</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder vpcPasswordFree(com.aliyun.ros.cdk.core.IResolvable vpcPasswordFree) {
            this.vpcPasswordFree = vpcPasswordFree;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getZoneId}
         * @param zoneId Property zoneId: The ID of the zone in which the instance is created.
         *               You can call the DescribeRegions operation to query the latest region list.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getZoneId}
         * @param zoneId Property zoneId: The ID of the zone in which the instance is created.
         *               You can call the DescribeRegions operation to query the latest region list.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link InstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public InstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link InstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InstanceProps {
        private final java.lang.Object autoRenew;
        private final java.lang.Object autoRenewPeriod;
        private final java.lang.Object autoUseCoupon;
        private final java.lang.Object backupPolicy;
        private final java.lang.Object capacity;
        private final java.lang.Object chargeType;
        private final java.lang.Object config;
        private final java.lang.Object couponNo;
        private final java.lang.Object instanceClass;
        private final java.lang.Object instanceName;
        private final java.lang.Object networkType;
        private final java.lang.Object password;
        private final java.lang.Object period;
        private final java.lang.Object privateIpAddress;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object vpcId;
        private final java.lang.Object vpcPasswordFree;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenewPeriod = software.amazon.jsii.Kernel.get(this, "autoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoUseCoupon = software.amazon.jsii.Kernel.get(this, "autoUseCoupon", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.backupPolicy = software.amazon.jsii.Kernel.get(this, "backupPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.capacity = software.amazon.jsii.Kernel.get(this, "capacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.chargeType = software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.config = software.amazon.jsii.Kernel.get(this, "config", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.couponNo = software.amazon.jsii.Kernel.get(this, "couponNo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceClass = software.amazon.jsii.Kernel.get(this, "instanceClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkType = software.amazon.jsii.Kernel.get(this, "networkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.privateIpAddress = software.amazon.jsii.Kernel.get(this, "privateIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcPasswordFree = software.amazon.jsii.Kernel.get(this, "vpcPasswordFree", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.autoRenew = builder.autoRenew;
            this.autoRenewPeriod = builder.autoRenewPeriod;
            this.autoUseCoupon = builder.autoUseCoupon;
            this.backupPolicy = builder.backupPolicy;
            this.capacity = builder.capacity;
            this.chargeType = builder.chargeType;
            this.config = builder.config;
            this.couponNo = builder.couponNo;
            this.instanceClass = builder.instanceClass;
            this.instanceName = builder.instanceName;
            this.networkType = builder.networkType;
            this.password = builder.password;
            this.period = builder.period;
            this.privateIpAddress = builder.privateIpAddress;
            this.resourceGroupId = builder.resourceGroupId;
            this.vpcId = builder.vpcId;
            this.vpcPasswordFree = builder.vpcPasswordFree;
            this.vSwitchId = builder.vSwitchId;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getAutoRenew() {
            return this.autoRenew;
        }

        @Override
        public final java.lang.Object getAutoRenewPeriod() {
            return this.autoRenewPeriod;
        }

        @Override
        public final java.lang.Object getAutoUseCoupon() {
            return this.autoUseCoupon;
        }

        @Override
        public final java.lang.Object getBackupPolicy() {
            return this.backupPolicy;
        }

        @Override
        public final java.lang.Object getCapacity() {
            return this.capacity;
        }

        @Override
        public final java.lang.Object getChargeType() {
            return this.chargeType;
        }

        @Override
        public final java.lang.Object getConfig() {
            return this.config;
        }

        @Override
        public final java.lang.Object getCouponNo() {
            return this.couponNo;
        }

        @Override
        public final java.lang.Object getInstanceClass() {
            return this.instanceClass;
        }

        @Override
        public final java.lang.Object getInstanceName() {
            return this.instanceName;
        }

        @Override
        public final java.lang.Object getNetworkType() {
            return this.networkType;
        }

        @Override
        public final java.lang.Object getPassword() {
            return this.password;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getPrivateIpAddress() {
            return this.privateIpAddress;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getVpcPasswordFree() {
            return this.vpcPasswordFree;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getAutoRenewPeriod() != null) {
                data.set("autoRenewPeriod", om.valueToTree(this.getAutoRenewPeriod()));
            }
            if (this.getAutoUseCoupon() != null) {
                data.set("autoUseCoupon", om.valueToTree(this.getAutoUseCoupon()));
            }
            if (this.getBackupPolicy() != null) {
                data.set("backupPolicy", om.valueToTree(this.getBackupPolicy()));
            }
            if (this.getCapacity() != null) {
                data.set("capacity", om.valueToTree(this.getCapacity()));
            }
            if (this.getChargeType() != null) {
                data.set("chargeType", om.valueToTree(this.getChargeType()));
            }
            if (this.getConfig() != null) {
                data.set("config", om.valueToTree(this.getConfig()));
            }
            if (this.getCouponNo() != null) {
                data.set("couponNo", om.valueToTree(this.getCouponNo()));
            }
            if (this.getInstanceClass() != null) {
                data.set("instanceClass", om.valueToTree(this.getInstanceClass()));
            }
            if (this.getInstanceName() != null) {
                data.set("instanceName", om.valueToTree(this.getInstanceName()));
            }
            if (this.getNetworkType() != null) {
                data.set("networkType", om.valueToTree(this.getNetworkType()));
            }
            if (this.getPassword() != null) {
                data.set("password", om.valueToTree(this.getPassword()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPrivateIpAddress() != null) {
                data.set("privateIpAddress", om.valueToTree(this.getPrivateIpAddress()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }
            if (this.getVpcPasswordFree() != null) {
                data.set("vpcPasswordFree", om.valueToTree(this.getVpcPasswordFree()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-memcache.InstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            InstanceProps.Jsii$Proxy that = (InstanceProps.Jsii$Proxy) o;

            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.autoRenewPeriod != null ? !this.autoRenewPeriod.equals(that.autoRenewPeriod) : that.autoRenewPeriod != null) return false;
            if (this.autoUseCoupon != null ? !this.autoUseCoupon.equals(that.autoUseCoupon) : that.autoUseCoupon != null) return false;
            if (this.backupPolicy != null ? !this.backupPolicy.equals(that.backupPolicy) : that.backupPolicy != null) return false;
            if (this.capacity != null ? !this.capacity.equals(that.capacity) : that.capacity != null) return false;
            if (this.chargeType != null ? !this.chargeType.equals(that.chargeType) : that.chargeType != null) return false;
            if (this.config != null ? !this.config.equals(that.config) : that.config != null) return false;
            if (this.couponNo != null ? !this.couponNo.equals(that.couponNo) : that.couponNo != null) return false;
            if (this.instanceClass != null ? !this.instanceClass.equals(that.instanceClass) : that.instanceClass != null) return false;
            if (this.instanceName != null ? !this.instanceName.equals(that.instanceName) : that.instanceName != null) return false;
            if (this.networkType != null ? !this.networkType.equals(that.networkType) : that.networkType != null) return false;
            if (this.password != null ? !this.password.equals(that.password) : that.password != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.privateIpAddress != null ? !this.privateIpAddress.equals(that.privateIpAddress) : that.privateIpAddress != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            if (this.vpcPasswordFree != null ? !this.vpcPasswordFree.equals(that.vpcPasswordFree) : that.vpcPasswordFree != null) return false;
            if (this.vSwitchId != null ? !this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.autoRenew != null ? this.autoRenew.hashCode() : 0;
            result = 31 * result + (this.autoRenewPeriod != null ? this.autoRenewPeriod.hashCode() : 0);
            result = 31 * result + (this.autoUseCoupon != null ? this.autoUseCoupon.hashCode() : 0);
            result = 31 * result + (this.backupPolicy != null ? this.backupPolicy.hashCode() : 0);
            result = 31 * result + (this.capacity != null ? this.capacity.hashCode() : 0);
            result = 31 * result + (this.chargeType != null ? this.chargeType.hashCode() : 0);
            result = 31 * result + (this.config != null ? this.config.hashCode() : 0);
            result = 31 * result + (this.couponNo != null ? this.couponNo.hashCode() : 0);
            result = 31 * result + (this.instanceClass != null ? this.instanceClass.hashCode() : 0);
            result = 31 * result + (this.instanceName != null ? this.instanceName.hashCode() : 0);
            result = 31 * result + (this.networkType != null ? this.networkType.hashCode() : 0);
            result = 31 * result + (this.password != null ? this.password.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.privateIpAddress != null ? this.privateIpAddress.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vpcPasswordFree != null ? this.vpcPasswordFree.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
