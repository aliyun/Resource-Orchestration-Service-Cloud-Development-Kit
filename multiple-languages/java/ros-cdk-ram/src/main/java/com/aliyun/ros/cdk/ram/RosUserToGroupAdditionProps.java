package com.aliyun.ros.cdk.ram;

/**
 * Properties for defining a <code>RosUserToGroupAddition</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-usertogroupaddition
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:34.646Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.RosUserToGroupAdditionProps")
@software.amazon.jsii.Jsii.Proxy(RosUserToGroupAdditionProps.Jsii$Proxy.class)
public interface RosUserToGroupAdditionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGroupName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUsers();

    /**
     * @return a {@link Builder} of {@link RosUserToGroupAdditionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosUserToGroupAdditionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosUserToGroupAdditionProps> {
        java.lang.Object groupName;
        java.lang.Object users;

        /**
         * Sets the value of {@link RosUserToGroupAdditionProps#getGroupName}
         * @param groupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder groupName(java.lang.String groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link RosUserToGroupAdditionProps#getGroupName}
         * @param groupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder groupName(com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link RosUserToGroupAdditionProps#getUsers}
         * @param users the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder users(java.util.List<? extends java.lang.Object> users) {
            this.users = users;
            return this;
        }

        /**
         * Sets the value of {@link RosUserToGroupAdditionProps#getUsers}
         * @param users the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder users(com.aliyun.ros.cdk.core.IResolvable users) {
            this.users = users;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosUserToGroupAdditionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosUserToGroupAdditionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosUserToGroupAdditionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosUserToGroupAdditionProps {
        private final java.lang.Object groupName;
        private final java.lang.Object users;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.groupName = software.amazon.jsii.Kernel.get(this, "groupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.users = software.amazon.jsii.Kernel.get(this, "users", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.groupName = java.util.Objects.requireNonNull(builder.groupName, "groupName is required");
            this.users = java.util.Objects.requireNonNull(builder.users, "users is required");
        }

        @Override
        public final java.lang.Object getGroupName() {
            return this.groupName;
        }

        @Override
        public final java.lang.Object getUsers() {
            return this.users;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("groupName", om.valueToTree(this.getGroupName()));
            data.set("users", om.valueToTree(this.getUsers()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.RosUserToGroupAdditionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosUserToGroupAdditionProps.Jsii$Proxy that = (RosUserToGroupAdditionProps.Jsii$Proxy) o;

            if (!groupName.equals(that.groupName)) return false;
            return this.users.equals(that.users);
        }

        @Override
        public final int hashCode() {
            int result = this.groupName.hashCode();
            result = 31 * result + (this.users.hashCode());
            return result;
        }
    }
}
