package com.aliyun.ros.cdk.dashvector;

/**
 * Properties for defining a <code>Cluster</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dashvector-cluster
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:03.605Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dashvector.$Module.class, fqn = "@alicloud/ros-cdk-dashvector.ClusterProps")
@software.amazon.jsii.Jsii.Proxy(ClusterProps.Jsii$Proxy.class)
public interface ClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property clusterName: The name of cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterName();

    /**
     * Property clusterType: The type of cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterType();

    /**
     * Property replicaCount: The number of replicas.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getReplicaCount();

    /**
     * Property ignoreExisting: Whether to ignore existing dash vector cluster False: ROS will perform a uniqueness check.If the dash vector cluster exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If the dash vector cluster exists, the creation process will be ignored. If the dash vector cluster is not created by ROS, it will be ignored during update and delete stage.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIgnoreExisting() {
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
        java.lang.Object replicaCount;
        java.lang.Object ignoreExisting;

        /**
         * Sets the value of {@link ClusterProps#getClusterName}
         * @param clusterName Property clusterName: The name of cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterName(java.lang.String clusterName) {
            this.clusterName = clusterName;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getClusterName}
         * @param clusterName Property clusterName: The name of cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterName(com.aliyun.ros.cdk.core.IResolvable clusterName) {
            this.clusterName = clusterName;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getClusterType}
         * @param clusterType Property clusterType: The type of cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterType(java.lang.String clusterType) {
            this.clusterType = clusterType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getClusterType}
         * @param clusterType Property clusterType: The type of cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterType(com.aliyun.ros.cdk.core.IResolvable clusterType) {
            this.clusterType = clusterType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getReplicaCount}
         * @param replicaCount Property replicaCount: The number of replicas. This parameter is required.
         * @return {@code this}
         */
        public Builder replicaCount(java.lang.Number replicaCount) {
            this.replicaCount = replicaCount;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getReplicaCount}
         * @param replicaCount Property replicaCount: The number of replicas. This parameter is required.
         * @return {@code this}
         */
        public Builder replicaCount(com.aliyun.ros.cdk.core.IResolvable replicaCount) {
            this.replicaCount = replicaCount;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getIgnoreExisting}
         * @param ignoreExisting Property ignoreExisting: Whether to ignore existing dash vector cluster False: ROS will perform a uniqueness check.If the dash vector cluster exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If the dash vector cluster exists, the creation process will be ignored. If the dash vector cluster is not created by ROS, it will be ignored during update and delete stage.
         * @return {@code this}
         */
        public Builder ignoreExisting(java.lang.Boolean ignoreExisting) {
            this.ignoreExisting = ignoreExisting;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getIgnoreExisting}
         * @param ignoreExisting Property ignoreExisting: Whether to ignore existing dash vector cluster False: ROS will perform a uniqueness check.If the dash vector cluster exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If the dash vector cluster exists, the creation process will be ignored. If the dash vector cluster is not created by ROS, it will be ignored during update and delete stage.
         * @return {@code this}
         */
        public Builder ignoreExisting(com.aliyun.ros.cdk.core.IResolvable ignoreExisting) {
            this.ignoreExisting = ignoreExisting;
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
        private final java.lang.Object replicaCount;
        private final java.lang.Object ignoreExisting;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clusterName = software.amazon.jsii.Kernel.get(this, "clusterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterType = software.amazon.jsii.Kernel.get(this, "clusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.replicaCount = software.amazon.jsii.Kernel.get(this, "replicaCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ignoreExisting = software.amazon.jsii.Kernel.get(this, "ignoreExisting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clusterName = java.util.Objects.requireNonNull(builder.clusterName, "clusterName is required");
            this.clusterType = java.util.Objects.requireNonNull(builder.clusterType, "clusterType is required");
            this.replicaCount = java.util.Objects.requireNonNull(builder.replicaCount, "replicaCount is required");
            this.ignoreExisting = builder.ignoreExisting;
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
        public final java.lang.Object getReplicaCount() {
            return this.replicaCount;
        }

        @Override
        public final java.lang.Object getIgnoreExisting() {
            return this.ignoreExisting;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("clusterName", om.valueToTree(this.getClusterName()));
            data.set("clusterType", om.valueToTree(this.getClusterType()));
            data.set("replicaCount", om.valueToTree(this.getReplicaCount()));
            if (this.getIgnoreExisting() != null) {
                data.set("ignoreExisting", om.valueToTree(this.getIgnoreExisting()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dashvector.ClusterProps"));
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
            if (!replicaCount.equals(that.replicaCount)) return false;
            return this.ignoreExisting != null ? this.ignoreExisting.equals(that.ignoreExisting) : that.ignoreExisting == null;
        }

        @Override
        public final int hashCode() {
            int result = this.clusterName.hashCode();
            result = 31 * result + (this.clusterType.hashCode());
            result = 31 * result + (this.replicaCount.hashCode());
            result = 31 * result + (this.ignoreExisting != null ? this.ignoreExisting.hashCode() : 0);
            return result;
        }
    }
}
