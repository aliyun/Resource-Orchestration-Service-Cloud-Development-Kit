package com.aliyun.ros.cdk.paiplugin;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::PAIPlugin::TrainingJob</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:53.274Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.paiplugin.$Module.class, fqn = "@alicloud/ros-cdk-paiplugin.TrainingJob")
public class TrainingJob extends com.aliyun.ros.cdk.core.Resource {

    protected TrainingJob(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected TrainingJob(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public TrainingJob(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.paiplugin.TrainingJobProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public TrainingJob(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.paiplugin.TrainingJobProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute TrainingJobId: The training job id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTrainingJobId() {
        return software.amazon.jsii.Kernel.get(this, "attrTrainingJobId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.paiplugin.TrainingJobProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.paiplugin.TrainingJobProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.paiplugin.TrainingJobProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.paiplugin.TrainingJob}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.paiplugin.TrainingJob> {
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
        private final com.aliyun.ros.cdk.paiplugin.TrainingJobProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.paiplugin.TrainingJobProps.Builder();
        }

        /**
         * Property algorithm: The algorithm used in training.
         * <p>
         * @return {@code this}
         * @param algorithm Property algorithm: The algorithm used in training. This parameter is required.
         */
        public Builder algorithm(final java.lang.String algorithm) {
            this.props.algorithm(algorithm);
            return this;
        }
        /**
         * Property algorithm: The algorithm used in training.
         * <p>
         * @return {@code this}
         * @param algorithm Property algorithm: The algorithm used in training. This parameter is required.
         */
        public Builder algorithm(final com.aliyun.ros.cdk.core.IResolvable algorithm) {
            this.props.algorithm(algorithm);
            return this;
        }

        /**
         * Property campaignId: The related campaign Id.
         * <p>
         * @return {@code this}
         * @param campaignId Property campaignId: The related campaign Id. This parameter is required.
         */
        public Builder campaignId(final java.lang.String campaignId) {
            this.props.campaignId(campaignId);
            return this;
        }
        /**
         * Property campaignId: The related campaign Id.
         * <p>
         * @return {@code this}
         * @param campaignId Property campaignId: The related campaign Id. This parameter is required.
         */
        public Builder campaignId(final com.aliyun.ros.cdk.core.IResolvable campaignId) {
            this.props.campaignId(campaignId);
            return this;
        }

        /**
         * Property dataPath: The training data path in OSS bucket.
         * <p>
         * @return {@code this}
         * @param dataPath Property dataPath: The training data path in OSS bucket. This parameter is required.
         */
        public Builder dataPath(final java.lang.String dataPath) {
            this.props.dataPath(dataPath);
            return this;
        }
        /**
         * Property dataPath: The training data path in OSS bucket.
         * <p>
         * @return {@code this}
         * @param dataPath Property dataPath: The training data path in OSS bucket. This parameter is required.
         */
        public Builder dataPath(final com.aliyun.ros.cdk.core.IResolvable dataPath) {
            this.props.dataPath(dataPath);
            return this;
        }

        /**
         * Property name: The name of training job.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of training job. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of training job.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of training job. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property userConfig: User configuration is used to set parameters such as start_date and end_date to delineate the time range of modeling data.
         * <p>
         * @return {@code this}
         * @param userConfig Property userConfig: User configuration is used to set parameters such as start_date and end_date to delineate the time range of modeling data. This parameter is required.
         */
        public Builder userConfig(final com.aliyun.ros.cdk.core.IResolvable userConfig) {
            this.props.userConfig(userConfig);
            return this;
        }
        /**
         * Property userConfig: User configuration is used to set parameters such as start_date and end_date to delineate the time range of modeling data.
         * <p>
         * @return {@code this}
         * @param userConfig Property userConfig: User configuration is used to set parameters such as start_date and end_date to delineate the time range of modeling data. This parameter is required.
         */
        public Builder userConfig(final java.util.Map<java.lang.String, ? extends java.lang.Object> userConfig) {
            this.props.userConfig(userConfig);
            return this;
        }

        /**
         * Property remark: The remark of training job.
         * <p>
         * @return {@code this}
         * @param remark Property remark: The remark of training job. This parameter is required.
         */
        public Builder remark(final java.lang.String remark) {
            this.props.remark(remark);
            return this;
        }
        /**
         * Property remark: The remark of training job.
         * <p>
         * @return {@code this}
         * @param remark Property remark: The remark of training job. This parameter is required.
         */
        public Builder remark(final com.aliyun.ros.cdk.core.IResolvable remark) {
            this.props.remark(remark);
            return this;
        }

        /**
         * Property waitForTrainingFinish: Whether resource creation waits for the training task to complete.The longest waiting time is 40 minutes.
         * <p>
         * @return {@code this}
         * @param waitForTrainingFinish Property waitForTrainingFinish: Whether resource creation waits for the training task to complete.The longest waiting time is 40 minutes. This parameter is required.
         */
        public Builder waitForTrainingFinish(final java.lang.Boolean waitForTrainingFinish) {
            this.props.waitForTrainingFinish(waitForTrainingFinish);
            return this;
        }
        /**
         * Property waitForTrainingFinish: Whether resource creation waits for the training task to complete.The longest waiting time is 40 minutes.
         * <p>
         * @return {@code this}
         * @param waitForTrainingFinish Property waitForTrainingFinish: Whether resource creation waits for the training task to complete.The longest waiting time is 40 minutes. This parameter is required.
         */
        public Builder waitForTrainingFinish(final com.aliyun.ros.cdk.core.IResolvable waitForTrainingFinish) {
            this.props.waitForTrainingFinish(waitForTrainingFinish);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.paiplugin.TrainingJob}.
         */
        @Override
        public com.aliyun.ros.cdk.paiplugin.TrainingJob build() {
            return new com.aliyun.ros.cdk.paiplugin.TrainingJob(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
