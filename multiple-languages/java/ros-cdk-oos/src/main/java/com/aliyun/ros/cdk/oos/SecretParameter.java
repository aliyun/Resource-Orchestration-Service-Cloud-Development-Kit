package com.aliyun.ros.cdk.oos;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::OOS::SecretParameter</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:58.552Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.SecretParameter")
public class SecretParameter extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.oos.ISecretParameter {

    protected SecretParameter(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SecretParameter(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public SecretParameter(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.SecretParameterProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public SecretParameter(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.SecretParameterProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Constraints: The constraints of the encryption parameter.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConstraints() {
        return software.amazon.jsii.Kernel.get(this, "attrConstraints", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreatedBy: The user who created the encryption parameter.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreatedBy() {
        return software.amazon.jsii.Kernel.get(this, "attrCreatedBy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: The time when the encryption parameter was created.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Description: The description of the encryption parameter.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute KeyId: The Customer Master Key (CMK) of Key Management Service (KMS) that is used to encrypt the parameter.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeyId() {
        return software.amazon.jsii.Kernel.get(this, "attrKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ParameterVersion: The version number of the encryption parameter.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameterVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrParameterVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceGroupId: The ID of resource group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SecretParameterId: The ID of the encryption parameter.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecretParameterId() {
        return software.amazon.jsii.Kernel.get(this, "attrSecretParameterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SecretParameterName: The name of the encryption parameter.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecretParameterName() {
        return software.amazon.jsii.Kernel.get(this, "attrSecretParameterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ShareType: The share type of the encryption parameter.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrShareType() {
        return software.amazon.jsii.Kernel.get(this, "attrShareType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Tags: Tags of encryption parameter.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Type: The data type of the encryption parameter.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
        return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UpdatedBy: The user who updated the encryption parameter.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdatedBy() {
        return software.amazon.jsii.Kernel.get(this, "attrUpdatedBy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UpdatedDate: The time when the encryption parameter was updated.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdatedDate() {
        return software.amazon.jsii.Kernel.get(this, "attrUpdatedDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.SecretParameterProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.oos.SecretParameterProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.oos.SecretParameter}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.oos.SecretParameter> {
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
        private final com.aliyun.ros.cdk.oos.SecretParameterProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.oos.SecretParameterProps.Builder();
        }

        /**
         * Property secretParameterName: The name of the encryption parameter.
         * <p>
         * The name must be 1 to 180 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ALIBABA, ALICLOUD, ACS or OOS.
         * <p>
         * @return {@code this}
         * @param secretParameterName Property secretParameterName: The name of the encryption parameter. This parameter is required.
         */
        public Builder secretParameterName(final java.lang.String secretParameterName) {
            this.props.secretParameterName(secretParameterName);
            return this;
        }
        /**
         * Property secretParameterName: The name of the encryption parameter.
         * <p>
         * The name must be 1 to 180 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ALIBABA, ALICLOUD, ACS or OOS.
         * <p>
         * @return {@code this}
         * @param secretParameterName Property secretParameterName: The name of the encryption parameter. This parameter is required.
         */
        public Builder secretParameterName(final com.aliyun.ros.cdk.core.IResolvable secretParameterName) {
            this.props.secretParameterName(secretParameterName);
            return this;
        }

        /**
         * Property value: The value of the encryption parameter.
         * <p>
         * The value must be 1 to 4096 characters in length.
         * <p>
         * @return {@code this}
         * @param value Property value: The value of the encryption parameter. This parameter is required.
         */
        public Builder value(final java.lang.String value) {
            this.props.value(value);
            return this;
        }
        /**
         * Property value: The value of the encryption parameter.
         * <p>
         * The value must be 1 to 4096 characters in length.
         * <p>
         * @return {@code this}
         * @param value Property value: The value of the encryption parameter. This parameter is required.
         */
        public Builder value(final com.aliyun.ros.cdk.core.IResolvable value) {
            this.props.value(value);
            return this;
        }

        /**
         * Property constraints: The constraints of the encryption parameter.
         * <p>
         * @return {@code this}
         * @param constraints Property constraints: The constraints of the encryption parameter. This parameter is required.
         */
        public Builder constraints(final com.aliyun.ros.cdk.core.IResolvable constraints) {
            this.props.constraints(constraints);
            return this;
        }
        /**
         * Property constraints: The constraints of the encryption parameter.
         * <p>
         * @return {@code this}
         * @param constraints Property constraints: The constraints of the encryption parameter. This parameter is required.
         */
        public Builder constraints(final java.util.Map<java.lang.String, ? extends java.lang.Object> constraints) {
            this.props.constraints(constraints);
            return this;
        }

        /**
         * Property description: The description of the encryption parameter.
         * <p>
         * The description must be 1 to 200 characters in length.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the encryption parameter. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the encryption parameter.
         * <p>
         * The description must be 1 to 200 characters in length.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the encryption parameter. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property keyId: The Customer Master Key (CMK) of Key Management Service (KMS) that is used to encrypt the parameter.
         * <p>
         * @return {@code this}
         * @param keyId Property keyId: The Customer Master Key (CMK) of Key Management Service (KMS) that is used to encrypt the parameter. This parameter is required.
         */
        public Builder keyId(final java.lang.String keyId) {
            this.props.keyId(keyId);
            return this;
        }
        /**
         * Property keyId: The Customer Master Key (CMK) of Key Management Service (KMS) that is used to encrypt the parameter.
         * <p>
         * @return {@code this}
         * @param keyId Property keyId: The Customer Master Key (CMK) of Key Management Service (KMS) that is used to encrypt the parameter. This parameter is required.
         */
        public Builder keyId(final com.aliyun.ros.cdk.core.IResolvable keyId) {
            this.props.keyId(keyId);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property tags: Tags of encryption parameter.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags of encryption parameter. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.oos.RosSecretParameter.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.oos.SecretParameter}.
         */
        @Override
        public com.aliyun.ros.cdk.oos.SecretParameter build() {
            return new com.aliyun.ros.cdk.oos.SecretParameter(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
