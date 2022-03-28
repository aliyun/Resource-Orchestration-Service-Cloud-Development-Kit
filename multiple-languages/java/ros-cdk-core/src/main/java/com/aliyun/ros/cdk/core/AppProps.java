package com.aliyun.ros.cdk.core;

/**
 * Initialization props for apps.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-28T07:49:01.224Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.AppProps")
@software.amazon.jsii.Jsii.Proxy(AppProps.Jsii$Proxy.class)
public interface AppProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Automatically call 'synth()' before the program exits.
     * <p>
     * If you set this, you don't have to call 'synth()' explicitly. Note that
     * this feature is only available for certain programming languages, and
     * calling 'synth()' is still recommended.
     * <p>
     * Default true if running via CDK CLI ('CDK_OUTDIR' is set), 'false'
     * otherwise
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getAutoSynth() {
        return null;
    }

    /**
     * Additional context values for the application.
     * <p>
     * Context set by the CLI or the 'context' key in 'cdk.json' has precedence.
     * <p>
     * Context can be read from any construct using 'node.getContext(key)'.
     * <p>
     * Default: - no additional context
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getContext() {
        return null;
    }

    /**
     * The output directory into which to emit synthesized artifacts.
     * <p>
     * Default - If this value is <em>not</em> set, considers the environment variable 'CDK_OUTDIR'.
     * If 'CDK_OUTDIR' is not defined, uses a temp directory.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getOutdir() {
        return null;
    }

    /**
     * Include runtime versioning information.
     * <p>
     * Default: true runtime info is included unless related comtext is set.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getRuntimeInfo() {
        return null;
    }

    /**
     * Include construct creation stack trace.
     * <p>
     * Default: true stack traces are included unless related context is set.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getStackTraces() {
        return null;
    }

    /**
     * Include construct tree metadata as part of the Cloud Assembly.
     * <p>
     * Default: true
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getTreeMetadata() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AppProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AppProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AppProps> {
        java.lang.Boolean autoSynth;
        java.util.Map<java.lang.String, java.lang.String> context;
        java.lang.String outdir;
        java.lang.Boolean runtimeInfo;
        java.lang.Boolean stackTraces;
        java.lang.Boolean treeMetadata;

        /**
         * Sets the value of {@link AppProps#getAutoSynth}
         * @param autoSynth Automatically call 'synth()' before the program exits.
         *                  If you set this, you don't have to call 'synth()' explicitly. Note that
         *                  this feature is only available for certain programming languages, and
         *                  calling 'synth()' is still recommended.
         *                  <p>
         *                  Default true if running via CDK CLI ('CDK_OUTDIR' is set), 'false'
         *                  otherwise
         * @return {@code this}
         */
        public Builder autoSynth(java.lang.Boolean autoSynth) {
            this.autoSynth = autoSynth;
            return this;
        }

        /**
         * Sets the value of {@link AppProps#getContext}
         * @param context Additional context values for the application.
         *                Context set by the CLI or the 'context' key in 'cdk.json' has precedence.
         *                <p>
         *                Context can be read from any construct using 'node.getContext(key)'.
         * @return {@code this}
         */
        public Builder context(java.util.Map<java.lang.String, java.lang.String> context) {
            this.context = context;
            return this;
        }

        /**
         * Sets the value of {@link AppProps#getOutdir}
         * @param outdir The output directory into which to emit synthesized artifacts.
         *               Default - If this value is <em>not</em> set, considers the environment variable 'CDK_OUTDIR'.
         *               If 'CDK_OUTDIR' is not defined, uses a temp directory.
         * @return {@code this}
         */
        public Builder outdir(java.lang.String outdir) {
            this.outdir = outdir;
            return this;
        }

        /**
         * Sets the value of {@link AppProps#getRuntimeInfo}
         * @param runtimeInfo Include runtime versioning information.
         * @return {@code this}
         */
        public Builder runtimeInfo(java.lang.Boolean runtimeInfo) {
            this.runtimeInfo = runtimeInfo;
            return this;
        }

        /**
         * Sets the value of {@link AppProps#getStackTraces}
         * @param stackTraces Include construct creation stack trace.
         * @return {@code this}
         */
        public Builder stackTraces(java.lang.Boolean stackTraces) {
            this.stackTraces = stackTraces;
            return this;
        }

        /**
         * Sets the value of {@link AppProps#getTreeMetadata}
         * @param treeMetadata Include construct tree metadata as part of the Cloud Assembly.
         * @return {@code this}
         */
        public Builder treeMetadata(java.lang.Boolean treeMetadata) {
            this.treeMetadata = treeMetadata;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AppProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AppProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AppProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AppProps {
        private final java.lang.Boolean autoSynth;
        private final java.util.Map<java.lang.String, java.lang.String> context;
        private final java.lang.String outdir;
        private final java.lang.Boolean runtimeInfo;
        private final java.lang.Boolean stackTraces;
        private final java.lang.Boolean treeMetadata;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.autoSynth = software.amazon.jsii.Kernel.get(this, "autoSynth", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.context = software.amazon.jsii.Kernel.get(this, "context", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.outdir = software.amazon.jsii.Kernel.get(this, "outdir", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.runtimeInfo = software.amazon.jsii.Kernel.get(this, "runtimeInfo", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.stackTraces = software.amazon.jsii.Kernel.get(this, "stackTraces", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.treeMetadata = software.amazon.jsii.Kernel.get(this, "treeMetadata", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.autoSynth = builder.autoSynth;
            this.context = builder.context;
            this.outdir = builder.outdir;
            this.runtimeInfo = builder.runtimeInfo;
            this.stackTraces = builder.stackTraces;
            this.treeMetadata = builder.treeMetadata;
        }

        @Override
        public final java.lang.Boolean getAutoSynth() {
            return this.autoSynth;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getContext() {
            return this.context;
        }

        @Override
        public final java.lang.String getOutdir() {
            return this.outdir;
        }

        @Override
        public final java.lang.Boolean getRuntimeInfo() {
            return this.runtimeInfo;
        }

        @Override
        public final java.lang.Boolean getStackTraces() {
            return this.stackTraces;
        }

        @Override
        public final java.lang.Boolean getTreeMetadata() {
            return this.treeMetadata;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getAutoSynth() != null) {
                data.set("autoSynth", om.valueToTree(this.getAutoSynth()));
            }
            if (this.getContext() != null) {
                data.set("context", om.valueToTree(this.getContext()));
            }
            if (this.getOutdir() != null) {
                data.set("outdir", om.valueToTree(this.getOutdir()));
            }
            if (this.getRuntimeInfo() != null) {
                data.set("runtimeInfo", om.valueToTree(this.getRuntimeInfo()));
            }
            if (this.getStackTraces() != null) {
                data.set("stackTraces", om.valueToTree(this.getStackTraces()));
            }
            if (this.getTreeMetadata() != null) {
                data.set("treeMetadata", om.valueToTree(this.getTreeMetadata()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-core.AppProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AppProps.Jsii$Proxy that = (AppProps.Jsii$Proxy) o;

            if (this.autoSynth != null ? !this.autoSynth.equals(that.autoSynth) : that.autoSynth != null) return false;
            if (this.context != null ? !this.context.equals(that.context) : that.context != null) return false;
            if (this.outdir != null ? !this.outdir.equals(that.outdir) : that.outdir != null) return false;
            if (this.runtimeInfo != null ? !this.runtimeInfo.equals(that.runtimeInfo) : that.runtimeInfo != null) return false;
            if (this.stackTraces != null ? !this.stackTraces.equals(that.stackTraces) : that.stackTraces != null) return false;
            return this.treeMetadata != null ? this.treeMetadata.equals(that.treeMetadata) : that.treeMetadata == null;
        }

        @Override
        public final int hashCode() {
            int result = this.autoSynth != null ? this.autoSynth.hashCode() : 0;
            result = 31 * result + (this.context != null ? this.context.hashCode() : 0);
            result = 31 * result + (this.outdir != null ? this.outdir.hashCode() : 0);
            result = 31 * result + (this.runtimeInfo != null ? this.runtimeInfo.hashCode() : 0);
            result = 31 * result + (this.stackTraces != null ? this.stackTraces.hashCode() : 0);
            result = 31 * result + (this.treeMetadata != null ? this.treeMetadata.hashCode() : 0);
            return result;
        }
    }
}
