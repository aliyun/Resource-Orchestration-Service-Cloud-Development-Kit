package com.aliyun.ros.cdk.ram;

/**
 * Properties for defining a `ALIYUN::RAM::UserToGroupAddition`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-04-07T03:17:42.225Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.UserToGroupAdditionProps")
@software.amazon.jsii.Jsii.Proxy(UserToGroupAdditionProps.Jsii$Proxy.class)
public interface UserToGroupAdditionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property groupName: Specifies the group name, containing up to 64 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGroupName();

    /**
     * Property users: list name of a users to which you want to add the group.
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
        java.lang.Object groupName;
        java.lang.Object users;

        /**
         * Sets the value of {@link UserToGroupAdditionProps#getGroupName}
         * @param groupName Property groupName: Specifies the group name, containing up to 64 characters. This parameter is required.
         * @return {@code this}
         */
        public Builder groupName(java.lang.String groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link UserToGroupAdditionProps#getGroupName}
         * @param groupName Property groupName: Specifies the group name, containing up to 64 characters. This parameter is required.
         * @return {@code this}
         */
        public Builder groupName(com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link UserToGroupAdditionProps#getUsers}
         * @param users Property users: list name of a users to which you want to add the group. This parameter is required.
         * @return {@code this}
         */
        public Builder users(java.util.List<? extends java.lang.Object> users) {
            this.users = users;
            return this;
        }

        /**
         * Sets the value of {@link UserToGroupAdditionProps#getUsers}
         * @param users Property users: list name of a users to which you want to add the group. This parameter is required.
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
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link UserToGroupAdditionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements UserToGroupAdditionProps {
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
