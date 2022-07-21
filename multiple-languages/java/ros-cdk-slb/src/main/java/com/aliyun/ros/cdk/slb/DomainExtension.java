package com.aliyun.ros.cdk.slb;

/**
 * A ROS resource type:  `ALIYUN::SLB::DomainExtension`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.62.0 (build 293ac17)", date = "2022-07-21T02:24:26.468Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.DomainExtension")
public class DomainExtension extends com.aliyun.ros.cdk.core.Resource {

    protected DomainExtension(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DomainExtension(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::SLB::DomainExtension`.
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
    public DomainExtension(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.DomainExtensionProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::SLB::DomainExtension`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public DomainExtension(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.DomainExtensionProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DomainExtensionId: The ID of the created domain name extension.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDomainExtensionId() {
        return software.amazon.jsii.Kernel.get(this, "attrDomainExtensionId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ListenerPort: The front-end HTTPS listener port of the Server Load Balancer instance.
     * <p>
     * Valid value:
     * 1-65535
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrListenerPort() {
        return software.amazon.jsii.Kernel.get(this, "attrListenerPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.slb.DomainExtension}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.slb.DomainExtension> {
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
        private final com.aliyun.ros.cdk.slb.DomainExtensionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.slb.DomainExtensionProps.Builder();
        }

        /**
         * Property domain: The domain name.
         * <p>
         * @return {@code this}
         * @param domain Property domain: The domain name. This parameter is required.
         */
        public Builder domain(final java.lang.String domain) {
            this.props.domain(domain);
            return this;
        }
        /**
         * Property domain: The domain name.
         * <p>
         * @return {@code this}
         * @param domain Property domain: The domain name. This parameter is required.
         */
        public Builder domain(final com.aliyun.ros.cdk.core.IResolvable domain) {
            this.props.domain(domain);
            return this;
        }

        /**
         * Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance.
         * <p>
         * Valid value:
         * 1-65535
         * <p>
         * @return {@code this}
         * @param listenerPort Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. This parameter is required.
         */
        public Builder listenerPort(final java.lang.Number listenerPort) {
            this.props.listenerPort(listenerPort);
            return this;
        }
        /**
         * Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance.
         * <p>
         * Valid value:
         * 1-65535
         * <p>
         * @return {@code this}
         * @param listenerPort Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. This parameter is required.
         */
        public Builder listenerPort(final com.aliyun.ros.cdk.core.IResolvable listenerPort) {
            this.props.listenerPort(listenerPort);
            return this;
        }

        /**
         * Property loadBalancerId: The ID of Server Load Balancer instance.
         * <p>
         * @return {@code this}
         * @param loadBalancerId Property loadBalancerId: The ID of Server Load Balancer instance. This parameter is required.
         */
        public Builder loadBalancerId(final java.lang.String loadBalancerId) {
            this.props.loadBalancerId(loadBalancerId);
            return this;
        }
        /**
         * Property loadBalancerId: The ID of Server Load Balancer instance.
         * <p>
         * @return {@code this}
         * @param loadBalancerId Property loadBalancerId: The ID of Server Load Balancer instance. This parameter is required.
         */
        public Builder loadBalancerId(final com.aliyun.ros.cdk.core.IResolvable loadBalancerId) {
            this.props.loadBalancerId(loadBalancerId);
            return this;
        }

        /**
         * Property serverCertificateId: The ID of the certificate corresponding to the domain name.
         * <p>
         * @return {@code this}
         * @param serverCertificateId Property serverCertificateId: The ID of the certificate corresponding to the domain name. This parameter is required.
         */
        public Builder serverCertificateId(final java.lang.String serverCertificateId) {
            this.props.serverCertificateId(serverCertificateId);
            return this;
        }
        /**
         * Property serverCertificateId: The ID of the certificate corresponding to the domain name.
         * <p>
         * @return {@code this}
         * @param serverCertificateId Property serverCertificateId: The ID of the certificate corresponding to the domain name. This parameter is required.
         */
        public Builder serverCertificateId(final com.aliyun.ros.cdk.core.IResolvable serverCertificateId) {
            this.props.serverCertificateId(serverCertificateId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.slb.DomainExtension}.
         */
        @Override
        public com.aliyun.ros.cdk.slb.DomainExtension build() {
            return new com.aliyun.ros.cdk.slb.DomainExtension(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
