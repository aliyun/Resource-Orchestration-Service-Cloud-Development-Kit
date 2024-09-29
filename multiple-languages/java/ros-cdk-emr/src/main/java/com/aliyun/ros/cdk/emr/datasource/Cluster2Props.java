package com.aliyun.ros.cdk.emr.datasource;

/**
 * Properties for defining a <code>Cluster2</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-emr-cluster2
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:39.573Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.datasource.Cluster2Props")
@software.amazon.jsii.Jsii.Proxy(Cluster2Props.Jsii$Proxy.class)
public interface Cluster2Props extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property clusterIds: The list of emr cluster id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterIds() {
        return null;
    }

    /**
     * Property clusterName: The name of cluster.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterName() {
        return null;
    }

    /**
     * Property clusterStates: The list of emr cluster state.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterStates() {
        return null;
    }

    /**
     * Property clusterType: The list of emr cluster type.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterType() {
        return null;
    }

    /**
     * Property paymentTypes: The payment type of emr cluster.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPaymentTypes() {
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
     * Property resourceGroupId: The resource group id of emr cluster.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property tags: Tags of emr cluster.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.emr.datasource.RosCluster2.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link Cluster2Props}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link Cluster2Props}
     */
    public static final class Builder implements software.amazon.jsii.Builder<Cluster2Props> {
        java.lang.Object clusterIds;
        java.lang.Object clusterName;
        java.lang.Object clusterStates;
        java.lang.Object clusterType;
        java.lang.Object paymentTypes;
        java.lang.Object refreshOptions;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.emr.datasource.RosCluster2.TagsProperty> tags;

        /**
         * Sets the value of {@link Cluster2Props#getClusterIds}
         * @param clusterIds Property clusterIds: The list of emr cluster id.
         * @return {@code this}
         */
        public Builder clusterIds(com.aliyun.ros.cdk.core.IResolvable clusterIds) {
            this.clusterIds = clusterIds;
            return this;
        }

        /**
         * Sets the value of {@link Cluster2Props#getClusterIds}
         * @param clusterIds Property clusterIds: The list of emr cluster id.
         * @return {@code this}
         */
        public Builder clusterIds(java.util.List<? extends java.lang.Object> clusterIds) {
            this.clusterIds = clusterIds;
            return this;
        }

        /**
         * Sets the value of {@link Cluster2Props#getClusterName}
         * @param clusterName Property clusterName: The name of cluster.
         * @return {@code this}
         */
        public Builder clusterName(java.lang.String clusterName) {
            this.clusterName = clusterName;
            return this;
        }

        /**
         * Sets the value of {@link Cluster2Props#getClusterName}
         * @param clusterName Property clusterName: The name of cluster.
         * @return {@code this}
         */
        public Builder clusterName(com.aliyun.ros.cdk.core.IResolvable clusterName) {
            this.clusterName = clusterName;
            return this;
        }

        /**
         * Sets the value of {@link Cluster2Props#getClusterStates}
         * @param clusterStates Property clusterStates: The list of emr cluster state.
         * @return {@code this}
         */
        public Builder clusterStates(com.aliyun.ros.cdk.core.IResolvable clusterStates) {
            this.clusterStates = clusterStates;
            return this;
        }

        /**
         * Sets the value of {@link Cluster2Props#getClusterStates}
         * @param clusterStates Property clusterStates: The list of emr cluster state.
         * @return {@code this}
         */
        public Builder clusterStates(java.util.List<? extends java.lang.Object> clusterStates) {
            this.clusterStates = clusterStates;
            return this;
        }

        /**
         * Sets the value of {@link Cluster2Props#getClusterType}
         * @param clusterType Property clusterType: The list of emr cluster type.
         * @return {@code this}
         */
        public Builder clusterType(com.aliyun.ros.cdk.core.IResolvable clusterType) {
            this.clusterType = clusterType;
            return this;
        }

        /**
         * Sets the value of {@link Cluster2Props#getClusterType}
         * @param clusterType Property clusterType: The list of emr cluster type.
         * @return {@code this}
         */
        public Builder clusterType(java.util.List<? extends java.lang.Object> clusterType) {
            this.clusterType = clusterType;
            return this;
        }

        /**
         * Sets the value of {@link Cluster2Props#getPaymentTypes}
         * @param paymentTypes Property paymentTypes: The payment type of emr cluster.
         * @return {@code this}
         */
        public Builder paymentTypes(com.aliyun.ros.cdk.core.IResolvable paymentTypes) {
            this.paymentTypes = paymentTypes;
            return this;
        }

        /**
         * Sets the value of {@link Cluster2Props#getPaymentTypes}
         * @param paymentTypes Property paymentTypes: The payment type of emr cluster.
         * @return {@code this}
         */
        public Builder paymentTypes(java.util.List<? extends java.lang.Object> paymentTypes) {
            this.paymentTypes = paymentTypes;
            return this;
        }

        /**
         * Sets the value of {@link Cluster2Props#getRefreshOptions}
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
         * Sets the value of {@link Cluster2Props#getRefreshOptions}
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
         * Sets the value of {@link Cluster2Props#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The resource group id of emr cluster.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link Cluster2Props#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The resource group id of emr cluster.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link Cluster2Props#getTags}
         * @param tags Property tags: Tags of emr cluster.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.emr.datasource.RosCluster2.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.emr.datasource.RosCluster2.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link Cluster2Props}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public Cluster2Props build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link Cluster2Props}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements Cluster2Props {
        private final java.lang.Object clusterIds;
        private final java.lang.Object clusterName;
        private final java.lang.Object clusterStates;
        private final java.lang.Object clusterType;
        private final java.lang.Object paymentTypes;
        private final java.lang.Object refreshOptions;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.emr.datasource.RosCluster2.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clusterIds = software.amazon.jsii.Kernel.get(this, "clusterIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterName = software.amazon.jsii.Kernel.get(this, "clusterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterStates = software.amazon.jsii.Kernel.get(this, "clusterStates", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterType = software.amazon.jsii.Kernel.get(this, "clusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.paymentTypes = software.amazon.jsii.Kernel.get(this, "paymentTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.emr.datasource.RosCluster2.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clusterIds = builder.clusterIds;
            this.clusterName = builder.clusterName;
            this.clusterStates = builder.clusterStates;
            this.clusterType = builder.clusterType;
            this.paymentTypes = builder.paymentTypes;
            this.refreshOptions = builder.refreshOptions;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.emr.datasource.RosCluster2.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getClusterIds() {
            return this.clusterIds;
        }

        @Override
        public final java.lang.Object getClusterName() {
            return this.clusterName;
        }

        @Override
        public final java.lang.Object getClusterStates() {
            return this.clusterStates;
        }

        @Override
        public final java.lang.Object getClusterType() {
            return this.clusterType;
        }

        @Override
        public final java.lang.Object getPaymentTypes() {
            return this.paymentTypes;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.emr.datasource.RosCluster2.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getClusterIds() != null) {
                data.set("clusterIds", om.valueToTree(this.getClusterIds()));
            }
            if (this.getClusterName() != null) {
                data.set("clusterName", om.valueToTree(this.getClusterName()));
            }
            if (this.getClusterStates() != null) {
                data.set("clusterStates", om.valueToTree(this.getClusterStates()));
            }
            if (this.getClusterType() != null) {
                data.set("clusterType", om.valueToTree(this.getClusterType()));
            }
            if (this.getPaymentTypes() != null) {
                data.set("paymentTypes", om.valueToTree(this.getPaymentTypes()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.datasource.Cluster2Props"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            Cluster2Props.Jsii$Proxy that = (Cluster2Props.Jsii$Proxy) o;

            if (this.clusterIds != null ? !this.clusterIds.equals(that.clusterIds) : that.clusterIds != null) return false;
            if (this.clusterName != null ? !this.clusterName.equals(that.clusterName) : that.clusterName != null) return false;
            if (this.clusterStates != null ? !this.clusterStates.equals(that.clusterStates) : that.clusterStates != null) return false;
            if (this.clusterType != null ? !this.clusterType.equals(that.clusterType) : that.clusterType != null) return false;
            if (this.paymentTypes != null ? !this.paymentTypes.equals(that.paymentTypes) : that.paymentTypes != null) return false;
            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.clusterIds != null ? this.clusterIds.hashCode() : 0;
            result = 31 * result + (this.clusterName != null ? this.clusterName.hashCode() : 0);
            result = 31 * result + (this.clusterStates != null ? this.clusterStates.hashCode() : 0);
            result = 31 * result + (this.clusterType != null ? this.clusterType.hashCode() : 0);
            result = 31 * result + (this.paymentTypes != null ? this.paymentTypes.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
