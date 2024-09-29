package com.aliyun.ros.cdk.core;

/**
 * Stack artifact options.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:35.829Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.SynthesizeStackArtifactOptions")
@software.amazon.jsii.Jsii.Proxy(SynthesizeStackArtifactOptions.Jsii$Proxy.class)
public interface SynthesizeStackArtifactOptions extends software.amazon.jsii.JsiiSerializable {

    /**
     * Identifiers of additional dependencies.
     * <p>
     * Default: - No additional dependencies
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getAdditionalDependencies() {
        return null;
    }

    /**
     * Values for ROS stack parameters that should be passed when the stack is deployed.
     * <p>
     * Default: - No parameters
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getParameters() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SynthesizeStackArtifactOptions}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SynthesizeStackArtifactOptions}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SynthesizeStackArtifactOptions> {
        java.util.List<java.lang.String> additionalDependencies;
        java.util.Map<java.lang.String, java.lang.String> parameters;

        /**
         * Sets the value of {@link SynthesizeStackArtifactOptions#getAdditionalDependencies}
         * @param additionalDependencies Identifiers of additional dependencies.
         * @return {@code this}
         */
        public Builder additionalDependencies(java.util.List<java.lang.String> additionalDependencies) {
            this.additionalDependencies = additionalDependencies;
            return this;
        }

        /**
         * Sets the value of {@link SynthesizeStackArtifactOptions#getParameters}
         * @param parameters Values for ROS stack parameters that should be passed when the stack is deployed.
         * @return {@code this}
         */
        public Builder parameters(java.util.Map<java.lang.String, java.lang.String> parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SynthesizeStackArtifactOptions}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SynthesizeStackArtifactOptions build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SynthesizeStackArtifactOptions}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SynthesizeStackArtifactOptions {
        private final java.util.List<java.lang.String> additionalDependencies;
        private final java.util.Map<java.lang.String, java.lang.String> parameters;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.additionalDependencies = software.amazon.jsii.Kernel.get(this, "additionalDependencies", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.parameters = software.amazon.jsii.Kernel.get(this, "parameters", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.additionalDependencies = builder.additionalDependencies;
            this.parameters = builder.parameters;
        }

        @Override
        public final java.util.List<java.lang.String> getAdditionalDependencies() {
            return this.additionalDependencies;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getParameters() {
            return this.parameters;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getAdditionalDependencies() != null) {
                data.set("additionalDependencies", om.valueToTree(this.getAdditionalDependencies()));
            }
            if (this.getParameters() != null) {
                data.set("parameters", om.valueToTree(this.getParameters()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-core.SynthesizeStackArtifactOptions"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SynthesizeStackArtifactOptions.Jsii$Proxy that = (SynthesizeStackArtifactOptions.Jsii$Proxy) o;

            if (this.additionalDependencies != null ? !this.additionalDependencies.equals(that.additionalDependencies) : that.additionalDependencies != null) return false;
            return this.parameters != null ? this.parameters.equals(that.parameters) : that.parameters == null;
        }

        @Override
        public final int hashCode() {
            int result = this.additionalDependencies != null ? this.additionalDependencies.hashCode() : 0;
            result = 31 * result + (this.parameters != null ? this.parameters.hashCode() : 0);
            return result;
        }
    }
}
