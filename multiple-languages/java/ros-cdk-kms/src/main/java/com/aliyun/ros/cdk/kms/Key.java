package com.aliyun.ros.cdk.kms;

/**
 * A ROS resource type:  `ALIYUN::KMS::Key`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.044Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kms.$Module.class, fqn = "@alicloud/ros-cdk-kms.Key")
public class Key extends com.aliyun.ros.cdk.core.Resource {

    protected Key(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Key(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::KMS::Key`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties.
     * @param enableResourcePropertyConstraint
     */
    public Key(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.kms.KeyProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::KMS::Key`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties.
     */
    public Key(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.kms.KeyProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new `ALIYUN::KMS::Key`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     */
    public Key(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeyId() {
        return software.amazon.jsii.Kernel.get(this, "attrKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.kms.Key}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.kms.Key> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private com.aliyun.ros.cdk.kms.KeyProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props().description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param enable This parameter is required.
         */
        public Builder enable(final java.lang.Boolean enable) {
            this.props().enable(enable);
            return this;
        }
        /**
         * @return {@code this}
         * @param enable This parameter is required.
         */
        public Builder enable(final com.aliyun.ros.cdk.core.IResolvable enable) {
            this.props().enable(enable);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableAutomaticRotation This parameter is required.
         */
        public Builder enableAutomaticRotation(final java.lang.Boolean enableAutomaticRotation) {
            this.props().enableAutomaticRotation(enableAutomaticRotation);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableAutomaticRotation This parameter is required.
         */
        public Builder enableAutomaticRotation(final com.aliyun.ros.cdk.core.IResolvable enableAutomaticRotation) {
            this.props().enableAutomaticRotation(enableAutomaticRotation);
            return this;
        }

        /**
         * @return {@code this}
         * @param keySpec This parameter is required.
         */
        public Builder keySpec(final java.lang.String keySpec) {
            this.props().keySpec(keySpec);
            return this;
        }

        /**
         * @return {@code this}
         * @param keyUsage This parameter is required.
         */
        public Builder keyUsage(final java.lang.String keyUsage) {
            this.props().keyUsage(keyUsage);
            return this;
        }

        /**
         * @return {@code this}
         * @param pendingWindowInDays This parameter is required.
         */
        public Builder pendingWindowInDays(final java.lang.Number pendingWindowInDays) {
            this.props().pendingWindowInDays(pendingWindowInDays);
            return this;
        }

        /**
         * @return {@code this}
         * @param protectionLevel This parameter is required.
         */
        public Builder protectionLevel(final java.lang.String protectionLevel) {
            this.props().protectionLevel(protectionLevel);
            return this;
        }

        /**
         * @return {@code this}
         * @param rotationInterval This parameter is required.
         */
        public Builder rotationInterval(final java.lang.String rotationInterval) {
            this.props().rotationInterval(rotationInterval);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.kms.Key}.
         */
        @Override
        public com.aliyun.ros.cdk.kms.Key build() {
            return new com.aliyun.ros.cdk.kms.Key(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.kms.KeyProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.kms.KeyProps.Builder();
            }
            return this.props;
        }
    }
}
