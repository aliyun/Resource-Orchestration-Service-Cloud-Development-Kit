package com.aliyun.ros.cdk.vpc.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::VPC::FlowLog</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:11.654Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.FlowLog")
public class FlowLog extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.vpc.datasource.IFlowLog {

    protected FlowLog(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FlowLog(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public FlowLog(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.FlowLogProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public FlowLog(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.FlowLogProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AggregationInterval: Data aggregation interval.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAggregationInterval() {
        return software.amazon.jsii.Kernel.get(this, "attrAggregationInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute BusinessStatus: Business status.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBusinessStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrBusinessStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: the time of creation.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Description: The Description of flow log.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute FlowLogId: The flow log ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFlowLogId() {
        return software.amazon.jsii.Kernel.get(this, "attrFlowLogId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute FlowLogName: The flow log name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFlowLogName() {
        return software.amazon.jsii.Kernel.get(this, "attrFlowLogName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LogStoreName: The log store name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLogStoreName() {
        return software.amazon.jsii.Kernel.get(this, "attrLogStoreName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ProjectName: The project name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrProjectName() {
        return software.amazon.jsii.Kernel.get(this, "attrProjectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceId: The resource id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceType: The resource type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceType() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TrafficType: The traffic type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTrafficType() {
        return software.amazon.jsii.Kernel.get(this, "attrTrafficType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.FlowLogProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.datasource.FlowLogProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.datasource.FlowLog}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.datasource.FlowLog> {
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
        private final com.aliyun.ros.cdk.vpc.datasource.FlowLogProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.datasource.FlowLogProps.Builder();
        }

        /**
         * Property flowLogId: The flow log ID.
         * <p>
         * @return {@code this}
         * @param flowLogId Property flowLogId: The flow log ID. This parameter is required.
         */
        public Builder flowLogId(final java.lang.String flowLogId) {
            this.props.flowLogId(flowLogId);
            return this;
        }
        /**
         * Property flowLogId: The flow log ID.
         * <p>
         * @return {@code this}
         * @param flowLogId Property flowLogId: The flow log ID. This parameter is required.
         */
        public Builder flowLogId(final com.aliyun.ros.cdk.core.IResolvable flowLogId) {
            this.props.flowLogId(flowLogId);
            return this;
        }

        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final java.lang.String refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }
        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.datasource.FlowLog}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.datasource.FlowLog build() {
            return new com.aliyun.ros.cdk.vpc.datasource.FlowLog(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
