package com.aliyun.ros.cdk.arms;

/**
 * Properties for defining a <code>ManagedPrometheus</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-managedprometheus
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:04.696Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.ManagedPrometheusProps")
@software.amazon.jsii.Jsii.Proxy(ManagedPrometheusProps.Jsii$Proxy.class)
public interface ManagedPrometheusProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property clusterType: The type of the cluster.
     * <p>
     * Currently, only ask, ecs and one clusters are supported. Default is ecs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterType();

    /**
     * Property securityGroupId: The security group ID of the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSecurityGroupId();

    /**
     * Property vpcId: The vpc ID of the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * Property vSwitchId: The vswith ID of the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

    /**
     * Property clusterId: The ID of the Kubernetes cluster of Alibaba Cloud Container Service for Kubernetes.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterId() {
        return null;
    }

    /**
     * Property clusterName: The name of the cluster.
     * <p>
     * Required when the ClusterType is ecs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterName() {
        return null;
    }

    /**
     * Property grafanaInstanceId: The ID of the managed Grafana workspace bound to the cluster.
     * <p>
     * When empty or "free", binds to the shared version of Grafana.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGrafanaInstanceId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ManagedPrometheusProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ManagedPrometheusProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ManagedPrometheusProps> {
        java.lang.Object clusterType;
        java.lang.Object securityGroupId;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object clusterId;
        java.lang.Object clusterName;
        java.lang.Object grafanaInstanceId;

        /**
         * Sets the value of {@link ManagedPrometheusProps#getClusterType}
         * @param clusterType Property clusterType: The type of the cluster. This parameter is required.
         *                    Currently, only ask, ecs and one clusters are supported. Default is ecs.
         * @return {@code this}
         */
        public Builder clusterType(java.lang.String clusterType) {
            this.clusterType = clusterType;
            return this;
        }

        /**
         * Sets the value of {@link ManagedPrometheusProps#getClusterType}
         * @param clusterType Property clusterType: The type of the cluster. This parameter is required.
         *                    Currently, only ask, ecs and one clusters are supported. Default is ecs.
         * @return {@code this}
         */
        public Builder clusterType(com.aliyun.ros.cdk.core.IResolvable clusterType) {
            this.clusterType = clusterType;
            return this;
        }

        /**
         * Sets the value of {@link ManagedPrometheusProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: The security group ID of the cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ManagedPrometheusProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: The security group ID of the cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ManagedPrometheusProps#getVpcId}
         * @param vpcId Property vpcId: The vpc ID of the cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ManagedPrometheusProps#getVpcId}
         * @param vpcId Property vpcId: The vpc ID of the cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ManagedPrometheusProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The vswith ID of the cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ManagedPrometheusProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The vswith ID of the cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ManagedPrometheusProps#getClusterId}
         * @param clusterId Property clusterId: The ID of the Kubernetes cluster of Alibaba Cloud Container Service for Kubernetes.
         * @return {@code this}
         */
        public Builder clusterId(java.lang.String clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link ManagedPrometheusProps#getClusterId}
         * @param clusterId Property clusterId: The ID of the Kubernetes cluster of Alibaba Cloud Container Service for Kubernetes.
         * @return {@code this}
         */
        public Builder clusterId(com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link ManagedPrometheusProps#getClusterName}
         * @param clusterName Property clusterName: The name of the cluster.
         *                    Required when the ClusterType is ecs.
         * @return {@code this}
         */
        public Builder clusterName(java.lang.String clusterName) {
            this.clusterName = clusterName;
            return this;
        }

        /**
         * Sets the value of {@link ManagedPrometheusProps#getClusterName}
         * @param clusterName Property clusterName: The name of the cluster.
         *                    Required when the ClusterType is ecs.
         * @return {@code this}
         */
        public Builder clusterName(com.aliyun.ros.cdk.core.IResolvable clusterName) {
            this.clusterName = clusterName;
            return this;
        }

        /**
         * Sets the value of {@link ManagedPrometheusProps#getGrafanaInstanceId}
         * @param grafanaInstanceId Property grafanaInstanceId: The ID of the managed Grafana workspace bound to the cluster.
         *                          When empty or "free", binds to the shared version of Grafana.
         * @return {@code this}
         */
        public Builder grafanaInstanceId(java.lang.String grafanaInstanceId) {
            this.grafanaInstanceId = grafanaInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link ManagedPrometheusProps#getGrafanaInstanceId}
         * @param grafanaInstanceId Property grafanaInstanceId: The ID of the managed Grafana workspace bound to the cluster.
         *                          When empty or "free", binds to the shared version of Grafana.
         * @return {@code this}
         */
        public Builder grafanaInstanceId(com.aliyun.ros.cdk.core.IResolvable grafanaInstanceId) {
            this.grafanaInstanceId = grafanaInstanceId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ManagedPrometheusProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ManagedPrometheusProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ManagedPrometheusProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ManagedPrometheusProps {
        private final java.lang.Object clusterType;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object clusterId;
        private final java.lang.Object clusterName;
        private final java.lang.Object grafanaInstanceId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clusterType = software.amazon.jsii.Kernel.get(this, "clusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterId = software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterName = software.amazon.jsii.Kernel.get(this, "clusterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.grafanaInstanceId = software.amazon.jsii.Kernel.get(this, "grafanaInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clusterType = java.util.Objects.requireNonNull(builder.clusterType, "clusterType is required");
            this.securityGroupId = java.util.Objects.requireNonNull(builder.securityGroupId, "securityGroupId is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
            this.clusterId = builder.clusterId;
            this.clusterName = builder.clusterName;
            this.grafanaInstanceId = builder.grafanaInstanceId;
        }

        @Override
        public final java.lang.Object getClusterType() {
            return this.clusterType;
        }

        @Override
        public final java.lang.Object getSecurityGroupId() {
            return this.securityGroupId;
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
        public final java.lang.Object getClusterId() {
            return this.clusterId;
        }

        @Override
        public final java.lang.Object getClusterName() {
            return this.clusterName;
        }

        @Override
        public final java.lang.Object getGrafanaInstanceId() {
            return this.grafanaInstanceId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("clusterType", om.valueToTree(this.getClusterType()));
            data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            if (this.getClusterId() != null) {
                data.set("clusterId", om.valueToTree(this.getClusterId()));
            }
            if (this.getClusterName() != null) {
                data.set("clusterName", om.valueToTree(this.getClusterName()));
            }
            if (this.getGrafanaInstanceId() != null) {
                data.set("grafanaInstanceId", om.valueToTree(this.getGrafanaInstanceId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-arms.ManagedPrometheusProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ManagedPrometheusProps.Jsii$Proxy that = (ManagedPrometheusProps.Jsii$Proxy) o;

            if (!clusterType.equals(that.clusterType)) return false;
            if (!securityGroupId.equals(that.securityGroupId)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (!vSwitchId.equals(that.vSwitchId)) return false;
            if (this.clusterId != null ? !this.clusterId.equals(that.clusterId) : that.clusterId != null) return false;
            if (this.clusterName != null ? !this.clusterName.equals(that.clusterName) : that.clusterName != null) return false;
            return this.grafanaInstanceId != null ? this.grafanaInstanceId.equals(that.grafanaInstanceId) : that.grafanaInstanceId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.clusterType.hashCode();
            result = 31 * result + (this.securityGroupId.hashCode());
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.vSwitchId.hashCode());
            result = 31 * result + (this.clusterId != null ? this.clusterId.hashCode() : 0);
            result = 31 * result + (this.clusterName != null ? this.clusterName.hashCode() : 0);
            result = 31 * result + (this.grafanaInstanceId != null ? this.grafanaInstanceId.hashCode() : 0);
            return result;
        }
    }
}
