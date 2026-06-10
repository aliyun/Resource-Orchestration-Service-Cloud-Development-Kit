package com.aliyun.ros.cdk.clickhouse;

/**
 * Properties for defining a <code>EnterpriseDBClusterSecurityIP</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclustersecurityip
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:46:45.037Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.clickhouse.$Module.class, fqn = "@alicloud/ros-cdk-clickhouse.EnterpriseDBClusterSecurityIPProps")
@software.amazon.jsii.Jsii.Proxy(EnterpriseDBClusterSecurityIPProps.Jsii$Proxy.class)
public interface EnterpriseDBClusterSecurityIPProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dbInstanceId: The cluster ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceId();

    /**
     * Property groupName: The name of the whitelist whose settings you want to modify.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGroupName();

    /**
     * Property securityIpList: The IP addresses and CIDR blocks in the whitelist.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSecurityIpList();

    /**
     * @return a {@link Builder} of {@link EnterpriseDBClusterSecurityIPProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link EnterpriseDBClusterSecurityIPProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<EnterpriseDBClusterSecurityIPProps> {
        java.lang.Object dbInstanceId;
        java.lang.Object groupName;
        java.lang.Object securityIpList;

        /**
         * Sets the value of {@link EnterpriseDBClusterSecurityIPProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: The cluster ID. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(java.lang.String dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link EnterpriseDBClusterSecurityIPProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: The cluster ID. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link EnterpriseDBClusterSecurityIPProps#getGroupName}
         * @param groupName Property groupName: The name of the whitelist whose settings you want to modify. This parameter is required.
         * @return {@code this}
         */
        public Builder groupName(java.lang.String groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link EnterpriseDBClusterSecurityIPProps#getGroupName}
         * @param groupName Property groupName: The name of the whitelist whose settings you want to modify. This parameter is required.
         * @return {@code this}
         */
        public Builder groupName(com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link EnterpriseDBClusterSecurityIPProps#getSecurityIpList}
         * @param securityIpList Property securityIpList: The IP addresses and CIDR blocks in the whitelist. This parameter is required.
         * @return {@code this}
         */
        public Builder securityIpList(java.lang.String securityIpList) {
            this.securityIpList = securityIpList;
            return this;
        }

        /**
         * Sets the value of {@link EnterpriseDBClusterSecurityIPProps#getSecurityIpList}
         * @param securityIpList Property securityIpList: The IP addresses and CIDR blocks in the whitelist. This parameter is required.
         * @return {@code this}
         */
        public Builder securityIpList(com.aliyun.ros.cdk.core.IResolvable securityIpList) {
            this.securityIpList = securityIpList;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link EnterpriseDBClusterSecurityIPProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public EnterpriseDBClusterSecurityIPProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link EnterpriseDBClusterSecurityIPProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EnterpriseDBClusterSecurityIPProps {
        private final java.lang.Object dbInstanceId;
        private final java.lang.Object groupName;
        private final java.lang.Object securityIpList;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbInstanceId = software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupName = software.amazon.jsii.Kernel.get(this, "groupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityIpList = software.amazon.jsii.Kernel.get(this, "securityIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbInstanceId = java.util.Objects.requireNonNull(builder.dbInstanceId, "dbInstanceId is required");
            this.groupName = java.util.Objects.requireNonNull(builder.groupName, "groupName is required");
            this.securityIpList = java.util.Objects.requireNonNull(builder.securityIpList, "securityIpList is required");
        }

        @Override
        public final java.lang.Object getDbInstanceId() {
            return this.dbInstanceId;
        }

        @Override
        public final java.lang.Object getGroupName() {
            return this.groupName;
        }

        @Override
        public final java.lang.Object getSecurityIpList() {
            return this.securityIpList;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dbInstanceId", om.valueToTree(this.getDbInstanceId()));
            data.set("groupName", om.valueToTree(this.getGroupName()));
            data.set("securityIpList", om.valueToTree(this.getSecurityIpList()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-clickhouse.EnterpriseDBClusterSecurityIPProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            EnterpriseDBClusterSecurityIPProps.Jsii$Proxy that = (EnterpriseDBClusterSecurityIPProps.Jsii$Proxy) o;

            if (!dbInstanceId.equals(that.dbInstanceId)) return false;
            if (!groupName.equals(that.groupName)) return false;
            return this.securityIpList.equals(that.securityIpList);
        }

        @Override
        public final int hashCode() {
            int result = this.dbInstanceId.hashCode();
            result = 31 * result + (this.groupName.hashCode());
            result = 31 * result + (this.securityIpList.hashCode());
            return result;
        }
    }
}
