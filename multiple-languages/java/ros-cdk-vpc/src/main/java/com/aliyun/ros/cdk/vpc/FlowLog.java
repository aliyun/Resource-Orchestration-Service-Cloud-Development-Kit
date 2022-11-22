package com.aliyun.ros.cdk.vpc;

/**
 * A ROS resource type:  `ALIYUN::VPC::FlowLog`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-22T06:16:30.589Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.FlowLog")
public class FlowLog extends com.aliyun.ros.cdk.core.Resource {

    protected FlowLog(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FlowLog(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::VPC::FlowLog`.
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
    public FlowLog(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.FlowLogProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::VPC::FlowLog`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public FlowLog(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.FlowLogProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Description: The Description of flow log.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute FlowLogId: The flow log ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFlowLogId() {
        return software.amazon.jsii.Kernel.get(this, "attrFlowLogId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute FlowLogName: The flow log name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFlowLogName() {
        return software.amazon.jsii.Kernel.get(this, "attrFlowLogName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute LogStoreName: The log store name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLogStoreName() {
        return software.amazon.jsii.Kernel.get(this, "attrLogStoreName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ProjectName: The project name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrProjectName() {
        return software.amazon.jsii.Kernel.get(this, "attrProjectName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ResourceId: The resource id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ResourceType: The resource type.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceType() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TrafficType: The traffic type.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTrafficType() {
        return software.amazon.jsii.Kernel.get(this, "attrTrafficType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.FlowLog}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.FlowLog> {
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
        private final com.aliyun.ros.cdk.vpc.FlowLogProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.FlowLogProps.Builder();
        }

        /**
         * Property logStoreName: The log store name.
         * <p>
         * @return {@code this}
         * @param logStoreName Property logStoreName: The log store name. This parameter is required.
         */
        public Builder logStoreName(final java.lang.String logStoreName) {
            this.props.logStoreName(logStoreName);
            return this;
        }
        /**
         * Property logStoreName: The log store name.
         * <p>
         * @return {@code this}
         * @param logStoreName Property logStoreName: The log store name. This parameter is required.
         */
        public Builder logStoreName(final com.aliyun.ros.cdk.core.IResolvable logStoreName) {
            this.props.logStoreName(logStoreName);
            return this;
        }

        /**
         * Property projectName: The project name.
         * <p>
         * @return {@code this}
         * @param projectName Property projectName: The project name. This parameter is required.
         */
        public Builder projectName(final java.lang.String projectName) {
            this.props.projectName(projectName);
            return this;
        }
        /**
         * Property projectName: The project name.
         * <p>
         * @return {@code this}
         * @param projectName Property projectName: The project name. This parameter is required.
         */
        public Builder projectName(final com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.props.projectName(projectName);
            return this;
        }

        /**
         * Property resourceId: The resource id.
         * <p>
         * @return {@code this}
         * @param resourceId Property resourceId: The resource id. This parameter is required.
         */
        public Builder resourceId(final java.lang.String resourceId) {
            this.props.resourceId(resourceId);
            return this;
        }
        /**
         * Property resourceId: The resource id.
         * <p>
         * @return {@code this}
         * @param resourceId Property resourceId: The resource id. This parameter is required.
         */
        public Builder resourceId(final com.aliyun.ros.cdk.core.IResolvable resourceId) {
            this.props.resourceId(resourceId);
            return this;
        }

        /**
         * Property resourceType: The resource type.
         * <p>
         * @return {@code this}
         * @param resourceType Property resourceType: The resource type. This parameter is required.
         */
        public Builder resourceType(final java.lang.String resourceType) {
            this.props.resourceType(resourceType);
            return this;
        }
        /**
         * Property resourceType: The resource type.
         * <p>
         * @return {@code this}
         * @param resourceType Property resourceType: The resource type. This parameter is required.
         */
        public Builder resourceType(final com.aliyun.ros.cdk.core.IResolvable resourceType) {
            this.props.resourceType(resourceType);
            return this;
        }

        /**
         * Property trafficType: The traffic type.
         * <p>
         * @return {@code this}
         * @param trafficType Property trafficType: The traffic type. This parameter is required.
         */
        public Builder trafficType(final java.lang.String trafficType) {
            this.props.trafficType(trafficType);
            return this;
        }
        /**
         * Property trafficType: The traffic type.
         * <p>
         * @return {@code this}
         * @param trafficType Property trafficType: The traffic type. This parameter is required.
         */
        public Builder trafficType(final com.aliyun.ros.cdk.core.IResolvable trafficType) {
            this.props.trafficType(trafficType);
            return this;
        }

        /**
         * Property description: The Description of flow log.
         * <p>
         * @return {@code this}
         * @param description Property description: The Description of flow log. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The Description of flow log.
         * <p>
         * @return {@code this}
         * @param description Property description: The Description of flow log. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property flowLogName: The flow log name.
         * <p>
         * @return {@code this}
         * @param flowLogName Property flowLogName: The flow log name. This parameter is required.
         */
        public Builder flowLogName(final java.lang.String flowLogName) {
            this.props.flowLogName(flowLogName);
            return this;
        }
        /**
         * Property flowLogName: The flow log name.
         * <p>
         * @return {@code this}
         * @param flowLogName Property flowLogName: The flow log name. This parameter is required.
         */
        public Builder flowLogName(final com.aliyun.ros.cdk.core.IResolvable flowLogName) {
            this.props.flowLogName(flowLogName);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.vpc.FlowLog}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.FlowLog build() {
            return new com.aliyun.ros.cdk.vpc.FlowLog(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
