package com.aliyun.ros.cdk.ram.datasource;

/**
 * Properties for defining a <code>RosRoles</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-roles
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-02-28T02:53:30.224Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.datasource.RosRolesProps")
@software.amazon.jsii.Jsii.Proxy(RosRolesProps.Jsii$Proxy.class)
public interface RosRolesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRoleName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosRolesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosRolesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosRolesProps> {
        java.lang.Object roleName;

        /**
         * Sets the value of {@link RosRolesProps#getRoleName}
         * @param roleName the value to be set.
         * @return {@code this}
         */
        public Builder roleName(java.lang.String roleName) {
            this.roleName = roleName;
            return this;
        }

        /**
         * Sets the value of {@link RosRolesProps#getRoleName}
         * @param roleName the value to be set.
         * @return {@code this}
         */
        public Builder roleName(com.aliyun.ros.cdk.core.IResolvable roleName) {
            this.roleName = roleName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosRolesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosRolesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosRolesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosRolesProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.datasource.RosRolesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosRolesProps.Jsii$Proxy that = (RosRolesProps.Jsii$Proxy) o;

            return this.roleName != null ? this.roleName.equals(that.roleName) : that.roleName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.roleName != null ? this.roleName.hashCode() : 0;
            return result;
        }
    }
}
