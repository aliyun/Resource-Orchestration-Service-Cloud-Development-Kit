package com.aliyun.ros.cdk.mps;

/**
 * Properties for defining a <code>RosTranscodeJob</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-transcodejob
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:51.797Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mps.$Module.class, fqn = "@alicloud/ros-cdk-mps.RosTranscodeJobProps")
@software.amazon.jsii.Jsii.Proxy(RosTranscodeJobProps.Jsii$Proxy.class)
public interface RosTranscodeJobProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInput();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOutputBucket();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOutputs();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPipelineId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOutputLocation() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosTranscodeJobProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosTranscodeJobProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosTranscodeJobProps> {
        java.lang.Object input;
        java.lang.Object outputBucket;
        java.lang.Object outputs;
        java.lang.Object pipelineId;
        java.lang.Object outputLocation;

        /**
         * Sets the value of {@link RosTranscodeJobProps#getInput}
         * @param input the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder input(com.aliyun.ros.cdk.core.IResolvable input) {
            this.input = input;
            return this;
        }

        /**
         * Sets the value of {@link RosTranscodeJobProps#getInput}
         * @param input the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder input(java.util.Map<java.lang.String, ? extends java.lang.Object> input) {
            this.input = input;
            return this;
        }

        /**
         * Sets the value of {@link RosTranscodeJobProps#getOutputBucket}
         * @param outputBucket the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder outputBucket(java.lang.String outputBucket) {
            this.outputBucket = outputBucket;
            return this;
        }

        /**
         * Sets the value of {@link RosTranscodeJobProps#getOutputBucket}
         * @param outputBucket the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder outputBucket(com.aliyun.ros.cdk.core.IResolvable outputBucket) {
            this.outputBucket = outputBucket;
            return this;
        }

        /**
         * Sets the value of {@link RosTranscodeJobProps#getOutputs}
         * @param outputs the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder outputs(com.aliyun.ros.cdk.core.IResolvable outputs) {
            this.outputs = outputs;
            return this;
        }

        /**
         * Sets the value of {@link RosTranscodeJobProps#getOutputs}
         * @param outputs the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder outputs(java.util.List<? extends java.util.Map<java.lang.String, ? extends java.lang.Object>> outputs) {
            this.outputs = outputs;
            return this;
        }

        /**
         * Sets the value of {@link RosTranscodeJobProps#getPipelineId}
         * @param pipelineId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder pipelineId(java.lang.String pipelineId) {
            this.pipelineId = pipelineId;
            return this;
        }

        /**
         * Sets the value of {@link RosTranscodeJobProps#getPipelineId}
         * @param pipelineId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder pipelineId(com.aliyun.ros.cdk.core.IResolvable pipelineId) {
            this.pipelineId = pipelineId;
            return this;
        }

        /**
         * Sets the value of {@link RosTranscodeJobProps#getOutputLocation}
         * @param outputLocation the value to be set.
         * @return {@code this}
         */
        public Builder outputLocation(java.lang.String outputLocation) {
            this.outputLocation = outputLocation;
            return this;
        }

        /**
         * Sets the value of {@link RosTranscodeJobProps#getOutputLocation}
         * @param outputLocation the value to be set.
         * @return {@code this}
         */
        public Builder outputLocation(com.aliyun.ros.cdk.core.IResolvable outputLocation) {
            this.outputLocation = outputLocation;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosTranscodeJobProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosTranscodeJobProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosTranscodeJobProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosTranscodeJobProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mps.RosTranscodeJobProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosTranscodeJobProps.Jsii$Proxy that = (RosTranscodeJobProps.Jsii$Proxy) o;

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
