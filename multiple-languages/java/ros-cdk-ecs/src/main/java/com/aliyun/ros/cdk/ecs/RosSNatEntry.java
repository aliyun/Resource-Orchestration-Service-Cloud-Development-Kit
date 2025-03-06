package com.aliyun.ros.cdk.ecs;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ECS::SNatEntry</code>, which is used to configure the Source Network Address Translation (SNAT) table of a NAT gateway.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:05.142Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosSNatEntry")
public class RosSNatEntry extends com.aliyun.ros.cdk.core.RosResource {

    protected RosSNatEntry(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosSNatEntry(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ecs.RosSNatEntry.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosSNatEntry(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.RosSNatEntryProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSNatEntryId() {
        return software.amazon.jsii.Kernel.get(this, "attrSNatEntryId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getSNatIp() {
        return software.amazon.jsii.Kernel.get(this, "sNatIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSNatIp(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sNatIp", java.util.Objects.requireNonNull(value, "sNatIp is required"));
    }

    /**
     */
    public void setSNatIp(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sNatIp", java.util.Objects.requireNonNull(value, "sNatIp is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSNatTableId() {
        return software.amazon.jsii.Kernel.get(this, "sNatTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSNatTableId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sNatTableId", java.util.Objects.requireNonNull(value, "sNatTableId is required"));
    }

    /**
     */
    public void setSNatTableId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sNatTableId", java.util.Objects.requireNonNull(value, "sNatTableId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSnatEntryName() {
        return software.amazon.jsii.Kernel.get(this, "snatEntryName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSnatEntryName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "snatEntryName", value);
    }

    /**
     */
    public void setSnatEntryName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "snatEntryName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSourceCidr() {
        return software.amazon.jsii.Kernel.get(this, "sourceCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceCidr(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sourceCidr", value);
    }

    /**
     */
    public void setSourceCidr(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceCidr", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSourceVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "sourceVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceVSwitchId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sourceVSwitchId", value);
    }

    /**
     */
    public void setSourceVSwitchId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceVSwitchId", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.RosSNatEntry}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.RosSNatEntry> {
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
        private final com.aliyun.ros.cdk.ecs.RosSNatEntryProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.RosSNatEntryProps.Builder();
        }

        /**
         * @return {@code this}
         * @param sNatIp This parameter is required.
         */
        public Builder sNatIp(final java.lang.String sNatIp) {
            this.props.sNatIp(sNatIp);
            return this;
        }
        /**
         * @return {@code this}
         * @param sNatIp This parameter is required.
         */
        public Builder sNatIp(final com.aliyun.ros.cdk.core.IResolvable sNatIp) {
            this.props.sNatIp(sNatIp);
            return this;
        }

        /**
         * @return {@code this}
         * @param sNatTableId This parameter is required.
         */
        public Builder sNatTableId(final java.lang.String sNatTableId) {
            this.props.sNatTableId(sNatTableId);
            return this;
        }
        /**
         * @return {@code this}
         * @param sNatTableId This parameter is required.
         */
        public Builder sNatTableId(final com.aliyun.ros.cdk.core.IResolvable sNatTableId) {
            this.props.sNatTableId(sNatTableId);
            return this;
        }

        /**
         * @return {@code this}
         * @param snatEntryName This parameter is required.
         */
        public Builder snatEntryName(final java.lang.String snatEntryName) {
            this.props.snatEntryName(snatEntryName);
            return this;
        }
        /**
         * @return {@code this}
         * @param snatEntryName This parameter is required.
         */
        public Builder snatEntryName(final com.aliyun.ros.cdk.core.IResolvable snatEntryName) {
            this.props.snatEntryName(snatEntryName);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceCidr This parameter is required.
         */
        public Builder sourceCidr(final java.lang.String sourceCidr) {
            this.props.sourceCidr(sourceCidr);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceCidr This parameter is required.
         */
        public Builder sourceCidr(final com.aliyun.ros.cdk.core.IResolvable sourceCidr) {
            this.props.sourceCidr(sourceCidr);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceVSwitchId This parameter is required.
         */
        public Builder sourceVSwitchId(final java.lang.String sourceVSwitchId) {
            this.props.sourceVSwitchId(sourceVSwitchId);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceVSwitchId This parameter is required.
         */
        public Builder sourceVSwitchId(final com.aliyun.ros.cdk.core.IResolvable sourceVSwitchId) {
            this.props.sourceVSwitchId(sourceVSwitchId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.RosSNatEntry}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.RosSNatEntry build() {
            return new com.aliyun.ros.cdk.ecs.RosSNatEntry(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
