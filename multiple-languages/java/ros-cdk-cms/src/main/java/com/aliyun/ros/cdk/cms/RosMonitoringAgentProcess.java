package com.aliyun.ros.cdk.cms;

/**
 * A ROS template type:  <code>ALIYUN::CMS::MonitoringAgentProcess</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-25T03:55:58.655Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosMonitoringAgentProcess")
public class RosMonitoringAgentProcess extends com.aliyun.ros.cdk.core.RosResource {

    protected RosMonitoringAgentProcess(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosMonitoringAgentProcess(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cms.RosMonitoringAgentProcess.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>ALIYUN::CMS::MonitoringAgentProcess</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosMonitoringAgentProcess(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.RosMonitoringAgentProcessProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrId() {
        return software.amazon.jsii.Kernel.get(this, "attrId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceId", java.util.Objects.requireNonNull(value, "instanceId is required"));
    }

    /**
     */
    public void setInstanceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceId", java.util.Objects.requireNonNull(value, "instanceId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getProcessName() {
        return software.amazon.jsii.Kernel.get(this, "processName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProcessName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "processName", value);
    }

    /**
     */
    public void setProcessName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "processName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getProcessUser() {
        return software.amazon.jsii.Kernel.get(this, "processUser", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProcessUser(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "processUser", value);
    }

    /**
     */
    public void setProcessUser(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "processUser", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cms.RosMonitoringAgentProcess}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cms.RosMonitoringAgentProcess> {
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
        private final com.aliyun.ros.cdk.cms.RosMonitoringAgentProcessProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cms.RosMonitoringAgentProcessProps.Builder();
        }

        /**
         * @return {@code this}
         * @param instanceId This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceId This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param processName This parameter is required.
         */
        public Builder processName(final java.lang.String processName) {
            this.props.processName(processName);
            return this;
        }
        /**
         * @return {@code this}
         * @param processName This parameter is required.
         */
        public Builder processName(final com.aliyun.ros.cdk.core.IResolvable processName) {
            this.props.processName(processName);
            return this;
        }

        /**
         * @return {@code this}
         * @param processUser This parameter is required.
         */
        public Builder processUser(final java.lang.String processUser) {
            this.props.processUser(processUser);
            return this;
        }
        /**
         * @return {@code this}
         * @param processUser This parameter is required.
         */
        public Builder processUser(final com.aliyun.ros.cdk.core.IResolvable processUser) {
            this.props.processUser(processUser);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cms.RosMonitoringAgentProcess}.
         */
        @Override
        public com.aliyun.ros.cdk.cms.RosMonitoringAgentProcess build() {
            return new com.aliyun.ros.cdk.cms.RosMonitoringAgentProcess(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
