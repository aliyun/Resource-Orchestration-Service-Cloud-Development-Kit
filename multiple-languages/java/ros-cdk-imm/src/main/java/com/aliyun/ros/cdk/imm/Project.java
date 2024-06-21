package com.aliyun.ros.cdk.imm;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::IMM::Project</code>, which is used to create an Intelligent Media Management (IMM) project.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:10.405Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.imm.$Module.class, fqn = "@alicloud/ros-cdk-imm.Project")
public class Project extends com.aliyun.ros.cdk.core.Resource {

    protected Project(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Project(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Project(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.imm.ProjectProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Project(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.imm.ProjectProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Project: The name of project.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrProject() {
        return software.amazon.jsii.Kernel.get(this, "attrProject", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.imm.ProjectProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.imm.ProjectProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.imm.ProjectProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.imm.Project}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.imm.Project> {
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
        private final com.aliyun.ros.cdk.imm.ProjectProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.imm.ProjectProps.Builder();
        }

        /**
         * Property project: The name of project.
         * <p>
         * @return {@code this}
         * @param project Property project: The name of project. This parameter is required.
         */
        public Builder project(final java.lang.String project) {
            this.props.project(project);
            return this;
        }
        /**
         * Property project: The name of project.
         * <p>
         * @return {@code this}
         * @param project Property project: The name of project. This parameter is required.
         */
        public Builder project(final com.aliyun.ros.cdk.core.IResolvable project) {
            this.props.project(project);
            return this;
        }

        /**
         * Property serviceRole: Service role, which grants the IMM service the right to access other cloud resources (such as OSS).
         * <p>
         * The default value is AliyunIMMDefaultRole.
         * <p>
         * @return {@code this}
         * @param serviceRole Property serviceRole: Service role, which grants the IMM service the right to access other cloud resources (such as OSS). This parameter is required.
         */
        public Builder serviceRole(final java.lang.String serviceRole) {
            this.props.serviceRole(serviceRole);
            return this;
        }
        /**
         * Property serviceRole: Service role, which grants the IMM service the right to access other cloud resources (such as OSS).
         * <p>
         * The default value is AliyunIMMDefaultRole.
         * <p>
         * @return {@code this}
         * @param serviceRole Property serviceRole: Service role, which grants the IMM service the right to access other cloud resources (such as OSS). This parameter is required.
         */
        public Builder serviceRole(final com.aliyun.ros.cdk.core.IResolvable serviceRole) {
            this.props.serviceRole(serviceRole);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.imm.Project}.
         */
        @Override
        public com.aliyun.ros.cdk.imm.Project build() {
            return new com.aliyun.ros.cdk.imm.Project(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
