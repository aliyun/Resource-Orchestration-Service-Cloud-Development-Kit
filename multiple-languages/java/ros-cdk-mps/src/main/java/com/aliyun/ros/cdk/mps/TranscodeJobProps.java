package com.aliyun.ros.cdk.mps;

/**
 * Properties for defining a <code>TranscodeJob</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-transcodejob
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T12:55:13.170Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mps.$Module.class, fqn = "@alicloud/ros-cdk-mps.TranscodeJobProps")
@software.amazon.jsii.Jsii.Proxy(TranscodeJobProps.Jsii$Proxy.class)
public interface TranscodeJobProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property input: The input configuration of the job.
     * <p>
     * For more information, see Input details.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInput();

    /**
     * Property outputBucket: The name of the OSS bucket where the output files are stored.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOutputBucket();

    /**
     * Property outputs: The output configuration of the job.
     * <p>
     * Consists of a list of Output objects, JSON array, with a maximum size of 30.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOutputs();

    /**
     * Property pipelineId: The ID of the pipeline.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPipelineId();

    /**
     * Property outputLocation: The region of the OSS bucket where the output files are stored.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOutputLocation() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link TranscodeJobProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link TranscodeJobProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<TranscodeJobProps> {
        java.lang.Object input;
        java.lang.Object outputBucket;
        java.lang.Object outputs;
        java.lang.Object pipelineId;
        java.lang.Object outputLocation;

        /**
         * Sets the value of {@link TranscodeJobProps#getInput}
         * @param input Property input: The input configuration of the job. This parameter is required.
         *              For more information, see Input details.
         * @return {@code this}
         */
        public Builder input(com.aliyun.ros.cdk.core.IResolvable input) {
            this.input = input;
            return this;
        }

        /**
         * Sets the value of {@link TranscodeJobProps#getInput}
         * @param input Property input: The input configuration of the job. This parameter is required.
         *              For more information, see Input details.
         * @return {@code this}
         */
        public Builder input(java.util.Map<java.lang.String, ? extends java.lang.Object> input) {
            this.input = input;
            return this;
        }

        /**
         * Sets the value of {@link TranscodeJobProps#getOutputBucket}
         * @param outputBucket Property outputBucket: The name of the OSS bucket where the output files are stored. This parameter is required.
         * @return {@code this}
         */
        public Builder outputBucket(java.lang.String outputBucket) {
            this.outputBucket = outputBucket;
            return this;
        }

        /**
         * Sets the value of {@link TranscodeJobProps#getOutputBucket}
         * @param outputBucket Property outputBucket: The name of the OSS bucket where the output files are stored. This parameter is required.
         * @return {@code this}
         */
        public Builder outputBucket(com.aliyun.ros.cdk.core.IResolvable outputBucket) {
            this.outputBucket = outputBucket;
            return this;
        }

        /**
         * Sets the value of {@link TranscodeJobProps#getOutputs}
         * @param outputs Property outputs: The output configuration of the job. This parameter is required.
         *                Consists of a list of Output objects, JSON array, with a maximum size of 30.
         * @return {@code this}
         */
        public Builder outputs(com.aliyun.ros.cdk.core.IResolvable outputs) {
            this.outputs = outputs;
            return this;
        }

        /**
         * Sets the value of {@link TranscodeJobProps#getOutputs}
         * @param outputs Property outputs: The output configuration of the job. This parameter is required.
         *                Consists of a list of Output objects, JSON array, with a maximum size of 30.
         * @return {@code this}
         */
        public Builder outputs(java.util.List<? extends java.util.Map<java.lang.String, ? extends java.lang.Object>> outputs) {
            this.outputs = outputs;
            return this;
        }

        /**
         * Sets the value of {@link TranscodeJobProps#getPipelineId}
         * @param pipelineId Property pipelineId: The ID of the pipeline. This parameter is required.
         * @return {@code this}
         */
        public Builder pipelineId(java.lang.String pipelineId) {
            this.pipelineId = pipelineId;
            return this;
        }

        /**
         * Sets the value of {@link TranscodeJobProps#getPipelineId}
         * @param pipelineId Property pipelineId: The ID of the pipeline. This parameter is required.
         * @return {@code this}
         */
        public Builder pipelineId(com.aliyun.ros.cdk.core.IResolvable pipelineId) {
            this.pipelineId = pipelineId;
            return this;
        }

        /**
         * Sets the value of {@link TranscodeJobProps#getOutputLocation}
         * @param outputLocation Property outputLocation: The region of the OSS bucket where the output files are stored.
         * @return {@code this}
         */
        public Builder outputLocation(java.lang.String outputLocation) {
            this.outputLocation = outputLocation;
            return this;
        }

        /**
         * Sets the value of {@link TranscodeJobProps#getOutputLocation}
         * @param outputLocation Property outputLocation: The region of the OSS bucket where the output files are stored.
         * @return {@code this}
         */
        public Builder outputLocation(com.aliyun.ros.cdk.core.IResolvable outputLocation) {
            this.outputLocation = outputLocation;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link TranscodeJobProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public TranscodeJobProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link TranscodeJobProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TranscodeJobProps {
        private final java.lang.Object input;
        private final java.lang.Object outputBucket;
        private final java.lang.Object outputs;
        private final java.lang.Object pipelineId;
        private final java.lang.Object outputLocation;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.input = software.amazon.jsii.Kernel.get(this, "input", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.outputBucket = software.amazon.jsii.Kernel.get(this, "outputBucket", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.outputs = software.amazon.jsii.Kernel.get(this, "outputs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pipelineId = software.amazon.jsii.Kernel.get(this, "pipelineId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.outputLocation = software.amazon.jsii.Kernel.get(this, "outputLocation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.input = java.util.Objects.requireNonNull(builder.input, "input is required");
            this.outputBucket = java.util.Objects.requireNonNull(builder.outputBucket, "outputBucket is required");
            this.outputs = java.util.Objects.requireNonNull(builder.outputs, "outputs is required");
            this.pipelineId = java.util.Objects.requireNonNull(builder.pipelineId, "pipelineId is required");
            this.outputLocation = builder.outputLocation;
        }

        @Override
        public final java.lang.Object getInput() {
            return this.input;
        }

        @Override
        public final java.lang.Object getOutputBucket() {
            return this.outputBucket;
        }

        @Override
        public final java.lang.Object getOutputs() {
            return this.outputs;
        }

        @Override
        public final java.lang.Object getPipelineId() {
            return this.pipelineId;
        }

        @Override
        public final java.lang.Object getOutputLocation() {
            return this.outputLocation;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("input", om.valueToTree(this.getInput()));
            data.set("outputBucket", om.valueToTree(this.getOutputBucket()));
            data.set("outputs", om.valueToTree(this.getOutputs()));
            data.set("pipelineId", om.valueToTree(this.getPipelineId()));
            if (this.getOutputLocation() != null) {
                data.set("outputLocation", om.valueToTree(this.getOutputLocation()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mps.TranscodeJobProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            TranscodeJobProps.Jsii$Proxy that = (TranscodeJobProps.Jsii$Proxy) o;

            if (!input.equals(that.input)) return false;
            if (!outputBucket.equals(that.outputBucket)) return false;
            if (!outputs.equals(that.outputs)) return false;
            if (!pipelineId.equals(that.pipelineId)) return false;
            return this.outputLocation != null ? this.outputLocation.equals(that.outputLocation) : that.outputLocation == null;
        }

        @Override
        public final int hashCode() {
            int result = this.input.hashCode();
            result = 31 * result + (this.outputBucket.hashCode());
            result = 31 * result + (this.outputs.hashCode());
            result = 31 * result + (this.pipelineId.hashCode());
            result = 31 * result + (this.outputLocation != null ? this.outputLocation.hashCode() : 0);
            return result;
        }
    }
}
