package com.aliyun.ros.cdk.sls;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::SLS::OssExternalStore</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:21.024Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.OssExternalStore")
public class OssExternalStore extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.sls.IOssExternalStore {

    protected OssExternalStore(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected OssExternalStore(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public OssExternalStore(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.OssExternalStoreProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public OssExternalStore(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.OssExternalStoreProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ExternalStoreName: The name of the external store.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrExternalStoreName() {
        return software.amazon.jsii.Kernel.get(this, "attrExternalStoreName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Project: The name of the project to which the external store belongs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrProject() {
        return software.amazon.jsii.Kernel.get(this, "attrProject", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.OssExternalStoreProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.sls.OssExternalStoreProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.sls.OssExternalStore}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sls.OssExternalStore> {
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
        private final com.aliyun.ros.cdk.sls.OssExternalStoreProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sls.OssExternalStoreProps.Builder();
        }

        /**
         * Property accessId: The AccessKey ID.
         * <p>
         * @return {@code this}
         * @param accessId Property accessId: The AccessKey ID. This parameter is required.
         */
        public Builder accessId(final java.lang.String accessId) {
            this.props.accessId(accessId);
            return this;
        }
        /**
         * Property accessId: The AccessKey ID.
         * <p>
         * @return {@code this}
         * @param accessId Property accessId: The AccessKey ID. This parameter is required.
         */
        public Builder accessId(final com.aliyun.ros.cdk.core.IResolvable accessId) {
            this.props.accessId(accessId);
            return this;
        }

        /**
         * Property accessKey: The AccessKey secret.
         * <p>
         * @return {@code this}
         * @param accessKey Property accessKey: The AccessKey secret. This parameter is required.
         */
        public Builder accessKey(final java.lang.String accessKey) {
            this.props.accessKey(accessKey);
            return this;
        }
        /**
         * Property accessKey: The AccessKey secret.
         * <p>
         * @return {@code this}
         * @param accessKey Property accessKey: The AccessKey secret. This parameter is required.
         */
        public Builder accessKey(final com.aliyun.ros.cdk.core.IResolvable accessKey) {
            this.props.accessKey(accessKey);
            return this;
        }

        /**
         * Property bucket: The name of the OSS bucket.
         * <p>
         * @return {@code this}
         * @param bucket Property bucket: The name of the OSS bucket. This parameter is required.
         */
        public Builder bucket(final java.lang.String bucket) {
            this.props.bucket(bucket);
            return this;
        }
        /**
         * Property bucket: The name of the OSS bucket.
         * <p>
         * @return {@code this}
         * @param bucket Property bucket: The name of the OSS bucket. This parameter is required.
         */
        public Builder bucket(final com.aliyun.ros.cdk.core.IResolvable bucket) {
            this.props.bucket(bucket);
            return this;
        }

        /**
         * Property columns: The associated fields.
         * <p>
         * @return {@code this}
         * @param columns Property columns: The associated fields. This parameter is required.
         */
        public Builder columns(final com.aliyun.ros.cdk.core.IResolvable columns) {
            this.props.columns(columns);
            return this;
        }
        /**
         * Property columns: The associated fields.
         * <p>
         * @return {@code this}
         * @param columns Property columns: The associated fields. This parameter is required.
         */
        public Builder columns(final java.util.List<? extends java.lang.Object> columns) {
            this.props.columns(columns);
            return this;
        }

        /**
         * Property endpoint: The OSS endpoint.
         * <p>
         * @return {@code this}
         * @param endpoint Property endpoint: The OSS endpoint. This parameter is required.
         */
        public Builder endpoint(final java.lang.String endpoint) {
            this.props.endpoint(endpoint);
            return this;
        }
        /**
         * Property endpoint: The OSS endpoint.
         * <p>
         * @return {@code this}
         * @param endpoint Property endpoint: The OSS endpoint. This parameter is required.
         */
        public Builder endpoint(final com.aliyun.ros.cdk.core.IResolvable endpoint) {
            this.props.endpoint(endpoint);
            return this;
        }

        /**
         * Property externalStoreName: The name of the external store.
         * <p>
         * @return {@code this}
         * @param externalStoreName Property externalStoreName: The name of the external store. This parameter is required.
         */
        public Builder externalStoreName(final java.lang.String externalStoreName) {
            this.props.externalStoreName(externalStoreName);
            return this;
        }
        /**
         * Property externalStoreName: The name of the external store.
         * <p>
         * @return {@code this}
         * @param externalStoreName Property externalStoreName: The name of the external store. This parameter is required.
         */
        public Builder externalStoreName(final com.aliyun.ros.cdk.core.IResolvable externalStoreName) {
            this.props.externalStoreName(externalStoreName);
            return this;
        }

        /**
         * Property objects: The associated OSS objects.
         * <p>
         * Valid values of n: 1 to 100.
         * <p>
         * @return {@code this}
         * @param objects Property objects: The associated OSS objects. This parameter is required.
         */
        public Builder objects(final com.aliyun.ros.cdk.core.IResolvable objects) {
            this.props.objects(objects);
            return this;
        }
        /**
         * Property objects: The associated OSS objects.
         * <p>
         * Valid values of n: 1 to 100.
         * <p>
         * @return {@code this}
         * @param objects Property objects: The associated OSS objects. This parameter is required.
         */
        public Builder objects(final java.util.List<? extends java.lang.Object> objects) {
            this.props.objects(objects);
            return this;
        }

        /**
         * Property project: A short description of struct.
         * <p>
         * @return {@code this}
         * @param project Property project: A short description of struct. This parameter is required.
         */
        public Builder project(final java.lang.String project) {
            this.props.project(project);
            return this;
        }
        /**
         * Property project: A short description of struct.
         * <p>
         * @return {@code this}
         * @param project Property project: A short description of struct. This parameter is required.
         */
        public Builder project(final com.aliyun.ros.cdk.core.IResolvable project) {
            this.props.project(project);
            return this;
        }

        /**
         * Property storeType: The type of the external store.
         * <p>
         * Set the value to oss.
         * <p>
         * @return {@code this}
         * @param storeType Property storeType: The type of the external store. This parameter is required.
         */
        public Builder storeType(final java.lang.String storeType) {
            this.props.storeType(storeType);
            return this;
        }
        /**
         * Property storeType: The type of the external store.
         * <p>
         * Set the value to oss.
         * <p>
         * @return {@code this}
         * @param storeType Property storeType: The type of the external store. This parameter is required.
         */
        public Builder storeType(final com.aliyun.ros.cdk.core.IResolvable storeType) {
            this.props.storeType(storeType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.sls.OssExternalStore}.
         */
        @Override
        public com.aliyun.ros.cdk.sls.OssExternalStore build() {
            return new com.aliyun.ros.cdk.sls.OssExternalStore(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
