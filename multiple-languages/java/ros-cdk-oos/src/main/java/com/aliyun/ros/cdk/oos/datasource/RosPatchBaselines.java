package com.aliyun.ros.cdk.oos.datasource;

/**
 * A ROS template type:  <code>DATASOURCE::OOS::PatchBaselines</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-25T03:56:01.150Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.datasource.RosPatchBaselines")
public class RosPatchBaselines extends com.aliyun.ros.cdk.core.RosResource {

    protected RosPatchBaselines(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosPatchBaselines(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.oos.datasource.RosPatchBaselines.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>DATASOURCE::OOS::PatchBaselines</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosPatchBaselines(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.datasource.RosPatchBaselinesProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPatchBaselineNames() {
        return software.amazon.jsii.Kernel.get(this, "attrPatchBaselineNames", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPatchBaselines() {
        return software.amazon.jsii.Kernel.get(this, "attrPatchBaselines", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getOperationSystem() {
        return software.amazon.jsii.Kernel.get(this, "operationSystem", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOperationSystem(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "operationSystem", value);
    }

    /**
     */
    public void setOperationSystem(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "operationSystem", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPatchBaselineName() {
        return software.amazon.jsii.Kernel.get(this, "patchBaselineName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPatchBaselineName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "patchBaselineName", value);
    }

    /**
     */
    public void setPatchBaselineName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "patchBaselineName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getShareType() {
        return software.amazon.jsii.Kernel.get(this, "shareType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setShareType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "shareType", value);
    }

    /**
     */
    public void setShareType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "shareType", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.oos.datasource.RosPatchBaselines}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.oos.datasource.RosPatchBaselines> {
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
        private final com.aliyun.ros.cdk.oos.datasource.RosPatchBaselinesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.oos.datasource.RosPatchBaselinesProps.Builder();
        }

        /**
         * @return {@code this}
         * @param operationSystem This parameter is required.
         */
        public Builder operationSystem(final java.lang.String operationSystem) {
            this.props.operationSystem(operationSystem);
            return this;
        }
        /**
         * @return {@code this}
         * @param operationSystem This parameter is required.
         */
        public Builder operationSystem(final com.aliyun.ros.cdk.core.IResolvable operationSystem) {
            this.props.operationSystem(operationSystem);
            return this;
        }

        /**
         * @return {@code this}
         * @param patchBaselineName This parameter is required.
         */
        public Builder patchBaselineName(final java.lang.String patchBaselineName) {
            this.props.patchBaselineName(patchBaselineName);
            return this;
        }
        /**
         * @return {@code this}
         * @param patchBaselineName This parameter is required.
         */
        public Builder patchBaselineName(final com.aliyun.ros.cdk.core.IResolvable patchBaselineName) {
            this.props.patchBaselineName(patchBaselineName);
            return this;
        }

        /**
         * @return {@code this}
         * @param shareType This parameter is required.
         */
        public Builder shareType(final java.lang.String shareType) {
            this.props.shareType(shareType);
            return this;
        }
        /**
         * @return {@code this}
         * @param shareType This parameter is required.
         */
        public Builder shareType(final com.aliyun.ros.cdk.core.IResolvable shareType) {
            this.props.shareType(shareType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.oos.datasource.RosPatchBaselines}.
         */
        @Override
        public com.aliyun.ros.cdk.oos.datasource.RosPatchBaselines build() {
            return new com.aliyun.ros.cdk.oos.datasource.RosPatchBaselines(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
