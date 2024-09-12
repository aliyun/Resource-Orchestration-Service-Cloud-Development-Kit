package com.aliyun.ros.cdk.nlpautoml;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::NLPAUTOML::Model</code>, which is used to create a model.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:28.889Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nlpautoml.$Module.class, fqn = "@alicloud/ros-cdk-nlpautoml.Model")
public class Model extends com.aliyun.ros.cdk.core.Resource {

    protected Model(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Model(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Model(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nlpautoml.ModelProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Model(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nlpautoml.ModelProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ModelId: The ID of model.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrModelId() {
        return software.amazon.jsii.Kernel.get(this, "attrModelId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ModelVersion: The version of model.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrModelVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrModelVersion", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nlpautoml.ModelProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.nlpautoml.ModelProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nlpautoml.ModelProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.nlpautoml.Model}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.nlpautoml.Model> {
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
        private final com.aliyun.ros.cdk.nlpautoml.ModelProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.nlpautoml.ModelProps.Builder();
        }

        /**
         * Property datasetIdList: The uploaded dataset must be under the same project, and the total number of marked data is greater than or equal to 4.
         * <p>
         * @return {@code this}
         * @param datasetIdList Property datasetIdList: The uploaded dataset must be under the same project, and the total number of marked data is greater than or equal to 4. This parameter is required.
         */
        public Builder datasetIdList(final com.aliyun.ros.cdk.core.IResolvable datasetIdList) {
            this.props.datasetIdList(datasetIdList);
            return this;
        }
        /**
         * Property datasetIdList: The uploaded dataset must be under the same project, and the total number of marked data is greater than or equal to 4.
         * <p>
         * @return {@code this}
         * @param datasetIdList Property datasetIdList: The uploaded dataset must be under the same project, and the total number of marked data is greater than or equal to 4. This parameter is required.
         */
        public Builder datasetIdList(final java.util.List<? extends java.lang.Object> datasetIdList) {
            this.props.datasetIdList(datasetIdList);
            return this;
        }

        /**
         * Property modelName: The name of model.
         * <p>
         * @return {@code this}
         * @param modelName Property modelName: The name of model. This parameter is required.
         */
        public Builder modelName(final java.lang.String modelName) {
            this.props.modelName(modelName);
            return this;
        }
        /**
         * Property modelName: The name of model.
         * <p>
         * @return {@code this}
         * @param modelName Property modelName: The name of model. This parameter is required.
         */
        public Builder modelName(final com.aliyun.ros.cdk.core.IResolvable modelName) {
            this.props.modelName(modelName);
            return this;
        }

        /**
         * Property modelType: The type of model.
         * <p>
         * Please refer to the documentation for the parameter values corresponding to different types of models.
         * Using the specified model type under different project, and the backend will do the verification. If the model type does not exist under the project, it will prompt that the base model is not found
         * <p>
         * @return {@code this}
         * @param modelType Property modelType: The type of model. This parameter is required.
         */
        public Builder modelType(final java.lang.String modelType) {
            this.props.modelType(modelType);
            return this;
        }
        /**
         * Property modelType: The type of model.
         * <p>
         * Please refer to the documentation for the parameter values corresponding to different types of models.
         * Using the specified model type under different project, and the backend will do the verification. If the model type does not exist under the project, it will prompt that the base model is not found
         * <p>
         * @return {@code this}
         * @param modelType Property modelType: The type of model. This parameter is required.
         */
        public Builder modelType(final com.aliyun.ros.cdk.core.IResolvable modelType) {
            this.props.modelType(modelType);
            return this;
        }

        /**
         * Property projectId: The project id to which the model belongs.
         * <p>
         * @return {@code this}
         * @param projectId Property projectId: The project id to which the model belongs. This parameter is required.
         */
        public Builder projectId(final java.lang.Number projectId) {
            this.props.projectId(projectId);
            return this;
        }
        /**
         * Property projectId: The project id to which the model belongs.
         * <p>
         * @return {@code this}
         * @param projectId Property projectId: The project id to which the model belongs. This parameter is required.
         */
        public Builder projectId(final com.aliyun.ros.cdk.core.IResolvable projectId) {
            this.props.projectId(projectId);
            return this;
        }

        /**
         * Property lr: Learning rate.
         * <p>
         * @return {@code this}
         * @param lr Property lr: Learning rate. This parameter is required.
         */
        public Builder lr(final java.lang.String lr) {
            this.props.lr(lr);
            return this;
        }
        /**
         * Property lr: Learning rate.
         * <p>
         * @return {@code this}
         * @param lr Property lr: Learning rate. This parameter is required.
         */
        public Builder lr(final com.aliyun.ros.cdk.core.IResolvable lr) {
            this.props.lr(lr);
            return this;
        }

        /**
         * Property nepochs: Number of training dataset iterations.
         * <p>
         * @return {@code this}
         * @param nepochs Property nepochs: Number of training dataset iterations. This parameter is required.
         */
        public Builder nepochs(final java.lang.String nepochs) {
            this.props.nepochs(nepochs);
            return this;
        }
        /**
         * Property nepochs: Number of training dataset iterations.
         * <p>
         * @return {@code this}
         * @param nepochs Property nepochs: Number of training dataset iterations. This parameter is required.
         */
        public Builder nepochs(final com.aliyun.ros.cdk.core.IResolvable nepochs) {
            this.props.nepochs(nepochs);
            return this;
        }

        /**
         * Property testDatasetIdList: Test set ID list.
         * <p>
         * Some models under text classification support adding test set data.
         * <p>
         * @return {@code this}
         * @param testDatasetIdList Property testDatasetIdList: Test set ID list. This parameter is required.
         */
        public Builder testDatasetIdList(final com.aliyun.ros.cdk.core.IResolvable testDatasetIdList) {
            this.props.testDatasetIdList(testDatasetIdList);
            return this;
        }
        /**
         * Property testDatasetIdList: Test set ID list.
         * <p>
         * Some models under text classification support adding test set data.
         * <p>
         * @return {@code this}
         * @param testDatasetIdList Property testDatasetIdList: Test set ID list. This parameter is required.
         */
        public Builder testDatasetIdList(final java.util.List<? extends java.lang.Object> testDatasetIdList) {
            this.props.testDatasetIdList(testDatasetIdList);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.nlpautoml.Model}.
         */
        @Override
        public com.aliyun.ros.cdk.nlpautoml.Model build() {
            return new com.aliyun.ros.cdk.nlpautoml.Model(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
