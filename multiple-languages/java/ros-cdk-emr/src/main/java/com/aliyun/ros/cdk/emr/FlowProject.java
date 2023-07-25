package com.aliyun.ros.cdk.emr;

/**
 * A ROS resource type:  <code>ALIYUN::EMR::FlowProject</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-25T03:56:00.155Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.FlowProject")
public class FlowProject extends com.aliyun.ros.cdk.core.Resource {

    protected FlowProject(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FlowProject(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::EMR::FlowProject</code>.
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
    public FlowProject(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.emr.FlowProjectProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::EMR::FlowProject</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public FlowProject(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.emr.FlowProjectProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CreateTime: The time when the project was created.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Description: The description of the project.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute FlowProjectId: The ID of the project.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFlowProjectId() {
        return software.amazon.jsii.Kernel.get(this, "attrFlowProjectId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute FlowProjectName: The name of the project.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFlowProjectName() {
        return software.amazon.jsii.Kernel.get(this, "attrFlowProjectName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute GmtModified: The time when the project was modified.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGmtModified() {
        return software.amazon.jsii.Kernel.get(this, "attrGmtModified", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute UserId: The ID of the primary account.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUserId() {
        return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.emr.FlowProject}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.emr.FlowProject> {
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
        private final com.aliyun.ros.cdk.emr.FlowProjectProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.emr.FlowProjectProps.Builder();
        }

        /**
         * Property description: The description of the project.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the project. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the project.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the project. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property flowProjectName: The name of the project.
         * <p>
         * @return {@code this}
         * @param flowProjectName Property flowProjectName: The name of the project. This parameter is required.
         */
        public Builder flowProjectName(final java.lang.String flowProjectName) {
            this.props.flowProjectName(flowProjectName);
            return this;
        }
        /**
         * Property flowProjectName: The name of the project.
         * <p>
         * @return {@code this}
         * @param flowProjectName Property flowProjectName: The name of the project. This parameter is required.
         */
        public Builder flowProjectName(final com.aliyun.ros.cdk.core.IResolvable flowProjectName) {
            this.props.flowProjectName(flowProjectName);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the enterprise resource group to which the EMR instances and ECS node instances belong.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the enterprise resource group to which the EMR instances and ECS node instances belong. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the enterprise resource group to which the EMR instances and ECS node instances belong.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the enterprise resource group to which the EMR instances and ECS node instances belong. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.emr.FlowProject}.
         */
        @Override
        public com.aliyun.ros.cdk.emr.FlowProject build() {
            return new com.aliyun.ros.cdk.emr.FlowProject(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
