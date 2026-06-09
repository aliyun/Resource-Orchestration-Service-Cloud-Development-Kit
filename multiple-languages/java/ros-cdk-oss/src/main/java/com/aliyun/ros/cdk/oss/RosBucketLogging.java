package com.aliyun.ros.cdk.oss;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::OSS::BucketLogging</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T14:11:59.903Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucketLogging")
public class RosBucketLogging extends com.aliyun.ros.cdk.core.RosResource {

    protected RosBucketLogging(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosBucketLogging(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.oss.RosBucketLogging.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosBucketLogging(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oss.RosBucketLoggingProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLoggingRole() {
        return software.amazon.jsii.Kernel.get(this, "attrLoggingRole", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTargetBucket() {
        return software.amazon.jsii.Kernel.get(this, "attrTargetBucket", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTargetPrefix() {
        return software.amazon.jsii.Kernel.get(this, "attrTargetPrefix", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getBucket() {
        return software.amazon.jsii.Kernel.get(this, "bucket", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBucket(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "bucket", java.util.Objects.requireNonNull(value, "bucket is required"));
    }

    /**
     */
    public void setBucket(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "bucket", java.util.Objects.requireNonNull(value, "bucket is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTargetBucket() {
        return software.amazon.jsii.Kernel.get(this, "targetBucket", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTargetBucket(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "targetBucket", java.util.Objects.requireNonNull(value, "targetBucket is required"));
    }

    /**
     */
    public void setTargetBucket(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "targetBucket", java.util.Objects.requireNonNull(value, "targetBucket is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLoggingRole() {
        return software.amazon.jsii.Kernel.get(this, "loggingRole", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLoggingRole(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "loggingRole", value);
    }

    /**
     */
    public void setLoggingRole(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "loggingRole", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTargetPrefix() {
        return software.amazon.jsii.Kernel.get(this, "targetPrefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTargetPrefix(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "targetPrefix", value);
    }

    /**
     */
    public void setTargetPrefix(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "targetPrefix", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.oss.RosBucketLogging}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.oss.RosBucketLogging> {
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
        private final com.aliyun.ros.cdk.oss.RosBucketLoggingProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.oss.RosBucketLoggingProps.Builder();
        }

        /**
         * @return {@code this}
         * @param bucket This parameter is required.
         */
        public Builder bucket(final java.lang.String bucket) {
            this.props.bucket(bucket);
            return this;
        }
        /**
         * @return {@code this}
         * @param bucket This parameter is required.
         */
        public Builder bucket(final com.aliyun.ros.cdk.core.IResolvable bucket) {
            this.props.bucket(bucket);
            return this;
        }

        /**
         * @return {@code this}
         * @param targetBucket This parameter is required.
         */
        public Builder targetBucket(final java.lang.String targetBucket) {
            this.props.targetBucket(targetBucket);
            return this;
        }
        /**
         * @return {@code this}
         * @param targetBucket This parameter is required.
         */
        public Builder targetBucket(final com.aliyun.ros.cdk.core.IResolvable targetBucket) {
            this.props.targetBucket(targetBucket);
            return this;
        }

        /**
         * @return {@code this}
         * @param loggingRole This parameter is required.
         */
        public Builder loggingRole(final java.lang.String loggingRole) {
            this.props.loggingRole(loggingRole);
            return this;
        }
        /**
         * @return {@code this}
         * @param loggingRole This parameter is required.
         */
        public Builder loggingRole(final com.aliyun.ros.cdk.core.IResolvable loggingRole) {
            this.props.loggingRole(loggingRole);
            return this;
        }

        /**
         * @return {@code this}
         * @param targetPrefix This parameter is required.
         */
        public Builder targetPrefix(final java.lang.String targetPrefix) {
            this.props.targetPrefix(targetPrefix);
            return this;
        }
        /**
         * @return {@code this}
         * @param targetPrefix This parameter is required.
         */
        public Builder targetPrefix(final com.aliyun.ros.cdk.core.IResolvable targetPrefix) {
            this.props.targetPrefix(targetPrefix);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.oss.RosBucketLogging}.
         */
        @Override
        public com.aliyun.ros.cdk.oss.RosBucketLogging build() {
            return new com.aliyun.ros.cdk.oss.RosBucketLogging(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
