package com.aliyun.ros.cdk.nlpautoml;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::NLPAUTOML::Dataset</code>, which is used to create a dataset.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:12.345Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nlpautoml.$Module.class, fqn = "@alicloud/ros-cdk-nlpautoml.Dataset")
public class Dataset extends com.aliyun.ros.cdk.core.Resource {

    protected Dataset(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Dataset(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Dataset(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nlpautoml.DatasetProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Dataset(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nlpautoml.DatasetProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DatasetId: The dataset ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDatasetId() {
        return software.amazon.jsii.Kernel.get(this, "attrDatasetId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nlpautoml.DatasetProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.nlpautoml.DatasetProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nlpautoml.DatasetProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.nlpautoml.Dataset}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.nlpautoml.Dataset> {
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
        private final com.aliyun.ros.cdk.nlpautoml.DatasetProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.nlpautoml.DatasetProps.Builder();
        }

        /**
         * Property datasetName: The name of dataset.
         * <p>
         * Cannot start with numbers and symbols, and the length cannot be greater than 32 characters.
         * <p>
         * @return {@code this}
         * @param datasetName Property datasetName: The name of dataset. This parameter is required.
         */
        public Builder datasetName(final java.lang.String datasetName) {
            this.props.datasetName(datasetName);
            return this;
        }
        /**
         * Property datasetName: The name of dataset.
         * <p>
         * Cannot start with numbers and symbols, and the length cannot be greater than 32 characters.
         * <p>
         * @return {@code this}
         * @param datasetName Property datasetName: The name of dataset. This parameter is required.
         */
        public Builder datasetName(final com.aliyun.ros.cdk.core.IResolvable datasetName) {
            this.props.datasetName(datasetName);
            return this;
        }

        /**
         * Property projectId: The ID of project.
         * <p>
         * To create a dataset under a certain project, fill in the target project ID.
         * <p>
         * @return {@code this}
         * @param projectId Property projectId: The ID of project. This parameter is required.
         */
        public Builder projectId(final java.lang.Number projectId) {
            this.props.projectId(projectId);
            return this;
        }
        /**
         * Property projectId: The ID of project.
         * <p>
         * To create a dataset under a certain project, fill in the target project ID.
         * <p>
         * @return {@code this}
         * @param projectId Property projectId: The ID of project. This parameter is required.
         */
        public Builder projectId(final com.aliyun.ros.cdk.core.IResolvable projectId) {
            this.props.projectId(projectId);
            return this;
        }

        /**
         * Property datasetRecord: Upload labeled data to the dataset.
         * <p>
         * @return {@code this}
         * @param datasetRecord Property datasetRecord: Upload labeled data to the dataset. This parameter is required.
         */
        public Builder datasetRecord(final com.aliyun.ros.cdk.core.IResolvable datasetRecord) {
            this.props.datasetRecord(datasetRecord);
            return this;
        }
        /**
         * Property datasetRecord: Upload labeled data to the dataset.
         * <p>
         * @return {@code this}
         * @param datasetRecord Property datasetRecord: Upload labeled data to the dataset. This parameter is required.
         */
        public Builder datasetRecord(final java.util.List<? extends java.lang.Object> datasetRecord) {
            this.props.datasetRecord(datasetRecord);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.nlpautoml.Dataset}.
         */
        @Override
        public com.aliyun.ros.cdk.nlpautoml.Dataset build() {
            return new com.aliyun.ros.cdk.nlpautoml.Dataset(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
