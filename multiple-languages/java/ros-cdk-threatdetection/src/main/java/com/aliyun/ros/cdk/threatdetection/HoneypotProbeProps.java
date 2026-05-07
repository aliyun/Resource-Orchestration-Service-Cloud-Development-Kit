package com.aliyun.ros.cdk.threatdetection;

/**
 * Properties for defining a <code>HoneypotProbe</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotprobe
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:54.632Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.HoneypotProbeProps")
@software.amazon.jsii.Jsii.Proxy(HoneypotProbeProps.Jsii$Proxy.class)
public interface HoneypotProbeProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property controlNodeId: The ID of the management node.
     * <p>
     * <blockquote>
     * <p>
     * You can call the <a href="~~ListHoneypotNode~~">ListHoneypotNode</a> operation to query the IDs of management nodes.
     * <p>
     * </blockquote>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getControlNodeId();

    /**
     * Property displayName: The name of the probe.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDisplayName();

    /**
     * Property probeType: The type of the probe.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li><strong>host_probe</strong>: host probe</li>
     * <li><strong>vpc_black_hole_probe</strong>: virtual private cloud (VPC) probe.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProbeType();

    /**
     * Property arp: Specifies whether to enable Address Resolution Protocol (ARP) spoofing.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li><strong>true</strong>: yes</li>
     * <li><strong>false</strong>: no.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getArp() {
        return null;
    }

    /**
     * Property businessGroupId: Business grouping.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBusinessGroupId() {
        return null;
    }

    /**
     * Property honeypotBindList: The configuration of the probe.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHoneypotBindList() {
        return null;
    }

    /**
     * Property ping: Specifies whether to enable ping scan.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li><strong>true</strong>: yes</li>
     * <li><strong>false</strong>: no.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPing() {
        return null;
    }

    /**
     * Property probeVersion: The version of the probe.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProbeVersion() {
        return null;
    }

    /**
     * Property proxyIp: The IP address of the proxy.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProxyIp() {
        return null;
    }

    /**
     * Property serviceIpList: Listen to the IP address list.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServiceIpList() {
        return null;
    }

    /**
     * Property uuid: The UUID of the instance.
     * <p>
     * <blockquote>
     * <p>
     * If <strong>ProbeType</strong> is set to <strong>host_probe</strong>, this parameter is required.
     * <p>
     * </blockquote>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUuid() {
        return null;
    }

    /**
     * Property vpcId: The ID of the VPC.
     * <p>
     * <blockquote>
     * <p>
     * <strong>ProbeType</strong> is <strong>vpc_Black _hole_probe</strong>. This value cannot be empty. You can call the [DescribeVpcHoneyPotList](~~ DescribeVpcHoneyPotList ~~) interface to obtain the value.
     * <p>
     * </blockquote>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link HoneypotProbeProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link HoneypotProbeProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<HoneypotProbeProps> {
        java.lang.Object controlNodeId;
        java.lang.Object displayName;
        java.lang.Object probeType;
        java.lang.Object arp;
        java.lang.Object businessGroupId;
        java.lang.Object honeypotBindList;
        java.lang.Object ping;
        java.lang.Object probeVersion;
        java.lang.Object proxyIp;
        java.lang.Object serviceIpList;
        java.lang.Object uuid;
        java.lang.Object vpcId;

        /**
         * Sets the value of {@link HoneypotProbeProps#getControlNodeId}
         * @param controlNodeId Property controlNodeId: The ID of the management node. This parameter is required.
         *                      <blockquote>
         *                      <p>
         *                      You can call the <a href="~~ListHoneypotNode~~">ListHoneypotNode</a> operation to query the IDs of management nodes.
         *                      <p>
         *                      </blockquote>
         * @return {@code this}
         */
        public Builder controlNodeId(java.lang.String controlNodeId) {
            this.controlNodeId = controlNodeId;
            return this;
        }

        /**
         * Sets the value of {@link HoneypotProbeProps#getControlNodeId}
         * @param controlNodeId Property controlNodeId: The ID of the management node. This parameter is required.
         *                      <blockquote>
         *                      <p>
         *                      You can call the <a href="~~ListHoneypotNode~~">ListHoneypotNode</a> operation to query the IDs of management nodes.
         *                      <p>
         *                      </blockquote>
         * @return {@code this}
         */
        public Builder controlNodeId(com.aliyun.ros.cdk.core.IResolvable controlNodeId) {
            this.controlNodeId = controlNodeId;
            return this;
        }

        /**
         * Sets the value of {@link HoneypotProbeProps#getDisplayName}
         * @param displayName Property displayName: The name of the probe. This parameter is required.
         * @return {@code this}
         */
        public Builder displayName(java.lang.String displayName) {
            this.displayName = displayName;
            return this;
        }

        /**
         * Sets the value of {@link HoneypotProbeProps#getDisplayName}
         * @param displayName Property displayName: The name of the probe. This parameter is required.
         * @return {@code this}
         */
        public Builder displayName(com.aliyun.ros.cdk.core.IResolvable displayName) {
            this.displayName = displayName;
            return this;
        }

        /**
         * Sets the value of {@link HoneypotProbeProps#getProbeType}
         * @param probeType Property probeType: The type of the probe. This parameter is required.
         *                  Valid values:
         *                  <p>
         *                  <ul>
         *                  <li><strong>host_probe</strong>: host probe</li>
         *                  <li><strong>vpc_black_hole_probe</strong>: virtual private cloud (VPC) probe.</li>
         *                  </ul>
         * @return {@code this}
         */
        public Builder probeType(java.lang.String probeType) {
            this.probeType = probeType;
            return this;
        }

        /**
         * Sets the value of {@link HoneypotProbeProps#getProbeType}
         * @param probeType Property probeType: The type of the probe. This parameter is required.
         *                  Valid values:
         *                  <p>
         *                  <ul>
         *                  <li><strong>host_probe</strong>: host probe</li>
         *                  <li><strong>vpc_black_hole_probe</strong>: virtual private cloud (VPC) probe.</li>
         *                  </ul>
         * @return {@code this}
         */
        public Builder probeType(com.aliyun.ros.cdk.core.IResolvable probeType) {
            this.probeType = probeType;
            return this;
        }

        /**
         * Sets the value of {@link HoneypotProbeProps#getArp}
         * @param arp Property arp: Specifies whether to enable Address Resolution Protocol (ARP) spoofing.
         *            Valid values:
         *            <p>
         *            <ul>
         *            <li><strong>true</strong>: yes</li>
         *            <li><strong>false</strong>: no.</li>
         *            </ul>
         * @return {@code this}
         */
        public Builder arp(java.lang.Boolean arp) {
            this.arp = arp;
            return this;
        }

        /**
         * Sets the value of {@link HoneypotProbeProps#getArp}
         * @param arp Property arp: Specifies whether to enable Address Resolution Protocol (ARP) spoofing.
         *            Valid values:
         *            <p>
         *            <ul>
         *            <li><strong>true</strong>: yes</li>
         *            <li><strong>false</strong>: no.</li>
         *            </ul>
         * @return {@code this}
         */
        public Builder arp(com.aliyun.ros.cdk.core.IResolvable arp) {
            this.arp = arp;
            return this;
        }

        /**
         * Sets the value of {@link HoneypotProbeProps#getBusinessGroupId}
         * @param businessGroupId Property businessGroupId: Business grouping.
         * @return {@code this}
         */
        public Builder businessGroupId(java.lang.String businessGroupId) {
            this.businessGroupId = businessGroupId;
            return this;
        }

        /**
         * Sets the value of {@link HoneypotProbeProps#getBusinessGroupId}
         * @param businessGroupId Property businessGroupId: Business grouping.
         * @return {@code this}
         */
        public Builder businessGroupId(com.aliyun.ros.cdk.core.IResolvable businessGroupId) {
            this.businessGroupId = businessGroupId;
            return this;
        }

        /**
         * Sets the value of {@link HoneypotProbeProps#getHoneypotBindList}
         * @param honeypotBindList Property honeypotBindList: The configuration of the probe.
         * @return {@code this}
         */
        public Builder honeypotBindList(com.aliyun.ros.cdk.core.IResolvable honeypotBindList) {
            this.honeypotBindList = honeypotBindList;
            return this;
        }

        /**
         * Sets the value of {@link HoneypotProbeProps#getHoneypotBindList}
         * @param honeypotBindList Property honeypotBindList: The configuration of the probe.
         * @return {@code this}
         */
        public Builder honeypotBindList(java.util.List<? extends java.lang.Object> honeypotBindList) {
            this.honeypotBindList = honeypotBindList;
            return this;
        }

        /**
         * Sets the value of {@link HoneypotProbeProps#getPing}
         * @param ping Property ping: Specifies whether to enable ping scan.
         *             Valid values:
         *             <p>
         *             <ul>
         *             <li><strong>true</strong>: yes</li>
         *             <li><strong>false</strong>: no.</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder ping(java.lang.Boolean ping) {
            this.ping = ping;
            return this;
        }

        /**
         * Sets the value of {@link HoneypotProbeProps#getPing}
         * @param ping Property ping: Specifies whether to enable ping scan.
         *             Valid values:
         *             <p>
         *             <ul>
         *             <li><strong>true</strong>: yes</li>
         *             <li><strong>false</strong>: no.</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder ping(com.aliyun.ros.cdk.core.IResolvable ping) {
            this.ping = ping;
            return this;
        }

        /**
         * Sets the value of {@link HoneypotProbeProps#getProbeVersion}
         * @param probeVersion Property probeVersion: The version of the probe.
         * @return {@code this}
         */
        public Builder probeVersion(java.lang.String probeVersion) {
            this.probeVersion = probeVersion;
            return this;
        }

        /**
         * Sets the value of {@link HoneypotProbeProps#getProbeVersion}
         * @param probeVersion Property probeVersion: The version of the probe.
         * @return {@code this}
         */
        public Builder probeVersion(com.aliyun.ros.cdk.core.IResolvable probeVersion) {
            this.probeVersion = probeVersion;
            return this;
        }

        /**
         * Sets the value of {@link HoneypotProbeProps#getProxyIp}
         * @param proxyIp Property proxyIp: The IP address of the proxy.
         * @return {@code this}
         */
        public Builder proxyIp(java.lang.String proxyIp) {
            this.proxyIp = proxyIp;
            return this;
        }

        /**
         * Sets the value of {@link HoneypotProbeProps#getProxyIp}
         * @param proxyIp Property proxyIp: The IP address of the proxy.
         * @return {@code this}
         */
        public Builder proxyIp(com.aliyun.ros.cdk.core.IResolvable proxyIp) {
            this.proxyIp = proxyIp;
            return this;
        }

        /**
         * Sets the value of {@link HoneypotProbeProps#getServiceIpList}
         * @param serviceIpList Property serviceIpList: Listen to the IP address list.
         * @return {@code this}
         */
        public Builder serviceIpList(com.aliyun.ros.cdk.core.IResolvable serviceIpList) {
            this.serviceIpList = serviceIpList;
            return this;
        }

        /**
         * Sets the value of {@link HoneypotProbeProps#getServiceIpList}
         * @param serviceIpList Property serviceIpList: Listen to the IP address list.
         * @return {@code this}
         */
        public Builder serviceIpList(java.util.List<? extends java.lang.Object> serviceIpList) {
            this.serviceIpList = serviceIpList;
            return this;
        }

        /**
         * Sets the value of {@link HoneypotProbeProps#getUuid}
         * @param uuid Property uuid: The UUID of the instance.
         *             <blockquote>
         *             <p>
         *             If <strong>ProbeType</strong> is set to <strong>host_probe</strong>, this parameter is required.
         *             <p>
         *             </blockquote>
         * @return {@code this}
         */
        public Builder uuid(java.lang.String uuid) {
            this.uuid = uuid;
            return this;
        }

        /**
         * Sets the value of {@link HoneypotProbeProps#getUuid}
         * @param uuid Property uuid: The UUID of the instance.
         *             <blockquote>
         *             <p>
         *             If <strong>ProbeType</strong> is set to <strong>host_probe</strong>, this parameter is required.
         *             <p>
         *             </blockquote>
         * @return {@code this}
         */
        public Builder uuid(com.aliyun.ros.cdk.core.IResolvable uuid) {
            this.uuid = uuid;
            return this;
        }

        /**
         * Sets the value of {@link HoneypotProbeProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC.
         *              <blockquote>
         *              <p>
         *              <strong>ProbeType</strong> is <strong>vpc_Black _hole_probe</strong>. This value cannot be empty. You can call the [DescribeVpcHoneyPotList](~~ DescribeVpcHoneyPotList ~~) interface to obtain the value.
         *              <p>
         *              </blockquote>
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link HoneypotProbeProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC.
         *              <blockquote>
         *              <p>
         *              <strong>ProbeType</strong> is <strong>vpc_Black _hole_probe</strong>. This value cannot be empty. You can call the [DescribeVpcHoneyPotList](~~ DescribeVpcHoneyPotList ~~) interface to obtain the value.
         *              <p>
         *              </blockquote>
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link HoneypotProbeProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public HoneypotProbeProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link HoneypotProbeProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HoneypotProbeProps {
        private final java.lang.Object controlNodeId;
        private final java.lang.Object displayName;
        private final java.lang.Object probeType;
        private final java.lang.Object arp;
        private final java.lang.Object businessGroupId;
        private final java.lang.Object honeypotBindList;
        private final java.lang.Object ping;
        private final java.lang.Object probeVersion;
        private final java.lang.Object proxyIp;
        private final java.lang.Object serviceIpList;
        private final java.lang.Object uuid;
        private final java.lang.Object vpcId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.controlNodeId = software.amazon.jsii.Kernel.get(this, "controlNodeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.displayName = software.amazon.jsii.Kernel.get(this, "displayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.probeType = software.amazon.jsii.Kernel.get(this, "probeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.arp = software.amazon.jsii.Kernel.get(this, "arp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.businessGroupId = software.amazon.jsii.Kernel.get(this, "businessGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.honeypotBindList = software.amazon.jsii.Kernel.get(this, "honeypotBindList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ping = software.amazon.jsii.Kernel.get(this, "ping", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.probeVersion = software.amazon.jsii.Kernel.get(this, "probeVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.proxyIp = software.amazon.jsii.Kernel.get(this, "proxyIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceIpList = software.amazon.jsii.Kernel.get(this, "serviceIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.uuid = software.amazon.jsii.Kernel.get(this, "uuid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.controlNodeId = java.util.Objects.requireNonNull(builder.controlNodeId, "controlNodeId is required");
            this.displayName = java.util.Objects.requireNonNull(builder.displayName, "displayName is required");
            this.probeType = java.util.Objects.requireNonNull(builder.probeType, "probeType is required");
            this.arp = builder.arp;
            this.businessGroupId = builder.businessGroupId;
            this.honeypotBindList = builder.honeypotBindList;
            this.ping = builder.ping;
            this.probeVersion = builder.probeVersion;
            this.proxyIp = builder.proxyIp;
            this.serviceIpList = builder.serviceIpList;
            this.uuid = builder.uuid;
            this.vpcId = builder.vpcId;
        }

        @Override
        public final java.lang.Object getControlNodeId() {
            return this.controlNodeId;
        }

        @Override
        public final java.lang.Object getDisplayName() {
            return this.displayName;
        }

        @Override
        public final java.lang.Object getProbeType() {
            return this.probeType;
        }

        @Override
        public final java.lang.Object getArp() {
            return this.arp;
        }

        @Override
        public final java.lang.Object getBusinessGroupId() {
            return this.businessGroupId;
        }

        @Override
        public final java.lang.Object getHoneypotBindList() {
            return this.honeypotBindList;
        }

        @Override
        public final java.lang.Object getPing() {
            return this.ping;
        }

        @Override
        public final java.lang.Object getProbeVersion() {
            return this.probeVersion;
        }

        @Override
        public final java.lang.Object getProxyIp() {
            return this.proxyIp;
        }

        @Override
        public final java.lang.Object getServiceIpList() {
            return this.serviceIpList;
        }

        @Override
        public final java.lang.Object getUuid() {
            return this.uuid;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("controlNodeId", om.valueToTree(this.getControlNodeId()));
            data.set("displayName", om.valueToTree(this.getDisplayName()));
            data.set("probeType", om.valueToTree(this.getProbeType()));
            if (this.getArp() != null) {
                data.set("arp", om.valueToTree(this.getArp()));
            }
            if (this.getBusinessGroupId() != null) {
                data.set("businessGroupId", om.valueToTree(this.getBusinessGroupId()));
            }
            if (this.getHoneypotBindList() != null) {
                data.set("honeypotBindList", om.valueToTree(this.getHoneypotBindList()));
            }
            if (this.getPing() != null) {
                data.set("ping", om.valueToTree(this.getPing()));
            }
            if (this.getProbeVersion() != null) {
                data.set("probeVersion", om.valueToTree(this.getProbeVersion()));
            }
            if (this.getProxyIp() != null) {
                data.set("proxyIp", om.valueToTree(this.getProxyIp()));
            }
            if (this.getServiceIpList() != null) {
                data.set("serviceIpList", om.valueToTree(this.getServiceIpList()));
            }
            if (this.getUuid() != null) {
                data.set("uuid", om.valueToTree(this.getUuid()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-threatdetection.HoneypotProbeProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            HoneypotProbeProps.Jsii$Proxy that = (HoneypotProbeProps.Jsii$Proxy) o;

            if (!controlNodeId.equals(that.controlNodeId)) return false;
            if (!displayName.equals(that.displayName)) return false;
            if (!probeType.equals(that.probeType)) return false;
            if (this.arp != null ? !this.arp.equals(that.arp) : that.arp != null) return false;
            if (this.businessGroupId != null ? !this.businessGroupId.equals(that.businessGroupId) : that.businessGroupId != null) return false;
            if (this.honeypotBindList != null ? !this.honeypotBindList.equals(that.honeypotBindList) : that.honeypotBindList != null) return false;
            if (this.ping != null ? !this.ping.equals(that.ping) : that.ping != null) return false;
            if (this.probeVersion != null ? !this.probeVersion.equals(that.probeVersion) : that.probeVersion != null) return false;
            if (this.proxyIp != null ? !this.proxyIp.equals(that.proxyIp) : that.proxyIp != null) return false;
            if (this.serviceIpList != null ? !this.serviceIpList.equals(that.serviceIpList) : that.serviceIpList != null) return false;
            if (this.uuid != null ? !this.uuid.equals(that.uuid) : that.uuid != null) return false;
            return this.vpcId != null ? this.vpcId.equals(that.vpcId) : that.vpcId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.controlNodeId.hashCode();
            result = 31 * result + (this.displayName.hashCode());
            result = 31 * result + (this.probeType.hashCode());
            result = 31 * result + (this.arp != null ? this.arp.hashCode() : 0);
            result = 31 * result + (this.businessGroupId != null ? this.businessGroupId.hashCode() : 0);
            result = 31 * result + (this.honeypotBindList != null ? this.honeypotBindList.hashCode() : 0);
            result = 31 * result + (this.ping != null ? this.ping.hashCode() : 0);
            result = 31 * result + (this.probeVersion != null ? this.probeVersion.hashCode() : 0);
            result = 31 * result + (this.proxyIp != null ? this.proxyIp.hashCode() : 0);
            result = 31 * result + (this.serviceIpList != null ? this.serviceIpList.hashCode() : 0);
            result = 31 * result + (this.uuid != null ? this.uuid.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            return result;
        }
    }
}
