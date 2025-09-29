package com.aliyun.ros.cdk.clickhouse;

/**
 * Properties for defining a <code>SynDb</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-syndb
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:22.036Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.clickhouse.$Module.class, fqn = "@alicloud/ros-cdk-clickhouse.SynDbProps")
@software.amazon.jsii.Jsii.Proxy(SynDbProps.Jsii$Proxy.class)
public interface SynDbProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property ckPassword: The password of the database account.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCkPassword();

    /**
     * Property ckUserName: The account of the clickhouse database.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCkUserName();

    /**
     * Property dbClusterId: Clickhouse cluster id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbClusterId();

    /**
     * Property rdsId: The instance id of RDS.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRdsId();

    /**
     * Property rdsPassword: The password of the RDS database account.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRdsPassword();

    /**
     * Property rdsUserName: The account of the RDS database.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRdsUserName();

    /**
     * Property skipUnsupported: Skip unsupported table or not.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSkipUnsupported();

    /**
     * Property synDbTables: The tables to syn.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSynDbTables();

    /**
     * Property clickhousePort: The port of clickhouse id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClickhousePort() {
        return null;
    }

    /**
     * Property limitUpper: The maximum number of rows to sync per second.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLimitUpper() {
        return null;
    }

    /**
     * Property rdsPort: The port of rds.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRdsPort() {
        return null;
    }

    /**
     * Property rdsVpcId: The vpc of rds.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRdsVpcId() {
        return null;
    }

    /**
     * Property rdsVpcUrl: Intranet address of ApsaraDB for RDS.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRdsVpcUrl() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SynDbProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SynDbProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SynDbProps> {
        java.lang.Object ckPassword;
        java.lang.Object ckUserName;
        java.lang.Object dbClusterId;
        java.lang.Object rdsId;
        java.lang.Object rdsPassword;
        java.lang.Object rdsUserName;
        java.lang.Object skipUnsupported;
        java.lang.Object synDbTables;
        java.lang.Object clickhousePort;
        java.lang.Object limitUpper;
        java.lang.Object rdsPort;
        java.lang.Object rdsVpcId;
        java.lang.Object rdsVpcUrl;

        /**
         * Sets the value of {@link SynDbProps#getCkPassword}
         * @param ckPassword Property ckPassword: The password of the database account. This parameter is required.
         * @return {@code this}
         */
        public Builder ckPassword(java.lang.String ckPassword) {
            this.ckPassword = ckPassword;
            return this;
        }

        /**
         * Sets the value of {@link SynDbProps#getCkPassword}
         * @param ckPassword Property ckPassword: The password of the database account. This parameter is required.
         * @return {@code this}
         */
        public Builder ckPassword(com.aliyun.ros.cdk.core.IResolvable ckPassword) {
            this.ckPassword = ckPassword;
            return this;
        }

        /**
         * Sets the value of {@link SynDbProps#getCkUserName}
         * @param ckUserName Property ckUserName: The account of the clickhouse database. This parameter is required.
         * @return {@code this}
         */
        public Builder ckUserName(java.lang.String ckUserName) {
            this.ckUserName = ckUserName;
            return this;
        }

        /**
         * Sets the value of {@link SynDbProps#getCkUserName}
         * @param ckUserName Property ckUserName: The account of the clickhouse database. This parameter is required.
         * @return {@code this}
         */
        public Builder ckUserName(com.aliyun.ros.cdk.core.IResolvable ckUserName) {
            this.ckUserName = ckUserName;
            return this;
        }

        /**
         * Sets the value of {@link SynDbProps#getDbClusterId}
         * @param dbClusterId Property dbClusterId: Clickhouse cluster id. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(java.lang.String dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link SynDbProps#getDbClusterId}
         * @param dbClusterId Property dbClusterId: Clickhouse cluster id. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link SynDbProps#getRdsId}
         * @param rdsId Property rdsId: The instance id of RDS. This parameter is required.
         * @return {@code this}
         */
        public Builder rdsId(java.lang.String rdsId) {
            this.rdsId = rdsId;
            return this;
        }

        /**
         * Sets the value of {@link SynDbProps#getRdsId}
         * @param rdsId Property rdsId: The instance id of RDS. This parameter is required.
         * @return {@code this}
         */
        public Builder rdsId(com.aliyun.ros.cdk.core.IResolvable rdsId) {
            this.rdsId = rdsId;
            return this;
        }

        /**
         * Sets the value of {@link SynDbProps#getRdsPassword}
         * @param rdsPassword Property rdsPassword: The password of the RDS database account. This parameter is required.
         * @return {@code this}
         */
        public Builder rdsPassword(java.lang.String rdsPassword) {
            this.rdsPassword = rdsPassword;
            return this;
        }

        /**
         * Sets the value of {@link SynDbProps#getRdsPassword}
         * @param rdsPassword Property rdsPassword: The password of the RDS database account. This parameter is required.
         * @return {@code this}
         */
        public Builder rdsPassword(com.aliyun.ros.cdk.core.IResolvable rdsPassword) {
            this.rdsPassword = rdsPassword;
            return this;
        }

        /**
         * Sets the value of {@link SynDbProps#getRdsUserName}
         * @param rdsUserName Property rdsUserName: The account of the RDS database. This parameter is required.
         * @return {@code this}
         */
        public Builder rdsUserName(java.lang.String rdsUserName) {
            this.rdsUserName = rdsUserName;
            return this;
        }

        /**
         * Sets the value of {@link SynDbProps#getRdsUserName}
         * @param rdsUserName Property rdsUserName: The account of the RDS database. This parameter is required.
         * @return {@code this}
         */
        public Builder rdsUserName(com.aliyun.ros.cdk.core.IResolvable rdsUserName) {
            this.rdsUserName = rdsUserName;
            return this;
        }

        /**
         * Sets the value of {@link SynDbProps#getSkipUnsupported}
         * @param skipUnsupported Property skipUnsupported: Skip unsupported table or not. This parameter is required.
         * @return {@code this}
         */
        public Builder skipUnsupported(java.lang.Boolean skipUnsupported) {
            this.skipUnsupported = skipUnsupported;
            return this;
        }

        /**
         * Sets the value of {@link SynDbProps#getSkipUnsupported}
         * @param skipUnsupported Property skipUnsupported: Skip unsupported table or not. This parameter is required.
         * @return {@code this}
         */
        public Builder skipUnsupported(com.aliyun.ros.cdk.core.IResolvable skipUnsupported) {
            this.skipUnsupported = skipUnsupported;
            return this;
        }

        /**
         * Sets the value of {@link SynDbProps#getSynDbTables}
         * @param synDbTables Property synDbTables: The tables to syn. This parameter is required.
         * @return {@code this}
         */
        public Builder synDbTables(com.aliyun.ros.cdk.core.IResolvable synDbTables) {
            this.synDbTables = synDbTables;
            return this;
        }

        /**
         * Sets the value of {@link SynDbProps#getSynDbTables}
         * @param synDbTables Property synDbTables: The tables to syn. This parameter is required.
         * @return {@code this}
         */
        public Builder synDbTables(java.util.List<? extends java.lang.Object> synDbTables) {
            this.synDbTables = synDbTables;
            return this;
        }

        /**
         * Sets the value of {@link SynDbProps#getClickhousePort}
         * @param clickhousePort Property clickhousePort: The port of clickhouse id.
         * @return {@code this}
         */
        public Builder clickhousePort(java.lang.Number clickhousePort) {
            this.clickhousePort = clickhousePort;
            return this;
        }

        /**
         * Sets the value of {@link SynDbProps#getClickhousePort}
         * @param clickhousePort Property clickhousePort: The port of clickhouse id.
         * @return {@code this}
         */
        public Builder clickhousePort(com.aliyun.ros.cdk.core.IResolvable clickhousePort) {
            this.clickhousePort = clickhousePort;
            return this;
        }

        /**
         * Sets the value of {@link SynDbProps#getLimitUpper}
         * @param limitUpper Property limitUpper: The maximum number of rows to sync per second.
         * @return {@code this}
         */
        public Builder limitUpper(java.lang.Number limitUpper) {
            this.limitUpper = limitUpper;
            return this;
        }

        /**
         * Sets the value of {@link SynDbProps#getLimitUpper}
         * @param limitUpper Property limitUpper: The maximum number of rows to sync per second.
         * @return {@code this}
         */
        public Builder limitUpper(com.aliyun.ros.cdk.core.IResolvable limitUpper) {
            this.limitUpper = limitUpper;
            return this;
        }

        /**
         * Sets the value of {@link SynDbProps#getRdsPort}
         * @param rdsPort Property rdsPort: The port of rds.
         * @return {@code this}
         */
        public Builder rdsPort(java.lang.Number rdsPort) {
            this.rdsPort = rdsPort;
            return this;
        }

        /**
         * Sets the value of {@link SynDbProps#getRdsPort}
         * @param rdsPort Property rdsPort: The port of rds.
         * @return {@code this}
         */
        public Builder rdsPort(com.aliyun.ros.cdk.core.IResolvable rdsPort) {
            this.rdsPort = rdsPort;
            return this;
        }

        /**
         * Sets the value of {@link SynDbProps#getRdsVpcId}
         * @param rdsVpcId Property rdsVpcId: The vpc of rds.
         * @return {@code this}
         */
        public Builder rdsVpcId(java.lang.String rdsVpcId) {
            this.rdsVpcId = rdsVpcId;
            return this;
        }

        /**
         * Sets the value of {@link SynDbProps#getRdsVpcId}
         * @param rdsVpcId Property rdsVpcId: The vpc of rds.
         * @return {@code this}
         */
        public Builder rdsVpcId(com.aliyun.ros.cdk.core.IResolvable rdsVpcId) {
            this.rdsVpcId = rdsVpcId;
            return this;
        }

        /**
         * Sets the value of {@link SynDbProps#getRdsVpcUrl}
         * @param rdsVpcUrl Property rdsVpcUrl: Intranet address of ApsaraDB for RDS.
         * @return {@code this}
         */
        public Builder rdsVpcUrl(java.lang.String rdsVpcUrl) {
            this.rdsVpcUrl = rdsVpcUrl;
            return this;
        }

        /**
         * Sets the value of {@link SynDbProps#getRdsVpcUrl}
         * @param rdsVpcUrl Property rdsVpcUrl: Intranet address of ApsaraDB for RDS.
         * @return {@code this}
         */
        public Builder rdsVpcUrl(com.aliyun.ros.cdk.core.IResolvable rdsVpcUrl) {
            this.rdsVpcUrl = rdsVpcUrl;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SynDbProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SynDbProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SynDbProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SynDbProps {
        private final java.lang.Object ckPassword;
        private final java.lang.Object ckUserName;
        private final java.lang.Object dbClusterId;
        private final java.lang.Object rdsId;
        private final java.lang.Object rdsPassword;
        private final java.lang.Object rdsUserName;
        private final java.lang.Object skipUnsupported;
        private final java.lang.Object synDbTables;
        private final java.lang.Object clickhousePort;
        private final java.lang.Object limitUpper;
        private final java.lang.Object rdsPort;
        private final java.lang.Object rdsVpcId;
        private final java.lang.Object rdsVpcUrl;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.ckPassword = software.amazon.jsii.Kernel.get(this, "ckPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ckUserName = software.amazon.jsii.Kernel.get(this, "ckUserName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbClusterId = software.amazon.jsii.Kernel.get(this, "dbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rdsId = software.amazon.jsii.Kernel.get(this, "rdsId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rdsPassword = software.amazon.jsii.Kernel.get(this, "rdsPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rdsUserName = software.amazon.jsii.Kernel.get(this, "rdsUserName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.skipUnsupported = software.amazon.jsii.Kernel.get(this, "skipUnsupported", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.synDbTables = software.amazon.jsii.Kernel.get(this, "synDbTables", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clickhousePort = software.amazon.jsii.Kernel.get(this, "clickhousePort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.limitUpper = software.amazon.jsii.Kernel.get(this, "limitUpper", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rdsPort = software.amazon.jsii.Kernel.get(this, "rdsPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rdsVpcId = software.amazon.jsii.Kernel.get(this, "rdsVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rdsVpcUrl = software.amazon.jsii.Kernel.get(this, "rdsVpcUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.ckPassword = java.util.Objects.requireNonNull(builder.ckPassword, "ckPassword is required");
            this.ckUserName = java.util.Objects.requireNonNull(builder.ckUserName, "ckUserName is required");
            this.dbClusterId = java.util.Objects.requireNonNull(builder.dbClusterId, "dbClusterId is required");
            this.rdsId = java.util.Objects.requireNonNull(builder.rdsId, "rdsId is required");
            this.rdsPassword = java.util.Objects.requireNonNull(builder.rdsPassword, "rdsPassword is required");
            this.rdsUserName = java.util.Objects.requireNonNull(builder.rdsUserName, "rdsUserName is required");
            this.skipUnsupported = java.util.Objects.requireNonNull(builder.skipUnsupported, "skipUnsupported is required");
            this.synDbTables = java.util.Objects.requireNonNull(builder.synDbTables, "synDbTables is required");
            this.clickhousePort = builder.clickhousePort;
            this.limitUpper = builder.limitUpper;
            this.rdsPort = builder.rdsPort;
            this.rdsVpcId = builder.rdsVpcId;
            this.rdsVpcUrl = builder.rdsVpcUrl;
        }

        @Override
        public final java.lang.Object getCkPassword() {
            return this.ckPassword;
        }

        @Override
        public final java.lang.Object getCkUserName() {
            return this.ckUserName;
        }

        @Override
        public final java.lang.Object getDbClusterId() {
            return this.dbClusterId;
        }

        @Override
        public final java.lang.Object getRdsId() {
            return this.rdsId;
        }

        @Override
        public final java.lang.Object getRdsPassword() {
            return this.rdsPassword;
        }

        @Override
        public final java.lang.Object getRdsUserName() {
            return this.rdsUserName;
        }

        @Override
        public final java.lang.Object getSkipUnsupported() {
            return this.skipUnsupported;
        }

        @Override
        public final java.lang.Object getSynDbTables() {
            return this.synDbTables;
        }

        @Override
        public final java.lang.Object getClickhousePort() {
            return this.clickhousePort;
        }

        @Override
        public final java.lang.Object getLimitUpper() {
            return this.limitUpper;
        }

        @Override
        public final java.lang.Object getRdsPort() {
            return this.rdsPort;
        }

        @Override
        public final java.lang.Object getRdsVpcId() {
            return this.rdsVpcId;
        }

        @Override
        public final java.lang.Object getRdsVpcUrl() {
            return this.rdsVpcUrl;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("ckPassword", om.valueToTree(this.getCkPassword()));
            data.set("ckUserName", om.valueToTree(this.getCkUserName()));
            data.set("dbClusterId", om.valueToTree(this.getDbClusterId()));
            data.set("rdsId", om.valueToTree(this.getRdsId()));
            data.set("rdsPassword", om.valueToTree(this.getRdsPassword()));
            data.set("rdsUserName", om.valueToTree(this.getRdsUserName()));
            data.set("skipUnsupported", om.valueToTree(this.getSkipUnsupported()));
            data.set("synDbTables", om.valueToTree(this.getSynDbTables()));
            if (this.getClickhousePort() != null) {
                data.set("clickhousePort", om.valueToTree(this.getClickhousePort()));
            }
            if (this.getLimitUpper() != null) {
                data.set("limitUpper", om.valueToTree(this.getLimitUpper()));
            }
            if (this.getRdsPort() != null) {
                data.set("rdsPort", om.valueToTree(this.getRdsPort()));
            }
            if (this.getRdsVpcId() != null) {
                data.set("rdsVpcId", om.valueToTree(this.getRdsVpcId()));
            }
            if (this.getRdsVpcUrl() != null) {
                data.set("rdsVpcUrl", om.valueToTree(this.getRdsVpcUrl()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-clickhouse.SynDbProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SynDbProps.Jsii$Proxy that = (SynDbProps.Jsii$Proxy) o;

            if (!ckPassword.equals(that.ckPassword)) return false;
            if (!ckUserName.equals(that.ckUserName)) return false;
            if (!dbClusterId.equals(that.dbClusterId)) return false;
            if (!rdsId.equals(that.rdsId)) return false;
            if (!rdsPassword.equals(that.rdsPassword)) return false;
            if (!rdsUserName.equals(that.rdsUserName)) return false;
            if (!skipUnsupported.equals(that.skipUnsupported)) return false;
            if (!synDbTables.equals(that.synDbTables)) return false;
            if (this.clickhousePort != null ? !this.clickhousePort.equals(that.clickhousePort) : that.clickhousePort != null) return false;
            if (this.limitUpper != null ? !this.limitUpper.equals(that.limitUpper) : that.limitUpper != null) return false;
            if (this.rdsPort != null ? !this.rdsPort.equals(that.rdsPort) : that.rdsPort != null) return false;
            if (this.rdsVpcId != null ? !this.rdsVpcId.equals(that.rdsVpcId) : that.rdsVpcId != null) return false;
            return this.rdsVpcUrl != null ? this.rdsVpcUrl.equals(that.rdsVpcUrl) : that.rdsVpcUrl == null;
        }

        @Override
        public final int hashCode() {
            int result = this.ckPassword.hashCode();
            result = 31 * result + (this.ckUserName.hashCode());
            result = 31 * result + (this.dbClusterId.hashCode());
            result = 31 * result + (this.rdsId.hashCode());
            result = 31 * result + (this.rdsPassword.hashCode());
            result = 31 * result + (this.rdsUserName.hashCode());
            result = 31 * result + (this.skipUnsupported.hashCode());
            result = 31 * result + (this.synDbTables.hashCode());
            result = 31 * result + (this.clickhousePort != null ? this.clickhousePort.hashCode() : 0);
            result = 31 * result + (this.limitUpper != null ? this.limitUpper.hashCode() : 0);
            result = 31 * result + (this.rdsPort != null ? this.rdsPort.hashCode() : 0);
            result = 31 * result + (this.rdsVpcId != null ? this.rdsVpcId.hashCode() : 0);
            result = 31 * result + (this.rdsVpcUrl != null ? this.rdsVpcUrl.hashCode() : 0);
            return result;
        }
    }
}
