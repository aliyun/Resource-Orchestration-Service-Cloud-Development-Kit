package com.aliyun.ros.cdk.emr.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::EMR::FlowProjects</code>, which is used to query projects.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-02-28T02:53:28.920Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.datasource.FlowProjects")
public class FlowProjects extends com.aliyun.ros.cdk.core.Resource {

    protected FlowProjects(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FlowProjects(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public FlowProjects(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.emr.datasource.FlowProjectsProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public FlowProjects(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.emr.datasource.FlowProjectsProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public FlowProjects(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute FlowProjectIds: The list of flow project IDs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFlowProjectIds() {
        return software.amazon.jsii.Kernel.get(this, "attrFlowProjectIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute FlowProjects: The list of flow projects.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFlowProjects() {
        return software.amazon.jsii.Kernel.get(this, "attrFlowProjects", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.emr.datasource.FlowProjects}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.emr.datasource.FlowProjects> {
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
        private com.aliyun.ros.cdk.emr.datasource.FlowProjectsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property flowProjectId: The first ID of the resource.
         * <p>
         * @return {@code this}
         * @param flowProjectId Property flowProjectId: The first ID of the resource. This parameter is required.
         */
        public Builder flowProjectId(final java.lang.String flowProjectId) {
            this.props().flowProjectId(flowProjectId);
            return this;
        }
        /**
         * Property flowProjectId: The first ID of the resource.
         * <p>
         * @return {@code this}
         * @param flowProjectId Property flowProjectId: The first ID of the resource. This parameter is required.
         */
        public Builder flowProjectId(final com.aliyun.ros.cdk.core.IResolvable flowProjectId) {
            this.props().flowProjectId(flowProjectId);
            return this;
        }

        /**
         * Property flowProjectName: Project name.
         * <p>
         * @return {@code this}
         * @param flowProjectName Property flowProjectName: Project name. This parameter is required.
         */
        public Builder flowProjectName(final java.lang.String flowProjectName) {
            this.props().flowProjectName(flowProjectName);
            return this;
        }
        /**
         * Property flowProjectName: Project name.
         * <p>
         * @return {@code this}
         * @param flowProjectName Property flowProjectName: Project name. This parameter is required.
         */
        public Builder flowProjectName(final com.aliyun.ros.cdk.core.IResolvable flowProjectName) {
            this.props().flowProjectName(flowProjectName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.emr.datasource.FlowProjects}.
         */
        @Override
        public com.aliyun.ros.cdk.emr.datasource.FlowProjects build() {
            return new com.aliyun.ros.cdk.emr.datasource.FlowProjects(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.emr.datasource.FlowProjectsProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.emr.datasource.FlowProjectsProps.Builder();
            }
            return this.props;
        }
    }
}
