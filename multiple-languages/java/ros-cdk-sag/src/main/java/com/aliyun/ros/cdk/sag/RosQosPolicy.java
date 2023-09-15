package com.aliyun.ros.cdk.sag;

/**
 * A ROS template type:  <code>ALIYUN::SAG::QosPolicy</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:50.328Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sag.$Module.class, fqn = "@alicloud/ros-cdk-sag.RosQosPolicy")
public class RosQosPolicy extends com.aliyun.ros.cdk.core.RosResource {

    protected RosQosPolicy(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosQosPolicy(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.sag.RosQosPolicy.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>ALIYUN::SAG::QosPolicy</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosQosPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sag.RosQosPolicyProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrQosPolicyId() {
        return software.amazon.jsii.Kernel.get(this, "attrQosPolicyId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDestCidr() {
        return software.amazon.jsii.Kernel.get(this, "destCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDestCidr(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "destCidr", java.util.Objects.requireNonNull(value, "destCidr is required"));
    }

    /**
     */
    public void setDestCidr(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "destCidr", java.util.Objects.requireNonNull(value, "destCidr is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDestPortRange() {
        return software.amazon.jsii.Kernel.get(this, "destPortRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDestPortRange(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "destPortRange", java.util.Objects.requireNonNull(value, "destPortRange is required"));
    }

    /**
     */
    public void setDestPortRange(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "destPortRange", java.util.Objects.requireNonNull(value, "destPortRange is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getPriority() {
        return software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPriority(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "priority", java.util.Objects.requireNonNull(value, "priority is required"));
    }

    /**
     */
    public void setPriority(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "priority", java.util.Objects.requireNonNull(value, "priority is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getQosId() {
        return software.amazon.jsii.Kernel.get(this, "qosId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setQosId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "qosId", java.util.Objects.requireNonNull(value, "qosId is required"));
    }

    /**
     */
    public void setQosId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "qosId", java.util.Objects.requireNonNull(value, "qosId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSourceCidr() {
        return software.amazon.jsii.Kernel.get(this, "sourceCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceCidr(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sourceCidr", java.util.Objects.requireNonNull(value, "sourceCidr is required"));
    }

    /**
     */
    public void setSourceCidr(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceCidr", java.util.Objects.requireNonNull(value, "sourceCidr is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSourcePortRange() {
        return software.amazon.jsii.Kernel.get(this, "sourcePortRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourcePortRange(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sourcePortRange", java.util.Objects.requireNonNull(value, "sourcePortRange is required"));
    }

    /**
     */
    public void setSourcePortRange(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourcePortRange", java.util.Objects.requireNonNull(value, "sourcePortRange is required"));
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
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDpiGroupIds() {
        return software.amazon.jsii.Kernel.get(this, "dpiGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDpiGroupIds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dpiGroupIds", value);
    }

    /**
     */
    public void setDpiGroupIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "dpiGroupIds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDpiSignatureIds() {
        return software.amazon.jsii.Kernel.get(this, "dpiSignatureIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDpiSignatureIds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dpiSignatureIds", value);
    }

    /**
     */
    public void setDpiSignatureIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "dpiSignatureIds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEndTime() {
        return software.amazon.jsii.Kernel.get(this, "endTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEndTime(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "endTime", value);
    }

    /**
     */
    public void setEndTime(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "endTime", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "name", value);
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "name", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getStartTime() {
        return software.amazon.jsii.Kernel.get(this, "startTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStartTime(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "startTime", value);
    }

    /**
     */
    public void setStartTime(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "startTime", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sag.RosQosPolicy}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sag.RosQosPolicy> {
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
        private final com.aliyun.ros.cdk.sag.RosQosPolicyProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sag.RosQosPolicyProps.Builder();
        }

        /**
         * @return {@code this}
         * @param destCidr This parameter is required.
         */
        public Builder destCidr(final java.lang.String destCidr) {
            this.props.destCidr(destCidr);
            return this;
        }
        /**
         * @return {@code this}
         * @param destCidr This parameter is required.
         */
        public Builder destCidr(final com.aliyun.ros.cdk.core.IResolvable destCidr) {
            this.props.destCidr(destCidr);
            return this;
        }

        /**
         * @return {@code this}
         * @param destPortRange This parameter is required.
         */
        public Builder destPortRange(final java.lang.String destPortRange) {
            this.props.destPortRange(destPortRange);
            return this;
        }
        /**
         * @return {@code this}
         * @param destPortRange This parameter is required.
         */
        public Builder destPortRange(final com.aliyun.ros.cdk.core.IResolvable destPortRange) {
            this.props.destPortRange(destPortRange);
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
         * @param priority This parameter is required.
         */
        public Builder priority(final java.lang.Number priority) {
            this.props.priority(priority);
            return this;
        }
        /**
         * @return {@code this}
         * @param priority This parameter is required.
         */
        public Builder priority(final com.aliyun.ros.cdk.core.IResolvable priority) {
            this.props.priority(priority);
            return this;
        }

        /**
         * @return {@code this}
         * @param qosId This parameter is required.
         */
        public Builder qosId(final java.lang.String qosId) {
            this.props.qosId(qosId);
            return this;
        }
        /**
         * @return {@code this}
         * @param qosId This parameter is required.
         */
        public Builder qosId(final com.aliyun.ros.cdk.core.IResolvable qosId) {
            this.props.qosId(qosId);
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
         * @param sourcePortRange This parameter is required.
         */
        public Builder sourcePortRange(final java.lang.String sourcePortRange) {
            this.props.sourcePortRange(sourcePortRange);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourcePortRange This parameter is required.
         */
        public Builder sourcePortRange(final com.aliyun.ros.cdk.core.IResolvable sourcePortRange) {
            this.props.sourcePortRange(sourcePortRange);
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
         * @return {@code this}
         * @param dpiGroupIds This parameter is required.
         */
        public Builder dpiGroupIds(final com.aliyun.ros.cdk.core.IResolvable dpiGroupIds) {
            this.props.dpiGroupIds(dpiGroupIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param dpiGroupIds This parameter is required.
         */
        public Builder dpiGroupIds(final java.util.List<? extends java.lang.Object> dpiGroupIds) {
            this.props.dpiGroupIds(dpiGroupIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param dpiSignatureIds This parameter is required.
         */
        public Builder dpiSignatureIds(final com.aliyun.ros.cdk.core.IResolvable dpiSignatureIds) {
            this.props.dpiSignatureIds(dpiSignatureIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param dpiSignatureIds This parameter is required.
         */
        public Builder dpiSignatureIds(final java.util.List<? extends java.lang.Object> dpiSignatureIds) {
            this.props.dpiSignatureIds(dpiSignatureIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param endTime This parameter is required.
         */
        public Builder endTime(final java.lang.String endTime) {
            this.props.endTime(endTime);
            return this;
        }
        /**
         * @return {@code this}
         * @param endTime This parameter is required.
         */
        public Builder endTime(final com.aliyun.ros.cdk.core.IResolvable endTime) {
            this.props.endTime(endTime);
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
         * @param startTime This parameter is required.
         */
        public Builder startTime(final java.lang.String startTime) {
            this.props.startTime(startTime);
            return this;
        }
        /**
         * @return {@code this}
         * @param startTime This parameter is required.
         */
        public Builder startTime(final com.aliyun.ros.cdk.core.IResolvable startTime) {
            this.props.startTime(startTime);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.sag.RosQosPolicy}.
         */
        @Override
        public com.aliyun.ros.cdk.sag.RosQosPolicy build() {
            return new com.aliyun.ros.cdk.sag.RosQosPolicy(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
