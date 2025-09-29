package com.aliyun.ros.cdk.ots;

/**
 * Properties for defining a <code>InstanceV2</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-instancev2
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:27.451Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ots.$Module.class, fqn = "@alicloud/ros-cdk-ots.InstanceV2Props")
@software.amazon.jsii.Jsii.Proxy(InstanceV2Props.Jsii$Proxy.class)
public interface InstanceV2Props extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property clusterType: Cluster type (i.e. instance specification). Enumeration values: SSD: High performance. HYBRID: Capacity type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterType();

    /**
     * Property instanceName: Instance name.The naming specifications for instances are as follows: Must consist of English letters, numbers or dash lines (-). The first character must be in English letters. The end character cannot be a dash (-). Insensitive case. The length is between 3 and 16 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceName();

    /**
     * Property instanceDescription: Example description.
     * <p>
     * The length is limited to between 3-256 characters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceDescription() {
        return null;
    }

    /**
     * Property networkSourceAcl: The allowed-network source list.
     * <p>
     * All networks are allowed by default.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkSourceAcl() {
        return null;
    }

    /**
     * Property networkTypeAcl: The instance allows the network type list, which is allowed by default.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkTypeAcl() {
        return null;
    }

    /**
     * Property resourceGroupId: Resource Group ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property tags: The list of instance tags in the form of key/value pairs.
     * <p>
     * You can define a maximum of 20 tags for instance.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ots.RosInstanceV2.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link InstanceV2Props}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link InstanceV2Props}
     */
    public static final class Builder implements software.amazon.jsii.Builder<InstanceV2Props> {
        java.lang.Object clusterType;
        java.lang.Object instanceName;
        java.lang.Object instanceDescription;
        java.lang.Object networkSourceAcl;
        java.lang.Object networkTypeAcl;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.ots.RosInstanceV2.TagsProperty> tags;

        /**
         * Sets the value of {@link InstanceV2Props#getClusterType}
         * @param clusterType Property clusterType: Cluster type (i.e. instance specification). Enumeration values: SSD: High performance. HYBRID: Capacity type. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterType(java.lang.String clusterType) {
            this.clusterType = clusterType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceV2Props#getClusterType}
         * @param clusterType Property clusterType: Cluster type (i.e. instance specification). Enumeration values: SSD: High performance. HYBRID: Capacity type. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterType(com.aliyun.ros.cdk.core.IResolvable clusterType) {
            this.clusterType = clusterType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceV2Props#getInstanceName}
         * @param instanceName Property instanceName: Instance name.The naming specifications for instances are as follows: Must consist of English letters, numbers or dash lines (-). The first character must be in English letters. The end character cannot be a dash (-). Insensitive case. The length is between 3 and 16 characters. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceV2Props#getInstanceName}
         * @param instanceName Property instanceName: Instance name.The naming specifications for instances are as follows: Must consist of English letters, numbers or dash lines (-). The first character must be in English letters. The end character cannot be a dash (-). Insensitive case. The length is between 3 and 16 characters. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceV2Props#getInstanceDescription}
         * @param instanceDescription Property instanceDescription: Example description.
         *                            The length is limited to between 3-256 characters.
         * @return {@code this}
         */
        public Builder instanceDescription(java.lang.String instanceDescription) {
            this.instanceDescription = instanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link InstanceV2Props#getInstanceDescription}
         * @param instanceDescription Property instanceDescription: Example description.
         *                            The length is limited to between 3-256 characters.
         * @return {@code this}
         */
        public Builder instanceDescription(com.aliyun.ros.cdk.core.IResolvable instanceDescription) {
            this.instanceDescription = instanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link InstanceV2Props#getNetworkSourceAcl}
         * @param networkSourceAcl Property networkSourceAcl: The allowed-network source list.
         *                         All networks are allowed by default.
         * @return {@code this}
         */
        public Builder networkSourceAcl(com.aliyun.ros.cdk.core.IResolvable networkSourceAcl) {
            this.networkSourceAcl = networkSourceAcl;
            return this;
        }

        /**
         * Sets the value of {@link InstanceV2Props#getNetworkSourceAcl}
         * @param networkSourceAcl Property networkSourceAcl: The allowed-network source list.
         *                         All networks are allowed by default.
         * @return {@code this}
         */
        public Builder networkSourceAcl(java.util.List<? extends java.lang.Object> networkSourceAcl) {
            this.networkSourceAcl = networkSourceAcl;
            return this;
        }

        /**
         * Sets the value of {@link InstanceV2Props#getNetworkTypeAcl}
         * @param networkTypeAcl Property networkTypeAcl: The instance allows the network type list, which is allowed by default.
         * @return {@code this}
         */
        public Builder networkTypeAcl(com.aliyun.ros.cdk.core.IResolvable networkTypeAcl) {
            this.networkTypeAcl = networkTypeAcl;
            return this;
        }

        /**
         * Sets the value of {@link InstanceV2Props#getNetworkTypeAcl}
         * @param networkTypeAcl Property networkTypeAcl: The instance allows the network type list, which is allowed by default.
         * @return {@code this}
         */
        public Builder networkTypeAcl(java.util.List<? extends java.lang.Object> networkTypeAcl) {
            this.networkTypeAcl = networkTypeAcl;
            return this;
        }

        /**
         * Sets the value of {@link InstanceV2Props#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource Group ID.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceV2Props#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource Group ID.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceV2Props#getTags}
         * @param tags Property tags: The list of instance tags in the form of key/value pairs.
         *             You can define a maximum of 20 tags for instance.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ots.RosInstanceV2.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ots.RosInstanceV2.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link InstanceV2Props}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public InstanceV2Props build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link InstanceV2Props}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InstanceV2Props {
        private final java.lang.Object clusterType;
        private final java.lang.Object instanceName;
        private final java.lang.Object instanceDescription;
        private final java.lang.Object networkSourceAcl;
        private final java.lang.Object networkTypeAcl;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.ots.RosInstanceV2.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clusterType = software.amazon.jsii.Kernel.get(this, "clusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceDescription = software.amazon.jsii.Kernel.get(this, "instanceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkSourceAcl = software.amazon.jsii.Kernel.get(this, "networkSourceAcl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkTypeAcl = software.amazon.jsii.Kernel.get(this, "networkTypeAcl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ots.RosInstanceV2.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clusterType = java.util.Objects.requireNonNull(builder.clusterType, "clusterType is required");
            this.instanceName = java.util.Objects.requireNonNull(builder.instanceName, "instanceName is required");
            this.instanceDescription = builder.instanceDescription;
            this.networkSourceAcl = builder.networkSourceAcl;
            this.networkTypeAcl = builder.networkTypeAcl;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ots.RosInstanceV2.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getClusterType() {
            return this.clusterType;
        }

        @Override
        public final java.lang.Object getInstanceName() {
            return this.instanceName;
        }

        @Override
        public final java.lang.Object getInstanceDescription() {
            return this.instanceDescription;
        }

        @Override
        public final java.lang.Object getNetworkSourceAcl() {
            return this.networkSourceAcl;
        }

        @Override
        public final java.lang.Object getNetworkTypeAcl() {
            return this.networkTypeAcl;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ots.RosInstanceV2.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("clusterType", om.valueToTree(this.getClusterType()));
            data.set("instanceName", om.valueToTree(this.getInstanceName()));
            if (this.getInstanceDescription() != null) {
                data.set("instanceDescription", om.valueToTree(this.getInstanceDescription()));
            }
            if (this.getNetworkSourceAcl() != null) {
                data.set("networkSourceAcl", om.valueToTree(this.getNetworkSourceAcl()));
            }
            if (this.getNetworkTypeAcl() != null) {
                data.set("networkTypeAcl", om.valueToTree(this.getNetworkTypeAcl()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ots.InstanceV2Props"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            InstanceV2Props.Jsii$Proxy that = (InstanceV2Props.Jsii$Proxy) o;

            if (!clusterType.equals(that.clusterType)) return false;
            if (!instanceName.equals(that.instanceName)) return false;
            if (this.instanceDescription != null ? !this.instanceDescription.equals(that.instanceDescription) : that.instanceDescription != null) return false;
            if (this.networkSourceAcl != null ? !this.networkSourceAcl.equals(that.networkSourceAcl) : that.networkSourceAcl != null) return false;
            if (this.networkTypeAcl != null ? !this.networkTypeAcl.equals(that.networkTypeAcl) : that.networkTypeAcl != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.clusterType.hashCode();
            result = 31 * result + (this.instanceName.hashCode());
            result = 31 * result + (this.instanceDescription != null ? this.instanceDescription.hashCode() : 0);
            result = 31 * result + (this.networkSourceAcl != null ? this.networkSourceAcl.hashCode() : 0);
            result = 31 * result + (this.networkTypeAcl != null ? this.networkTypeAcl.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
