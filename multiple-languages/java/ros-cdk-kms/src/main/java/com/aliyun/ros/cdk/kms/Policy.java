package com.aliyun.ros.cdk.kms;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::KMS::Policy</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:40.520Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kms.$Module.class, fqn = "@alicloud/ros-cdk-kms.Policy")
public class Policy extends com.aliyun.ros.cdk.core.Resource {

    protected Policy(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Policy(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Policy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kms.PolicyProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Policy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kms.PolicyProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AccessControlRules: Network Rules info.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAccessControlRules() {
        return software.amazon.jsii.Kernel.get(this, "attrAccessControlRules", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Description: Description.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute KmsInstanceId: The scope of the permission policy.
     * <p>
     * You need to specify the KMS instance that you want to access.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrKmsInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrKmsInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Permissions: RbacPermission Template, support RbacPermission/Template/CryptoServiceKeyUser and RbacPermission/Template/CryptoServiceSecretUser.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPermissions() {
        return software.amazon.jsii.Kernel.get(this, "attrPermissions", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PolicyName: The name of the permission policy.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPolicyName() {
        return software.amazon.jsii.Kernel.get(this, "attrPolicyName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Resources: Resources that allowed access by this policy.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResources() {
        return software.amazon.jsii.Kernel.get(this, "attrResources", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kms.PolicyProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.kms.PolicyProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kms.PolicyProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.kms.Policy}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.kms.Policy> {
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
        private final com.aliyun.ros.cdk.kms.PolicyProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.kms.PolicyProps.Builder();
        }

        /**
         * Property accessControlRules: Network Rules info.
         * <p>
         * @return {@code this}
         * @param accessControlRules Property accessControlRules: Network Rules info. This parameter is required.
         */
        public Builder accessControlRules(final com.aliyun.ros.cdk.core.IResolvable accessControlRules) {
            this.props.accessControlRules(accessControlRules);
            return this;
        }
        /**
         * Property accessControlRules: Network Rules info.
         * <p>
         * @return {@code this}
         * @param accessControlRules Property accessControlRules: Network Rules info. This parameter is required.
         */
        public Builder accessControlRules(final com.aliyun.ros.cdk.kms.RosPolicy.AccessControlRulesProperty accessControlRules) {
            this.props.accessControlRules(accessControlRules);
            return this;
        }

        /**
         * Property kmsInstanceId: The scope of the permission policy.
         * <p>
         * You need to specify the KMS instance that you want to access.
         * <p>
         * @return {@code this}
         * @param kmsInstanceId Property kmsInstanceId: The scope of the permission policy. This parameter is required.
         */
        public Builder kmsInstanceId(final java.lang.String kmsInstanceId) {
            this.props.kmsInstanceId(kmsInstanceId);
            return this;
        }
        /**
         * Property kmsInstanceId: The scope of the permission policy.
         * <p>
         * You need to specify the KMS instance that you want to access.
         * <p>
         * @return {@code this}
         * @param kmsInstanceId Property kmsInstanceId: The scope of the permission policy. This parameter is required.
         */
        public Builder kmsInstanceId(final com.aliyun.ros.cdk.core.IResolvable kmsInstanceId) {
            this.props.kmsInstanceId(kmsInstanceId);
            return this;
        }

        /**
         * Property permissions: The operations that can be performed.
         * <p>
         * Valid values:
         * RbacPermission/Template/CryptoServiceKeyUser: allows you to perform cryptographic operations.
         * RbacPermission/Template/CryptoServiceSecretUser: allows you to perform secret-related operations.
         * <p>
         * @return {@code this}
         * @param permissions Property permissions: The operations that can be performed. This parameter is required.
         */
        public Builder permissions(final com.aliyun.ros.cdk.core.IResolvable permissions) {
            this.props.permissions(permissions);
            return this;
        }
        /**
         * Property permissions: The operations that can be performed.
         * <p>
         * Valid values:
         * RbacPermission/Template/CryptoServiceKeyUser: allows you to perform cryptographic operations.
         * RbacPermission/Template/CryptoServiceSecretUser: allows you to perform secret-related operations.
         * <p>
         * @return {@code this}
         * @param permissions Property permissions: The operations that can be performed. This parameter is required.
         */
        public Builder permissions(final java.util.List<? extends java.lang.Object> permissions) {
            this.props.permissions(permissions);
            return this;
        }

        /**
         * Property policyName: The name of the permission policy.
         * <p>
         * @return {@code this}
         * @param policyName Property policyName: The name of the permission policy. This parameter is required.
         */
        public Builder policyName(final java.lang.String policyName) {
            this.props.policyName(policyName);
            return this;
        }
        /**
         * Property policyName: The name of the permission policy.
         * <p>
         * @return {@code this}
         * @param policyName Property policyName: The name of the permission policy. This parameter is required.
         */
        public Builder policyName(final com.aliyun.ros.cdk.core.IResolvable policyName) {
            this.props.policyName(policyName);
            return this;
        }

        /**
         * Property resources: The key and secret that are allowed to access.
         * <p>
         * Supports a maximum of 30 key and secret.
         * Key: Enter a key in the key/${KeyId} format. To allow access to all keys of a KMS instance, enter key/<em>.
         * Secret: Enter a secret in the secret/${SecretName} format. To allow access to all secrets of a KMS instance, enter secret/</em>.
         * <p>
         * @return {@code this}
         * @param resources Property resources: The key and secret that are allowed to access. This parameter is required.
         */
        public Builder resources(final com.aliyun.ros.cdk.core.IResolvable resources) {
            this.props.resources(resources);
            return this;
        }
        /**
         * Property resources: The key and secret that are allowed to access.
         * <p>
         * Supports a maximum of 30 key and secret.
         * Key: Enter a key in the key/${KeyId} format. To allow access to all keys of a KMS instance, enter key/<em>.
         * Secret: Enter a secret in the secret/${SecretName} format. To allow access to all secrets of a KMS instance, enter secret/</em>.
         * <p>
         * @return {@code this}
         * @param resources Property resources: The key and secret that are allowed to access. This parameter is required.
         */
        public Builder resources(final java.util.List<? extends java.lang.Object> resources) {
            this.props.resources(resources);
            return this;
        }

        /**
         * Property description: The description of the permission policy.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the permission policy. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the permission policy.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the permission policy. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.kms.Policy}.
         */
        @Override
        public com.aliyun.ros.cdk.kms.Policy build() {
            return new com.aliyun.ros.cdk.kms.Policy(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
