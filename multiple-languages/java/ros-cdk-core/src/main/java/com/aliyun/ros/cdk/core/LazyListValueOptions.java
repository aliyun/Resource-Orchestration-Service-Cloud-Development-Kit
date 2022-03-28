package com.aliyun.ros.cdk.core;

/**
 * Options for creating a lazy list token.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-28T07:49:01.255Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.LazyListValueOptions")
@software.amazon.jsii.Jsii.Proxy(LazyListValueOptions.Jsii$Proxy.class)
public interface LazyListValueOptions extends software.amazon.jsii.JsiiSerializable {

    /**
     * Use the given name as a display hint.
     * <p>
     * Default: - No hint
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDisplayHint() {
        return null;
    }

    /**
     * If the produced list is empty, return 'undefined' instead.
     * <p>
     * Default: false
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getOmitEmpty() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link LazyListValueOptions}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link LazyListValueOptions}
     */
    public static final class Builder implements software.amazon.jsii.Builder<LazyListValueOptions> {
        java.lang.String displayHint;
        java.lang.Boolean omitEmpty;

        /**
         * Sets the value of {@link LazyListValueOptions#getDisplayHint}
         * @param displayHint Use the given name as a display hint.
         * @return {@code this}
         */
        public Builder displayHint(java.lang.String displayHint) {
            this.displayHint = displayHint;
            return this;
        }

        /**
         * Sets the value of {@link LazyListValueOptions#getOmitEmpty}
         * @param omitEmpty If the produced list is empty, return 'undefined' instead.
         * @return {@code this}
         */
        public Builder omitEmpty(java.lang.Boolean omitEmpty) {
            this.omitEmpty = omitEmpty;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link LazyListValueOptions}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public LazyListValueOptions build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link LazyListValueOptions}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LazyListValueOptions {
        private final java.lang.String displayHint;
        private final java.lang.Boolean omitEmpty;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.displayHint = software.amazon.jsii.Kernel.get(this, "displayHint", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.omitEmpty = software.amazon.jsii.Kernel.get(this, "omitEmpty", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.displayHint = builder.displayHint;
            this.omitEmpty = builder.omitEmpty;
        }

        @Override
        public final java.lang.String getDisplayHint() {
            return this.displayHint;
        }

        @Override
        public final java.lang.Boolean getOmitEmpty() {
            return this.omitEmpty;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getDisplayHint() != null) {
                data.set("displayHint", om.valueToTree(this.getDisplayHint()));
            }
            if (this.getOmitEmpty() != null) {
                data.set("omitEmpty", om.valueToTree(this.getOmitEmpty()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-core.LazyListValueOptions"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            LazyListValueOptions.Jsii$Proxy that = (LazyListValueOptions.Jsii$Proxy) o;

            if (this.displayHint != null ? !this.displayHint.equals(that.displayHint) : that.displayHint != null) return false;
            return this.omitEmpty != null ? this.omitEmpty.equals(that.omitEmpty) : that.omitEmpty == null;
        }

        @Override
        public final int hashCode() {
            int result = this.displayHint != null ? this.displayHint.hashCode() : 0;
            result = 31 * result + (this.omitEmpty != null ? this.omitEmpty.hashCode() : 0);
            return result;
        }
    }
}
