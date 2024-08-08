package com.aliyun.ros.cdk.devops;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::DEVOPS::PipelineRun</code>, which is used to run a pipeline.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:09.073Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.devops.$Module.class, fqn = "@alicloud/ros-cdk-devops.PipelineRun")
public class PipelineRun extends com.aliyun.ros.cdk.core.Resource {

    protected PipelineRun(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected PipelineRun(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public PipelineRun(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.devops.PipelineRunProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public PipelineRun(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.devops.PipelineRunProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute PipelineRunId: Pipeline run id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPipelineRunId() {
        return software.amazon.jsii.Kernel.get(this, "attrPipelineRunId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.devops.PipelineRunProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.devops.PipelineRunProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.devops.PipelineRunProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.devops.PipelineRun}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.devops.PipelineRun> {
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
        private final com.aliyun.ros.cdk.devops.PipelineRunProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.devops.PipelineRunProps.Builder();
        }

        /**
         * Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
         * <p>
         * @return {@code this}
         * @param organizationId Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links. This parameter is required.
         */
        public Builder organizationId(final java.lang.String organizationId) {
            this.props.organizationId(organizationId);
            return this;
        }
        /**
         * Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
         * <p>
         * @return {@code this}
         * @param organizationId Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links. This parameter is required.
         */
        public Builder organizationId(final com.aliyun.ros.cdk.core.IResolvable organizationId) {
            this.props.organizationId(organizationId);
            return this;
        }

        /**
         * Property pipelineId: The pipeline ID, which can be obtained from the pipeline link.
         * <p>
         * @return {@code this}
         * @param pipelineId Property pipelineId: The pipeline ID, which can be obtained from the pipeline link. This parameter is required.
         */
        public Builder pipelineId(final java.lang.Number pipelineId) {
            this.props.pipelineId(pipelineId);
            return this;
        }
        /**
         * Property pipelineId: The pipeline ID, which can be obtained from the pipeline link.
         * <p>
         * @return {@code this}
         * @param pipelineId Property pipelineId: The pipeline ID, which can be obtained from the pipeline link. This parameter is required.
         */
        public Builder pipelineId(final com.aliyun.ros.cdk.core.IResolvable pipelineId) {
            this.props.pipelineId(pipelineId);
            return this;
        }

        /**
         * Property params: Pipeline operating parameters.
         * <p>
         * Keys:
         * <p>
         * <ul>
         * <li><strong>branchModeBranchs</strong>: Branch mode runs branches.</li>
         * <li><strong>envs</strong>: Running variables.</li>
         * <li><strong>runningBranchs</strong>: Running branches whose key is the warehouse address.</li>
         * <li><strong>runningTags</strong>: Running tags whose key is the warehouse address.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param params Property params: Pipeline operating parameters. This parameter is required.
         */
        public Builder params(final com.aliyun.ros.cdk.core.IResolvable params) {
            this.props.params(params);
            return this;
        }
        /**
         * Property params: Pipeline operating parameters.
         * <p>
         * Keys:
         * <p>
         * <ul>
         * <li><strong>branchModeBranchs</strong>: Branch mode runs branches.</li>
         * <li><strong>envs</strong>: Running variables.</li>
         * <li><strong>runningBranchs</strong>: Running branches whose key is the warehouse address.</li>
         * <li><strong>runningTags</strong>: Running tags whose key is the warehouse address.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param params Property params: Pipeline operating parameters. This parameter is required.
         */
        public Builder params(final java.util.Map<java.lang.String, ? extends java.lang.Object> params) {
            this.props.params(params);
            return this;
        }

        /**
         * Property sync: Whether to wait synchronously for the result of the pipeline execution.
         * <p>
         * If you select true, the resource will not be created until the pipeline is complete. <strong>Default is false.</strong>
         * Note: Do not set this option to true when the pipeline has a pause policy configured, as publishing requires manual intervention and synchronization is not appropriate.
         * <p>
         * @return {@code this}
         * @param sync Property sync: Whether to wait synchronously for the result of the pipeline execution. This parameter is required.
         */
        public Builder sync(final java.lang.Boolean sync) {
            this.props.sync(sync);
            return this;
        }
        /**
         * Property sync: Whether to wait synchronously for the result of the pipeline execution.
         * <p>
         * If you select true, the resource will not be created until the pipeline is complete. <strong>Default is false.</strong>
         * Note: Do not set this option to true when the pipeline has a pause policy configured, as publishing requires manual intervention and synchronization is not appropriate.
         * <p>
         * @return {@code this}
         * @param sync Property sync: Whether to wait synchronously for the result of the pipeline execution. This parameter is required.
         */
        public Builder sync(final com.aliyun.ros.cdk.core.IResolvable sync) {
            this.props.sync(sync);
            return this;
        }

        /**
         * Property timeout: Maximum wait time for pipeline execution in minutes.
         * <p>
         * This parameter need only be configured if Sync is set to true. <strong>Default is 10.</strong>
         * <p>
         * @return {@code this}
         * @param timeout Property timeout: Maximum wait time for pipeline execution in minutes. This parameter is required.
         */
        public Builder timeout(final java.lang.Number timeout) {
            this.props.timeout(timeout);
            return this;
        }
        /**
         * Property timeout: Maximum wait time for pipeline execution in minutes.
         * <p>
         * This parameter need only be configured if Sync is set to true. <strong>Default is 10.</strong>
         * <p>
         * @return {@code this}
         * @param timeout Property timeout: Maximum wait time for pipeline execution in minutes. This parameter is required.
         */
        public Builder timeout(final com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.props.timeout(timeout);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.devops.PipelineRun}.
         */
        @Override
        public com.aliyun.ros.cdk.devops.PipelineRun build() {
            return new com.aliyun.ros.cdk.devops.PipelineRun(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
