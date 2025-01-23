package com.aliyun.ros.cdk.paiplugin;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::PAIPlugin::Template</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:42.330Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.paiplugin.$Module.class, fqn = "@alicloud/ros-cdk-paiplugin.Template")
public class Template extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.paiplugin.ITemplate {

    protected Template(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Template(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Template(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.paiplugin.TemplateProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Template(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.paiplugin.TemplateProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CreatedTime: The creation time of the Signature.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreatedTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreatedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Description: Application instructions.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Id: The ID of the Signature.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrId() {
        return software.amazon.jsii.Kernel.get(this, "attrId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Name: The name of the Signature.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrName() {
        return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Reason: Review recommendations.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrReason() {
        return software.amazon.jsii.Kernel.get(this, "attrReason", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.paiplugin.TemplateProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.paiplugin.TemplateProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.paiplugin.Template}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.paiplugin.Template> {
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
        private final com.aliyun.ros.cdk.paiplugin.TemplateProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.paiplugin.TemplateProps.Builder();
        }

        /**
         * Property content: The content of the template.
         * <p>
         * @return {@code this}
         * @param content Property content: The content of the template. This parameter is required.
         */
        public Builder content(final java.lang.String content) {
            this.props.content(content);
            return this;
        }
        /**
         * Property content: The content of the template.
         * <p>
         * @return {@code this}
         * @param content Property content: The content of the template. This parameter is required.
         */
        public Builder content(final com.aliyun.ros.cdk.core.IResolvable content) {
            this.props.content(content);
            return this;
        }

        /**
         * Property description: For the template content, please keep the total word count within 70 words.
         * <p>
         * The excess will be charged as long text messages. Each text message is recorded as 67 words.
         * <p>
         * @return {@code this}
         * @param description Property description: For the template content, please keep the total word count within 70 words. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: For the template content, please keep the total word count within 70 words.
         * <p>
         * The excess will be charged as long text messages. Each text message is recorded as 67 words.
         * <p>
         * @return {@code this}
         * @param description Property description: For the template content, please keep the total word count within 70 words. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property name: The name of the template.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the template. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the template.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the template. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property type: The type of the template.
         * <p>
         * The following values are supported:
         * 0: Verification code.
         * 1: SMS notification.
         * 2: Promotional SMS.
         * <p>
         * @return {@code this}
         * @param type Property type: The type of the template. This parameter is required.
         */
        public Builder type(final java.lang.Number type) {
            this.props.type(type);
            return this;
        }
        /**
         * Property type: The type of the template.
         * <p>
         * The following values are supported:
         * 0: Verification code.
         * 1: SMS notification.
         * 2: Promotional SMS.
         * <p>
         * @return {@code this}
         * @param type Property type: The type of the template. This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * Property signature: The name of the Signature, You must select either Signature or SignatureId, but not both.
         * <p>
         * @return {@code this}
         * @param signature Property signature: The name of the Signature, You must select either Signature or SignatureId, but not both. This parameter is required.
         */
        public Builder signature(final java.lang.String signature) {
            this.props.signature(signature);
            return this;
        }
        /**
         * Property signature: The name of the Signature, You must select either Signature or SignatureId, but not both.
         * <p>
         * @return {@code this}
         * @param signature Property signature: The name of the Signature, You must select either Signature or SignatureId, but not both. This parameter is required.
         */
        public Builder signature(final com.aliyun.ros.cdk.core.IResolvable signature) {
            this.props.signature(signature);
            return this;
        }

        /**
         * Property signatureId: The ID of the Signature, You must select either Signature or SignatureId, but not both.
         * <p>
         * @return {@code this}
         * @param signatureId Property signatureId: The ID of the Signature, You must select either Signature or SignatureId, but not both. This parameter is required.
         */
        public Builder signatureId(final java.lang.String signatureId) {
            this.props.signatureId(signatureId);
            return this;
        }
        /**
         * Property signatureId: The ID of the Signature, You must select either Signature or SignatureId, but not both.
         * <p>
         * @return {@code this}
         * @param signatureId Property signatureId: The ID of the Signature, You must select either Signature or SignatureId, but not both. This parameter is required.
         */
        public Builder signatureId(final com.aliyun.ros.cdk.core.IResolvable signatureId) {
            this.props.signatureId(signatureId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.paiplugin.Template}.
         */
        @Override
        public com.aliyun.ros.cdk.paiplugin.Template build() {
            return new com.aliyun.ros.cdk.paiplugin.Template(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
