package com.aliyun.ros.cdk.dms;

/**
 * Properties for defining a <code>RosInstance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dms-instance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:54.560Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dms.$Module.class, fqn = "@alicloud/ros-cdk-dms.RosInstanceProps")
@software.amazon.jsii.Jsii.Proxy(RosInstanceProps.Jsii$Proxy.class)
public interface RosInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDatabasePassword();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDatabaseUser();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbaUid();

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
    default @org.jetbrains.annotations.Nullable java.lang.Object getSid() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosInstanceProps> {
        java.lang.Object databasePassword;
        java.lang.Object databaseUser;
        java.lang.Object dbaUid;
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
        java.lang.Object sid;
        java.lang.Object tid;
        java.lang.Object useDsql;
        java.lang.Object vpcId;

        /**
         * Sets the value of {@link RosInstanceProps#getDatabasePassword}
         * @param databasePassword the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder databasePassword(java.lang.String databasePassword) {
            this.databasePassword = databasePassword;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getDatabasePassword}
         * @param databasePassword the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder databasePassword(com.aliyun.ros.cdk.core.IResolvable databasePassword) {
            this.databasePassword = databasePassword;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getDatabaseUser}
         * @param databaseUser the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder databaseUser(java.lang.String databaseUser) {
            this.databaseUser = databaseUser;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getDatabaseUser}
         * @param databaseUser the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder databaseUser(com.aliyun.ros.cdk.core.IResolvable databaseUser) {
            this.databaseUser = databaseUser;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getDbaUid}
         * @param dbaUid the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbaUid(java.lang.Number dbaUid) {
            this.dbaUid = dbaUid;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getDbaUid}
         * @param dbaUid the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbaUid(com.aliyun.ros.cdk.core.IResolvable dbaUid) {
            this.dbaUid = dbaUid;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getEnvType}
         * @param envType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder envType(java.lang.String envType) {
            this.envType = envType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getEnvType}
         * @param envType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder envType(com.aliyun.ros.cdk.core.IResolvable envType) {
            this.envType = envType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getExportTimeout}
         * @param exportTimeout the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder exportTimeout(java.lang.Number exportTimeout) {
            this.exportTimeout = exportTimeout;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getExportTimeout}
         * @param exportTimeout the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder exportTimeout(com.aliyun.ros.cdk.core.IResolvable exportTimeout) {
            this.exportTimeout = exportTimeout;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getHost}
         * @param host the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder host(java.lang.String host) {
            this.host = host;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getHost}
         * @param host the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder host(com.aliyun.ros.cdk.core.IResolvable host) {
            this.host = host;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getInstanceAlias}
         * @param instanceAlias the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceAlias(java.lang.String instanceAlias) {
            this.instanceAlias = instanceAlias;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getInstanceAlias}
         * @param instanceAlias the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceAlias(com.aliyun.ros.cdk.core.IResolvable instanceAlias) {
            this.instanceAlias = instanceAlias;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getInstanceSource}
         * @param instanceSource the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceSource(java.lang.String instanceSource) {
            this.instanceSource = instanceSource;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getInstanceSource}
         * @param instanceSource the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceSource(com.aliyun.ros.cdk.core.IResolvable instanceSource) {
            this.instanceSource = instanceSource;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getInstanceType}
         * @param instanceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getInstanceType}
         * @param instanceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getNetworkType}
         * @param networkType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder networkType(java.lang.String networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getNetworkType}
         * @param networkType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder networkType(com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPort}
         * @param port the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder port(java.lang.Number port) {
            this.port = port;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPort}
         * @param port the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
            this.port = port;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getQueryTimeout}
         * @param queryTimeout the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder queryTimeout(java.lang.Number queryTimeout) {
            this.queryTimeout = queryTimeout;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getQueryTimeout}
         * @param queryTimeout the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder queryTimeout(com.aliyun.ros.cdk.core.IResolvable queryTimeout) {
            this.queryTimeout = queryTimeout;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSafeRule}
         * @param safeRule the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder safeRule(java.lang.String safeRule) {
            this.safeRule = safeRule;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSafeRule}
         * @param safeRule the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder safeRule(com.aliyun.ros.cdk.core.IResolvable safeRule) {
            this.safeRule = safeRule;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getDataLinkName}
         * @param dataLinkName the value to be set.
         * @return {@code this}
         */
        public Builder dataLinkName(java.lang.String dataLinkName) {
            this.dataLinkName = dataLinkName;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getDataLinkName}
         * @param dataLinkName the value to be set.
         * @return {@code this}
         */
        public Builder dataLinkName(com.aliyun.ros.cdk.core.IResolvable dataLinkName) {
            this.dataLinkName = dataLinkName;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getDdlOnline}
         * @param ddlOnline the value to be set.
         * @return {@code this}
         */
        public Builder ddlOnline(java.lang.Number ddlOnline) {
            this.ddlOnline = ddlOnline;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getDdlOnline}
         * @param ddlOnline the value to be set.
         * @return {@code this}
         */
        public Builder ddlOnline(com.aliyun.ros.cdk.core.IResolvable ddlOnline) {
            this.ddlOnline = ddlOnline;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getEcsInstanceId}
         * @param ecsInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder ecsInstanceId(java.lang.String ecsInstanceId) {
            this.ecsInstanceId = ecsInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getEcsInstanceId}
         * @param ecsInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder ecsInstanceId(com.aliyun.ros.cdk.core.IResolvable ecsInstanceId) {
            this.ecsInstanceId = ecsInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getEcsRegion}
         * @param ecsRegion the value to be set.
         * @return {@code this}
         */
        public Builder ecsRegion(java.lang.String ecsRegion) {
            this.ecsRegion = ecsRegion;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getEcsRegion}
         * @param ecsRegion the value to be set.
         * @return {@code this}
         */
        public Builder ecsRegion(com.aliyun.ros.cdk.core.IResolvable ecsRegion) {
            this.ecsRegion = ecsRegion;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSid}
         * @param sid the value to be set.
         * @return {@code this}
         */
        public Builder sid(java.lang.String sid) {
            this.sid = sid;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSid}
         * @param sid the value to be set.
         * @return {@code this}
         */
        public Builder sid(com.aliyun.ros.cdk.core.IResolvable sid) {
            this.sid = sid;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getTid}
         * @param tid the value to be set.
         * @return {@code this}
         */
        public Builder tid(java.lang.Number tid) {
            this.tid = tid;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getTid}
         * @param tid the value to be set.
         * @return {@code this}
         */
        public Builder tid(com.aliyun.ros.cdk.core.IResolvable tid) {
            this.tid = tid;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getUseDsql}
         * @param useDsql the value to be set.
         * @return {@code this}
         */
        public Builder useDsql(java.lang.Number useDsql) {
            this.useDsql = useDsql;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getUseDsql}
         * @param useDsql the value to be set.
         * @return {@code this}
         */
        public Builder useDsql(com.aliyun.ros.cdk.core.IResolvable useDsql) {
            this.useDsql = useDsql;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosInstanceProps {
        private final java.lang.Object databasePassword;
        private final java.lang.Object databaseUser;
        private final java.lang.Object dbaUid;
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
        private final java.lang.Object sid;
        private final java.lang.Object tid;
        private final java.lang.Object useDsql;
        private final java.lang.Object vpcId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.databasePassword = software.amazon.jsii.Kernel.get(this, "databasePassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.databaseUser = software.amazon.jsii.Kernel.get(this, "databaseUser", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbaUid = software.amazon.jsii.Kernel.get(this, "dbaUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
            this.sid = software.amazon.jsii.Kernel.get(this, "sid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tid = software.amazon.jsii.Kernel.get(this, "tid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.useDsql = software.amazon.jsii.Kernel.get(this, "useDsql", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.databasePassword = java.util.Objects.requireNonNull(builder.databasePassword, "databasePassword is required");
            this.databaseUser = java.util.Objects.requireNonNull(builder.databaseUser, "databaseUser is required");
            this.dbaUid = java.util.Objects.requireNonNull(builder.dbaUid, "dbaUid is required");
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
            this.sid = builder.sid;
            this.tid = builder.tid;
            this.useDsql = builder.useDsql;
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
        public final java.lang.Object getDbaUid() {
            return this.dbaUid;
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
        public final java.lang.Object getSid() {
            return this.sid;
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
            data.set("dbaUid", om.valueToTree(this.getDbaUid()));
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
            if (this.getSid() != null) {
                data.set("sid", om.valueToTree(this.getSid()));
            }
            if (this.getTid() != null) {
                data.set("tid", om.valueToTree(this.getTid()));
            }
            if (this.getUseDsql() != null) {
                data.set("useDsql", om.valueToTree(this.getUseDsql()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dms.RosInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosInstanceProps.Jsii$Proxy that = (RosInstanceProps.Jsii$Proxy) o;

            if (!databasePassword.equals(that.databasePassword)) return false;
            if (!databaseUser.equals(that.databaseUser)) return false;
            if (!dbaUid.equals(that.dbaUid)) return false;
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
            if (this.sid != null ? !this.sid.equals(that.sid) : that.sid != null) return false;
            if (this.tid != null ? !this.tid.equals(that.tid) : that.tid != null) return false;
            if (this.useDsql != null ? !this.useDsql.equals(that.useDsql) : that.useDsql != null) return false;
            return this.vpcId != null ? this.vpcId.equals(that.vpcId) : that.vpcId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.databasePassword.hashCode();
            result = 31 * result + (this.databaseUser.hashCode());
            result = 31 * result + (this.dbaUid.hashCode());
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
            result = 31 * result + (this.sid != null ? this.sid.hashCode() : 0);
            result = 31 * result + (this.tid != null ? this.tid.hashCode() : 0);
            result = 31 * result + (this.useDsql != null ? this.useDsql.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            return result;
        }
    }
}
