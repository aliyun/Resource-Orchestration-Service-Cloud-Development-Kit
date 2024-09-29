package com.aliyun.ros.cdk.ros;

/**
 * Properties for defining a <code>RosAssert</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-assert
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:42.302Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.RosAssertProps")
@software.amazon.jsii.Jsii.Proxy(RosAssertProps.Jsii$Proxy.class)
public interface RosAssertProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getValues();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAbortCreation() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getErrorMessage() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOperation() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAssertProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAssertProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAssertProps> {
        java.lang.Object values;
        java.lang.Object abortCreation;
        java.lang.Object errorMessage;
        java.lang.Object operation;

        /**
         * Sets the value of {@link RosAssertProps#getValues}
         * @param values the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder values(java.util.List<? extends java.lang.Object> values) {
            this.values = values;
            return this;
        }

        /**
         * Sets the value of {@link RosAssertProps#getValues}
         * @param values the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder values(com.aliyun.ros.cdk.core.IResolvable values) {
            this.values = values;
            return this;
        }

        /**
         * Sets the value of {@link RosAssertProps#getAbortCreation}
         * @param abortCreation the value to be set.
         * @return {@code this}
         */
        public Builder abortCreation(java.lang.Boolean abortCreation) {
            this.abortCreation = abortCreation;
            return this;
        }

        /**
         * Sets the value of {@link RosAssertProps#getAbortCreation}
         * @param abortCreation the value to be set.
         * @return {@code this}
         */
        public Builder abortCreation(com.aliyun.ros.cdk.core.IResolvable abortCreation) {
            this.abortCreation = abortCreation;
            return this;
        }

        /**
         * Sets the value of {@link RosAssertProps#getErrorMessage}
         * @param errorMessage the value to be set.
         * @return {@code this}
         */
        public Builder errorMessage(java.lang.String errorMessage) {
            this.errorMessage = errorMessage;
            return this;
        }

        /**
         * Sets the value of {@link RosAssertProps#getErrorMessage}
         * @param errorMessage the value to be set.
         * @return {@code this}
         */
        public Builder errorMessage(com.aliyun.ros.cdk.core.IResolvable errorMessage) {
            this.errorMessage = errorMessage;
            return this;
        }

        /**
         * Sets the value of {@link RosAssertProps#getOperation}
         * @param operation the value to be set.
         * @return {@code this}
         */
        public Builder operation(java.lang.String operation) {
            this.operation = operation;
            return this;
        }

        /**
         * Sets the value of {@link RosAssertProps#getOperation}
         * @param operation the value to be set.
         * @return {@code this}
         */
        public Builder operation(com.aliyun.ros.cdk.core.IResolvable operation) {
            this.operation = operation;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAssertProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAssertProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAssertProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAssertProps {
        private final java.lang.Object values;
        private final java.lang.Object abortCreation;
        private final java.lang.Object errorMessage;
        private final java.lang.Object operation;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.values = software.amazon.jsii.Kernel.get(this, "values", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.abortCreation = software.amazon.jsii.Kernel.get(this, "abortCreation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.errorMessage = software.amazon.jsii.Kernel.get(this, "errorMessage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.operation = software.amazon.jsii.Kernel.get(this, "operation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.values = java.util.Objects.requireNonNull(builder.values, "values is required");
            this.abortCreation = builder.abortCreation;
            this.errorMessage = builder.errorMessage;
            this.operation = builder.operation;
        }

        @Override
        public final java.lang.Object getValues() {
            return this.values;
        }

        @Override
        public final java.lang.Object getAbortCreation() {
            return this.abortCreation;
        }

        @Override
        public final java.lang.Object getErrorMessage() {
            return this.errorMessage;
        }

        @Override
        public final java.lang.Object getOperation() {
            return this.operation;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("values", om.valueToTree(this.getValues()));
            if (this.getAbortCreation() != null) {
                data.set("abortCreation", om.valueToTree(this.getAbortCreation()));
            }
            if (this.getErrorMessage() != null) {
                data.set("errorMessage", om.valueToTree(this.getErrorMessage()));
            }
            if (this.getOperation() != null) {
                data.set("operation", om.valueToTree(this.getOperation()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ros.RosAssertProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAssertProps.Jsii$Proxy that = (RosAssertProps.Jsii$Proxy) o;

            if (!values.equals(that.values)) return false;
            if (this.abortCreation != null ? !this.abortCreation.equals(that.abortCreation) : that.abortCreation != null) return false;
            if (this.errorMessage != null ? !this.errorMessage.equals(that.errorMessage) : that.errorMessage != null) return false;
            return this.operation != null ? this.operation.equals(that.operation) : that.operation == null;
        }

        @Override
        public final int hashCode() {
            int result = this.values.hashCode();
            result = 31 * result + (this.abortCreation != null ? this.abortCreation.hashCode() : 0);
            result = 31 * result + (this.errorMessage != null ? this.errorMessage.hashCode() : 0);
            result = 31 * result + (this.operation != null ? this.operation.hashCode() : 0);
            return result;
        }
    }
}
