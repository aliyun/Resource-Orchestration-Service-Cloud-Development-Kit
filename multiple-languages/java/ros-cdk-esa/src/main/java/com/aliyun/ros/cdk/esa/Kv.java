package com.aliyun.ros.cdk.esa;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ESA::Kv</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.584Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.Kv")
public class Kv extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.esa.IKv {

    protected Kv(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Kv(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Kv(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.KvProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Kv(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.KvProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Value: The content of the key.
     * <p>
     * If the content has more than 256 characters in length, the system displays the first 100 and the last 100 characters, and omits the middle part.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrValue() {
        return software.amazon.jsii.Kernel.get(this, "attrValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.KvProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.KvProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.esa.Kv}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.esa.Kv> {
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
        private final com.aliyun.ros.cdk.esa.KvProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.esa.KvProps.Builder();
        }

        /**
         * Property key: The key name.
         * <p>
         * The name can be up to 512 characters in length and cannot contain spaces or backslashes ().
         * <p>
         * @return {@code this}
         * @param key Property key: The key name. This parameter is required.
         */
        public Builder key(final java.lang.String key) {
            this.props.key(key);
            return this;
        }
        /**
         * Property key: The key name.
         * <p>
         * The name can be up to 512 characters in length and cannot contain spaces or backslashes ().
         * <p>
         * @return {@code this}
         * @param key Property key: The key name. This parameter is required.
         */
        public Builder key(final com.aliyun.ros.cdk.core.IResolvable key) {
            this.props.key(key);
            return this;
        }

        /**
         * Property namespace: The name specified when calling [CreatevNamespace] https://help.aliyun.com/document_detail/2850317.html.
         * <p>
         * @return {@code this}
         * @param namespace Property namespace: The name specified when calling [CreatevNamespace] https://help.aliyun.com/document_detail/2850317.html. This parameter is required.
         */
        public Builder namespace(final java.lang.String namespace) {
            this.props.namespace(namespace);
            return this;
        }
        /**
         * Property namespace: The name specified when calling [CreatevNamespace] https://help.aliyun.com/document_detail/2850317.html.
         * <p>
         * @return {@code this}
         * @param namespace Property namespace: The name specified when calling [CreatevNamespace] https://help.aliyun.com/document_detail/2850317.html. This parameter is required.
         */
        public Builder namespace(final com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.props.namespace(namespace);
            return this;
        }

        /**
         * Property value: The content of the key.
         * <p>
         * If the content has more than 256 characters in length, the system displays the first 100 and the last 100 characters, and omits the middle part.
         * <p>
         * @return {@code this}
         * @param value Property value: The content of the key. This parameter is required.
         */
        public Builder value(final java.lang.String value) {
            this.props.value(value);
            return this;
        }
        /**
         * Property value: The content of the key.
         * <p>
         * If the content has more than 256 characters in length, the system displays the first 100 and the last 100 characters, and omits the middle part.
         * <p>
         * @return {@code this}
         * @param value Property value: The content of the key. This parameter is required.
         */
        public Builder value(final com.aliyun.ros.cdk.core.IResolvable value) {
            this.props.value(value);
            return this;
        }

        /**
         * Property expiration: The content of the key, which can be up to 2 MB (2 × 1000 × 1000).
         * <p>
         * If the content is larger than 2 MB, call [PutKvWithHighCapacity] https://www.alibabacloud.com/help/en/doc-detail/2850486.html.
         * <p>
         * @return {@code this}
         * @param expiration Property expiration: The content of the key, which can be up to 2 MB (2 × 1000 × 1000). This parameter is required.
         */
        public Builder expiration(final java.lang.Number expiration) {
            this.props.expiration(expiration);
            return this;
        }
        /**
         * Property expiration: The content of the key, which can be up to 2 MB (2 × 1000 × 1000).
         * <p>
         * If the content is larger than 2 MB, call [PutKvWithHighCapacity] https://www.alibabacloud.com/help/en/doc-detail/2850486.html.
         * <p>
         * @return {@code this}
         * @param expiration Property expiration: The content of the key, which can be up to 2 MB (2 × 1000 × 1000). This parameter is required.
         */
        public Builder expiration(final com.aliyun.ros.cdk.core.IResolvable expiration) {
            this.props.expiration(expiration);
            return this;
        }

        /**
         * Property expirationTtl: The time when the key-value pair expires, which cannot be earlier than the current time.
         * <p>
         * The value is a timestamp in seconds. If you specify both Expiration and ExpirationTtl, only ExpirationTtl takes effect.
         * <p>
         * @return {@code this}
         * @param expirationTtl Property expirationTtl: The time when the key-value pair expires, which cannot be earlier than the current time. This parameter is required.
         */
        public Builder expirationTtl(final java.lang.Number expirationTtl) {
            this.props.expirationTtl(expirationTtl);
            return this;
        }
        /**
         * Property expirationTtl: The time when the key-value pair expires, which cannot be earlier than the current time.
         * <p>
         * The value is a timestamp in seconds. If you specify both Expiration and ExpirationTtl, only ExpirationTtl takes effect.
         * <p>
         * @return {@code this}
         * @param expirationTtl Property expirationTtl: The time when the key-value pair expires, which cannot be earlier than the current time. This parameter is required.
         */
        public Builder expirationTtl(final com.aliyun.ros.cdk.core.IResolvable expirationTtl) {
            this.props.expirationTtl(expirationTtl);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.esa.Kv}.
         */
        @Override
        public com.aliyun.ros.cdk.esa.Kv build() {
            return new com.aliyun.ros.cdk.esa.Kv(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
