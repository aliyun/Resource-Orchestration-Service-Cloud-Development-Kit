package com.aliyun.ros.cdk.emr.datasource;

/**
 * This class is a base encapsulation around the ROS resource type <code>DATASOURCE::EMR::FlowProjects</code>, which is used to query projects.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-02-28T02:53:28.936Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.datasource.RosFlowProjects")
public class RosFlowProjects extends com.aliyun.ros.cdk.core.RosResource {

    protected RosFlowProjects(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosFlowProjects(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.emr.datasource.RosFlowProjects.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosFlowProjects(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.emr.datasource.RosFlowProjectsProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFlowProjectIds() {
        return software.amazon.jsii.Kernel.get(this, "attrFlowProjectIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFlowProjects() {
        return software.amazon.jsii.Kernel.get(this, "attrFlowProjects", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getFlowProjectId() {
        return software.amazon.jsii.Kernel.get(this, "flowProjectId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFlowProjectId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "flowProjectId", value);
    }

    /**
     */
    public void setFlowProjectId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "flowProjectId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFlowProjectName() {
        return software.amazon.jsii.Kernel.get(this, "flowProjectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFlowProjectName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "flowProjectName", value);
    }

    /**
     */
    public void setFlowProjectName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "flowProjectName", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.emr.datasource.RosFlowProjects}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.emr.datasource.RosFlowProjects> {
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
        private final com.aliyun.ros.cdk.emr.datasource.RosFlowProjectsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.emr.datasource.RosFlowProjectsProps.Builder();
        }

        /**
         * @return {@code this}
         * @param flowProjectId This parameter is required.
         */
        public Builder flowProjectId(final java.lang.String flowProjectId) {
            this.props.flowProjectId(flowProjectId);
            return this;
        }
        /**
         * @return {@code this}
         * @param flowProjectId This parameter is required.
         */
        public Builder flowProjectId(final com.aliyun.ros.cdk.core.IResolvable flowProjectId) {
            this.props.flowProjectId(flowProjectId);
            return this;
        }

        /**
         * @return {@code this}
         * @param flowProjectName This parameter is required.
         */
        public Builder flowProjectName(final java.lang.String flowProjectName) {
            this.props.flowProjectName(flowProjectName);
            return this;
        }
        /**
         * @return {@code this}
         * @param flowProjectName This parameter is required.
         */
        public Builder flowProjectName(final com.aliyun.ros.cdk.core.IResolvable flowProjectName) {
            this.props.flowProjectName(flowProjectName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.emr.datasource.RosFlowProjects}.
         */
        @Override
        public com.aliyun.ros.cdk.emr.datasource.RosFlowProjects build() {
            return new com.aliyun.ros.cdk.emr.datasource.RosFlowProjects(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
