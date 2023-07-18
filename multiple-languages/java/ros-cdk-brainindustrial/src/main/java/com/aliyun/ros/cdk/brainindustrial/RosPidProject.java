package com.aliyun.ros.cdk.brainindustrial;

/**
 * A ROS template type:  <code>ALIYUN::BrainIndustrial::PidProject</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-18T08:27:59.931Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.brainindustrial.$Module.class, fqn = "@alicloud/ros-cdk-brainindustrial.RosPidProject")
public class RosPidProject extends com.aliyun.ros.cdk.core.RosResource {

    protected RosPidProject(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosPidProject(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.brainindustrial.RosPidProject.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>ALIYUN::BrainIndustrial::PidProject</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosPidProject(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.brainindustrial.RosPidProjectProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPidOrganizationId() {
        return software.amazon.jsii.Kernel.get(this, "attrPidOrganizationId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPidProjectDesc() {
        return software.amazon.jsii.Kernel.get(this, "attrPidProjectDesc", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPidProjectId() {
        return software.amazon.jsii.Kernel.get(this, "attrPidProjectId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPidProjectName() {
        return software.amazon.jsii.Kernel.get(this, "attrPidProjectName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getPidOrganizationId() {
        return software.amazon.jsii.Kernel.get(this, "pidOrganizationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPidOrganizationId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "pidOrganizationId", java.util.Objects.requireNonNull(value, "pidOrganizationId is required"));
    }

    /**
     */
    public void setPidOrganizationId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "pidOrganizationId", java.util.Objects.requireNonNull(value, "pidOrganizationId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPidProjectName() {
        return software.amazon.jsii.Kernel.get(this, "pidProjectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPidProjectName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "pidProjectName", java.util.Objects.requireNonNull(value, "pidProjectName is required"));
    }

    /**
     */
    public void setPidProjectName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "pidProjectName", java.util.Objects.requireNonNull(value, "pidProjectName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPidProjectDesc() {
        return software.amazon.jsii.Kernel.get(this, "pidProjectDesc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPidProjectDesc(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "pidProjectDesc", value);
    }

    /**
     */
    public void setPidProjectDesc(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "pidProjectDesc", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.brainindustrial.RosPidProject}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.brainindustrial.RosPidProject> {
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
        private final com.aliyun.ros.cdk.brainindustrial.RosPidProjectProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.brainindustrial.RosPidProjectProps.Builder();
        }

        /**
         * @return {@code this}
         * @param pidOrganizationId This parameter is required.
         */
        public Builder pidOrganizationId(final java.lang.String pidOrganizationId) {
            this.props.pidOrganizationId(pidOrganizationId);
            return this;
        }
        /**
         * @return {@code this}
         * @param pidOrganizationId This parameter is required.
         */
        public Builder pidOrganizationId(final com.aliyun.ros.cdk.core.IResolvable pidOrganizationId) {
            this.props.pidOrganizationId(pidOrganizationId);
            return this;
        }

        /**
         * @return {@code this}
         * @param pidProjectName This parameter is required.
         */
        public Builder pidProjectName(final java.lang.String pidProjectName) {
            this.props.pidProjectName(pidProjectName);
            return this;
        }
        /**
         * @return {@code this}
         * @param pidProjectName This parameter is required.
         */
        public Builder pidProjectName(final com.aliyun.ros.cdk.core.IResolvable pidProjectName) {
            this.props.pidProjectName(pidProjectName);
            return this;
        }

        /**
         * @return {@code this}
         * @param pidProjectDesc This parameter is required.
         */
        public Builder pidProjectDesc(final java.lang.String pidProjectDesc) {
            this.props.pidProjectDesc(pidProjectDesc);
            return this;
        }
        /**
         * @return {@code this}
         * @param pidProjectDesc This parameter is required.
         */
        public Builder pidProjectDesc(final com.aliyun.ros.cdk.core.IResolvable pidProjectDesc) {
            this.props.pidProjectDesc(pidProjectDesc);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.brainindustrial.RosPidProject}.
         */
        @Override
        public com.aliyun.ros.cdk.brainindustrial.RosPidProject build() {
            return new com.aliyun.ros.cdk.brainindustrial.RosPidProject(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
