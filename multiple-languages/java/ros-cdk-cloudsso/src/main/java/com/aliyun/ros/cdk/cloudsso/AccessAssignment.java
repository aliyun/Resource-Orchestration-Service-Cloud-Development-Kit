package com.aliyun.ros.cdk.cloudsso;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CloudSSO::AccessAssignment</code>, which is used to assign access permissions on an account in your resource directory to a user or group by using an access configuration.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:02.872Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudsso.$Module.class, fqn = "@alicloud/ros-cdk-cloudsso.AccessAssignment")
public class AccessAssignment extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cloudsso.IAccessAssignment {

    protected AccessAssignment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AccessAssignment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public AccessAssignment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudsso.AccessAssignmentProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public AccessAssignment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudsso.AccessAssignmentProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudsso.AccessAssignmentProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cloudsso.AccessAssignmentProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.cloudsso.AccessAssignment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cloudsso.AccessAssignment> {
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
        private final com.aliyun.ros.cdk.cloudsso.AccessAssignmentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cloudsso.AccessAssignmentProps.Builder();
        }

        /**
         * Property accessConfigurationId: The ID of the access configuration.
         * <p>
         * @return {@code this}
         * @param accessConfigurationId Property accessConfigurationId: The ID of the access configuration. This parameter is required.
         */
        public Builder accessConfigurationId(final java.lang.String accessConfigurationId) {
            this.props.accessConfigurationId(accessConfigurationId);
            return this;
        }
        /**
         * Property accessConfigurationId: The ID of the access configuration.
         * <p>
         * @return {@code this}
         * @param accessConfigurationId Property accessConfigurationId: The ID of the access configuration. This parameter is required.
         */
        public Builder accessConfigurationId(final com.aliyun.ros.cdk.core.IResolvable accessConfigurationId) {
            this.props.accessConfigurationId(accessConfigurationId);
            return this;
        }

        /**
         * Property directoryId: The ID of the directory.
         * <p>
         * @return {@code this}
         * @param directoryId Property directoryId: The ID of the directory. This parameter is required.
         */
        public Builder directoryId(final java.lang.String directoryId) {
            this.props.directoryId(directoryId);
            return this;
        }
        /**
         * Property directoryId: The ID of the directory.
         * <p>
         * @return {@code this}
         * @param directoryId Property directoryId: The ID of the directory. This parameter is required.
         */
        public Builder directoryId(final com.aliyun.ros.cdk.core.IResolvable directoryId) {
            this.props.directoryId(directoryId);
            return this;
        }

        /**
         * Property principalId: The ID of the CloudSSO identity.
         * <p>
         * <ul>
         * <li>If you set PrincipalType to User, set PrincipalId to the ID of the CloudSSO user.</li>
         * <li>If you set PrincipalType to Group, set PrincipalId to the ID of the CloudSSO group.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param principalId Property principalId: The ID of the CloudSSO identity. This parameter is required.
         */
        public Builder principalId(final java.lang.String principalId) {
            this.props.principalId(principalId);
            return this;
        }
        /**
         * Property principalId: The ID of the CloudSSO identity.
         * <p>
         * <ul>
         * <li>If you set PrincipalType to User, set PrincipalId to the ID of the CloudSSO user.</li>
         * <li>If you set PrincipalType to Group, set PrincipalId to the ID of the CloudSSO group.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param principalId Property principalId: The ID of the CloudSSO identity. This parameter is required.
         */
        public Builder principalId(final com.aliyun.ros.cdk.core.IResolvable principalId) {
            this.props.principalId(principalId);
            return this;
        }

        /**
         * Property principalType: The type of the CloudSSO identity.
         * <p>
         * Valid values: User, Group
         * <p>
         * @return {@code this}
         * @param principalType Property principalType: The type of the CloudSSO identity. This parameter is required.
         */
        public Builder principalType(final java.lang.String principalType) {
            this.props.principalType(principalType);
            return this;
        }
        /**
         * Property principalType: The type of the CloudSSO identity.
         * <p>
         * Valid values: User, Group
         * <p>
         * @return {@code this}
         * @param principalType Property principalType: The type of the CloudSSO identity. This parameter is required.
         */
        public Builder principalType(final com.aliyun.ros.cdk.core.IResolvable principalType) {
            this.props.principalType(principalType);
            return this;
        }

        /**
         * Property targetId: The ID of the task object.
         * <p>
         * @return {@code this}
         * @param targetId Property targetId: The ID of the task object. This parameter is required.
         */
        public Builder targetId(final java.lang.String targetId) {
            this.props.targetId(targetId);
            return this;
        }
        /**
         * Property targetId: The ID of the task object.
         * <p>
         * @return {@code this}
         * @param targetId Property targetId: The ID of the task object. This parameter is required.
         */
        public Builder targetId(final com.aliyun.ros.cdk.core.IResolvable targetId) {
            this.props.targetId(targetId);
            return this;
        }

        /**
         * Property targetType: The type of the task object.
         * <p>
         * Set the value to RD-Account, which specifies the accounts in the resource directory.
         * <p>
         * @return {@code this}
         * @param targetType Property targetType: The type of the task object. This parameter is required.
         */
        public Builder targetType(final java.lang.String targetType) {
            this.props.targetType(targetType);
            return this;
        }
        /**
         * Property targetType: The type of the task object.
         * <p>
         * Set the value to RD-Account, which specifies the accounts in the resource directory.
         * <p>
         * @return {@code this}
         * @param targetType Property targetType: The type of the task object. This parameter is required.
         */
        public Builder targetType(final com.aliyun.ros.cdk.core.IResolvable targetType) {
            this.props.targetType(targetType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cloudsso.AccessAssignment}.
         */
        @Override
        public com.aliyun.ros.cdk.cloudsso.AccessAssignment build() {
            return new com.aliyun.ros.cdk.cloudsso.AccessAssignment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
