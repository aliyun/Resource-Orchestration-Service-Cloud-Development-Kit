package com.aliyun.ros.cdk.polardbx;

/**
 * Properties for defining a <code>DBInstance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardbx-dbinstance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:42.612Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardbx.$Module.class, fqn = "@alicloud/ros-cdk-polardbx.DBInstanceProps")
@software.amazon.jsii.Jsii.Proxy(DBInstanceProps.Jsii$Proxy.class)
public interface DBInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dbNodeClass: The specification of the nodes in the instance you want to create.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbNodeClass();

    /**
     * Property dbNodeCount: The number of nodes in the instance you want to create.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbNodeCount();

    /**
     * Property engineVersion: The version of the database engine.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEngineVersion();

    /**
     * Property primaryZone: The primary zone.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPrimaryZone();

    /**
     * Property topologyType: The topology type of the instance.
     * <p>
     * Valid values: 3azones: The instance is deployed in three zones. 1azone: The instance is deployed in only one zone.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTopologyType();

    /**
     * Property vpcId: The ID of the VPC to which the instance belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * Property vSwitchId: The ID of the vSwitch.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

    /**
     * Property autoRenew: Specifies whether to enable auto-renewal for the instance.
     * <p>
     * Default value: true. true: Enable auto-renewal. false: Disable auto-renewal.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     * Property dbInstanceDescription: The description of the instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceDescription() {
        return null;
    }

    /**
     * Property payType: The billing method of the instance.
     * <p>
     * Default: POSTPAY.Valid values: PREPAY: subscription POSTPAY: pay-as-you-go
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPayType() {
        return null;
    }

    /**
     * Property period: The unit of the billing cycle for the instance.
     * <p>
     * The valid values vary based on the billing method. If you use the subscription billing method, set the value to Year or Month. If you use the pay-as-you-go billing method, the value is automatically set to Hour.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property secondaryZone: The secondary zone.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecondaryZone() {
        return null;
    }

    /**
     * Property securityIpConfig: Instance whitelist configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityIpConfig() {
        return null;
    }

    /**
     * Property tertiaryZone: The tertiary zone.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTertiaryZone() {
        return null;
    }

    /**
     * Property usedTime: The subscription period of the instance.
     * <p>
     * Unit: month or year. Note When period is set to year, the supported values of this parameter are 1, 2 and 3.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUsedTime() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DBInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DBInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DBInstanceProps> {
        java.lang.Object dbNodeClass;
        java.lang.Object dbNodeCount;
        java.lang.Object engineVersion;
        java.lang.Object primaryZone;
        java.lang.Object topologyType;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object autoRenew;
        java.lang.Object dbInstanceDescription;
        java.lang.Object payType;
        java.lang.Object period;
        java.lang.Object resourceGroupId;
        java.lang.Object secondaryZone;
        java.lang.Object securityIpConfig;
        java.lang.Object tertiaryZone;
        java.lang.Object usedTime;

        /**
         * Sets the value of {@link DBInstanceProps#getDbNodeClass}
         * @param dbNodeClass Property dbNodeClass: The specification of the nodes in the instance you want to create. This parameter is required.
         * @return {@code this}
         */
        public Builder dbNodeClass(java.lang.String dbNodeClass) {
            this.dbNodeClass = dbNodeClass;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getDbNodeClass}
         * @param dbNodeClass Property dbNodeClass: The specification of the nodes in the instance you want to create. This parameter is required.
         * @return {@code this}
         */
        public Builder dbNodeClass(com.aliyun.ros.cdk.core.IResolvable dbNodeClass) {
            this.dbNodeClass = dbNodeClass;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getDbNodeCount}
         * @param dbNodeCount Property dbNodeCount: The number of nodes in the instance you want to create. This parameter is required.
         * @return {@code this}
         */
        public Builder dbNodeCount(java.lang.Number dbNodeCount) {
            this.dbNodeCount = dbNodeCount;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getDbNodeCount}
         * @param dbNodeCount Property dbNodeCount: The number of nodes in the instance you want to create. This parameter is required.
         * @return {@code this}
         */
        public Builder dbNodeCount(com.aliyun.ros.cdk.core.IResolvable dbNodeCount) {
            this.dbNodeCount = dbNodeCount;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getEngineVersion}
         * @param engineVersion Property engineVersion: The version of the database engine. This parameter is required.
         * @return {@code this}
         */
        public Builder engineVersion(java.lang.String engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getEngineVersion}
         * @param engineVersion Property engineVersion: The version of the database engine. This parameter is required.
         * @return {@code this}
         */
        public Builder engineVersion(com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getPrimaryZone}
         * @param primaryZone Property primaryZone: The primary zone. This parameter is required.
         * @return {@code this}
         */
        public Builder primaryZone(java.lang.String primaryZone) {
            this.primaryZone = primaryZone;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getPrimaryZone}
         * @param primaryZone Property primaryZone: The primary zone. This parameter is required.
         * @return {@code this}
         */
        public Builder primaryZone(com.aliyun.ros.cdk.core.IResolvable primaryZone) {
            this.primaryZone = primaryZone;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getTopologyType}
         * @param topologyType Property topologyType: The topology type of the instance. This parameter is required.
         *                     Valid values: 3azones: The instance is deployed in three zones. 1azone: The instance is deployed in only one zone.
         * @return {@code this}
         */
        public Builder topologyType(java.lang.String topologyType) {
            this.topologyType = topologyType;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getTopologyType}
         * @param topologyType Property topologyType: The topology type of the instance. This parameter is required.
         *                     Valid values: 3azones: The instance is deployed in three zones. 1azone: The instance is deployed in only one zone.
         * @return {@code this}
         */
        public Builder topologyType(com.aliyun.ros.cdk.core.IResolvable topologyType) {
            this.topologyType = topologyType;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC to which the instance belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC to which the instance belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Specifies whether to enable auto-renewal for the instance.
         *                  Default value: true. true: Enable auto-renewal. false: Disable auto-renewal.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.Boolean autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Specifies whether to enable auto-renewal for the instance.
         *                  Default value: true. true: Enable auto-renewal. false: Disable auto-renewal.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getDbInstanceDescription}
         * @param dbInstanceDescription Property dbInstanceDescription: The description of the instance.
         * @return {@code this}
         */
        public Builder dbInstanceDescription(java.lang.String dbInstanceDescription) {
            this.dbInstanceDescription = dbInstanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getDbInstanceDescription}
         * @param dbInstanceDescription Property dbInstanceDescription: The description of the instance.
         * @return {@code this}
         */
        public Builder dbInstanceDescription(com.aliyun.ros.cdk.core.IResolvable dbInstanceDescription) {
            this.dbInstanceDescription = dbInstanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getPayType}
         * @param payType Property payType: The billing method of the instance.
         *                Default: POSTPAY.Valid values: PREPAY: subscription POSTPAY: pay-as-you-go
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getPayType}
         * @param payType Property payType: The billing method of the instance.
         *                Default: POSTPAY.Valid values: PREPAY: subscription POSTPAY: pay-as-you-go
         * @return {@code this}
         */
        public Builder payType(com.aliyun.ros.cdk.core.IResolvable payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getPeriod}
         * @param period Property period: The unit of the billing cycle for the instance.
         *               The valid values vary based on the billing method. If you use the subscription billing method, set the value to Year or Month. If you use the pay-as-you-go billing method, the value is automatically set to Hour.
         * @return {@code this}
         */
        public Builder period(java.lang.String period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getPeriod}
         * @param period Property period: The unit of the billing cycle for the instance.
         *               The valid values vary based on the billing method. If you use the subscription billing method, set the value to Year or Month. If you use the pay-as-you-go billing method, the value is automatically set to Hour.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getSecondaryZone}
         * @param secondaryZone Property secondaryZone: The secondary zone.
         * @return {@code this}
         */
        public Builder secondaryZone(java.lang.String secondaryZone) {
            this.secondaryZone = secondaryZone;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getSecondaryZone}
         * @param secondaryZone Property secondaryZone: The secondary zone.
         * @return {@code this}
         */
        public Builder secondaryZone(com.aliyun.ros.cdk.core.IResolvable secondaryZone) {
            this.secondaryZone = secondaryZone;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getSecurityIpConfig}
         * @param securityIpConfig Property securityIpConfig: Instance whitelist configuration.
         * @return {@code this}
         */
        public Builder securityIpConfig(com.aliyun.ros.cdk.core.IResolvable securityIpConfig) {
            this.securityIpConfig = securityIpConfig;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getSecurityIpConfig}
         * @param securityIpConfig Property securityIpConfig: Instance whitelist configuration.
         * @return {@code this}
         */
        public Builder securityIpConfig(com.aliyun.ros.cdk.polardbx.RosDBInstance.SecurityIpConfigProperty securityIpConfig) {
            this.securityIpConfig = securityIpConfig;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getTertiaryZone}
         * @param tertiaryZone Property tertiaryZone: The tertiary zone.
         * @return {@code this}
         */
        public Builder tertiaryZone(java.lang.String tertiaryZone) {
            this.tertiaryZone = tertiaryZone;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getTertiaryZone}
         * @param tertiaryZone Property tertiaryZone: The tertiary zone.
         * @return {@code this}
         */
        public Builder tertiaryZone(com.aliyun.ros.cdk.core.IResolvable tertiaryZone) {
            this.tertiaryZone = tertiaryZone;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getUsedTime}
         * @param usedTime Property usedTime: The subscription period of the instance.
         *                 Unit: month or year. Note When period is set to year, the supported values of this parameter are 1, 2 and 3.
         * @return {@code this}
         */
        public Builder usedTime(java.lang.Number usedTime) {
            this.usedTime = usedTime;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getUsedTime}
         * @param usedTime Property usedTime: The subscription period of the instance.
         *                 Unit: month or year. Note When period is set to year, the supported values of this parameter are 1, 2 and 3.
         * @return {@code this}
         */
        public Builder usedTime(com.aliyun.ros.cdk.core.IResolvable usedTime) {
            this.usedTime = usedTime;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DBInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DBInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DBInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DBInstanceProps {
        private final java.lang.Object dbNodeClass;
        private final java.lang.Object dbNodeCount;
        private final java.lang.Object engineVersion;
        private final java.lang.Object primaryZone;
        private final java.lang.Object topologyType;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object autoRenew;
        private final java.lang.Object dbInstanceDescription;
        private final java.lang.Object payType;
        private final java.lang.Object period;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object secondaryZone;
        private final java.lang.Object securityIpConfig;
        private final java.lang.Object tertiaryZone;
        private final java.lang.Object usedTime;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbNodeClass = software.amazon.jsii.Kernel.get(this, "dbNodeClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbNodeCount = software.amazon.jsii.Kernel.get(this, "dbNodeCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.engineVersion = software.amazon.jsii.Kernel.get(this, "engineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.primaryZone = software.amazon.jsii.Kernel.get(this, "primaryZone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.topologyType = software.amazon.jsii.Kernel.get(this, "topologyType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceDescription = software.amazon.jsii.Kernel.get(this, "dbInstanceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.secondaryZone = software.amazon.jsii.Kernel.get(this, "secondaryZone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityIpConfig = software.amazon.jsii.Kernel.get(this, "securityIpConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tertiaryZone = software.amazon.jsii.Kernel.get(this, "tertiaryZone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.usedTime = software.amazon.jsii.Kernel.get(this, "usedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbNodeClass = java.util.Objects.requireNonNull(builder.dbNodeClass, "dbNodeClass is required");
            this.dbNodeCount = java.util.Objects.requireNonNull(builder.dbNodeCount, "dbNodeCount is required");
            this.engineVersion = java.util.Objects.requireNonNull(builder.engineVersion, "engineVersion is required");
            this.primaryZone = java.util.Objects.requireNonNull(builder.primaryZone, "primaryZone is required");
            this.topologyType = java.util.Objects.requireNonNull(builder.topologyType, "topologyType is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
            this.autoRenew = builder.autoRenew;
            this.dbInstanceDescription = builder.dbInstanceDescription;
            this.payType = builder.payType;
            this.period = builder.period;
            this.resourceGroupId = builder.resourceGroupId;
            this.secondaryZone = builder.secondaryZone;
            this.securityIpConfig = builder.securityIpConfig;
            this.tertiaryZone = builder.tertiaryZone;
            this.usedTime = builder.usedTime;
        }

        @Override
        public final java.lang.Object getDbNodeClass() {
            return this.dbNodeClass;
        }

        @Override
        public final java.lang.Object getDbNodeCount() {
            return this.dbNodeCount;
        }

        @Override
        public final java.lang.Object getEngineVersion() {
            return this.engineVersion;
        }

        @Override
        public final java.lang.Object getPrimaryZone() {
            return this.primaryZone;
        }

        @Override
        public final java.lang.Object getTopologyType() {
            return this.topologyType;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        public final java.lang.Object getAutoRenew() {
            return this.autoRenew;
        }

        @Override
        public final java.lang.Object getDbInstanceDescription() {
            return this.dbInstanceDescription;
        }

        @Override
        public final java.lang.Object getPayType() {
            return this.payType;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSecondaryZone() {
            return this.secondaryZone;
        }

        @Override
        public final java.lang.Object getSecurityIpConfig() {
            return this.securityIpConfig;
        }

        @Override
        public final java.lang.Object getTertiaryZone() {
            return this.tertiaryZone;
        }

        @Override
        public final java.lang.Object getUsedTime() {
            return this.usedTime;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dbNodeClass", om.valueToTree(this.getDbNodeClass()));
            data.set("dbNodeCount", om.valueToTree(this.getDbNodeCount()));
            data.set("engineVersion", om.valueToTree(this.getEngineVersion()));
            data.set("primaryZone", om.valueToTree(this.getPrimaryZone()));
            data.set("topologyType", om.valueToTree(this.getTopologyType()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getDbInstanceDescription() != null) {
                data.set("dbInstanceDescription", om.valueToTree(this.getDbInstanceDescription()));
            }
            if (this.getPayType() != null) {
                data.set("payType", om.valueToTree(this.getPayType()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSecondaryZone() != null) {
                data.set("secondaryZone", om.valueToTree(this.getSecondaryZone()));
            }
            if (this.getSecurityIpConfig() != null) {
                data.set("securityIpConfig", om.valueToTree(this.getSecurityIpConfig()));
            }
            if (this.getTertiaryZone() != null) {
                data.set("tertiaryZone", om.valueToTree(this.getTertiaryZone()));
            }
            if (this.getUsedTime() != null) {
                data.set("usedTime", om.valueToTree(this.getUsedTime()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-polardbx.DBInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DBInstanceProps.Jsii$Proxy that = (DBInstanceProps.Jsii$Proxy) o;

            if (!dbNodeClass.equals(that.dbNodeClass)) return false;
            if (!dbNodeCount.equals(that.dbNodeCount)) return false;
            if (!engineVersion.equals(that.engineVersion)) return false;
            if (!primaryZone.equals(that.primaryZone)) return false;
            if (!topologyType.equals(that.topologyType)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (!vSwitchId.equals(that.vSwitchId)) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.dbInstanceDescription != null ? !this.dbInstanceDescription.equals(that.dbInstanceDescription) : that.dbInstanceDescription != null) return false;
            if (this.payType != null ? !this.payType.equals(that.payType) : that.payType != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.secondaryZone != null ? !this.secondaryZone.equals(that.secondaryZone) : that.secondaryZone != null) return false;
            if (this.securityIpConfig != null ? !this.securityIpConfig.equals(that.securityIpConfig) : that.securityIpConfig != null) return false;
            if (this.tertiaryZone != null ? !this.tertiaryZone.equals(that.tertiaryZone) : that.tertiaryZone != null) return false;
            return this.usedTime != null ? this.usedTime.equals(that.usedTime) : that.usedTime == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbNodeClass.hashCode();
            result = 31 * result + (this.dbNodeCount.hashCode());
            result = 31 * result + (this.engineVersion.hashCode());
            result = 31 * result + (this.primaryZone.hashCode());
            result = 31 * result + (this.topologyType.hashCode());
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.vSwitchId.hashCode());
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.dbInstanceDescription != null ? this.dbInstanceDescription.hashCode() : 0);
            result = 31 * result + (this.payType != null ? this.payType.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.secondaryZone != null ? this.secondaryZone.hashCode() : 0);
            result = 31 * result + (this.securityIpConfig != null ? this.securityIpConfig.hashCode() : 0);
            result = 31 * result + (this.tertiaryZone != null ? this.tertiaryZone.hashCode() : 0);
            result = 31 * result + (this.usedTime != null ? this.usedTime.hashCode() : 0);
            return result;
        }
    }
}
