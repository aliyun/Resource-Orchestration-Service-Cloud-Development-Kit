package com.aliyun.ros.cdk.schedulerx;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::SchedulerX::WorkFlow</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:46:20.794Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.schedulerx.$Module.class, fqn = "@alicloud/ros-cdk-schedulerx.WorkFlow")
public class WorkFlow extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.schedulerx.IWorkFlow {

    protected WorkFlow(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected WorkFlow(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public WorkFlow(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.schedulerx.WorkFlowProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public WorkFlow(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.schedulerx.WorkFlowProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Description: Workflow description.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute GroupId: The application Group ID, which is obtained from the application management page of the console.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MaxConcurrency: The maximum number of workflow instances running at the same time.
     * <p>
     * The default value is 1, that is, the last trigger is not completed, and the next trigger will not be performed even when the running time is reached.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaxConcurrency() {
        return software.amazon.jsii.Kernel.get(this, "attrMaxConcurrency", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Namespace: The namespace ID, which is obtained from the namespace page in the console.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNamespace() {
        return software.amazon.jsii.Kernel.get(this, "attrNamespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TimeExpression: Time expression, which is set based on the selected time type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTimeExpression() {
        return software.amazon.jsii.Kernel.get(this, "attrTimeExpression", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TimeType: Time type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTimeType() {
        return software.amazon.jsii.Kernel.get(this, "attrTimeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute WorkFlowId: workflow id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkFlowId() {
        return software.amazon.jsii.Kernel.get(this, "attrWorkFlowId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute WorkflowName: Workflow Name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkflowName() {
        return software.amazon.jsii.Kernel.get(this, "attrWorkflowName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.schedulerx.WorkFlowProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.schedulerx.WorkFlowProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.schedulerx.WorkFlow}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.schedulerx.WorkFlow> {
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
        private final com.aliyun.ros.cdk.schedulerx.WorkFlowProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.schedulerx.WorkFlowProps.Builder();
        }

        /**
         * Property groupId: The application Group ID, which is obtained from the application management page of the console.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: The application Group ID, which is obtained from the application management page of the console. This parameter is required.
         */
        public Builder groupId(final java.lang.String groupId) {
            this.props.groupId(groupId);
            return this;
        }
        /**
         * Property groupId: The application Group ID, which is obtained from the application management page of the console.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: The application Group ID, which is obtained from the application management page of the console. This parameter is required.
         */
        public Builder groupId(final com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.props.groupId(groupId);
            return this;
        }

        /**
         * Property namespace: The namespace ID, which is obtained from the namespace page in the console.
         * <p>
         * @return {@code this}
         * @param namespace Property namespace: The namespace ID, which is obtained from the namespace page in the console. This parameter is required.
         */
        public Builder namespace(final java.lang.String namespace) {
            this.props.namespace(namespace);
            return this;
        }
        /**
         * Property namespace: The namespace ID, which is obtained from the namespace page in the console.
         * <p>
         * @return {@code this}
         * @param namespace Property namespace: The namespace ID, which is obtained from the namespace page in the console. This parameter is required.
         */
        public Builder namespace(final com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.props.namespace(namespace);
            return this;
        }

        /**
         * Property timeType: Time type.
         * <p>
         * Currently, the following time types are supported:
         * <p>
         * <ul>
         * <li>cron: 1</li>
         * <li>api: 100.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param timeType Property timeType: Time type. This parameter is required.
         */
        public Builder timeType(final java.lang.Number timeType) {
            this.props.timeType(timeType);
            return this;
        }
        /**
         * Property timeType: Time type.
         * <p>
         * Currently, the following time types are supported:
         * <p>
         * <ul>
         * <li>cron: 1</li>
         * <li>api: 100.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param timeType Property timeType: Time type. This parameter is required.
         */
        public Builder timeType(final com.aliyun.ros.cdk.core.IResolvable timeType) {
            this.props.timeType(timeType);
            return this;
        }

        /**
         * Property workflowName: Workflow Name.
         * <p>
         * @return {@code this}
         * @param workflowName Property workflowName: Workflow Name. This parameter is required.
         */
        public Builder workflowName(final java.lang.String workflowName) {
            this.props.workflowName(workflowName);
            return this;
        }
        /**
         * Property workflowName: Workflow Name.
         * <p>
         * @return {@code this}
         * @param workflowName Property workflowName: Workflow Name. This parameter is required.
         */
        public Builder workflowName(final com.aliyun.ros.cdk.core.IResolvable workflowName) {
            this.props.workflowName(workflowName);
            return this;
        }

        /**
         * Property description: Workflow description.
         * <p>
         * @return {@code this}
         * @param description Property description: Workflow description. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Workflow description.
         * <p>
         * @return {@code this}
         * @param description Property description: Workflow description. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property maxConcurrency: The maximum number of workflow instances running at the same time.
         * <p>
         * The default value is 1, that is, the last trigger is not completed, and the next trigger will not be performed even when the running time is reached.
         * <p>
         * @return {@code this}
         * @param maxConcurrency Property maxConcurrency: The maximum number of workflow instances running at the same time. This parameter is required.
         */
        public Builder maxConcurrency(final java.lang.Number maxConcurrency) {
            this.props.maxConcurrency(maxConcurrency);
            return this;
        }
        /**
         * Property maxConcurrency: The maximum number of workflow instances running at the same time.
         * <p>
         * The default value is 1, that is, the last trigger is not completed, and the next trigger will not be performed even when the running time is reached.
         * <p>
         * @return {@code this}
         * @param maxConcurrency Property maxConcurrency: The maximum number of workflow instances running at the same time. This parameter is required.
         */
        public Builder maxConcurrency(final com.aliyun.ros.cdk.core.IResolvable maxConcurrency) {
            this.props.maxConcurrency(maxConcurrency);
            return this;
        }

        /**
         * Property namespaceSource: Special third parties are required.
         * <p>
         * @return {@code this}
         * @param namespaceSource Property namespaceSource: Special third parties are required. This parameter is required.
         */
        public Builder namespaceSource(final java.lang.String namespaceSource) {
            this.props.namespaceSource(namespaceSource);
            return this;
        }
        /**
         * Property namespaceSource: Special third parties are required.
         * <p>
         * @return {@code this}
         * @param namespaceSource Property namespaceSource: Special third parties are required. This parameter is required.
         */
        public Builder namespaceSource(final com.aliyun.ros.cdk.core.IResolvable namespaceSource) {
            this.props.namespaceSource(namespaceSource);
            return this;
        }

        /**
         * Property timeExpression: Time expression, which is set based on the selected time type.
         * <p>
         * <ul>
         * <li>cron: Fill in standard cron expressions to support online verification.</li>
         * <li>api: No time expression.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param timeExpression Property timeExpression: Time expression, which is set based on the selected time type. This parameter is required.
         */
        public Builder timeExpression(final java.lang.String timeExpression) {
            this.props.timeExpression(timeExpression);
            return this;
        }
        /**
         * Property timeExpression: Time expression, which is set based on the selected time type.
         * <p>
         * <ul>
         * <li>cron: Fill in standard cron expressions to support online verification.</li>
         * <li>api: No time expression.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param timeExpression Property timeExpression: Time expression, which is set based on the selected time type. This parameter is required.
         */
        public Builder timeExpression(final com.aliyun.ros.cdk.core.IResolvable timeExpression) {
            this.props.timeExpression(timeExpression);
            return this;
        }

        /**
         * Property timezone: Time Zone.
         * <p>
         * @return {@code this}
         * @param timezone Property timezone: Time Zone. This parameter is required.
         */
        public Builder timezone(final java.lang.String timezone) {
            this.props.timezone(timezone);
            return this;
        }
        /**
         * Property timezone: Time Zone.
         * <p>
         * @return {@code this}
         * @param timezone Property timezone: Time Zone. This parameter is required.
         */
        public Builder timezone(final com.aliyun.ros.cdk.core.IResolvable timezone) {
            this.props.timezone(timezone);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.schedulerx.WorkFlow}.
         */
        @Override
        public com.aliyun.ros.cdk.schedulerx.WorkFlow build() {
            return new com.aliyun.ros.cdk.schedulerx.WorkFlow(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
