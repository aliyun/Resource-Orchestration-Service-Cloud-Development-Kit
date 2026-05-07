package com.aliyun.ros.cdk.threatdetection;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ThreatDetection::HoneyPot</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:54.725Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.RosHoneyPot")
public class RosHoneyPot extends com.aliyun.ros.cdk.core.RosResource {

    protected RosHoneyPot(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosHoneyPot(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.threatdetection.RosHoneyPot.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosHoneyPot(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.RosHoneyPotProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHoneypotId() {
        return software.amazon.jsii.Kernel.get(this, "attrHoneypotId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHoneypotImageId() {
        return software.amazon.jsii.Kernel.get(this, "attrHoneypotImageId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHoneypotImageName() {
        return software.amazon.jsii.Kernel.get(this, "attrHoneypotImageName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHoneypotName() {
        return software.amazon.jsii.Kernel.get(this, "attrHoneypotName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNodeId() {
        return software.amazon.jsii.Kernel.get(this, "attrNodeId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrState() {
        return software.amazon.jsii.Kernel.get(this, "attrState", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getHoneypotImageId() {
        return software.amazon.jsii.Kernel.get(this, "honeypotImageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHoneypotImageId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "honeypotImageId", java.util.Objects.requireNonNull(value, "honeypotImageId is required"));
    }

    /**
     */
    public void setHoneypotImageId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "honeypotImageId", java.util.Objects.requireNonNull(value, "honeypotImageId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getHoneypotImageName() {
        return software.amazon.jsii.Kernel.get(this, "honeypotImageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHoneypotImageName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "honeypotImageName", java.util.Objects.requireNonNull(value, "honeypotImageName is required"));
    }

    /**
     */
    public void setHoneypotImageName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "honeypotImageName", java.util.Objects.requireNonNull(value, "honeypotImageName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getHoneypotName() {
        return software.amazon.jsii.Kernel.get(this, "honeypotName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHoneypotName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "honeypotName", java.util.Objects.requireNonNull(value, "honeypotName is required"));
    }

    /**
     */
    public void setHoneypotName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "honeypotName", java.util.Objects.requireNonNull(value, "honeypotName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getNodeId() {
        return software.amazon.jsii.Kernel.get(this, "nodeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNodeId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "nodeId", java.util.Objects.requireNonNull(value, "nodeId is required"));
    }

    /**
     */
    public void setNodeId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "nodeId", java.util.Objects.requireNonNull(value, "nodeId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMeta() {
        return software.amazon.jsii.Kernel.get(this, "meta", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMeta(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "meta", value);
    }

    /**
     */
    public void setMeta(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "meta", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.threatdetection.RosHoneyPot}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.threatdetection.RosHoneyPot> {
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
        private final com.aliyun.ros.cdk.threatdetection.RosHoneyPotProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.threatdetection.RosHoneyPotProps.Builder();
        }

        /**
         * @return {@code this}
         * @param honeypotImageId This parameter is required.
         */
        public Builder honeypotImageId(final java.lang.String honeypotImageId) {
            this.props.honeypotImageId(honeypotImageId);
            return this;
        }
        /**
         * @return {@code this}
         * @param honeypotImageId This parameter is required.
         */
        public Builder honeypotImageId(final com.aliyun.ros.cdk.core.IResolvable honeypotImageId) {
            this.props.honeypotImageId(honeypotImageId);
            return this;
        }

        /**
         * @return {@code this}
         * @param honeypotImageName This parameter is required.
         */
        public Builder honeypotImageName(final java.lang.String honeypotImageName) {
            this.props.honeypotImageName(honeypotImageName);
            return this;
        }
        /**
         * @return {@code this}
         * @param honeypotImageName This parameter is required.
         */
        public Builder honeypotImageName(final com.aliyun.ros.cdk.core.IResolvable honeypotImageName) {
            this.props.honeypotImageName(honeypotImageName);
            return this;
        }

        /**
         * @return {@code this}
         * @param honeypotName This parameter is required.
         */
        public Builder honeypotName(final java.lang.String honeypotName) {
            this.props.honeypotName(honeypotName);
            return this;
        }
        /**
         * @return {@code this}
         * @param honeypotName This parameter is required.
         */
        public Builder honeypotName(final com.aliyun.ros.cdk.core.IResolvable honeypotName) {
            this.props.honeypotName(honeypotName);
            return this;
        }

        /**
         * @return {@code this}
         * @param nodeId This parameter is required.
         */
        public Builder nodeId(final java.lang.String nodeId) {
            this.props.nodeId(nodeId);
            return this;
        }
        /**
         * @return {@code this}
         * @param nodeId This parameter is required.
         */
        public Builder nodeId(final com.aliyun.ros.cdk.core.IResolvable nodeId) {
            this.props.nodeId(nodeId);
            return this;
        }

        /**
         * @return {@code this}
         * @param meta This parameter is required.
         */
        public Builder meta(final com.aliyun.ros.cdk.core.IResolvable meta) {
            this.props.meta(meta);
            return this;
        }
        /**
         * @return {@code this}
         * @param meta This parameter is required.
         */
        public Builder meta(final java.util.Map<java.lang.String, ? extends java.lang.Object> meta) {
            this.props.meta(meta);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.threatdetection.RosHoneyPot}.
         */
        @Override
        public com.aliyun.ros.cdk.threatdetection.RosHoneyPot build() {
            return new com.aliyun.ros.cdk.threatdetection.RosHoneyPot(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
