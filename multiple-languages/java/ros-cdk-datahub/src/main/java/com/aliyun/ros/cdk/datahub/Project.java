package com.aliyun.ros.cdk.datahub;

/**
 * A ROS resource type:  `ALIYUN::DATAHUB::Project`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.62.0 (build 293ac17)", date = "2022-07-21T02:24:24.459Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.datahub.$Module.class, fqn = "@alicloud/ros-cdk-datahub.Project")
public class Project extends com.aliyun.ros.cdk.core.Resource {

    protected Project(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Project(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::DATAHUB::Project`.
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
    public Project(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.datahub.ProjectProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::DATAHUB::Project`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Project(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.datahub.ProjectProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ProjectName: Project name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrProjectName() {
        return software.amazon.jsii.Kernel.get(this, "attrProjectName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.datahub.Project}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.datahub.Project> {
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
        private final com.aliyun.ros.cdk.datahub.ProjectProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.datahub.ProjectProps.Builder();
        }

        /**
         * Property comment: The comment of project.
         * <p>
         * @return {@code this}
         * @param comment Property comment: The comment of project. This parameter is required.
         */
        public Builder comment(final java.lang.String comment) {
            this.props.comment(comment);
            return this;
        }
        /**
         * Property comment: The comment of project.
         * <p>
         * @return {@code this}
         * @param comment Property comment: The comment of project. This parameter is required.
         */
        public Builder comment(final com.aliyun.ros.cdk.core.IResolvable comment) {
            this.props.comment(comment);
            return this;
        }

        /**
         * Property projectName: The name of the project.
         * <p>
         * Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
         * <p>
         * @return {@code this}
         * @param projectName Property projectName: The name of the project. This parameter is required.
         */
        public Builder projectName(final java.lang.String projectName) {
            this.props.projectName(projectName);
            return this;
        }
        /**
         * Property projectName: The name of the project.
         * <p>
         * Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
         * <p>
         * @return {@code this}
         * @param projectName Property projectName: The name of the project. This parameter is required.
         */
        public Builder projectName(final com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.props.projectName(projectName);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.datahub.Project}.
         */
        @Override
        public com.aliyun.ros.cdk.datahub.Project build() {
            return new com.aliyun.ros.cdk.datahub.Project(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
