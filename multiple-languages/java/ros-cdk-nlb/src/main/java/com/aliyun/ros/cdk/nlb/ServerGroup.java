package com.aliyun.ros.cdk.nlb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::NLB::ServerGroup</code>, which is used to create a server group for a Network Load Balancer (NLB) instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-06T03:35:16.182Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nlb.$Module.class, fqn = "@alicloud/ros-cdk-nlb.ServerGroup")
public class ServerGroup extends com.aliyun.ros.cdk.core.Resource {

    protected ServerGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ServerGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ServerGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nlb.ServerGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ServerGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nlb.ServerGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ServerGroupId: ID of ServerGroup.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrServerGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrServerGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nlb.ServerGroupProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.nlb.ServerGroupProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nlb.ServerGroupProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.nlb.ServerGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.nlb.ServerGroup> {
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
        private final com.aliyun.ros.cdk.nlb.ServerGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.nlb.ServerGroupProps.Builder();
        }

        /**
         * Property serverGroupName: Name of ServerGroup.
         * <p>
         * @return {@code this}
         * @param serverGroupName Property serverGroupName: Name of ServerGroup. This parameter is required.
         */
        public Builder serverGroupName(final java.lang.String serverGroupName) {
            this.props.serverGroupName(serverGroupName);
            return this;
        }
        /**
         * Property serverGroupName: Name of ServerGroup.
         * <p>
         * @return {@code this}
         * @param serverGroupName Property serverGroupName: Name of ServerGroup. This parameter is required.
         */
        public Builder serverGroupName(final com.aliyun.ros.cdk.core.IResolvable serverGroupName) {
            this.props.serverGroupName(serverGroupName);
            return this;
        }

        /**
         * Property vpcId: ID of VPC.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: ID of VPC. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: ID of VPC.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: ID of VPC. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property addressIpVersion: IP version of address.
         * <p>
         * @return {@code this}
         * @param addressIpVersion Property addressIpVersion: IP version of address. This parameter is required.
         */
        public Builder addressIpVersion(final java.lang.String addressIpVersion) {
            this.props.addressIpVersion(addressIpVersion);
            return this;
        }
        /**
         * Property addressIpVersion: IP version of address.
         * <p>
         * @return {@code this}
         * @param addressIpVersion Property addressIpVersion: IP version of address. This parameter is required.
         */
        public Builder addressIpVersion(final com.aliyun.ros.cdk.core.IResolvable addressIpVersion) {
            this.props.addressIpVersion(addressIpVersion);
            return this;
        }

        /**
         * Property anyPortEnabled: Specifies whether to enable all-port forwarding.
         * <p>
         * Valid values:
         * true
         * false (default)
         * <p>
         * @return {@code this}
         * @param anyPortEnabled Property anyPortEnabled: Specifies whether to enable all-port forwarding. This parameter is required.
         */
        public Builder anyPortEnabled(final java.lang.Boolean anyPortEnabled) {
            this.props.anyPortEnabled(anyPortEnabled);
            return this;
        }
        /**
         * Property anyPortEnabled: Specifies whether to enable all-port forwarding.
         * <p>
         * Valid values:
         * true
         * false (default)
         * <p>
         * @return {@code this}
         * @param anyPortEnabled Property anyPortEnabled: Specifies whether to enable all-port forwarding. This parameter is required.
         */
        public Builder anyPortEnabled(final com.aliyun.ros.cdk.core.IResolvable anyPortEnabled) {
            this.props.anyPortEnabled(anyPortEnabled);
            return this;
        }

