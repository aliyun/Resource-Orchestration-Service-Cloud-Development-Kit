package com.aliyun.ros.cdk.cs;

/**
 * Properties for defining a <code>RosClusterNodePool</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusternodepool
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:22.922Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosClusterNodePoolProps")
@software.amazon.jsii.Jsii.Proxy(RosClusterNodePoolProps.Jsii$Proxy.class)
public interface RosClusterNodePoolProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getScalingGroup();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoScaling() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKubernetesConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getManagement() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNodePoolInfo() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTeeConfig() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosClusterNodePoolProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosClusterNodePoolProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosClusterNodePoolProps> {
        java.lang.Object clusterId;
        java.lang.Object scalingGroup;
        java.lang.Object autoScaling;
        java.lang.Object count;
        java.lang.Object kubernetesConfig;
        java.lang.Object management;
        java.lang.Object nodePoolInfo;
        java.lang.Object teeConfig;

        /**
         * Sets the value of {@link RosClusterNodePoolProps#getClusterId}
         * @param clusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(java.lang.String clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterNodePoolProps#getClusterId}
         * @param clusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterNodePoolProps#getScalingGroup}
         * @param scalingGroup the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder scalingGroup(com.aliyun.ros.cdk.core.IResolvable scalingGroup) {
            this.scalingGroup = scalingGroup;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterNodePoolProps#getScalingGroup}
         * @param scalingGroup the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder scalingGroup(com.aliyun.ros.cdk.cs.RosClusterNodePool.ScalingGroupProperty scalingGroup) {
            this.scalingGroup = scalingGroup;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterNodePoolProps#getAutoScaling}
         * @param autoScaling the value to be set.
         * @return {@code this}
         */
        public Builder autoScaling(com.aliyun.ros.cdk.core.IResolvable autoScaling) {
            this.autoScaling = autoScaling;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterNodePoolProps#getAutoScaling}
         * @param autoScaling the value to be set.
         * @return {@code this}
         */
        public Builder autoScaling(com.aliyun.ros.cdk.cs.RosClusterNodePool.AutoScalingProperty autoScaling) {
            this.autoScaling = autoScaling;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterNodePoolProps#getCount}
         * @param count the value to be set.
         * @return {@code this}
         */
        public Builder count(java.lang.Number count) {
            this.count = count;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterNodePoolProps#getCount}
         * @param count the value to be set.
         * @return {@code this}
         */
        public Builder count(com.aliyun.ros.cdk.core.IResolvable count) {
            this.count = count;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterNodePoolProps#getKubernetesConfig}
         * @param kubernetesConfig the value to be set.
         * @return {@code this}
         */
        public Builder kubernetesConfig(com.aliyun.ros.cdk.core.IResolvable kubernetesConfig) {
            this.kubernetesConfig = kubernetesConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterNodePoolProps#getKubernetesConfig}
         * @param kubernetesConfig the value to be set.
         * @return {@code this}
         */
        public Builder kubernetesConfig(com.aliyun.ros.cdk.cs.RosClusterNodePool.KubernetesConfigProperty kubernetesConfig) {
            this.kubernetesConfig = kubernetesConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterNodePoolProps#getManagement}
         * @param management the value to be set.
         * @return {@code this}
         */
        public Builder management(com.aliyun.ros.cdk.core.IResolvable management) {
            this.management = management;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterNodePoolProps#getManagement}
         * @param management the value to be set.
         * @return {@code this}
         */
        public Builder management(com.aliyun.ros.cdk.cs.RosClusterNodePool.ManagementProperty management) {
            this.management = management;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterNodePoolProps#getNodePoolInfo}
         * @param nodePoolInfo the value to be set.
         * @return {@code this}
         */
        public Builder nodePoolInfo(com.aliyun.ros.cdk.core.IResolvable nodePoolInfo) {
            this.nodePoolInfo = nodePoolInfo;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterNodePoolProps#getNodePoolInfo}
         * @param nodePoolInfo the value to be set.
         * @return {@code this}
         */
        public Builder nodePoolInfo(com.aliyun.ros.cdk.cs.RosClusterNodePool.NodePoolInfoProperty nodePoolInfo) {
            this.nodePoolInfo = nodePoolInfo;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterNodePoolProps#getTeeConfig}
         * @param teeConfig the value to be set.
         * @return {@code this}
         */
        public Builder teeConfig(com.aliyun.ros.cdk.core.IResolvable teeConfig) {
            this.teeConfig = teeConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterNodePoolProps#getTeeConfig}
         * @param teeConfig the value to be set.
         * @return {@code this}
         */
        public Builder teeConfig(com.aliyun.ros.cdk.cs.RosClusterNodePool.TeeConfigProperty teeConfig) {
            this.teeConfig = teeConfig;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosClusterNodePoolProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosClusterNodePoolProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosClusterNodePoolProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosClusterNodePoolProps {
        private final java.lang.Object clusterId;
        private final java.lang.Object scalingGroup;
        private final java.lang.Object autoScaling;
        private final java.lang.Object count;
        private final java.lang.Object kubernetesConfig;
        private final java.lang.Object management;
        private final java.lang.Object nodePoolInfo;
        private final java.lang.Object teeConfig;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clusterId = software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scalingGroup = software.amazon.jsii.Kernel.get(this, "scalingGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoScaling = software.amazon.jsii.Kernel.get(this, "autoScaling", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.count = software.amazon.jsii.Kernel.get(this, "count", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.kubernetesConfig = software.amazon.jsii.Kernel.get(this, "kubernetesConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.management = software.amazon.jsii.Kernel.get(this, "management", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nodePoolInfo = software.amazon.jsii.Kernel.get(this, "nodePoolInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.teeConfig = software.amazon.jsii.Kernel.get(this, "teeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clusterId = java.util.Objects.requireNonNull(builder.clusterId, "clusterId is required");
            this.scalingGroup = java.util.Objects.requireNonNull(builder.scalingGroup, "scalingGroup is required");
            this.autoScaling = builder.autoScaling;
            this.count = builder.count;
            this.kubernetesConfig = builder.kubernetesConfig;
            this.management = builder.management;
            this.nodePoolInfo = builder.nodePoolInfo;
            this.teeConfig = builder.teeConfig;
        }

        @Override
        public final java.lang.Object getClusterId() {
            return this.clusterId;
        }

        @Override
        public final java.lang.Object getScalingGroup() {
            return this.scalingGroup;
        }

        @Override
        public final java.lang.Object getAutoScaling() {
            return this.autoScaling;
        }

        @Override
        public final java.lang.Object getCount() {
            return this.count;
        }

        @Override
        public final java.lang.Object getKubernetesConfig() {
            return this.kubernetesConfig;
        }

        @Override
        public final java.lang.Object getManagement() {
            return this.management;
        }

        @Override
        public final java.lang.Object getNodePoolInfo() {
            return this.nodePoolInfo;
        }

        @Override
        public final java.lang.Object getTeeConfig() {
            return this.teeConfig;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("clusterId", om.valueToTree(this.getClusterId()));
            data.set("scalingGroup", om.valueToTree(this.getScalingGroup()));
            if (this.getAutoScaling() != null) {
                data.set("autoScaling", om.valueToTree(this.getAutoScaling()));
            }
            if (this.getCount() != null) {
                data.set("count", om.valueToTree(this.getCount()));
            }
            if (this.getKubernetesConfig() != null) {
                data.set("kubernetesConfig", om.valueToTree(this.getKubernetesConfig()));
            }
            if (this.getManagement() != null) {
                data.set("management", om.valueToTree(this.getManagement()));
            }
            if (this.getNodePoolInfo() != null) {
                data.set("nodePoolInfo", om.valueToTree(this.getNodePoolInfo()));
            }
            if (this.getTeeConfig() != null) {
                data.set("teeConfig", om.valueToTree(this.getTeeConfig()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosClusterNodePoolProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosClusterNodePoolProps.Jsii$Proxy that = (RosClusterNodePoolProps.Jsii$Proxy) o;

            if (!clusterId.equals(that.clusterId)) return false;
            if (!scalingGroup.equals(that.scalingGroup)) return false;
            if (this.autoScaling != null ? !this.autoScaling.equals(that.autoScaling) : that.autoScaling != null) return false;
            if (this.count != null ? !this.count.equals(that.count) : that.count != null) return false;
            if (this.kubernetesConfig != null ? !this.kubernetesConfig.equals(that.kubernetesConfig) : that.kubernetesConfig != null) return false;
            if (this.management != null ? !this.management.equals(that.management) : that.management != null) return false;
            if (this.nodePoolInfo != null ? !this.nodePoolInfo.equals(that.nodePoolInfo) : that.nodePoolInfo != null) return false;
            return this.teeConfig != null ? this.teeConfig.equals(that.teeConfig) : that.teeConfig == null;
        }

        @Override
        public final int hashCode() {
            int result = this.clusterId.hashCode();
            result = 31 * result + (this.scalingGroup.hashCode());
            result = 31 * result + (this.autoScaling != null ? this.autoScaling.hashCode() : 0);
            result = 31 * result + (this.count != null ? this.count.hashCode() : 0);
            result = 31 * result + (this.kubernetesConfig != null ? this.kubernetesConfig.hashCode() : 0);
            result = 31 * result + (this.management != null ? this.management.hashCode() : 0);
            result = 31 * result + (this.nodePoolInfo != null ? this.nodePoolInfo.hashCode() : 0);
            result = 31 * result + (this.teeConfig != null ? this.teeConfig.hashCode() : 0);
            return result;
        }
    }
}
