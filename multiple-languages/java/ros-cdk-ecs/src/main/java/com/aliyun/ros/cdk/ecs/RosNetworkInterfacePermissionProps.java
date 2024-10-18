package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>RosNetworkInterfacePermission</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-networkinterfacepermission
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:29.348Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosNetworkInterfacePermissionProps")
@software.amazon.jsii.Jsii.Proxy(RosNetworkInterfacePermissionProps.Jsii$Proxy.class)
public interface RosNetworkInterfacePermissionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccountId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNetworkInterfaceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPermission();

    /**
     * @return a {@link Builder} of {@link RosNetworkInterfacePermissionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosNetworkInterfacePermissionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosNetworkInterfacePermissionProps> {
        java.lang.Object accountId;
        java.lang.Object networkInterfaceId;
        java.lang.Object permission;

        /**
         * Sets the value of {@link RosNetworkInterfacePermissionProps#getAccountId}
         * @param accountId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accountId(java.lang.String accountId) {
            this.accountId = accountId;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfacePermissionProps#getAccountId}
         * @param accountId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accountId(com.aliyun.ros.cdk.core.IResolvable accountId) {
            this.accountId = accountId;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfacePermissionProps#getNetworkInterfaceId}
         * @param networkInterfaceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder networkInterfaceId(java.lang.String networkInterfaceId) {
            this.networkInterfaceId = networkInterfaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfacePermissionProps#getNetworkInterfaceId}
         * @param networkInterfaceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder networkInterfaceId(com.aliyun.ros.cdk.core.IResolvable networkInterfaceId) {
            this.networkInterfaceId = networkInterfaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfacePermissionProps#getPermission}
         * @param permission the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder permission(java.lang.String permission) {
            this.permission = permission;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfacePermissionProps#getPermission}
         * @param permission the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder permission(com.aliyun.ros.cdk.core.IResolvable permission) {
            this.permission = permission;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosNetworkInterfacePermissionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosNetworkInterfacePermissionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosNetworkInterfacePermissionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosNetworkInterfacePermissionProps {
        private final java.lang.Object accountId;
        private final java.lang.Object networkInterfaceId;
        private final java.lang.Object permission;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accountId = software.amazon.jsii.Kernel.get(this, "accountId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkInterfaceId = software.amazon.jsii.Kernel.get(this, "networkInterfaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.permission = software.amazon.jsii.Kernel.get(this, "permission", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accountId = java.util.Objects.requireNonNull(builder.accountId, "accountId is required");
            this.networkInterfaceId = java.util.Objects.requireNonNull(builder.networkInterfaceId, "networkInterfaceId is required");
            this.permission = java.util.Objects.requireNonNull(builder.permission, "permission is required");
        }

        @Override
        public final java.lang.Object getAccountId() {
            return this.accountId;
        }

        @Override
        public final java.lang.Object getNetworkInterfaceId() {
            return this.networkInterfaceId;
        }

        @Override
        public final java.lang.Object getPermission() {
            return this.permission;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("accountId", om.valueToTree(this.getAccountId()));
            data.set("networkInterfaceId", om.valueToTree(this.getNetworkInterfaceId()));
            data.set("permission", om.valueToTree(this.getPermission()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosNetworkInterfacePermissionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosNetworkInterfacePermissionProps.Jsii$Proxy that = (RosNetworkInterfacePermissionProps.Jsii$Proxy) o;

            if (!accountId.equals(that.accountId)) return false;
            if (!networkInterfaceId.equals(that.networkInterfaceId)) return false;
            return this.permission.equals(that.permission);
        }

        @Override
        public final int hashCode() {
            int result = this.accountId.hashCode();
            result = 31 * result + (this.networkInterfaceId.hashCode());
            result = 31 * result + (this.permission.hashCode());
            return result;
        }
    }
}
