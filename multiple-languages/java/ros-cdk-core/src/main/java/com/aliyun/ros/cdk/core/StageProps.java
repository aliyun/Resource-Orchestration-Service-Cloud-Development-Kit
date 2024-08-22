package com.aliyun.ros.cdk.core;

/**
 * Initialization props for a stage.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:17.090Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.StageProps")
@software.amazon.jsii.Jsii.Proxy(StageProps.Jsii$Proxy.class)
public interface StageProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * The output directory into which to emit synthesized artifacts.
     * <p>
     * Can only be specified if this stage is the root stage the app. If this is
     * specified and this stage is nested within another stage, an error will be
     * thrown.
     * <p>
     * Default - for nested stages, outdir will be determined as a relative
     * directory to the outdir of the app. For apps, if outdir is not specified, a
     * temporary directory will be created.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getOutdir() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link StageProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link StageProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<StageProps> {
        java.lang.String outdir;

        /**
         * Sets the value of {@link StageProps#getOutdir}
         * @param outdir The output directory into which to emit synthesized artifacts.
         *               Can only be specified if this stage is the root stage the app. If this is
         *               specified and this stage is nested within another stage, an error will be
         *               thrown.
         *               <p>
         *               Default - for nested stages, outdir will be determined as a relative
         *               directory to the outdir of the app. For apps, if outdir is not specified, a
         *               temporary directory will be created.
         * @return {@code this}
         */
        public Builder outdir(java.lang.String outdir) {
            this.outdir = outdir;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link StageProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public StageProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link StageProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements StageProps {
        private final java.lang.String outdir;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.outdir = software.amazon.jsii.Kernel.get(this, "outdir", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.outdir = builder.outdir;
        }

        @Override
        public final java.lang.String getOutdir() {
            return this.outdir;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getOutdir() != null) {
                data.set("outdir", om.valueToTree(this.getOutdir()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-core.StageProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            StageProps.Jsii$Proxy that = (StageProps.Jsii$Proxy) o;

            return this.outdir != null ? this.outdir.equals(that.outdir) : that.outdir == null;
        }

        @Override
        public final int hashCode() {
            int result = this.outdir != null ? this.outdir.hashCode() : 0;
            return result;
        }
    }
}
