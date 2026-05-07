package com.aliyun.ros.cdk.mps;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::MPS::TranscodeJob</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:51.798Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mps.$Module.class, fqn = "@alicloud/ros-cdk-mps.TranscodeJob")
public class TranscodeJob extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.mps.ITranscodeJob {

    protected TranscodeJob(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected TranscodeJob(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public TranscodeJob(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mps.TranscodeJobProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public TranscodeJob(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mps.TranscodeJobProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute JobIds: The IDs of the jobs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrJobIds() {
        return software.amazon.jsii.Kernel.get(this, "attrJobIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mps.TranscodeJobProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mps.TranscodeJobProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.mps.TranscodeJob}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.mps.TranscodeJob> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.mps.TranscodeJobProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.mps.TranscodeJobProps.Builder();
        }

        /**
         * Property input: The input configuration of the job.
         * <p>
         * For more information, see Input details.
         * <p>
         * @return {@code this}
         * @param input Property input: The input configuration of the job. This parameter is required.
         */
        public Builder input(final com.aliyun.ros.cdk.core.IResolvable input) {
            this.props.input(input);
            return this;
        }
        /**
         * Property input: The input configuration of the job.
         * <p>
         * For more information, see Input details.
         * <p>
         * @return {@code this}
         * @param input Property input: The input configuration of the job. This parameter is required.
         */
        public Builder input(final java.util.Map<java.lang.String, ? extends java.lang.Object> input) {
            this.props.input(input);
            return this;
        }

        /**
         * Property outputBucket: The name of the OSS bucket where the output files are stored.
         * <p>
         * @return {@code this}
         * @param outputBucket Property outputBucket: The name of the OSS bucket where the output files are stored. This parameter is required.
         */
        public Builder outputBucket(final java.lang.String outputBucket) {
            this.props.outputBucket(outputBucket);
            return this;
        }
        /**
         * Property outputBucket: The name of the OSS bucket where the output files are stored.
         * <p>
         * @return {@code this}
         * @param outputBucket Property outputBucket: The name of the OSS bucket where the output files are stored. This parameter is required.
         */
        public Builder outputBucket(final com.aliyun.ros.cdk.core.IResolvable outputBucket) {
            this.props.outputBucket(outputBucket);
            return this;
        }

        /**
         * Property outputs: The output configuration of the job.
         * <p>
         * Consists of a list of Output objects, JSON array, with a maximum size of 30.
         * <p>
         * @return {@code this}
         * @param outputs Property outputs: The output configuration of the job. This parameter is required.
         */
        public Builder outputs(final com.aliyun.ros.cdk.core.IResolvable outputs) {
            this.props.outputs(outputs);
            return this;
        }
        /**
         * Property outputs: The output configuration of the job.
         * <p>
         * Consists of a list of Output objects, JSON array, with a maximum size of 30.
         * <p>
         * @return {@code this}
         * @param outputs Property outputs: The output configuration of the job. This parameter is required.
         */
        public Builder outputs(final java.util.List<? extends java.util.Map<java.lang.String, ? extends java.lang.Object>> outputs) {
            this.props.outputs(outputs);
            return this;
        }

        /**
         * Property pipelineId: The ID of the pipeline.
         * <p>
         * @return {@code this}
         * @param pipelineId Property pipelineId: The ID of the pipeline. This parameter is required.
         */
        public Builder pipelineId(final java.lang.String pipelineId) {
            this.props.pipelineId(pipelineId);
            return this;
        }
        /**
         * Property pipelineId: The ID of the pipeline.
         * <p>
         * @return {@code this}
         * @param pipelineId Property pipelineId: The ID of the pipeline. This parameter is required.
         */
        public Builder pipelineId(final com.aliyun.ros.cdk.core.IResolvable pipelineId) {
            this.props.pipelineId(pipelineId);
            return this;
        }

        /**
         * Property outputLocation: The region of the OSS bucket where the output files are stored.
         * <p>
         * @return {@code this}
         * @param outputLocation Property outputLocation: The region of the OSS bucket where the output files are stored. This parameter is required.
         */
        public Builder outputLocation(final java.lang.String outputLocation) {
            this.props.outputLocation(outputLocation);
            return this;
        }
        /**
         * Property outputLocation: The region of the OSS bucket where the output files are stored.
         * <p>
         * @return {@code this}
         * @param outputLocation Property outputLocation: The region of the OSS bucket where the output files are stored. This parameter is required.
         */
        public Builder outputLocation(final com.aliyun.ros.cdk.core.IResolvable outputLocation) {
            this.props.outputLocation(outputLocation);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.mps.TranscodeJob}.
         */
        @Override
        public com.aliyun.ros.cdk.mps.TranscodeJob build() {
            return new com.aliyun.ros.cdk.mps.TranscodeJob(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
