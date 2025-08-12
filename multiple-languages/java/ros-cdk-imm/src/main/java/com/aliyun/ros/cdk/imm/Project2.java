package com.aliyun.ros.cdk.imm;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::IMM::Project2</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:48.225Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.imm.$Module.class, fqn = "@alicloud/ros-cdk-imm.Project2")
public class Project2 extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.imm.IProject2 {

    protected Project2(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Project2(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Project2(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.imm.Project2Props props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Project2(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.imm.Project2Props props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ProjectName: The name of project.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrProjectName() {
        return software.amazon.jsii.Kernel.get(this, "attrProjectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.imm.Project2Props getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.imm.Project2Props.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.imm.Project2}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.imm.Project2> {
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
        private final com.aliyun.ros.cdk.imm.Project2Props.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.imm.Project2Props.Builder();
        }

        /**
         * Property projectName: The name of project.
         * <p>
         * @return {@code this}
         * @param projectName Property projectName: The name of project. This parameter is required.
         */
        public Builder projectName(final java.lang.String projectName) {
            this.props.projectName(projectName);
            return this;
        }
        /**
         * Property projectName: The name of project.
         * <p>
         * @return {@code this}
         * @param projectName Property projectName: The name of project. This parameter is required.
         */
        public Builder projectName(final com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.props.projectName(projectName);
            return this;
        }

        /**
         * Property datasetMaxBindCount: The maximum number of bindings for each dataset.
         * <p>
         * Valid values: 1 to 10. Default value: 10.
         * <p>
         * @return {@code this}
         * @param datasetMaxBindCount Property datasetMaxBindCount: The maximum number of bindings for each dataset. This parameter is required.
         */
        public Builder datasetMaxBindCount(final java.lang.Number datasetMaxBindCount) {
            this.props.datasetMaxBindCount(datasetMaxBindCount);
            return this;
        }
        /**
         * Property datasetMaxBindCount: The maximum number of bindings for each dataset.
         * <p>
         * Valid values: 1 to 10. Default value: 10.
         * <p>
         * @return {@code this}
         * @param datasetMaxBindCount Property datasetMaxBindCount: The maximum number of bindings for each dataset. This parameter is required.
         */
        public Builder datasetMaxBindCount(final com.aliyun.ros.cdk.core.IResolvable datasetMaxBindCount) {
            this.props.datasetMaxBindCount(datasetMaxBindCount);
            return this;
        }

        /**
         * Property datasetMaxEntityCount: The maximum number of metadata entities in each dataset.
         * <p>
         * Default value: 10000000000.
         * <p>
         * @return {@code this}
         * @param datasetMaxEntityCount Property datasetMaxEntityCount: The maximum number of metadata entities in each dataset. This parameter is required.
         */
        public Builder datasetMaxEntityCount(final java.lang.Number datasetMaxEntityCount) {
            this.props.datasetMaxEntityCount(datasetMaxEntityCount);
            return this;
        }
        /**
         * Property datasetMaxEntityCount: The maximum number of metadata entities in each dataset.
         * <p>
         * Default value: 10000000000.
         * <p>
         * @return {@code this}
         * @param datasetMaxEntityCount Property datasetMaxEntityCount: The maximum number of metadata entities in each dataset. This parameter is required.
         */
        public Builder datasetMaxEntityCount(final com.aliyun.ros.cdk.core.IResolvable datasetMaxEntityCount) {
            this.props.datasetMaxEntityCount(datasetMaxEntityCount);
            return this;
        }

        /**
         * Property datasetMaxFileCount: The maximum number of files in each dataset.
         * <p>
         * Valid values: 1 to 100000000. Default value: 100000000.
         * <p>
         * @return {@code this}
         * @param datasetMaxFileCount Property datasetMaxFileCount: The maximum number of files in each dataset. This parameter is required.
         */
        public Builder datasetMaxFileCount(final java.lang.Number datasetMaxFileCount) {
            this.props.datasetMaxFileCount(datasetMaxFileCount);
            return this;
        }
        /**
         * Property datasetMaxFileCount: The maximum number of files in each dataset.
         * <p>
         * Valid values: 1 to 100000000. Default value: 100000000.
         * <p>
         * @return {@code this}
         * @param datasetMaxFileCount Property datasetMaxFileCount: The maximum number of files in each dataset. This parameter is required.
         */
        public Builder datasetMaxFileCount(final com.aliyun.ros.cdk.core.IResolvable datasetMaxFileCount) {
            this.props.datasetMaxFileCount(datasetMaxFileCount);
            return this;
        }

        /**
         * Property datasetMaxRelationCount: The maximum number of metadata entities in each dataset.
         * <p>
         * Default value: 100000000000.
         * <p>
         * @return {@code this}
         * @param datasetMaxRelationCount Property datasetMaxRelationCount: The maximum number of metadata entities in each dataset. This parameter is required.
         */
        public Builder datasetMaxRelationCount(final java.lang.Number datasetMaxRelationCount) {
            this.props.datasetMaxRelationCount(datasetMaxRelationCount);
            return this;
        }
        /**
         * Property datasetMaxRelationCount: The maximum number of metadata entities in each dataset.
         * <p>
         * Default value: 100000000000.
         * <p>
         * @return {@code this}
         * @param datasetMaxRelationCount Property datasetMaxRelationCount: The maximum number of metadata entities in each dataset. This parameter is required.
         */
        public Builder datasetMaxRelationCount(final com.aliyun.ros.cdk.core.IResolvable datasetMaxRelationCount) {
            this.props.datasetMaxRelationCount(datasetMaxRelationCount);
            return this;
        }

        /**
         * Property datasetMaxTotalFileSize: The maximum size of files in each dataset.
         * <p>
         * If the maximum size is exceeded, no indexes can be added. Unit: bytes. Default value: 90000000000000000.
         * <p>
         * @return {@code this}
         * @param datasetMaxTotalFileSize Property datasetMaxTotalFileSize: The maximum size of files in each dataset. This parameter is required.
         */
        public Builder datasetMaxTotalFileSize(final java.lang.Number datasetMaxTotalFileSize) {
            this.props.datasetMaxTotalFileSize(datasetMaxTotalFileSize);
            return this;
        }
        /**
         * Property datasetMaxTotalFileSize: The maximum size of files in each dataset.
         * <p>
         * If the maximum size is exceeded, no indexes can be added. Unit: bytes. Default value: 90000000000000000.
         * <p>
         * @return {@code this}
         * @param datasetMaxTotalFileSize Property datasetMaxTotalFileSize: The maximum size of files in each dataset. This parameter is required.
         */
        public Builder datasetMaxTotalFileSize(final com.aliyun.ros.cdk.core.IResolvable datasetMaxTotalFileSize) {
            this.props.datasetMaxTotalFileSize(datasetMaxTotalFileSize);
            return this;
        }

        /**
         * Property description: The description of project.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of project. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of project.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of project. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property projectMaxDatasetCount: The maximum number of datasets in the project.
         * <p>
         * Valid values: 1 to 1000000000. Default value: 1000000000.
         * <p>
         * @return {@code this}
         * @param projectMaxDatasetCount Property projectMaxDatasetCount: The maximum number of datasets in the project. This parameter is required.
         */
        public Builder projectMaxDatasetCount(final java.lang.Number projectMaxDatasetCount) {
            this.props.projectMaxDatasetCount(projectMaxDatasetCount);
            return this;
        }
        /**
         * Property projectMaxDatasetCount: The maximum number of datasets in the project.
         * <p>
         * Valid values: 1 to 1000000000. Default value: 1000000000.
         * <p>
         * @return {@code this}
         * @param projectMaxDatasetCount Property projectMaxDatasetCount: The maximum number of datasets in the project. This parameter is required.
         */
        public Builder projectMaxDatasetCount(final com.aliyun.ros.cdk.core.IResolvable projectMaxDatasetCount) {
            this.props.projectMaxDatasetCount(projectMaxDatasetCount);
            return this;
        }

        /**
         * Property serviceRole: 	The name of the Resource Access Management (RAM) role.
         * <p>
         * You must attach the RAM role to IMM to allow IMM to access other cloud resources, such as Object Storage Service (OSS). Default value: AliyunIMMDefaultRole.
         * <p>
         * @return {@code this}
         * @param serviceRole Property serviceRole: 	The name of the Resource Access Management (RAM) role. This parameter is required.
         */
        public Builder serviceRole(final java.lang.String serviceRole) {
            this.props.serviceRole(serviceRole);
            return this;
        }
        /**
         * Property serviceRole: 	The name of the Resource Access Management (RAM) role.
         * <p>
         * You must attach the RAM role to IMM to allow IMM to access other cloud resources, such as Object Storage Service (OSS). Default value: AliyunIMMDefaultRole.
         * <p>
         * @return {@code this}
         * @param serviceRole Property serviceRole: 	The name of the Resource Access Management (RAM) role. This parameter is required.
         */
        public Builder serviceRole(final com.aliyun.ros.cdk.core.IResolvable serviceRole) {
            this.props.serviceRole(serviceRole);
            return this;
        }

        /**
         * Property templateId: The ID of the workflow template.
         * <p>
         * You can leave this parameter empty.
         * <p>
         * @return {@code this}
         * @param templateId Property templateId: The ID of the workflow template. This parameter is required.
         */
        public Builder templateId(final java.lang.String templateId) {
            this.props.templateId(templateId);
            return this;
        }
        /**
         * Property templateId: The ID of the workflow template.
         * <p>
         * You can leave this parameter empty.
         * <p>
         * @return {@code this}
         * @param templateId Property templateId: The ID of the workflow template. This parameter is required.
         */
        public Builder templateId(final com.aliyun.ros.cdk.core.IResolvable templateId) {
            this.props.templateId(templateId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.imm.Project2}.
         */
        @Override
        public com.aliyun.ros.cdk.imm.Project2 build() {
            return new com.aliyun.ros.cdk.imm.Project2(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
