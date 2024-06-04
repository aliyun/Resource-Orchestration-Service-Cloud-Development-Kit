package com.aliyun.ros.cdk.devops;

/**
 * Properties for defining a <code>VariableGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-variablegroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:53.808Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.devops.$Module.class, fqn = "@alicloud/ros-cdk-devops.VariableGroupProps")
@software.amazon.jsii.Jsii.Proxy(VariableGroupProps.Jsii$Proxy.class)
public interface VariableGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property name: The name of variable group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     * Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOrganizationId();

    /**
     * Property variables: Variables information.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVariables();

    /**
     * Property description: The description of variable group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link VariableGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link VariableGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<VariableGroupProps> {
        java.lang.Object name;
        java.lang.Object organizationId;
        java.lang.Object variables;
        java.lang.Object description;

        /**
         * Sets the value of {@link VariableGroupProps#getName}
         * @param name Property name: The name of variable group. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link VariableGroupProps#getName}
         * @param name Property name: The name of variable group. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link VariableGroupProps#getOrganizationId}
         * @param organizationId Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links. This parameter is required.
         * @return {@code this}
         */
        public Builder organizationId(java.lang.String organizationId) {
            this.organizationId = organizationId;
            return this;
        }

        /**
         * Sets the value of {@link VariableGroupProps#getOrganizationId}
         * @param organizationId Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links. This parameter is required.
         * @return {@code this}
         */
        public Builder organizationId(com.aliyun.ros.cdk.core.IResolvable organizationId) {
            this.organizationId = organizationId;
            return this;
        }

        /**
         * Sets the value of {@link VariableGroupProps#getVariables}
         * @param variables Property variables: Variables information. This parameter is required.
         * @return {@code this}
         */
        public Builder variables(com.aliyun.ros.cdk.core.IResolvable variables) {
            this.variables = variables;
            return this;
        }

        /**
         * Sets the value of {@link VariableGroupProps#getVariables}
         * @param variables Property variables: Variables information. This parameter is required.
         * @return {@code this}
         */
        public Builder variables(java.util.List<? extends java.lang.Object> variables) {
            this.variables = variables;
            return this;
        }

        /**
         * Sets the value of {@link VariableGroupProps#getDescription}
         * @param description Property description: The description of variable group.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link VariableGroupProps#getDescription}
         * @param description Property description: The description of variable group.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link VariableGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public VariableGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link VariableGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VariableGroupProps {
        private final java.lang.Object name;
        private final java.lang.Object organizationId;
        private final java.lang.Object variables;
        private final java.lang.Object description;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.organizationId = software.amazon.jsii.Kernel.get(this, "organizationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.variables = software.amazon.jsii.Kernel.get(this, "variables", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.organizationId = java.util.Objects.requireNonNull(builder.organizationId, "organizationId is required");
            this.variables = java.util.Objects.requireNonNull(builder.variables, "variables is required");
            this.description = builder.description;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getOrganizationId() {
            return this.organizationId;
        }

        @Override
        public final java.lang.Object getVariables() {
            return this.variables;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("name", om.valueToTree(this.getName()));
            data.set("organizationId", om.valueToTree(this.getOrganizationId()));
            data.set("variables", om.valueToTree(this.getVariables()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-devops.VariableGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            VariableGroupProps.Jsii$Proxy that = (VariableGroupProps.Jsii$Proxy) o;

            if (!name.equals(that.name)) return false;
            if (!organizationId.equals(that.organizationId)) return false;
            if (!variables.equals(that.variables)) return false;
            return this.description != null ? this.description.equals(that.description) : that.description == null;
        }

        @Override
        public final int hashCode() {
            int result = this.name.hashCode();
            result = 31 * result + (this.organizationId.hashCode());
            result = 31 * result + (this.variables.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            return result;
        }
    }
}
