package com.aliyun.ros.cdk.dms;

/**
 * Properties for defining a <code>RosInstance2</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dms-instance2
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:14.113Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dms.$Module.class, fqn = "@alicloud/ros-cdk-dms.RosInstance2Props")
@software.amazon.jsii.Jsii.Proxy(RosInstance2Props.Jsii$Proxy.class)
public interface RosInstance2Props extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDatabasePassword();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDatabaseUser();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbaId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEnableSellTrust();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEnvType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getExportTimeout();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHost();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceAlias();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceSource();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNetworkType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPort();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getQueryTimeout();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSafeRule();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDataLinkName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDdlOnline() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEcsInstanceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEcsRegion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableSellCommon() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableSellSitd() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableSellStable() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSid() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSkipTest() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTemplateId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTemplateType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTid() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUseDsql() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUseSsl() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosInstance2Props}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosInstance2Props}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosInstance2Props> {
        java.lang.Object databasePassword;
        java.lang.Object databaseUser;
        java.lang.Object dbaId;
        java.lang.Object enableSellTrust;
        java.lang.Object envType;
        java.lang.Object exportTimeout;
        java.lang.Object host;
        java.lang.Object instanceAlias;
        java.lang.Object instanceSource;
        java.lang.Object instanceType;
        java.lang.Object networkType;
        java.lang.Object port;
        java.lang.Object queryTimeout;
        java.lang.Object safeRule;
        java.lang.Object dataLinkName;
        java.lang.Object ddlOnline;
        java.lang.Object ecsInstanceId;
        java.lang.Object ecsRegion;
        java.lang.Object enableSellCommon;
        java.lang.Object enableSellSitd;
        java.lang.Object enableSellStable;
        java.lang.Object sid;
        java.lang.Object skipTest;
        java.lang.Object templateId;
        java.lang.Object templateType;
        java.lang.Object tid;
        java.lang.Object useDsql;
        java.lang.Object useSsl;
        java.lang.Object vpcId;

        /**
         * Sets the value of {@link RosInstance2Props#getDatabasePassword}
         * @param databasePassword the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder databasePassword(java.lang.String databasePassword) {
            this.databasePassword = databasePassword;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getDatabasePassword}
         * @param databasePassword the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder databasePassword(com.aliyun.ros.cdk.core.IResolvable databasePassword) {
            this.databasePassword = databasePassword;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getDatabaseUser}
         * @param databaseUser the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder databaseUser(java.lang.String databaseUser) {
            this.databaseUser = databaseUser;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getDatabaseUser}
         * @param databaseUser the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder databaseUser(com.aliyun.ros.cdk.core.IResolvable databaseUser) {
            this.databaseUser = databaseUser;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getDbaId}
         * @param dbaId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbaId(java.lang.Number dbaId) {
            this.dbaId = dbaId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getDbaId}
         * @param dbaId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbaId(com.aliyun.ros.cdk.core.IResolvable dbaId) {
            this.dbaId = dbaId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getEnableSellTrust}
         * @param enableSellTrust the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder enableSellTrust(java.lang.String enableSellTrust) {
            this.enableSellTrust = enableSellTrust;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getEnableSellTrust}
         * @param enableSellTrust the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder enableSellTrust(com.aliyun.ros.cdk.core.IResolvable enableSellTrust) {
            this.enableSellTrust = enableSellTrust;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getEnvType}
         * @param envType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder envType(java.lang.String envType) {
            this.envType = envType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getEnvType}
         * @param envType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder envType(com.aliyun.ros.cdk.core.IResolvable envType) {
            this.envType = envType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getExportTimeout}
         * @param exportTimeout the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder exportTimeout(java.lang.Number exportTimeout) {
            this.exportTimeout = exportTimeout;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getExportTimeout}
         * @param exportTimeout the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder exportTimeout(com.aliyun.ros.cdk.core.IResolvable exportTimeout) {
            this.exportTimeout = exportTimeout;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getHost}
         * @param host the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder host(java.lang.String host) {
            this.host = host;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getHost}
         * @param host the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder host(com.aliyun.ros.cdk.core.IResolvable host) {
            this.host = host;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getInstanceAlias}
         * @param instanceAlias the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceAlias(java.lang.String instanceAlias) {
            this.instanceAlias = instanceAlias;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getInstanceAlias}
         * @param instanceAlias the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceAlias(com.aliyun.ros.cdk.core.IResolvable instanceAlias) {
            this.instanceAlias = instanceAlias;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getInstanceSource}
         * @param instanceSource the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceSource(java.lang.String instanceSource) {
            this.instanceSource = instanceSource;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getInstanceSource}
         * @param instanceSource the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceSource(com.aliyun.ros.cdk.core.IResolvable instanceSource) {
            this.instanceSource = instanceSource;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getInstanceType}
         * @param instanceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getInstanceType}
         * @param instanceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getNetworkType}
         * @param networkType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder networkType(java.lang.String networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getNetworkType}
         * @param networkType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder networkType(com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getPort}
         * @param port the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder port(java.lang.Number port) {
            this.port = port;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getPort}
         * @param port the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
            this.port = port;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getQueryTimeout}
         * @param queryTimeout the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder queryTimeout(java.lang.Number queryTimeout) {
            this.queryTimeout = queryTimeout;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getQueryTimeout}
         * @param queryTimeout the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder queryTimeout(com.aliyun.ros.cdk.core.IResolvable queryTimeout) {
            this.queryTimeout = queryTimeout;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getSafeRule}
         * @param safeRule the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder safeRule(java.lang.String safeRule) {
            this.safeRule = safeRule;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getSafeRule}
         * @param safeRule the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder safeRule(com.aliyun.ros.cdk.core.IResolvable safeRule) {
            this.safeRule = safeRule;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getDataLinkName}
         * @param dataLinkName the value to be set.
         * @return {@code this}
         */
        public Builder dataLinkName(java.lang.String dataLinkName) {
            this.dataLinkName = dataLinkName;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getDataLinkName}
         * @param dataLinkName the value to be set.
         * @return {@code this}
         */
        public Builder dataLinkName(com.aliyun.ros.cdk.core.IResolvable dataLinkName) {
            this.dataLinkName = dataLinkName;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getDdlOnline}
         * @param ddlOnline the value to be set.
         * @return {@code this}
         */
        public Builder ddlOnline(java.lang.Number ddlOnline) {
            this.ddlOnline = ddlOnline;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getDdlOnline}
         * @param ddlOnline the value to be set.
         * @return {@code this}
         */
        public Builder ddlOnline(com.aliyun.ros.cdk.core.IResolvable ddlOnline) {
            this.ddlOnline = ddlOnline;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getEcsInstanceId}
         * @param ecsInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder ecsInstanceId(java.lang.String ecsInstanceId) {
            this.ecsInstanceId = ecsInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getEcsInstanceId}
         * @param ecsInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder ecsInstanceId(com.aliyun.ros.cdk.core.IResolvable ecsInstanceId) {
            this.ecsInstanceId = ecsInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getEcsRegion}
         * @param ecsRegion the value to be set.
         * @return {@code this}
         */
        public Builder ecsRegion(java.lang.String ecsRegion) {
            this.ecsRegion = ecsRegion;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getEcsRegion}
         * @param ecsRegion the value to be set.
         * @return {@code this}
         */
        public Builder ecsRegion(com.aliyun.ros.cdk.core.IResolvable ecsRegion) {
            this.ecsRegion = ecsRegion;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getEnableSellCommon}
         * @param enableSellCommon the value to be set.
         * @return {@code this}
         */
        public Builder enableSellCommon(java.lang.String enableSellCommon) {
            this.enableSellCommon = enableSellCommon;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getEnableSellCommon}
         * @param enableSellCommon the value to be set.
         * @return {@code this}
         */
        public Builder enableSellCommon(com.aliyun.ros.cdk.core.IResolvable enableSellCommon) {
            this.enableSellCommon = enableSellCommon;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getEnableSellSitd}
         * @param enableSellSitd the value to be set.
         * @return {@code this}
         */
        public Builder enableSellSitd(java.lang.String enableSellSitd) {
            this.enableSellSitd = enableSellSitd;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getEnableSellSitd}
         * @param enableSellSitd the value to be set.
         * @return {@code this}
         */
        public Builder enableSellSitd(com.aliyun.ros.cdk.core.IResolvable enableSellSitd) {
            this.enableSellSitd = enableSellSitd;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getEnableSellStable}
         * @param enableSellStable the value to be set.
         * @return {@code this}
         */
        public Builder enableSellStable(java.lang.String enableSellStable) {
            this.enableSellStable = enableSellStable;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getEnableSellStable}
         * @param enableSellStable the value to be set.
         * @return {@code this}
         */
        public Builder enableSellStable(com.aliyun.ros.cdk.core.IResolvable enableSellStable) {
            this.enableSellStable = enableSellStable;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getSid}
         * @param sid the value to be set.
         * @return {@code this}
         */
        public Builder sid(java.lang.String sid) {
            this.sid = sid;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getSid}
         * @param sid the value to be set.
         * @return {@code this}
         */
        public Builder sid(com.aliyun.ros.cdk.core.IResolvable sid) {
            this.sid = sid;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getSkipTest}
         * @param skipTest the value to be set.
         * @return {@code this}
         */
        public Builder skipTest(java.lang.Boolean skipTest) {
            this.skipTest = skipTest;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getSkipTest}
         * @param skipTest the value to be set.
         * @return {@code this}
         */
        public Builder skipTest(com.aliyun.ros.cdk.core.IResolvable skipTest) {
            this.skipTest = skipTest;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getTemplateId}
         * @param templateId the value to be set.
         * @return {@code this}
         */
        public Builder templateId(java.lang.Number templateId) {
            this.templateId = templateId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getTemplateId}
         * @param templateId the value to be set.
         * @return {@code this}
         */
        public Builder templateId(com.aliyun.ros.cdk.core.IResolvable templateId) {
            this.templateId = templateId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getTemplateType}
         * @param templateType the value to be set.
         * @return {@code this}
         */
        public Builder templateType(java.lang.String templateType) {
            this.templateType = templateType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getTemplateType}
         * @param templateType the value to be set.
         * @return {@code this}
         */
        public Builder templateType(com.aliyun.ros.cdk.core.IResolvable templateType) {
            this.templateType = templateType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getTid}
         * @param tid the value to be set.
         * @return {@code this}
         */
        public Builder tid(java.lang.Number tid) {
            this.tid = tid;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getTid}
         * @param tid the value to be set.
         * @return {@code this}
         */
        public Builder tid(com.aliyun.ros.cdk.core.IResolvable tid) {
            this.tid = tid;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getUseDsql}
         * @param useDsql the value to be set.
         * @return {@code this}
         */
        public Builder useDsql(java.lang.Number useDsql) {
            this.useDsql = useDsql;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getUseDsql}
         * @param useDsql the value to be set.
         * @return {@code this}
         */
        public Builder useDsql(com.aliyun.ros.cdk.core.IResolvable useDsql) {
            this.useDsql = useDsql;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getUseSsl}
         * @param useSsl the value to be set.
         * @return {@code this}
         */
        public Builder useSsl(java.lang.Number useSsl) {
            this.useSsl = useSsl;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getUseSsl}
         * @param useSsl the value to be set.
         * @return {@code this}
         */
        public Builder useSsl(com.aliyun.ros.cdk.core.IResolvable useSsl) {
            this.useSsl = useSsl;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstance2Props#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosInstance2Props}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosInstance2Props build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosInstance2Props}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosInstance2Props {
        private final java.lang.Object databasePassword;
        private final java.lang.Object databaseUser;
        private final java.lang.Object dbaId;
        private final java.lang.Object enableSellTrust;
        private final java.lang.Object envType;
        private final java.lang.Object exportTimeout;
        private final java.lang.Object host;
        private final java.lang.Object instanceAlias;
        private final java.lang.Object instanceSource;
        private final java.lang.Object instanceType;
        private final java.lang.Object networkType;
        private final java.lang.Object port;
        private final java.lang.Object queryTimeout;
        private final java.lang.Object safeRule;
        private final java.lang.Object dataLinkName;
        private final java.lang.Object ddlOnline;
        private final java.lang.Object ecsInstanceId;
        private final java.lang.Object ecsRegion;
        private final java.lang.Object enableSellCommon;
        private final java.lang.Object enableSellSitd;
        private final java.lang.Object enableSellStable;
        private final java.lang.Object sid;
        private final java.lang.Object skipTest;
        private final java.lang.Object templateId;
        private final java.lang.Object templateType;
        private final java.lang.Object tid;
        private final java.lang.Object useDsql;
        private final java.lang.Object useSsl;
        private final java.lang.Object vpcId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.databasePassword = software.amazon.jsii.Kernel.get(this, "databasePassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.databaseUser = software.amazon.jsii.Kernel.get(this, "databaseUser", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbaId = software.amazon.jsii.Kernel.get(this, "dbaId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableSellTrust = software.amazon.jsii.Kernel.get(this, "enableSellTrust", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.envType = software.amazon.jsii.Kernel.get(this, "envType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.exportTimeout = software.amazon.jsii.Kernel.get(this, "exportTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.host = software.amazon.jsii.Kernel.get(this, "host", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceAlias = software.amazon.jsii.Kernel.get(this, "instanceAlias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceSource = software.amazon.jsii.Kernel.get(this, "instanceSource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkType = software.amazon.jsii.Kernel.get(this, "networkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.queryTimeout = software.amazon.jsii.Kernel.get(this, "queryTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.safeRule = software.amazon.jsii.Kernel.get(this, "safeRule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dataLinkName = software.amazon.jsii.Kernel.get(this, "dataLinkName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ddlOnline = software.amazon.jsii.Kernel.get(this, "ddlOnline", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ecsInstanceId = software.amazon.jsii.Kernel.get(this, "ecsInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ecsRegion = software.amazon.jsii.Kernel.get(this, "ecsRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableSellCommon = software.amazon.jsii.Kernel.get(this, "enableSellCommon", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableSellSitd = software.amazon.jsii.Kernel.get(this, "enableSellSitd", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableSellStable = software.amazon.jsii.Kernel.get(this, "enableSellStable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sid = software.amazon.jsii.Kernel.get(this, "sid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.skipTest = software.amazon.jsii.Kernel.get(this, "skipTest", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.templateId = software.amazon.jsii.Kernel.get(this, "templateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.templateType = software.amazon.jsii.Kernel.get(this, "templateType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tid = software.amazon.jsii.Kernel.get(this, "tid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.useDsql = software.amazon.jsii.Kernel.get(this, "useDsql", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.useSsl = software.amazon.jsii.Kernel.get(this, "useSsl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.databasePassword = java.util.Objects.requireNonNull(builder.databasePassword, "databasePassword is required");
            this.databaseUser = java.util.Objects.requireNonNull(builder.databaseUser, "databaseUser is required");
            this.dbaId = java.util.Objects.requireNonNull(builder.dbaId, "dbaId is required");
            this.enableSellTrust = java.util.Objects.requireNonNull(builder.enableSellTrust, "enableSellTrust is required");
            this.envType = java.util.Objects.requireNonNull(builder.envType, "envType is required");
            this.exportTimeout = java.util.Objects.requireNonNull(builder.exportTimeout, "exportTimeout is required");
            this.host = java.util.Objects.requireNonNull(builder.host, "host is required");
            this.instanceAlias = java.util.Objects.requireNonNull(builder.instanceAlias, "instanceAlias is required");
            this.instanceSource = java.util.Objects.requireNonNull(builder.instanceSource, "instanceSource is required");
            this.instanceType = java.util.Objects.requireNonNull(builder.instanceType, "instanceType is required");
            this.networkType = java.util.Objects.requireNonNull(builder.networkType, "networkType is required");
            this.port = java.util.Objects.requireNonNull(builder.port, "port is required");
            this.queryTimeout = java.util.Objects.requireNonNull(builder.queryTimeout, "queryTimeout is required");
            this.safeRule = java.util.Objects.requireNonNull(builder.safeRule, "safeRule is required");
            this.dataLinkName = builder.dataLinkName;
            this.ddlOnline = builder.ddlOnline;
            this.ecsInstanceId = builder.ecsInstanceId;
            this.ecsRegion = builder.ecsRegion;
            this.enableSellCommon = builder.enableSellCommon;
            this.enableSellSitd = builder.enableSellSitd;
            this.enableSellStable = builder.enableSellStable;
            this.sid = builder.sid;
            this.skipTest = builder.skipTest;
            this.templateId = builder.templateId;
            this.templateType = builder.templateType;
            this.tid = builder.tid;
            this.useDsql = builder.useDsql;
            this.useSsl = builder.useSsl;
            this.vpcId = builder.vpcId;
        }

        @Override
        public final java.lang.Object getDatabasePassword() {
            return this.databasePassword;
        }

        @Override
        public final java.lang.Object getDatabaseUser() {
            return this.databaseUser;
        }

        @Override
        public final java.lang.Object getDbaId() {
            return this.dbaId;
        }

        @Override
        public final java.lang.Object getEnableSellTrust() {
            return this.enableSellTrust;
        }

        @Override
        public final java.lang.Object getEnvType() {
            return this.envType;
        }

        @Override
        public final java.lang.Object getExportTimeout() {
            return this.exportTimeout;
        }

        @Override
        public final java.lang.Object getHost() {
            return this.host;
        }

        @Override
        public final java.lang.Object getInstanceAlias() {
            return this.instanceAlias;
        }

        @Override
        public final java.lang.Object getInstanceSource() {
            return this.instanceSource;
        }

        @Override
        public final java.lang.Object getInstanceType() {
            return this.instanceType;
        }

        @Override
        public final java.lang.Object getNetworkType() {
            return this.networkType;
        }

        @Override
        public final java.lang.Object getPort() {
            return this.port;
        }

        @Override
        public final java.lang.Object getQueryTimeout() {
            return this.queryTimeout;
        }

        @Override
        public final java.lang.Object getSafeRule() {
            return this.safeRule;
        }

        @Override
        public final java.lang.Object getDataLinkName() {
            return this.dataLinkName;
        }

        @Override
        public final java.lang.Object getDdlOnline() {
            return this.ddlOnline;
        }

        @Override
        public final java.lang.Object getEcsInstanceId() {
            return this.ecsInstanceId;
        }

        @Override
        public final java.lang.Object getEcsRegion() {
            return this.ecsRegion;
        }

        @Override
        public final java.lang.Object getEnableSellCommon() {
            return this.enableSellCommon;
        }

        @Override
        public final java.lang.Object getEnableSellSitd() {
            return this.enableSellSitd;
        }

        @Override
        public final java.lang.Object getEnableSellStable() {
            return this.enableSellStable;
        }

        @Override
        public final java.lang.Object getSid() {
            return this.sid;
        }

        @Override
        public final java.lang.Object getSkipTest() {
            return this.skipTest;
        }

        @Override
        public final java.lang.Object getTemplateId() {
            return this.templateId;
        }

        @Override
        public final java.lang.Object getTemplateType() {
            return this.templateType;
        }

        @Override
        public final java.lang.Object getTid() {
            return this.tid;
        }

        @Override
        public final java.lang.Object getUseDsql() {
            return this.useDsql;
        }

        @Override
        public final java.lang.Object getUseSsl() {
            return this.useSsl;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("databasePassword", om.valueToTree(this.getDatabasePassword()));
            data.set("databaseUser", om.valueToTree(this.getDatabaseUser()));
            data.set("dbaId", om.valueToTree(this.getDbaId()));
            data.set("enableSellTrust", om.valueToTree(this.getEnableSellTrust()));
            data.set("envType", om.valueToTree(this.getEnvType()));
            data.set("exportTimeout", om.valueToTree(this.getExportTimeout()));
            data.set("host", om.valueToTree(this.getHost()));
            data.set("instanceAlias", om.valueToTree(this.getInstanceAlias()));
            data.set("instanceSource", om.valueToTree(this.getInstanceSource()));
            data.set("instanceType", om.valueToTree(this.getInstanceType()));
            data.set("networkType", om.valueToTree(this.getNetworkType()));
            data.set("port", om.valueToTree(this.getPort()));
            data.set("queryTimeout", om.valueToTree(this.getQueryTimeout()));
            data.set("safeRule", om.valueToTree(this.getSafeRule()));
            if (this.getDataLinkName() != null) {
                data.set("dataLinkName", om.valueToTree(this.getDataLinkName()));
            }
            if (this.getDdlOnline() != null) {
                data.set("ddlOnline", om.valueToTree(this.getDdlOnline()));
            }
            if (this.getEcsInstanceId() != null) {
                data.set("ecsInstanceId", om.valueToTree(this.getEcsInstanceId()));
            }
            if (this.getEcsRegion() != null) {
                data.set("ecsRegion", om.valueToTree(this.getEcsRegion()));
            }
            if (this.getEnableSellCommon() != null) {
                data.set("enableSellCommon", om.valueToTree(this.getEnableSellCommon()));
            }
            if (this.getEnableSellSitd() != null) {
                data.set("enableSellSitd", om.valueToTree(this.getEnableSellSitd()));
            }
            if (this.getEnableSellStable() != null) {
                data.set("enableSellStable", om.valueToTree(this.getEnableSellStable()));
            }
            if (this.getSid() != null) {
                data.set("sid", om.valueToTree(this.getSid()));
            }
            if (this.getSkipTest() != null) {
                data.set("skipTest", om.valueToTree(this.getSkipTest()));
            }
            if (this.getTemplateId() != null) {
                data.set("templateId", om.valueToTree(this.getTemplateId()));
            }
            if (this.getTemplateType() != null) {
                data.set("templateType", om.valueToTree(this.getTemplateType()));
            }
            if (this.getTid() != null) {
                data.set("tid", om.valueToTree(this.getTid()));
            }
            if (this.getUseDsql() != null) {
                data.set("useDsql", om.valueToTree(this.getUseDsql()));
            }
            if (this.getUseSsl() != null) {
                data.set("useSsl", om.valueToTree(this.getUseSsl()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dms.RosInstance2Props"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosInstance2Props.Jsii$Proxy that = (RosInstance2Props.Jsii$Proxy) o;

            if (!databasePassword.equals(that.databasePassword)) return false;
            if (!databaseUser.equals(that.databaseUser)) return false;
            if (!dbaId.equals(that.dbaId)) return false;
            if (!enableSellTrust.equals(that.enableSellTrust)) return false;
            if (!envType.equals(that.envType)) return false;
            if (!exportTimeout.equals(that.exportTimeout)) return false;
            if (!host.equals(that.host)) return false;
            if (!instanceAlias.equals(that.instanceAlias)) return false;
            if (!instanceSource.equals(that.instanceSource)) return false;
            if (!instanceType.equals(that.instanceType)) return false;
            if (!networkType.equals(that.networkType)) return false;
            if (!port.equals(that.port)) return false;
            if (!queryTimeout.equals(that.queryTimeout)) return false;
            if (!safeRule.equals(that.safeRule)) return false;
            if (this.dataLinkName != null ? !this.dataLinkName.equals(that.dataLinkName) : that.dataLinkName != null) return false;
            if (this.ddlOnline != null ? !this.ddlOnline.equals(that.ddlOnline) : that.ddlOnline != null) return false;
            if (this.ecsInstanceId != null ? !this.ecsInstanceId.equals(that.ecsInstanceId) : that.ecsInstanceId != null) return false;
            if (this.ecsRegion != null ? !this.ecsRegion.equals(that.ecsRegion) : that.ecsRegion != null) return false;
            if (this.enableSellCommon != null ? !this.enableSellCommon.equals(that.enableSellCommon) : that.enableSellCommon != null) return false;
            if (this.enableSellSitd != null ? !this.enableSellSitd.equals(that.enableSellSitd) : that.enableSellSitd != null) return false;
            if (this.enableSellStable != null ? !this.enableSellStable.equals(that.enableSellStable) : that.enableSellStable != null) return false;
            if (this.sid != null ? !this.sid.equals(that.sid) : that.sid != null) return false;
            if (this.skipTest != null ? !this.skipTest.equals(that.skipTest) : that.skipTest != null) return false;
            if (this.templateId != null ? !this.templateId.equals(that.templateId) : that.templateId != null) return false;
            if (this.templateType != null ? !this.templateType.equals(that.templateType) : that.templateType != null) return false;
            if (this.tid != null ? !this.tid.equals(that.tid) : that.tid != null) return false;
            if (this.useDsql != null ? !this.useDsql.equals(that.useDsql) : that.useDsql != null) return false;
            if (this.useSsl != null ? !this.useSsl.equals(that.useSsl) : that.useSsl != null) return false;
            return this.vpcId != null ? this.vpcId.equals(that.vpcId) : that.vpcId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.databasePassword.hashCode();
            result = 31 * result + (this.databaseUser.hashCode());
            result = 31 * result + (this.dbaId.hashCode());
            result = 31 * result + (this.enableSellTrust.hashCode());
            result = 31 * result + (this.envType.hashCode());
            result = 31 * result + (this.exportTimeout.hashCode());
            result = 31 * result + (this.host.hashCode());
            result = 31 * result + (this.instanceAlias.hashCode());
            result = 31 * result + (this.instanceSource.hashCode());
            result = 31 * result + (this.instanceType.hashCode());
            result = 31 * result + (this.networkType.hashCode());
            result = 31 * result + (this.port.hashCode());
            result = 31 * result + (this.queryTimeout.hashCode());
            result = 31 * result + (this.safeRule.hashCode());
            result = 31 * result + (this.dataLinkName != null ? this.dataLinkName.hashCode() : 0);
            result = 31 * result + (this.ddlOnline != null ? this.ddlOnline.hashCode() : 0);
            result = 31 * result + (this.ecsInstanceId != null ? this.ecsInstanceId.hashCode() : 0);
            result = 31 * result + (this.ecsRegion != null ? this.ecsRegion.hashCode() : 0);
            result = 31 * result + (this.enableSellCommon != null ? this.enableSellCommon.hashCode() : 0);
            result = 31 * result + (this.enableSellSitd != null ? this.enableSellSitd.hashCode() : 0);
            result = 31 * result + (this.enableSellStable != null ? this.enableSellStable.hashCode() : 0);
            result = 31 * result + (this.sid != null ? this.sid.hashCode() : 0);
            result = 31 * result + (this.skipTest != null ? this.skipTest.hashCode() : 0);
            result = 31 * result + (this.templateId != null ? this.templateId.hashCode() : 0);
            result = 31 * result + (this.templateType != null ? this.templateType.hashCode() : 0);
            result = 31 * result + (this.tid != null ? this.tid.hashCode() : 0);
            result = 31 * result + (this.useDsql != null ? this.useDsql.hashCode() : 0);
            result = 31 * result + (this.useSsl != null ? this.useSsl.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            return result;
        }
    }
}
