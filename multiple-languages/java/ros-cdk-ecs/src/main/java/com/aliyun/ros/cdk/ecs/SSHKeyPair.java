package com.aliyun.ros.cdk.ecs;

/**
 * A ROS resource type:  `ALIYUN::ECS::SSHKeyPair`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.53.0 (build c071d26)", date = "2022-02-11T01:44:07.508Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.SSHKeyPair")
public class SSHKeyPair extends com.aliyun.ros.cdk.core.Resource {

    protected SSHKeyPair(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SSHKeyPair(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ECS::SSHKeyPair`.
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
    public SSHKeyPair(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.SSHKeyPairProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ECS::SSHKeyPair`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public SSHKeyPair(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.SSHKeyPairProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute KeyPairFingerPrint: The fingerprint of the key pair.
     * <p>
     * The public key fingerprint format defined in RFC4716: MD5 message digest algorithm. Refer to http://tools.ietf.org/html/rfc4716.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrKeyPairFingerPrint() {
        return software.amazon.jsii.Kernel.get(this, "attrKeyPairFingerPrint", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute KeyPairName: SSH Key pair name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrKeyPairName() {
        return software.amazon.jsii.Kernel.get(this, "attrKeyPairName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PrivateKeyBody: The private key of the key pair.
     * <p>
     * Content of the RSA private key in the PKCS#8 format of the unencrypted PEM encoding. Refer to: https://www.openssl.org/docs/apps/pkcs8.html.User only can get the private key one time when and only when SSH key pair is created.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPrivateKeyBody() {
        return software.amazon.jsii.Kernel.get(this, "attrPrivateKeyBody", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.SSHKeyPair}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.SSHKeyPair> {
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
        private final com.aliyun.ros.cdk.ecs.SSHKeyPairProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.SSHKeyPairProps.Builder();
        }

        /**
         * Property keyPairName: SSH key pair name.
         * <p>
         * It must be unique. [2, 128] characters. All character sets are supported. Do not start with a special character, digit, http://, or https://. It can contain digits, ".", "_", or "-".
         * <p>
         * @return {@code this}
         * @param keyPairName Property keyPairName: SSH key pair name. This parameter is required.
         */
        public Builder keyPairName(final java.lang.String keyPairName) {
            this.props.keyPairName(keyPairName);
            return this;
        }
        /**
         * Property keyPairName: SSH key pair name.
         * <p>
         * It must be unique. [2, 128] characters. All character sets are supported. Do not start with a special character, digit, http://, or https://. It can contain digits, ".", "_", or "-".
         * <p>
         * @return {@code this}
         * @param keyPairName Property keyPairName: SSH key pair name. This parameter is required.
         */
        public Builder keyPairName(final com.aliyun.ros.cdk.core.IResolvable keyPairName) {
            this.props.keyPairName(keyPairName);
            return this;
        }

        /**
         * Property publicKeyBody: SSH Public key.
         * <p>
         * If PublicKeyBody is specified, existed public key body will be imported instead of creating new SSH key pair.
         * <p>
         * @return {@code this}
         * @param publicKeyBody Property publicKeyBody: SSH Public key. This parameter is required.
         */
        public Builder publicKeyBody(final java.lang.String publicKeyBody) {
            this.props.publicKeyBody(publicKeyBody);
            return this;
        }
        /**
         * Property publicKeyBody: SSH Public key.
         * <p>
         * If PublicKeyBody is specified, existed public key body will be imported instead of creating new SSH key pair.
         * <p>
         * @return {@code this}
         * @param publicKeyBody Property publicKeyBody: SSH Public key. This parameter is required.
         */
        public Builder publicKeyBody(final com.aliyun.ros.cdk.core.IResolvable publicKeyBody) {
            this.props.publicKeyBody(publicKeyBody);
            return this;
        }

        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property tags: Tags to attach to instance.
         * <p>
         * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to instance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ecs.RosSSHKeyPair.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ecs.SSHKeyPair}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.SSHKeyPair build() {
            return new com.aliyun.ros.cdk.ecs.SSHKeyPair(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
