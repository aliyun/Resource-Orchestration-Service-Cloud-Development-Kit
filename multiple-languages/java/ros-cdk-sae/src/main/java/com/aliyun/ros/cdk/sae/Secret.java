package com.aliyun.ros.cdk.sae;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::SAE::Secret</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:29.446Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.Secret")
public class Secret extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.sae.ISecret {

    protected Secret(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Secret(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Secret(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sae.SecretProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Secret(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sae.SecretProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute NamespaceId: The namespace ID that the Secret instance belongs to.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNamespaceId() {
        return software.amazon.jsii.Kernel.get(this, "attrNamespaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SecretId: The ID of the secret.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecretId() {
        return software.amazon.jsii.Kernel.get(this, "attrSecretId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sae.SecretProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.sae.SecretProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.sae.Secret}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sae.Secret> {
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
        private final com.aliyun.ros.cdk.sae.SecretProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sae.SecretProps.Builder();
        }

        /**
         * Property namespaceId: The namespace ID where the Secret instance resides.
         * <p>
         * If the namespace you are in is the default namespace, you just need to fill in the RegionId.
         * <p>
         * @return {@code this}
         * @param namespaceId Property namespaceId: The namespace ID where the Secret instance resides. This parameter is required.
         */
        public Builder namespaceId(final java.lang.String namespaceId) {
            this.props.namespaceId(namespaceId);
            return this;
        }
        /**
         * Property namespaceId: The namespace ID where the Secret instance resides.
         * <p>
         * If the namespace you are in is the default namespace, you just need to fill in the RegionId.
         * <p>
         * @return {@code this}
         * @param namespaceId Property namespaceId: The namespace ID where the Secret instance resides. This parameter is required.
         */
        public Builder namespaceId(final com.aliyun.ros.cdk.core.IResolvable namespaceId) {
            this.props.namespaceId(namespaceId);
            return this;
        }

        /**
         * Property secretData: Secret key-value pair data, required.The format is as follows: {"Data":"{"k1":"v1", "k2":"v2"}"} k represents the key and v represents the value.
         * <p>
         * @return {@code this}
         * @param secretData Property secretData: Secret key-value pair data, required.The format is as follows: {"Data":"{"k1":"v1", "k2":"v2"}"} k represents the key and v represents the value. This parameter is required.
         */
        public Builder secretData(final com.aliyun.ros.cdk.core.IResolvable secretData) {
            this.props.secretData(secretData);
            return this;
        }
        /**
         * Property secretData: Secret key-value pair data, required.The format is as follows: {"Data":"{"k1":"v1", "k2":"v2"}"} k represents the key and v represents the value.
         * <p>
         * @return {@code this}
         * @param secretData Property secretData: Secret key-value pair data, required.The format is as follows: {"Data":"{"k1":"v1", "k2":"v2"}"} k represents the key and v represents the value. This parameter is required.
         */
        public Builder secretData(final java.util.Map<java.lang.String, ? extends java.lang.Object> secretData) {
            this.props.secretData(secretData);
            return this;
        }

        /**
         * Property secretName: Secret instance name.Allows combinations of numbers, letters, en dash (-) and underscores (_) and only start with letters.
         * <p>
         * @return {@code this}
         * @param secretName Property secretName: Secret instance name.Allows combinations of numbers, letters, en dash (-) and underscores (_) and only start with letters. This parameter is required.
         */
        public Builder secretName(final java.lang.String secretName) {
            this.props.secretName(secretName);
            return this;
        }
        /**
         * Property secretName: Secret instance name.Allows combinations of numbers, letters, en dash (-) and underscores (_) and only start with letters.
         * <p>
         * @return {@code this}
         * @param secretName Property secretName: Secret instance name.Allows combinations of numbers, letters, en dash (-) and underscores (_) and only start with letters. This parameter is required.
         */
        public Builder secretName(final com.aliyun.ros.cdk.core.IResolvable secretName) {
            this.props.secretName(secretName);
            return this;
        }

        /**
         * Property secretType: The currently supported Secret instance type.The values are as follows: kubernetes.io/dockerconfigjson: A confidential dictionary that stores the username and password of the mirror repository, used to pull mirror authentication during deployment.
         * <p>
         * @return {@code this}
         * @param secretType Property secretType: The currently supported Secret instance type.The values are as follows: kubernetes.io/dockerconfigjson: A confidential dictionary that stores the username and password of the mirror repository, used to pull mirror authentication during deployment. This parameter is required.
         */
        public Builder secretType(final java.lang.String secretType) {
            this.props.secretType(secretType);
            return this;
        }
        /**
         * Property secretType: The currently supported Secret instance type.The values are as follows: kubernetes.io/dockerconfigjson: A confidential dictionary that stores the username and password of the mirror repository, used to pull mirror authentication during deployment.
         * <p>
         * @return {@code this}
         * @param secretType Property secretType: The currently supported Secret instance type.The values are as follows: kubernetes.io/dockerconfigjson: A confidential dictionary that stores the username and password of the mirror repository, used to pull mirror authentication during deployment. This parameter is required.
         */
        public Builder secretType(final com.aliyun.ros.cdk.core.IResolvable secretType) {
            this.props.secretType(secretType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.sae.Secret}.
         */
        @Override
        public com.aliyun.ros.cdk.sae.Secret build() {
            return new com.aliyun.ros.cdk.sae.Secret(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
