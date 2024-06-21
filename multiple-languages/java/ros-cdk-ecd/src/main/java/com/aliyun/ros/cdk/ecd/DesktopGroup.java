package com.aliyun.ros.cdk.ecd;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ECD::DesktopGroup</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:08.890Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecd.$Module.class, fqn = "@alicloud/ros-cdk-ecd.DesktopGroup")
public class DesktopGroup extends com.aliyun.ros.cdk.core.Resource {

    protected DesktopGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DesktopGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public DesktopGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecd.DesktopGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public DesktopGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecd.DesktopGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DesktopGroupId: Id of created DesktopGroup.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDesktopGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrDesktopGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecd.DesktopGroupProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecd.DesktopGroupProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecd.DesktopGroupProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecd.DesktopGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecd.DesktopGroup> {
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
        private final com.aliyun.ros.cdk.ecd.DesktopGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecd.DesktopGroupProps.Builder();
        }

        /**
         * Property bundleId: The ID of the desktop template.
         * <p>
         * @return {@code this}
         * @param bundleId Property bundleId: The ID of the desktop template. This parameter is required.
         */
        public Builder bundleId(final java.lang.String bundleId) {
            this.props.bundleId(bundleId);
            return this;
        }
        /**
         * Property bundleId: The ID of the desktop template.
         * <p>
         * @return {@code this}
         * @param bundleId Property bundleId: The ID of the desktop template. This parameter is required.
         */
        public Builder bundleId(final com.aliyun.ros.cdk.core.IResolvable bundleId) {
            this.props.bundleId(bundleId);
            return this;
        }

