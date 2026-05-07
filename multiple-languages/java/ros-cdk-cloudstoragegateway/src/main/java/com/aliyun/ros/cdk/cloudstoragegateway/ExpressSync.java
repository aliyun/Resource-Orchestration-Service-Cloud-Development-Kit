package com.aliyun.ros.cdk.cloudstoragegateway;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CloudStorageGateway::ExpressSync</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:46.934Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudstoragegateway.$Module.class, fqn = "@alicloud/ros-cdk-cloudstoragegateway.ExpressSync")
public class ExpressSync extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cloudstoragegateway.IExpressSync {

    protected ExpressSync(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ExpressSync(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ExpressSync(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudstoragegateway.ExpressSyncProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ExpressSync(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudstoragegateway.ExpressSyncProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ExpressSyncId: The ID of the ExpressSync.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpressSyncId() {
        return software.amazon.jsii.Kernel.get(this, "attrExpressSyncId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudstoragegateway.ExpressSyncProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cloudstoragegateway.ExpressSyncProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.cloudstoragegateway.ExpressSync}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cloudstoragegateway.ExpressSync> {
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
        private final com.aliyun.ros.cdk.cloudstoragegateway.ExpressSyncProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cloudstoragegateway.ExpressSyncProps.Builder();
        }

        /**
         * Property bucketName: The name of the OSS bucket.
         * <p>
         * @return {@code this}
         * @param bucketName Property bucketName: The name of the OSS bucket. This parameter is required.
         */
        public Builder bucketName(final java.lang.String bucketName) {
            this.props.bucketName(bucketName);
            return this;
        }
        /**
         * Property bucketName: The name of the OSS bucket.
         * <p>
         * @return {@code this}
         * @param bucketName Property bucketName: The name of the OSS bucket. This parameter is required.
         */
        public Builder bucketName(final com.aliyun.ros.cdk.core.IResolvable bucketName) {
            this.props.bucketName(bucketName);
            return this;
        }

        /**
         * Property bucketRegion: The region of the OSS bucket.
         * <p>
         * @return {@code this}
         * @param bucketRegion Property bucketRegion: The region of the OSS bucket. This parameter is required.
         */
        public Builder bucketRegion(final java.lang.String bucketRegion) {
            this.props.bucketRegion(bucketRegion);
            return this;
        }
        /**
         * Property bucketRegion: The region of the OSS bucket.
         * <p>
         * @return {@code this}
         * @param bucketRegion Property bucketRegion: The region of the OSS bucket. This parameter is required.
         */
        public Builder bucketRegion(final com.aliyun.ros.cdk.core.IResolvable bucketRegion) {
            this.props.bucketRegion(bucketRegion);
            return this;
        }

        /**
         * Property name: The name of the ExpressSync.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the ExpressSync. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the ExpressSync.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the ExpressSync. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property bucketPrefix: The prefix of the OSS bucket.
         * <p>
         * @return {@code this}
         * @param bucketPrefix Property bucketPrefix: The prefix of the OSS bucket. This parameter is required.
         */
        public Builder bucketPrefix(final java.lang.String bucketPrefix) {
            this.props.bucketPrefix(bucketPrefix);
            return this;
        }
        /**
         * Property bucketPrefix: The prefix of the OSS bucket.
         * <p>
         * @return {@code this}
         * @param bucketPrefix Property bucketPrefix: The prefix of the OSS bucket. This parameter is required.
         */
        public Builder bucketPrefix(final com.aliyun.ros.cdk.core.IResolvable bucketPrefix) {
            this.props.bucketPrefix(bucketPrefix);
            return this;
        }

        /**
         * Property description: The description of the ExpressSync.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the ExpressSync. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the ExpressSync.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the ExpressSync. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cloudstoragegateway.ExpressSync}.
         */
        @Override
        public com.aliyun.ros.cdk.cloudstoragegateway.ExpressSync build() {
            return new com.aliyun.ros.cdk.cloudstoragegateway.ExpressSync(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
