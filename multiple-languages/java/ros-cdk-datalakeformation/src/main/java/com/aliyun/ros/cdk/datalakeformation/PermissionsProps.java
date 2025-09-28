package com.aliyun.ros.cdk.datalakeformation;

/**
 * Properties for defining a <code>Permissions</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datalakeformation-permissions
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:23.039Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.datalakeformation.$Module.class, fqn = "@alicloud/ros-cdk-datalakeformation.PermissionsProps")
@software.amazon.jsii.Jsii.Proxy(PermissionsProps.Jsii$Proxy.class)
public interface PermissionsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property catalogId: The catalog id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCatalogId();

    /**
     * Property permissions: The permissions list.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPermissions();

    /**
     * @return a {@link Builder} of {@link PermissionsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link PermissionsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<PermissionsProps> {
        java.lang.Object catalogId;
        java.lang.Object permissions;

        /**
         * Sets the value of {@link PermissionsProps#getCatalogId}
         * @param catalogId Property catalogId: The catalog id. This parameter is required.
         * @return {@code this}
         */
        public Builder catalogId(java.lang.String catalogId) {
            this.catalogId = catalogId;
            return this;
        }

        /**
         * Sets the value of {@link PermissionsProps#getCatalogId}
         * @param catalogId Property catalogId: The catalog id. This parameter is required.
         * @return {@code this}
         */
        public Builder catalogId(com.aliyun.ros.cdk.core.IResolvable catalogId) {
            this.catalogId = catalogId;
            return this;
        }

        /**
         * Sets the value of {@link PermissionsProps#getPermissions}
         * @param permissions Property permissions: The permissions list. This parameter is required.
         * @return {@code this}
         */
        public Builder permissions(com.aliyun.ros.cdk.core.IResolvable permissions) {
            this.permissions = permissions;
            return this;
        }

        /**
         * Sets the value of {@link PermissionsProps#getPermissions}
         * @param permissions Property permissions: The permissions list. This parameter is required.
         * @return {@code this}
         */
        public Builder permissions(java.util.List<? extends java.lang.Object> permissions) {
            this.permissions = permissions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link PermissionsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public PermissionsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link PermissionsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PermissionsProps {
        private final java.lang.Object catalogId;
        private final java.lang.Object permissions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.catalogId = software.amazon.jsii.Kernel.get(this, "catalogId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.permissions = software.amazon.jsii.Kernel.get(this, "permissions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.catalogId = java.util.Objects.requireNonNull(builder.catalogId, "catalogId is required");
            this.permissions = java.util.Objects.requireNonNull(builder.permissions, "permissions is required");
        }

        @Override
        public final java.lang.Object getCatalogId() {
            return this.catalogId;
        }

        @Override
        public final java.lang.Object getPermissions() {
            return this.permissions;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("catalogId", om.valueToTree(this.getCatalogId()));
            data.set("permissions", om.valueToTree(this.getPermissions()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-datalakeformation.PermissionsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            PermissionsProps.Jsii$Proxy that = (PermissionsProps.Jsii$Proxy) o;

            if (!catalogId.equals(that.catalogId)) return false;
            return this.permissions.equals(that.permissions);
        }

        @Override
        public final int hashCode() {
            int result = this.catalogId.hashCode();
            result = 31 * result + (this.permissions.hashCode());
            return result;
        }
    }
}