        /**
         * Property connectionDrainEnabled: Whether to enable graceful connection interruption.
         * <p>
         * @return {@code this}
         * @param connectionDrainEnabled Property connectionDrainEnabled: Whether to enable graceful connection interruption. This parameter is required.
         */
        public Builder connectionDrainEnabled(final java.lang.Boolean connectionDrainEnabled) {
            this.props.connectionDrainEnabled(connectionDrainEnabled);
            return this;
        }
        /**
         * Property connectionDrainEnabled: Whether to enable graceful connection interruption.
         * <p>
         * @return {@code this}
         * @param connectionDrainEnabled Property connectionDrainEnabled: Whether to enable graceful connection interruption. This parameter is required.
         */
        public Builder connectionDrainEnabled(final com.aliyun.ros.cdk.core.IResolvable connectionDrainEnabled) {
            this.props.connectionDrainEnabled(connectionDrainEnabled);
            return this;
        }

        /**
         * Property connectionDrainTimeout: Time of graceful connection interruption.
         * <p>
         * @return {@code this}
         * @param connectionDrainTimeout Property connectionDrainTimeout: Time of graceful connection interruption. This parameter is required.
         */
        public Builder connectionDrainTimeout(final java.lang.Number connectionDrainTimeout) {
            this.props.connectionDrainTimeout(connectionDrainTimeout);
            return this;
        }
        /**
         * Property connectionDrainTimeout: Time of graceful connection interruption.
         * <p>
         * @return {@code this}
         * @param connectionDrainTimeout Property connectionDrainTimeout: Time of graceful connection interruption. This parameter is required.
         */
        public Builder connectionDrainTimeout(final com.aliyun.ros.cdk.core.IResolvable connectionDrainTimeout) {
            this.props.connectionDrainTimeout(connectionDrainTimeout);
            return this;
        }

        /**
         * Property healthCheckConfig: Health Check Config.
         * <p>
         * @return {@code this}
         * @param healthCheckConfig Property healthCheckConfig: Health Check Config. This parameter is required.
         */
        public Builder healthCheckConfig(final com.aliyun.ros.cdk.core.IResolvable healthCheckConfig) {
            this.props.healthCheckConfig(healthCheckConfig);
            return this;
        }
        /**
         * Property healthCheckConfig: Health Check Config.
         * <p>
         * @return {@code this}
         * @param healthCheckConfig Property healthCheckConfig: Health Check Config. This parameter is required.
         */
        public Builder healthCheckConfig(final com.aliyun.ros.cdk.nlb.RosServerGroup.HealthCheckConfigProperty healthCheckConfig) {
            this.props.healthCheckConfig(healthCheckConfig);
            return this;
        }

        /**
         * Property persistenceEnabled: Whether to enable session persistence.
         * <p>
         * @return {@code this}
         * @param persistenceEnabled Property persistenceEnabled: Whether to enable session persistence. This parameter is required.
         */
        public Builder persistenceEnabled(final java.lang.Boolean persistenceEnabled) {
            this.props.persistenceEnabled(persistenceEnabled);
            return this;
        }
        /**
         * Property persistenceEnabled: Whether to enable session persistence.
         * <p>
         * @return {@code this}
         * @param persistenceEnabled Property persistenceEnabled: Whether to enable session persistence. This parameter is required.
         */
        public Builder persistenceEnabled(final com.aliyun.ros.cdk.core.IResolvable persistenceEnabled) {
            this.props.persistenceEnabled(persistenceEnabled);
            return this;
        }

        /**
         * Property persistenceTimeout: Time of session persistence.
         * <p>
         * @return {@code this}
         * @param persistenceTimeout Property persistenceTimeout: Time of session persistence. This parameter is required.
         */
        public Builder persistenceTimeout(final java.lang.Number persistenceTimeout) {
            this.props.persistenceTimeout(persistenceTimeout);
            return this;
        }
        /**
         * Property persistenceTimeout: Time of session persistence.
         * <p>
         * @return {@code this}
         * @param persistenceTimeout Property persistenceTimeout: Time of session persistence. This parameter is required.
         */
        public Builder persistenceTimeout(final com.aliyun.ros.cdk.core.IResolvable persistenceTimeout) {
            this.props.persistenceTimeout(persistenceTimeout);
            return this;
        }

