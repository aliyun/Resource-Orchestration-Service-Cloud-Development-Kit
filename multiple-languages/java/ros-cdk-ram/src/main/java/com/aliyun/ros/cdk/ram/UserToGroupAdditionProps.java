package com.aliyun.ros.cdk.ram;

/**
 * Properties for defining a `ALIYUN::RAM::UserToGroupAddition`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.387Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.UserToGroupAdditionProps")
@software.amazon.jsii.Jsii.Proxy(UserToGroupAdditionProps.Jsii$Proxy.class)
public interface UserToGroupAdditionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getGroupName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUsers();

    /**
     * @return a {@link Builder} of {@link UserToGroupAdditionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link UserToGroupAdditionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<UserToGroupAdditionProps> {
        private java.lang.String groupName;
        private java.lang.Object users;

        /**
         * Sets the value of {@link UserToGroupAdditionProps#getGroupName}
         * @param groupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder groupName(java.lang.String groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link UserToGroupAdditionProps#getUsers}
         * @param users the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder users(java.util.List<? extends java.lang.Object> users) {
            this.users = users;
            return this;
        }

        /**
         * Sets the value of {@link UserToGroupAdditionProps#getUsers}
         * @param users the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder users(com.aliyun.ros.cdk.core.IResolvable users) {
            this.users = users;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link UserToGroupAdditionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public UserToGroupAdditionProps build() {
            return new Jsii$Proxy(groupName, users);
        }
    }

    /**
     * An implementation for {@link UserToGroupAdditionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements UserToGroupAdditionProps {
        private final java.lang.String groupName;
        private final java.lang.Object users;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.groupName = software.amazon.jsii.Kernel.get(this, "groupName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.users = software.amazon.jsii.Kernel.get(this, "users", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String groupName, final java.lang.Object users) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.groupName = java.util.Objects.requireNonNull(groupName, "groupName is required");
            this.users = java.util.Objects.requireNonNull(users, "users is required");
        }

        @Override
        public final java.lang.String getGroupName() {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.UserToGroupAdditionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            UserToGroupAdditionProps.Jsii$Proxy that = (UserToGroupAdditionProps.Jsii$Proxy) o;

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
