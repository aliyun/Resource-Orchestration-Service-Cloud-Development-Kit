package com.aliyun.ros.cdk.cs;

/**
 * Properties for defining a <code>GrantPermissions</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-grantpermissions
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:53.505Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.GrantPermissionsProps")
@software.amazon.jsii.Jsii.Proxy(GrantPermissionsProps.Jsii$Proxy.class)
public interface GrantPermissionsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property permissions: The permissions that you want to grant to the RAM user.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPermissions();

    /**
     * Property userId: The ID of the RAM user.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUserId();

    /**
     * @return a {@link Builder} of {@link GrantPermissionsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link GrantPermissionsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<GrantPermissionsProps> {
        java.lang.Object permissions;
        java.lang.Object userId;

        /**
         * Sets the value of {@link GrantPermissionsProps#getPermissions}
         * @param permissions Property permissions: The permissions that you want to grant to the RAM user. This parameter is required.
         * @return {@code this}
         */
        public Builder permissions(com.aliyun.ros.cdk.core.IResolvable permissions) {
            this.permissions = permissions;
            return this;
        }

        /**
         * Sets the value of {@link GrantPermissionsProps#getPermissions}
         * @param permissions Property permissions: The permissions that you want to grant to the RAM user. This parameter is required.
         * @return {@code this}
         */
        public Builder permissions(java.util.List<? extends java.lang.Object> permissions) {
            this.permissions = permissions;
            return this;
        }

        /**
         * Sets the value of {@link GrantPermissionsProps#getUserId}
         * @param userId Property userId: The ID of the RAM user. This parameter is required.
         * @return {@code this}
         */
        public Builder userId(java.lang.String userId) {
            this.userId = userId;
            return this;
        }

        /**
         * Sets the value of {@link GrantPermissionsProps#getUserId}
         * @param userId Property userId: The ID of the RAM user. This parameter is required.
         * @return {@code this}
         */
        public Builder userId(com.aliyun.ros.cdk.core.IResolvable userId) {
            this.userId = userId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link GrantPermissionsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public GrantPermissionsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link GrantPermissionsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements GrantPermissionsProps {
        private final java.lang.Object permissions;
        private final java.lang.Object userId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.permissions = software.amazon.jsii.Kernel.get(this, "permissions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userId = software.amazon.jsii.Kernel.get(this, "userId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.permissions = java.util.Objects.requireNonNull(builder.permissions, "permissions is required");
            this.userId = java.util.Objects.requireNonNull(builder.userId, "userId is required");
        }

        @Override
        public final java.lang.Object getPermissions() {
            return this.permissions;
        }

        @Override
        public final java.lang.Object getUserId() {
            return this.userId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("permissions", om.valueToTree(this.getPermissions()));
            data.set("userId", om.valueToTree(this.getUserId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.GrantPermissionsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            GrantPermissionsProps.Jsii$Proxy that = (GrantPermissionsProps.Jsii$Proxy) o;

            if (!permissions.equals(that.permissions)) return false;
            return this.userId.equals(that.userId);
        }

        @Override
        public final int hashCode() {
            int result = this.permissions.hashCode();
            result = 31 * result + (this.userId.hashCode());
            return result;
        }
    }
}
