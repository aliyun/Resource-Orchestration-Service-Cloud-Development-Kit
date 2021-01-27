package com.aliyun.ros.cdk.edas;

/**
 * Properties for defining a `ALIYUN::EDAS::Cluster`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.835Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosClusterProps")
@software.amazon.jsii.Jsii.Proxy(RosClusterProps.Jsii$Proxy.class)
public interface RosClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getClusterName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Number getClusterType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Number getNetworkMode();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getLogicalRegionId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getOversoldFactor() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getVpcId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosClusterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosClusterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosClusterProps> {
        private java.lang.String clusterName;
        private java.lang.Number clusterType;
        private java.lang.Number networkMode;
        private java.lang.String logicalRegionId;
        private java.lang.Number oversoldFactor;
        private java.lang.String vpcId;

        /**
         * Sets the value of {@link RosClusterProps#getClusterName}
         * @param clusterName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterName(java.lang.String clusterName) {
            this.clusterName = clusterName;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getClusterType}
         * @param clusterType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterType(java.lang.Number clusterType) {
            this.clusterType = clusterType;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getNetworkMode}
         * @param networkMode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder networkMode(java.lang.Number networkMode) {
            this.networkMode = networkMode;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getLogicalRegionId}
         * @param logicalRegionId the value to be set.
         * @return {@code this}
         */
        public Builder logicalRegionId(java.lang.String logicalRegionId) {
            this.logicalRegionId = logicalRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getOversoldFactor}
         * @param oversoldFactor the value to be set.
         * @return {@code this}
         */
        public Builder oversoldFactor(java.lang.Number oversoldFactor) {
            this.oversoldFactor = oversoldFactor;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosClusterProps build() {
            return new Jsii$Proxy(clusterName, clusterType, networkMode, logicalRegionId, oversoldFactor, vpcId);
        }
    }

    /**
     * An implementation for {@link RosClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosClusterProps {
        private final java.lang.String clusterName;
        private final java.lang.Number clusterType;
        private final java.lang.Number networkMode;
        private final java.lang.String logicalRegionId;
        private final java.lang.Number oversoldFactor;
        private final java.lang.String vpcId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clusterName = software.amazon.jsii.Kernel.get(this, "clusterName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.clusterType = software.amazon.jsii.Kernel.get(this, "clusterType", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.networkMode = software.amazon.jsii.Kernel.get(this, "networkMode", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.logicalRegionId = software.amazon.jsii.Kernel.get(this, "logicalRegionId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.oversoldFactor = software.amazon.jsii.Kernel.get(this, "oversoldFactor", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String clusterName, final java.lang.Number clusterType, final java.lang.Number networkMode, final java.lang.String logicalRegionId, final java.lang.Number oversoldFactor, final java.lang.String vpcId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clusterName = java.util.Objects.requireNonNull(clusterName, "clusterName is required");
            this.clusterType = java.util.Objects.requireNonNull(clusterType, "clusterType is required");
            this.networkMode = java.util.Objects.requireNonNull(networkMode, "networkMode is required");
            this.logicalRegionId = logicalRegionId;
            this.oversoldFactor = oversoldFactor;
            this.vpcId = vpcId;
        }

        @Override
        public final java.lang.String getClusterName() {
            return this.clusterName;
        }

        @Override
        public final java.lang.Number getClusterType() {
            return this.clusterType;
        }

        @Override
        public final java.lang.Number getNetworkMode() {
            return this.networkMode;
        }

        @Override
        public final java.lang.String getLogicalRegionId() {
            return this.logicalRegionId;
        }

        @Override
        public final java.lang.Number getOversoldFactor() {
            return this.oversoldFactor;
        }

        @Override
        public final java.lang.String getVpcId() {
            return this.vpcId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("clusterName", om.valueToTree(this.getClusterName()));
            data.set("clusterType", om.valueToTree(this.getClusterType()));
            data.set("networkMode", om.valueToTree(this.getNetworkMode()));
            if (this.getLogicalRegionId() != null) {
                data.set("logicalRegionId", om.valueToTree(this.getLogicalRegionId()));
            }
            if (this.getOversoldFactor() != null) {
                data.set("oversoldFactor", om.valueToTree(this.getOversoldFactor()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosClusterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosClusterProps.Jsii$Proxy that = (RosClusterProps.Jsii$Proxy) o;

            if (!clusterName.equals(that.clusterName)) return false;
            if (!clusterType.equals(that.clusterType)) return false;
            if (!networkMode.equals(that.networkMode)) return false;
            if (this.logicalRegionId != null ? !this.logicalRegionId.equals(that.logicalRegionId) : that.logicalRegionId != null) return false;
            if (this.oversoldFactor != null ? !this.oversoldFactor.equals(that.oversoldFactor) : that.oversoldFactor != null) return false;
            return this.vpcId != null ? this.vpcId.equals(that.vpcId) : that.vpcId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.clusterName.hashCode();
            result = 31 * result + (this.clusterType.hashCode());
            result = 31 * result + (this.networkMode.hashCode());
            result = 31 * result + (this.logicalRegionId != null ? this.logicalRegionId.hashCode() : 0);
            result = 31 * result + (this.oversoldFactor != null ? this.oversoldFactor.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            return result;
        }
    }
}
