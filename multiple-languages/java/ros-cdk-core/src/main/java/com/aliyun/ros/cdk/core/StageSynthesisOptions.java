package com.aliyun.ros.cdk.core;

/**
 * Options for assemly synthesis.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-16T03:59:08.147Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.StageSynthesisOptions")
@software.amazon.jsii.Jsii.Proxy(StageSynthesisOptions.Jsii$Proxy.class)
public interface StageSynthesisOptions extends software.amazon.jsii.JsiiSerializable {

    /**
     * Should we skip construct validation.
     * <p>
     * Default: - false
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getSkipValidation() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link StageSynthesisOptions}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link StageSynthesisOptions}
     */
    public static final class Builder implements software.amazon.jsii.Builder<StageSynthesisOptions> {
        java.lang.Boolean skipValidation;

        /**
         * Sets the value of {@link StageSynthesisOptions#getSkipValidation}
         * @param skipValidation Should we skip construct validation.
         * @return {@code this}
         */
        public Builder skipValidation(java.lang.Boolean skipValidation) {
            this.skipValidation = skipValidation;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link StageSynthesisOptions}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public StageSynthesisOptions build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link StageSynthesisOptions}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements StageSynthesisOptions {
        private final java.lang.Boolean skipValidation;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.skipValidation = software.amazon.jsii.Kernel.get(this, "skipValidation", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.skipValidation = builder.skipValidation;
        }

        @Override
        public final java.lang.Boolean getSkipValidation() {
            return this.skipValidation;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getSkipValidation() != null) {
                data.set("skipValidation", om.valueToTree(this.getSkipValidation()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-core.StageSynthesisOptions"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            StageSynthesisOptions.Jsii$Proxy that = (StageSynthesisOptions.Jsii$Proxy) o;

            return this.skipValidation != null ? this.skipValidation.equals(that.skipValidation) : that.skipValidation == null;
        }

        @Override
        public final int hashCode() {
            int result = this.skipValidation != null ? this.skipValidation.hashCode() : 0;
            return result;
        }
    }
}
