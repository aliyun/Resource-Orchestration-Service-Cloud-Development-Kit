package com.aliyun.ros.cdk.ecs;

/**
 * A ROS template type:  <code>ALIYUN::ECS::ForwardEntry</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:36.994Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosForwardEntry")
public class RosForwardEntry extends com.aliyun.ros.cdk.core.RosResource {

    protected RosForwardEntry(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosForwardEntry(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ecs.RosForwardEntry.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>ALIYUN::ECS::ForwardEntry</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosForwardEntry(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.RosForwardEntryProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrForwardEntryId() {
        return software.amazon.jsii.Kernel.get(this, "attrForwardEntryId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getExternalIp() {
        return software.amazon.jsii.Kernel.get(this, "externalIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExternalIp(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "externalIp", java.util.Objects.requireNonNull(value, "externalIp is required"));
    }

    /**
     */
    public void setExternalIp(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "externalIp", java.util.Objects.requireNonNull(value, "externalIp is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getExternalPort() {
        return software.amazon.jsii.Kernel.get(this, "externalPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExternalPort(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "externalPort", java.util.Objects.requireNonNull(value, "externalPort is required"));
    }

    /**
     */
    public void setExternalPort(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "externalPort", java.util.Objects.requireNonNull(value, "externalPort is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getForwardTableId() {
        return software.amazon.jsii.Kernel.get(this, "forwardTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setForwardTableId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "forwardTableId", java.util.Objects.requireNonNull(value, "forwardTableId is required"));
    }

    /**
     */
    public void setForwardTableId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "forwardTableId", java.util.Objects.requireNonNull(value, "forwardTableId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getInternalIp() {
        return software.amazon.jsii.Kernel.get(this, "internalIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInternalIp(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "internalIp", java.util.Objects.requireNonNull(value, "internalIp is required"));
    }

    /**
     */
    public void setInternalIp(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "internalIp", java.util.Objects.requireNonNull(value, "internalIp is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getInternalPort() {
        return software.amazon.jsii.Kernel.get(this, "internalPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInternalPort(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "internalPort", java.util.Objects.requireNonNull(value, "internalPort is required"));
    }

    /**
     */
    public void setInternalPort(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "internalPort", java.util.Objects.requireNonNull(value, "internalPort is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getIpProtocol() {
        return software.amazon.jsii.Kernel.get(this, "ipProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIpProtocol(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ipProtocol", java.util.Objects.requireNonNull(value, "ipProtocol is required"));
    }

    /**
     */
    public void setIpProtocol(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ipProtocol", java.util.Objects.requireNonNull(value, "ipProtocol is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getForwardEntryName() {
        return software.amazon.jsii.Kernel.get(this, "forwardEntryName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setForwardEntryName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "forwardEntryName", value);
    }

    /**
     */
    public void setForwardEntryName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "forwardEntryName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPortBreak() {
        return software.amazon.jsii.Kernel.get(this, "portBreak", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPortBreak(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "portBreak", value);
    }

    /**
     */
    public void setPortBreak(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "portBreak", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.RosForwardEntry}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.RosForwardEntry> {
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
        private final com.aliyun.ros.cdk.ecs.RosForwardEntryProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.RosForwardEntryProps.Builder();
        }

        /**
         * @return {@code this}
         * @param externalIp This parameter is required.
         */
        public Builder externalIp(final java.lang.String externalIp) {
            this.props.externalIp(externalIp);
            return this;
        }
        /**
         * @return {@code this}
         * @param externalIp This parameter is required.
         */
        public Builder externalIp(final com.aliyun.ros.cdk.core.IResolvable externalIp) {
            this.props.externalIp(externalIp);
            return this;
        }

        /**
         * @return {@code this}
         * @param externalPort This parameter is required.
         */
        public Builder externalPort(final java.lang.String externalPort) {
            this.props.externalPort(externalPort);
            return this;
        }
        /**
         * @return {@code this}
         * @param externalPort This parameter is required.
         */
        public Builder externalPort(final com.aliyun.ros.cdk.core.IResolvable externalPort) {
            this.props.externalPort(externalPort);
            return this;
        }

        /**
         * @return {@code this}
         * @param forwardTableId This parameter is required.
         */
        public Builder forwardTableId(final java.lang.String forwardTableId) {
            this.props.forwardTableId(forwardTableId);
            return this;
        }
        /**
         * @return {@code this}
         * @param forwardTableId This parameter is required.
         */
        public Builder forwardTableId(final com.aliyun.ros.cdk.core.IResolvable forwardTableId) {
            this.props.forwardTableId(forwardTableId);
            return this;
        }

        /**
         * @return {@code this}
         * @param internalIp This parameter is required.
         */
        public Builder internalIp(final java.lang.String internalIp) {
            this.props.internalIp(internalIp);
            return this;
        }
        /**
         * @return {@code this}
         * @param internalIp This parameter is required.
         */
        public Builder internalIp(final com.aliyun.ros.cdk.core.IResolvable internalIp) {
            this.props.internalIp(internalIp);
            return this;
        }

        /**
         * @return {@code this}
         * @param internalPort This parameter is required.
         */
        public Builder internalPort(final java.lang.String internalPort) {
            this.props.internalPort(internalPort);
            return this;
        }
        /**
         * @return {@code this}
         * @param internalPort This parameter is required.
         */
        public Builder internalPort(final com.aliyun.ros.cdk.core.IResolvable internalPort) {
            this.props.internalPort(internalPort);
            return this;
        }

        /**
         * @return {@code this}
         * @param ipProtocol This parameter is required.
         */
        public Builder ipProtocol(final java.lang.String ipProtocol) {
            this.props.ipProtocol(ipProtocol);
            return this;
        }
        /**
         * @return {@code this}
         * @param ipProtocol This parameter is required.
         */
        public Builder ipProtocol(final com.aliyun.ros.cdk.core.IResolvable ipProtocol) {
            this.props.ipProtocol(ipProtocol);
            return this;
        }

        /**
         * @return {@code this}
         * @param forwardEntryName This parameter is required.
         */
        public Builder forwardEntryName(final java.lang.String forwardEntryName) {
            this.props.forwardEntryName(forwardEntryName);
            return this;
        }
        /**
         * @return {@code this}
         * @param forwardEntryName This parameter is required.
         */
        public Builder forwardEntryName(final com.aliyun.ros.cdk.core.IResolvable forwardEntryName) {
            this.props.forwardEntryName(forwardEntryName);
            return this;
        }

        /**
         * @return {@code this}
         * @param portBreak This parameter is required.
         */
        public Builder portBreak(final java.lang.Boolean portBreak) {
            this.props.portBreak(portBreak);
            return this;
        }
        /**
         * @return {@code this}
         * @param portBreak This parameter is required.
         */
        public Builder portBreak(final com.aliyun.ros.cdk.core.IResolvable portBreak) {
            this.props.portBreak(portBreak);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.RosForwardEntry}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.RosForwardEntry build() {
            return new com.aliyun.ros.cdk.ecs.RosForwardEntry(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
