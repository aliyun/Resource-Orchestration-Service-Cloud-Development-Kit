package com.aliyun.ros.cdk.vpc.datasource;

/**
 * This class is a base encapsulation around the ROS resource type <code>DATASOURCE::VPC::FlowLogs</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:35.874Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.RosFlowLogs")
public class RosFlowLogs extends com.aliyun.ros.cdk.core.RosResource {

    protected RosFlowLogs(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosFlowLogs(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.vpc.datasource.RosFlowLogs.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosFlowLogs(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.RosFlowLogsProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFlowLogIds() {
        return software.amazon.jsii.Kernel.get(this, "attrFlowLogIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFlowLogs() {
        return software.amazon.jsii.Kernel.get(this, "attrFlowLogs", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getFlowLogId() {
        return software.amazon.jsii.Kernel.get(this, "flowLogId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFlowLogId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "flowLogId", value);
    }

    /**
     */
    public void setFlowLogId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "flowLogId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFlowLogName() {
        return software.amazon.jsii.Kernel.get(this, "flowLogName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFlowLogName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "flowLogName", value);
    }

    /**
     */
    public void setFlowLogName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "flowLogName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLogStoreName() {
        return software.amazon.jsii.Kernel.get(this, "logStoreName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLogStoreName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "logStoreName", value);
    }

    /**
     */
    public void setLogStoreName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "logStoreName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getProjectName() {
        return software.amazon.jsii.Kernel.get(this, "projectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProjectName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "projectName", value);
    }

    /**
     */
    public void setProjectName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "projectName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getResourceId() {
        return software.amazon.jsii.Kernel.get(this, "resourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResourceId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resourceId", value);
    }

    /**
     */
    public void setResourceId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resourceId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getResourceType() {
        return software.amazon.jsii.Kernel.get(this, "resourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResourceType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resourceType", value);
    }

    /**
     */
    public void setResourceType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resourceType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTrafficType() {
        return software.amazon.jsii.Kernel.get(this, "trafficType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTrafficType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "trafficType", value);
    }

    /**
     */
    public void setTrafficType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "trafficType", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.datasource.RosFlowLogs}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.datasource.RosFlowLogs> {
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
        private final com.aliyun.ros.cdk.vpc.datasource.RosFlowLogsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.datasource.RosFlowLogsProps.Builder();
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
         * @param flowLogId This parameter is required.
         */
        public Builder flowLogId(final java.lang.String flowLogId) {
            this.props.flowLogId(flowLogId);
            return this;
        }
        /**
         * @return {@code this}
         * @param flowLogId This parameter is required.
         */
        public Builder flowLogId(final com.aliyun.ros.cdk.core.IResolvable flowLogId) {
            this.props.flowLogId(flowLogId);
            return this;
        }

        /**
         * @return {@code this}
         * @param flowLogName This parameter is required.
         */
        public Builder flowLogName(final java.lang.String flowLogName) {
            this.props.flowLogName(flowLogName);
            return this;
        }
        /**
         * @return {@code this}
         * @param flowLogName This parameter is required.
         */
        public Builder flowLogName(final com.aliyun.ros.cdk.core.IResolvable flowLogName) {
            this.props.flowLogName(flowLogName);
            return this;
        }

        /**
         * @return {@code this}
         * @param logStoreName This parameter is required.
         */
        public Builder logStoreName(final java.lang.String logStoreName) {
            this.props.logStoreName(logStoreName);
            return this;
        }
        /**
         * @return {@code this}
         * @param logStoreName This parameter is required.
         */
        public Builder logStoreName(final com.aliyun.ros.cdk.core.IResolvable logStoreName) {
            this.props.logStoreName(logStoreName);
            return this;
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
         * @param resourceId This parameter is required.
         */
        public Builder resourceId(final java.lang.String resourceId) {
            this.props.resourceId(resourceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param resourceId This parameter is required.
         */
        public Builder resourceId(final com.aliyun.ros.cdk.core.IResolvable resourceId) {
            this.props.resourceId(resourceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param resourceType This parameter is required.
         */
        public Builder resourceType(final java.lang.String resourceType) {
            this.props.resourceType(resourceType);
            return this;
        }
        /**
         * @return {@code this}
         * @param resourceType This parameter is required.
         */
        public Builder resourceType(final com.aliyun.ros.cdk.core.IResolvable resourceType) {
            this.props.resourceType(resourceType);
            return this;
        }

        /**
         * @return {@code this}
         * @param trafficType This parameter is required.
         */
        public Builder trafficType(final java.lang.String trafficType) {
            this.props.trafficType(trafficType);
            return this;
        }
        /**
         * @return {@code this}
         * @param trafficType This parameter is required.
         */
        public Builder trafficType(final com.aliyun.ros.cdk.core.IResolvable trafficType) {
            this.props.trafficType(trafficType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.datasource.RosFlowLogs}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.datasource.RosFlowLogs build() {
            return new com.aliyun.ros.cdk.vpc.datasource.RosFlowLogs(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
