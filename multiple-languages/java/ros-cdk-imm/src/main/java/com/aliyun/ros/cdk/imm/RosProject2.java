package com.aliyun.ros.cdk.imm;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::IMM::Project2</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:48.229Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.imm.$Module.class, fqn = "@alicloud/ros-cdk-imm.RosProject2")
public class RosProject2 extends com.aliyun.ros.cdk.core.RosResource {

    protected RosProject2(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosProject2(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.imm.RosProject2.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosProject2(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.imm.RosProject2Props props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrProjectName() {
        return software.amazon.jsii.Kernel.get(this, "attrProjectName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getProjectName() {
        return software.amazon.jsii.Kernel.get(this, "projectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProjectName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "projectName", java.util.Objects.requireNonNull(value, "projectName is required"));
    }

    /**
     */
    public void setProjectName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "projectName", java.util.Objects.requireNonNull(value, "projectName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDatasetMaxBindCount() {
        return software.amazon.jsii.Kernel.get(this, "datasetMaxBindCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDatasetMaxBindCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "datasetMaxBindCount", value);
    }

    /**
     */
    public void setDatasetMaxBindCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "datasetMaxBindCount", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDatasetMaxEntityCount() {
        return software.amazon.jsii.Kernel.get(this, "datasetMaxEntityCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDatasetMaxEntityCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "datasetMaxEntityCount", value);
    }

    /**
     */
    public void setDatasetMaxEntityCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "datasetMaxEntityCount", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDatasetMaxFileCount() {
        return software.amazon.jsii.Kernel.get(this, "datasetMaxFileCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDatasetMaxFileCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "datasetMaxFileCount", value);
    }

    /**
     */
    public void setDatasetMaxFileCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "datasetMaxFileCount", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDatasetMaxRelationCount() {
        return software.amazon.jsii.Kernel.get(this, "datasetMaxRelationCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDatasetMaxRelationCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "datasetMaxRelationCount", value);
    }

    /**
     */
    public void setDatasetMaxRelationCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "datasetMaxRelationCount", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDatasetMaxTotalFileSize() {
        return software.amazon.jsii.Kernel.get(this, "datasetMaxTotalFileSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDatasetMaxTotalFileSize(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "datasetMaxTotalFileSize", value);
    }

    /**
     */
    public void setDatasetMaxTotalFileSize(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "datasetMaxTotalFileSize", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getProjectMaxDatasetCount() {
        return software.amazon.jsii.Kernel.get(this, "projectMaxDatasetCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProjectMaxDatasetCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "projectMaxDatasetCount", value);
    }

    /**
     */
    public void setProjectMaxDatasetCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "projectMaxDatasetCount", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getServiceRole() {
        return software.amazon.jsii.Kernel.get(this, "serviceRole", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setServiceRole(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "serviceRole", value);
    }

    /**
     */
    public void setServiceRole(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "serviceRole", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTemplateId() {
        return software.amazon.jsii.Kernel.get(this, "templateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTemplateId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "templateId", value);
    }

    /**
     */
    public void setTemplateId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "templateId", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.imm.RosProject2}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.imm.RosProject2> {
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
        private final com.aliyun.ros.cdk.imm.RosProject2Props.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.imm.RosProject2Props.Builder();
        }

        /**
         * @return {@code this}
         * @param projectName This parameter is required.
         */
        public Builder projectName(final java.lang.String projectName) {
            this.props.projectName(projectName);
            return this;
        }
        /**
         * @return {@code this}
         * @param projectName This parameter is required.
         */
        public Builder projectName(final com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.props.projectName(projectName);
            return this;
        }

        /**
         * @return {@code this}
         * @param datasetMaxBindCount This parameter is required.
         */
        public Builder datasetMaxBindCount(final java.lang.Number datasetMaxBindCount) {
            this.props.datasetMaxBindCount(datasetMaxBindCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param datasetMaxBindCount This parameter is required.
         */
        public Builder datasetMaxBindCount(final com.aliyun.ros.cdk.core.IResolvable datasetMaxBindCount) {
            this.props.datasetMaxBindCount(datasetMaxBindCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param datasetMaxEntityCount This parameter is required.
         */
        public Builder datasetMaxEntityCount(final java.lang.Number datasetMaxEntityCount) {
            this.props.datasetMaxEntityCount(datasetMaxEntityCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param datasetMaxEntityCount This parameter is required.
         */
        public Builder datasetMaxEntityCount(final com.aliyun.ros.cdk.core.IResolvable datasetMaxEntityCount) {
            this.props.datasetMaxEntityCount(datasetMaxEntityCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param datasetMaxFileCount This parameter is required.
         */
        public Builder datasetMaxFileCount(final java.lang.Number datasetMaxFileCount) {
            this.props.datasetMaxFileCount(datasetMaxFileCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param datasetMaxFileCount This parameter is required.
         */
        public Builder datasetMaxFileCount(final com.aliyun.ros.cdk.core.IResolvable datasetMaxFileCount) {
            this.props.datasetMaxFileCount(datasetMaxFileCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param datasetMaxRelationCount This parameter is required.
         */
        public Builder datasetMaxRelationCount(final java.lang.Number datasetMaxRelationCount) {
            this.props.datasetMaxRelationCount(datasetMaxRelationCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param datasetMaxRelationCount This parameter is required.
         */
        public Builder datasetMaxRelationCount(final com.aliyun.ros.cdk.core.IResolvable datasetMaxRelationCount) {
            this.props.datasetMaxRelationCount(datasetMaxRelationCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param datasetMaxTotalFileSize This parameter is required.
         */
        public Builder datasetMaxTotalFileSize(final java.lang.Number datasetMaxTotalFileSize) {
            this.props.datasetMaxTotalFileSize(datasetMaxTotalFileSize);
            return this;
        }
        /**
         * @return {@code this}
         * @param datasetMaxTotalFileSize This parameter is required.
         */
        public Builder datasetMaxTotalFileSize(final com.aliyun.ros.cdk.core.IResolvable datasetMaxTotalFileSize) {
            this.props.datasetMaxTotalFileSize(datasetMaxTotalFileSize);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param projectMaxDatasetCount This parameter is required.
         */
        public Builder projectMaxDatasetCount(final java.lang.Number projectMaxDatasetCount) {
            this.props.projectMaxDatasetCount(projectMaxDatasetCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param projectMaxDatasetCount This parameter is required.
         */
        public Builder projectMaxDatasetCount(final com.aliyun.ros.cdk.core.IResolvable projectMaxDatasetCount) {
            this.props.projectMaxDatasetCount(projectMaxDatasetCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param serviceRole This parameter is required.
         */
        public Builder serviceRole(final java.lang.String serviceRole) {
            this.props.serviceRole(serviceRole);
            return this;
        }
        /**
         * @return {@code this}
         * @param serviceRole This parameter is required.
         */
        public Builder serviceRole(final com.aliyun.ros.cdk.core.IResolvable serviceRole) {
            this.props.serviceRole(serviceRole);
            return this;
        }

        /**
         * @return {@code this}
         * @param templateId This parameter is required.
         */
        public Builder templateId(final java.lang.String templateId) {
            this.props.templateId(templateId);
            return this;
        }
        /**
         * @return {@code this}
         * @param templateId This parameter is required.
         */
        public Builder templateId(final com.aliyun.ros.cdk.core.IResolvable templateId) {
            this.props.templateId(templateId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.imm.RosProject2}.
         */
        @Override
        public com.aliyun.ros.cdk.imm.RosProject2 build() {
            return new com.aliyun.ros.cdk.imm.RosProject2(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
