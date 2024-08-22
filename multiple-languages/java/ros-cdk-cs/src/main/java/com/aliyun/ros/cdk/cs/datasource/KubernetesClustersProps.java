package com.aliyun.ros.cdk.cs.datasource;

/**
 * Properties for defining a <code>KubernetesClusters</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-kubernetesclusters
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:19.133Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.datasource.KubernetesClustersProps")
@software.amazon.jsii.Jsii.Proxy(KubernetesClustersProps.Jsii$Proxy.class)
public interface KubernetesClustersProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property clusterSpec: The specification of the cluster.
     * <p>
     * If you set the cluster type to ManagedKubernetes, you can use cluster specifications to distinguish clusters. Valid values:
     * ack.pro.small: professional managed Kubernetes cluster
     * ack.standard: standard managed Kubernetes cluster
     * By default, this parameter is empty. This indicates that the parameter is not used to filter clusters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterSpec() {
        return null;
    }

    /**
     * Property clusterType: The type of the cluster.
     * <p>
     * Valid values:
     * Kubernetes: dedicated Kubernetes cluster
     * ManagedKubernetes: managed Kubernetes cluster, serverless Kubernetes (ASK) cluster, or edge Kubernetes cluster
     * Ask: ASK cluster
     * ExternalKubernetes: registered external cluster
     * When you query an ASK cluster, the value specified when the cluster was created is returned.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterType() {
        return null;
    }

    /**
     * Property name: The name of the cluster.The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * Property profile: The identifier of the cluster.
     * <p>
     * If you set the cluster type to ManagedKubernetes, you can use cluster identifiers to distinguish clusters. Valid values:
     * Default: managed Kubernetes cluster
     * Serverless: ASK cluster
     * Edge: edge Kubernetes cluster
     * By default, this parameter is empty. This indicates that the parameter is not used to filter clusters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProfile() {
        return null;
    }

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
     * <li>Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link KubernetesClustersProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link KubernetesClustersProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<KubernetesClustersProps> {
        java.lang.Object clusterSpec;
        java.lang.Object clusterType;
        java.lang.Object name;
        java.lang.Object profile;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link KubernetesClustersProps#getClusterSpec}
         * @param clusterSpec Property clusterSpec: The specification of the cluster.
         *                    If you set the cluster type to ManagedKubernetes, you can use cluster specifications to distinguish clusters. Valid values:
         *                    ack.pro.small: professional managed Kubernetes cluster
         *                    ack.standard: standard managed Kubernetes cluster
         *                    By default, this parameter is empty. This indicates that the parameter is not used to filter clusters.
         * @return {@code this}
         */
        public Builder clusterSpec(java.lang.String clusterSpec) {
            this.clusterSpec = clusterSpec;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClustersProps#getClusterSpec}
         * @param clusterSpec Property clusterSpec: The specification of the cluster.
         *                    If you set the cluster type to ManagedKubernetes, you can use cluster specifications to distinguish clusters. Valid values:
         *                    ack.pro.small: professional managed Kubernetes cluster
         *                    ack.standard: standard managed Kubernetes cluster
         *                    By default, this parameter is empty. This indicates that the parameter is not used to filter clusters.
         * @return {@code this}
         */
        public Builder clusterSpec(com.aliyun.ros.cdk.core.IResolvable clusterSpec) {
            this.clusterSpec = clusterSpec;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClustersProps#getClusterType}
         * @param clusterType Property clusterType: The type of the cluster.
         *                    Valid values:
         *                    Kubernetes: dedicated Kubernetes cluster
         *                    ManagedKubernetes: managed Kubernetes cluster, serverless Kubernetes (ASK) cluster, or edge Kubernetes cluster
         *                    Ask: ASK cluster
         *                    ExternalKubernetes: registered external cluster
         *                    When you query an ASK cluster, the value specified when the cluster was created is returned.
         * @return {@code this}
         */
        public Builder clusterType(java.lang.String clusterType) {
            this.clusterType = clusterType;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClustersProps#getClusterType}
         * @param clusterType Property clusterType: The type of the cluster.
         *                    Valid values:
         *                    Kubernetes: dedicated Kubernetes cluster
         *                    ManagedKubernetes: managed Kubernetes cluster, serverless Kubernetes (ASK) cluster, or edge Kubernetes cluster
         *                    Ask: ASK cluster
         *                    ExternalKubernetes: registered external cluster
         *                    When you query an ASK cluster, the value specified when the cluster was created is returned.
         * @return {@code this}
         */
        public Builder clusterType(com.aliyun.ros.cdk.core.IResolvable clusterType) {
            this.clusterType = clusterType;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClustersProps#getName}
         * @param name Property name: The name of the cluster.The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClustersProps#getName}
         * @param name Property name: The name of the cluster.The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClustersProps#getProfile}
         * @param profile Property profile: The identifier of the cluster.
         *                If you set the cluster type to ManagedKubernetes, you can use cluster identifiers to distinguish clusters. Valid values:
         *                Default: managed Kubernetes cluster
         *                Serverless: ASK cluster
         *                Edge: edge Kubernetes cluster
         *                By default, this parameter is empty. This indicates that the parameter is not used to filter clusters.
         * @return {@code this}
         */
        public Builder profile(java.lang.String profile) {
            this.profile = profile;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClustersProps#getProfile}
         * @param profile Property profile: The identifier of the cluster.
         *                If you set the cluster type to ManagedKubernetes, you can use cluster identifiers to distinguish clusters. Valid values:
         *                Default: managed Kubernetes cluster
         *                Serverless: ASK cluster
         *                Edge: edge Kubernetes cluster
         *                By default, this parameter is empty. This indicates that the parameter is not used to filter clusters.
         * @return {@code this}
         */
        public Builder profile(com.aliyun.ros.cdk.core.IResolvable profile) {
            this.profile = profile;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClustersProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link KubernetesClustersProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link KubernetesClustersProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public KubernetesClustersProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link KubernetesClustersProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements KubernetesClustersProps {
        private final java.lang.Object clusterSpec;
        private final java.lang.Object clusterType;
        private final java.lang.Object name;
        private final java.lang.Object profile;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clusterSpec = software.amazon.jsii.Kernel.get(this, "clusterSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterType = software.amazon.jsii.Kernel.get(this, "clusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.profile = software.amazon.jsii.Kernel.get(this, "profile", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clusterSpec = builder.clusterSpec;
            this.clusterType = builder.clusterType;
            this.name = builder.name;
            this.profile = builder.profile;
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getClusterSpec() {
            return this.clusterSpec;
        }

        @Override
        public final java.lang.Object getClusterType() {
            return this.clusterType;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getProfile() {
            return this.profile;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getClusterSpec() != null) {
                data.set("clusterSpec", om.valueToTree(this.getClusterSpec()));
            }
            if (this.getClusterType() != null) {
                data.set("clusterType", om.valueToTree(this.getClusterType()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getProfile() != null) {
                data.set("profile", om.valueToTree(this.getProfile()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.datasource.KubernetesClustersProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            KubernetesClustersProps.Jsii$Proxy that = (KubernetesClustersProps.Jsii$Proxy) o;

            if (this.clusterSpec != null ? !this.clusterSpec.equals(that.clusterSpec) : that.clusterSpec != null) return false;
            if (this.clusterType != null ? !this.clusterType.equals(that.clusterType) : that.clusterType != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.profile != null ? !this.profile.equals(that.profile) : that.profile != null) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.clusterSpec != null ? this.clusterSpec.hashCode() : 0;
            result = 31 * result + (this.clusterType != null ? this.clusterType.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.profile != null ? this.profile.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
