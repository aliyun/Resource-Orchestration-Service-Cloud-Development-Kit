package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Represents a <code>BgpPeer</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:25:01.338Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.IBgpPeer")
@software.amazon.jsii.Jsii.Proxy(IBgpPeer.Jsii$Proxy.class)
public interface IBgpPeer extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AdvertisedRouteCount: The number of advertised routes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAdvertisedRouteCount();

    /**
     * Attribute AuthKey: The authentication key of the BGP group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuthKey();

    /**
     * Attribute BfdMultiHop: The Bidirectional Forwarding Detection (BFD) hop count.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBfdMultiHop();

    /**
     * Attribute BgpGroupId: The ID of the BGP group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBgpGroupId();

    /**
     * Attribute BgpPeerId: The ID of the BGP peer.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBgpPeerId();

    /**
     * Attribute BgpStatus: The status of the BGP connection.
     * <p>
     * Valid values:
     * Idle: The BGP connection is not used.
     * Connect: The BGP connection is used.
     * Active: The BGP connection is available.
     * Established: The BGP connection is established.
     * Down: The BGP connection is unavailable.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBgpStatus();

    /**
     * Attribute Description: The description of the BGP group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute EnableBfd: Indicates whether BFD is enabled.
     * <p>
     * Valid values:
     * false
     * true
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableBfd();

    /**
     * Attribute GmtModified: The time when the BGP peer is modified.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGmtModified();

    /**
     * Attribute Hold: The hold time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHold();

    /**
     * Attribute IpVersion: The version of the IP address.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpVersion();

    /**
     * Attribute IsFake: Indicates whether a fake autonomous system number (ASN) is used.
     * <p>
     * Valid values:
     * false
     * true
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsFake();

    /**
     * Attribute Keepalive: The Keepalive interval.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeepalive();

    /**
     * Attribute LocalAsn: The ASN of the device on the Alibaba Cloud side.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLocalAsn();

    /**
     * Attribute Name: The name of the BGP peer.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrName();

    /**
     * Attribute PeerAsn: The autonomous system number (ASN)of the BGP peer.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeerAsn();

    /**
     * Attribute PeerIpAddress: The IP address of the BGP peer.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeerIpAddress();

    /**
     * Attribute ReceivedRouteCount: The number of received routes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReceivedRouteCount();

    /**
     * Attribute RouteLimit: The maximum number of routes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouteLimit();

    /**
     * Attribute RouterId: The Router ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouterId();

    /**
     * Attribute Status: The status of the BGP peer.
     * <p>
     * Valid values:
     * Pending
     * Available
     * Modifying
     * Deleting
     * Deleted
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.BgpPeerProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.vpc.datasource.IBgpPeer.Jsii$Default {
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
         * Attribute AdvertisedRouteCount: The number of advertised routes.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAdvertisedRouteCount() {
            return software.amazon.jsii.Kernel.get(this, "attrAdvertisedRouteCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AuthKey: The authentication key of the BGP group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuthKey() {
            return software.amazon.jsii.Kernel.get(this, "attrAuthKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BfdMultiHop: The Bidirectional Forwarding Detection (BFD) hop count.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBfdMultiHop() {
            return software.amazon.jsii.Kernel.get(this, "attrBfdMultiHop", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BgpGroupId: The ID of the BGP group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBgpGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrBgpGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BgpPeerId: The ID of the BGP peer.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBgpPeerId() {
            return software.amazon.jsii.Kernel.get(this, "attrBgpPeerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BgpStatus: The status of the BGP connection.
         * <p>
         * Valid values:
         * Idle: The BGP connection is not used.
         * Connect: The BGP connection is used.
         * Active: The BGP connection is available.
         * Established: The BGP connection is established.
         * Down: The BGP connection is unavailable.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBgpStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrBgpStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the BGP group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnableBfd: Indicates whether BFD is enabled.
         * <p>
         * Valid values:
         * false
         * true
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableBfd() {
            return software.amazon.jsii.Kernel.get(this, "attrEnableBfd", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GmtModified: The time when the BGP peer is modified.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGmtModified() {
            return software.amazon.jsii.Kernel.get(this, "attrGmtModified", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Hold: The hold time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHold() {
            return software.amazon.jsii.Kernel.get(this, "attrHold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpVersion: The version of the IP address.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrIpVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IsFake: Indicates whether a fake autonomous system number (ASN) is used.
         * <p>
         * Valid values:
         * false
         * true
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsFake() {
            return software.amazon.jsii.Kernel.get(this, "attrIsFake", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Keepalive: The Keepalive interval.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeepalive() {
            return software.amazon.jsii.Kernel.get(this, "attrKeepalive", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LocalAsn: The ASN of the device on the Alibaba Cloud side.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLocalAsn() {
            return software.amazon.jsii.Kernel.get(this, "attrLocalAsn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Name: The name of the BGP peer.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrName() {
            return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PeerAsn: The autonomous system number (ASN)of the BGP peer.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeerAsn() {
            return software.amazon.jsii.Kernel.get(this, "attrPeerAsn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PeerIpAddress: The IP address of the BGP peer.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeerIpAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrPeerIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReceivedRouteCount: The number of received routes.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReceivedRouteCount() {
            return software.amazon.jsii.Kernel.get(this, "attrReceivedRouteCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RouteLimit: The maximum number of routes.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouteLimit() {
            return software.amazon.jsii.Kernel.get(this, "attrRouteLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RouterId: The Router ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouterId() {
            return software.amazon.jsii.Kernel.get(this, "attrRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Status: The status of the BGP peer.
         * <p>
         * Valid values:
         * Pending
         * Available
         * Modifying
         * Deleting
         * Deleted
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.BgpPeerProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.datasource.BgpPeerProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IBgpPeer}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IBgpPeer, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AdvertisedRouteCount: The number of advertised routes.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAdvertisedRouteCount() {
            return software.amazon.jsii.Kernel.get(this, "attrAdvertisedRouteCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AuthKey: The authentication key of the BGP group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuthKey() {
            return software.amazon.jsii.Kernel.get(this, "attrAuthKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BfdMultiHop: The Bidirectional Forwarding Detection (BFD) hop count.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBfdMultiHop() {
            return software.amazon.jsii.Kernel.get(this, "attrBfdMultiHop", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BgpGroupId: The ID of the BGP group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBgpGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrBgpGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BgpPeerId: The ID of the BGP peer.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBgpPeerId() {
            return software.amazon.jsii.Kernel.get(this, "attrBgpPeerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BgpStatus: The status of the BGP connection.
         * <p>
         * Valid values:
         * Idle: The BGP connection is not used.
         * Connect: The BGP connection is used.
         * Active: The BGP connection is available.
         * Established: The BGP connection is established.
         * Down: The BGP connection is unavailable.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBgpStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrBgpStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the BGP group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnableBfd: Indicates whether BFD is enabled.
         * <p>
         * Valid values:
         * false
         * true
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableBfd() {
            return software.amazon.jsii.Kernel.get(this, "attrEnableBfd", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GmtModified: The time when the BGP peer is modified.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGmtModified() {
            return software.amazon.jsii.Kernel.get(this, "attrGmtModified", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Hold: The hold time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHold() {
            return software.amazon.jsii.Kernel.get(this, "attrHold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpVersion: The version of the IP address.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrIpVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IsFake: Indicates whether a fake autonomous system number (ASN) is used.
         * <p>
         * Valid values:
         * false
         * true
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsFake() {
            return software.amazon.jsii.Kernel.get(this, "attrIsFake", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Keepalive: The Keepalive interval.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeepalive() {
            return software.amazon.jsii.Kernel.get(this, "attrKeepalive", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LocalAsn: The ASN of the device on the Alibaba Cloud side.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLocalAsn() {
            return software.amazon.jsii.Kernel.get(this, "attrLocalAsn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Name: The name of the BGP peer.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrName() {
            return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PeerAsn: The autonomous system number (ASN)of the BGP peer.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeerAsn() {
            return software.amazon.jsii.Kernel.get(this, "attrPeerAsn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PeerIpAddress: The IP address of the BGP peer.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeerIpAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrPeerIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReceivedRouteCount: The number of received routes.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReceivedRouteCount() {
            return software.amazon.jsii.Kernel.get(this, "attrReceivedRouteCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RouteLimit: The maximum number of routes.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouteLimit() {
            return software.amazon.jsii.Kernel.get(this, "attrRouteLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RouterId: The Router ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouterId() {
            return software.amazon.jsii.Kernel.get(this, "attrRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Status: The status of the BGP peer.
         * <p>
         * Valid values:
         * Pending
         * Available
         * Modifying
         * Deleting
         * Deleted
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.BgpPeerProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.datasource.BgpPeerProps.class));
        }
    }
}
