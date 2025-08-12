package com.aliyun.ros.cdk.ecd;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ECD::Desktops</code>, which is used to create one or more cloud desktops.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:45.977Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecd.$Module.class, fqn = "@alicloud/ros-cdk-ecd.Desktops")
public class Desktops extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ecd.IDesktops {

    protected Desktops(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Desktops(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Desktops(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecd.DesktopsProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Desktops(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecd.DesktopsProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DesktopId: The ID of the cloud desktop.
     * <p>
     * If multiple cloud desktops are created in a call, the
     * IDs of the cloud desktops are returned.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDesktopId() {
        return software.amazon.jsii.Kernel.get(this, "attrDesktopId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OrderId: The ID of the order.
     * <p>
     * Note This parameter is returned only when the ChargeType parameter is set to PrePaid.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecd.DesktopsProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecd.DesktopsProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ecd.Desktops}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecd.Desktops> {
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
        private final com.aliyun.ros.cdk.ecd.DesktopsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecd.DesktopsProps.Builder();
        }

        /**
         * Property bundleId: The ID of the cloud desktop template.
         * <p>
         * @return {@code this}
         * @param bundleId Property bundleId: The ID of the cloud desktop template. This parameter is required.
         */
        public Builder bundleId(final java.lang.String bundleId) {
            this.props.bundleId(bundleId);
            return this;
        }
        /**
         * Property bundleId: The ID of the cloud desktop template.
         * <p>
         * @return {@code this}
         * @param bundleId Property bundleId: The ID of the cloud desktop template. This parameter is required.
         */
        public Builder bundleId(final com.aliyun.ros.cdk.core.IResolvable bundleId) {
            this.props.bundleId(bundleId);
            return this;
        }

        /**
         * Property officeSiteId: The ID of the workspace.
         * <p>
         * @return {@code this}
         * @param officeSiteId Property officeSiteId: The ID of the workspace. This parameter is required.
         */
        public Builder officeSiteId(final java.lang.String officeSiteId) {
            this.props.officeSiteId(officeSiteId);
            return this;
        }
        /**
         * Property officeSiteId: The ID of the workspace.
         * <p>
         * @return {@code this}
         * @param officeSiteId Property officeSiteId: The ID of the workspace. This parameter is required.
         */
        public Builder officeSiteId(final com.aliyun.ros.cdk.core.IResolvable officeSiteId) {
            this.props.officeSiteId(officeSiteId);
            return this;
        }

        /**
         * Property policyGroupId: The ID of the policy.
         * <p>
         * @return {@code this}
         * @param policyGroupId Property policyGroupId: The ID of the policy. This parameter is required.
         */
        public Builder policyGroupId(final java.lang.String policyGroupId) {
            this.props.policyGroupId(policyGroupId);
            return this;
        }
        /**
         * Property policyGroupId: The ID of the policy.
         * <p>
         * @return {@code this}
         * @param policyGroupId Property policyGroupId: The ID of the policy. This parameter is required.
         */
        public Builder policyGroupId(final com.aliyun.ros.cdk.core.IResolvable policyGroupId) {
            this.props.policyGroupId(policyGroupId);
            return this;
        }

        /**
         * Property amount: The number of cloud desktops that you want to create.
         * <p>
         * Valid values: 1 to 300. Default
         * value: 1.
         * <p>
         * @return {@code this}
         * @param amount Property amount: The number of cloud desktops that you want to create. This parameter is required.
         */
        public Builder amount(final java.lang.Number amount) {
            this.props.amount(amount);
            return this;
        }
        /**
         * Property amount: The number of cloud desktops that you want to create.
         * <p>
         * Valid values: 1 to 300. Default
         * value: 1.
         * <p>
         * @return {@code this}
         * @param amount Property amount: The number of cloud desktops that you want to create. This parameter is required.
         */
        public Builder amount(final com.aliyun.ros.cdk.core.IResolvable amount) {
            this.props.amount(amount);
            return this;
        }

        /**
         * Property autoPay: Specifies whether to enable automatic payment.
         * <p>
         * Valid values:
         * true: enables automatic payment. You must make sure that your Alibaba Cloud account
         * has sufficient balance. If your Alibaba Cloud account does not have sufficient balance,
         * abnormal orders are generated.
         * false: disables automatic payment. In this case, an order is generated, and no payment
         * is automatically made. You can log on to the EDS console and complete the payment
         * based on the order ID on the Orders page.
         * Default value: true.
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Specifies whether to enable automatic payment. This parameter is required.
         */
        public Builder autoPay(final java.lang.Boolean autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }
        /**
         * Property autoPay: Specifies whether to enable automatic payment.
         * <p>
         * Valid values:
         * true: enables automatic payment. You must make sure that your Alibaba Cloud account
         * has sufficient balance. If your Alibaba Cloud account does not have sufficient balance,
         * abnormal orders are generated.
         * false: disables automatic payment. In this case, an order is generated, and no payment
         * is automatically made. You can log on to the EDS console and complete the payment
         * based on the order ID on the Orders page.
         * Default value: true.
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Specifies whether to enable automatic payment. This parameter is required.
         */
        public Builder autoPay(final com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }

        /**
         * Property autoRenew: Specifies whether to enable auto-renewal for the cloud desktop.
         * <p>
         * This parameter takes
         * effect only when the ChargeType parameter is set to PrePaid.
         * Valid values:
         * true: enables auto-renewal. The renewal duration is the same as the subscription duration
         * that you specified for the Period parameter when you purchased the cloud desktop.
         * false: does not enable auto-renewal.
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Specifies whether to enable auto-renewal for the cloud desktop. This parameter is required.
         */
        public Builder autoRenew(final java.lang.Boolean autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * Property autoRenew: Specifies whether to enable auto-renewal for the cloud desktop.
         * <p>
         * This parameter takes
         * effect only when the ChargeType parameter is set to PrePaid.
         * Valid values:
         * true: enables auto-renewal. The renewal duration is the same as the subscription duration
         * that you specified for the Period parameter when you purchased the cloud desktop.
         * false: does not enable auto-renewal.
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Specifies whether to enable auto-renewal for the cloud desktop. This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * Property chargeType: The billing method of the cloud desktop.
         * <p>
         * Valid values:
         * PostPaid: pay-as-you-go
         * PrePaid: subscription
         * Default value: PostPaid.
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: The billing method of the cloud desktop. This parameter is required.
         */
        public Builder chargeType(final java.lang.String chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }
        /**
         * Property chargeType: The billing method of the cloud desktop.
         * <p>
         * Valid values:
         * PostPaid: pay-as-you-go
         * PrePaid: subscription
         * Default value: PostPaid.
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: The billing method of the cloud desktop. This parameter is required.
         */
        public Builder chargeType(final com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }

        /**
         * Property desktopName: The name of the cloud desktop.
         * <p>
         * @return {@code this}
         * @param desktopName Property desktopName: The name of the cloud desktop. This parameter is required.
         */
        public Builder desktopName(final java.lang.String desktopName) {
            this.props.desktopName(desktopName);
            return this;
        }
        /**
         * Property desktopName: The name of the cloud desktop.
         * <p>
         * @return {@code this}
         * @param desktopName Property desktopName: The name of the cloud desktop. This parameter is required.
         */
        public Builder desktopName(final com.aliyun.ros.cdk.core.IResolvable desktopName) {
            this.props.desktopName(desktopName);
            return this;
        }

        /**
         * Property desktopNameSuffix: Specifies whether to automatically add a suffix to the cloud desktop name when you create multiple cloud desktops at a time.
         * <p>
         * True: automatically adds a suffix.
         * False: does not add a suffix.
         * <p>
         * @return {@code this}
         * @param desktopNameSuffix Property desktopNameSuffix: Specifies whether to automatically add a suffix to the cloud desktop name when you create multiple cloud desktops at a time. This parameter is required.
         */
        public Builder desktopNameSuffix(final java.lang.Boolean desktopNameSuffix) {
            this.props.desktopNameSuffix(desktopNameSuffix);
            return this;
        }
        /**
         * Property desktopNameSuffix: Specifies whether to automatically add a suffix to the cloud desktop name when you create multiple cloud desktops at a time.
         * <p>
         * True: automatically adds a suffix.
         * False: does not add a suffix.
         * <p>
         * @return {@code this}
         * @param desktopNameSuffix Property desktopNameSuffix: Specifies whether to automatically add a suffix to the cloud desktop name when you create multiple cloud desktops at a time. This parameter is required.
         */
        public Builder desktopNameSuffix(final com.aliyun.ros.cdk.core.IResolvable desktopNameSuffix) {
            this.props.desktopNameSuffix(desktopNameSuffix);
            return this;
        }

        /**
         * Property directoryId: This parameter is not open for use.
         * <p>
         * @return {@code this}
         * @param directoryId Property directoryId: This parameter is not open for use. This parameter is required.
         */
        public Builder directoryId(final java.lang.String directoryId) {
            this.props.directoryId(directoryId);
            return this;
        }
        /**
         * Property directoryId: This parameter is not open for use.
         * <p>
         * @return {@code this}
         * @param directoryId Property directoryId: This parameter is not open for use. This parameter is required.
         */
        public Builder directoryId(final com.aliyun.ros.cdk.core.IResolvable directoryId) {
            this.props.directoryId(directoryId);
            return this;
        }

        /**
         * Property endUserId: The user ID that authorizes the use of the cloud desktop, 1~100 can be set.
         * <p>
         * During the same period, only one user can use the desktop.
         * If EndUserId is not set, the created cloud desktop will not be assigned to any user.
         * <p>
         * @return {@code this}
         * @param endUserId Property endUserId: The user ID that authorizes the use of the cloud desktop, 1~100 can be set. This parameter is required.
         */
        public Builder endUserId(final java.util.List<? extends java.lang.Object> endUserId) {
            this.props.endUserId(endUserId);
            return this;
        }
        /**
         * Property endUserId: The user ID that authorizes the use of the cloud desktop, 1~100 can be set.
         * <p>
         * During the same period, only one user can use the desktop.
         * If EndUserId is not set, the created cloud desktop will not be assigned to any user.
         * <p>
         * @return {@code this}
         * @param endUserId Property endUserId: The user ID that authorizes the use of the cloud desktop, 1~100 can be set. This parameter is required.
         */
        public Builder endUserId(final com.aliyun.ros.cdk.core.IResolvable endUserId) {
            this.props.endUserId(endUserId);
            return this;
        }

        /**
         * Property groupId: desktop group ID。 Note that the desktop group function is currently in the invitation test.
         * <p>
         * If you want to experience it, please submit a work order application.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: desktop group ID。 Note that the desktop group function is currently in the invitation test. This parameter is required.
         */
        public Builder groupId(final java.lang.String groupId) {
            this.props.groupId(groupId);
            return this;
        }
        /**
         * Property groupId: desktop group ID。 Note that the desktop group function is currently in the invitation test.
         * <p>
         * If you want to experience it, please submit a work order application.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: desktop group ID。 Note that the desktop group function is currently in the invitation test. This parameter is required.
         */
        public Builder groupId(final com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.props.groupId(groupId);
            return this;
        }

        /**
         * Property hostname: The custom hostname that you specify for the cloud desktop.
         * <p>
         * You can only specify the
         * hostname of a Windows cloud desktop in the workspace of the enterprise AD account
         * type.
         * The hostname must meet the following requirements:
         * The hostname must be 2 to 15 characters in length.
         * The hostname can contain letters, digits, and hyphens (-). It cannot start or end
         * with a hyphen (-), contain consecutive hyphens (-), or contain only digits.
         * If you create multiple cloud desktops, you can specify the names of the cloud desktops
         * in the name_prefix[begin_number,bits]name_suffix format. For example, if you set Hostname to ecd--1,4-test, the hostname of the first cloud desktop is ecd-0001-test and the hostname of
         * the second cloud desktop is ecd-0002-test. The rest may be deduced by analogy.
         * name_prefix: the prefix of the hostname.
         * [begin_number,bits]: the ordered numbers in the hostname. begin_number: the start number. Valid values:
         * 0 to 999999. Default value: 0. bits: the digit. Valid values: 1 to 6. Default value:
         * 6.
         * name_suffix: the suffix of the hostname.
         * <p>
         * @return {@code this}
         * @param hostname Property hostname: The custom hostname that you specify for the cloud desktop. This parameter is required.
         */
        public Builder hostname(final java.lang.String hostname) {
            this.props.hostname(hostname);
            return this;
        }
        /**
         * Property hostname: The custom hostname that you specify for the cloud desktop.
         * <p>
         * You can only specify the
         * hostname of a Windows cloud desktop in the workspace of the enterprise AD account
         * type.
         * The hostname must meet the following requirements:
         * The hostname must be 2 to 15 characters in length.
         * The hostname can contain letters, digits, and hyphens (-). It cannot start or end
         * with a hyphen (-), contain consecutive hyphens (-), or contain only digits.
         * If you create multiple cloud desktops, you can specify the names of the cloud desktops
         * in the name_prefix[begin_number,bits]name_suffix format. For example, if you set Hostname to ecd--1,4-test, the hostname of the first cloud desktop is ecd-0001-test and the hostname of
         * the second cloud desktop is ecd-0002-test. The rest may be deduced by analogy.
         * name_prefix: the prefix of the hostname.
         * [begin_number,bits]: the ordered numbers in the hostname. begin_number: the start number. Valid values:
         * 0 to 999999. Default value: 0. bits: the digit. Valid values: 1 to 6. Default value:
         * 6.
         * name_suffix: the suffix of the hostname.
         * <p>
         * @return {@code this}
         * @param hostname Property hostname: The custom hostname that you specify for the cloud desktop. This parameter is required.
         */
        public Builder hostname(final com.aliyun.ros.cdk.core.IResolvable hostname) {
            this.props.hostname(hostname);
            return this;
        }

        /**
         * Property period: The subscription duration.
         * <p>
         * The unit of the value is specified by the PeriodUnit parameter. This parameter takes effect and is required only when the ChargeType parameter is set to PrePaid.
         * If PeriodUnit is month, the valid range is 1, 2, 3, 6, 12, 24, 36, 48,60
         * If periodUnit is year, the valid range is 1 to 5
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription duration. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: The subscription duration.
         * <p>
         * The unit of the value is specified by the PeriodUnit parameter. This parameter takes effect and is required only when the ChargeType parameter is set to PrePaid.
         * If PeriodUnit is month, the valid range is 1, 2, 3, 6, 12, 24, 36, 48,60
         * If periodUnit is year, the valid range is 1 to 5
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription duration. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property periodUnit: The unit of the subscription duration.
         * <p>
         * Valid values:
         * Month
         * Year
         * Default value: Month.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The unit of the subscription duration. This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }
        /**
         * Property periodUnit: The unit of the subscription duration.
         * <p>
         * Valid values:
         * Month
         * Year
         * Default value: Month.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The unit of the subscription duration. This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }

        /**
         * Property promotionId: promotion id.
         * <p>
         * @return {@code this}
         * @param promotionId Property promotionId: promotion id. This parameter is required.
         */
        public Builder promotionId(final java.lang.String promotionId) {
            this.props.promotionId(promotionId);
            return this;
        }
        /**
         * Property promotionId: promotion id.
         * <p>
         * @return {@code this}
         * @param promotionId Property promotionId: promotion id. This parameter is required.
         */
        public Builder promotionId(final com.aliyun.ros.cdk.core.IResolvable promotionId) {
            this.props.promotionId(promotionId);
            return this;
        }

        /**
         * Property tags: The list of desktops tags in the form of key/value pairs.
         * <p>
         * You can define a maximum of 20 tags for each desktops.
         * <p>
         * @return {@code this}
         * @param tags Property tags: The list of desktops tags in the form of key/value pairs. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ecd.RosDesktops.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property userAssignMode: The assignment mode of the cloud desktop.
         * <p>
         * Default value: ALL.
         * ALL: If you specify the EndUserId parameter, the cloud desktops that you create are
         * assigned to each regular user that you specify.
         * PER_USER: If you specify the EndUserId parameter, the cloud desktops that you create
         * are evenly assigned to all regular users that you specify. In this case, you must
         * make sure that the value of the Amount parameter can be divided by the N value of
         * the EndUserId.N parameter that you specify.
         * Note If you do not specify the EndUserId parameter, the cloud desktop that you create is
         * not assigned to regular users.
         * <p>
         * @return {@code this}
         * @param userAssignMode Property userAssignMode: The assignment mode of the cloud desktop. This parameter is required.
         */
        public Builder userAssignMode(final java.lang.String userAssignMode) {
            this.props.userAssignMode(userAssignMode);
            return this;
        }
        /**
         * Property userAssignMode: The assignment mode of the cloud desktop.
         * <p>
         * Default value: ALL.
         * ALL: If you specify the EndUserId parameter, the cloud desktops that you create are
         * assigned to each regular user that you specify.
         * PER_USER: If you specify the EndUserId parameter, the cloud desktops that you create
         * are evenly assigned to all regular users that you specify. In this case, you must
         * make sure that the value of the Amount parameter can be divided by the N value of
         * the EndUserId.N parameter that you specify.
         * Note If you do not specify the EndUserId parameter, the cloud desktop that you create is
         * not assigned to regular users.
         * <p>
         * @return {@code this}
         * @param userAssignMode Property userAssignMode: The assignment mode of the cloud desktop. This parameter is required.
         */
        public Builder userAssignMode(final com.aliyun.ros.cdk.core.IResolvable userAssignMode) {
            this.props.userAssignMode(userAssignMode);
            return this;
        }

        /**
         * Property userName: This parameter is not open for use.
         * <p>
         * @return {@code this}
         * @param userName Property userName: This parameter is not open for use. This parameter is required.
         */
        public Builder userName(final java.lang.String userName) {
            this.props.userName(userName);
            return this;
        }
        /**
         * Property userName: This parameter is not open for use.
         * <p>
         * @return {@code this}
         * @param userName Property userName: This parameter is not open for use. This parameter is required.
         */
        public Builder userName(final com.aliyun.ros.cdk.core.IResolvable userName) {
            this.props.userName(userName);
            return this;
        }

        /**
         * Property volumeEncryptionEnabled: Whether to enable disk encryption.
         * <p>
         * @return {@code this}
         * @param volumeEncryptionEnabled Property volumeEncryptionEnabled: Whether to enable disk encryption. This parameter is required.
         */
        public Builder volumeEncryptionEnabled(final java.lang.Boolean volumeEncryptionEnabled) {
            this.props.volumeEncryptionEnabled(volumeEncryptionEnabled);
            return this;
        }
        /**
         * Property volumeEncryptionEnabled: Whether to enable disk encryption.
         * <p>
         * @return {@code this}
         * @param volumeEncryptionEnabled Property volumeEncryptionEnabled: Whether to enable disk encryption. This parameter is required.
         */
        public Builder volumeEncryptionEnabled(final com.aliyun.ros.cdk.core.IResolvable volumeEncryptionEnabled) {
            this.props.volumeEncryptionEnabled(volumeEncryptionEnabled);
            return this;
        }

        /**
         * Property volumeEncryptionKey: The key ID of the KMS used when disk encryption is enabled.
         * <p>
         * It can be obtained through the ListKeys interface.
         * <p>
         * @return {@code this}
         * @param volumeEncryptionKey Property volumeEncryptionKey: The key ID of the KMS used when disk encryption is enabled. This parameter is required.
         */
        public Builder volumeEncryptionKey(final java.lang.String volumeEncryptionKey) {
            this.props.volumeEncryptionKey(volumeEncryptionKey);
            return this;
        }
        /**
         * Property volumeEncryptionKey: The key ID of the KMS used when disk encryption is enabled.
         * <p>
         * It can be obtained through the ListKeys interface.
         * <p>
         * @return {@code this}
         * @param volumeEncryptionKey Property volumeEncryptionKey: The key ID of the KMS used when disk encryption is enabled. This parameter is required.
         */
        public Builder volumeEncryptionKey(final com.aliyun.ros.cdk.core.IResolvable volumeEncryptionKey) {
            this.props.volumeEncryptionKey(volumeEncryptionKey);
            return this;
        }

        /**
         * Property vpcId: This parameter is not open for use.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: This parameter is not open for use. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: This parameter is not open for use.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: This parameter is not open for use. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecd.Desktops}.
         */
        @Override
        public com.aliyun.ros.cdk.ecd.Desktops build() {
            return new com.aliyun.ros.cdk.ecd.Desktops(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
