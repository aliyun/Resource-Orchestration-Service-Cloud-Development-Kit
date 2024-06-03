package com.aliyun.ros.cdk.memcache;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::Memcache::Instance</code>ALIYUN::MEMCACHE::Instance is used to create an ApsaraDB for Memcache (OCS) instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:52.814Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.memcache.$Module.class, fqn = "@alicloud/ros-cdk-memcache.Instance")
public class Instance extends com.aliyun.ros.cdk.core.Resource {

    protected Instance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Instance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.memcache.InstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.memcache.InstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute ConnectionDomain: The internal endpoint of the instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConnectionDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrConnectionDomain", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceId: The globally unique identifier (GUID) of the instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceName: The name of the instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceName() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Port: Port of created instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPort() {
        return software.amazon.jsii.Kernel.get(this, "attrPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute QPS: QPS.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrQps() {
        return software.amazon.jsii.Kernel.get(this, "attrQps", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.memcache.InstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.memcache.InstanceProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.memcache.InstanceProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.memcache.Instance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.memcache.Instance> {
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
        private com.aliyun.ros.cdk.memcache.InstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property autoRenew: Specifies whether to enable auto renewal.
         * <p>
         * Valid values:
         * true
         * false
         * Note Default value: false.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Specifies whether to enable auto renewal. This parameter is required.
         */
        public Builder autoRenew(final java.lang.String autoRenew) {
            this.props().autoRenew(autoRenew);
            return this;
        }
        /**
         * Property autoRenew: Specifies whether to enable auto renewal.
         * <p>
         * Valid values:
         * true
         * false
         * Note Default value: false.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Specifies whether to enable auto renewal. This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props().autoRenew(autoRenew);
            return this;
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
         * <p>
         * @return {@code this}
         * @param autoRenewPeriod Property autoRenewPeriod: The period of the auto renewal. This parameter is required.
         */
        public Builder autoRenewPeriod(final java.lang.String autoRenewPeriod) {
            this.props().autoRenewPeriod(autoRenewPeriod);
            return this;
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
         * <p>
         * @return {@code this}
         * @param autoRenewPeriod Property autoRenewPeriod: The period of the auto renewal. This parameter is required.
         */
        public Builder autoRenewPeriod(final com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.props().autoRenewPeriod(autoRenewPeriod);
            return this;
        }

        /**
         * Property autoUseCoupon: Specifies whether to use a coupon.
         * <p>
         * Valid values:
         * true
         * false
         * Note Default value: false.
         * <p>
         * @return {@code this}
         * @param autoUseCoupon Property autoUseCoupon: Specifies whether to use a coupon. This parameter is required.
         */
        public Builder autoUseCoupon(final java.lang.String autoUseCoupon) {
            this.props().autoUseCoupon(autoUseCoupon);
            return this;
        }
        /**
         * Property autoUseCoupon: Specifies whether to use a coupon.
         * <p>
         * Valid values:
         * true
         * false
         * Note Default value: false.
         * <p>
         * @return {@code this}
         * @param autoUseCoupon Property autoUseCoupon: Specifies whether to use a coupon. This parameter is required.
         */
        public Builder autoUseCoupon(final com.aliyun.ros.cdk.core.IResolvable autoUseCoupon) {
            this.props().autoUseCoupon(autoUseCoupon);
            return this;
        }

        /**
         * Property backupPolicy: Backup policy.
         * <p>
         * @return {@code this}
         * @param backupPolicy Property backupPolicy: Backup policy. This parameter is required.
         */
        public Builder backupPolicy(final com.aliyun.ros.cdk.core.IResolvable backupPolicy) {
            this.props().backupPolicy(backupPolicy);
            return this;
        }
        /**
         * Property backupPolicy: Backup policy.
         * <p>
         * @return {@code this}
         * @param backupPolicy Property backupPolicy: Backup policy. This parameter is required.
         */
        public Builder backupPolicy(final com.aliyun.ros.cdk.memcache.RosInstance.BackupPolicyProperty backupPolicy) {
            this.props().backupPolicy(backupPolicy);
            return this;
        }

        /**
         * Property capacity: The storage capacity of the instance.
         * <p>
         * Unit: MB.
         * Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
         * the CreateInstance operation.
         * <p>
         * @return {@code this}
         * @param capacity Property capacity: The storage capacity of the instance. This parameter is required.
         */
        public Builder capacity(final java.lang.Number capacity) {
            this.props().capacity(capacity);
            return this;
        }
        /**
         * Property capacity: The storage capacity of the instance.
         * <p>
         * Unit: MB.
         * Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
         * the CreateInstance operation.
         * <p>
         * @return {@code this}
         * @param capacity Property capacity: The storage capacity of the instance. This parameter is required.
         */
        public Builder capacity(final com.aliyun.ros.cdk.core.IResolvable capacity) {
            this.props().capacity(capacity);
            return this;
        }

        /**
         * Property chargeType: The billing method of the instance.
         * <p>
         * Valid values:
         * PrePaid: subscription.
         * PostPaid: pay-as-you-go.
         * Note Default value: PostPaid.
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: The billing method of the instance. This parameter is required.
         */
        public Builder chargeType(final java.lang.String chargeType) {
            this.props().chargeType(chargeType);
            return this;
        }
        /**
         * Property chargeType: The billing method of the instance.
         * <p>
         * Valid values:
         * PrePaid: subscription.
         * PostPaid: pay-as-you-go.
         * Note Default value: PostPaid.
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: The billing method of the instance. This parameter is required.
         */
        public Builder chargeType(final com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.props().chargeType(chargeType);
            return this;
        }

        /**
         * Property config: The parameter configuration of the instance, in a JSON string.
         * <p>
         * For more information,
         * see Set parameters.
         * <p>
         * @return {@code this}
         * @param config Property config: The parameter configuration of the instance, in a JSON string. This parameter is required.
         */
        public Builder config(final java.lang.String config) {
            this.props().config(config);
            return this;
        }
        /**
         * Property config: The parameter configuration of the instance, in a JSON string.
         * <p>
         * For more information,
         * see Set parameters.
         * <p>
         * @return {@code this}
         * @param config Property config: The parameter configuration of the instance, in a JSON string. This parameter is required.
         */
        public Builder config(final com.aliyun.ros.cdk.core.IResolvable config) {
            this.props().config(config);
            return this;
        }

        /**
         * Property couponNo: The coupon number.
         * <p>
         * Default value: youhuiquan_promotion_option_id_for_blank.
         * <p>
         * @return {@code this}
         * @param couponNo Property couponNo: The coupon number. This parameter is required.
         */
        public Builder couponNo(final java.lang.String couponNo) {
            this.props().couponNo(couponNo);
            return this;
        }
        /**
         * Property couponNo: The coupon number.
         * <p>
         * Default value: youhuiquan_promotion_option_id_for_blank.
         * <p>
         * @return {@code this}
         * @param couponNo Property couponNo: The coupon number. This parameter is required.
         */
        public Builder couponNo(final com.aliyun.ros.cdk.core.IResolvable couponNo) {
            this.props().couponNo(couponNo);
            return this;
        }

        /**
         * Property instanceClass: The instance type.
         * <p>
         * For more information, see Instance types.
         * Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
         * the CreateInstance operation.
         * <p>
         * @return {@code this}
         * @param instanceClass Property instanceClass: The instance type. This parameter is required.
         */
        public Builder instanceClass(final java.lang.String instanceClass) {
            this.props().instanceClass(instanceClass);
            return this;
        }
        /**
         * Property instanceClass: The instance type.
         * <p>
         * For more information, see Instance types.
         * Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
         * the CreateInstance operation.
         * <p>
         * @return {@code this}
         * @param instanceClass Property instanceClass: The instance type. This parameter is required.
         */
        public Builder instanceClass(final com.aliyun.ros.cdk.core.IResolvable instanceClass) {
            this.props().instanceClass(instanceClass);
            return this;
        }

        /**
         * Property instanceName: The name of the instance.
         * <p>
         * The name can be 2 to 128 characters in length and must start
         * with a letter. The following characters are not supported: at signs (&#64;), forward slashes (/), colons (:), equal signs (=), double quotation marks
         * ("), angle brackets (&lt;&gt;), braces ([]), curly brackets ({}) and spaces.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: The name of the instance. This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props().instanceName(instanceName);
            return this;
        }
        /**
         * Property instanceName: The name of the instance.
         * <p>
         * The name can be 2 to 128 characters in length and must start
         * with a letter. The following characters are not supported: at signs (&#64;), forward slashes (/), colons (:), equal signs (=), double quotation marks
         * ("), angle brackets (&lt;&gt;), braces ([]), curly brackets ({}) and spaces.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: The name of the instance. This parameter is required.
         */
        public Builder instanceName(final com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.props().instanceName(instanceName);
            return this;
        }

        /**
         * Property networkType: The network type of the instance.
         * <p>
         * Valid values:
         * CLASSIC
         * VPC
         * Note Default value: CLASSIC.
         * <p>
         * @return {@code this}
         * @param networkType Property networkType: The network type of the instance. This parameter is required.
         */
        public Builder networkType(final java.lang.String networkType) {
            this.props().networkType(networkType);
            return this;
        }
        /**
         * Property networkType: The network type of the instance.
         * <p>
         * Valid values:
         * CLASSIC
         * VPC
         * Note Default value: CLASSIC.
         * <p>
         * @return {@code this}
         * @param networkType Property networkType: The network type of the instance. This parameter is required.
         */
        public Builder networkType(final com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.props().networkType(networkType);
            return this;
        }

        /**
         * Property password: The password of the instance.
         * <p>
         * The password can be 8 to 32 characters in length and
         * must contain at least three types of the following characters: uppercase letters,
         * lowercase letters, digits, and special characters. Special characters include ! at signs (&#64;), number signs (#), dollar signs ($), percent signs (%), carets (^),
         * ampersands (&amp;), asterisks (*), parentheses (()), underscores (_), plus signs (+),
         * hyphens (-), and equal signs (=).
         * <p>
         * @return {@code this}
         * @param password Property password: The password of the instance. This parameter is required.
         */
        public Builder password(final java.lang.String password) {
            this.props().password(password);
            return this;
        }
        /**
         * Property password: The password of the instance.
         * <p>
         * The password can be 8 to 32 characters in length and
         * must contain at least three types of the following characters: uppercase letters,
         * lowercase letters, digits, and special characters. Special characters include ! at signs (&#64;), number signs (#), dollar signs ($), percent signs (%), carets (^),
         * ampersands (&amp;), asterisks (*), parentheses (()), underscores (_), plus signs (+),
         * hyphens (-), and equal signs (=).
         * <p>
         * @return {@code this}
         * @param password Property password: The password of the instance. This parameter is required.
         */
        public Builder password(final com.aliyun.ros.cdk.core.IResolvable password) {
            this.props().password(password);
            return this;
        }

        /**
         * Property period: The subscription period.
         * <p>
         * You must specify this parameter if the value of the ChargeType
         * parameter is PrePaid. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24,
         * and 36.
         * Note This parameter is invalid if the value of the ChargeType parameter is PostPaid.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription period. This parameter is required.
         */
        public Builder period(final java.lang.String period) {
            this.props().period(period);
            return this;
        }
        /**
         * Property period: The subscription period.
         * <p>
         * You must specify this parameter if the value of the ChargeType
         * parameter is PrePaid. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24,
         * and 36.
         * Note This parameter is invalid if the value of the ChargeType parameter is PostPaid.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription period. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props().period(period);
            return this;
        }

        /**
         * Property privateIpAddress: The internal IP address of the instance.
         * <p>
         * Note The internal IP address must be located in the Classless Inter-Domain Routing (CIDR)
         * block of the VSwitch to which the instance belongs.
         * <p>
         * @return {@code this}
         * @param privateIpAddress Property privateIpAddress: The internal IP address of the instance. This parameter is required.
         */
        public Builder privateIpAddress(final java.lang.String privateIpAddress) {
            this.props().privateIpAddress(privateIpAddress);
            return this;
        }
        /**
         * Property privateIpAddress: The internal IP address of the instance.
         * <p>
         * Note The internal IP address must be located in the Classless Inter-Domain Routing (CIDR)
         * block of the VSwitch to which the instance belongs.
         * <p>
         * @return {@code this}
         * @param privateIpAddress Property privateIpAddress: The internal IP address of the instance. This parameter is required.
         */
        public Builder privateIpAddress(final com.aliyun.ros.cdk.core.IResolvable privateIpAddress) {
            this.props().privateIpAddress(privateIpAddress);
            return this;
        }

        /**
         * Property resourceGroupId: Resource group ID.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group ID. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Resource group ID.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group ID. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property vpcId: The ID of the VPC.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the VPC. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props().vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The ID of the VPC.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the VPC. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props().vpcId(vpcId);
            return this;
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
         * <p>
         * @return {@code this}
         * @param vpcPasswordFree Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. This parameter is required.
         */
        public Builder vpcPasswordFree(final java.lang.Boolean vpcPasswordFree) {
            this.props().vpcPasswordFree(vpcPasswordFree);
            return this;
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
         * <p>
         * @return {@code this}
         * @param vpcPasswordFree Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. This parameter is required.
         */
        public Builder vpcPasswordFree(final com.aliyun.ros.cdk.core.IResolvable vpcPasswordFree) {
            this.props().vpcPasswordFree(vpcPasswordFree);
            return this;
        }

        /**
         * Property vSwitchId: The ID of the VSwitch.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props().vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The ID of the VSwitch.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props().vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property zoneId: The ID of the zone in which the instance is created.
         * <p>
         * You can call the DescribeRegions operation to query the latest region list.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The ID of the zone in which the instance is created. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props().zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The ID of the zone in which the instance is created.
         * <p>
         * You can call the DescribeRegions operation to query the latest region list.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The ID of the zone in which the instance is created. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props().zoneId(zoneId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.memcache.Instance}.
         */
        @Override
        public com.aliyun.ros.cdk.memcache.Instance build() {
            return new com.aliyun.ros.cdk.memcache.Instance(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.memcache.InstanceProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.memcache.InstanceProps.Builder();
            }
            return this.props;
        }
    }
}
