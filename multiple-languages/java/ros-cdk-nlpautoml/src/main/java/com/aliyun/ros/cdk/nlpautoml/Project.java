package com.aliyun.ros.cdk.nlpautoml;

/**
 * A ROS resource type:  <code>ALIYUN::NLPAUTOML::Project</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T05:23:26.056Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nlpautoml.$Module.class, fqn = "@alicloud/ros-cdk-nlpautoml.Project")
public class Project extends com.aliyun.ros.cdk.core.Resource {

    protected Project(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Project(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::NLPAUTOML::Project</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Project(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nlpautoml.ProjectProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::NLPAUTOML::Project</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Project(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nlpautoml.ProjectProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ProjectId: The project ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrProjectId() {
        return software.amazon.jsii.Kernel.get(this, "attrProjectId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.nlpautoml.Project}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.nlpautoml.Project> {
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
        private final com.aliyun.ros.cdk.nlpautoml.ProjectProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.nlpautoml.ProjectProps.Builder();
        }

        /**
         * Property projectDescription: The description of project.Cannot start with numbers and symbols, and the length cannot be greater than 256 characters.
         * <p>
         * @return {@code this}
         * @param projectDescription Property projectDescription: The description of project.Cannot start with numbers and symbols, and the length cannot be greater than 256 characters. This parameter is required.
         */
        public Builder projectDescription(final java.lang.String projectDescription) {
            this.props.projectDescription(projectDescription);
            return this;
        }
        /**
         * Property projectDescription: The description of project.Cannot start with numbers and symbols, and the length cannot be greater than 256 characters.
         * <p>
         * @return {@code this}
         * @param projectDescription Property projectDescription: The description of project.Cannot start with numbers and symbols, and the length cannot be greater than 256 characters. This parameter is required.
         */
        public Builder projectDescription(final com.aliyun.ros.cdk.core.IResolvable projectDescription) {
            this.props.projectDescription(projectDescription);
            return this;
        }

        /**
         * Property projectName: The name of project.
         * <p>
         * Cannot start with numbers and symbols, and the length cannot be greater than 32 characters.
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
         * Cannot start with numbers and symbols, and the length cannot be greater than 32 characters.
         * <p>
         * @return {@code this}
         * @param projectName Property projectName: The name of project. This parameter is required.
         */
        public Builder projectName(final com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.props.projectName(projectName);
            return this;
        }

        /**
         * Property projectType: The type of nlp project.
         * <p>
         * The following value is allowed: ner, textCategorybaseRelation, textMatching, sentimentAnalysis, resumeExtract, reviewAnalysis
         * <p>
         * @return {@code this}
         * @param projectType Property projectType: The type of nlp project. This parameter is required.
         */
        public Builder projectType(final java.lang.String projectType) {
            this.props.projectType(projectType);
            return this;
        }
        /**
         * Property projectType: The type of nlp project.
         * <p>
         * The following value is allowed: ner, textCategorybaseRelation, textMatching, sentimentAnalysis, resumeExtract, reviewAnalysis
         * <p>
         * @return {@code this}
         * @param projectType Property projectType: The type of nlp project. This parameter is required.
         */
        public Builder projectType(final com.aliyun.ros.cdk.core.IResolvable projectType) {
            this.props.projectType(projectType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.nlpautoml.Project}.
         */
        @Override
        public com.aliyun.ros.cdk.nlpautoml.Project build() {
            return new com.aliyun.ros.cdk.nlpautoml.Project(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
