package com.aliyun.ros.cdk.nlpautoml;

/**
 * A ROS template type:  <code>ALIYUN::NLPAUTOML::Model</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-25T03:56:01.119Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nlpautoml.$Module.class, fqn = "@alicloud/ros-cdk-nlpautoml.RosModel")
public class RosModel extends com.aliyun.ros.cdk.core.RosResource {

    protected RosModel(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosModel(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.nlpautoml.RosModel.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>ALIYUN::NLPAUTOML::Model</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosModel(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nlpautoml.RosModelProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrModelId() {
        return software.amazon.jsii.Kernel.get(this, "attrModelId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrModelVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrModelVersion", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDatasetIdList() {
        return software.amazon.jsii.Kernel.get(this, "datasetIdList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDatasetIdList(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "datasetIdList", java.util.Objects.requireNonNull(value, "datasetIdList is required"));
    }

    /**
     */
    public void setDatasetIdList(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.Number)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.Number, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "datasetIdList", java.util.Objects.requireNonNull(value, "datasetIdList is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getModelName() {
        return software.amazon.jsii.Kernel.get(this, "modelName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setModelName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "modelName", java.util.Objects.requireNonNull(value, "modelName is required"));
    }

    /**
     */
    public void setModelName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "modelName", java.util.Objects.requireNonNull(value, "modelName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getModelType() {
        return software.amazon.jsii.Kernel.get(this, "modelType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setModelType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "modelType", java.util.Objects.requireNonNull(value, "modelType is required"));
    }

    /**
     */
    public void setModelType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "modelType", java.util.Objects.requireNonNull(value, "modelType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getProjectId() {
        return software.amazon.jsii.Kernel.get(this, "projectId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProjectId(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "projectId", java.util.Objects.requireNonNull(value, "projectId is required"));
    }

    /**
     */
    public void setProjectId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "projectId", java.util.Objects.requireNonNull(value, "projectId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLr() {
        return software.amazon.jsii.Kernel.get(this, "lr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLr(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "lr", value);
    }

    /**
     */
    public void setLr(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "lr", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNepochs() {
        return software.amazon.jsii.Kernel.get(this, "nepochs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNepochs(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "nepochs", value);
    }

    /**
     */
    public void setNepochs(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "nepochs", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTestDatasetIdList() {
        return software.amazon.jsii.Kernel.get(this, "testDatasetIdList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTestDatasetIdList(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "testDatasetIdList", value);
    }

    /**
     */
    public void setTestDatasetIdList(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.Number)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.Number, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "testDatasetIdList", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.nlpautoml.RosModel}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.nlpautoml.RosModel> {
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
        private final com.aliyun.ros.cdk.nlpautoml.RosModelProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.nlpautoml.RosModelProps.Builder();
        }

        /**
         * @return {@code this}
         * @param datasetIdList This parameter is required.
         */
        public Builder datasetIdList(final com.aliyun.ros.cdk.core.IResolvable datasetIdList) {
            this.props.datasetIdList(datasetIdList);
            return this;
        }
        /**
         * @return {@code this}
         * @param datasetIdList This parameter is required.
         */
        public Builder datasetIdList(final java.util.List<? extends java.lang.Object> datasetIdList) {
            this.props.datasetIdList(datasetIdList);
            return this;
        }

        /**
         * @return {@code this}
         * @param modelName This parameter is required.
         */
        public Builder modelName(final java.lang.String modelName) {
            this.props.modelName(modelName);
            return this;
        }
        /**
         * @return {@code this}
         * @param modelName This parameter is required.
         */
        public Builder modelName(final com.aliyun.ros.cdk.core.IResolvable modelName) {
            this.props.modelName(modelName);
            return this;
        }

        /**
         * @return {@code this}
         * @param modelType This parameter is required.
         */
        public Builder modelType(final java.lang.String modelType) {
            this.props.modelType(modelType);
            return this;
        }
        /**
         * @return {@code this}
         * @param modelType This parameter is required.
         */
        public Builder modelType(final com.aliyun.ros.cdk.core.IResolvable modelType) {
            this.props.modelType(modelType);
            return this;
        }

        /**
         * @return {@code this}
         * @param projectId This parameter is required.
         */
        public Builder projectId(final java.lang.Number projectId) {
            this.props.projectId(projectId);
            return this;
        }
        /**
         * @return {@code this}
         * @param projectId This parameter is required.
         */
        public Builder projectId(final com.aliyun.ros.cdk.core.IResolvable projectId) {
            this.props.projectId(projectId);
            return this;
        }

        /**
         * @return {@code this}
         * @param lr This parameter is required.
         */
        public Builder lr(final java.lang.String lr) {
            this.props.lr(lr);
            return this;
        }
        /**
         * @return {@code this}
         * @param lr This parameter is required.
         */
        public Builder lr(final com.aliyun.ros.cdk.core.IResolvable lr) {
            this.props.lr(lr);
            return this;
        }

        /**
         * @return {@code this}
         * @param nepochs This parameter is required.
         */
        public Builder nepochs(final java.lang.String nepochs) {
            this.props.nepochs(nepochs);
            return this;
        }
        /**
         * @return {@code this}
         * @param nepochs This parameter is required.
         */
        public Builder nepochs(final com.aliyun.ros.cdk.core.IResolvable nepochs) {
            this.props.nepochs(nepochs);
            return this;
        }

        /**
         * @return {@code this}
         * @param testDatasetIdList This parameter is required.
         */
        public Builder testDatasetIdList(final com.aliyun.ros.cdk.core.IResolvable testDatasetIdList) {
            this.props.testDatasetIdList(testDatasetIdList);
            return this;
        }
        /**
         * @return {@code this}
         * @param testDatasetIdList This parameter is required.
         */
        public Builder testDatasetIdList(final java.util.List<? extends java.lang.Object> testDatasetIdList) {
            this.props.testDatasetIdList(testDatasetIdList);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.nlpautoml.RosModel}.
         */
        @Override
        public com.aliyun.ros.cdk.nlpautoml.RosModel build() {
            return new com.aliyun.ros.cdk.nlpautoml.RosModel(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
