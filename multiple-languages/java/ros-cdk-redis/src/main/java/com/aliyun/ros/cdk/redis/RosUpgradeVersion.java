package com.aliyun.ros.cdk.redis;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::REDIS::UpgradeVersion</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:50.069Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.redis.$Module.class, fqn = "@alicloud/ros-cdk-redis.RosUpgradeVersion")
public class RosUpgradeVersion extends com.aliyun.ros.cdk.core.RosResource {

    protected RosUpgradeVersion(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosUpgradeVersion(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.redis.RosUpgradeVersion.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosUpgradeVersion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.redis.RosUpgradeVersionProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceId", java.util.Objects.requireNonNull(value, "instanceId is required"));
    }

    /**
     */
    public void setInstanceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceId", java.util.Objects.requireNonNull(value, "instanceId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoUpgradeOpen() {
        return software.amazon.jsii.Kernel.get(this, "autoUpgradeOpen", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoUpgradeOpen(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "autoUpgradeOpen", value);
    }

    /**
     */
    public void setAutoUpgradeOpen(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoUpgradeOpen", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEffectiveTime() {
        return software.amazon.jsii.Kernel.get(this, "effectiveTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEffectiveTime(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "effectiveTime", value);
    }

    /**
     */
    public void setEffectiveTime(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "effectiveTime", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMajorVersion() {
        return software.amazon.jsii.Kernel.get(this, "majorVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMajorVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "majorVersion", value);
    }

    /**
     */
    public void setMajorVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "majorVersion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMinorVersion() {
        return software.amazon.jsii.Kernel.get(this, "minorVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMinorVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "minorVersion", value);
    }

    /**
     */
    public void setMinorVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "minorVersion", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.redis.RosUpgradeVersion}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.redis.RosUpgradeVersion> {
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
        private final com.aliyun.ros.cdk.redis.RosUpgradeVersionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.redis.RosUpgradeVersionProps.Builder();
        }

        /**
         * @return {@code this}
         * @param instanceId This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceId This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoUpgradeOpen This parameter is required.
         */
        public Builder autoUpgradeOpen(final java.lang.Boolean autoUpgradeOpen) {
            this.props.autoUpgradeOpen(autoUpgradeOpen);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoUpgradeOpen This parameter is required.
         */
        public Builder autoUpgradeOpen(final com.aliyun.ros.cdk.core.IResolvable autoUpgradeOpen) {
            this.props.autoUpgradeOpen(autoUpgradeOpen);
            return this;
        }

        /**
         * @return {@code this}
         * @param effectiveTime This parameter is required.
         */
        public Builder effectiveTime(final java.lang.String effectiveTime) {
            this.props.effectiveTime(effectiveTime);
            return this;
        }
        /**
         * @return {@code this}
         * @param effectiveTime This parameter is required.
         */
        public Builder effectiveTime(final com.aliyun.ros.cdk.core.IResolvable effectiveTime) {
            this.props.effectiveTime(effectiveTime);
            return this;
        }

        /**
         * @return {@code this}
         * @param majorVersion This parameter is required.
         */
        public Builder majorVersion(final java.lang.String majorVersion) {
            this.props.majorVersion(majorVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param majorVersion This parameter is required.
         */
        public Builder majorVersion(final com.aliyun.ros.cdk.core.IResolvable majorVersion) {
            this.props.majorVersion(majorVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param minorVersion This parameter is required.
         */
        public Builder minorVersion(final java.lang.String minorVersion) {
            this.props.minorVersion(minorVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param minorVersion This parameter is required.
         */
        public Builder minorVersion(final com.aliyun.ros.cdk.core.IResolvable minorVersion) {
            this.props.minorVersion(minorVersion);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.redis.RosUpgradeVersion}.
         */
        @Override
        public com.aliyun.ros.cdk.redis.RosUpgradeVersion build() {
            return new com.aliyun.ros.cdk.redis.RosUpgradeVersion(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
