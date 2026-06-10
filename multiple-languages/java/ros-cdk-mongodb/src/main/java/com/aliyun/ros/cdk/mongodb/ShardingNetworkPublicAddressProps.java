package com.aliyun.ros.cdk.mongodb;

/**
 * Properties for defining a <code>ShardingNetworkPublicAddress</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardingnetworkpublicaddress
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T14:10:27.901Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mongodb.$Module.class, fqn = "@alicloud/ros-cdk-mongodb.ShardingNetworkPublicAddressProps")
@software.amazon.jsii.Jsii.Proxy(ShardingNetworkPublicAddressProps.Jsii$Proxy.class)
public interface ShardingNetworkPublicAddressProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dbInstanceId: The ID of the instance.
     * <p>
     * <blockquote>
     * <p>
     * you must also configure the <strong>NodeId</strong> parameter when configuring a shard cluster instance ID.
     * <p>
     * </blockquote>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceId();

    /**
     * Property nodeId: The Mongos node ID, Shard node ID, or ConfigServer node ID in the sharded cluster instance.
     * <p>
     * You can call the [DescribeDBInstanceAttribute](~~ 62010 ~~) operation to query the node ID of the Mongos node, Shard node, or ConfigServer node.
     * <p>
     * <blockquote>
     * <p>
     * This parameter is required when <strong>DBInstanceId</strong> is configured as a sharded cluster instance ID.
     * <p>
     * </blockquote>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNodeId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ShardingNetworkPublicAddressProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ShardingNetworkPublicAddressProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ShardingNetworkPublicAddressProps> {
        java.lang.Object dbInstanceId;
        java.lang.Object nodeId;

        /**
         * Sets the value of {@link ShardingNetworkPublicAddressProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: The ID of the instance. This parameter is required.
         *                     <blockquote>
         *                     <p>
         *                     you must also configure the <strong>NodeId</strong> parameter when configuring a shard cluster instance ID.
         *                     <p>
         *                     </blockquote>
         * @return {@code this}
         */
        public Builder dbInstanceId(java.lang.String dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link ShardingNetworkPublicAddressProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: The ID of the instance. This parameter is required.
         *                     <blockquote>
         *                     <p>
         *                     you must also configure the <strong>NodeId</strong> parameter when configuring a shard cluster instance ID.
         *                     <p>
         *                     </blockquote>
         * @return {@code this}
         */
        public Builder dbInstanceId(com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link ShardingNetworkPublicAddressProps#getNodeId}
         * @param nodeId Property nodeId: The Mongos node ID, Shard node ID, or ConfigServer node ID in the sharded cluster instance.
         *               You can call the [DescribeDBInstanceAttribute](~~ 62010 ~~) operation to query the node ID of the Mongos node, Shard node, or ConfigServer node.
         *               <p>
         *               <blockquote>
         *               <p>
         *               This parameter is required when <strong>DBInstanceId</strong> is configured as a sharded cluster instance ID.
         *               <p>
         *               </blockquote>
         * @return {@code this}
         */
        public Builder nodeId(java.lang.String nodeId) {
            this.nodeId = nodeId;
            return this;
        }

        /**
         * Sets the value of {@link ShardingNetworkPublicAddressProps#getNodeId}
         * @param nodeId Property nodeId: The Mongos node ID, Shard node ID, or ConfigServer node ID in the sharded cluster instance.
         *               You can call the [DescribeDBInstanceAttribute](~~ 62010 ~~) operation to query the node ID of the Mongos node, Shard node, or ConfigServer node.
         *               <p>
         *               <blockquote>
         *               <p>
         *               This parameter is required when <strong>DBInstanceId</strong> is configured as a sharded cluster instance ID.
         *               <p>
         *               </blockquote>
         * @return {@code this}
         */
        public Builder nodeId(com.aliyun.ros.cdk.core.IResolvable nodeId) {
            this.nodeId = nodeId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ShardingNetworkPublicAddressProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ShardingNetworkPublicAddressProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ShardingNetworkPublicAddressProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ShardingNetworkPublicAddressProps {
        private final java.lang.Object dbInstanceId;
        private final java.lang.Object nodeId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbInstanceId = software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nodeId = software.amazon.jsii.Kernel.get(this, "nodeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbInstanceId = java.util.Objects.requireNonNull(builder.dbInstanceId, "dbInstanceId is required");
            this.nodeId = builder.nodeId;
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
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dbInstanceId", om.valueToTree(this.getDbInstanceId()));
            if (this.getNodeId() != null) {
                data.set("nodeId", om.valueToTree(this.getNodeId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mongodb.ShardingNetworkPublicAddressProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ShardingNetworkPublicAddressProps.Jsii$Proxy that = (ShardingNetworkPublicAddressProps.Jsii$Proxy) o;

            if (!dbInstanceId.equals(that.dbInstanceId)) return false;
            return this.nodeId != null ? this.nodeId.equals(that.nodeId) : that.nodeId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbInstanceId.hashCode();
            result = 31 * result + (this.nodeId != null ? this.nodeId.hashCode() : 0);
            return result;
        }
    }
}
