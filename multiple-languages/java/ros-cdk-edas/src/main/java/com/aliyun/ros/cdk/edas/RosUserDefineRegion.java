package com.aliyun.ros.cdk.edas;

/**
 * A ROS template type:  <code>ALIYUN::EDAS::UserDefineRegion</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-18T08:28:01.799Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosUserDefineRegion")
public class RosUserDefineRegion extends com.aliyun.ros.cdk.core.RosResource {

    protected RosUserDefineRegion(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosUserDefineRegion(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.edas.RosUserDefineRegion.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>ALIYUN::EDAS::UserDefineRegion</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosUserDefineRegion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.edas.RosUserDefineRegionProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBelongRegion() {
        return software.amazon.jsii.Kernel.get(this, "attrBelongRegion", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDebugEnable() {
        return software.amazon.jsii.Kernel.get(this, "attrDebugEnable", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrId() {
        return software.amazon.jsii.Kernel.get(this, "attrId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRegionName() {
        return software.amazon.jsii.Kernel.get(this, "attrRegionName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUserId() {
        return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

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
    public @org.jetbrains.annotations.NotNull java.lang.Object getRegionName() {
        return software.amazon.jsii.Kernel.get(this, "regionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRegionName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "regionName", java.util.Objects.requireNonNull(value, "regionName is required"));
    }

    /**
     */
    public void setRegionName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "regionName", java.util.Objects.requireNonNull(value, "regionName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRegionTag() {
        return software.amazon.jsii.Kernel.get(this, "regionTag", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRegionTag(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "regionTag", java.util.Objects.requireNonNull(value, "regionTag is required"));
    }

    /**
     */
    public void setRegionTag(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "regionTag", java.util.Objects.requireNonNull(value, "regionTag is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDebugEnable() {
        return software.amazon.jsii.Kernel.get(this, "debugEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDebugEnable(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "debugEnable", value);
    }

    /**
     */
    public void setDebugEnable(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "debugEnable", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.edas.RosUserDefineRegion}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.edas.RosUserDefineRegion> {
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
        private final com.aliyun.ros.cdk.edas.RosUserDefineRegionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.edas.RosUserDefineRegionProps.Builder();
        }

        /**
         * @return {@code this}
         * @param regionName This parameter is required.
         */
        public Builder regionName(final java.lang.String regionName) {
            this.props.regionName(regionName);
            return this;
        }
        /**
         * @return {@code this}
         * @param regionName This parameter is required.
         */
        public Builder regionName(final com.aliyun.ros.cdk.core.IResolvable regionName) {
            this.props.regionName(regionName);
            return this;
        }

        /**
         * @return {@code this}
         * @param regionTag This parameter is required.
         */
        public Builder regionTag(final java.lang.String regionTag) {
            this.props.regionTag(regionTag);
            return this;
        }
        /**
         * @return {@code this}
         * @param regionTag This parameter is required.
         */
        public Builder regionTag(final com.aliyun.ros.cdk.core.IResolvable regionTag) {
            this.props.regionTag(regionTag);
            return this;
        }

        /**
         * @return {@code this}
         * @param debugEnable This parameter is required.
         */
        public Builder debugEnable(final java.lang.Boolean debugEnable) {
            this.props.debugEnable(debugEnable);
            return this;
        }
        /**
         * @return {@code this}
         * @param debugEnable This parameter is required.
         */
        public Builder debugEnable(final com.aliyun.ros.cdk.core.IResolvable debugEnable) {
            this.props.debugEnable(debugEnable);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.edas.RosUserDefineRegion}.
         */
        @Override
        public com.aliyun.ros.cdk.edas.RosUserDefineRegion build() {
            return new com.aliyun.ros.cdk.edas.RosUserDefineRegion(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
