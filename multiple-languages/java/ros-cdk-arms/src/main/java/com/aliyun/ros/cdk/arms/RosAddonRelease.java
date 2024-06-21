package com.aliyun.ros.cdk.arms;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ARMS::AddonRelease</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:07.516Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.RosAddonRelease")
public class RosAddonRelease extends com.aliyun.ros.cdk.core.RosResource {

    protected RosAddonRelease(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosAddonRelease(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.arms.RosAddonRelease.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosAddonRelease(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.RosAddonReleaseProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrConfig", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEnvironmentId() {
        return software.amazon.jsii.Kernel.get(this, "attrEnvironmentId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRelease() {
        return software.amazon.jsii.Kernel.get(this, "attrRelease", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrReleaseName() {
        return software.amazon.jsii.Kernel.get(this, "attrReleaseName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAddonVersion() {
        return software.amazon.jsii.Kernel.get(this, "addonVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAddonVersion(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "addonVersion", java.util.Objects.requireNonNull(value, "addonVersion is required"));
    }

    /**
     */
    public void setAddonVersion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "addonVersion", java.util.Objects.requireNonNull(value, "addonVersion is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getEnvironmentId() {
        return software.amazon.jsii.Kernel.get(this, "environmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnvironmentId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "environmentId", java.util.Objects.requireNonNull(value, "environmentId is required"));
    }

    /**
     */
    public void setEnvironmentId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "environmentId", java.util.Objects.requireNonNull(value, "environmentId is required"));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getReleaseName() {
        return software.amazon.jsii.Kernel.get(this, "releaseName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReleaseName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "releaseName", value);
    }

    /**
     */
    public void setReleaseName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "releaseName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getValues() {
        return software.amazon.jsii.Kernel.get(this, "values", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setValues(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "values", value);
    }

    /**
     */
    public void setValues(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "values", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.arms.RosAddonRelease}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.arms.RosAddonRelease> {
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
        private final com.aliyun.ros.cdk.arms.RosAddonReleaseProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.arms.RosAddonReleaseProps.Builder();
        }

        /**
         * @return {@code this}
         * @param addonVersion This parameter is required.
         */
        public Builder addonVersion(final java.lang.String addonVersion) {
            this.props.addonVersion(addonVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param addonVersion This parameter is required.
         */
        public Builder addonVersion(final com.aliyun.ros.cdk.core.IResolvable addonVersion) {
            this.props.addonVersion(addonVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param environmentId This parameter is required.
         */
        public Builder environmentId(final java.lang.String environmentId) {
            this.props.environmentId(environmentId);
            return this;
        }
        /**
         * @return {@code this}
         * @param environmentId This parameter is required.
         */
        public Builder environmentId(final com.aliyun.ros.cdk.core.IResolvable environmentId) {
            this.props.environmentId(environmentId);
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
         * @param releaseName This parameter is required.
         */
        public Builder releaseName(final java.lang.String releaseName) {
            this.props.releaseName(releaseName);
            return this;
        }
        /**
         * @return {@code this}
         * @param releaseName This parameter is required.
         */
        public Builder releaseName(final com.aliyun.ros.cdk.core.IResolvable releaseName) {
            this.props.releaseName(releaseName);
            return this;
        }

        /**
         * @return {@code this}
         * @param values This parameter is required.
         */
        public Builder values(final com.aliyun.ros.cdk.core.IResolvable values) {
            this.props.values(values);
            return this;
        }
        /**
         * @return {@code this}
         * @param values This parameter is required.
         */
        public Builder values(final java.util.Map<java.lang.String, ? extends java.lang.Object> values) {
            this.props.values(values);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.arms.RosAddonRelease}.
         */
        @Override
        public com.aliyun.ros.cdk.arms.RosAddonRelease build() {
            return new com.aliyun.ros.cdk.arms.RosAddonRelease(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
