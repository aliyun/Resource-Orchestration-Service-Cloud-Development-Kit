package com.aliyun.ros.cdk.polardb;

/**
 * Properties for defining a `ALIYUN::POLARDB::DBNodes`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T01:43:51.551Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.RosDBNodesProps")
@software.amazon.jsii.Jsii.Proxy(RosDBNodesProps.Jsii$Proxy.class)
public interface RosDBNodesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAmount();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbClusterId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImciSwitch() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDBNodesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDBNodesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDBNodesProps> {
        java.lang.Object amount;
        java.lang.Object dbClusterId;
        java.lang.Object imciSwitch;

        /**
         * Sets the value of {@link RosDBNodesProps#getAmount}
         * @param amount the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder amount(java.lang.Number amount) {
            this.amount = amount;
            return this;
        }

        /**
         * Sets the value of {@link RosDBNodesProps#getAmount}
         * @param amount the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder amount(com.aliyun.ros.cdk.core.IResolvable amount) {
            this.amount = amount;
            return this;
        }

        /**
         * Sets the value of {@link RosDBNodesProps#getDbClusterId}
         * @param dbClusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(java.lang.String dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBNodesProps#getDbClusterId}
         * @param dbClusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBNodesProps#getImciSwitch}
         * @param imciSwitch the value to be set.
         * @return {@code this}
         */
        public Builder imciSwitch(java.lang.String imciSwitch) {
            this.imciSwitch = imciSwitch;
            return this;
        }

        /**
         * Sets the value of {@link RosDBNodesProps#getImciSwitch}
         * @param imciSwitch the value to be set.
         * @return {@code this}
         */
        public Builder imciSwitch(com.aliyun.ros.cdk.core.IResolvable imciSwitch) {
            this.imciSwitch = imciSwitch;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDBNodesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDBNodesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDBNodesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDBNodesProps {
        private final java.lang.Object amount;
        private final java.lang.Object dbClusterId;
        private final java.lang.Object imciSwitch;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.amount = software.amazon.jsii.Kernel.get(this, "amount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbClusterId = software.amazon.jsii.Kernel.get(this, "dbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imciSwitch = software.amazon.jsii.Kernel.get(this, "imciSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.amount = java.util.Objects.requireNonNull(builder.amount, "amount is required");
            this.dbClusterId = java.util.Objects.requireNonNull(builder.dbClusterId, "dbClusterId is required");
            this.imciSwitch = builder.imciSwitch;
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
        public final java.lang.Object getImciSwitch() {
            return this.imciSwitch;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("amount", om.valueToTree(this.getAmount()));
            data.set("dbClusterId", om.valueToTree(this.getDbClusterId()));
            if (this.getImciSwitch() != null) {
                data.set("imciSwitch", om.valueToTree(this.getImciSwitch()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-polardb.RosDBNodesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDBNodesProps.Jsii$Proxy that = (RosDBNodesProps.Jsii$Proxy) o;

            if (!amount.equals(that.amount)) return false;
            if (!dbClusterId.equals(that.dbClusterId)) return false;
            return this.imciSwitch != null ? this.imciSwitch.equals(that.imciSwitch) : that.imciSwitch == null;
        }

        @Override
        public final int hashCode() {
            int result = this.amount.hashCode();
            result = 31 * result + (this.dbClusterId.hashCode());
            result = 31 * result + (this.imciSwitch != null ? this.imciSwitch.hashCode() : 0);
            return result;
        }
    }
}
