package com.aliyun.ros.cdk.brainindustrial;

/**
 * A ROS resource type:  `ALIYUN::BrainIndustrial::PidOrganization`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.49.0 (build e322d87)", date = "2021-12-21T15:12:56.759Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.brainindustrial.$Module.class, fqn = "@alicloud/ros-cdk-brainindustrial.PidOrganization")
public class PidOrganization extends com.aliyun.ros.cdk.core.Resource {

    protected PidOrganization(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected PidOrganization(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::BrainIndustrial::PidOrganization`.
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
    public PidOrganization(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.brainindustrial.PidOrganizationProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::BrainIndustrial::PidOrganization`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public PidOrganization(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.brainindustrial.PidOrganizationProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ParentPidOrganizationId: ParentPidOrganizationId.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrParentPidOrganizationId() {
        return software.amazon.jsii.Kernel.get(this, "attrParentPidOrganizationId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PidOrganizationId: PidOrganizationId.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPidOrganizationId() {
        return software.amazon.jsii.Kernel.get(this, "attrPidOrganizationId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PidOrganizationLevel: PidOrganizationLevel.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPidOrganizationLevel() {
        return software.amazon.jsii.Kernel.get(this, "attrPidOrganizationLevel", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PidOrganizationName: PidOrganizationName.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPidOrganizationName() {
        return software.amazon.jsii.Kernel.get(this, "attrPidOrganizationName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.brainindustrial.PidOrganization}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.brainindustrial.PidOrganization> {
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
        private final com.aliyun.ros.cdk.brainindustrial.PidOrganizationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.brainindustrial.PidOrganizationProps.Builder();
        }

        /**
         * Property pidOrganizationName: PidOrganizationName.
         * <p>
         * @return {@code this}
         * @param pidOrganizationName Property pidOrganizationName: PidOrganizationName. This parameter is required.
         */
        public Builder pidOrganizationName(final java.lang.String pidOrganizationName) {
            this.props.pidOrganizationName(pidOrganizationName);
            return this;
        }
        /**
         * Property pidOrganizationName: PidOrganizationName.
         * <p>
         * @return {@code this}
         * @param pidOrganizationName Property pidOrganizationName: PidOrganizationName. This parameter is required.
         */
        public Builder pidOrganizationName(final com.aliyun.ros.cdk.core.IResolvable pidOrganizationName) {
            this.props.pidOrganizationName(pidOrganizationName);
            return this;
        }

        /**
         * Property parentPidOrganizationId: ParentPidOrganizationId.
         * <p>
         * @return {@code this}
         * @param parentPidOrganizationId Property parentPidOrganizationId: ParentPidOrganizationId. This parameter is required.
         */
        public Builder parentPidOrganizationId(final java.lang.String parentPidOrganizationId) {
            this.props.parentPidOrganizationId(parentPidOrganizationId);
            return this;
        }
        /**
         * Property parentPidOrganizationId: ParentPidOrganizationId.
         * <p>
         * @return {@code this}
         * @param parentPidOrganizationId Property parentPidOrganizationId: ParentPidOrganizationId. This parameter is required.
         */
        public Builder parentPidOrganizationId(final com.aliyun.ros.cdk.core.IResolvable parentPidOrganizationId) {
            this.props.parentPidOrganizationId(parentPidOrganizationId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.brainindustrial.PidOrganization}.
         */
        @Override
        public com.aliyun.ros.cdk.brainindustrial.PidOrganization build() {
            return new com.aliyun.ros.cdk.brainindustrial.PidOrganization(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
