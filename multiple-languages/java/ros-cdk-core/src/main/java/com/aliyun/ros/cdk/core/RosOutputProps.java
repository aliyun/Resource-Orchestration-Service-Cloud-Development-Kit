package com.aliyun.ros.cdk.core;

@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-03-01T09:16:49.686Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.RosOutputProps")
@software.amazon.jsii.Jsii.Proxy(RosOutputProps.Jsii$Proxy.class)
public interface RosOutputProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * The value of the property returned by Resource Orchestration Service.
     * <p>
     * The value of an output can include literals, parameter references, pseudo-parameters,
     * a mapping value, or intrinsic functions.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getValue();

    /**
     * A condition to associate with this output value.
     * <p>
     * If the condition evaluates
     * to <code>false</code>, this output value will not be included in the stack.
     * <p>
     * Default: - No condition is associated with the output.
     */
    default @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.RosCondition getCondition() {
        return null;
    }

    /**
     * A String type that describes the output value.
     * <p>
     * The description can be a maximum of 4 K in length.
     * <p>
     * Default: - No description.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return null;
    }

    /**
     * The name used to export the value of this output across stacks.
     * <p>
     * To import the value from another stack, use <code>Fn.importValue(exportName)</code>.
     * <p>
     * Default: - the output is not exported
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getExportName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosOutputProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosOutputProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosOutputProps> {
        java.lang.Object value;
        com.aliyun.ros.cdk.core.RosCondition condition;
        java.lang.String description;
        java.lang.String exportName;

        /**
         * Sets the value of {@link RosOutputProps#getValue}
         * @param value The value of the property returned by Resource Orchestration Service. This parameter is required.
         *              The value of an output can include literals, parameter references, pseudo-parameters,
         *              a mapping value, or intrinsic functions.
         * @return {@code this}
         */
        public Builder value(java.lang.Object value) {
            this.value = value;
            return this;
        }

        /**
         * Sets the value of {@link RosOutputProps#getCondition}
         * @param condition A condition to associate with this output value.
         *                  If the condition evaluates
         *                  to <code>false</code>, this output value will not be included in the stack.
         * @return {@code this}
         */
        public Builder condition(com.aliyun.ros.cdk.core.RosCondition condition) {
            this.condition = condition;
            return this;
        }

        /**
         * Sets the value of {@link RosOutputProps#getDescription}
         * @param description A String type that describes the output value.
         *                    The description can be a maximum of 4 K in length.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosOutputProps#getExportName}
         * @param exportName The name used to export the value of this output across stacks.
         *                   To import the value from another stack, use <code>Fn.importValue(exportName)</code>.
         * @return {@code this}
         */
        public Builder exportName(java.lang.String exportName) {
            this.exportName = exportName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosOutputProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosOutputProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosOutputProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosOutputProps {
        private final java.lang.Object value;
        private final com.aliyun.ros.cdk.core.RosCondition condition;
        private final java.lang.String description;
        private final java.lang.String exportName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.condition = software.amazon.jsii.Kernel.get(this, "condition", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.RosCondition.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.exportName = software.amazon.jsii.Kernel.get(this, "exportName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.value = java.util.Objects.requireNonNull(builder.value, "value is required");
            this.condition = builder.condition;
            this.description = builder.description;
            this.exportName = builder.exportName;
        }

        @Override
        public final java.lang.Object getValue() {
            return this.value;
        }

        @Override
        public final com.aliyun.ros.cdk.core.RosCondition getCondition() {
            return this.condition;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.String getExportName() {
            return this.exportName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("value", om.valueToTree(this.getValue()));
            if (this.getCondition() != null) {
                data.set("condition", om.valueToTree(this.getCondition()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getExportName() != null) {
                data.set("exportName", om.valueToTree(this.getExportName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-core.RosOutputProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosOutputProps.Jsii$Proxy that = (RosOutputProps.Jsii$Proxy) o;

            if (!value.equals(that.value)) return false;
            if (this.condition != null ? !this.condition.equals(that.condition) : that.condition != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.exportName != null ? this.exportName.equals(that.exportName) : that.exportName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.value.hashCode();
            result = 31 * result + (this.condition != null ? this.condition.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.exportName != null ? this.exportName.hashCode() : 0);
            return result;
        }
    }
}
