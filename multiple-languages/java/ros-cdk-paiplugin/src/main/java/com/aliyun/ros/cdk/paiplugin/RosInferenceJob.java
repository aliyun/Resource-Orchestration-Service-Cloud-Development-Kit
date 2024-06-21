package com.aliyun.ros.cdk.paiplugin;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::PAIPlugin::InferenceJob</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:11.391Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.paiplugin.$Module.class, fqn = "@alicloud/ros-cdk-paiplugin.RosInferenceJob")
public class RosInferenceJob extends com.aliyun.ros.cdk.core.RosResource {

    protected RosInferenceJob(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosInferenceJob(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.paiplugin.RosInferenceJob.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosInferenceJob(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.paiplugin.RosInferenceJobProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInferenceJobId() {
        return software.amazon.jsii.Kernel.get(this, "attrInferenceJobId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAlgorithm() {
        return software.amazon.jsii.Kernel.get(this, "algorithm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAlgorithm(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "algorithm", java.util.Objects.requireNonNull(value, "algorithm is required"));
    }

    /**
     */
    public void setAlgorithm(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "algorithm", java.util.Objects.requireNonNull(value, "algorithm is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getCampaignId() {
        return software.amazon.jsii.Kernel.get(this, "campaignId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCampaignId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "campaignId", java.util.Objects.requireNonNull(value, "campaignId is required"));
    }

    /**
     */
    public void setCampaignId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "campaignId", java.util.Objects.requireNonNull(value, "campaignId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDataPath() {
        return software.amazon.jsii.Kernel.get(this, "dataPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDataPath(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dataPath", java.util.Objects.requireNonNull(value, "dataPath is required"));
    }

    /**
     */
    public void setDataPath(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dataPath", java.util.Objects.requireNonNull(value, "dataPath is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getName() {
        return software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "name", java.util.Objects.requireNonNull(value, "name is required"));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "name", java.util.Objects.requireNonNull(value, "name is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTargetPath() {
        return software.amazon.jsii.Kernel.get(this, "targetPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTargetPath(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "targetPath", java.util.Objects.requireNonNull(value, "targetPath is required"));
    }

    /**
     */
    public void setTargetPath(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "targetPath", java.util.Objects.requireNonNull(value, "targetPath is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTrainingJobId() {
        return software.amazon.jsii.Kernel.get(this, "trainingJobId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTrainingJobId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "trainingJobId", java.util.Objects.requireNonNull(value, "trainingJobId is required"));
    }

    /**
     */
    public void setTrainingJobId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "trainingJobId", java.util.Objects.requireNonNull(value, "trainingJobId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getUserConfig() {
        return software.amazon.jsii.Kernel.get(this, "userConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUserConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "userConfig", java.util.Objects.requireNonNull(value, "userConfig is required"));
    }

    /**
     */
    public void setUserConfig(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "userConfig", java.util.Objects.requireNonNull(value, "userConfig is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRemark() {
        return software.amazon.jsii.Kernel.get(this, "remark", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRemark(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "remark", value);
    }

    /**
     */
    public void setRemark(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "remark", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getWaitForInferenceFinish() {
        return software.amazon.jsii.Kernel.get(this, "waitForInferenceFinish", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWaitForInferenceFinish(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "waitForInferenceFinish", value);
    }

    /**
     */
    public void setWaitForInferenceFinish(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "waitForInferenceFinish", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.paiplugin.RosInferenceJob}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.paiplugin.RosInferenceJob> {
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
        private final com.aliyun.ros.cdk.paiplugin.RosInferenceJobProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.paiplugin.RosInferenceJobProps.Builder();
        }

        /**
         * @return {@code this}
         * @param algorithm This parameter is required.
         */
        public Builder algorithm(final java.lang.String algorithm) {
            this.props.algorithm(algorithm);
            return this;
        }
        /**
         * @return {@code this}
         * @param algorithm This parameter is required.
         */
        public Builder algorithm(final com.aliyun.ros.cdk.core.IResolvable algorithm) {
            this.props.algorithm(algorithm);
            return this;
        }

        /**
         * @return {@code this}
         * @param campaignId This parameter is required.
         */
        public Builder campaignId(final java.lang.String campaignId) {
            this.props.campaignId(campaignId);
            return this;
        }
        /**
         * @return {@code this}
         * @param campaignId This parameter is required.
         */
        public Builder campaignId(final com.aliyun.ros.cdk.core.IResolvable campaignId) {
            this.props.campaignId(campaignId);
            return this;
        }

        /**
         * @return {@code this}
         * @param dataPath This parameter is required.
         */
        public Builder dataPath(final java.lang.String dataPath) {
            this.props.dataPath(dataPath);
            return this;
        }
        /**
         * @return {@code this}
         * @param dataPath This parameter is required.
         */
        public Builder dataPath(final com.aliyun.ros.cdk.core.IResolvable dataPath) {
            this.props.dataPath(dataPath);
            return this;
        }

        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * @return {@code this}
         * @param targetPath This parameter is required.
         */
        public Builder targetPath(final java.lang.String targetPath) {
            this.props.targetPath(targetPath);
            return this;
        }
        /**
         * @return {@code this}
         * @param targetPath This parameter is required.
         */
        public Builder targetPath(final com.aliyun.ros.cdk.core.IResolvable targetPath) {
            this.props.targetPath(targetPath);
            return this;
        }

        /**
         * @return {@code this}
         * @param trainingJobId This parameter is required.
         */
        public Builder trainingJobId(final java.lang.String trainingJobId) {
            this.props.trainingJobId(trainingJobId);
            return this;
        }
        /**
         * @return {@code this}
         * @param trainingJobId This parameter is required.
         */
        public Builder trainingJobId(final com.aliyun.ros.cdk.core.IResolvable trainingJobId) {
            this.props.trainingJobId(trainingJobId);
            return this;
        }

        /**
         * @return {@code this}
         * @param userConfig This parameter is required.
         */
        public Builder userConfig(final com.aliyun.ros.cdk.core.IResolvable userConfig) {
            this.props.userConfig(userConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param userConfig This parameter is required.
         */
        public Builder userConfig(final java.util.Map<java.lang.String, ? extends java.lang.Object> userConfig) {
            this.props.userConfig(userConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param remark This parameter is required.
         */
        public Builder remark(final java.lang.String remark) {
            this.props.remark(remark);
            return this;
        }
        /**
         * @return {@code this}
         * @param remark This parameter is required.
         */
        public Builder remark(final com.aliyun.ros.cdk.core.IResolvable remark) {
            this.props.remark(remark);
            return this;
        }

        /**
         * @return {@code this}
         * @param waitForInferenceFinish This parameter is required.
         */
        public Builder waitForInferenceFinish(final java.lang.Boolean waitForInferenceFinish) {
            this.props.waitForInferenceFinish(waitForInferenceFinish);
            return this;
        }
        /**
         * @return {@code this}
         * @param waitForInferenceFinish This parameter is required.
         */
        public Builder waitForInferenceFinish(final com.aliyun.ros.cdk.core.IResolvable waitForInferenceFinish) {
            this.props.waitForInferenceFinish(waitForInferenceFinish);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.paiplugin.RosInferenceJob}.
         */
        @Override
        public com.aliyun.ros.cdk.paiplugin.RosInferenceJob build() {
            return new com.aliyun.ros.cdk.paiplugin.RosInferenceJob(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
