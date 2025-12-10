package com.aliyun.ros.cdk.mse;

/**
 * Properties for defining a <code>RosGateway2</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gateway2
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:58.256Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.RosGateway2Props")
@software.amazon.jsii.Jsii.Proxy(RosGateway2Props.Jsii$Proxy.class)
public interface RosGateway2Props extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAcceptLanguage() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getChargeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClbNetworkType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableHardwareAcceleration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableSls() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableXtrace() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnterpriseSecurityGroup() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetSlb() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getManagedEntryNetworkType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMserVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNlbNetworkType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getReplica() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSlbSpec() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpec() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.mse.RosGateway2.TagsProperty> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId2() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getXtraceRatio() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneInfo() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosGateway2Props}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosGateway2Props}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosGateway2Props> {
        java.lang.Object vpcId;
        java.lang.Object acceptLanguage;
        java.lang.Object chargeType;
        java.lang.Object clbNetworkType;
        java.lang.Object enableHardwareAcceleration;
        java.lang.Object enableSls;
        java.lang.Object enableXtrace;
        java.lang.Object enterpriseSecurityGroup;
        java.lang.Object internetSlb;
        java.lang.Object managedEntryNetworkType;
        java.lang.Object mserVersion;
        java.lang.Object name;
        java.lang.Object nlbNetworkType;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object replica;
        java.lang.Object resourceGroupId;
        java.lang.Object slbSpec;
        java.lang.Object spec;
        java.util.List<com.aliyun.ros.cdk.mse.RosGateway2.TagsProperty> tags;
        java.lang.Object vSwitchId;
        java.lang.Object vSwitchId2;
        java.lang.Object xtraceRatio;
        java.lang.Object zoneInfo;

        /**
         * Sets the value of {@link RosGateway2Props#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getAcceptLanguage}
         * @param acceptLanguage the value to be set.
         * @return {@code this}
         */
        public Builder acceptLanguage(java.lang.String acceptLanguage) {
            this.acceptLanguage = acceptLanguage;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getAcceptLanguage}
         * @param acceptLanguage the value to be set.
         * @return {@code this}
         */
        public Builder acceptLanguage(com.aliyun.ros.cdk.core.IResolvable acceptLanguage) {
            this.acceptLanguage = acceptLanguage;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getChargeType}
         * @param chargeType the value to be set.
         * @return {@code this}
         */
        public Builder chargeType(java.lang.String chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getChargeType}
         * @param chargeType the value to be set.
         * @return {@code this}
         */
        public Builder chargeType(com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getClbNetworkType}
         * @param clbNetworkType the value to be set.
         * @return {@code this}
         */
        public Builder clbNetworkType(java.lang.String clbNetworkType) {
            this.clbNetworkType = clbNetworkType;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getClbNetworkType}
         * @param clbNetworkType the value to be set.
         * @return {@code this}
         */
        public Builder clbNetworkType(com.aliyun.ros.cdk.core.IResolvable clbNetworkType) {
            this.clbNetworkType = clbNetworkType;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getEnableHardwareAcceleration}
         * @param enableHardwareAcceleration the value to be set.
         * @return {@code this}
         */
        public Builder enableHardwareAcceleration(java.lang.Boolean enableHardwareAcceleration) {
            this.enableHardwareAcceleration = enableHardwareAcceleration;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getEnableHardwareAcceleration}
         * @param enableHardwareAcceleration the value to be set.
         * @return {@code this}
         */
        public Builder enableHardwareAcceleration(com.aliyun.ros.cdk.core.IResolvable enableHardwareAcceleration) {
            this.enableHardwareAcceleration = enableHardwareAcceleration;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getEnableSls}
         * @param enableSls the value to be set.
         * @return {@code this}
         */
        public Builder enableSls(java.lang.Boolean enableSls) {
            this.enableSls = enableSls;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getEnableSls}
         * @param enableSls the value to be set.
         * @return {@code this}
         */
        public Builder enableSls(com.aliyun.ros.cdk.core.IResolvable enableSls) {
            this.enableSls = enableSls;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getEnableXtrace}
         * @param enableXtrace the value to be set.
         * @return {@code this}
         */
        public Builder enableXtrace(java.lang.Boolean enableXtrace) {
            this.enableXtrace = enableXtrace;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getEnableXtrace}
         * @param enableXtrace the value to be set.
         * @return {@code this}
         */
        public Builder enableXtrace(com.aliyun.ros.cdk.core.IResolvable enableXtrace) {
            this.enableXtrace = enableXtrace;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getEnterpriseSecurityGroup}
         * @param enterpriseSecurityGroup the value to be set.
         * @return {@code this}
         */
        public Builder enterpriseSecurityGroup(java.lang.Boolean enterpriseSecurityGroup) {
            this.enterpriseSecurityGroup = enterpriseSecurityGroup;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getEnterpriseSecurityGroup}
         * @param enterpriseSecurityGroup the value to be set.
         * @return {@code this}
         */
        public Builder enterpriseSecurityGroup(com.aliyun.ros.cdk.core.IResolvable enterpriseSecurityGroup) {
            this.enterpriseSecurityGroup = enterpriseSecurityGroup;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getInternetSlb}
         * @param internetSlb the value to be set.
         * @return {@code this}
         */
        public Builder internetSlb(java.lang.String internetSlb) {
            this.internetSlb = internetSlb;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getInternetSlb}
         * @param internetSlb the value to be set.
         * @return {@code this}
         */
        public Builder internetSlb(com.aliyun.ros.cdk.core.IResolvable internetSlb) {
            this.internetSlb = internetSlb;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getManagedEntryNetworkType}
         * @param managedEntryNetworkType the value to be set.
         * @return {@code this}
         */
        public Builder managedEntryNetworkType(java.lang.String managedEntryNetworkType) {
            this.managedEntryNetworkType = managedEntryNetworkType;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getManagedEntryNetworkType}
         * @param managedEntryNetworkType the value to be set.
         * @return {@code this}
         */
        public Builder managedEntryNetworkType(com.aliyun.ros.cdk.core.IResolvable managedEntryNetworkType) {
            this.managedEntryNetworkType = managedEntryNetworkType;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getMserVersion}
         * @param mserVersion the value to be set.
         * @return {@code this}
         */
        public Builder mserVersion(java.lang.String mserVersion) {
            this.mserVersion = mserVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getMserVersion}
         * @param mserVersion the value to be set.
         * @return {@code this}
         */
        public Builder mserVersion(com.aliyun.ros.cdk.core.IResolvable mserVersion) {
            this.mserVersion = mserVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getNlbNetworkType}
         * @param nlbNetworkType the value to be set.
         * @return {@code this}
         */
        public Builder nlbNetworkType(java.lang.String nlbNetworkType) {
            this.nlbNetworkType = nlbNetworkType;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getNlbNetworkType}
         * @param nlbNetworkType the value to be set.
         * @return {@code this}
         */
        public Builder nlbNetworkType(com.aliyun.ros.cdk.core.IResolvable nlbNetworkType) {
            this.nlbNetworkType = nlbNetworkType;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getReplica}
         * @param replica the value to be set.
         * @return {@code this}
         */
        public Builder replica(java.lang.Number replica) {
            this.replica = replica;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getReplica}
         * @param replica the value to be set.
         * @return {@code this}
         */
        public Builder replica(com.aliyun.ros.cdk.core.IResolvable replica) {
            this.replica = replica;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getSlbSpec}
         * @param slbSpec the value to be set.
         * @return {@code this}
         */
        public Builder slbSpec(java.lang.String slbSpec) {
            this.slbSpec = slbSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getSlbSpec}
         * @param slbSpec the value to be set.
         * @return {@code this}
         */
        public Builder slbSpec(com.aliyun.ros.cdk.core.IResolvable slbSpec) {
            this.slbSpec = slbSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getSpec}
         * @param spec the value to be set.
         * @return {@code this}
         */
        public Builder spec(java.lang.String spec) {
            this.spec = spec;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getSpec}
         * @param spec the value to be set.
         * @return {@code this}
         */
        public Builder spec(com.aliyun.ros.cdk.core.IResolvable spec) {
            this.spec = spec;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.mse.RosGateway2.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.mse.RosGateway2.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getVSwitchId2}
         * @param vSwitchId2 the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId2(java.lang.String vSwitchId2) {
            this.vSwitchId2 = vSwitchId2;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getVSwitchId2}
         * @param vSwitchId2 the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId2(com.aliyun.ros.cdk.core.IResolvable vSwitchId2) {
            this.vSwitchId2 = vSwitchId2;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getXtraceRatio}
         * @param xtraceRatio the value to be set.
         * @return {@code this}
         */
        public Builder xtraceRatio(java.lang.Number xtraceRatio) {
            this.xtraceRatio = xtraceRatio;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getXtraceRatio}
         * @param xtraceRatio the value to be set.
         * @return {@code this}
         */
        public Builder xtraceRatio(com.aliyun.ros.cdk.core.IResolvable xtraceRatio) {
            this.xtraceRatio = xtraceRatio;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getZoneInfo}
         * @param zoneInfo the value to be set.
         * @return {@code this}
         */
        public Builder zoneInfo(com.aliyun.ros.cdk.core.IResolvable zoneInfo) {
            this.zoneInfo = zoneInfo;
            return this;
        }

        /**
         * Sets the value of {@link RosGateway2Props#getZoneInfo}
         * @param zoneInfo the value to be set.
         * @return {@code this}
         */
        public Builder zoneInfo(java.util.List<? extends java.lang.Object> zoneInfo) {
            this.zoneInfo = zoneInfo;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosGateway2Props}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosGateway2Props build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosGateway2Props}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosGateway2Props {
        private final java.lang.Object vpcId;
        private final java.lang.Object acceptLanguage;
        private final java.lang.Object chargeType;
        private final java.lang.Object clbNetworkType;
        private final java.lang.Object enableHardwareAcceleration;
        private final java.lang.Object enableSls;
        private final java.lang.Object enableXtrace;
        private final java.lang.Object enterpriseSecurityGroup;
        private final java.lang.Object internetSlb;
        private final java.lang.Object managedEntryNetworkType;
        private final java.lang.Object mserVersion;
        private final java.lang.Object name;
        private final java.lang.Object nlbNetworkType;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object replica;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object slbSpec;
        private final java.lang.Object spec;
        private final java.util.List<com.aliyun.ros.cdk.mse.RosGateway2.TagsProperty> tags;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object vSwitchId2;
        private final java.lang.Object xtraceRatio;
        private final java.lang.Object zoneInfo;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.acceptLanguage = software.amazon.jsii.Kernel.get(this, "acceptLanguage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.chargeType = software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clbNetworkType = software.amazon.jsii.Kernel.get(this, "clbNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableHardwareAcceleration = software.amazon.jsii.Kernel.get(this, "enableHardwareAcceleration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableSls = software.amazon.jsii.Kernel.get(this, "enableSls", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableXtrace = software.amazon.jsii.Kernel.get(this, "enableXtrace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enterpriseSecurityGroup = software.amazon.jsii.Kernel.get(this, "enterpriseSecurityGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetSlb = software.amazon.jsii.Kernel.get(this, "internetSlb", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.managedEntryNetworkType = software.amazon.jsii.Kernel.get(this, "managedEntryNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mserVersion = software.amazon.jsii.Kernel.get(this, "mserVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nlbNetworkType = software.amazon.jsii.Kernel.get(this, "nlbNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.replica = software.amazon.jsii.Kernel.get(this, "replica", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.slbSpec = software.amazon.jsii.Kernel.get(this, "slbSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spec = software.amazon.jsii.Kernel.get(this, "spec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mse.RosGateway2.TagsProperty.class)));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId2 = software.amazon.jsii.Kernel.get(this, "vSwitchId2", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.xtraceRatio = software.amazon.jsii.Kernel.get(this, "xtraceRatio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneInfo = software.amazon.jsii.Kernel.get(this, "zoneInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.acceptLanguage = builder.acceptLanguage;
            this.chargeType = builder.chargeType;
            this.clbNetworkType = builder.clbNetworkType;
            this.enableHardwareAcceleration = builder.enableHardwareAcceleration;
            this.enableSls = builder.enableSls;
            this.enableXtrace = builder.enableXtrace;
            this.enterpriseSecurityGroup = builder.enterpriseSecurityGroup;
            this.internetSlb = builder.internetSlb;
            this.managedEntryNetworkType = builder.managedEntryNetworkType;
            this.mserVersion = builder.mserVersion;
            this.name = builder.name;
            this.nlbNetworkType = builder.nlbNetworkType;
            this.period = builder.period;
            this.periodUnit = builder.periodUnit;
            this.replica = builder.replica;
            this.resourceGroupId = builder.resourceGroupId;
            this.slbSpec = builder.slbSpec;
            this.spec = builder.spec;
            this.tags = (java.util.List<com.aliyun.ros.cdk.mse.RosGateway2.TagsProperty>)builder.tags;
            this.vSwitchId = builder.vSwitchId;
            this.vSwitchId2 = builder.vSwitchId2;
            this.xtraceRatio = builder.xtraceRatio;
            this.zoneInfo = builder.zoneInfo;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getAcceptLanguage() {
            return this.acceptLanguage;
        }

        @Override
        public final java.lang.Object getChargeType() {
            return this.chargeType;
        }

        @Override
        public final java.lang.Object getClbNetworkType() {
            return this.clbNetworkType;
        }

        @Override
        public final java.lang.Object getEnableHardwareAcceleration() {
            return this.enableHardwareAcceleration;
        }

        @Override
        public final java.lang.Object getEnableSls() {
            return this.enableSls;
        }

        @Override
        public final java.lang.Object getEnableXtrace() {
            return this.enableXtrace;
        }

        @Override
        public final java.lang.Object getEnterpriseSecurityGroup() {
            return this.enterpriseSecurityGroup;
        }

        @Override
        public final java.lang.Object getInternetSlb() {
            return this.internetSlb;
        }

        @Override
        public final java.lang.Object getManagedEntryNetworkType() {
            return this.managedEntryNetworkType;
        }

        @Override
        public final java.lang.Object getMserVersion() {
            return this.mserVersion;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getNlbNetworkType() {
            return this.nlbNetworkType;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getPeriodUnit() {
            return this.periodUnit;
        }

        @Override
        public final java.lang.Object getReplica() {
            return this.replica;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSlbSpec() {
            return this.slbSpec;
        }

        @Override
        public final java.lang.Object getSpec() {
            return this.spec;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.mse.RosGateway2.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        public final java.lang.Object getVSwitchId2() {
            return this.vSwitchId2;
        }

        @Override
        public final java.lang.Object getXtraceRatio() {
            return this.xtraceRatio;
        }

        @Override
        public final java.lang.Object getZoneInfo() {
            return this.zoneInfo;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("vpcId", om.valueToTree(this.getVpcId()));
            if (this.getAcceptLanguage() != null) {
                data.set("acceptLanguage", om.valueToTree(this.getAcceptLanguage()));
            }
            if (this.getChargeType() != null) {
                data.set("chargeType", om.valueToTree(this.getChargeType()));
            }
            if (this.getClbNetworkType() != null) {
                data.set("clbNetworkType", om.valueToTree(this.getClbNetworkType()));
            }
            if (this.getEnableHardwareAcceleration() != null) {
                data.set("enableHardwareAcceleration", om.valueToTree(this.getEnableHardwareAcceleration()));
            }
            if (this.getEnableSls() != null) {
                data.set("enableSls", om.valueToTree(this.getEnableSls()));
            }
            if (this.getEnableXtrace() != null) {
                data.set("enableXtrace", om.valueToTree(this.getEnableXtrace()));
            }
            if (this.getEnterpriseSecurityGroup() != null) {
                data.set("enterpriseSecurityGroup", om.valueToTree(this.getEnterpriseSecurityGroup()));
            }
            if (this.getInternetSlb() != null) {
                data.set("internetSlb", om.valueToTree(this.getInternetSlb()));
            }
            if (this.getManagedEntryNetworkType() != null) {
                data.set("managedEntryNetworkType", om.valueToTree(this.getManagedEntryNetworkType()));
            }
            if (this.getMserVersion() != null) {
                data.set("mserVersion", om.valueToTree(this.getMserVersion()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getNlbNetworkType() != null) {
                data.set("nlbNetworkType", om.valueToTree(this.getNlbNetworkType()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodUnit() != null) {
                data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            }
            if (this.getReplica() != null) {
                data.set("replica", om.valueToTree(this.getReplica()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSlbSpec() != null) {
                data.set("slbSpec", om.valueToTree(this.getSlbSpec()));
            }
            if (this.getSpec() != null) {
                data.set("spec", om.valueToTree(this.getSpec()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }
            if (this.getVSwitchId2() != null) {
                data.set("vSwitchId2", om.valueToTree(this.getVSwitchId2()));
            }
            if (this.getXtraceRatio() != null) {
                data.set("xtraceRatio", om.valueToTree(this.getXtraceRatio()));
            }
            if (this.getZoneInfo() != null) {
                data.set("zoneInfo", om.valueToTree(this.getZoneInfo()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mse.RosGateway2Props"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosGateway2Props.Jsii$Proxy that = (RosGateway2Props.Jsii$Proxy) o;

            if (!vpcId.equals(that.vpcId)) return false;
            if (this.acceptLanguage != null ? !this.acceptLanguage.equals(that.acceptLanguage) : that.acceptLanguage != null) return false;
            if (this.chargeType != null ? !this.chargeType.equals(that.chargeType) : that.chargeType != null) return false;
            if (this.clbNetworkType != null ? !this.clbNetworkType.equals(that.clbNetworkType) : that.clbNetworkType != null) return false;
            if (this.enableHardwareAcceleration != null ? !this.enableHardwareAcceleration.equals(that.enableHardwareAcceleration) : that.enableHardwareAcceleration != null) return false;
            if (this.enableSls != null ? !this.enableSls.equals(that.enableSls) : that.enableSls != null) return false;
            if (this.enableXtrace != null ? !this.enableXtrace.equals(that.enableXtrace) : that.enableXtrace != null) return false;
            if (this.enterpriseSecurityGroup != null ? !this.enterpriseSecurityGroup.equals(that.enterpriseSecurityGroup) : that.enterpriseSecurityGroup != null) return false;
            if (this.internetSlb != null ? !this.internetSlb.equals(that.internetSlb) : that.internetSlb != null) return false;
            if (this.managedEntryNetworkType != null ? !this.managedEntryNetworkType.equals(that.managedEntryNetworkType) : that.managedEntryNetworkType != null) return false;
            if (this.mserVersion != null ? !this.mserVersion.equals(that.mserVersion) : that.mserVersion != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.nlbNetworkType != null ? !this.nlbNetworkType.equals(that.nlbNetworkType) : that.nlbNetworkType != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.replica != null ? !this.replica.equals(that.replica) : that.replica != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.slbSpec != null ? !this.slbSpec.equals(that.slbSpec) : that.slbSpec != null) return false;
            if (this.spec != null ? !this.spec.equals(that.spec) : that.spec != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.vSwitchId != null ? !this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId != null) return false;
            if (this.vSwitchId2 != null ? !this.vSwitchId2.equals(that.vSwitchId2) : that.vSwitchId2 != null) return false;
            if (this.xtraceRatio != null ? !this.xtraceRatio.equals(that.xtraceRatio) : that.xtraceRatio != null) return false;
            return this.zoneInfo != null ? this.zoneInfo.equals(that.zoneInfo) : that.zoneInfo == null;
        }

        @Override
        public final int hashCode() {
            int result = this.vpcId.hashCode();
            result = 31 * result + (this.acceptLanguage != null ? this.acceptLanguage.hashCode() : 0);
            result = 31 * result + (this.chargeType != null ? this.chargeType.hashCode() : 0);
            result = 31 * result + (this.clbNetworkType != null ? this.clbNetworkType.hashCode() : 0);
            result = 31 * result + (this.enableHardwareAcceleration != null ? this.enableHardwareAcceleration.hashCode() : 0);
            result = 31 * result + (this.enableSls != null ? this.enableSls.hashCode() : 0);
            result = 31 * result + (this.enableXtrace != null ? this.enableXtrace.hashCode() : 0);
            result = 31 * result + (this.enterpriseSecurityGroup != null ? this.enterpriseSecurityGroup.hashCode() : 0);
            result = 31 * result + (this.internetSlb != null ? this.internetSlb.hashCode() : 0);
            result = 31 * result + (this.managedEntryNetworkType != null ? this.managedEntryNetworkType.hashCode() : 0);
            result = 31 * result + (this.mserVersion != null ? this.mserVersion.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.nlbNetworkType != null ? this.nlbNetworkType.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.replica != null ? this.replica.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.slbSpec != null ? this.slbSpec.hashCode() : 0);
            result = 31 * result + (this.spec != null ? this.spec.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId2 != null ? this.vSwitchId2.hashCode() : 0);
            result = 31 * result + (this.xtraceRatio != null ? this.xtraceRatio.hashCode() : 0);
            result = 31 * result + (this.zoneInfo != null ? this.zoneInfo.hashCode() : 0);
            return result;
        }
    }
}
