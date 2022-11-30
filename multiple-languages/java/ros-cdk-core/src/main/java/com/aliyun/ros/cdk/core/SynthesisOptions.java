package com.aliyun.ros.cdk.core;

/**
 * (deprecated) Options for synthesis.
 * <p>
 * @deprecated use `app.synth()` or `stage.synth()` instead
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-30T05:21:17.708Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.SynthesisOptions")
@software.amazon.jsii.Jsii.Proxy(SynthesisOptions.Jsii$Proxy.class)
@software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Deprecated)
@Deprecated
public interface SynthesisOptions extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.cxapi.AssemblyBuildOptions {

    /**
     * (deprecated) The output directory into which to synthesize the cloud assembly.
     * <p>
     * Default: - creates a temporary directory
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Deprecated)
    @Deprecated
    default @org.jetbrains.annotations.Nullable java.lang.String getOutdir() {
        return null;
    }

    /**
     * (deprecated) Whether synthesis should skip the validation phase.
     * <p>
     * Default: false
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Deprecated)
    @Deprecated
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getSkipValidation() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SynthesisOptions}
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Deprecated)
    @Deprecated
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SynthesisOptions}
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Deprecated)
    @Deprecated
    public static final class Builder implements software.amazon.jsii.Builder<SynthesisOptions> {
        java.lang.String outdir;
        java.lang.Boolean skipValidation;
        com.aliyun.ros.cdk.cxapi.RuntimeInfo runtimeInfo;

        /**
         * Sets the value of {@link SynthesisOptions#getOutdir}
         * @param outdir The output directory into which to synthesize the cloud assembly.
         * @return {@code this}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Deprecated)
        @Deprecated
        public Builder outdir(java.lang.String outdir) {
            this.outdir = outdir;
            return this;
        }

        /**
         * Sets the value of {@link SynthesisOptions#getSkipValidation}
         * @param skipValidation Whether synthesis should skip the validation phase.
         * @return {@code this}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Deprecated)
        @Deprecated
        public Builder skipValidation(java.lang.Boolean skipValidation) {
            this.skipValidation = skipValidation;
            return this;
        }

        /**
         * Sets the value of {@link SynthesisOptions#getRuntimeInfo}
         * @param runtimeInfo Include the specified runtime information (module versions) in manifest.
         * @return {@code this}
         */
        public Builder runtimeInfo(com.aliyun.ros.cdk.cxapi.RuntimeInfo runtimeInfo) {
            this.runtimeInfo = runtimeInfo;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SynthesisOptions}
         * @throws NullPointerException if any required attribute was not provided
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Deprecated)
        @Deprecated
        @Override
        public SynthesisOptions build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SynthesisOptions}
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Deprecated)
    @Deprecated
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SynthesisOptions {
        private final java.lang.String outdir;
        private final java.lang.Boolean skipValidation;
        private final com.aliyun.ros.cdk.cxapi.RuntimeInfo runtimeInfo;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.outdir = software.amazon.jsii.Kernel.get(this, "outdir", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.skipValidation = software.amazon.jsii.Kernel.get(this, "skipValidation", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.runtimeInfo = software.amazon.jsii.Kernel.get(this, "runtimeInfo", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cxapi.RuntimeInfo.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.outdir = builder.outdir;
            this.skipValidation = builder.skipValidation;
            this.runtimeInfo = builder.runtimeInfo;
        }

        @Override
        public final java.lang.String getOutdir() {
            return this.outdir;
        }

        @Override
        public final java.lang.Boolean getSkipValidation() {
            return this.skipValidation;
        }

        @Override
        public final com.aliyun.ros.cdk.cxapi.RuntimeInfo getRuntimeInfo() {
            return this.runtimeInfo;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getOutdir() != null) {
                data.set("outdir", om.valueToTree(this.getOutdir()));
            }
            if (this.getSkipValidation() != null) {
                data.set("skipValidation", om.valueToTree(this.getSkipValidation()));
            }
            if (this.getRuntimeInfo() != null) {
                data.set("runtimeInfo", om.valueToTree(this.getRuntimeInfo()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-core.SynthesisOptions"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SynthesisOptions.Jsii$Proxy that = (SynthesisOptions.Jsii$Proxy) o;

            if (this.outdir != null ? !this.outdir.equals(that.outdir) : that.outdir != null) return false;
            if (this.skipValidation != null ? !this.skipValidation.equals(that.skipValidation) : that.skipValidation != null) return false;
            return this.runtimeInfo != null ? this.runtimeInfo.equals(that.runtimeInfo) : that.runtimeInfo == null;
        }

        @Override
        public final int hashCode() {
            int result = this.outdir != null ? this.outdir.hashCode() : 0;
            result = 31 * result + (this.skipValidation != null ? this.skipValidation.hashCode() : 0);
            result = 31 * result + (this.runtimeInfo != null ? this.runtimeInfo.hashCode() : 0);
            return result;
        }
    }
}
