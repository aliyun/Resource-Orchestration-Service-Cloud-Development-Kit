package com.aliyun.ros.cdk.edas;

/**
 * Properties for defining a `ALIYUN::EDAS::Cluster`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T01:43:50.589Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.ClusterProps")
@software.amazon.jsii.Jsii.Proxy(ClusterProps.Jsii$Proxy.class)
public interface ClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property clusterName: Cluster name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterName();

    /**
     * Property clusterType: Cluster type.
     * <p>
     * 1-Swarm cluster, 2-ECS cluster, 3-Kubernetes Cluster
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterType();

    /**
     * Property networkMode: Network Type.
     * <p>
     * 1- classic network, 2-VPC
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNetworkMode();

    /**
     * Property logicalRegionId: Custom namespace RegionId (format: Physical Region: custom namespace identifier).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLogicalRegionId() {
        return null;
    }

    /**
     * Property oversoldFactor: Docker CPU cluster oversold.
     * <p>
     * Support 2 (1: 2 ratio) / 4 (1: 4) / 8 (1: 8 ratio)
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOversoldFactor() {
        return null;
    }

    /**
     * Property resourceGroupId: Resource group id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property vpcId: VPC network ID.
     * <p>
     * If network selection VPC, this parameter Required
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
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
        java.lang.Object clusterName;
        java.lang.Object clusterType;
        java.lang.Object networkMode;
        java.lang.Object logicalRegionId;
        java.lang.Object oversoldFactor;
        java.lang.Object resourceGroupId;
        java.lang.Object vpcId;

        /**
         * Sets the value of {@link ClusterProps#getClusterName}
         * @param clusterName Property clusterName: Cluster name. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterName(java.lang.String clusterName) {
            this.clusterName = clusterName;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getClusterName}
         * @param clusterName Property clusterName: Cluster name. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterName(com.aliyun.ros.cdk.core.IResolvable clusterName) {
            this.clusterName = clusterName;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getClusterType}
         * @param clusterType Property clusterType: Cluster type. This parameter is required.
         *                    1-Swarm cluster, 2-ECS cluster, 3-Kubernetes Cluster
         * @return {@code this}
         */
        public Builder clusterType(java.lang.Number clusterType) {
            this.clusterType = clusterType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getClusterType}
         * @param clusterType Property clusterType: Cluster type. This parameter is required.
         *                    1-Swarm cluster, 2-ECS cluster, 3-Kubernetes Cluster
         * @return {@code this}
         */
        public Builder clusterType(com.aliyun.ros.cdk.core.IResolvable clusterType) {
            this.clusterType = clusterType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getNetworkMode}
         * @param networkMode Property networkMode: Network Type. This parameter is required.
         *                    1- classic network, 2-VPC
         * @return {@code this}
         */
        public Builder networkMode(java.lang.Number networkMode) {
            this.networkMode = networkMode;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getNetworkMode}
         * @param networkMode Property networkMode: Network Type. This parameter is required.
         *                    1- classic network, 2-VPC
         * @return {@code this}
         */
        public Builder networkMode(com.aliyun.ros.cdk.core.IResolvable networkMode) {
            this.networkMode = networkMode;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getLogicalRegionId}
         * @param logicalRegionId Property logicalRegionId: Custom namespace RegionId (format: Physical Region: custom namespace identifier).
         * @return {@code this}
         */
        public Builder logicalRegionId(java.lang.String logicalRegionId) {
            this.logicalRegionId = logicalRegionId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getLogicalRegionId}
         * @param logicalRegionId Property logicalRegionId: Custom namespace RegionId (format: Physical Region: custom namespace identifier).
         * @return {@code this}
         */
        public Builder logicalRegionId(com.aliyun.ros.cdk.core.IResolvable logicalRegionId) {
            this.logicalRegionId = logicalRegionId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getOversoldFactor}
         * @param oversoldFactor Property oversoldFactor: Docker CPU cluster oversold.
         *                       Support 2 (1: 2 ratio) / 4 (1: 4) / 8 (1: 8 ratio)
         * @return {@code this}
         */
        public Builder oversoldFactor(java.lang.Number oversoldFactor) {
            this.oversoldFactor = oversoldFactor;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getOversoldFactor}
         * @param oversoldFactor Property oversoldFactor: Docker CPU cluster oversold.
         *                       Support 2 (1: 2 ratio) / 4 (1: 4) / 8 (1: 8 ratio)
         * @return {@code this}
         */
        public Builder oversoldFactor(com.aliyun.ros.cdk.core.IResolvable oversoldFactor) {
            this.oversoldFactor = oversoldFactor;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getVpcId}
         * @param vpcId Property vpcId: VPC network ID.
         *              If network selection VPC, this parameter Required
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getVpcId}
         * @param vpcId Property vpcId: VPC network ID.
         *              If network selection VPC, this parameter Required
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ClusterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ClusterProps {
        private final java.lang.Object clusterName;
        private final java.lang.Object clusterType;
        private final java.lang.Object networkMode;
        private final java.lang.Object logicalRegionId;
        private final java.lang.Object oversoldFactor;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object vpcId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clusterName = software.amazon.jsii.Kernel.get(this, "clusterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterType = software.amazon.jsii.Kernel.get(this, "clusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkMode = software.amazon.jsii.Kernel.get(this, "networkMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logicalRegionId = software.amazon.jsii.Kernel.get(this, "logicalRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.oversoldFactor = software.amazon.jsii.Kernel.get(this, "oversoldFactor", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clusterName = java.util.Objects.requireNonNull(builder.clusterName, "clusterName is required");
            this.clusterType = java.util.Objects.requireNonNull(builder.clusterType, "clusterType is required");
            this.networkMode = java.util.Objects.requireNonNull(builder.networkMode, "networkMode is required");
            this.logicalRegionId = builder.logicalRegionId;
            this.oversoldFactor = builder.oversoldFactor;
            this.resourceGroupId = builder.resourceGroupId;
            this.vpcId = builder.vpcId;
        }

        @Override
        public final java.lang.Object getClusterName() {
            return this.clusterName;
        }

        @Override
        public final java.lang.Object getClusterType() {
            return this.clusterType;
        }

        @Override
        public final java.lang.Object getNetworkMode() {
            return this.networkMode;
        }

        @Override
        public final java.lang.Object getLogicalRegionId() {
            return this.logicalRegionId;
        }

        @Override
        public final java.lang.Object getOversoldFactor() {
            return this.oversoldFactor;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
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

            data.set("clusterName", om.valueToTree(this.getClusterName()));
            data.set("clusterType", om.valueToTree(this.getClusterType()));
            data.set("networkMode", om.valueToTree(this.getNetworkMode()));
            if (this.getLogicalRegionId() != null) {
                data.set("logicalRegionId", om.valueToTree(this.getLogicalRegionId()));
            }
            if (this.getOversoldFactor() != null) {
                data.set("oversoldFactor", om.valueToTree(this.getOversoldFactor()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.ClusterProps"));
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

            if (!clusterName.equals(that.clusterName)) return false;
            if (!clusterType.equals(that.clusterType)) return false;
            if (!networkMode.equals(that.networkMode)) return false;
            if (this.logicalRegionId != null ? !this.logicalRegionId.equals(that.logicalRegionId) : that.logicalRegionId != null) return false;
            if (this.oversoldFactor != null ? !this.oversoldFactor.equals(that.oversoldFactor) : that.oversoldFactor != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.vpcId != null ? this.vpcId.equals(that.vpcId) : that.vpcId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.clusterName.hashCode();
            result = 31 * result + (this.clusterType.hashCode());
            result = 31 * result + (this.networkMode.hashCode());
            result = 31 * result + (this.logicalRegionId != null ? this.logicalRegionId.hashCode() : 0);
            result = 31 * result + (this.oversoldFactor != null ? this.oversoldFactor.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            return result;
        }
    }
}
