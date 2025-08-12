package com.aliyun.ros.cdk.arms;

/**
 * Properties for defining a <code>Prometheus</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-prometheus
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:43.976Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.PrometheusProps")
@software.amazon.jsii.Jsii.Proxy(PrometheusProps.Jsii$Proxy.class)
public interface PrometheusProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property clusterType: Instance type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterType();

    /**
     * Property grafanaInstanceId: Grafana workspace ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGrafanaInstanceId();

    /**
     * Property prometheusName: The name of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPrometheusName();

    /**
     * Property clusterId: The ID of the cluster.
     * <p>
     * This parameter is required if you set ClusterType to ManagedKubernetes.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterId() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property securityGroupId: The ID of the custom resource group.
     * <p>
     * You can specify this parameter to bind the instance to the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
        return null;
    }

    /**
     * Property subClustersJson: The child instances of the Prometheus instance for GlobalView.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSubClustersJson() {
        return null;
    }

    /**
     * Property tags: Tags of prometheus.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.arms.RosPrometheus.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property vpcId: The ID of the virtual private cloud (VPC).
     * <p>
     * This parameter is required if you set ClusterType to ecs or create a serverless Kubernetes (ASK) managed cluster.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * Property vSwitchId: The ID of the vSwitch.
     * <p>
     * This parameter is required if you set ClusterType to ecs or create an ASK managed cluster.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link PrometheusProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link PrometheusProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<PrometheusProps> {
        java.lang.Object clusterType;
        java.lang.Object grafanaInstanceId;
        java.lang.Object prometheusName;
        java.lang.Object clusterId;
        java.lang.Object resourceGroupId;
        java.lang.Object securityGroupId;
        java.lang.Object subClustersJson;
        java.util.List<com.aliyun.ros.cdk.arms.RosPrometheus.TagsProperty> tags;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;

        /**
         * Sets the value of {@link PrometheusProps#getClusterType}
         * @param clusterType Property clusterType: Instance type. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterType(java.lang.String clusterType) {
            this.clusterType = clusterType;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusProps#getClusterType}
         * @param clusterType Property clusterType: Instance type. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterType(com.aliyun.ros.cdk.core.IResolvable clusterType) {
            this.clusterType = clusterType;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusProps#getGrafanaInstanceId}
         * @param grafanaInstanceId Property grafanaInstanceId: Grafana workspace ID. This parameter is required.
         * @return {@code this}
         */
        public Builder grafanaInstanceId(java.lang.String grafanaInstanceId) {
            this.grafanaInstanceId = grafanaInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusProps#getGrafanaInstanceId}
         * @param grafanaInstanceId Property grafanaInstanceId: Grafana workspace ID. This parameter is required.
         * @return {@code this}
         */
        public Builder grafanaInstanceId(com.aliyun.ros.cdk.core.IResolvable grafanaInstanceId) {
            this.grafanaInstanceId = grafanaInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusProps#getPrometheusName}
         * @param prometheusName Property prometheusName: The name of the resource. This parameter is required.
         * @return {@code this}
         */
        public Builder prometheusName(java.lang.String prometheusName) {
            this.prometheusName = prometheusName;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusProps#getPrometheusName}
         * @param prometheusName Property prometheusName: The name of the resource. This parameter is required.
         * @return {@code this}
         */
        public Builder prometheusName(com.aliyun.ros.cdk.core.IResolvable prometheusName) {
            this.prometheusName = prometheusName;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusProps#getClusterId}
         * @param clusterId Property clusterId: The ID of the cluster.
         *                  This parameter is required if you set ClusterType to ManagedKubernetes.
         * @return {@code this}
         */
        public Builder clusterId(java.lang.String clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusProps#getClusterId}
         * @param clusterId Property clusterId: The ID of the cluster.
         *                  This parameter is required if you set ClusterType to ManagedKubernetes.
         * @return {@code this}
         */
        public Builder clusterId(com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: The ID of the custom resource group.
         *                        You can specify this parameter to bind the instance to the resource group.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: The ID of the custom resource group.
         *                        You can specify this parameter to bind the instance to the resource group.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusProps#getSubClustersJson}
         * @param subClustersJson Property subClustersJson: The child instances of the Prometheus instance for GlobalView.
         * @return {@code this}
         */
        public Builder subClustersJson(java.util.List<? extends java.lang.Object> subClustersJson) {
            this.subClustersJson = subClustersJson;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusProps#getSubClustersJson}
         * @param subClustersJson Property subClustersJson: The child instances of the Prometheus instance for GlobalView.
         * @return {@code this}
         */
        public Builder subClustersJson(com.aliyun.ros.cdk.core.IResolvable subClustersJson) {
            this.subClustersJson = subClustersJson;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusProps#getTags}
         * @param tags Property tags: Tags of prometheus.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.arms.RosPrometheus.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.arms.RosPrometheus.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC).
         *              This parameter is required if you set ClusterType to ecs or create a serverless Kubernetes (ASK) managed cluster.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC).
         *              This parameter is required if you set ClusterType to ecs or create a serverless Kubernetes (ASK) managed cluster.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch.
         *                  This parameter is required if you set ClusterType to ecs or create an ASK managed cluster.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch.
         *                  This parameter is required if you set ClusterType to ecs or create an ASK managed cluster.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link PrometheusProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public PrometheusProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link PrometheusProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PrometheusProps {
        private final java.lang.Object clusterType;
        private final java.lang.Object grafanaInstanceId;
        private final java.lang.Object prometheusName;
        private final java.lang.Object clusterId;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object subClustersJson;
        private final java.util.List<com.aliyun.ros.cdk.arms.RosPrometheus.TagsProperty> tags;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clusterType = software.amazon.jsii.Kernel.get(this, "clusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.grafanaInstanceId = software.amazon.jsii.Kernel.get(this, "grafanaInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.prometheusName = software.amazon.jsii.Kernel.get(this, "prometheusName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterId = software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.subClustersJson = software.amazon.jsii.Kernel.get(this, "subClustersJson", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.arms.RosPrometheus.TagsProperty.class)));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clusterType = java.util.Objects.requireNonNull(builder.clusterType, "clusterType is required");
            this.grafanaInstanceId = java.util.Objects.requireNonNull(builder.grafanaInstanceId, "grafanaInstanceId is required");
            this.prometheusName = java.util.Objects.requireNonNull(builder.prometheusName, "prometheusName is required");
            this.clusterId = builder.clusterId;
            this.resourceGroupId = builder.resourceGroupId;
            this.securityGroupId = builder.securityGroupId;
            this.subClustersJson = builder.subClustersJson;
            this.tags = (java.util.List<com.aliyun.ros.cdk.arms.RosPrometheus.TagsProperty>)builder.tags;
            this.vpcId = builder.vpcId;
            this.vSwitchId = builder.vSwitchId;
        }

        @Override
        public final java.lang.Object getClusterType() {
            return this.clusterType;
        }

        @Override
        public final java.lang.Object getGrafanaInstanceId() {
            return this.grafanaInstanceId;
        }

        @Override
        public final java.lang.Object getPrometheusName() {
            return this.prometheusName;
        }

        @Override
        public final java.lang.Object getClusterId() {
            return this.clusterId;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.lang.Object getSubClustersJson() {
            return this.subClustersJson;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.arms.RosPrometheus.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("clusterType", om.valueToTree(this.getClusterType()));
            data.set("grafanaInstanceId", om.valueToTree(this.getGrafanaInstanceId()));
            data.set("prometheusName", om.valueToTree(this.getPrometheusName()));
            if (this.getClusterId() != null) {
                data.set("clusterId", om.valueToTree(this.getClusterId()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSecurityGroupId() != null) {
                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            }
            if (this.getSubClustersJson() != null) {
                data.set("subClustersJson", om.valueToTree(this.getSubClustersJson()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-arms.PrometheusProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            PrometheusProps.Jsii$Proxy that = (PrometheusProps.Jsii$Proxy) o;

            if (!clusterType.equals(that.clusterType)) return false;
            if (!grafanaInstanceId.equals(that.grafanaInstanceId)) return false;
            if (!prometheusName.equals(that.prometheusName)) return false;
            if (this.clusterId != null ? !this.clusterId.equals(that.clusterId) : that.clusterId != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            if (this.subClustersJson != null ? !this.subClustersJson.equals(that.subClustersJson) : that.subClustersJson != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            return this.vSwitchId != null ? this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.clusterType.hashCode();
            result = 31 * result + (this.grafanaInstanceId.hashCode());
            result = 31 * result + (this.prometheusName.hashCode());
            result = 31 * result + (this.clusterId != null ? this.clusterId.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.subClustersJson != null ? this.subClustersJson.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            return result;
        }
    }
}
