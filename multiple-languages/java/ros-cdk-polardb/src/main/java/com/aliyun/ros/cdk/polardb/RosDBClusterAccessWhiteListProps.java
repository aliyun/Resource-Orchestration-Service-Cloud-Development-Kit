package com.aliyun.ros.cdk.polardb;

/**
 * Properties for defining a <code>RosDBClusterAccessWhiteList</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusteraccesswhitelist
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-03-01T09:16:53.812Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.RosDBClusterAccessWhiteListProps")
@software.amazon.jsii.Jsii.Proxy(RosDBClusterAccessWhiteListProps.Jsii$Proxy.class)
public interface RosDBClusterAccessWhiteListProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbClusterId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSecurityIps();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbClusterIpArrayName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDBClusterAccessWhiteListProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDBClusterAccessWhiteListProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDBClusterAccessWhiteListProps> {
        java.lang.Object dbClusterId;
        java.lang.Object securityIps;
        java.lang.Object dbClusterIpArrayName;

        /**
         * Sets the value of {@link RosDBClusterAccessWhiteListProps#getDbClusterId}
         * @param dbClusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(java.lang.String dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterAccessWhiteListProps#getDbClusterId}
         * @param dbClusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterAccessWhiteListProps#getSecurityIps}
         * @param securityIps the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder securityIps(java.lang.String securityIps) {
            this.securityIps = securityIps;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterAccessWhiteListProps#getSecurityIps}
         * @param securityIps the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder securityIps(com.aliyun.ros.cdk.core.IResolvable securityIps) {
            this.securityIps = securityIps;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterAccessWhiteListProps#getDbClusterIpArrayName}
         * @param dbClusterIpArrayName the value to be set.
         * @return {@code this}
         */
        public Builder dbClusterIpArrayName(java.lang.String dbClusterIpArrayName) {
            this.dbClusterIpArrayName = dbClusterIpArrayName;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterAccessWhiteListProps#getDbClusterIpArrayName}
         * @param dbClusterIpArrayName the value to be set.
         * @return {@code this}
         */
        public Builder dbClusterIpArrayName(com.aliyun.ros.cdk.core.IResolvable dbClusterIpArrayName) {
            this.dbClusterIpArrayName = dbClusterIpArrayName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDBClusterAccessWhiteListProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDBClusterAccessWhiteListProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDBClusterAccessWhiteListProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDBClusterAccessWhiteListProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-polardb.RosDBClusterAccessWhiteListProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDBClusterAccessWhiteListProps.Jsii$Proxy that = (RosDBClusterAccessWhiteListProps.Jsii$Proxy) o;

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
