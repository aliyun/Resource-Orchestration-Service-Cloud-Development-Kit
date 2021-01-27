package com.aliyun.ros.cdk.slb;

/**
 * A ROS resource type:  `ALIYUN::SLB::Listener`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.558Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.Listener")
public class Listener extends com.aliyun.ros.cdk.core.Resource {

    protected Listener(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Listener(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::SLB::Listener`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Listener(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.ListenerProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::SLB::Listener`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     */
    public Listener(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.ListenerProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrListenerPortsAndProtocol() {
        return software.amazon.jsii.Kernel.get(this, "attrListenerPortsAndProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerId() {
        return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.slb.Listener}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.slb.Listener> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.slb.ListenerProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.slb.ListenerProps.Builder();
        }

        /**
         * @return {@code this}
         * @param backendServerPort This parameter is required.
         */
        public Builder backendServerPort(final java.lang.Number backendServerPort) {
            this.props.backendServerPort(backendServerPort);
            return this;
        }

        /**
         * @return {@code this}
         * @param bandwidth This parameter is required.
         */
        public Builder bandwidth(final java.lang.Number bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }

        /**
         * @return {@code this}
         * @param listenerPort This parameter is required.
         */
        public Builder listenerPort(final java.lang.Number listenerPort) {
            this.props.listenerPort(listenerPort);
            return this;
        }

        /**
         * @return {@code this}
         * @param loadBalancerId This parameter is required.
         */
        public Builder loadBalancerId(final java.lang.String loadBalancerId) {
            this.props.loadBalancerId(loadBalancerId);
            return this;
        }

        /**
         * @return {@code this}
         * @param protocol This parameter is required.
         */
        public Builder protocol(final java.lang.String protocol) {
            this.props.protocol(protocol);
            return this;
        }

        /**
         * @return {@code this}
         * @param aclId This parameter is required.
         */
        public Builder aclId(final java.lang.String aclId) {
            this.props.aclId(aclId);
            return this;
        }

        /**
         * @return {@code this}
         * @param aclStatus This parameter is required.
         */
        public Builder aclStatus(final java.lang.String aclStatus) {
            this.props.aclStatus(aclStatus);
            return this;
        }

        /**
         * @return {@code this}
         * @param aclType This parameter is required.
         */
        public Builder aclType(final java.lang.String aclType) {
            this.props.aclType(aclType);
            return this;
        }

        /**
         * @return {@code this}
         * @param caCertificateId This parameter is required.
         */
        public Builder caCertificateId(final java.lang.String caCertificateId) {
            this.props.caCertificateId(caCertificateId);
            return this;
        }

        /**
         * @return {@code this}
         * @param healthCheck This parameter is required.
         */
        public Builder healthCheck(final com.aliyun.ros.cdk.core.IResolvable healthCheck) {
            this.props.healthCheck(healthCheck);
            return this;
        }
        /**
         * @return {@code this}
         * @param healthCheck This parameter is required.
         */
        public Builder healthCheck(final com.aliyun.ros.cdk.slb.RosListener.HealthCheckProperty healthCheck) {
            this.props.healthCheck(healthCheck);
            return this;
        }

        /**
         * @return {@code this}
         * @param httpConfig This parameter is required.
         */
        public Builder httpConfig(final com.aliyun.ros.cdk.core.IResolvable httpConfig) {
            this.props.httpConfig(httpConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param httpConfig This parameter is required.
         */
        public Builder httpConfig(final com.aliyun.ros.cdk.slb.RosListener.HttpConfigProperty httpConfig) {
            this.props.httpConfig(httpConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param idleTimeout This parameter is required.
         */
        public Builder idleTimeout(final java.lang.Number idleTimeout) {
            this.props.idleTimeout(idleTimeout);
            return this;
        }

        /**
         * @return {@code this}
         * @param masterSlaveServerGroupId This parameter is required.
         */
        public Builder masterSlaveServerGroupId(final java.lang.String masterSlaveServerGroupId) {
            this.props.masterSlaveServerGroupId(masterSlaveServerGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param persistence This parameter is required.
         */
        public Builder persistence(final com.aliyun.ros.cdk.core.IResolvable persistence) {
            this.props.persistence(persistence);
            return this;
        }
        /**
         * @return {@code this}
         * @param persistence This parameter is required.
         */
        public Builder persistence(final com.aliyun.ros.cdk.slb.RosListener.PersistenceProperty persistence) {
            this.props.persistence(persistence);
            return this;
        }

        /**
         * @return {@code this}
         * @param requestTimeout This parameter is required.
         */
        public Builder requestTimeout(final java.lang.Number requestTimeout) {
            this.props.requestTimeout(requestTimeout);
            return this;
        }

        /**
         * @return {@code this}
         * @param scheduler This parameter is required.
         */
        public Builder scheduler(final java.lang.String scheduler) {
            this.props.scheduler(scheduler);
            return this;
        }

        /**
         * @return {@code this}
         * @param serverCertificateId This parameter is required.
         */
        public Builder serverCertificateId(final java.lang.String serverCertificateId) {
            this.props.serverCertificateId(serverCertificateId);
            return this;
        }

        /**
         * @return {@code this}
         * @param vServerGroupId This parameter is required.
         */
        public Builder vServerGroupId(final java.lang.String vServerGroupId) {
            this.props.vServerGroupId(vServerGroupId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.slb.Listener}.
         */
        @Override
        public com.aliyun.ros.cdk.slb.Listener build() {
            return new com.aliyun.ros.cdk.slb.Listener(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
