package com.aliyun.ros.cdk.ram.datasource;

/**
 * Properties for defining a <code>DATASOURCE::RAM::Roles</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:49.869Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.datasource.RolesProps")
@software.amazon.jsii.Jsii.Proxy(RolesProps.Jsii$Proxy.class)
public interface RolesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property roleName: Filter the results by a specific role name.
     * <p>
     * Supports using * and ?  to fuzzy match.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRoleName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RolesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RolesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RolesProps> {
        java.lang.Object roleName;

        /**
         * Sets the value of {@link RolesProps#getRoleName}
         * @param roleName Property roleName: Filter the results by a specific role name.
         *                 Supports using * and ?  to fuzzy match.
         * @return {@code this}
         */
        public Builder roleName(java.lang.String roleName) {
            this.roleName = roleName;
            return this;
        }

        /**
         * Sets the value of {@link RolesProps#getRoleName}
         * @param roleName Property roleName: Filter the results by a specific role name.
         *                 Supports using * and ?  to fuzzy match.
         * @return {@code this}
         */
        public Builder roleName(com.aliyun.ros.cdk.core.IResolvable roleName) {
            this.roleName = roleName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RolesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RolesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RolesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RolesProps {
        private final java.lang.Object roleName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.roleName = software.amazon.jsii.Kernel.get(this, "roleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.roleName = builder.roleName;
        }

        @Override
        public final java.lang.Object getRoleName() {
            return this.roleName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getRoleName() != null) {
                data.set("roleName", om.valueToTree(this.getRoleName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.datasource.RolesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RolesProps.Jsii$Proxy that = (RolesProps.Jsii$Proxy) o;

            return this.roleName != null ? this.roleName.equals(that.roleName) : that.roleName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.roleName != null ? this.roleName.hashCode() : 0;
            return result;
        }
    }
}
