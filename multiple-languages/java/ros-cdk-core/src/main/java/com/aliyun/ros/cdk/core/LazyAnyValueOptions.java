package com.aliyun.ros.cdk.core;

/**
 * Options for creating lazy untyped tokens.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-25T03:55:57.746Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.LazyAnyValueOptions")
@software.amazon.jsii.Jsii.Proxy(LazyAnyValueOptions.Jsii$Proxy.class)
public interface LazyAnyValueOptions extends software.amazon.jsii.JsiiSerializable {

    /**
     * Use the given name as a display hint.
     * <p>
     * Default: - No hint
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDisplayHint() {
        return null;
    }

    /**
     * If the produced value is an array and it is empty, return 'undefined' instead.
     * <p>
     * Default: false
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getOmitEmptyArray() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link LazyAnyValueOptions}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link LazyAnyValueOptions}
     */
    public static final class Builder implements software.amazon.jsii.Builder<LazyAnyValueOptions> {
        java.lang.String displayHint;
        java.lang.Boolean omitEmptyArray;

        /**
         * Sets the value of {@link LazyAnyValueOptions#getDisplayHint}
         * @param displayHint Use the given name as a display hint.
         * @return {@code this}
         */
        public Builder displayHint(java.lang.String displayHint) {
            this.displayHint = displayHint;
            return this;
        }

        /**
         * Sets the value of {@link LazyAnyValueOptions#getOmitEmptyArray}
         * @param omitEmptyArray If the produced value is an array and it is empty, return 'undefined' instead.
         * @return {@code this}
         */
        public Builder omitEmptyArray(java.lang.Boolean omitEmptyArray) {
            this.omitEmptyArray = omitEmptyArray;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link LazyAnyValueOptions}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public LazyAnyValueOptions build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link LazyAnyValueOptions}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LazyAnyValueOptions {
        private final java.lang.String displayHint;
        private final java.lang.Boolean omitEmptyArray;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.displayHint = software.amazon.jsii.Kernel.get(this, "displayHint", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.omitEmptyArray = software.amazon.jsii.Kernel.get(this, "omitEmptyArray", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.displayHint = builder.displayHint;
            this.omitEmptyArray = builder.omitEmptyArray;
        }

        @Override
        public final java.lang.String getDisplayHint() {
            return this.displayHint;
        }

        @Override
        public final java.lang.Boolean getOmitEmptyArray() {
            return this.omitEmptyArray;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getDisplayHint() != null) {
                data.set("displayHint", om.valueToTree(this.getDisplayHint()));
            }
            if (this.getOmitEmptyArray() != null) {
                data.set("omitEmptyArray", om.valueToTree(this.getOmitEmptyArray()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-core.LazyAnyValueOptions"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            LazyAnyValueOptions.Jsii$Proxy that = (LazyAnyValueOptions.Jsii$Proxy) o;

            if (this.displayHint != null ? !this.displayHint.equals(that.displayHint) : that.displayHint != null) return false;
            return this.omitEmptyArray != null ? this.omitEmptyArray.equals(that.omitEmptyArray) : that.omitEmptyArray == null;
        }

        @Override
        public final int hashCode() {
            int result = this.displayHint != null ? this.displayHint.hashCode() : 0;
            result = 31 * result + (this.omitEmptyArray != null ? this.omitEmptyArray.hashCode() : 0);
            return result;
        }
    }
}
