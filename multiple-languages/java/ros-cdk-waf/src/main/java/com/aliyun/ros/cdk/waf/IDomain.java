package com.aliyun.ros.cdk.waf;

/**
 * Represents a <code>Domain</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:11.933Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.waf.$Module.class, fqn = "@alicloud/ros-cdk-waf.IDomain")
@software.amazon.jsii.Jsii.Proxy(IDomain.Jsii$Proxy.class)
public interface IDomain extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ClusterType: Cluster type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterType();

    /**
     * Attribute Cname: CNAME assigned by WAF instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCname();

    /**
     * Attribute DomainName: Domain name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainName();

    /**
     * Attribute Http2Port: Http2 port configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttp2Port();

    /**
     * Attribute HttpPort: Http port configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpPort();

    /**
     * Attribute HttpsPort: Https port configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpsPort();

    /**
     * Attribute HttpsRedirect: Https forced redirect configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpsRedirect();

    /**
     * Attribute HttpToUserIp: Http back to source.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpToUserIp();

    /**
     * Attribute InstanceId: Instance id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId();

    /**
     * Attribute IsAccessProduct: Is there a seven-layer agency before WAF.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsAccessProduct();

    /**
     * Attribute LoadBalancing: Load balancing configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancing();

    /**
     * Attribute LogHeaders: Domain traffic tagging.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLogHeaders();

    /**
     * Attribute ResourceGroupId: Resource group Id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute SourceIps: Back to source IP configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceIps();

    /**
     * Attribute Version: Optimistic lock version.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersion();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.waf.DomainProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.waf.IDomain.Jsii$Default {
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
         * Attribute ClusterType: Cluster type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterType() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Cname: CNAME assigned by WAF instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCname() {
            return software.amazon.jsii.Kernel.get(this, "attrCname", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DomainName: Domain name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainName() {
            return software.amazon.jsii.Kernel.get(this, "attrDomainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Http2Port: Http2 port configuration.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttp2Port() {
            return software.amazon.jsii.Kernel.get(this, "attrHttp2Port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HttpPort: Http port configuration.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpPort() {
            return software.amazon.jsii.Kernel.get(this, "attrHttpPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HttpsPort: Https port configuration.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpsPort() {
            return software.amazon.jsii.Kernel.get(this, "attrHttpsPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HttpsRedirect: Https forced redirect configuration.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpsRedirect() {
            return software.amazon.jsii.Kernel.get(this, "attrHttpsRedirect", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HttpToUserIp: Http back to source.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpToUserIp() {
            return software.amazon.jsii.Kernel.get(this, "attrHttpToUserIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: Instance id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IsAccessProduct: Is there a seven-layer agency before WAF.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsAccessProduct() {
            return software.amazon.jsii.Kernel.get(this, "attrIsAccessProduct", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoadBalancing: Load balancing configuration.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancing() {
            return software.amazon.jsii.Kernel.get(this, "attrLoadBalancing", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LogHeaders: Domain traffic tagging.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLogHeaders() {
            return software.amazon.jsii.Kernel.get(this, "attrLogHeaders", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: Resource group Id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceIps: Back to source IP configuration.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceIps() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Version: Optimistic lock version.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.waf.DomainProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.waf.DomainProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IDomain}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IDomain, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute ClusterType: Cluster type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterType() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Cname: CNAME assigned by WAF instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCname() {
            return software.amazon.jsii.Kernel.get(this, "attrCname", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DomainName: Domain name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainName() {
            return software.amazon.jsii.Kernel.get(this, "attrDomainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Http2Port: Http2 port configuration.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttp2Port() {
            return software.amazon.jsii.Kernel.get(this, "attrHttp2Port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HttpPort: Http port configuration.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpPort() {
            return software.amazon.jsii.Kernel.get(this, "attrHttpPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HttpsPort: Https port configuration.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpsPort() {
            return software.amazon.jsii.Kernel.get(this, "attrHttpsPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HttpsRedirect: Https forced redirect configuration.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpsRedirect() {
            return software.amazon.jsii.Kernel.get(this, "attrHttpsRedirect", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HttpToUserIp: Http back to source.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpToUserIp() {
            return software.amazon.jsii.Kernel.get(this, "attrHttpToUserIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: Instance id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IsAccessProduct: Is there a seven-layer agency before WAF.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsAccessProduct() {
            return software.amazon.jsii.Kernel.get(this, "attrIsAccessProduct", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoadBalancing: Load balancing configuration.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancing() {
            return software.amazon.jsii.Kernel.get(this, "attrLoadBalancing", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LogHeaders: Domain traffic tagging.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLogHeaders() {
            return software.amazon.jsii.Kernel.get(this, "attrLogHeaders", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: Resource group Id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceIps: Back to source IP configuration.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceIps() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Version: Optimistic lock version.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.waf.DomainProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.waf.DomainProps.class));
        }
    }
}
