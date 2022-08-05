package com.aliyun.ros.cdk.oos;

/**
 * Properties for defining a `ALIYUN::OOS::Parameter`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.63.2 (build a8a8833)", date = "2022-08-05T07:29:04.939Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.ParameterProps")
@software.amazon.jsii.Jsii.Proxy(ParameterProps.Jsii$Proxy.class)
public interface ParameterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property name: The name of the parameter.
     * <p>
     * The name must be 1 to 200 characters in length,and can contain letters, digits, hyphens (-), and underscores (_).
     * It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     * Property type: The data type of the common parameter.
     * <p>
     * Valid values: String and StringList.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getType();

    /**
     * Property value: The value of the parameter.
     * <p>
     * The value must be 1 to 4096 characters in length.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getValue();

    /**
     * Property constraints: The constraints of the parameter.
     * <p>
     * By default, this parameter is null. Valid values:
     * AllowedValues: The value that is allowed for the parameter. It must be an array string.
     * AllowedPattern: The pattern that is allowed for the parameter. It must be a regular expression.
     * MinLength: The minimum length of the parameter.
     * MaxLength: The maximum length of the parameter.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConstraints() {
        return null;
    }

    /**
     * Property description: The description of the parameter.
     * <p>
     * The description must be 1 to 200 characters in length.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property resourceGroupId: Resource group id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ParameterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ParameterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ParameterProps> {
        java.lang.Object name;
        java.lang.Object type;
        java.lang.Object value;
        java.lang.Object constraints;
        java.lang.Object description;
        java.lang.Object resourceGroupId;

        /**
         * Sets the value of {@link ParameterProps#getName}
         * @param name Property name: The name of the parameter. This parameter is required.
         *             The name must be 1 to 200 characters in length,and can contain letters, digits, hyphens (-), and underscores (_).
         *             It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ParameterProps#getName}
         * @param name Property name: The name of the parameter. This parameter is required.
         *             The name must be 1 to 200 characters in length,and can contain letters, digits, hyphens (-), and underscores (_).
         *             It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ParameterProps#getType}
         * @param type Property type: The data type of the common parameter. This parameter is required.
         *             Valid values: String and StringList.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link ParameterProps#getType}
         * @param type Property type: The data type of the common parameter. This parameter is required.
         *             Valid values: String and StringList.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link ParameterProps#getValue}
         * @param value Property value: The value of the parameter. This parameter is required.
         *              The value must be 1 to 4096 characters in length.
         * @return {@code this}
         */
        public Builder value(java.lang.String value) {
            this.value = value;
            return this;
        }

        /**
         * Sets the value of {@link ParameterProps#getValue}
         * @param value Property value: The value of the parameter. This parameter is required.
         *              The value must be 1 to 4096 characters in length.
         * @return {@code this}
         */
        public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
            this.value = value;
            return this;
        }

        /**
         * Sets the value of {@link ParameterProps#getConstraints}
         * @param constraints Property constraints: The constraints of the parameter.
         *                    By default, this parameter is null. Valid values:
         *                    AllowedValues: The value that is allowed for the parameter. It must be an array string.
         *                    AllowedPattern: The pattern that is allowed for the parameter. It must be a regular expression.
         *                    MinLength: The minimum length of the parameter.
         *                    MaxLength: The maximum length of the parameter.
         * @return {@code this}
         */
        public Builder constraints(java.lang.String constraints) {
            this.constraints = constraints;
            return this;
        }

        /**
         * Sets the value of {@link ParameterProps#getConstraints}
         * @param constraints Property constraints: The constraints of the parameter.
         *                    By default, this parameter is null. Valid values:
         *                    AllowedValues: The value that is allowed for the parameter. It must be an array string.
         *                    AllowedPattern: The pattern that is allowed for the parameter. It must be a regular expression.
         *                    MinLength: The minimum length of the parameter.
         *                    MaxLength: The maximum length of the parameter.
         * @return {@code this}
         */
        public Builder constraints(com.aliyun.ros.cdk.core.IResolvable constraints) {
            this.constraints = constraints;
            return this;
        }

        /**
         * Sets the value of {@link ParameterProps#getDescription}
         * @param description Property description: The description of the parameter.
         *                    The description must be 1 to 200 characters in length.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ParameterProps#getDescription}
         * @param description Property description: The description of the parameter.
         *                    The description must be 1 to 200 characters in length.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ParameterProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ParameterProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ParameterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ParameterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ParameterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ParameterProps {
        private final java.lang.Object name;
        private final java.lang.Object type;
        private final java.lang.Object value;
        private final java.lang.Object constraints;
        private final java.lang.Object description;
        private final java.lang.Object resourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.constraints = software.amazon.jsii.Kernel.get(this, "constraints", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
            this.value = java.util.Objects.requireNonNull(builder.value, "value is required");
            this.constraints = builder.constraints;
            this.description = builder.description;
            this.resourceGroupId = builder.resourceGroupId;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getType() {
            return this.type;
        }

        @Override
        public final java.lang.Object getValue() {
            return this.value;
        }

        @Override
        public final java.lang.Object getConstraints() {
            return this.constraints;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("name", om.valueToTree(this.getName()));
            data.set("type", om.valueToTree(this.getType()));
            data.set("value", om.valueToTree(this.getValue()));
            if (this.getConstraints() != null) {
                data.set("constraints", om.valueToTree(this.getConstraints()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oos.ParameterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ParameterProps.Jsii$Proxy that = (ParameterProps.Jsii$Proxy) o;

            if (!name.equals(that.name)) return false;
            if (!type.equals(that.type)) return false;
            if (!value.equals(that.value)) return false;
            if (this.constraints != null ? !this.constraints.equals(that.constraints) : that.constraints != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.resourceGroupId != null ? this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.name.hashCode();
            result = 31 * result + (this.type.hashCode());
            result = 31 * result + (this.value.hashCode());
            result = 31 * result + (this.constraints != null ? this.constraints.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            return result;
        }
    }
}
