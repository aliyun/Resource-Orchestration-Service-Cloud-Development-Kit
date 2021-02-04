package com.aliyun.ros.cdk.mse;

/**
 * Properties for defining a `ALIYUN::MSE::Cluster`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:36.104Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.ClusterProps")
@software.amazon.jsii.Jsii.Proxy(ClusterProps.Jsii$Proxy.class)
public interface ClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getClusterSpecification();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getClusterType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getClusterVersion();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Number getInstanceCount();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getNetType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDiskType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPrivateSlbSpecification() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPubNetworkFlow() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPubSlbSpecification() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getVpcId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getVSwitchId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ClusterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ClusterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ClusterProps> {
        private java.lang.String clusterSpecification;
        private java.lang.String clusterType;
        private java.lang.String clusterVersion;
        private java.lang.Number instanceCount;
        private java.lang.String netType;
        private java.lang.String diskType;
        private java.lang.String privateSlbSpecification;
        private java.lang.String pubNetworkFlow;
        private java.lang.String pubSlbSpecification;
        private java.lang.String vpcId;
        private java.lang.String vSwitchId;

        /**
         * Sets the value of {@link ClusterProps#getClusterSpecification}
         * @param clusterSpecification the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterSpecification(java.lang.String clusterSpecification) {
            this.clusterSpecification = clusterSpecification;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getClusterType}
         * @param clusterType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterType(java.lang.String clusterType) {
            this.clusterType = clusterType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getClusterVersion}
         * @param clusterVersion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterVersion(java.lang.String clusterVersion) {
            this.clusterVersion = clusterVersion;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getInstanceCount}
         * @param instanceCount the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceCount(java.lang.Number instanceCount) {
            this.instanceCount = instanceCount;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getNetType}
         * @param netType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder netType(java.lang.String netType) {
            this.netType = netType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getDiskType}
         * @param diskType the value to be set.
         * @return {@code this}
         */
        public Builder diskType(java.lang.String diskType) {
            this.diskType = diskType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getPrivateSlbSpecification}
         * @param privateSlbSpecification the value to be set.
         * @return {@code this}
         */
        public Builder privateSlbSpecification(java.lang.String privateSlbSpecification) {
            this.privateSlbSpecification = privateSlbSpecification;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getPubNetworkFlow}
         * @param pubNetworkFlow the value to be set.
         * @return {@code this}
         */
        public Builder pubNetworkFlow(java.lang.String pubNetworkFlow) {
            this.pubNetworkFlow = pubNetworkFlow;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getPubSlbSpecification}
         * @param pubSlbSpecification the value to be set.
         * @return {@code this}
         */
        public Builder pubSlbSpecification(java.lang.String pubSlbSpecification) {
            this.pubSlbSpecification = pubSlbSpecification;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ClusterProps build() {
            return new Jsii$Proxy(clusterSpecification, clusterType, clusterVersion, instanceCount, netType, diskType, privateSlbSpecification, pubNetworkFlow, pubSlbSpecification, vpcId, vSwitchId);
        }
    }

    /**
     * An implementation for {@link ClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ClusterProps {
        private final java.lang.String clusterSpecification;
        private final java.lang.String clusterType;
        private final java.lang.String clusterVersion;
        private final java.lang.Number instanceCount;
        private final java.lang.String netType;
        private final java.lang.String diskType;
        private final java.lang.String privateSlbSpecification;
        private final java.lang.String pubNetworkFlow;
        private final java.lang.String pubSlbSpecification;
        private final java.lang.String vpcId;
        private final java.lang.String vSwitchId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clusterSpecification = software.amazon.jsii.Kernel.get(this, "clusterSpecification", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.clusterType = software.amazon.jsii.Kernel.get(this, "clusterType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.clusterVersion = software.amazon.jsii.Kernel.get(this, "clusterVersion", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.instanceCount = software.amazon.jsii.Kernel.get(this, "instanceCount", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.netType = software.amazon.jsii.Kernel.get(this, "netType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.diskType = software.amazon.jsii.Kernel.get(this, "diskType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.privateSlbSpecification = software.amazon.jsii.Kernel.get(this, "privateSlbSpecification", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.pubNetworkFlow = software.amazon.jsii.Kernel.get(this, "pubNetworkFlow", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.pubSlbSpecification = software.amazon.jsii.Kernel.get(this, "pubSlbSpecification", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String clusterSpecification, final java.lang.String clusterType, final java.lang.String clusterVersion, final java.lang.Number instanceCount, final java.lang.String netType, final java.lang.String diskType, final java.lang.String privateSlbSpecification, final java.lang.String pubNetworkFlow, final java.lang.String pubSlbSpecification, final java.lang.String vpcId, final java.lang.String vSwitchId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clusterSpecification = java.util.Objects.requireNonNull(clusterSpecification, "clusterSpecification is required");
            this.clusterType = java.util.Objects.requireNonNull(clusterType, "clusterType is required");
            this.clusterVersion = java.util.Objects.requireNonNull(clusterVersion, "clusterVersion is required");
            this.instanceCount = java.util.Objects.requireNonNull(instanceCount, "instanceCount is required");
            this.netType = java.util.Objects.requireNonNull(netType, "netType is required");
            this.diskType = diskType;
            this.privateSlbSpecification = privateSlbSpecification;
            this.pubNetworkFlow = pubNetworkFlow;
            this.pubSlbSpecification = pubSlbSpecification;
            this.vpcId = vpcId;
            this.vSwitchId = vSwitchId;
        }

        @Override
        public final java.lang.String getClusterSpecification() {
            return this.clusterSpecification;
        }

        @Override
        public final java.lang.String getClusterType() {
            return this.clusterType;
        }

        @Override
        public final java.lang.String getClusterVersion() {
            return this.clusterVersion;
        }

        @Override
        public final java.lang.Number getInstanceCount() {
            return this.instanceCount;
        }

        @Override
        public final java.lang.String getNetType() {
            return this.netType;
        }

        @Override
        public final java.lang.String getDiskType() {
            return this.diskType;
        }

        @Override
        public final java.lang.String getPrivateSlbSpecification() {
            return this.privateSlbSpecification;
        }

        @Override
        public final java.lang.String getPubNetworkFlow() {
            return this.pubNetworkFlow;
        }

        @Override
        public final java.lang.String getPubSlbSpecification() {
            return this.pubSlbSpecification;
        }

        @Override
        public final java.lang.String getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.String getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("clusterSpecification", om.valueToTree(this.getClusterSpecification()));
            data.set("clusterType", om.valueToTree(this.getClusterType()));
            data.set("clusterVersion", om.valueToTree(this.getClusterVersion()));
            data.set("instanceCount", om.valueToTree(this.getInstanceCount()));
            data.set("netType", om.valueToTree(this.getNetType()));
            if (this.getDiskType() != null) {
                data.set("diskType", om.valueToTree(this.getDiskType()));
            }
            if (this.getPrivateSlbSpecification() != null) {
                data.set("privateSlbSpecification", om.valueToTree(this.getPrivateSlbSpecification()));
            }
            if (this.getPubNetworkFlow() != null) {
                data.set("pubNetworkFlow", om.valueToTree(this.getPubNetworkFlow()));
            }
            if (this.getPubSlbSpecification() != null) {
                data.set("pubSlbSpecification", om.valueToTree(this.getPubSlbSpecification()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mse.ClusterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ClusterProps.Jsii$Proxy that = (ClusterProps.Jsii$Proxy) o;

            if (!clusterSpecification.equals(that.clusterSpecification)) return false;
            if (!clusterType.equals(that.clusterType)) return false;
            if (!clusterVersion.equals(that.clusterVersion)) return false;
            if (!instanceCount.equals(that.instanceCount)) return false;
            if (!netType.equals(that.netType)) return false;
            if (this.diskType != null ? !this.diskType.equals(that.diskType) : that.diskType != null) return false;
            if (this.privateSlbSpecification != null ? !this.privateSlbSpecification.equals(that.privateSlbSpecification) : that.privateSlbSpecification != null) return false;
            if (this.pubNetworkFlow != null ? !this.pubNetworkFlow.equals(that.pubNetworkFlow) : that.pubNetworkFlow != null) return false;
            if (this.pubSlbSpecification != null ? !this.pubSlbSpecification.equals(that.pubSlbSpecification) : that.pubSlbSpecification != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            return this.vSwitchId != null ? this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.clusterSpecification.hashCode();
            result = 31 * result + (this.clusterType.hashCode());
            result = 31 * result + (this.clusterVersion.hashCode());
            result = 31 * result + (this.instanceCount.hashCode());
            result = 31 * result + (this.netType.hashCode());
            result = 31 * result + (this.diskType != null ? this.diskType.hashCode() : 0);
            result = 31 * result + (this.privateSlbSpecification != null ? this.privateSlbSpecification.hashCode() : 0);
            result = 31 * result + (this.pubNetworkFlow != null ? this.pubNetworkFlow.hashCode() : 0);
            result = 31 * result + (this.pubSlbSpecification != null ? this.pubSlbSpecification.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            return result;
        }
    }
}
