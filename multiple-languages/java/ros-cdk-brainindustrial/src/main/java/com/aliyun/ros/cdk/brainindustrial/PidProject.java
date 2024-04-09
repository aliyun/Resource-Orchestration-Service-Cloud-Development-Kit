package com.aliyun.ros.cdk.brainindustrial;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::BrainIndustrial::PidProject</code>, which is used to add a project.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:30.630Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.brainindustrial.$Module.class, fqn = "@alicloud/ros-cdk-brainindustrial.PidProject")
public class PidProject extends com.aliyun.ros.cdk.core.Resource {

    protected PidProject(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected PidProject(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public PidProject(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.brainindustrial.PidProjectProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public PidProject(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.brainindustrial.PidProjectProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute PidOrganizationId: PidOrganizationId.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPidOrganizationId() {
        return software.amazon.jsii.Kernel.get(this, "attrPidOrganizationId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PidProjectDesc: PidProjectDesc.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPidProjectDesc() {
        return software.amazon.jsii.Kernel.get(this, "attrPidProjectDesc", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PidProjectId: PidProjectId.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPidProjectId() {
        return software.amazon.jsii.Kernel.get(this, "attrPidProjectId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PidProjectName: PidProjectName.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPidProjectName() {
        return software.amazon.jsii.Kernel.get(this, "attrPidProjectName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.brainindustrial.PidProjectProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.brainindustrial.PidProjectProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.brainindustrial.PidProjectProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.brainindustrial.PidProject}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.brainindustrial.PidProject> {
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
        private final com.aliyun.ros.cdk.brainindustrial.PidProjectProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.brainindustrial.PidProjectProps.Builder();
        }

        /**
         * Property pidOrganizationId: PidOrganizationId.
         * <p>
         * @return {@code this}
         * @param pidOrganizationId Property pidOrganizationId: PidOrganizationId. This parameter is required.
         */
        public Builder pidOrganizationId(final java.lang.String pidOrganizationId) {
            this.props.pidOrganizationId(pidOrganizationId);
            return this;
        }
        /**
         * Property pidOrganizationId: PidOrganizationId.
         * <p>
         * @return {@code this}
         * @param pidOrganizationId Property pidOrganizationId: PidOrganizationId. This parameter is required.
         */
        public Builder pidOrganizationId(final com.aliyun.ros.cdk.core.IResolvable pidOrganizationId) {
            this.props.pidOrganizationId(pidOrganizationId);
            return this;
        }

        /**
         * Property pidProjectName: PidProjectName.
         * <p>
         * @return {@code this}
         * @param pidProjectName Property pidProjectName: PidProjectName. This parameter is required.
         */
        public Builder pidProjectName(final java.lang.String pidProjectName) {
            this.props.pidProjectName(pidProjectName);
            return this;
        }
        /**
         * Property pidProjectName: PidProjectName.
         * <p>
         * @return {@code this}
         * @param pidProjectName Property pidProjectName: PidProjectName. This parameter is required.
         */
        public Builder pidProjectName(final com.aliyun.ros.cdk.core.IResolvable pidProjectName) {
            this.props.pidProjectName(pidProjectName);
            return this;
        }

        /**
         * Property pidProjectDesc: PidProjectDesc.
         * <p>
         * @return {@code this}
         * @param pidProjectDesc Property pidProjectDesc: PidProjectDesc. This parameter is required.
         */
        public Builder pidProjectDesc(final java.lang.String pidProjectDesc) {
            this.props.pidProjectDesc(pidProjectDesc);
            return this;
        }
        /**
         * Property pidProjectDesc: PidProjectDesc.
         * <p>
         * @return {@code this}
         * @param pidProjectDesc Property pidProjectDesc: PidProjectDesc. This parameter is required.
         */
        public Builder pidProjectDesc(final com.aliyun.ros.cdk.core.IResolvable pidProjectDesc) {
            this.props.pidProjectDesc(pidProjectDesc);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.brainindustrial.PidProject}.
         */
        @Override
        public com.aliyun.ros.cdk.brainindustrial.PidProject build() {
            return new com.aliyun.ros.cdk.brainindustrial.PidProject(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
