package com.aliyun.ros.cdk.kms;

/**
 * A ROS resource type:  `ALIYUN::KMS::Alias`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-13T06:46:15.308Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kms.$Module.class, fqn = "@alicloud/ros-cdk-kms.Alias")
public class Alias extends com.aliyun.ros.cdk.core.Resource {

    protected Alias(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Alias(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::KMS::Alias`.
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
    public Alias(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kms.AliasProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::KMS::Alias`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Alias(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kms.AliasProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.kms.Alias}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.kms.Alias> {
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
        private final com.aliyun.ros.cdk.kms.AliasProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.kms.AliasProps.Builder();
        }

        /**
         * Property aliasName: - The display name of the key.
         * <p>
         * You can use the alias to call APIs such as Encrypt, GenerateDataKey, and DescribeKey. - Not including the prefix, the minimum length of an alias is 1 and the maximum length is 255. - The prefix alias/ must be included.
         * <p>
         * @return {@code this}
         * @param aliasName Property aliasName: - The display name of the key. This parameter is required.
         */
        public Builder aliasName(final java.lang.String aliasName) {
            this.props.aliasName(aliasName);
            return this;
        }
        /**
         * Property aliasName: - The display name of the key.
         * <p>
         * You can use the alias to call APIs such as Encrypt, GenerateDataKey, and DescribeKey. - Not including the prefix, the minimum length of an alias is 1 and the maximum length is 255. - The prefix alias/ must be included.
         * <p>
         * @return {@code this}
         * @param aliasName Property aliasName: - The display name of the key. This parameter is required.
         */
        public Builder aliasName(final com.aliyun.ros.cdk.core.IResolvable aliasName) {
            this.props.aliasName(aliasName);
            return this;
        }

        /**
         * Property keyId: Globally unique identifier of the CMK.
         * <p>
         * @return {@code this}
         * @param keyId Property keyId: Globally unique identifier of the CMK. This parameter is required.
         */
        public Builder keyId(final java.lang.String keyId) {
            this.props.keyId(keyId);
            return this;
        }
        /**
         * Property keyId: Globally unique identifier of the CMK.
         * <p>
         * @return {@code this}
         * @param keyId Property keyId: Globally unique identifier of the CMK. This parameter is required.
         */
        public Builder keyId(final com.aliyun.ros.cdk.core.IResolvable keyId) {
            this.props.keyId(keyId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.kms.Alias}.
         */
        @Override
        public com.aliyun.ros.cdk.kms.Alias build() {
            return new com.aliyun.ros.cdk.kms.Alias(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
