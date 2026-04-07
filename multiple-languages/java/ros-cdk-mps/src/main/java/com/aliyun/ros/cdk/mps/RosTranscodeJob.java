package com.aliyun.ros.cdk.mps;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::MPS::TranscodeJob</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:27.843Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mps.$Module.class, fqn = "@alicloud/ros-cdk-mps.RosTranscodeJob")
public class RosTranscodeJob extends com.aliyun.ros.cdk.core.RosResource {

    protected RosTranscodeJob(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosTranscodeJob(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.mps.RosTranscodeJob.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosTranscodeJob(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mps.RosTranscodeJobProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrJobIds() {
        return software.amazon.jsii.Kernel.get(this, "attrJobIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getInput() {
        return software.amazon.jsii.Kernel.get(this, "input", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInput(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "input", java.util.Objects.requireNonNull(value, "input is required"));
    }

    /**
     */
    public void setInput(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "input", java.util.Objects.requireNonNull(value, "input is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getOutputBucket() {
        return software.amazon.jsii.Kernel.get(this, "outputBucket", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOutputBucket(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "outputBucket", java.util.Objects.requireNonNull(value, "outputBucket is required"));
    }

    /**
     */
    public void setOutputBucket(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "outputBucket", java.util.Objects.requireNonNull(value, "outputBucket is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getOutputs() {
        return software.amazon.jsii.Kernel.get(this, "outputs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOutputs(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "outputs", java.util.Objects.requireNonNull(value, "outputs is required"));
    }

    /**
     */
    public void setOutputs(final @org.jetbrains.annotations.NotNull java.util.List<java.util.Map<java.lang.String, java.lang.Object>> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.util.Map<java.lang.String, java.lang.Object> __val_ac66f0 = value.get(__idx_ac66f0);
                if (!(__val_ac66f0.keySet().toArray()[0] instanceof String)) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")").append(".keySet()")
                            .append(" to contain class String; received ")
                            .append(__val_ac66f0.keySet().toArray()[0].getClass()).toString());
                }
                for (final java.util.Map.Entry<String, java.lang.Object> __item_58ec25: __val_ac66f0.entrySet()) {
                    final java.lang.Object __val_58ec25 = __item_58ec25.getValue();
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "outputs", java.util.Objects.requireNonNull(value, "outputs is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPipelineId() {
        return software.amazon.jsii.Kernel.get(this, "pipelineId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPipelineId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "pipelineId", java.util.Objects.requireNonNull(value, "pipelineId is required"));
    }

    /**
     */
    public void setPipelineId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "pipelineId", java.util.Objects.requireNonNull(value, "pipelineId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOutputLocation() {
        return software.amazon.jsii.Kernel.get(this, "outputLocation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOutputLocation(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "outputLocation", value);
    }

    /**
     */
    public void setOutputLocation(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "outputLocation", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.mps.RosTranscodeJob}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.mps.RosTranscodeJob> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.mps.RosTranscodeJobProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.mps.RosTranscodeJobProps.Builder();
        }

        /**
         * @return {@code this}
         * @param input This parameter is required.
         */
        public Builder input(final com.aliyun.ros.cdk.core.IResolvable input) {
            this.props.input(input);
            return this;
        }
        /**
         * @return {@code this}
         * @param input This parameter is required.
         */
        public Builder input(final java.util.Map<java.lang.String, ? extends java.lang.Object> input) {
            this.props.input(input);
            return this;
        }

        /**
         * @return {@code this}
         * @param outputBucket This parameter is required.
         */
        public Builder outputBucket(final java.lang.String outputBucket) {
            this.props.outputBucket(outputBucket);
            return this;
        }
        /**
         * @return {@code this}
         * @param outputBucket This parameter is required.
         */
        public Builder outputBucket(final com.aliyun.ros.cdk.core.IResolvable outputBucket) {
            this.props.outputBucket(outputBucket);
            return this;
        }

        /**
         * @return {@code this}
         * @param outputs This parameter is required.
         */
        public Builder outputs(final com.aliyun.ros.cdk.core.IResolvable outputs) {
            this.props.outputs(outputs);
            return this;
        }
        /**
         * @return {@code this}
         * @param outputs This parameter is required.
         */
        public Builder outputs(final java.util.List<? extends java.util.Map<java.lang.String, ? extends java.lang.Object>> outputs) {
            this.props.outputs(outputs);
            return this;
        }

        /**
         * @return {@code this}
         * @param pipelineId This parameter is required.
         */
        public Builder pipelineId(final java.lang.String pipelineId) {
            this.props.pipelineId(pipelineId);
            return this;
        }
        /**
         * @return {@code this}
         * @param pipelineId This parameter is required.
         */
        public Builder pipelineId(final com.aliyun.ros.cdk.core.IResolvable pipelineId) {
            this.props.pipelineId(pipelineId);
            return this;
        }

        /**
         * @return {@code this}
         * @param outputLocation This parameter is required.
         */
        public Builder outputLocation(final java.lang.String outputLocation) {
            this.props.outputLocation(outputLocation);
            return this;
        }
        /**
         * @return {@code this}
         * @param outputLocation This parameter is required.
         */
        public Builder outputLocation(final com.aliyun.ros.cdk.core.IResolvable outputLocation) {
            this.props.outputLocation(outputLocation);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.mps.RosTranscodeJob}.
         */
        @Override
        public com.aliyun.ros.cdk.mps.RosTranscodeJob build() {
            return new com.aliyun.ros.cdk.mps.RosTranscodeJob(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
