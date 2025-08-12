package com.aliyun.ros.cdk.adblake;

/**
 * Properties for defining a <code>RosResourceGroupAccountBinding</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-resourcegroupaccountbinding
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:43.205Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.adblake.$Module.class, fqn = "@alicloud/ros-cdk-adblake.RosResourceGroupAccountBindingProps")
@software.amazon.jsii.Jsii.Proxy(RosResourceGroupAccountBindingProps.Jsii$Proxy.class)
public interface RosResourceGroupAccountBindingProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccountName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbClusterId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGroupName();

    /**
     * @return a {@link Builder} of {@link RosResourceGroupAccountBindingProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosResourceGroupAccountBindingProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosResourceGroupAccountBindingProps> {
        java.lang.Object accountName;
        java.lang.Object dbClusterId;
        java.lang.Object groupName;

        /**
         * Sets the value of {@link RosResourceGroupAccountBindingProps#getAccountName}
         * @param accountName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accountName(java.lang.String accountName) {
            this.accountName = accountName;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupAccountBindingProps#getAccountName}
         * @param accountName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accountName(com.aliyun.ros.cdk.core.IResolvable accountName) {
            this.accountName = accountName;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupAccountBindingProps#getDbClusterId}
         * @param dbClusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(java.lang.String dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupAccountBindingProps#getDbClusterId}
         * @param dbClusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupAccountBindingProps#getGroupName}
         * @param groupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder groupName(java.lang.String groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupAccountBindingProps#getGroupName}
         * @param groupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder groupName(com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosResourceGroupAccountBindingProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosResourceGroupAccountBindingProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosResourceGroupAccountBindingProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosResourceGroupAccountBindingProps {
        private final java.lang.Object accountName;
        private final java.lang.Object dbClusterId;
        private final java.lang.Object groupName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accountName = software.amazon.jsii.Kernel.get(this, "accountName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbClusterId = software.amazon.jsii.Kernel.get(this, "dbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupName = software.amazon.jsii.Kernel.get(this, "groupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accountName = java.util.Objects.requireNonNull(builder.accountName, "accountName is required");
            this.dbClusterId = java.util.Objects.requireNonNull(builder.dbClusterId, "dbClusterId is required");
            this.groupName = java.util.Objects.requireNonNull(builder.groupName, "groupName is required");
        }

        @Override
        public final java.lang.Object getAccountName() {
            return this.accountName;
        }

        @Override
        public final java.lang.Object getDbClusterId() {
            return this.dbClusterId;
        }

        @Override
        public final java.lang.Object getGroupName() {
            return this.groupName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("accountName", om.valueToTree(this.getAccountName()));
            data.set("dbClusterId", om.valueToTree(this.getDbClusterId()));
            data.set("groupName", om.valueToTree(this.getGroupName()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-adblake.RosResourceGroupAccountBindingProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosResourceGroupAccountBindingProps.Jsii$Proxy that = (RosResourceGroupAccountBindingProps.Jsii$Proxy) o;

            if (!accountName.equals(that.accountName)) return false;
            if (!dbClusterId.equals(that.dbClusterId)) return false;
            return this.groupName.equals(that.groupName);
        }

        @Override
        public final int hashCode() {
            int result = this.accountName.hashCode();
            result = 31 * result + (this.dbClusterId.hashCode());
            result = 31 * result + (this.groupName.hashCode());
            return result;
        }
    }
}
