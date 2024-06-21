package com.aliyun.ros.cdk.polardb;

/**
 * Properties for defining a <code>RosDBNodes</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbnodes
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:11.474Z")
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbNodeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImciSwitch() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
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
        java.lang.Object dbNodeType;
        java.lang.Object imciSwitch;
        java.lang.Object resourceGroupId;

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
         * Sets the value of {@link RosDBNodesProps#getDbNodeType}
         * @param dbNodeType the value to be set.
         * @return {@code this}
         */
        public Builder dbNodeType(java.lang.String dbNodeType) {
            this.dbNodeType = dbNodeType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBNodesProps#getDbNodeType}
         * @param dbNodeType the value to be set.
         * @return {@code this}
         */
        public Builder dbNodeType(com.aliyun.ros.cdk.core.IResolvable dbNodeType) {
            this.dbNodeType = dbNodeType;
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
         * Sets the value of {@link RosDBNodesProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBNodesProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
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
        private final java.lang.Object dbNodeType;
        private final java.lang.Object imciSwitch;
        private final java.lang.Object resourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.amount = software.amazon.jsii.Kernel.get(this, "amount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbClusterId = software.amazon.jsii.Kernel.get(this, "dbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbNodeType = software.amazon.jsii.Kernel.get(this, "dbNodeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imciSwitch = software.amazon.jsii.Kernel.get(this, "imciSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.amount = java.util.Objects.requireNonNull(builder.amount, "amount is required");
            this.dbClusterId = java.util.Objects.requireNonNull(builder.dbClusterId, "dbClusterId is required");
            this.dbNodeType = builder.dbNodeType;
            this.imciSwitch = builder.imciSwitch;
            this.resourceGroupId = builder.resourceGroupId;
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
        public final java.lang.Object getDbNodeType() {
            return this.dbNodeType;
        }

        @Override
        public final java.lang.Object getImciSwitch() {
            return this.imciSwitch;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("amount", om.valueToTree(this.getAmount()));
            data.set("dbClusterId", om.valueToTree(this.getDbClusterId()));
            if (this.getDbNodeType() != null) {
                data.set("dbNodeType", om.valueToTree(this.getDbNodeType()));
            }
            if (this.getImciSwitch() != null) {
                data.set("imciSwitch", om.valueToTree(this.getImciSwitch()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
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
            if (this.dbNodeType != null ? !this.dbNodeType.equals(that.dbNodeType) : that.dbNodeType != null) return false;
            if (this.imciSwitch != null ? !this.imciSwitch.equals(that.imciSwitch) : that.imciSwitch != null) return false;
            return this.resourceGroupId != null ? this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.amount.hashCode();
            result = 31 * result + (this.dbClusterId.hashCode());
            result = 31 * result + (this.dbNodeType != null ? this.dbNodeType.hashCode() : 0);
            result = 31 * result + (this.imciSwitch != null ? this.imciSwitch.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            return result;
        }
    }
}
