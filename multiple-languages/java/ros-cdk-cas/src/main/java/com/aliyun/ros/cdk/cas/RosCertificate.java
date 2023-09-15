package com.aliyun.ros.cdk.cas;

/**
 * A ROS template type:  <code>ALIYUN::CAS::Certificate</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:46.538Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cas.$Module.class, fqn = "@alicloud/ros-cdk-cas.RosCertificate")
public class RosCertificate extends com.aliyun.ros.cdk.core.RosResource {

    protected RosCertificate(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosCertificate(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cas.RosCertificate.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>ALIYUN::CAS::Certificate</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosCertificate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cas.RosCertificateProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCertId() {
        return software.amazon.jsii.Kernel.get(this, "attrCertId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getCert() {
        return software.amazon.jsii.Kernel.get(this, "cert", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCert(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "cert", java.util.Objects.requireNonNull(value, "cert is required"));
    }

    /**
     */
    public void setCert(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cert", java.util.Objects.requireNonNull(value, "cert is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getKey() {
        return software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setKey(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "key", java.util.Objects.requireNonNull(value, "key is required"));
    }

    /**
     */
    public void setKey(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "key", java.util.Objects.requireNonNull(value, "key is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getName() {
        return software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "name", java.util.Objects.requireNonNull(value, "name is required"));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "name", java.util.Objects.requireNonNull(value, "name is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLang() {
        return software.amazon.jsii.Kernel.get(this, "lang", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLang(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "lang", value);
    }

    /**
     */
    public void setLang(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "lang", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSourceIp() {
        return software.amazon.jsii.Kernel.get(this, "sourceIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceIp(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sourceIp", value);
    }

    /**
     */
    public void setSourceIp(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceIp", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cas.RosCertificate}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cas.RosCertificate> {
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
        private final com.aliyun.ros.cdk.cas.RosCertificateProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cas.RosCertificateProps.Builder();
        }

        /**
         * @return {@code this}
         * @param cert This parameter is required.
         */
        public Builder cert(final java.lang.String cert) {
            this.props.cert(cert);
            return this;
        }
        /**
         * @return {@code this}
         * @param cert This parameter is required.
         */
        public Builder cert(final com.aliyun.ros.cdk.core.IResolvable cert) {
            this.props.cert(cert);
            return this;
        }

        /**
         * @return {@code this}
         * @param key This parameter is required.
         */
        public Builder key(final java.lang.String key) {
            this.props.key(key);
            return this;
        }
        /**
         * @return {@code this}
         * @param key This parameter is required.
         */
        public Builder key(final com.aliyun.ros.cdk.core.IResolvable key) {
            this.props.key(key);
            return this;
        }

        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * @return {@code this}
         * @param lang This parameter is required.
         */
        public Builder lang(final java.lang.String lang) {
            this.props.lang(lang);
            return this;
        }
        /**
         * @return {@code this}
         * @param lang This parameter is required.
         */
        public Builder lang(final com.aliyun.ros.cdk.core.IResolvable lang) {
            this.props.lang(lang);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceIp This parameter is required.
         */
        public Builder sourceIp(final java.lang.String sourceIp) {
            this.props.sourceIp(sourceIp);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceIp This parameter is required.
         */
        public Builder sourceIp(final com.aliyun.ros.cdk.core.IResolvable sourceIp) {
            this.props.sourceIp(sourceIp);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cas.RosCertificate}.
         */
        @Override
        public com.aliyun.ros.cdk.cas.RosCertificate build() {
            return new com.aliyun.ros.cdk.cas.RosCertificate(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
