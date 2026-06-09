package com.aliyun.ros.cdk.mongodb;

/**
 * Properties for defining a <code>ShardingNetworkPrivateAddress</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardingnetworkprivateaddress
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T14:10:27.899Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mongodb.$Module.class, fqn = "@alicloud/ros-cdk-mongodb.ShardingNetworkPrivateAddressProps")
@software.amazon.jsii.Jsii.Proxy(ShardingNetworkPrivateAddressProps.Jsii$Proxy.class)
public interface ShardingNetworkPrivateAddressProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dbInstanceId: The ID of the Shard cluster instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceId();

    /**
     * Property nodeId: The ID of the Mongos node, Shard node, or ConfigServer node in the sharded cluster instance.
     * <p>
     * <blockquote>
     * <p>
     * You can call the [DescribeDBInstanceAttribute] interface to query the Mongos, Shard, and ConfigServer node ID.
     * <p>
     * </blockquote>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNodeId();

    /**
     * Property accountName: Account name.
     * <p>
     * <blockquote>
     * <p>
     * <ul>
     * <li>starts with a lowercase letter, has 4 to 16 digits in length, and consists of lowercase letters, numbers, or underscores.</li>
     * </ul>
     * <p>
     * </blockquote>
     * <p>
     * <ul>
     * <li>Only when you apply for the Shard/ConfigServer address for the first time, you need to set the account name and password. That is, all Shard nodes and ConfigServer nodes will use the account and password set when applying for the address for the first time.</li>
     * <li>The permissions of this account are fixed to read-only.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccountName() {
        return null;
    }

    /**
     * Property accountPassword: Account password.
     * <p>
     * <ul>
     * <li>The password consists of at least three of uppercase letters, lowercase letters, numbers, and special characters. The special character is '! #$%^&amp; *()_+-='</li>
     * <li>The password length is 8-32 bits.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccountPassword() {
        return null;
    }

    /**
     * Property zoneId: The ID of the zone to which the instance belongs.
     * <p>
     * <blockquote>
     * <p>
     * You can call the [describeddinstanceattribute] operation to query the zone ID of an instance.
     * <p>
     * </blockquote>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ShardingNetworkPrivateAddressProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ShardingNetworkPrivateAddressProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ShardingNetworkPrivateAddressProps> {
        java.lang.Object dbInstanceId;
        java.lang.Object nodeId;
        java.lang.Object accountName;
        java.lang.Object accountPassword;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link ShardingNetworkPrivateAddressProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: The ID of the Shard cluster instance. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(java.lang.String dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link ShardingNetworkPrivateAddressProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: The ID of the Shard cluster instance. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link ShardingNetworkPrivateAddressProps#getNodeId}
         * @param nodeId Property nodeId: The ID of the Mongos node, Shard node, or ConfigServer node in the sharded cluster instance. This parameter is required.
         *               <blockquote>
         *               <p>
         *               You can call the [DescribeDBInstanceAttribute] interface to query the Mongos, Shard, and ConfigServer node ID.
         *               <p>
         *               </blockquote>
         * @return {@code this}
         */
        public Builder nodeId(java.lang.String nodeId) {
            this.nodeId = nodeId;
            return this;
        }

        /**
         * Sets the value of {@link ShardingNetworkPrivateAddressProps#getNodeId}
         * @param nodeId Property nodeId: The ID of the Mongos node, Shard node, or ConfigServer node in the sharded cluster instance. This parameter is required.
         *               <blockquote>
         *               <p>
         *               You can call the [DescribeDBInstanceAttribute] interface to query the Mongos, Shard, and ConfigServer node ID.
         *               <p>
         *               </blockquote>
         * @return {@code this}
         */
        public Builder nodeId(com.aliyun.ros.cdk.core.IResolvable nodeId) {
            this.nodeId = nodeId;
            return this;
        }

        /**
         * Sets the value of {@link ShardingNetworkPrivateAddressProps#getAccountName}
         * @param accountName Property accountName: Account name.
         *                    <blockquote>
         *                    <p>
         *                    <ul>
         *                    <li>starts with a lowercase letter, has 4 to 16 digits in length, and consists of lowercase letters, numbers, or underscores.</li>
         *                    </ul>
         *                    <p>
         *                    </blockquote>
         *                    <p>
         *                    <ul>
         *                    <li>Only when you apply for the Shard/ConfigServer address for the first time, you need to set the account name and password. That is, all Shard nodes and ConfigServer nodes will use the account and password set when applying for the address for the first time.</li>
         *                    <li>The permissions of this account are fixed to read-only.</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder accountName(java.lang.String accountName) {
            this.accountName = accountName;
            return this;
        }

        /**
         * Sets the value of {@link ShardingNetworkPrivateAddressProps#getAccountName}
         * @param accountName Property accountName: Account name.
         *                    <blockquote>
         *                    <p>
         *                    <ul>
         *                    <li>starts with a lowercase letter, has 4 to 16 digits in length, and consists of lowercase letters, numbers, or underscores.</li>
         *                    </ul>
         *                    <p>
         *                    </blockquote>
         *                    <p>
         *                    <ul>
         *                    <li>Only when you apply for the Shard/ConfigServer address for the first time, you need to set the account name and password. That is, all Shard nodes and ConfigServer nodes will use the account and password set when applying for the address for the first time.</li>
         *                    <li>The permissions of this account are fixed to read-only.</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder accountName(com.aliyun.ros.cdk.core.IResolvable accountName) {
            this.accountName = accountName;
            return this;
        }

        /**
         * Sets the value of {@link ShardingNetworkPrivateAddressProps#getAccountPassword}
         * @param accountPassword Property accountPassword: Account password.
         *                        <ul>
         *                        <li>The password consists of at least three of uppercase letters, lowercase letters, numbers, and special characters. The special character is '! #$%^&amp; *()_+-='</li>
         *                        <li>The password length is 8-32 bits.</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder accountPassword(java.lang.String accountPassword) {
            this.accountPassword = accountPassword;
            return this;
        }

        /**
         * Sets the value of {@link ShardingNetworkPrivateAddressProps#getAccountPassword}
         * @param accountPassword Property accountPassword: Account password.
         *                        <ul>
         *                        <li>The password consists of at least three of uppercase letters, lowercase letters, numbers, and special characters. The special character is '! #$%^&amp; *()_+-='</li>
         *                        <li>The password length is 8-32 bits.</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder accountPassword(com.aliyun.ros.cdk.core.IResolvable accountPassword) {
            this.accountPassword = accountPassword;
            return this;
        }

        /**
         * Sets the value of {@link ShardingNetworkPrivateAddressProps#getZoneId}
         * @param zoneId Property zoneId: The ID of the zone to which the instance belongs.
         *               <blockquote>
         *               <p>
         *               You can call the [describeddinstanceattribute] operation to query the zone ID of an instance.
         *               <p>
         *               </blockquote>
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link ShardingNetworkPrivateAddressProps#getZoneId}
         * @param zoneId Property zoneId: The ID of the zone to which the instance belongs.
         *               <blockquote>
         *               <p>
         *               You can call the [describeddinstanceattribute] operation to query the zone ID of an instance.
         *               <p>
         *               </blockquote>
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ShardingNetworkPrivateAddressProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ShardingNetworkPrivateAddressProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ShardingNetworkPrivateAddressProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ShardingNetworkPrivateAddressProps {
        private final java.lang.Object dbInstanceId;
        private final java.lang.Object nodeId;
        private final java.lang.Object accountName;
        private final java.lang.Object accountPassword;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbInstanceId = software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nodeId = software.amazon.jsii.Kernel.get(this, "nodeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountName = software.amazon.jsii.Kernel.get(this, "accountName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountPassword = software.amazon.jsii.Kernel.get(this, "accountPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbInstanceId = java.util.Objects.requireNonNull(builder.dbInstanceId, "dbInstanceId is required");
            this.nodeId = java.util.Objects.requireNonNull(builder.nodeId, "nodeId is required");
            this.accountName = builder.accountName;
            this.accountPassword = builder.accountPassword;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getDbInstanceId() {
            return this.dbInstanceId;
        }

        @Override
        public final java.lang.Object getNodeId() {
            return this.nodeId;
        }

        @Override
        public final java.lang.Object getAccountName() {
            return this.accountName;
        }

        @Override
        public final java.lang.Object getAccountPassword() {
            return this.accountPassword;
        }

        @Override
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dbInstanceId", om.valueToTree(this.getDbInstanceId()));
            data.set("nodeId", om.valueToTree(this.getNodeId()));
            if (this.getAccountName() != null) {
                data.set("accountName", om.valueToTree(this.getAccountName()));
            }
            if (this.getAccountPassword() != null) {
                data.set("accountPassword", om.valueToTree(this.getAccountPassword()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mongodb.ShardingNetworkPrivateAddressProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ShardingNetworkPrivateAddressProps.Jsii$Proxy that = (ShardingNetworkPrivateAddressProps.Jsii$Proxy) o;

            if (!dbInstanceId.equals(that.dbInstanceId)) return false;
            if (!nodeId.equals(that.nodeId)) return false;
            if (this.accountName != null ? !this.accountName.equals(that.accountName) : that.accountName != null) return false;
            if (this.accountPassword != null ? !this.accountPassword.equals(that.accountPassword) : that.accountPassword != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbInstanceId.hashCode();
            result = 31 * result + (this.nodeId.hashCode());
            result = 31 * result + (this.accountName != null ? this.accountName.hashCode() : 0);
            result = 31 * result + (this.accountPassword != null ? this.accountPassword.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
