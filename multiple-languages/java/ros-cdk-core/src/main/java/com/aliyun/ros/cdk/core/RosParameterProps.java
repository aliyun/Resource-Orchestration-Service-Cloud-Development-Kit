package com.aliyun.ros.cdk.core;

@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T03:36:08.547Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.RosParameterProps")
@software.amazon.jsii.Jsii.Proxy(RosParameterProps.Jsii$Proxy.class)
public interface RosParameterProps extends software.amazon.jsii.JsiiSerializable {

    default @org.jetbrains.annotations.Nullable java.lang.String getAllowedPattern() {
        return null;
    }

    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> getAllowedValues() {
        return null;
    }

    default @org.jetbrains.annotations.Nullable java.lang.String getAssociationProperty() {
        return null;
    }

    default @org.jetbrains.annotations.Nullable java.lang.Boolean getConfirm() {
        return null;
    }

    default @org.jetbrains.annotations.Nullable java.lang.String getConstraintDescription() {
        return null;
    }

    default @org.jetbrains.annotations.Nullable java.lang.Object getDefaultValue() {
        return null;
    }

    default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return null;
    }

    default @org.jetbrains.annotations.Nullable java.lang.String getLabel() {
        return null;
    }

    default @org.jetbrains.annotations.Nullable java.lang.Number getMaxLength() {
        return null;
    }

    default @org.jetbrains.annotations.Nullable java.lang.Number getMaxValue() {
        return null;
    }

    default @org.jetbrains.annotations.Nullable java.lang.Number getMinLength() {
        return null;
    }

    default @org.jetbrains.annotations.Nullable java.lang.Number getMinValue() {
        return null;
    }

    default @org.jetbrains.annotations.Nullable java.lang.Boolean getNoEcho() {
        return null;
    }

    default @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.RosParameterType getType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosParameterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosParameterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosParameterProps> {
        private java.lang.String allowedPattern;
        private java.util.List<java.lang.Object> allowedValues;
        private java.lang.String associationProperty;
        private java.lang.Boolean confirm;
        private java.lang.String constraintDescription;
        private java.lang.Object defaultValue;
        private java.lang.String description;
        private java.lang.String label;
        private java.lang.Number maxLength;
        private java.lang.Number maxValue;
        private java.lang.Number minLength;
        private java.lang.Number minValue;
        private java.lang.Boolean noEcho;
        private com.aliyun.ros.cdk.core.RosParameterType type;

        /**
         * Sets the value of {@link RosParameterProps#getAllowedPattern}
         * @param allowedPattern the value to be set.
         * @return {@code this}
         */
        public Builder allowedPattern(java.lang.String allowedPattern) {
            this.allowedPattern = allowedPattern;
            return this;
        }

        /**
         * Sets the value of {@link RosParameterProps#getAllowedValues}
         * @param allowedValues the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder allowedValues(java.util.List<? extends java.lang.Object> allowedValues) {
            this.allowedValues = (java.util.List<java.lang.Object>)allowedValues;
            return this;
        }

        /**
         * Sets the value of {@link RosParameterProps#getAssociationProperty}
         * @param associationProperty the value to be set.
         * @return {@code this}
         */
        public Builder associationProperty(java.lang.String associationProperty) {
            this.associationProperty = associationProperty;
            return this;
        }

        /**
         * Sets the value of {@link RosParameterProps#getConfirm}
         * @param confirm the value to be set.
         * @return {@code this}
         */
        public Builder confirm(java.lang.Boolean confirm) {
            this.confirm = confirm;
            return this;
        }

        /**
         * Sets the value of {@link RosParameterProps#getConstraintDescription}
         * @param constraintDescription the value to be set.
         * @return {@code this}
         */
        public Builder constraintDescription(java.lang.String constraintDescription) {
            this.constraintDescription = constraintDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosParameterProps#getDefaultValue}
         * @param defaultValue the value to be set.
         * @return {@code this}
         */
        public Builder defaultValue(java.lang.Object defaultValue) {
            this.defaultValue = defaultValue;
            return this;
        }

        /**
         * Sets the value of {@link RosParameterProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosParameterProps#getLabel}
         * @param label the value to be set.
         * @return {@code this}
         */
        public Builder label(java.lang.String label) {
            this.label = label;
            return this;
        }

        /**
         * Sets the value of {@link RosParameterProps#getMaxLength}
         * @param maxLength the value to be set.
         * @return {@code this}
         */
        public Builder maxLength(java.lang.Number maxLength) {
            this.maxLength = maxLength;
            return this;
        }

        /**
         * Sets the value of {@link RosParameterProps#getMaxValue}
         * @param maxValue the value to be set.
         * @return {@code this}
         */
        public Builder maxValue(java.lang.Number maxValue) {
            this.maxValue = maxValue;
            return this;
        }

        /**
         * Sets the value of {@link RosParameterProps#getMinLength}
         * @param minLength the value to be set.
         * @return {@code this}
         */
        public Builder minLength(java.lang.Number minLength) {
            this.minLength = minLength;
            return this;
        }

        /**
         * Sets the value of {@link RosParameterProps#getMinValue}
         * @param minValue the value to be set.
         * @return {@code this}
         */
        public Builder minValue(java.lang.Number minValue) {
            this.minValue = minValue;
            return this;
        }

        /**
         * Sets the value of {@link RosParameterProps#getNoEcho}
         * @param noEcho the value to be set.
         * @return {@code this}
         */
        public Builder noEcho(java.lang.Boolean noEcho) {
            this.noEcho = noEcho;
            return this;
        }

        /**
         * Sets the value of {@link RosParameterProps#getType}
         * @param type the value to be set.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.RosParameterType type) {
            this.type = type;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosParameterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosParameterProps build() {
            return new Jsii$Proxy(allowedPattern, allowedValues, associationProperty, confirm, constraintDescription, defaultValue, description, label, maxLength, maxValue, minLength, minValue, noEcho, type);
        }
    }

    /**
     * An implementation for {@link RosParameterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosParameterProps {
        private final java.lang.String allowedPattern;
        private final java.util.List<java.lang.Object> allowedValues;
        private final java.lang.String associationProperty;
        private final java.lang.Boolean confirm;
        private final java.lang.String constraintDescription;
        private final java.lang.Object defaultValue;
        private final java.lang.String description;
        private final java.lang.String label;
        private final java.lang.Number maxLength;
        private final java.lang.Number maxValue;
        private final java.lang.Number minLength;
        private final java.lang.Number minValue;
        private final java.lang.Boolean noEcho;
        private final com.aliyun.ros.cdk.core.RosParameterType type;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.allowedPattern = software.amazon.jsii.Kernel.get(this, "allowedPattern", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.allowedValues = software.amazon.jsii.Kernel.get(this, "allowedValues", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)));
            this.associationProperty = software.amazon.jsii.Kernel.get(this, "associationProperty", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.confirm = software.amazon.jsii.Kernel.get(this, "confirm", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.constraintDescription = software.amazon.jsii.Kernel.get(this, "constraintDescription", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.defaultValue = software.amazon.jsii.Kernel.get(this, "defaultValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.label = software.amazon.jsii.Kernel.get(this, "label", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.maxLength = software.amazon.jsii.Kernel.get(this, "maxLength", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.maxValue = software.amazon.jsii.Kernel.get(this, "maxValue", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.minLength = software.amazon.jsii.Kernel.get(this, "minLength", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.minValue = software.amazon.jsii.Kernel.get(this, "minValue", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.noEcho = software.amazon.jsii.Kernel.get(this, "noEcho", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.RosParameterType.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final java.lang.String allowedPattern, final java.util.List<? extends java.lang.Object> allowedValues, final java.lang.String associationProperty, final java.lang.Boolean confirm, final java.lang.String constraintDescription, final java.lang.Object defaultValue, final java.lang.String description, final java.lang.String label, final java.lang.Number maxLength, final java.lang.Number maxValue, final java.lang.Number minLength, final java.lang.Number minValue, final java.lang.Boolean noEcho, final com.aliyun.ros.cdk.core.RosParameterType type) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.allowedPattern = allowedPattern;
            this.allowedValues = (java.util.List<java.lang.Object>)allowedValues;
            this.associationProperty = associationProperty;
            this.confirm = confirm;
            this.constraintDescription = constraintDescription;
            this.defaultValue = defaultValue;
            this.description = description;
            this.label = label;
            this.maxLength = maxLength;
            this.maxValue = maxValue;
            this.minLength = minLength;
            this.minValue = minValue;
            this.noEcho = noEcho;
            this.type = type;
        }

        @Override
        public final java.lang.String getAllowedPattern() {
            return this.allowedPattern;
        }

        @Override
        public final java.util.List<java.lang.Object> getAllowedValues() {
            return this.allowedValues;
        }

        @Override
        public final java.lang.String getAssociationProperty() {
            return this.associationProperty;
        }

        @Override
        public final java.lang.Boolean getConfirm() {
            return this.confirm;
        }

        @Override
        public final java.lang.String getConstraintDescription() {
            return this.constraintDescription;
        }

        @Override
        public final java.lang.Object getDefaultValue() {
            return this.defaultValue;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.String getLabel() {
            return this.label;
        }

        @Override
        public final java.lang.Number getMaxLength() {
            return this.maxLength;
        }

        @Override
        public final java.lang.Number getMaxValue() {
            return this.maxValue;
        }

        @Override
        public final java.lang.Number getMinLength() {
            return this.minLength;
        }

        @Override
        public final java.lang.Number getMinValue() {
            return this.minValue;
        }

        @Override
        public final java.lang.Boolean getNoEcho() {
            return this.noEcho;
        }

        @Override
        public final com.aliyun.ros.cdk.core.RosParameterType getType() {
            return this.type;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getAllowedPattern() != null) {
                data.set("allowedPattern", om.valueToTree(this.getAllowedPattern()));
            }
            if (this.getAllowedValues() != null) {
                data.set("allowedValues", om.valueToTree(this.getAllowedValues()));
            }
            if (this.getAssociationProperty() != null) {
                data.set("associationProperty", om.valueToTree(this.getAssociationProperty()));
            }
            if (this.getConfirm() != null) {
                data.set("confirm", om.valueToTree(this.getConfirm()));
            }
            if (this.getConstraintDescription() != null) {
                data.set("constraintDescription", om.valueToTree(this.getConstraintDescription()));
            }
            if (this.getDefaultValue() != null) {
                data.set("defaultValue", om.valueToTree(this.getDefaultValue()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getLabel() != null) {
                data.set("label", om.valueToTree(this.getLabel()));
            }
            if (this.getMaxLength() != null) {
                data.set("maxLength", om.valueToTree(this.getMaxLength()));
            }
            if (this.getMaxValue() != null) {
                data.set("maxValue", om.valueToTree(this.getMaxValue()));
            }
            if (this.getMinLength() != null) {
                data.set("minLength", om.valueToTree(this.getMinLength()));
            }
            if (this.getMinValue() != null) {
                data.set("minValue", om.valueToTree(this.getMinValue()));
            }
            if (this.getNoEcho() != null) {
                data.set("noEcho", om.valueToTree(this.getNoEcho()));
            }
            if (this.getType() != null) {
                data.set("type", om.valueToTree(this.getType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-core.RosParameterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosParameterProps.Jsii$Proxy that = (RosParameterProps.Jsii$Proxy) o;

            if (this.allowedPattern != null ? !this.allowedPattern.equals(that.allowedPattern) : that.allowedPattern != null) return false;
            if (this.allowedValues != null ? !this.allowedValues.equals(that.allowedValues) : that.allowedValues != null) return false;
            if (this.associationProperty != null ? !this.associationProperty.equals(that.associationProperty) : that.associationProperty != null) return false;
            if (this.confirm != null ? !this.confirm.equals(that.confirm) : that.confirm != null) return false;
            if (this.constraintDescription != null ? !this.constraintDescription.equals(that.constraintDescription) : that.constraintDescription != null) return false;
            if (this.defaultValue != null ? !this.defaultValue.equals(that.defaultValue) : that.defaultValue != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.label != null ? !this.label.equals(that.label) : that.label != null) return false;
            if (this.maxLength != null ? !this.maxLength.equals(that.maxLength) : that.maxLength != null) return false;
            if (this.maxValue != null ? !this.maxValue.equals(that.maxValue) : that.maxValue != null) return false;
            if (this.minLength != null ? !this.minLength.equals(that.minLength) : that.minLength != null) return false;
            if (this.minValue != null ? !this.minValue.equals(that.minValue) : that.minValue != null) return false;
            if (this.noEcho != null ? !this.noEcho.equals(that.noEcho) : that.noEcho != null) return false;
            return this.type != null ? this.type.equals(that.type) : that.type == null;
        }

        @Override
        public final int hashCode() {
            int result = this.allowedPattern != null ? this.allowedPattern.hashCode() : 0;
            result = 31 * result + (this.allowedValues != null ? this.allowedValues.hashCode() : 0);
            result = 31 * result + (this.associationProperty != null ? this.associationProperty.hashCode() : 0);
            result = 31 * result + (this.confirm != null ? this.confirm.hashCode() : 0);
            result = 31 * result + (this.constraintDescription != null ? this.constraintDescription.hashCode() : 0);
            result = 31 * result + (this.defaultValue != null ? this.defaultValue.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.label != null ? this.label.hashCode() : 0);
            result = 31 * result + (this.maxLength != null ? this.maxLength.hashCode() : 0);
            result = 31 * result + (this.maxValue != null ? this.maxValue.hashCode() : 0);
            result = 31 * result + (this.minLength != null ? this.minLength.hashCode() : 0);
            result = 31 * result + (this.minValue != null ? this.minValue.hashCode() : 0);
            result = 31 * result + (this.noEcho != null ? this.noEcho.hashCode() : 0);
            result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
            return result;
        }
    }
}