        /**
         * Property preserveClientIpEnabled: Whether to enable the client address retention function.
         * <p>
         * @return {@code this}
         * @param preserveClientIpEnabled Property preserveClientIpEnabled: Whether to enable the client address retention function. This parameter is required.
         */
        public Builder preserveClientIpEnabled(final java.lang.Boolean preserveClientIpEnabled) {
            this.props.preserveClientIpEnabled(preserveClientIpEnabled);
            return this;
        }
        /**
         * Property preserveClientIpEnabled: Whether to enable the client address retention function.
         * <p>
         * @return {@code this}
         * @param preserveClientIpEnabled Property preserveClientIpEnabled: Whether to enable the client address retention function. This parameter is required.
         */
        public Builder preserveClientIpEnabled(final com.aliyun.ros.cdk.core.IResolvable preserveClientIpEnabled) {
            this.props.preserveClientIpEnabled(preserveClientIpEnabled);
            return this;
        }

        /**
         * Property protocol: Protocol of ServerGroup.
         * <p>
         * @return {@code this}
         * @param protocol Property protocol: Protocol of ServerGroup. This parameter is required.
         */
        public Builder protocol(final java.lang.String protocol) {
            this.props.protocol(protocol);
            return this;
        }
        /**
         * Property protocol: Protocol of ServerGroup.
         * <p>
         * @return {@code this}
         * @param protocol Property protocol: Protocol of ServerGroup. This parameter is required.
         */
        public Builder protocol(final com.aliyun.ros.cdk.core.IResolvable protocol) {
            this.props.protocol(protocol);
            return this;
        }

        /**
         * Property resourceGroupId: undefined.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: undefined. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: undefined.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: undefined. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property scheduler: undefined.
         * <p>
         * @return {@code this}
         * @param scheduler Property scheduler: undefined. This parameter is required.
         */
        public Builder scheduler(final java.lang.String scheduler) {
            this.props.scheduler(scheduler);
            return this;
        }
        /**
         * Property scheduler: undefined.
         * <p>
         * @return {@code this}
         * @param scheduler Property scheduler: undefined. This parameter is required.
         */
        public Builder scheduler(final com.aliyun.ros.cdk.core.IResolvable scheduler) {
            this.props.scheduler(scheduler);
            return this;
        }

        /**
         * Property serverGroupType: Type of ServerGroup.
         * <p>
         * @return {@code this}
         * @param serverGroupType Property serverGroupType: Type of ServerGroup. This parameter is required.
         */
        public Builder serverGroupType(final java.lang.String serverGroupType) {
            this.props.serverGroupType(serverGroupType);
            return this;
        }
        /**
         * Property serverGroupType: Type of ServerGroup.
         * <p>
         * @return {@code this}
         * @param serverGroupType Property serverGroupType: Type of ServerGroup. This parameter is required.
         */
        public Builder serverGroupType(final com.aliyun.ros.cdk.core.IResolvable serverGroupType) {
            this.props.serverGroupType(serverGroupType);
            return this;
        }

        /**
         * Property servers: undefined.
         * <p>
         * @return {@code this}
         * @param servers Property servers: undefined. This parameter is required.
         */
        public Builder servers(final com.aliyun.ros.cdk.core.IResolvable servers) {
            this.props.servers(servers);
            return this;
        }
        /**
         * Property servers: undefined.
         * <p>
         * @return {@code this}
         * @param servers Property servers: undefined. This parameter is required.
         */
        public Builder servers(final java.util.List<? extends java.lang.Object> servers) {
            this.props.servers(servers);
            return this;
        }

        /**
         * Property tags: Tags to attach to instance.
         * <p>
         * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to instance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.nlb.RosServerGroup.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.nlb.ServerGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.nlb.ServerGroup build() {
            return new com.aliyun.ros.cdk.nlb.ServerGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
