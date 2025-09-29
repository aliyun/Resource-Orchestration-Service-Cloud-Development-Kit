package com.aliyun.ros.cdk.redis;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::REDIS::UpgradeVersion</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:28.906Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.redis.$Module.class, fqn = "@alicloud/ros-cdk-redis.UpgradeVersion")
public class UpgradeVersion extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.redis.IUpgradeVersion {

    protected UpgradeVersion(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected UpgradeVersion(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public UpgradeVersion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.redis.UpgradeVersionProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public UpgradeVersion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.redis.UpgradeVersionProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.redis.UpgradeVersionProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.redis.UpgradeVersionProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.redis.UpgradeVersion}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.redis.UpgradeVersion> {
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
        private final com.aliyun.ros.cdk.redis.UpgradeVersionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.redis.UpgradeVersionProps.Builder();
        }

        /**
         * Property instanceId: The id of the instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The id of the instance. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The id of the instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The id of the instance. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property autoUpgradeOpen: Whether to enable automatic upgrade.
         * <p>
         * @return {@code this}
         * @param autoUpgradeOpen Property autoUpgradeOpen: Whether to enable automatic upgrade. This parameter is required.
         */
        public Builder autoUpgradeOpen(final java.lang.Boolean autoUpgradeOpen) {
            this.props.autoUpgradeOpen(autoUpgradeOpen);
            return this;
        }
        /**
         * Property autoUpgradeOpen: Whether to enable automatic upgrade.
         * <p>
         * @return {@code this}
         * @param autoUpgradeOpen Property autoUpgradeOpen: Whether to enable automatic upgrade. This parameter is required.
         */
        public Builder autoUpgradeOpen(final com.aliyun.ros.cdk.core.IResolvable autoUpgradeOpen) {
            this.props.autoUpgradeOpen(autoUpgradeOpen);
            return this;
        }

        /**
         * Property effectiveTime: The time when the upgrade is effective.
         * <p>
         * Value: Immediately|MaintainTime, default: Immediately.
         * <p>
         * @return {@code this}
         * @param effectiveTime Property effectiveTime: The time when the upgrade is effective. This parameter is required.
         */
        public Builder effectiveTime(final java.lang.String effectiveTime) {
            this.props.effectiveTime(effectiveTime);
            return this;
        }
        /**
         * Property effectiveTime: The time when the upgrade is effective.
         * <p>
         * Value: Immediately|MaintainTime, default: Immediately.
         * <p>
         * @return {@code this}
         * @param effectiveTime Property effectiveTime: The time when the upgrade is effective. This parameter is required.
         */
        public Builder effectiveTime(final com.aliyun.ros.cdk.core.IResolvable effectiveTime) {
            this.props.effectiveTime(effectiveTime);
            return this;
        }

        /**
         * Property majorVersion: Upgrade the major version of the instance.
         * <p>
         * @return {@code this}
         * @param majorVersion Property majorVersion: Upgrade the major version of the instance. This parameter is required.
         */
        public Builder majorVersion(final java.lang.String majorVersion) {
            this.props.majorVersion(majorVersion);
            return this;
        }
        /**
         * Property majorVersion: Upgrade the major version of the instance.
         * <p>
         * @return {@code this}
         * @param majorVersion Property majorVersion: Upgrade the major version of the instance. This parameter is required.
         */
        public Builder majorVersion(final com.aliyun.ros.cdk.core.IResolvable majorVersion) {
            this.props.majorVersion(majorVersion);
            return this;
        }

        /**
         * Property minorVersion: The minor version to be upgraded to, the default value is: latest_version, that is, the latest version.
         * <p>
         * @return {@code this}
         * @param minorVersion Property minorVersion: The minor version to be upgraded to, the default value is: latest_version, that is, the latest version. This parameter is required.
         */
        public Builder minorVersion(final java.lang.String minorVersion) {
            this.props.minorVersion(minorVersion);
            return this;
        }
        /**
         * Property minorVersion: The minor version to be upgraded to, the default value is: latest_version, that is, the latest version.
         * <p>
         * @return {@code this}
         * @param minorVersion Property minorVersion: The minor version to be upgraded to, the default value is: latest_version, that is, the latest version. This parameter is required.
         */
        public Builder minorVersion(final com.aliyun.ros.cdk.core.IResolvable minorVersion) {
            this.props.minorVersion(minorVersion);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.redis.UpgradeVersion}.
         */
        @Override
        public com.aliyun.ros.cdk.redis.UpgradeVersion build() {
            return new com.aliyun.ros.cdk.redis.UpgradeVersion(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
