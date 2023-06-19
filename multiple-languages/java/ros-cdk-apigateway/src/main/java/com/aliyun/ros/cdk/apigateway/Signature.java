package com.aliyun.ros.cdk.apigateway;

/**
 * A ROS resource type:  <code>ALIYUN::ApiGateway::Signature</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.84.0 (build 5404dcf)", date = "2023-06-19T08:52:08.269Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.Signature")
public class Signature extends com.aliyun.ros.cdk.core.Resource {

    protected Signature(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Signature(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::ApiGateway::Signature</code>.
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
    public Signature(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.SignatureProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::ApiGateway::Signature</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Signature(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.SignatureProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute SignatureId: The id of the created signature.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSignatureId() {
        return software.amazon.jsii.Kernel.get(this, "attrSignatureId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.apigateway.Signature}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apigateway.Signature> {
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
        private final com.aliyun.ros.cdk.apigateway.SignatureProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.apigateway.SignatureProps.Builder();
        }

        /**
         * Property signatureKey: The key of the signature.
         * <p>
         * @return {@code this}
         * @param signatureKey Property signatureKey: The key of the signature. This parameter is required.
         */
        public Builder signatureKey(final java.lang.String signatureKey) {
            this.props.signatureKey(signatureKey);
            return this;
        }
        /**
         * Property signatureKey: The key of the signature.
         * <p>
         * @return {@code this}
         * @param signatureKey Property signatureKey: The key of the signature. This parameter is required.
         */
        public Builder signatureKey(final com.aliyun.ros.cdk.core.IResolvable signatureKey) {
            this.props.signatureKey(signatureKey);
            return this;
        }

        /**
         * Property signatureName: The name of the Signature.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
         * <p>
         * @return {@code this}
         * @param signatureName Property signatureName: The name of the Signature.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character. This parameter is required.
         */
        public Builder signatureName(final java.lang.String signatureName) {
            this.props.signatureName(signatureName);
            return this;
        }
        /**
         * Property signatureName: The name of the Signature.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
         * <p>
         * @return {@code this}
         * @param signatureName Property signatureName: The name of the Signature.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character. This parameter is required.
         */
        public Builder signatureName(final com.aliyun.ros.cdk.core.IResolvable signatureName) {
            this.props.signatureName(signatureName);
            return this;
        }

        /**
         * Property signatureSecret: The secret of the signature.
         * <p>
         * @return {@code this}
         * @param signatureSecret Property signatureSecret: The secret of the signature. This parameter is required.
         */
        public Builder signatureSecret(final java.lang.String signatureSecret) {
            this.props.signatureSecret(signatureSecret);
            return this;
        }
        /**
         * Property signatureSecret: The secret of the signature.
         * <p>
         * @return {@code this}
         * @param signatureSecret Property signatureSecret: The secret of the signature. This parameter is required.
         */
        public Builder signatureSecret(final com.aliyun.ros.cdk.core.IResolvable signatureSecret) {
            this.props.signatureSecret(signatureSecret);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.apigateway.Signature}.
         */
        @Override
        public com.aliyun.ros.cdk.apigateway.Signature build() {
            return new com.aliyun.ros.cdk.apigateway.Signature(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
