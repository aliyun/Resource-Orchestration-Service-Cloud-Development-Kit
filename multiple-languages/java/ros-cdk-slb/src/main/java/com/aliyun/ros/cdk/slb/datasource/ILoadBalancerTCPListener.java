package com.aliyun.ros.cdk.slb.datasource;

/**
 * Represents a <code>LoadBalancerTCPListener</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:10.694Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.datasource.ILoadBalancerTCPListener")
@software.amazon.jsii.Jsii.Proxy(ILoadBalancerTCPListener.Jsii$Proxy.class)
public interface ILoadBalancerTCPListener extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AclId: The ID of the network ACL that is associated with the listener.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclId();

    /**
     * Attribute AclIds: The ID list of the network ACL that is associated with the listener.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclIds();

    /**
     * Attribute AclStatus: Indicates whether access control is enabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclStatus();

    /**
     * Attribute AclType: The type of the ACL.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclType();

    /**
     * Attribute BackendServerPort: The backend port used by the CLB instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackendServerPort();

    /**
     * Attribute Bandwidth: The maximum bandwidth of the listener.
     * <p>
     * Unit: Mbit/s.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidth();

    /**
     * Attribute ConnectionDrain: Indicates whether connection draining is enabled.
     * <p>
     * If ConnectionDrain is set to on, the parameter is returned.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionDrain();

    /**
     * Attribute ConnectionDrainTimeout: The timeout period of connection draining.
     * <p>
     * If ConnectionDrain is set to on, the parameter is returned.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionDrainTimeout();

    /**
     * Attribute Description: The description of the listener.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute EstablishedTimeout: The timeout period of a connection.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEstablishedTimeout();

    /**
     * Attribute HealthCheck: Indicates whether the health check feature is enabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheck();

    /**
     * Attribute HealthCheckConnectPort: The port that is used for health checks.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckConnectPort();

    /**
     * Attribute HealthCheckConnectTimeout: The timeout period.
     * <p>
     * Unit: seconds.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckConnectTimeout();

    /**
     * Attribute HealthCheckDomain: The domain name that is used for health checks.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckDomain();

    /**
     * Attribute HealthCheckHttpCode: The HTTP status code for a successful health check.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckHttpCode();

    /**
     * Attribute HealthCheckInterval: The interval between two consecutive health checks.
     * <p>
     * Valid values: 1 to 50. Unit: seconds.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckInterval();

    /**
     * Attribute HealthCheckMethod: The health check method.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckMethod();

    /**
     * Attribute HealthCheckType: The health check method that is used by the TCP listener.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckType();

    /**
     * Attribute HealthCheckUri: The URL that is used for health checks.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckUri();

    /**
     * Attribute HealthyThreshold: The healthy threshold.
     * <p>
     * The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from fail to success. Valid values: 2 to 10.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthyThreshold();

    /**
     * Attribute ListenerPort: The frontend port used by the CLB instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrListenerPort();

    /**
     * Attribute LoadBalancerId: The ID of the CLB instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerId();

    /**
     * Attribute MasterSlaveServerGroupId: The ID of the primary/secondary server group that is associated with the listener.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterSlaveServerGroupId();

    /**
     * Attribute PersistenceTimeout: The timeout period of session persistence.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPersistenceTimeout();

    /**
     * Attribute ProxyProtocolV2Enabled: Indicates whether the Proxy protocol is used to pass client IP addresses to backend servers.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrProxyProtocolV2Enabled();

    /**
     * Attribute Scheduler: The scheduling algorithm.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduler();

    /**
     * Attribute SynProxy: Indicates whether the SynProxy feature of CLB is enabled for protection.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSynProxy();

    /**
     * Attribute UnhealthyThreshold: The unhealthy threshold.
     * <p>
     * The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from success to fail. Valid values: 2 to 10.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUnhealthyThreshold();

    /**
     * Attribute VServerGroupId: The ID of the associated server group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVServerGroupId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.datasource.LoadBalancerTCPListenerProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.slb.datasource.ILoadBalancerTCPListener.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * The construct tree node for this construct.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute AclId: The ID of the network ACL that is associated with the listener.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclId() {
            return software.amazon.jsii.Kernel.get(this, "attrAclId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AclIds: The ID list of the network ACL that is associated with the listener.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclIds() {
            return software.amazon.jsii.Kernel.get(this, "attrAclIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AclStatus: Indicates whether access control is enabled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrAclStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AclType: The type of the ACL.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclType() {
            return software.amazon.jsii.Kernel.get(this, "attrAclType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BackendServerPort: The backend port used by the CLB instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackendServerPort() {
            return software.amazon.jsii.Kernel.get(this, "attrBackendServerPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Bandwidth: The maximum bandwidth of the listener.
         * <p>
         * Unit: Mbit/s.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidth() {
            return software.amazon.jsii.Kernel.get(this, "attrBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConnectionDrain: Indicates whether connection draining is enabled.
         * <p>
         * If ConnectionDrain is set to on, the parameter is returned.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionDrain() {
            return software.amazon.jsii.Kernel.get(this, "attrConnectionDrain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConnectionDrainTimeout: The timeout period of connection draining.
         * <p>
         * If ConnectionDrain is set to on, the parameter is returned.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionDrainTimeout() {
            return software.amazon.jsii.Kernel.get(this, "attrConnectionDrainTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the listener.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EstablishedTimeout: The timeout period of a connection.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEstablishedTimeout() {
            return software.amazon.jsii.Kernel.get(this, "attrEstablishedTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheck: Indicates whether the health check feature is enabled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheck() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheck", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckConnectPort: The port that is used for health checks.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckConnectPort() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckConnectPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckConnectTimeout: The timeout period.
         * <p>
         * Unit: seconds.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckConnectTimeout() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckConnectTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckDomain: The domain name that is used for health checks.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckHttpCode: The HTTP status code for a successful health check.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckHttpCode() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckHttpCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckInterval: The interval between two consecutive health checks.
         * <p>
         * Valid values: 1 to 50. Unit: seconds.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckInterval() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckMethod: The health check method.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckMethod() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckMethod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckType: The health check method that is used by the TCP listener.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckType() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckUri: The URL that is used for health checks.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckUri() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckUri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthyThreshold: The healthy threshold.
         * <p>
         * The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from fail to success. Valid values: 2 to 10.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthyThreshold() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthyThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ListenerPort: The frontend port used by the CLB instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrListenerPort() {
            return software.amazon.jsii.Kernel.get(this, "attrListenerPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoadBalancerId: The ID of the CLB instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerId() {
            return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MasterSlaveServerGroupId: The ID of the primary/secondary server group that is associated with the listener.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterSlaveServerGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrMasterSlaveServerGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PersistenceTimeout: The timeout period of session persistence.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPersistenceTimeout() {
            return software.amazon.jsii.Kernel.get(this, "attrPersistenceTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProxyProtocolV2Enabled: Indicates whether the Proxy protocol is used to pass client IP addresses to backend servers.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrProxyProtocolV2Enabled() {
            return software.amazon.jsii.Kernel.get(this, "attrProxyProtocolV2Enabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Scheduler: The scheduling algorithm.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduler() {
            return software.amazon.jsii.Kernel.get(this, "attrScheduler", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SynProxy: Indicates whether the SynProxy feature of CLB is enabled for protection.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSynProxy() {
            return software.amazon.jsii.Kernel.get(this, "attrSynProxy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UnhealthyThreshold: The unhealthy threshold.
         * <p>
         * The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from success to fail. Valid values: 2 to 10.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUnhealthyThreshold() {
            return software.amazon.jsii.Kernel.get(this, "attrUnhealthyThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VServerGroupId: The ID of the associated server group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVServerGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrVServerGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.datasource.LoadBalancerTCPListenerProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.slb.datasource.LoadBalancerTCPListenerProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ILoadBalancerTCPListener}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ILoadBalancerTCPListener, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

        /**
         * The construct tree node for this construct.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute AclId: The ID of the network ACL that is associated with the listener.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclId() {
            return software.amazon.jsii.Kernel.get(this, "attrAclId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AclIds: The ID list of the network ACL that is associated with the listener.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclIds() {
            return software.amazon.jsii.Kernel.get(this, "attrAclIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AclStatus: Indicates whether access control is enabled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrAclStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AclType: The type of the ACL.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclType() {
            return software.amazon.jsii.Kernel.get(this, "attrAclType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BackendServerPort: The backend port used by the CLB instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackendServerPort() {
            return software.amazon.jsii.Kernel.get(this, "attrBackendServerPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Bandwidth: The maximum bandwidth of the listener.
         * <p>
         * Unit: Mbit/s.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidth() {
            return software.amazon.jsii.Kernel.get(this, "attrBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConnectionDrain: Indicates whether connection draining is enabled.
         * <p>
         * If ConnectionDrain is set to on, the parameter is returned.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionDrain() {
            return software.amazon.jsii.Kernel.get(this, "attrConnectionDrain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConnectionDrainTimeout: The timeout period of connection draining.
         * <p>
         * If ConnectionDrain is set to on, the parameter is returned.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionDrainTimeout() {
            return software.amazon.jsii.Kernel.get(this, "attrConnectionDrainTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the listener.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EstablishedTimeout: The timeout period of a connection.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEstablishedTimeout() {
            return software.amazon.jsii.Kernel.get(this, "attrEstablishedTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheck: Indicates whether the health check feature is enabled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheck() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheck", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckConnectPort: The port that is used for health checks.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckConnectPort() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckConnectPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckConnectTimeout: The timeout period.
         * <p>
         * Unit: seconds.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckConnectTimeout() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckConnectTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckDomain: The domain name that is used for health checks.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckHttpCode: The HTTP status code for a successful health check.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckHttpCode() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckHttpCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckInterval: The interval between two consecutive health checks.
         * <p>
         * Valid values: 1 to 50. Unit: seconds.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckInterval() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckMethod: The health check method.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckMethod() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckMethod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckType: The health check method that is used by the TCP listener.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckType() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckUri: The URL that is used for health checks.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckUri() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckUri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthyThreshold: The healthy threshold.
         * <p>
         * The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from fail to success. Valid values: 2 to 10.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthyThreshold() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthyThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ListenerPort: The frontend port used by the CLB instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrListenerPort() {
            return software.amazon.jsii.Kernel.get(this, "attrListenerPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoadBalancerId: The ID of the CLB instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerId() {
            return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MasterSlaveServerGroupId: The ID of the primary/secondary server group that is associated with the listener.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterSlaveServerGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrMasterSlaveServerGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PersistenceTimeout: The timeout period of session persistence.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPersistenceTimeout() {
            return software.amazon.jsii.Kernel.get(this, "attrPersistenceTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProxyProtocolV2Enabled: Indicates whether the Proxy protocol is used to pass client IP addresses to backend servers.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrProxyProtocolV2Enabled() {
            return software.amazon.jsii.Kernel.get(this, "attrProxyProtocolV2Enabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Scheduler: The scheduling algorithm.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduler() {
            return software.amazon.jsii.Kernel.get(this, "attrScheduler", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SynProxy: Indicates whether the SynProxy feature of CLB is enabled for protection.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSynProxy() {
            return software.amazon.jsii.Kernel.get(this, "attrSynProxy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UnhealthyThreshold: The unhealthy threshold.
         * <p>
         * The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from success to fail. Valid values: 2 to 10.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUnhealthyThreshold() {
            return software.amazon.jsii.Kernel.get(this, "attrUnhealthyThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VServerGroupId: The ID of the associated server group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVServerGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrVServerGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.datasource.LoadBalancerTCPListenerProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.slb.datasource.LoadBalancerTCPListenerProps.class));
        }
    }
}
