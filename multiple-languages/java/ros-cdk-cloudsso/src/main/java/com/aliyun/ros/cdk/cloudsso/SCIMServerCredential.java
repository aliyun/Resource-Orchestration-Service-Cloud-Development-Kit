package com.aliyun.ros.cdk.cloudsso;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CloudSSO::SCIMServerCredential</code>, which is used to create a System for Cross-domain Identity Management (SCIM) credential.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:02.938Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudsso.$Module.class, fqn = "@alicloud/ros-cdk-cloudsso.SCIMServerCredential")
public class SCIMServerCredential extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cloudsso.ISCIMServerCredential {

    protected SCIMServerCredential(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SCIMServerCredential(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public SCIMServerCredential(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudsso.SCIMServerCredentialProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public SCIMServerCredential(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudsso.SCIMServerCredentialProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CredentialId: The ID of the SCIM credential.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCredentialId() {
        return software.amazon.jsii.Kernel.get(this, "attrCredentialId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CredentialSecret: The secret of the SCIM credential.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCredentialSecret() {
        return software.amazon.jsii.Kernel.get(this, "attrCredentialSecret", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudsso.SCIMServerCredentialProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cloudsso.SCIMServerCredentialProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.cloudsso.SCIMServerCredential}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cloudsso.SCIMServerCredential> {
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
        private final com.aliyun.ros.cdk.cloudsso.SCIMServerCredentialProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cloudsso.SCIMServerCredentialProps.Builder();
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
         * Property status: The new status of the SCIM credential.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Enabled: The SCIM credential is enabled.</li>
         * <li>Disabled: The SCIM credential is disabled.
         * The default value is Enabled.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param status Property status: The new status of the SCIM credential. This parameter is required.
         */
        public Builder status(final java.lang.String status) {
            this.props.status(status);
            return this;
        }
        /**
         * Property status: The new status of the SCIM credential.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Enabled: The SCIM credential is enabled.</li>
         * <li>Disabled: The SCIM credential is disabled.
         * The default value is Enabled.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param status Property status: The new status of the SCIM credential. This parameter is required.
         */
        public Builder status(final com.aliyun.ros.cdk.core.IResolvable status) {
            this.props.status(status);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cloudsso.SCIMServerCredential}.
         */
        @Override
        public com.aliyun.ros.cdk.cloudsso.SCIMServerCredential build() {
            return new com.aliyun.ros.cdk.cloudsso.SCIMServerCredential(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
