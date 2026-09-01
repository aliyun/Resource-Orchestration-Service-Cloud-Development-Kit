package com.aliyun.ros.cdk.arms;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ARMS::TraceResource</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T07:12:12.756Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.RosTraceResource")
public class RosTraceResource extends com.aliyun.ros.cdk.core.RosResource {

    protected RosTraceResource(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosTraceResource(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.arms.RosTraceResource.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosTraceResource(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.RosTraceResourceProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSlsEndpointDesc() {
        return software.amazon.jsii.Kernel.get(this, "attrSlsEndpointDesc", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTraceEndpointDesc() {
        return software.amazon.jsii.Kernel.get(this, "attrTraceEndpointDesc", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getAppType() {
        return software.amazon.jsii.Kernel.get(this, "appType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAppType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "appType", value);
    }

    /**
     */
    public void setAppType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "appType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCreateAllResource() {
        return software.amazon.jsii.Kernel.get(this, "createAllResource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCreateAllResource(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "createAllResource", value);
    }

    /**
     */
    public void setCreateAllResource(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "createAllResource", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getWorkspace() {
        return software.amazon.jsii.Kernel.get(this, "workspace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWorkspace(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "workspace", value);
    }

    /**
     */
    public void setWorkspace(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "workspace", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.arms.RosTraceResource}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.arms.RosTraceResource> {
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
        private final com.aliyun.ros.cdk.arms.RosTraceResourceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.arms.RosTraceResourceProps.Builder();
        }

        /**
         * @return {@code this}
         * @param appType This parameter is required.
         */
        public Builder appType(final java.lang.String appType) {
            this.props.appType(appType);
            return this;
        }
        /**
         * @return {@code this}
         * @param appType This parameter is required.
         */
        public Builder appType(final com.aliyun.ros.cdk.core.IResolvable appType) {
            this.props.appType(appType);
            return this;
        }

        /**
         * @return {@code this}
         * @param createAllResource This parameter is required.
         */
        public Builder createAllResource(final java.lang.Boolean createAllResource) {
            this.props.createAllResource(createAllResource);
            return this;
        }
        /**
         * @return {@code this}
         * @param createAllResource This parameter is required.
         */
        public Builder createAllResource(final com.aliyun.ros.cdk.core.IResolvable createAllResource) {
            this.props.createAllResource(createAllResource);
            return this;
        }

        /**
         * @return {@code this}
         * @param workspace This parameter is required.
         */
        public Builder workspace(final java.lang.String workspace) {
            this.props.workspace(workspace);
            return this;
        }
        /**
         * @return {@code this}
         * @param workspace This parameter is required.
         */
        public Builder workspace(final com.aliyun.ros.cdk.core.IResolvable workspace) {
            this.props.workspace(workspace);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.arms.RosTraceResource}.
         */
        @Override
        public com.aliyun.ros.cdk.arms.RosTraceResource build() {
            return new com.aliyun.ros.cdk.arms.RosTraceResource(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
