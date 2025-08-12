package com.aliyun.ros.cdk.aligreen;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::Aligreen::AuditCallback</code>, which is used to create an audit callback.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:43.367Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.aligreen.$Module.class, fqn = "@alicloud/ros-cdk-aligreen.AuditCallback")
public class AuditCallback extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.aligreen.IAuditCallback {

    protected AuditCallback(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AuditCallback(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public AuditCallback(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.aligreen.AuditCallbackProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public AuditCallback(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.aligreen.AuditCallbackProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AuditCallbackName: The AuditCallback name defined by the customer.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuditCallbackName() {
        return software.amazon.jsii.Kernel.get(this, "attrAuditCallbackName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CallbackSuggestions: List of audit results supported by message notification.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCallbackSuggestions() {
        return software.amazon.jsii.Kernel.get(this, "attrCallbackSuggestions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CallbackTypes: A list of Callback types.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCallbackTypes() {
        return software.amazon.jsii.Kernel.get(this, "attrCallbackTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CryptType: The encryption algorithm is used to verify that the callback request is sent by the content security service to your business service.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCryptType() {
        return software.amazon.jsii.Kernel.get(this, "attrCryptType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Url: The detection result will be called back to the url.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.aligreen.AuditCallbackProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.aligreen.AuditCallbackProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.aligreen.AuditCallback}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.aligreen.AuditCallback> {
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
        private final com.aliyun.ros.cdk.aligreen.AuditCallbackProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.aligreen.AuditCallbackProps.Builder();
        }

        /**
         * Property auditCallbackName: The AuditCallback name defined by the customer.
         * <p>
         * It can contain no more than 20 characters in Chinese, English, underscore (_), and digits.
         * <p>
         * @return {@code this}
         * @param auditCallbackName Property auditCallbackName: The AuditCallback name defined by the customer. This parameter is required.
         */
        public Builder auditCallbackName(final java.lang.String auditCallbackName) {
            this.props.auditCallbackName(auditCallbackName);
            return this;
        }
        /**
         * Property auditCallbackName: The AuditCallback name defined by the customer.
         * <p>
         * It can contain no more than 20 characters in Chinese, English, underscore (_), and digits.
         * <p>
         * @return {@code this}
         * @param auditCallbackName Property auditCallbackName: The AuditCallback name defined by the customer. This parameter is required.
         */
        public Builder auditCallbackName(final com.aliyun.ros.cdk.core.IResolvable auditCallbackName) {
            this.props.auditCallbackName(auditCallbackName);
            return this;
        }

        /**
         * Property callbackSuggestions: List of audit results supported by message notification.
         * <p>
         * Value: block: confirmed violation, review: Suspected violation, pass: normal.
         * <p>
         * @return {@code this}
         * @param callbackSuggestions Property callbackSuggestions: List of audit results supported by message notification. This parameter is required.
         */
        public Builder callbackSuggestions(final com.aliyun.ros.cdk.core.IResolvable callbackSuggestions) {
            this.props.callbackSuggestions(callbackSuggestions);
            return this;
        }
        /**
         * Property callbackSuggestions: List of audit results supported by message notification.
         * <p>
         * Value: block: confirmed violation, review: Suspected violation, pass: normal.
         * <p>
         * @return {@code this}
         * @param callbackSuggestions Property callbackSuggestions: List of audit results supported by message notification. This parameter is required.
         */
        public Builder callbackSuggestions(final java.util.List<? extends java.lang.Object> callbackSuggestions) {
            this.props.callbackSuggestions(callbackSuggestions);
            return this;
        }

        /**
         * Property callbackTypes: A list of Callback types.
         * <p>
         * Value: machineScan: Machine audit result notification, selfAudit: self-service audit notification.
         * <p>
         * @return {@code this}
         * @param callbackTypes Property callbackTypes: A list of Callback types. This parameter is required.
         */
        public Builder callbackTypes(final com.aliyun.ros.cdk.core.IResolvable callbackTypes) {
            this.props.callbackTypes(callbackTypes);
            return this;
        }
        /**
         * Property callbackTypes: A list of Callback types.
         * <p>
         * Value: machineScan: Machine audit result notification, selfAudit: self-service audit notification.
         * <p>
         * @return {@code this}
         * @param callbackTypes Property callbackTypes: A list of Callback types. This parameter is required.
         */
        public Builder callbackTypes(final java.util.List<? extends java.lang.Object> callbackTypes) {
            this.props.callbackTypes(callbackTypes);
            return this;
        }

        /**
         * Property cryptType: The encryption algorithm is used to verify that the callback request is sent by the content security service to your business service.
         * <p>
         * The value is SHA256:SHA256 encryption algorithm and SM3: SM3 encryption algorithm.
         * <p>
         * @return {@code this}
         * @param cryptType Property cryptType: The encryption algorithm is used to verify that the callback request is sent by the content security service to your business service. This parameter is required.
         */
        public Builder cryptType(final java.lang.String cryptType) {
            this.props.cryptType(cryptType);
            return this;
        }
        /**
         * Property cryptType: The encryption algorithm is used to verify that the callback request is sent by the content security service to your business service.
         * <p>
         * The value is SHA256:SHA256 encryption algorithm and SM3: SM3 encryption algorithm.
         * <p>
         * @return {@code this}
         * @param cryptType Property cryptType: The encryption algorithm is used to verify that the callback request is sent by the content security service to your business service. This parameter is required.
         */
        public Builder cryptType(final com.aliyun.ros.cdk.core.IResolvable cryptType) {
            this.props.cryptType(cryptType);
            return this;
        }

        /**
         * Property url: The detection result will be called back to the url.
         * <p>
         * @return {@code this}
         * @param url Property url: The detection result will be called back to the url. This parameter is required.
         */
        public Builder url(final java.lang.String url) {
            this.props.url(url);
            return this;
        }
        /**
         * Property url: The detection result will be called back to the url.
         * <p>
         * @return {@code this}
         * @param url Property url: The detection result will be called back to the url. This parameter is required.
         */
        public Builder url(final com.aliyun.ros.cdk.core.IResolvable url) {
            this.props.url(url);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.aligreen.AuditCallback}.
         */
        @Override
        public com.aliyun.ros.cdk.aligreen.AuditCallback build() {
            return new com.aliyun.ros.cdk.aligreen.AuditCallback(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
