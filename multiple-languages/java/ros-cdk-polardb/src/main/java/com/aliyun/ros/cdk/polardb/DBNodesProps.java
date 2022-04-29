package com.aliyun.ros.cdk.polardb;

/**
 * Properties for defining a `ALIYUN::POLARDB::DBNodes`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.57.0 (build f614666)", date = "2022-04-29T01:47:29.888Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.DBNodesProps")
@software.amazon.jsii.Jsii.Proxy(DBNodesProps.Jsii$Proxy.class)
public interface DBNodesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property amount: Number of nodes to be added to cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAmount();

    /**
     * Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to be added nodes to.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbClusterId();

    /**
     * @return a {@link Builder} of {@link DBNodesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DBNodesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DBNodesProps> {
        java.lang.Object amount;
        java.lang.Object dbClusterId;

        /**
         * Sets the value of {@link DBNodesProps#getAmount}
         * @param amount Property amount: Number of nodes to be added to cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder amount(java.lang.Number amount) {
            this.amount = amount;
            return this;
        }

        /**
         * Sets the value of {@link DBNodesProps#getAmount}
         * @param amount Property amount: Number of nodes to be added to cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder amount(com.aliyun.ros.cdk.core.IResolvable amount) {
            this.amount = amount;
            return this;
        }

        /**
         * Sets the value of {@link DBNodesProps#getDbClusterId}
         * @param dbClusterId Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to be added nodes to. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(java.lang.String dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link DBNodesProps#getDbClusterId}
         * @param dbClusterId Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to be added nodes to. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DBNodesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DBNodesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DBNodesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DBNodesProps {
        private final java.lang.Object amount;
        private final java.lang.Object dbClusterId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.amount = software.amazon.jsii.Kernel.get(this, "amount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbClusterId = software.amazon.jsii.Kernel.get(this, "dbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.amount = java.util.Objects.requireNonNull(builder.amount, "amount is required");
            this.dbClusterId = java.util.Objects.requireNonNull(builder.dbClusterId, "dbClusterId is required");
        }

        @Override
        public final java.lang.Object getAmount() {
            return this.amount;
        }

        @Override
        public final java.lang.Object getDbClusterId() {
            return this.dbClusterId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("amount", om.valueToTree(this.getAmount()));
            data.set("dbClusterId", om.valueToTree(this.getDbClusterId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-polardb.DBNodesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DBNodesProps.Jsii$Proxy that = (DBNodesProps.Jsii$Proxy) o;

            if (!amount.equals(that.amount)) return false;
            return this.dbClusterId.equals(that.dbClusterId);
        }

        @Override
        public final int hashCode() {
            int result = this.amount.hashCode();
            result = 31 * result + (this.dbClusterId.hashCode());
            return result;
        }
    }
}
