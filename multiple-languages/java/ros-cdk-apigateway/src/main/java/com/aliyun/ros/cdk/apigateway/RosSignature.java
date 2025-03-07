package com.aliyun.ros.cdk.apigateway;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ApiGateway::Signature</code>, which is used to create a backend signature.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:01.827Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.RosSignature")
public class RosSignature extends com.aliyun.ros.cdk.core.RosResource {

    protected RosSignature(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosSignature(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.apigateway.RosSignature.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosSignature(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.RosSignatureProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSignatureId() {
        return software.amazon.jsii.Kernel.get(this, "attrSignatureId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getSignatureKey() {
        return software.amazon.jsii.Kernel.get(this, "signatureKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSignatureKey(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "signatureKey", java.util.Objects.requireNonNull(value, "signatureKey is required"));
    }

    /**
     */
    public void setSignatureKey(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "signatureKey", java.util.Objects.requireNonNull(value, "signatureKey is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSignatureName() {
        return software.amazon.jsii.Kernel.get(this, "signatureName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSignatureName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "signatureName", java.util.Objects.requireNonNull(value, "signatureName is required"));
    }

    /**
     */
    public void setSignatureName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "signatureName", java.util.Objects.requireNonNull(value, "signatureName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSignatureSecret() {
        return software.amazon.jsii.Kernel.get(this, "signatureSecret", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSignatureSecret(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "signatureSecret", java.util.Objects.requireNonNull(value, "signatureSecret is required"));
    }

    /**
     */
    public void setSignatureSecret(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "signatureSecret", java.util.Objects.requireNonNull(value, "signatureSecret is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.apigateway.RosSignature}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apigateway.RosSignature> {
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
        private final com.aliyun.ros.cdk.apigateway.RosSignatureProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.apigateway.RosSignatureProps.Builder();
        }

        /**
         * @return {@code this}
         * @param signatureKey This parameter is required.
         */
        public Builder signatureKey(final java.lang.String signatureKey) {
            this.props.signatureKey(signatureKey);
            return this;
        }
        /**
         * @return {@code this}
         * @param signatureKey This parameter is required.
         */
        public Builder signatureKey(final com.aliyun.ros.cdk.core.IResolvable signatureKey) {
            this.props.signatureKey(signatureKey);
            return this;
        }

        /**
         * @return {@code this}
         * @param signatureName This parameter is required.
         */
        public Builder signatureName(final java.lang.String signatureName) {
            this.props.signatureName(signatureName);
            return this;
        }
        /**
         * @return {@code this}
         * @param signatureName This parameter is required.
         */
        public Builder signatureName(final com.aliyun.ros.cdk.core.IResolvable signatureName) {
            this.props.signatureName(signatureName);
            return this;
        }

        /**
         * @return {@code this}
         * @param signatureSecret This parameter is required.
         */
        public Builder signatureSecret(final java.lang.String signatureSecret) {
            this.props.signatureSecret(signatureSecret);
            return this;
        }
        /**
         * @return {@code this}
         * @param signatureSecret This parameter is required.
         */
        public Builder signatureSecret(final com.aliyun.ros.cdk.core.IResolvable signatureSecret) {
            this.props.signatureSecret(signatureSecret);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.apigateway.RosSignature}.
         */
        @Override
        public com.aliyun.ros.cdk.apigateway.RosSignature build() {
            return new com.aliyun.ros.cdk.apigateway.RosSignature(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
