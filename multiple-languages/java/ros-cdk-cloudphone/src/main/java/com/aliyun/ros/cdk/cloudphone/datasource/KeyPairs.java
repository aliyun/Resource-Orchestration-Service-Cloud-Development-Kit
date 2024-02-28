package com.aliyun.ros.cdk.cloudphone.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::CloudPhone::KeyPairs</code>, which is used to query the information about key pairs.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-02-28T02:53:27.339Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudphone.$Module.class, fqn = "@alicloud/ros-cdk-cloudphone.datasource.KeyPairs")
public class KeyPairs extends com.aliyun.ros.cdk.core.Resource {

    protected KeyPairs(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected KeyPairs(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public KeyPairs(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.cloudphone.datasource.KeyPairsProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public KeyPairs(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.cloudphone.datasource.KeyPairsProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public KeyPairs(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute KeyPairNames: The list of key pair names.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrKeyPairNames() {
        return software.amazon.jsii.Kernel.get(this, "attrKeyPairNames", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute KeyPairs: The list of key pairs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrKeyPairs() {
        return software.amazon.jsii.Kernel.get(this, "attrKeyPairs", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cloudphone.datasource.KeyPairs}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cloudphone.datasource.KeyPairs> {
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
        private com.aliyun.ros.cdk.cloudphone.datasource.KeyPairsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property keyPairFingerPrint: The Private Key of the Fingerprint.
         * <p>
         * @return {@code this}
         * @param keyPairFingerPrint Property keyPairFingerPrint: The Private Key of the Fingerprint. This parameter is required.
         */
        public Builder keyPairFingerPrint(final java.lang.String keyPairFingerPrint) {
            this.props().keyPairFingerPrint(keyPairFingerPrint);
            return this;
        }
        /**
         * Property keyPairFingerPrint: The Private Key of the Fingerprint.
         * <p>
         * @return {@code this}
         * @param keyPairFingerPrint Property keyPairFingerPrint: The Private Key of the Fingerprint. This parameter is required.
         */
        public Builder keyPairFingerPrint(final com.aliyun.ros.cdk.core.IResolvable keyPairFingerPrint) {
            this.props().keyPairFingerPrint(keyPairFingerPrint);
            return this;
        }

        /**
         * Property keyPairName: The Key Name.
         * <p>
         * @return {@code this}
         * @param keyPairName Property keyPairName: The Key Name. This parameter is required.
         */
        public Builder keyPairName(final java.lang.String keyPairName) {
            this.props().keyPairName(keyPairName);
            return this;
        }
        /**
         * Property keyPairName: The Key Name.
         * <p>
         * @return {@code this}
         * @param keyPairName Property keyPairName: The Key Name. This parameter is required.
         */
        public Builder keyPairName(final com.aliyun.ros.cdk.core.IResolvable keyPairName) {
            this.props().keyPairName(keyPairName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cloudphone.datasource.KeyPairs}.
         */
        @Override
        public com.aliyun.ros.cdk.cloudphone.datasource.KeyPairs build() {
            return new com.aliyun.ros.cdk.cloudphone.datasource.KeyPairs(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.cloudphone.datasource.KeyPairsProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.cloudphone.datasource.KeyPairsProps.Builder();
            }
            return this.props;
        }
    }
}
