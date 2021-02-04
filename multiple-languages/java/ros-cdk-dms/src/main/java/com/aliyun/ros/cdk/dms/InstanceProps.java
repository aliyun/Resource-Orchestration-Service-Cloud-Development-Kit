package com.aliyun.ros.cdk.dms;

/**
 * Properties for defining a `ALIYUN::DMS::Instance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:35.407Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dms.$Module.class, fqn = "@alicloud/ros-cdk-dms.InstanceProps")
@software.amazon.jsii.Jsii.Proxy(InstanceProps.Jsii$Proxy.class)
public interface InstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDatabasePassword();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDatabaseUser();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Number getDbaUid();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getEnvType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Number getExportTimeout();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getHost();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getInstanceAlias();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getInstanceSource();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getInstanceType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getNetworkType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Number getPort();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Number getQueryTimeout();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getSafeRule();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Number getTid();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDataLinkName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getDdlOnline() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getEcsInstanceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getEcsRegion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSid() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getUseDsql() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getVpcId() {
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
        private java.lang.String databasePassword;
        private java.lang.String databaseUser;
        private java.lang.Number dbaUid;
        private java.lang.String envType;
        private java.lang.Number exportTimeout;
        private java.lang.String host;
        private java.lang.String instanceAlias;
        private java.lang.String instanceSource;
        private java.lang.String instanceType;
        private java.lang.String networkType;
        private java.lang.Number port;
        private java.lang.Number queryTimeout;
        private java.lang.String safeRule;
        private java.lang.Number tid;
        private java.lang.String dataLinkName;
        private java.lang.Number ddlOnline;
        private java.lang.String ecsInstanceId;
        private java.lang.String ecsRegion;
        private java.lang.String sid;
        private java.lang.Number useDsql;
        private java.lang.String vpcId;

        /**
         * Sets the value of {@link InstanceProps#getDatabasePassword}
         * @param databasePassword the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder databasePassword(java.lang.String databasePassword) {
            this.databasePassword = databasePassword;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDatabaseUser}
         * @param databaseUser the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder databaseUser(java.lang.String databaseUser) {
            this.databaseUser = databaseUser;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDbaUid}
         * @param dbaUid the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbaUid(java.lang.Number dbaUid) {
            this.dbaUid = dbaUid;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getEnvType}
         * @param envType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder envType(java.lang.String envType) {
            this.envType = envType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getExportTimeout}
         * @param exportTimeout the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder exportTimeout(java.lang.Number exportTimeout) {
            this.exportTimeout = exportTimeout;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getHost}
         * @param host the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder host(java.lang.String host) {
            this.host = host;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceAlias}
         * @param instanceAlias the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceAlias(java.lang.String instanceAlias) {
            this.instanceAlias = instanceAlias;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceSource}
         * @param instanceSource the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceSource(java.lang.String instanceSource) {
            this.instanceSource = instanceSource;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceType}
         * @param instanceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getNetworkType}
         * @param networkType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder networkType(java.lang.String networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPort}
         * @param port the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder port(java.lang.Number port) {
            this.port = port;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getQueryTimeout}
         * @param queryTimeout the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder queryTimeout(java.lang.Number queryTimeout) {
            this.queryTimeout = queryTimeout;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSafeRule}
         * @param safeRule the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder safeRule(java.lang.String safeRule) {
            this.safeRule = safeRule;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getTid}
         * @param tid the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder tid(java.lang.Number tid) {
            this.tid = tid;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDataLinkName}
         * @param dataLinkName the value to be set.
         * @return {@code this}
         */
        public Builder dataLinkName(java.lang.String dataLinkName) {
            this.dataLinkName = dataLinkName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDdlOnline}
         * @param ddlOnline the value to be set.
         * @return {@code this}
         */
        public Builder ddlOnline(java.lang.Number ddlOnline) {
            this.ddlOnline = ddlOnline;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getEcsInstanceId}
         * @param ecsInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder ecsInstanceId(java.lang.String ecsInstanceId) {
            this.ecsInstanceId = ecsInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getEcsRegion}
         * @param ecsRegion the value to be set.
         * @return {@code this}
         */
        public Builder ecsRegion(java.lang.String ecsRegion) {
            this.ecsRegion = ecsRegion;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSid}
         * @param sid the value to be set.
         * @return {@code this}
         */
        public Builder sid(java.lang.String sid) {
            this.sid = sid;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getUseDsql}
         * @param useDsql the value to be set.
         * @return {@code this}
         */
        public Builder useDsql(java.lang.Number useDsql) {
            this.useDsql = useDsql;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link InstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public InstanceProps build() {
            return new Jsii$Proxy(databasePassword, databaseUser, dbaUid, envType, exportTimeout, host, instanceAlias, instanceSource, instanceType, networkType, port, queryTimeout, safeRule, tid, dataLinkName, ddlOnline, ecsInstanceId, ecsRegion, sid, useDsql, vpcId);
        }
    }

    /**
     * An implementation for {@link InstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InstanceProps {
        private final java.lang.String databasePassword;
        private final java.lang.String databaseUser;
        private final java.lang.Number dbaUid;
        private final java.lang.String envType;
        private final java.lang.Number exportTimeout;
        private final java.lang.String host;
        private final java.lang.String instanceAlias;
        private final java.lang.String instanceSource;
        private final java.lang.String instanceType;
        private final java.lang.String networkType;
        private final java.lang.Number port;
        private final java.lang.Number queryTimeout;
        private final java.lang.String safeRule;
        private final java.lang.Number tid;
        private final java.lang.String dataLinkName;
        private final java.lang.Number ddlOnline;
        private final java.lang.String ecsInstanceId;
        private final java.lang.String ecsRegion;
        private final java.lang.String sid;
        private final java.lang.Number useDsql;
        private final java.lang.String vpcId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.databasePassword = software.amazon.jsii.Kernel.get(this, "databasePassword", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.databaseUser = software.amazon.jsii.Kernel.get(this, "databaseUser", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dbaUid = software.amazon.jsii.Kernel.get(this, "dbaUid", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.envType = software.amazon.jsii.Kernel.get(this, "envType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.exportTimeout = software.amazon.jsii.Kernel.get(this, "exportTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.host = software.amazon.jsii.Kernel.get(this, "host", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.instanceAlias = software.amazon.jsii.Kernel.get(this, "instanceAlias", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.instanceSource = software.amazon.jsii.Kernel.get(this, "instanceSource", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.networkType = software.amazon.jsii.Kernel.get(this, "networkType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.queryTimeout = software.amazon.jsii.Kernel.get(this, "queryTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.safeRule = software.amazon.jsii.Kernel.get(this, "safeRule", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.tid = software.amazon.jsii.Kernel.get(this, "tid", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.dataLinkName = software.amazon.jsii.Kernel.get(this, "dataLinkName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.ddlOnline = software.amazon.jsii.Kernel.get(this, "ddlOnline", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.ecsInstanceId = software.amazon.jsii.Kernel.get(this, "ecsInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.ecsRegion = software.amazon.jsii.Kernel.get(this, "ecsRegion", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.sid = software.amazon.jsii.Kernel.get(this, "sid", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.useDsql = software.amazon.jsii.Kernel.get(this, "useDsql", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String databasePassword, final java.lang.String databaseUser, final java.lang.Number dbaUid, final java.lang.String envType, final java.lang.Number exportTimeout, final java.lang.String host, final java.lang.String instanceAlias, final java.lang.String instanceSource, final java.lang.String instanceType, final java.lang.String networkType, final java.lang.Number port, final java.lang.Number queryTimeout, final java.lang.String safeRule, final java.lang.Number tid, final java.lang.String dataLinkName, final java.lang.Number ddlOnline, final java.lang.String ecsInstanceId, final java.lang.String ecsRegion, final java.lang.String sid, final java.lang.Number useDsql, final java.lang.String vpcId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.databasePassword = java.util.Objects.requireNonNull(databasePassword, "databasePassword is required");
            this.databaseUser = java.util.Objects.requireNonNull(databaseUser, "databaseUser is required");
            this.dbaUid = java.util.Objects.requireNonNull(dbaUid, "dbaUid is required");
            this.envType = java.util.Objects.requireNonNull(envType, "envType is required");
            this.exportTimeout = java.util.Objects.requireNonNull(exportTimeout, "exportTimeout is required");
            this.host = java.util.Objects.requireNonNull(host, "host is required");
            this.instanceAlias = java.util.Objects.requireNonNull(instanceAlias, "instanceAlias is required");
            this.instanceSource = java.util.Objects.requireNonNull(instanceSource, "instanceSource is required");
            this.instanceType = java.util.Objects.requireNonNull(instanceType, "instanceType is required");
            this.networkType = java.util.Objects.requireNonNull(networkType, "networkType is required");
            this.port = java.util.Objects.requireNonNull(port, "port is required");
            this.queryTimeout = java.util.Objects.requireNonNull(queryTimeout, "queryTimeout is required");
            this.safeRule = java.util.Objects.requireNonNull(safeRule, "safeRule is required");
            this.tid = java.util.Objects.requireNonNull(tid, "tid is required");
            this.dataLinkName = dataLinkName;
            this.ddlOnline = ddlOnline;
            this.ecsInstanceId = ecsInstanceId;
            this.ecsRegion = ecsRegion;
            this.sid = sid;
            this.useDsql = useDsql;
            this.vpcId = vpcId;
        }

        @Override
        public final java.lang.String getDatabasePassword() {
            return this.databasePassword;
        }

        @Override
        public final java.lang.String getDatabaseUser() {
            return this.databaseUser;
        }

        @Override
        public final java.lang.Number getDbaUid() {
            return this.dbaUid;
        }

        @Override
        public final java.lang.String getEnvType() {
            return this.envType;
        }

        @Override
        public final java.lang.Number getExportTimeout() {
            return this.exportTimeout;
        }

        @Override
        public final java.lang.String getHost() {
            return this.host;
        }

        @Override
        public final java.lang.String getInstanceAlias() {
            return this.instanceAlias;
        }

        @Override
        public final java.lang.String getInstanceSource() {
            return this.instanceSource;
        }

        @Override
        public final java.lang.String getInstanceType() {
            return this.instanceType;
        }

        @Override
        public final java.lang.String getNetworkType() {
            return this.networkType;
        }

        @Override
        public final java.lang.Number getPort() {
            return this.port;
        }

        @Override
        public final java.lang.Number getQueryTimeout() {
            return this.queryTimeout;
        }

        @Override
        public final java.lang.String getSafeRule() {
            return this.safeRule;
        }

        @Override
        public final java.lang.Number getTid() {
            return this.tid;
        }

        @Override
        public final java.lang.String getDataLinkName() {
            return this.dataLinkName;
        }

        @Override
        public final java.lang.Number getDdlOnline() {
            return this.ddlOnline;
        }

        @Override
        public final java.lang.String getEcsInstanceId() {
            return this.ecsInstanceId;
        }

        @Override
        public final java.lang.String getEcsRegion() {
            return this.ecsRegion;
        }

        @Override
        public final java.lang.String getSid() {
            return this.sid;
        }

        @Override
        public final java.lang.Number getUseDsql() {
            return this.useDsql;
        }

        @Override
        public final java.lang.String getVpcId() {
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
            data.set("tid", om.valueToTree(this.getTid()));
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
            if (this.getUseDsql() != null) {
                data.set("useDsql", om.valueToTree(this.getUseDsql()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dms.InstanceProps"));
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
            if (!tid.equals(that.tid)) return false;
            if (this.dataLinkName != null ? !this.dataLinkName.equals(that.dataLinkName) : that.dataLinkName != null) return false;
            if (this.ddlOnline != null ? !this.ddlOnline.equals(that.ddlOnline) : that.ddlOnline != null) return false;
            if (this.ecsInstanceId != null ? !this.ecsInstanceId.equals(that.ecsInstanceId) : that.ecsInstanceId != null) return false;
            if (this.ecsRegion != null ? !this.ecsRegion.equals(that.ecsRegion) : that.ecsRegion != null) return false;
            if (this.sid != null ? !this.sid.equals(that.sid) : that.sid != null) return false;
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
            result = 31 * result + (this.tid.hashCode());
            result = 31 * result + (this.dataLinkName != null ? this.dataLinkName.hashCode() : 0);
            result = 31 * result + (this.ddlOnline != null ? this.ddlOnline.hashCode() : 0);
            result = 31 * result + (this.ecsInstanceId != null ? this.ecsInstanceId.hashCode() : 0);
            result = 31 * result + (this.ecsRegion != null ? this.ecsRegion.hashCode() : 0);
            result = 31 * result + (this.sid != null ? this.sid.hashCode() : 0);
            result = 31 * result + (this.useDsql != null ? this.useDsql.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            return result;
        }
    }
}
