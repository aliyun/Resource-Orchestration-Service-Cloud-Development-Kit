package com.aliyun.ros.cdk.polardb;

/**
 * Properties for defining a <code>DBClusterAccessWhiteList</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusteraccesswhitelist
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:13.005Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.DBClusterAccessWhiteListProps")
@software.amazon.jsii.Jsii.Proxy(DBClusterAccessWhiteListProps.Jsii$Proxy.class)
public interface DBClusterAccessWhiteListProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbClusterId();

    /**
     * Property securityIps: The IP addresses to be added to the IP address whitelist group to be modified.
     * <p>
     * Each
     * whitelist group can contain a maximum of 1,000 IP addresses. Separate multiple IP
     * addresses with a comma (,). The following two formats are supported:
     * IP address: for example, 10.23.12.24.
     * Classless inter-domain routing (CIDR) block: for example, 10.23.12.24/24, where the
     * suffix /24 indicates the number of bits for the prefix of the IP address. The suffix
     * ranges from 1 to 32.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSecurityIps();

    /**
     * Property dbClusterIpArrayName: The name of the IP address whitelist group.
     * <p>
     * If you do not specify this parameter,
     * the Default whitelist group is modified by default.
     * Note You can create up to 50 whitelist groups for an ApsaraDB for POLARDB cluster.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbClusterIpArrayName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DBClusterAccessWhiteListProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DBClusterAccessWhiteListProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DBClusterAccessWhiteListProps> {
        java.lang.Object dbClusterId;
        java.lang.Object securityIps;
        java.lang.Object dbClusterIpArrayName;

        /**
         * Sets the value of {@link DBClusterAccessWhiteListProps#getDbClusterId}
         * @param dbClusterId Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(java.lang.String dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterAccessWhiteListProps#getDbClusterId}
         * @param dbClusterId Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterAccessWhiteListProps#getSecurityIps}
         * @param securityIps Property securityIps: The IP addresses to be added to the IP address whitelist group to be modified. This parameter is required.
         *                    Each
         *                    whitelist group can contain a maximum of 1,000 IP addresses. Separate multiple IP
         *                    addresses with a comma (,). The following two formats are supported:
         *                    IP address: for example, 10.23.12.24.
         *                    Classless inter-domain routing (CIDR) block: for example, 10.23.12.24/24, where the
         *                    suffix /24 indicates the number of bits for the prefix of the IP address. The suffix
         *                    ranges from 1 to 32.
         * @return {@code this}
         */
        public Builder securityIps(java.lang.String securityIps) {
            this.securityIps = securityIps;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterAccessWhiteListProps#getSecurityIps}
         * @param securityIps Property securityIps: The IP addresses to be added to the IP address whitelist group to be modified. This parameter is required.
         *                    Each
         *                    whitelist group can contain a maximum of 1,000 IP addresses. Separate multiple IP
         *                    addresses with a comma (,). The following two formats are supported:
         *                    IP address: for example, 10.23.12.24.
         *                    Classless inter-domain routing (CIDR) block: for example, 10.23.12.24/24, where the
         *                    suffix /24 indicates the number of bits for the prefix of the IP address. The suffix
         *                    ranges from 1 to 32.
         * @return {@code this}
         */
        public Builder securityIps(com.aliyun.ros.cdk.core.IResolvable securityIps) {
            this.securityIps = securityIps;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterAccessWhiteListProps#getDbClusterIpArrayName}
         * @param dbClusterIpArrayName Property dbClusterIpArrayName: The name of the IP address whitelist group.
         *                             If you do not specify this parameter,
         *                             the Default whitelist group is modified by default.
         *                             Note You can create up to 50 whitelist groups for an ApsaraDB for POLARDB cluster.
         * @return {@code this}
         */
        public Builder dbClusterIpArrayName(java.lang.String dbClusterIpArrayName) {
            this.dbClusterIpArrayName = dbClusterIpArrayName;
            return this;
        }

        /**
         * Sets the value of {@link DBClusterAccessWhiteListProps#getDbClusterIpArrayName}
         * @param dbClusterIpArrayName Property dbClusterIpArrayName: The name of the IP address whitelist group.
         *                             If you do not specify this parameter,
         *                             the Default whitelist group is modified by default.
         *                             Note You can create up to 50 whitelist groups for an ApsaraDB for POLARDB cluster.
         * @return {@code this}
         */
        public Builder dbClusterIpArrayName(com.aliyun.ros.cdk.core.IResolvable dbClusterIpArrayName) {
            this.dbClusterIpArrayName = dbClusterIpArrayName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DBClusterAccessWhiteListProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DBClusterAccessWhiteListProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DBClusterAccessWhiteListProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DBClusterAccessWhiteListProps {
        private final java.lang.Object dbClusterId;
        private final java.lang.Object securityIps;
        private final java.lang.Object dbClusterIpArrayName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbClusterId = software.amazon.jsii.Kernel.get(this, "dbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityIps = software.amazon.jsii.Kernel.get(this, "securityIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbClusterIpArrayName = software.amazon.jsii.Kernel.get(this, "dbClusterIpArrayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbClusterId = java.util.Objects.requireNonNull(builder.dbClusterId, "dbClusterId is required");
            this.securityIps = java.util.Objects.requireNonNull(builder.securityIps, "securityIps is required");
            this.dbClusterIpArrayName = builder.dbClusterIpArrayName;
        }

        @Override
        public final java.lang.Object getDbClusterId() {
            return this.dbClusterId;
        }

        @Override
        public final java.lang.Object getSecurityIps() {
            return this.securityIps;
        }

        @Override
        public final java.lang.Object getDbClusterIpArrayName() {
            return this.dbClusterIpArrayName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dbClusterId", om.valueToTree(this.getDbClusterId()));
            data.set("securityIps", om.valueToTree(this.getSecurityIps()));
            if (this.getDbClusterIpArrayName() != null) {
                data.set("dbClusterIpArrayName", om.valueToTree(this.getDbClusterIpArrayName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-polardb.DBClusterAccessWhiteListProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DBClusterAccessWhiteListProps.Jsii$Proxy that = (DBClusterAccessWhiteListProps.Jsii$Proxy) o;

            if (!dbClusterId.equals(that.dbClusterId)) return false;
            if (!securityIps.equals(that.securityIps)) return false;
            return this.dbClusterIpArrayName != null ? this.dbClusterIpArrayName.equals(that.dbClusterIpArrayName) : that.dbClusterIpArrayName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbClusterId.hashCode();
            result = 31 * result + (this.securityIps.hashCode());
            result = 31 * result + (this.dbClusterIpArrayName != null ? this.dbClusterIpArrayName.hashCode() : 0);
            return result;
        }
    }
}
