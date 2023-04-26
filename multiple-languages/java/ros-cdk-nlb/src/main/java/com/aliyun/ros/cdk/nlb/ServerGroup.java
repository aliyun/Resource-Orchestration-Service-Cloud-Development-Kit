package com.aliyun.ros.cdk.nlb;

/**
 * A ROS resource type:  `ALIYUN::NLB::ServerGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T01:43:51.413Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nlb.$Module.class, fqn = "@alicloud/ros-cdk-nlb.ServerGroup")
public class ServerGroup extends com.aliyun.ros.cdk.core.Resource {

    protected ServerGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ServerGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::NLB::ServerGroup`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
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
     * Create a new `ALIYUN::NLB::ServerGroup`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
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
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.nlb.ServerGroup}.
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