        /**
         * Property chargeType: The billing method of the cloud desktops in the desktop group.
         * <p>
         * Enumeration Value:
         * PostPaid
         * PrePaid
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: The billing method of the cloud desktops in the desktop group. This parameter is required.
         */
        public Builder chargeType(final java.lang.String chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }
        /**
         * Property chargeType: The billing method of the cloud desktops in the desktop group.
         * <p>
         * Enumeration Value:
         * PostPaid
         * PrePaid
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: The billing method of the cloud desktops in the desktop group. This parameter is required.
         */
        public Builder chargeType(final com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.props.chargeType(chargeType);
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
         * Property allowAutoSetup: Specifies whether to automatically create cloud desktops in the desktop group if you set the billing method to subscription.
         * <p>
         * If you set the ChargeType parameter to PrePaid, this parameter is required.
         * <p>
         * @return {@code this}
         * @param allowAutoSetup Property allowAutoSetup: Specifies whether to automatically create cloud desktops in the desktop group if you set the billing method to subscription. This parameter is required.
         */
        public Builder allowAutoSetup(final java.lang.Number allowAutoSetup) {
            this.props.allowAutoSetup(allowAutoSetup);
            return this;
        }
        /**
         * Property allowAutoSetup: Specifies whether to automatically create cloud desktops in the desktop group if you set the billing method to subscription.
         * <p>
         * If you set the ChargeType parameter to PrePaid, this parameter is required.
         * <p>
         * @return {@code this}
         * @param allowAutoSetup Property allowAutoSetup: Specifies whether to automatically create cloud desktops in the desktop group if you set the billing method to subscription. This parameter is required.
         */
        public Builder allowAutoSetup(final com.aliyun.ros.cdk.core.IResolvable allowAutoSetup) {
            this.props.allowAutoSetup(allowAutoSetup);
            return this;
        }

        /**
         * Property allowBufferCount: Specifies whether to reserve cloud desktops if you set the billing method to pay-as-you-go.
         * <p>
         * If you set the ChargeType parameter to PostPaid, this parameter is required. Valid values: 0: does not allow the system to reserve cloud desktops. N: allows the system to reserve N cloud desktops. The variable N must be an integer that ranges from 1 to 100.
         * <p>
         * @return {@code this}
         * @param allowBufferCount Property allowBufferCount: Specifies whether to reserve cloud desktops if you set the billing method to pay-as-you-go. This parameter is required.
         */
        public Builder allowBufferCount(final java.lang.Number allowBufferCount) {
            this.props.allowBufferCount(allowBufferCount);
            return this;
        }
        /**
         * Property allowBufferCount: Specifies whether to reserve cloud desktops if you set the billing method to pay-as-you-go.
         * <p>
         * If you set the ChargeType parameter to PostPaid, this parameter is required. Valid values: 0: does not allow the system to reserve cloud desktops. N: allows the system to reserve N cloud desktops. The variable N must be an integer that ranges from 1 to 100.
         * <p>
         * @return {@code this}
         * @param allowBufferCount Property allowBufferCount: Specifies whether to reserve cloud desktops if you set the billing method to pay-as-you-go. This parameter is required.
         */
        public Builder allowBufferCount(final com.aliyun.ros.cdk.core.IResolvable allowBufferCount) {
            this.props.allowBufferCount(allowBufferCount);
            return this;
        }

        /**
         * Property autoPay: Specifies whether to enable automatic payment.
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
         * @return {@code this}
         * @param autoPay Property autoPay: Specifies whether to enable automatic payment. This parameter is required.
         */
        public Builder autoPay(final com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }

        /**
         * Property autoRenew: Specifies whether to enable auto-renewal.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Specifies whether to enable auto-renewal. This parameter is required.
         */
        public Builder autoRenew(final java.lang.Boolean autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * Property autoRenew: Specifies whether to enable auto-renewal.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Specifies whether to enable auto-renewal. This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * Property buyDesktopsCount: The number of cloud desktops that you want to purchase.
         * <p>
         * Valid values: 0 to 200.
         * <p>
         * @return {@code this}
         * @param buyDesktopsCount Property buyDesktopsCount: The number of cloud desktops that you want to purchase. This parameter is required.
         */
        public Builder buyDesktopsCount(final java.lang.Number buyDesktopsCount) {
            this.props.buyDesktopsCount(buyDesktopsCount);
            return this;
        }
        /**
         * Property buyDesktopsCount: The number of cloud desktops that you want to purchase.
         * <p>
         * Valid values: 0 to 200.
         * <p>
         * @return {@code this}
         * @param buyDesktopsCount Property buyDesktopsCount: The number of cloud desktops that you want to purchase. This parameter is required.
         */
        public Builder buyDesktopsCount(final com.aliyun.ros.cdk.core.IResolvable buyDesktopsCount) {
            this.props.buyDesktopsCount(buyDesktopsCount);
            return this;
        }

        /**
         * Property comments: The remarks on the desktop group.
         * <p>
         * @return {@code this}
         * @param comments Property comments: The remarks on the desktop group. This parameter is required.
         */
        public Builder comments(final java.lang.String comments) {
            this.props.comments(comments);
            return this;
        }
        /**
         * Property comments: The remarks on the desktop group.
         * <p>
         * @return {@code this}
         * @param comments Property comments: The remarks on the desktop group. This parameter is required.
         */
        public Builder comments(final com.aliyun.ros.cdk.core.IResolvable comments) {
            this.props.comments(comments);
            return this;
        }

        /**
         * Property connectDuration: The maximum period of time during which the session is connected.
         * <p>
         * When the specified maximum period of time is reached, the session automatically disconnects. Unit: milliseconds. This parameter is required only for cloud desktops in the same desktop group.
         * <p>
         * @return {@code this}
         * @param connectDuration Property connectDuration: The maximum period of time during which the session is connected. This parameter is required.
         */
        public Builder connectDuration(final java.lang.Number connectDuration) {
            this.props.connectDuration(connectDuration);
            return this;
        }
        /**
         * Property connectDuration: The maximum period of time during which the session is connected.
         * <p>
         * When the specified maximum period of time is reached, the session automatically disconnects. Unit: milliseconds. This parameter is required only for cloud desktops in the same desktop group.
         * <p>
         * @return {@code this}
         * @param connectDuration Property connectDuration: The maximum period of time during which the session is connected. This parameter is required.
         */
        public Builder connectDuration(final com.aliyun.ros.cdk.core.IResolvable connectDuration) {
            this.props.connectDuration(connectDuration);
            return this;
        }

        /**
         * Property defaultInitDesktopCount: The default number of cloud desktops to create when you create the desktop group.
         * <p>
         * Default value: 1.
         * <p>
         * @return {@code this}
         * @param defaultInitDesktopCount Property defaultInitDesktopCount: The default number of cloud desktops to create when you create the desktop group. This parameter is required.
         */
        public Builder defaultInitDesktopCount(final java.lang.Number defaultInitDesktopCount) {
            this.props.defaultInitDesktopCount(defaultInitDesktopCount);
            return this;
        }
        /**
         * Property defaultInitDesktopCount: The default number of cloud desktops to create when you create the desktop group.
         * <p>
         * Default value: 1.
         * <p>
         * @return {@code this}
         * @param defaultInitDesktopCount Property defaultInitDesktopCount: The default number of cloud desktops to create when you create the desktop group. This parameter is required.
         */
        public Builder defaultInitDesktopCount(final com.aliyun.ros.cdk.core.IResolvable defaultInitDesktopCount) {
            this.props.defaultInitDesktopCount(defaultInitDesktopCount);
            return this;
        }

        /**
         * Property desktopGroupName: The name of the desktop group.
         * <p>
         * @return {@code this}
         * @param desktopGroupName Property desktopGroupName: The name of the desktop group. This parameter is required.
         */
        public Builder desktopGroupName(final java.lang.String desktopGroupName) {
            this.props.desktopGroupName(desktopGroupName);
            return this;
        }
        /**
         * Property desktopGroupName: The name of the desktop group.
         * <p>
         * @return {@code this}
         * @param desktopGroupName Property desktopGroupName: The name of the desktop group. This parameter is required.
         */
        public Builder desktopGroupName(final com.aliyun.ros.cdk.core.IResolvable desktopGroupName) {
            this.props.desktopGroupName(desktopGroupName);
            return this;
        }

        /**
         * Property endUserIds: The end users that can use the desktop group.
         * <p>
         * @return {@code this}
         * @param endUserIds Property endUserIds: The end users that can use the desktop group. This parameter is required.
         */
        public Builder endUserIds(final com.aliyun.ros.cdk.core.IResolvable endUserIds) {
            this.props.endUserIds(endUserIds);
            return this;
        }
        /**
         * Property endUserIds: The end users that can use the desktop group.
         * <p>
         * @return {@code this}
         * @param endUserIds Property endUserIds: The end users that can use the desktop group. This parameter is required.
         */
        public Builder endUserIds(final java.util.List<? extends java.lang.Object> endUserIds) {
            this.props.endUserIds(endUserIds);
            return this;
        }

        /**
         * Property groupVersion: The desktop group version.
         * <p>
         * @return {@code this}
         * @param groupVersion Property groupVersion: The desktop group version. This parameter is required.
         */
        public Builder groupVersion(final java.lang.Number groupVersion) {
            this.props.groupVersion(groupVersion);
            return this;
        }
        /**
         * Property groupVersion: The desktop group version.
         * <p>
         * @return {@code this}
         * @param groupVersion Property groupVersion: The desktop group version. This parameter is required.
         */
        public Builder groupVersion(final com.aliyun.ros.cdk.core.IResolvable groupVersion) {
            this.props.groupVersion(groupVersion);
            return this;
        }

        /**
         * Property idleDisconnectDuration: The maximum period of time for which a session remains idle.
         * <p>
         * If an end user performs no operations on a cloud desktop by using keyboards or mouses during a session, the session becomes idle. When the specified maximum period of time is reached, the session automatically disconnects. Unit: milliseconds. This parameter is required only for cloud desktops in the same desktop group.
         * <p>
         * @return {@code this}
         * @param idleDisconnectDuration Property idleDisconnectDuration: The maximum period of time for which a session remains idle. This parameter is required.
         */
        public Builder idleDisconnectDuration(final java.lang.Number idleDisconnectDuration) {
            this.props.idleDisconnectDuration(idleDisconnectDuration);
            return this;
        }
        /**
         * Property idleDisconnectDuration: The maximum period of time for which a session remains idle.
         * <p>
         * If an end user performs no operations on a cloud desktop by using keyboards or mouses during a session, the session becomes idle. When the specified maximum period of time is reached, the session automatically disconnects. Unit: milliseconds. This parameter is required only for cloud desktops in the same desktop group.
         * <p>
         * @return {@code this}
         * @param idleDisconnectDuration Property idleDisconnectDuration: The maximum period of time for which a session remains idle. This parameter is required.
         */
        public Builder idleDisconnectDuration(final com.aliyun.ros.cdk.core.IResolvable idleDisconnectDuration) {
            this.props.idleDisconnectDuration(idleDisconnectDuration);
            return this;
        }

        /**
         * Property keepDuration: The retention period of the cloud desktop after the end user disconnects from the cloud desktop.
         * <p>
         * Unit: milliseconds.
         * <p>
         * @return {@code this}
         * @param keepDuration Property keepDuration: The retention period of the cloud desktop after the end user disconnects from the cloud desktop. This parameter is required.
         */
        public Builder keepDuration(final java.lang.Number keepDuration) {
            this.props.keepDuration(keepDuration);
            return this;
        }
        /**
         * Property keepDuration: The retention period of the cloud desktop after the end user disconnects from the cloud desktop.
         * <p>
         * Unit: milliseconds.
         * <p>
         * @return {@code this}
         * @param keepDuration Property keepDuration: The retention period of the cloud desktop after the end user disconnects from the cloud desktop. This parameter is required.
         */
        public Builder keepDuration(final com.aliyun.ros.cdk.core.IResolvable keepDuration) {
            this.props.keepDuration(keepDuration);
            return this;
        }

        /**
         * Property maxDesktopsCount: The maximum number of cloud desktops that the desktop group can contain.
         * <p>
         * Valid values: 0 to 200.
         * <p>
         * @return {@code this}
         * @param maxDesktopsCount Property maxDesktopsCount: The maximum number of cloud desktops that the desktop group can contain. This parameter is required.
         */
        public Builder maxDesktopsCount(final java.lang.Number maxDesktopsCount) {
            this.props.maxDesktopsCount(maxDesktopsCount);
            return this;
        }
        /**
         * Property maxDesktopsCount: The maximum number of cloud desktops that the desktop group can contain.
         * <p>
         * Valid values: 0 to 200.
         * <p>
         * @return {@code this}
         * @param maxDesktopsCount Property maxDesktopsCount: The maximum number of cloud desktops that the desktop group can contain. This parameter is required.
         */
        public Builder maxDesktopsCount(final com.aliyun.ros.cdk.core.IResolvable maxDesktopsCount) {
            this.props.maxDesktopsCount(maxDesktopsCount);
            return this;
        }

        /**
         * Property minDesktopsCount: The minimum number of cloud desktops that must be contained in the desktop group if you set the billing method to subscription.
         * <p>
         * If you set the ChargeType parameter to PrePaid, this parameter is required. Valid values: 0 to the value of MaxDesktopsCount. Default value: 1.
         * <p>
         * @return {@code this}
         * @param minDesktopsCount Property minDesktopsCount: The minimum number of cloud desktops that must be contained in the desktop group if you set the billing method to subscription. This parameter is required.
         */
        public Builder minDesktopsCount(final java.lang.Number minDesktopsCount) {
            this.props.minDesktopsCount(minDesktopsCount);
            return this;
        }
        /**
         * Property minDesktopsCount: The minimum number of cloud desktops that must be contained in the desktop group if you set the billing method to subscription.
         * <p>
         * If you set the ChargeType parameter to PrePaid, this parameter is required. Valid values: 0 to the value of MaxDesktopsCount. Default value: 1.
         * <p>
         * @return {@code this}
         * @param minDesktopsCount Property minDesktopsCount: The minimum number of cloud desktops that must be contained in the desktop group if you set the billing method to subscription. This parameter is required.
         */
        public Builder minDesktopsCount(final com.aliyun.ros.cdk.core.IResolvable minDesktopsCount) {
            this.props.minDesktopsCount(minDesktopsCount);
            return this;
        }

        /**
         * Property period: The subscription period of the cloud desktops in the desktop group.
         * <p>
         * The unit is specified by the PeriodUnit parameter. The Period parameter takes effect only if you set the ChargeType parameter to PrePaid.
         * Valid values if you set the PeriodUnit parameter to Month: 1, 2, 3, 6
         * Valid values if you set the PeriodUnit parameter to Year:  1, 2, 3, 4, 5
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription period of the cloud desktops in the desktop group. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: The subscription period of the cloud desktops in the desktop group.
         * <p>
         * The unit is specified by the PeriodUnit parameter. The Period parameter takes effect only if you set the ChargeType parameter to PrePaid.
         * Valid values if you set the PeriodUnit parameter to Month: 1, 2, 3, 6
         * Valid values if you set the PeriodUnit parameter to Year:  1, 2, 3, 4, 5
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription period of the cloud desktops in the desktop group. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property periodUnit: Whether to open CA.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: Whether to open CA. This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }
        /**
         * Property periodUnit: Whether to open CA.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: Whether to open CA. This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }

        /**
         * Property resetType: Specifies which type of the disk to reset for cloud desktops in the desktop group.
         * <p>
         * @return {@code this}
         * @param resetType Property resetType: Specifies which type of the disk to reset for cloud desktops in the desktop group. This parameter is required.
         */
        public Builder resetType(final java.lang.Number resetType) {
            this.props.resetType(resetType);
            return this;
        }
        /**
         * Property resetType: Specifies which type of the disk to reset for cloud desktops in the desktop group.
         * <p>
         * @return {@code this}
         * @param resetType Property resetType: Specifies which type of the disk to reset for cloud desktops in the desktop group. This parameter is required.
         */
        public Builder resetType(final com.aliyun.ros.cdk.core.IResolvable resetType) {
            this.props.resetType(resetType);
            return this;
        }

        /**
         * Property stopDuration: The period of time before the idle cloud desktop is stopped.
         * <p>
         * When the specified period of time is reached, the idle cloud desktop automatically stops. If an end user connects to a stopped cloud desktop, the cloud desktop automatically starts. Unit: milliseconds.
         * <p>
         * @return {@code this}
         * @param stopDuration Property stopDuration: The period of time before the idle cloud desktop is stopped. This parameter is required.
         */
        public Builder stopDuration(final java.lang.Number stopDuration) {
            this.props.stopDuration(stopDuration);
            return this;
        }
        /**
         * Property stopDuration: The period of time before the idle cloud desktop is stopped.
         * <p>
         * When the specified period of time is reached, the idle cloud desktop automatically stops. If an end user connects to a stopped cloud desktop, the cloud desktop automatically starts. Unit: milliseconds.
         * <p>
         * @return {@code this}
         * @param stopDuration Property stopDuration: The period of time before the idle cloud desktop is stopped. This parameter is required.
         */
        public Builder stopDuration(final com.aliyun.ros.cdk.core.IResolvable stopDuration) {
            this.props.stopDuration(stopDuration);
            return this;
        }

        /**
         * Property volumeEncryptionEnabled: Specifies whether to enable disk encryption.
         * <p>
         * @return {@code this}
         * @param volumeEncryptionEnabled Property volumeEncryptionEnabled: Specifies whether to enable disk encryption. This parameter is required.
         */
        public Builder volumeEncryptionEnabled(final java.lang.Boolean volumeEncryptionEnabled) {
            this.props.volumeEncryptionEnabled(volumeEncryptionEnabled);
            return this;
        }
        /**
         * Property volumeEncryptionEnabled: Specifies whether to enable disk encryption.
         * <p>
         * @return {@code this}
         * @param volumeEncryptionEnabled Property volumeEncryptionEnabled: Specifies whether to enable disk encryption. This parameter is required.
         */
        public Builder volumeEncryptionEnabled(final com.aliyun.ros.cdk.core.IResolvable volumeEncryptionEnabled) {
            this.props.volumeEncryptionEnabled(volumeEncryptionEnabled);
            return this;
        }

        /**
         * Property volumeEncryptionKey: The ID of the Key Management Service (KMS) key that you want to use when disk encryption is enabled.
         * <p>
         * @return {@code this}
         * @param volumeEncryptionKey Property volumeEncryptionKey: The ID of the Key Management Service (KMS) key that you want to use when disk encryption is enabled. This parameter is required.
         */
        public Builder volumeEncryptionKey(final java.lang.String volumeEncryptionKey) {
            this.props.volumeEncryptionKey(volumeEncryptionKey);
            return this;
        }
        /**
         * Property volumeEncryptionKey: The ID of the Key Management Service (KMS) key that you want to use when disk encryption is enabled.
         * <p>
         * @return {@code this}
         * @param volumeEncryptionKey Property volumeEncryptionKey: The ID of the Key Management Service (KMS) key that you want to use when disk encryption is enabled. This parameter is required.
         */
        public Builder volumeEncryptionKey(final com.aliyun.ros.cdk.core.IResolvable volumeEncryptionKey) {
            this.props.volumeEncryptionKey(volumeEncryptionKey);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecd.DesktopGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.ecd.DesktopGroup build() {
            return new com.aliyun.ros.cdk.ecd.DesktopGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
