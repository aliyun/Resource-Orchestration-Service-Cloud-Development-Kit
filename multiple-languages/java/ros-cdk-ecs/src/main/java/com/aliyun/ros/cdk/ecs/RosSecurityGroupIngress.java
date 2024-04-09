package com.aliyun.ros.cdk.ecs;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ECS::SecurityGroupIngress</code>, which is used to create an inbound rule for a security group.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:32.381Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosSecurityGroupIngress")
public class RosSecurityGroupIngress extends com.aliyun.ros.cdk.core.RosResource {

    protected RosSecurityGroupIngress(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosSecurityGroupIngress(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ecs.RosSecurityGroupIngress.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosSecurityGroupIngress(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.RosSecurityGroupIngressProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getPortRange() {
        return software.amazon.jsii.Kernel.get(this, "portRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPortRange(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "portRange", java.util.Objects.requireNonNull(value, "portRange is required"));
    }

    /**
     */
    public void setPortRange(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "portRange", java.util.Objects.requireNonNull(value, "portRange is required"));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getIpv6SourceCidrIp() {
        return software.amazon.jsii.Kernel.get(this, "ipv6SourceCidrIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIpv6SourceCidrIp(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ipv6SourceCidrIp", value);
    }

    /**
     */
    public void setIpv6SourceCidrIp(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ipv6SourceCidrIp", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNicType() {
        return software.amazon.jsii.Kernel.get(this, "nicType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNicType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "nicType", value);
    }

    /**
     */
    public void setNicType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "nicType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPolicy() {
        return software.amazon.jsii.Kernel.get(this, "policy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPolicy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "policy", value);
    }

    /**
     */
    public void setPolicy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "policy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPriority() {
        return software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPriority(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "priority", value);
    }

    /**
     */
    public void setPriority(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "priority", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
        return software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecurityGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupId", value);
    }

    /**
     */
    public void setSecurityGroupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSourceCidrIp() {
        return software.amazon.jsii.Kernel.get(this, "sourceCidrIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceCidrIp(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sourceCidrIp", value);
    }

    /**
     */
    public void setSourceCidrIp(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceCidrIp", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "sourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sourceGroupId", value);
    }

    /**
     */
    public void setSourceGroupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceGroupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSourceGroupOwnerId() {
        return software.amazon.jsii.Kernel.get(this, "sourceGroupOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceGroupOwnerId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sourceGroupOwnerId", value);
    }

    /**
     */
    public void setSourceGroupOwnerId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceGroupOwnerId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSourcePortRange() {
        return software.amazon.jsii.Kernel.get(this, "sourcePortRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourcePortRange(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sourcePortRange", value);
    }

    /**
     */
    public void setSourcePortRange(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourcePortRange", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSourcePrefixListId() {
        return software.amazon.jsii.Kernel.get(this, "sourcePrefixListId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourcePrefixListId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sourcePrefixListId", value);
    }

    /**
     */
    public void setSourcePrefixListId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourcePrefixListId", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.RosSecurityGroupIngress}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.RosSecurityGroupIngress> {
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
        private final com.aliyun.ros.cdk.ecs.RosSecurityGroupIngressProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.RosSecurityGroupIngressProps.Builder();
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
         * @param portRange This parameter is required.
         */
        public Builder portRange(final java.lang.String portRange) {
            this.props.portRange(portRange);
            return this;
        }
        /**
         * @return {@code this}
         * @param portRange This parameter is required.
         */
        public Builder portRange(final com.aliyun.ros.cdk.core.IResolvable portRange) {
            this.props.portRange(portRange);
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
         * @param ipv6SourceCidrIp This parameter is required.
         */
        public Builder ipv6SourceCidrIp(final java.lang.String ipv6SourceCidrIp) {
            this.props.ipv6SourceCidrIp(ipv6SourceCidrIp);
            return this;
        }
        /**
         * @return {@code this}
         * @param ipv6SourceCidrIp This parameter is required.
         */
        public Builder ipv6SourceCidrIp(final com.aliyun.ros.cdk.core.IResolvable ipv6SourceCidrIp) {
            this.props.ipv6SourceCidrIp(ipv6SourceCidrIp);
            return this;
        }

        /**
         * @return {@code this}
         * @param nicType This parameter is required.
         */
        public Builder nicType(final java.lang.String nicType) {
            this.props.nicType(nicType);
            return this;
        }
        /**
         * @return {@code this}
         * @param nicType This parameter is required.
         */
        public Builder nicType(final com.aliyun.ros.cdk.core.IResolvable nicType) {
            this.props.nicType(nicType);
            return this;
        }

        /**
         * @return {@code this}
         * @param policy This parameter is required.
         */
        public Builder policy(final java.lang.String policy) {
            this.props.policy(policy);
            return this;
        }
        /**
         * @return {@code this}
         * @param policy This parameter is required.
         */
        public Builder policy(final com.aliyun.ros.cdk.core.IResolvable policy) {
            this.props.policy(policy);
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
         * @param securityGroupId This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param securityGroupId This parameter is required.
         */
        public Builder securityGroupId(final com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceCidrIp This parameter is required.
         */
        public Builder sourceCidrIp(final java.lang.String sourceCidrIp) {
            this.props.sourceCidrIp(sourceCidrIp);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceCidrIp This parameter is required.
         */
        public Builder sourceCidrIp(final com.aliyun.ros.cdk.core.IResolvable sourceCidrIp) {
            this.props.sourceCidrIp(sourceCidrIp);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceGroupId This parameter is required.
         */
        public Builder sourceGroupId(final java.lang.String sourceGroupId) {
            this.props.sourceGroupId(sourceGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceGroupId This parameter is required.
         */
        public Builder sourceGroupId(final com.aliyun.ros.cdk.core.IResolvable sourceGroupId) {
            this.props.sourceGroupId(sourceGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceGroupOwnerId This parameter is required.
         */
        public Builder sourceGroupOwnerId(final java.lang.String sourceGroupOwnerId) {
            this.props.sourceGroupOwnerId(sourceGroupOwnerId);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceGroupOwnerId This parameter is required.
         */
        public Builder sourceGroupOwnerId(final com.aliyun.ros.cdk.core.IResolvable sourceGroupOwnerId) {
            this.props.sourceGroupOwnerId(sourceGroupOwnerId);
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
         * @param sourcePrefixListId This parameter is required.
         */
        public Builder sourcePrefixListId(final java.lang.String sourcePrefixListId) {
            this.props.sourcePrefixListId(sourcePrefixListId);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourcePrefixListId This parameter is required.
         */
        public Builder sourcePrefixListId(final com.aliyun.ros.cdk.core.IResolvable sourcePrefixListId) {
            this.props.sourcePrefixListId(sourcePrefixListId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.RosSecurityGroupIngress}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.RosSecurityGroupIngress build() {
            return new com.aliyun.ros.cdk.ecs.RosSecurityGroupIngress(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
