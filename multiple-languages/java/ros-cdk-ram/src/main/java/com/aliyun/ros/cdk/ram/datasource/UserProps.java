package com.aliyun.ros.cdk.ram.datasource;

/**
 * Properties for defining a <code>User</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-user
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:11.682Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.datasource.UserProps")
@software.amazon.jsii.Jsii.Proxy(UserProps.Jsii$Proxy.class)
public interface UserProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property userId: RAM user ID.
     * <p>
     * At most one UserName and UserId can be specified; if both are specified, UserName will be used. If neither is specified, the current user ID will be used.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserId() {
        return null;
    }

    /**
     * Property userName: RAM user name.
     * <p>
     * At most one UserName and UserId can be specified; if both are specified, UserName will be used. If neither is specified, the current user ID will be used.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link UserProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link UserProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<UserProps> {
        java.lang.Object userId;
        java.lang.Object userName;

        /**
         * Sets the value of {@link UserProps#getUserId}
         * @param userId Property userId: RAM user ID.
         *               At most one UserName and UserId can be specified; if both are specified, UserName will be used. If neither is specified, the current user ID will be used.
         * @return {@code this}
         */
        public Builder userId(java.lang.String userId) {
            this.userId = userId;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getUserId}
         * @param userId Property userId: RAM user ID.
         *               At most one UserName and UserId can be specified; if both are specified, UserName will be used. If neither is specified, the current user ID will be used.
         * @return {@code this}
         */
        public Builder userId(com.aliyun.ros.cdk.core.IResolvable userId) {
            this.userId = userId;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getUserName}
         * @param userName Property userName: RAM user name.
         *                 At most one UserName and UserId can be specified; if both are specified, UserName will be used. If neither is specified, the current user ID will be used.
         * @return {@code this}
         */
        public Builder userName(java.lang.String userName) {
            this.userName = userName;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getUserName}
         * @param userName Property userName: RAM user name.
         *                 At most one UserName and UserId can be specified; if both are specified, UserName will be used. If neither is specified, the current user ID will be used.
         * @return {@code this}
         */
        public Builder userName(com.aliyun.ros.cdk.core.IResolvable userName) {
            this.userName = userName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link UserProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public UserProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link UserProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements UserProps {
        private final java.lang.Object userId;
        private final java.lang.Object userName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.userId = software.amazon.jsii.Kernel.get(this, "userId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userName = software.amazon.jsii.Kernel.get(this, "userName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.userId = builder.userId;
            this.userName = builder.userName;
        }

        @Override
        public final java.lang.Object getUserId() {
            return this.userId;
        }

        @Override
        public final java.lang.Object getUserName() {
            return this.userName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getUserId() != null) {
                data.set("userId", om.valueToTree(this.getUserId()));
            }
            if (this.getUserName() != null) {
                data.set("userName", om.valueToTree(this.getUserName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.datasource.UserProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            UserProps.Jsii$Proxy that = (UserProps.Jsii$Proxy) o;

            if (this.userId != null ? !this.userId.equals(that.userId) : that.userId != null) return false;
            return this.userName != null ? this.userName.equals(that.userName) : that.userName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.userId != null ? this.userId.hashCode() : 0;
            result = 31 * result + (this.userName != null ? this.userName.hashCode() : 0);
            return result;
        }
    }
}
